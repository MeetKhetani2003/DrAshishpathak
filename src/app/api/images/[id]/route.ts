import { NextRequest, NextResponse } from 'next/server';
import mongoose from 'mongoose';
import dbConnect from '@/lib/mongodb';

export async function GET(
  _request: NextRequest,
  props: { params: Promise<{ id: string }> }
) {
  try {
    await dbConnect();
    const params = await props.params;
    const id = params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return new NextResponse('Invalid image ID', { status: 400 });
    }

    const bucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db!, {
      bucketName: 'images'
    });

    const fileId = new mongoose.Types.ObjectId(id);
    const files = await bucket.find({ _id: fileId }).toArray();
    
    if (!files || files.length === 0) {
      return new NextResponse('Image not found', { status: 404 });
    }

    const stream = bucket.openDownloadStream(fileId);
    
    // We create a ReadableStream to pipe the GridFS download stream to the Next.js response
    const readableStream = new ReadableStream({
      start(controller) {
        stream.on('data', (chunk) => controller.enqueue(chunk));
        stream.on('end', () => controller.close());
        stream.on('error', (err) => controller.error(err));
      }
    });

    return new NextResponse(readableStream, {
      headers: {
        'Content-Type': files[0].metadata?.contentType || 'image/jpeg',
        'Cache-Control': 'public, max-age=31536000, immutable'
      }
    });
  } catch (error) {
    console.error('Error serving image:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

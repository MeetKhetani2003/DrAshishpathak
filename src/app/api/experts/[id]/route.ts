import { NextRequest, NextResponse } from 'next/server';
import mongoose from 'mongoose';
import dbConnect from '@/lib/mongodb';
import Expert from '@/models/Expert';

export async function PUT(
  request: NextRequest,
  props: { params: Promise<{ id: string }> }
) {
  try {
    await dbConnect();
    const params = await props.params;
    const id = params.id;
    const formData = await request.formData();
    
    const updateData: any = {};
    if (formData.has('name')) updateData.name = formData.get('name');
    if (formData.has('role')) updateData.role = formData.get('role');
    if (formData.has('experience')) updateData.experience = formData.get('experience');
    if (formData.has('initials')) updateData.initials = formData.get('initials');
    if (formData.has('jurisdiction')) updateData.jurisdiction = formData.get('jurisdiction');
    if (formData.has('qualifications')) updateData.qualifications = JSON.parse(formData.get('qualifications') as string);
    if (formData.has('practiceAreas')) updateData.practiceAreas = JSON.parse(formData.get('practiceAreas') as string);
    if (formData.has('bio')) updateData.bio = JSON.parse(formData.get('bio') as string);
    
    const imageFile = formData.get('image') as File | null;

    if (imageFile) {
      const bucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db!, {
        bucketName: 'images'
      });
      
      const buffer = Buffer.from(await imageFile.arrayBuffer());
      const uploadStream = bucket.openUploadStream(imageFile.name, {
        metadata: { contentType: imageFile.type }
      });
      
      uploadStream.end(buffer);
      
      await new Promise((resolve, reject) => {
        uploadStream.on('finish', resolve);
        uploadStream.on('error', reject);
      });
      
      updateData.image = `/api/images/${uploadStream.id}`;
    }

    const expert = await Expert.findByIdAndUpdate(id, updateData, { new: true });
    
    if (!expert) {
      return new NextResponse('Expert not found', { status: 404 });
    }

    return NextResponse.json(expert);
  } catch (error) {
    console.error('Error updating expert:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

export async function DELETE(
  _request: NextRequest,
  props: { params: Promise<{ id: string }> }
) {
  try {
    await dbConnect();
    const params = await props.params;
    const expert = await Expert.findByIdAndDelete(params.id);
    
    if (!expert) {
      return new NextResponse('Expert not found', { status: 404 });
    }

    // Optional: delete image from GridFS here by parsing the image URL and extracting the GridFS _id
    
    return new NextResponse('Deleted successfully', { status: 200 });
  } catch (error) {
    console.error('Error deleting expert:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

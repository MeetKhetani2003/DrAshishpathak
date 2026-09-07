import { NextRequest, NextResponse } from 'next/server';
import mongoose from 'mongoose';
import dbConnect from '@/lib/mongodb';
import Expert from '@/models/Expert';

export async function GET() {
  try {
    await dbConnect();
    const experts = await Expert.find({}).sort({ createdAt: 1 });
    return NextResponse.json(experts);
  } catch (error) {
    console.error('Error fetching experts:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    await dbConnect();
    const formData = await request.formData();
    
    // Parse form data
    const expertId = formData.get('expertId') as string;
    const name = formData.get('name') as string;
    const role = formData.get('role') as string;
    const experience = formData.get('experience') as string;
    const initials = formData.get('initials') as string;
    const jurisdiction = formData.get('jurisdiction') as string;
    const qualifications = JSON.parse(formData.get('qualifications') as string || '[]');
    const practiceAreas = JSON.parse(formData.get('practiceAreas') as string || '[]');
    const bio = JSON.parse(formData.get('bio') as string || '[]');
    const imageFile = formData.get('image') as File | null;
    
    let imageUrl = '';

    if (imageFile) {
      const bucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db!, {
        bucketName: 'images'
      });
      
      const buffer = Buffer.from(await imageFile.arrayBuffer());
      const uploadStream = bucket.openUploadStream(imageFile.name, {
        contentType: imageFile.type
      });
      
      uploadStream.end(buffer);
      
      await new Promise((resolve, reject) => {
        uploadStream.on('finish', resolve);
        uploadStream.on('error', reject);
      });
      
      imageUrl = `/api/images/${uploadStream.id}`;
    }

    const expert = new Expert({
      expertId,
      name,
      role,
      experience,
      initials,
      jurisdiction,
      qualifications,
      practiceAreas,
      bio,
      image: imageUrl
    });

    await expert.save();
    return NextResponse.json(expert, { status: 201 });
  } catch (error) {
    console.error('Error creating expert:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

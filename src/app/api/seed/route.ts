import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import dbConnect from '@/lib/mongodb';
import Expert from '@/models/Expert';
import { experts } from '@/data/experts';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    await dbConnect();
    
    // Clear existing
    await Expert.deleteMany({});
    
    const bucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db!, {
      bucketName: 'images'
    });

    for (const expert of experts) {
      let imageUrl = expert.image;
      
      // If there's an image path, let's try to upload it to GridFS
      if (expert.image && expert.image.startsWith('/images/')) {
        const imagePath = path.join(process.cwd(), 'public', expert.image);
        if (fs.existsSync(imagePath)) {
          const buffer = fs.readFileSync(imagePath);
          const fileName = path.basename(imagePath);
          
          const uploadStream = bucket.openUploadStream(fileName, {
            metadata: { contentType: "image/jpeg" } // assuming jpeg, maybe adjust if png
          });
          
          uploadStream.end(buffer);
          
          await new Promise((resolve, reject) => {
            uploadStream.on('finish', resolve);
            uploadStream.on('error', reject);
          });
          
          imageUrl = `/api/images/${uploadStream.id}`;
        }
      }

      const newExpert = new Expert({
        expertId: expert.id,
        name: expert.name,
        role: expert.role,
        experience: expert.experience,
        initials: expert.initials,
        qualifications: expert.qualifications,
        jurisdiction: expert.jurisdiction,
        practiceAreas: expert.practiceAreas,
        bio: expert.bio,
        image: imageUrl
      });

      await newExpert.save();
    }

    return NextResponse.json({ message: 'Seeded successfully' });
  } catch (error) {
    console.error('Error seeding experts:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

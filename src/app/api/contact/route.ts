import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import ContactInfo from '@/models/ContactInfo';

export async function GET() {
  try {
    await dbConnect();
    const contactInfo = await ContactInfo.findOne({});
    return NextResponse.json(contactInfo || {});
  } catch (error) {
    console.error('Error fetching contact info:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    await dbConnect();
    const data = await request.json();
    
    let contactInfo = await ContactInfo.findOne({});
    if (contactInfo) {
      contactInfo = await ContactInfo.findByIdAndUpdate(contactInfo._id, data, { new: true });
    } else {
      contactInfo = new ContactInfo(data);
      await contactInfo.save();
    }
    
    return NextResponse.json(contactInfo);
  } catch (error) {
    console.error('Error updating contact info:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

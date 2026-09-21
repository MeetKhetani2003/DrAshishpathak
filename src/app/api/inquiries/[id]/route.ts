import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Inquiry from '@/models/Inquiry';

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    await dbConnect();
    
    const inquiry = await Inquiry.findByIdAndDelete(params.id);
    
    if (!inquiry) {
      return new NextResponse('Inquiry not found', { status: 404 });
    }
    
    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error('Error deleting inquiry:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    await dbConnect();
    const data = await request.json();
    
    const inquiry = await Inquiry.findByIdAndUpdate(params.id, data, { new: true });
    
    if (!inquiry) {
      return new NextResponse('Inquiry not found', { status: 404 });
    }
    
    return NextResponse.json(inquiry);
  } catch (error) {
    console.error('Error updating inquiry:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Inquiry from '@/models/Inquiry';

export async function DELETE(_request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    await dbConnect();
    
    const inquiry = await Inquiry.findByIdAndDelete(id);
    
    if (!inquiry) {
      return new NextResponse('Inquiry not found', { status: 404 });
    }
    
    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error('Error deleting inquiry:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    await dbConnect();
    const data = await request.json();
    
    const inquiry = await Inquiry.findByIdAndUpdate(id, data, { new: true });
    
    if (!inquiry) {
      return new NextResponse('Inquiry not found', { status: 404 });
    }
    
    return NextResponse.json(inquiry);
  } catch (error) {
    console.error('Error updating inquiry:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

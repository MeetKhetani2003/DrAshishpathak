import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Service from '@/models/Service';

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    await dbConnect();
    const data = await request.json();
    
    const service = await Service.findByIdAndUpdate(id, data, { new: true });
    
    if (!service) {
      return new NextResponse('Service not found', { status: 404 });
    }
    
    return NextResponse.json(service);
  } catch (error) {
    console.error('Error updating service:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    await dbConnect();
    
    const service = await Service.findByIdAndDelete(id);
    
    if (!service) {
      return new NextResponse('Service not found', { status: 404 });
    }
    
    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error('Error deleting service:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

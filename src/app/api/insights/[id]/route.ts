import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Insight from '@/models/Insight';

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await dbConnect();
    const { id } = await params;
    const insight = await Insight.findById(id);
    if (!insight) {
      return new NextResponse('Not Found', { status: 404 });
    }
    return NextResponse.json(insight);
  } catch (error) {
    console.error('Error fetching insight:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await dbConnect();
    const data = await request.json();
    const { id } = await params;
    const insight = await Insight.findByIdAndUpdate(id, data, { new: true });
    
    if (!insight) {
      return new NextResponse('Not Found', { status: 404 });
    }
    
    return NextResponse.json(insight);
  } catch (error) {
    console.error('Error updating insight:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await dbConnect();
    const { id } = await params;
    const insight = await Insight.findByIdAndDelete(id);
    
    if (!insight) {
      return new NextResponse('Not Found', { status: 404 });
    }
    
    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error('Error deleting insight:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

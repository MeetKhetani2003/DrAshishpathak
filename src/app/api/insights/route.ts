import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Insight from '@/models/Insight';

export async function GET() {
  try {
    await dbConnect();
    const insights = await Insight.find({}).sort({ createdAt: -1 });
    return NextResponse.json(insights);
  } catch (error) {
    console.error('Error fetching insights:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    await dbConnect();
    const data = await request.json();
    
    // Auto-generate slug if not provided
    if (!data.slug && data.title) {
      data.slug = data.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    }

    const insight = new Insight(data);
    await insight.save();
    
    return NextResponse.json(insight, { status: 201 });
  } catch (error) {
    console.error('Error creating insight:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

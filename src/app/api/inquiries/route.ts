import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Inquiry from '@/models/Inquiry';
import nodemailer from 'nodemailer';

export async function GET() {
  try {
    await dbConnect();
    const inquiries = await Inquiry.find({}).sort({ createdAt: -1 });
    return NextResponse.json(inquiries);
  } catch (error) {
    console.error('Error fetching inquiries:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    await dbConnect();
    const data = await request.json();
    
    const inquiry = new Inquiry(data);
    await inquiry.save();
    
    // Send Email
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || '465'),
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const mailOptions = {
        from: process.env.SMTP_USER,
        to: process.env.SMTP_USER, // Send to the admin's email
        subject: `New Inquiry from ${data.name}: ${data.subject || 'No Subject'}`,
        text: `You have received a new inquiry.\n\nName: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone || 'N/A'}\n\nMessage:\n${data.message}`,
        html: `<p>You have received a new inquiry.</p>
               <p><strong>Name:</strong> ${data.name}</p>
               <p><strong>Email:</strong> ${data.email}</p>
               <p><strong>Phone:</strong> ${data.phone || 'N/A'}</p>
               <p><strong>Message:</strong><br/>${data.message.replace(/\n/g, '<br/>')}</p>`
      };

      await transporter.sendMail(mailOptions);
    } catch (emailError) {
      console.error('Error sending email:', emailError);
      // We still return 201 because the inquiry was saved to DB successfully
    }
    
    return NextResponse.json(inquiry, { status: 201 });
  } catch (error) {
    console.error('Error creating inquiry:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

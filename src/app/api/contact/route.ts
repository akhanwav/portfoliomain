import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
export async function POST(request: NextRequest) {
  try {
    const { to_email, from_name, from_email, project_type, message, reply_to } = await request.json();
    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: to_email,
      replyTo: reply_to,
      subject: `New Contact Form Submission - ${project_type}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${from_name}</p>
        <p><strong>Email:</strong> ${from_email}</p>
        <p><strong>Project Type:</strong> ${project_type}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };
    // Send email
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}

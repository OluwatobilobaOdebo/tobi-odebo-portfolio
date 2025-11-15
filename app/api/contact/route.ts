import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // In production, integrate an email service (SendGrid, Resend, Mailgun, etc.)
    // to actually send emails to tobiodebo4@gmail.com
    
    console.log('[v0] Contact form submission:', { name, email, subject, message });
    
    return NextResponse.json({ 
      success: true, 
      message: 'Message received'
    });
  } catch (error) {
    console.error('[v0] Contact form error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process message' },
      { status: 500 }
    );
  }
}

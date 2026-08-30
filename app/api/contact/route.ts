import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Please fill in all required fields (Name, Email, Subject, Message).' },
        { status: 400 }
      );
    }

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY || process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

    if (!accessKey) {
      return NextResponse.json(
        { 
          error: 'Web3Forms access key is not configured. Please add WEB3FORMS_ACCESS_KEY to .env.local',
          needKey: true 
        },
        { status: 500 }
      );
    }

    // Forward to Web3Forms API to deliver email directly to elevoncore@gmail.com
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        access_key: accessKey,
        name,
        email,
        company: company || 'N/A',
        phone: phone || 'N/A',
        subject: `[Elevon Core Website] ${subject}`,
        message,
        from_name: `${name} (Elevon Core Form)`,
      })
    });

    const result = await response.json();

    if (result.success) {
      return NextResponse.json({ success: true, message: 'Message sent successfully!' });
    } else {
      return NextResponse.json(
        { error: result.message || 'Failed to deliver message. Please try again.' },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred while sending your message.' },
      { status: 500 }
    );
  }
}

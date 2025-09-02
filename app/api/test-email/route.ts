import { NextRequest, NextResponse } from 'next/server';
import { emailService } from '../../lib/EmailService';

export async function POST(request: NextRequest) {
  try {
    console.log('Email API: Starting request processing');
    
    const body = await request.json();
    const { action, emailData } = body;
    
    console.log('Email API: Action received:', action);

    switch (action) {
      case 'send_test_email':
        console.log('Email API: Sending test email...');
        try {
          const testResult = await emailService.sendEmail(
            'icondumpsters@gmail.com',
            'Test Email from Icon Dumpsters',
            'This is a test email to verify the email service is working.',
            '<h1>Test Email</h1><p>This is a test email to verify the email service is working.</p>'
          );
          console.log('Email API: Test result:', testResult);
          return NextResponse.json({ 
            success: true, 
            message: 'Test email sent successfully! Check your email for the test message.' 
          });
        } catch (testError) {
          console.error('Email API: Test email error:', testError);
          return NextResponse.json({ 
            success: false, 
            message: `Test email failed: ${testError instanceof Error ? testError.message : 'Unknown error'}` 
          }, { status: 500 });
        }

      case 'send_custom_email':
        if (!emailData || !emailData.to || !emailData.subject) {
          return NextResponse.json({ success: false, message: 'Email data with to and subject required' }, { status: 400 });
        }
        
        const customResult = await emailService.sendEmail(
          emailData.to,
          emailData.subject,
          emailData.text || '',
          emailData.html
        );
        return NextResponse.json({ 
          success: true, 
          message: 'Custom email sent successfully' 
        });

      default:
        return NextResponse.json({ success: false, message: 'Invalid action' }, { status: 400 });
    }
  } catch (error) {
    console.error('Email API: General error:', error);
    return NextResponse.json({ 
      success: false, 
      message: `Internal server error: ${error instanceof Error ? error.message : 'Unknown error'}` 
    }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ 
    message: 'Email API endpoint is working',
    availableActions: [
      'send_test_email',
      'send_custom_email'
    ]
  });
}

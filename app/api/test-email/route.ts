import { NextRequest, NextResponse } from 'next/server';
import { emailService } from '../../services/EmailService';

export async function POST(request: NextRequest) {
  try {
    console.log('Email API: Starting request processing');
    
    const body = await request.json();
    const { action, emailData } = body;
    
    console.log('Email API: Action received:', action);

    switch (action) {
      case 'test_configuration':
        console.log('Email API: Testing email configuration...');
        try {
          const testResult = await emailService.testEmailConfiguration();
          console.log('Email API: Test result:', testResult);
          return NextResponse.json({ 
            success: testResult, 
            message: testResult ? 'Email configuration test successful! Check your email (jeremyuwg@gmail.com) for the test message.' : 'Email configuration test failed' 
          });
        } catch (testError) {
          console.error('Email API: Test configuration error:', testError);
          return NextResponse.json({ 
            success: false, 
            message: `Test configuration failed: ${testError instanceof Error ? testError.message : 'Unknown error'}` 
          }, { status: 500 });
        }

      case 'send_kpi_email':
        if (!emailData) {
          return NextResponse.json({ success: false, message: 'Email data required' }, { status: 400 });
        }
        
        const kpiResult = await emailService.sendKPIEmail(emailData);
        return NextResponse.json({ 
          success: kpiResult, 
          message: kpiResult ? 'KPI email sent successfully' : 'Failed to send KPI email' 
        });

      case 'send_custom_email':
        if (!emailData) {
          return NextResponse.json({ success: false, message: 'Email data required' }, { status: 400 });
        }
        
        const customResult = await emailService.sendEmail(emailData);
        return NextResponse.json({ 
          success: customResult, 
          message: customResult ? 'Custom email sent successfully' : 'Failed to send custom email' 
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
      'test_configuration',
      'send_kpi_email', 
      'send_custom_email'
    ]
  });
}

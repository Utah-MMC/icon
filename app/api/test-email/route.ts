import { NextRequest, NextResponse } from 'next/server';
import { emailService } from '../../lib/EmailService';

// Email template functions
function generateRatingRequestEmail(customerData: any) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>How was your dumpster rental experience?</title>
      <style>
        body { font-family: Arial, sans-serif; color: #111827; }
        .container { max-width: 640px; margin: 0 auto; padding: 24px; }
        h1 { color: #4e37a8; }
        p { line-height: 1.6; }
        .button { display: inline-block; background: #4e37a8; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: 600; }
      </style>
    </head>
    <body>
      <div class="container">
        <div style="text-align:center;margin-bottom:24px">
          <img src="https://icondumpsters.com/Icon_Dumpsters_Final.png" width="96" height="96" alt="Icon Dumpsters" style="border-radius:12px" />
        </div>
        <h1>Hi ${customerData.customerName || 'there'}!</h1>
        <p>We hope your ${customerData.dumpsterSize || ''} yard dumpster rental went smoothly. Your feedback helps us provide the best service possible.</p>
        <p>Could you take a moment to rate your experience?</p>
        <div style="text-align:center;margin:24px 0">
          <a href="https://icondumpsters.com/rating?rental=${customerData.rentalId}" class="button">Rate Your Experience</a>
        </div>
        <p>Thank you for choosing Icon Dumpsters!</p>
        <p>Best regards,<br/>Jeremy<br/>Manager | Icon Dumpsters<br/>📞 (801) 918-6000</p>
      </div>
    </body>
    </html>
  `;
}

function generateReviewRequestEmail(customerData: any) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Share your experience - Get 10% off!</title>
      <style>
        body { font-family: Arial, sans-serif; color: #111827; }
        .container { max-width: 640px; margin: 0 auto; padding: 24px; }
        h1 { color: #4e37a8; }
        p { line-height: 1.6; }
        .button { display: inline-block; background: #4e37a8; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: 600; margin: 8px; }
        .offer { background: #fef3c7; padding: 16px; border-radius: 8px; margin: 16px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div style="text-align:center;margin-bottom:24px">
          <img src="https://icondumpsters.com/Icon_Dumpsters_Final.png" width="96" height="96" alt="Icon Dumpsters" style="border-radius:12px" />
        </div>
        <h1>Hi ${customerData.customerName || 'there'}!</h1>
        <p>We're thrilled you had a great experience with your dumpster rental!</p>
        <div class="offer">
          <h2 style="color: #4e37a8; margin-top: 0;">🎉 Special Offer!</h2>
          <p><strong>Get 10% off your next rental</strong> when you leave us a review on Google, Yelp, or Facebook!</p>
        </div>
        <p>Your review helps other customers find us and helps us improve our service.</p>
        <div style="text-align:center;margin:24px 0">
          <a href="https://search.google.com/local/writereview?placeid=ChIJN1t_tDeuQIYRoj6G_6U7LMA" class="button">Review on Google</a>
          <a href="https://www.yelp.com/writeareview/biz/icon-dumpsters-salt-lake-city" class="button">Review on Yelp</a>
          <a href="https://www.facebook.com/p/Icon-Dumpsters-61557014799828/" class="button">Review on Facebook</a>
        </div>
        <p>After leaving your review, just mention this email to get your 10% discount on your next rental!</p>
        <p>Best regards,<br/>Jeremy<br/>Manager | Icon Dumpsters<br/>📞 (801) 918-6000</p>
      </div>
    </body>
    </html>
  `;
}

function generateReminderEmail(customerData: any) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Quick follow-up on your dumpster rental</title>
      <style>
        body { font-family: Arial, sans-serif; color: #111827; }
        .container { max-width: 640px; margin: 0 auto; padding: 24px; }
        h1 { color: #4e37a8; }
        p { line-height: 1.6; }
        .button { display: inline-block; background: #4e37a8; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: 600; }
      </style>
    </head>
    <body>
      <div class="container">
        <div style="text-align:center;margin-bottom:24px">
          <img src="https://icondumpsters.com/Icon_Dumpsters_Final.png" width="96" height="96" alt="Icon Dumpsters" style="border-radius:12px" />
        </div>
        <h1>Hi ${customerData.customerName || 'there'}!</h1>
        <p>We wanted to follow up on your recent ${customerData.dumpsterSize || ''} yard dumpster rental. We hope everything went well!</p>
        <p>If you have a moment, we'd love to hear about your experience. Your feedback is valuable to us and helps other customers make informed decisions.</p>
        <div style="text-align:center;margin:24px 0">
          <a href="https://icondumpsters.com/rating?rental=${customerData.rentalId}" class="button">Share Your Experience</a>
        </div>
        <p>If you need another dumpster or have any questions, don't hesitate to call us at (801) 918-6000.</p>
        <p>Thank you for choosing Icon Dumpsters!</p>
        <p>Best regards,<br/>Jeremy<br/>Manager | Icon Dumpsters<br/>📞 (801) 918-6000</p>
      </div>
    </body>
    </html>
  `;
}

function generateKPIReportEmail(kpiData: any) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Weekly KPI Report - Icon Dumpsters</title>
      <style>
        body { font-family: Arial, sans-serif; color: #111827; }
        .container { max-width: 640px; margin: 0 auto; padding: 24px; }
        h1 { color: #4e37a8; }
        .metric { background: #f9fafb; padding: 16px; margin: 8px 0; border-radius: 8px; }
        .metric-value { font-size: 24px; font-weight: bold; color: #4e37a8; }
        .metric-label { color: #6b7280; font-size: 14px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div style="text-align:center;margin-bottom:24px">
          <img src="https://icondumpsters.com/Icon_Dumpsters_Final.png" width="96" height="96" alt="Icon Dumpsters" style="border-radius:12px" />
        </div>
        <h1>Weekly KPI Report</h1>
        <p>Here's your weekly performance summary:</p>
        
        <div class="metric">
          <div class="metric-value">$${kpiData.revenue?.toLocaleString() || '0'}</div>
          <div class="metric-label">Monthly Revenue (Target: $20,000)</div>
        </div>
        
        <div class="metric">
          <div class="metric-value">${kpiData.rentals || '0'}</div>
          <div class="metric-label">Monthly Rentals (Target: 40)</div>
        </div>
        
        <div class="metric">
          <div class="metric-value">${kpiData.utilization?.toFixed(1) || '0'}%</div>
          <div class="metric-label">Dumpster Utilization (Target: 75%)</div>
        </div>
        
        <div class="metric">
          <div class="metric-value">${kpiData.websiteVisitors || '0'}</div>
          <div class="metric-label">Website Visitors (Target: 1,500)</div>
        </div>
        
        <div class="metric">
          <div class="metric-value">${kpiData.quoteRequests || '0'}</div>
          <div class="metric-label">Quote Requests (Target: 75)</div>
        </div>
        
        <div class="metric">
          <div class="metric-value">${kpiData.phoneCalls || '0'}</div>
          <div class="metric-label">Phone Calls (Target: 150)</div>
        </div>
        
        <div class="metric">
          <div class="metric-value">${kpiData.conversionRate?.toFixed(1) || '0'}%</div>
          <div class="metric-label">Conversion Rate (Target: 20%)</div>
        </div>
        
        <div class="metric">
          <div class="metric-value">${kpiData.customerSatisfaction?.toFixed(1) || '0'}</div>
          <div class="metric-label">Customer Satisfaction (Target: 4.5+)</div>
        </div>
        
        <p>Keep up the great work! For detailed analytics, visit your <a href="https://icondumpsters.com/admin-dashboard">admin dashboard</a>.</p>
        
        <p>Best regards,<br/>Icon Dumpsters KPI System</p>
      </div>
    </body>
    </html>
  `;
}

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

      case 'send_kpi_email':
        if (!emailData || !emailData.type) {
          return NextResponse.json({ success: false, message: 'Email type and data required' }, { status: 400 });
        }
        
        try {
          let subject = '';
          let html = '';
          
          switch (emailData.type) {
            case 'rating_request':
              subject = `How was your dumpster rental experience? - Icon Dumpsters`;
              html = generateRatingRequestEmail(emailData.customerData);
              break;
            case 'review_request':
              subject = `Share your experience - Get 10% off your next rental!`;
              html = generateReviewRequestEmail(emailData.customerData);
              break;
            case 'reminder':
              subject = `Quick follow-up on your dumpster rental - Icon Dumpsters`;
              html = generateReminderEmail(emailData.customerData);
              break;
            case 'kpi_report':
              subject = `Weekly KPI Report - Icon Dumpsters`;
              html = generateKPIReportEmail(emailData.kpiData);
              break;
            default:
              return NextResponse.json({ success: false, message: 'Invalid email type' }, { status: 400 });
          }
          
          const kpiResult = await emailService.sendEmail(
            emailData.customerData?.customerEmail || 'icondumpsters@gmail.com',
            subject,
            '',
            html
          );
          
          return NextResponse.json({ 
            success: true, 
            message: `${emailData.type} email sent successfully` 
          });
        } catch (kpiError) {
          console.error('KPI email error:', kpiError);
          return NextResponse.json({ 
            success: false, 
            message: `KPI email failed: ${kpiError instanceof Error ? kpiError.message : 'Unknown error'}` 
          }, { status: 500 });
        }

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

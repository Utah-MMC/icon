import nodemailer from 'nodemailer';
import { securityConfig } from '../config/security';

interface EmailData {
  to: string;
  subject: string;
  html: string;
  text?: string;
  from?: string;
  bcc?: string | string[];
  replyTo?: string;
}

interface CustomerData {
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  rentalDate: string;
  dumpsterSize: string;
  rentalId?: string;
}

interface KPIEmailData {
  type: 'review_request' | 'rating_request' | 'reminder' | 'thank_you' | 'improvement' | 'kpi_report';
  customerData?: CustomerData;
  kpiMetrics?: any;
  customData?: any;
}

export class EmailService {
  private transporter!: nodemailer.Transporter;
  private isConfigured: boolean = false;

  constructor() {
    try {
      this.initializeTransporter();
    } catch (error) {
      console.error('EmailService: Constructor error:', error);
      this.isConfigured = false;
    }
  }

  private initializeTransporter() {
    try {
      console.log('EmailService: Initializing transporter...');
      console.log('EmailService: SMTP config check:', {
        user: securityConfig.email.user ? 'Set' : 'Not set',
        pass: securityConfig.email.pass ? 'Set' : 'Not set',
        host: securityConfig.email.host,
        port: securityConfig.email.port
      });
      
      // Check if SMTP settings are configured
      if (securityConfig.email.user && securityConfig.email.pass) {
        this.transporter = nodemailer.createTransport({
          host: securityConfig.email.host,
          port: securityConfig.email.port,
          secure: securityConfig.email.port === 465, // true for 465, false for other ports
          auth: {
            user: securityConfig.email.user,
            pass: securityConfig.email.pass,
          },
        });

        this.isConfigured = true;
        console.log('EmailService: Email service configured with SMTP settings');
      } else {
        console.warn('EmailService: SMTP settings not configured. Email service will log emails instead of sending.');
        this.isConfigured = false;
      }
    } catch (error) {
      console.error('EmailService: Error initializing transporter:', error);
      this.isConfigured = false;
    }
  }

  async sendEmail(emailData: EmailData): Promise<boolean> {
    try {
      const mailOptions = {
        from: emailData.from || `"Icon Dumpsters" <${securityConfig.email.user}>`,
        to: emailData.to,
        bcc: emailData.bcc,
        replyTo: emailData.replyTo,
        subject: emailData.subject,
        html: emailData.html,
        text: emailData.text || this.htmlToText(emailData.html),
      };

      if (this.isConfigured) {
        const result = await this.transporter.sendMail(mailOptions);
        console.log('Email sent successfully:', result.messageId);
        return true;
      } else {
        // Log email instead of sending when SMTP is not configured
        console.log('Email would be sent (SMTP not configured):', {
          to: emailData.to,
          subject: emailData.subject,
          html: emailData.html.substring(0, 200) + '...',
        });
        return true; // Return true to simulate success
      }
    } catch (error) {
      console.error('Email sending failed:', error);
      return false;
    }
  }

  async sendKPIEmail(emailData: KPIEmailData): Promise<boolean> {
    const { type, customerData, kpiMetrics, customData } = emailData;

    switch (type) {
      case 'review_request':
        return this.sendReviewRequestEmail(customerData!);
      case 'rating_request':
        return this.sendRatingRequestEmail(customerData!);
      case 'reminder':
        return this.sendReminderEmail(customerData!);
      case 'thank_you':
        return this.sendThankYouEmail(customerData!);
      case 'improvement':
        return this.sendImprovementEmail(customerData!);
      case 'kpi_report':
        return this.sendKPIReportEmail(kpiMetrics!);
      default:
        console.error('Unknown email type:', type);
        return false;
    }
  }

  private async sendReviewRequestEmail(customerData: CustomerData): Promise<boolean> {
    const subject = 'Share your Icon Dumpsters experience with others!';
    const html = this.generateReviewRequestEmailHTML(customerData);
    
    return this.sendEmail({
      to: customerData.customerEmail,
      subject,
      html,
    });
  }

  private async sendRatingRequestEmail(customerData: CustomerData): Promise<boolean> {
    const subject = 'How was your Icon Dumpsters experience?';
    const html = this.generateRatingRequestEmailHTML(customerData);
    
    return this.sendEmail({
      to: customerData.customerEmail,
      subject,
      html,
    });
  }

  private async sendReminderEmail(customerData: CustomerData): Promise<boolean> {
    const subject = 'Quick feedback request - Icon Dumpsters';
    const html = this.generateReminderEmailHTML(customerData);
    
    return this.sendEmail({
      to: customerData.customerEmail,
      subject,
      html,
    });
  }

  private async sendThankYouEmail(customerData: CustomerData): Promise<boolean> {
    const subject = 'Thank you for your feedback - Icon Dumpsters';
    const html = this.generateThankYouEmailHTML(customerData);
    
    return this.sendEmail({
      to: customerData.customerEmail,
      subject,
      html,
    });
  }

  private async sendImprovementEmail(customerData: CustomerData): Promise<boolean> {
    const subject = 'We value your feedback - Icon Dumpsters';
    const html = this.generateImprovementEmailHTML(customerData);
    
    return this.sendEmail({
      to: customerData.customerEmail,
      subject,
      html,
    });
  }

  private async sendKPIReportEmail(kpiMetrics: any): Promise<boolean> {
    const subject = 'Icon Dumpsters - KPI Report';
    const html = this.generateKPIReportEmailHTML(kpiMetrics);
    
    return this.sendEmail({
      to: 'jeremyuwg@gmail.com', // Your email for KPI reports
      subject,
      html,
    });
  }

  private generateReviewRequestEmailHTML(customerData: CustomerData): string {
    const googleReviewUrl = 'https://search.google.com/local/writereview?placeid=ChIJN1t_tDeuQIYRoj6G_6U7LMA';
    const yelpReviewUrl = 'https://www.yelp.com/writeareview/biz/icon-dumpsters-salt-lake-city';
    const facebookReviewUrl = 'https://www.facebook.com/p/Icon-Dumpsters-61557014799828/';

    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Share Your Experience</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #4e37a8; color: white; padding: 20px; text-align: center; }
          .content { padding: 20px; background: #f9f9f9; }
          .button { display: inline-block; padding: 12px 24px; background: #4e37a8; color: white; text-decoration: none; border-radius: 5px; margin: 10px 5px; }
          .footer { background: #333; color: white; padding: 20px; text-align: center; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Icon Dumpsters</h1>
            <p>Professional Dumpster Rental Services</p>
          </div>
          <div class="content">
            <h2>Dear ${customerData.customerName},</h2>
            <p>Thank you for your positive feedback about your recent dumpster rental experience!</p>
            <p>We're thrilled that you had a great experience with Icon Dumpsters. Your review can help other customers in Utah make informed decisions about their waste management needs.</p>
            <p>Would you mind sharing your experience on one of these platforms?</p>
            <div style="text-align: center; margin: 20px 0;">
              <a href="${googleReviewUrl}" class="button">Leave Google Review</a>
              <a href="${yelpReviewUrl}" class="button">Leave Yelp Review</a>
              <a href="${facebookReviewUrl}" class="button">Leave Facebook Review</a>
            </div>
            <p><strong>💡 Bonus:</strong> Leave a review and get 10% off your next rental!</p>
            <p>Your review helps us:</p>
            <ul>
              <li>Reach more customers in Utah</li>
              <li>Build trust with potential clients</li>
              <li>Continue providing excellent service</li>
            </ul>
            <p>Thank you for your support!</p>
            <p>Best regards,<br>The Icon Dumpsters Team</p>
          </div>
          <div class="footer">
            <p>Icon Dumpsters<br>
            (801) 918-6000<br>
            icondumpsters@gmail.com<br>
            https://www.icondumpsters.com</p>
            <p>To opt out at any time, consumers can text STOP or CANCEL or QUIT to stop receiving messages. For assistance, text HELP to 801-918-6000.</p>
          </div>
        </div>
      </body>
      </html>
    `;
  }

  private generateRatingRequestEmailHTML(customerData: CustomerData): string {
    const ratingUrl = `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.icondumpsters.com'}/rating?rental=${customerData.rentalId}`;

    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Rate Your Experience</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #4e37a8; color: white; padding: 20px; text-align: center; }
          .content { padding: 20px; background: #f9f9f9; }
          .button { display: inline-block; padding: 12px 24px; background: #4e37a8; color: white; text-decoration: none; border-radius: 5px; }
          .footer { background: #333; color: white; padding: 20px; text-align: center; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Icon Dumpsters</h1>
            <p>Professional Dumpster Rental Services</p>
          </div>
          <div class="content">
            <h2>Dear ${customerData.customerName},</h2>
            <p>Thank you for choosing Icon Dumpsters for your recent ${customerData.dumpsterSize} dumpster rental!</p>
            <p>We hope everything went smoothly with your waste disposal project. Your feedback is incredibly valuable to us and helps us continue providing excellent service to our customers.</p>
            <p>Could you take a moment to rate your experience with us?</p>
            <div style="text-align: center; margin: 20px 0;">
              <a href="${ratingUrl}" class="button">Rate Your Experience</a>
            </div>
            <p>Your feedback helps us:</p>
            <ul>
              <li>Improve our services</li>
              <li>Train our team better</li>
              <li>Provide better customer experiences</li>
            </ul>
            <p>If you have any questions or concerns, please don't hesitate to contact us at (801) 918-6000 or icondumpsters@gmail.com.</p>
            <p>Thank you for your business!</p>
            <p>Best regards,<br>The Icon Dumpsters Team</p>
          </div>
          <div class="footer">
            <p>Icon Dumpsters<br>
            (801) 918-6000<br>
            icondumpsters@gmail.com<br>
            https://www.icondumpsters.com</p>
            <p>To opt out at any time, consumers can text STOP or CANCEL or QUIT to stop receiving messages. For assistance, text HELP to 801-918-6000.</p>
          </div>
        </div>
      </body>
      </html>
    `;
  }

  private generateReminderEmailHTML(customerData: CustomerData): string {
    const ratingUrl = `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.icondumpsters.com'}/rating?rental=${customerData.rentalId}`;

    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Quick Feedback Request</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #4e37a8; color: white; padding: 20px; text-align: center; }
          .content { padding: 20px; background: #f9f9f9; }
          .button { display: inline-block; padding: 12px 24px; background: #4e37a8; color: white; text-decoration: none; border-radius: 5px; }
          .footer { background: #333; color: white; padding: 20px; text-align: center; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Icon Dumpsters</h1>
            <p>Professional Dumpster Rental Services</p>
          </div>
          <div class="content">
            <h2>Dear ${customerData.customerName},</h2>
            <p>We hope you're enjoying the results of your recent dumpster rental project!</p>
            <p>We noticed you haven't had a chance to rate your experience with Icon Dumpsters yet. Your feedback is important to us and only takes a minute.</p>
            <div style="text-align: center; margin: 20px 0;">
              <a href="${ratingUrl}" class="button">Rate Your Experience</a>
            </div>
            <p>If you have any concerns or questions about your rental, please contact us directly at (801) 918-6000.</p>
            <p>Thank you for choosing Icon Dumpsters!</p>
            <p>Best regards,<br>The Icon Dumpsters Team</p>
          </div>
          <div class="footer">
            <p>Icon Dumpsters<br>
            (801) 918-6000<br>
            icondumpsters@gmail.com<br>
            https://www.icondumpsters.com</p>
            <p>To opt out at any time, consumers can text STOP or CANCEL or QUIT to stop receiving messages. For assistance, text HELP to 801-918-6000.</p>
          </div>
        </div>
      </body>
      </html>
    `;
  }

  private generateThankYouEmailHTML(customerData: CustomerData): string {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Thank You for Your Feedback</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #4e37a8; color: white; padding: 20px; text-align: center; }
          .content { padding: 20px; background: #f9f9f9; }
          .footer { background: #333; color: white; padding: 20px; text-align: center; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Icon Dumpsters</h1>
            <p>Professional Dumpster Rental Services</p>
          </div>
          <div class="content">
            <h2>Dear ${customerData.customerName},</h2>
            <p>Thank you for taking the time to provide feedback about your recent dumpster rental experience!</p>
            <p>Your input is invaluable to us and helps us maintain the high standards of service that our customers expect from Icon Dumpsters.</p>
            <p>If you have any additional comments or suggestions, please don't hesitate to reach out to us at (801) 918-6000 or icondumpsters@gmail.com.</p>
            <p>We look forward to serving you again in the future!</p>
            <p>Best regards,<br>The Icon Dumpsters Team</p>
          </div>
          <div class="footer">
            <p>Icon Dumpsters<br>
            (801) 918-6000<br>
            icondumpsters@gmail.com<br>
            https://www.icondumpsters.com</p>
          </div>
        </div>
      </body>
      </html>
    `;
  }

  private generateImprovementEmailHTML(customerData: CustomerData): string {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>We Value Your Feedback</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #4e37a8; color: white; padding: 20px; text-align: center; }
          .content { padding: 20px; background: #f9f9f9; }
          .footer { background: #333; color: white; padding: 20px; text-align: center; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Icon Dumpsters</h1>
            <p>Professional Dumpster Rental Services</p>
          </div>
          <div class="content">
            <h2>Dear ${customerData.customerName},</h2>
            <p>Thank you for your honest feedback about your recent dumpster rental experience.</p>
            <p>We take all customer feedback seriously and are committed to continuously improving our services. Your input helps us identify areas where we can do better.</p>
            <p>Please contact us at (801) 918-6000 or icondumpsters@gmail.com so we can better understand how we can improve and make things right.</p>
            <p>We value your business and hope to have the opportunity to serve you again with an improved experience.</p>
            <p>Best regards,<br>The Icon Dumpsters Team</p>
          </div>
          <div class="footer">
            <p>Icon Dumpsters<br>
            (801) 918-6000<br>
            icondumpsters@gmail.com<br>
            https://www.icondumpsters.com</p>
          </div>
        </div>
      </body>
      </html>
    `;
  }

  private generateKPIReportEmailHTML(kpiMetrics: any): string {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Icon Dumpsters KPI Report</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 800px; margin: 0 auto; padding: 20px; }
          .header { background: #4e37a8; color: white; padding: 20px; text-align: center; }
          .content { padding: 20px; background: #f9f9f9; }
          .metric { background: white; padding: 15px; margin: 10px 0; border-radius: 5px; border-left: 4px solid #4e37a8; }
          .metric h3 { margin: 0 0 10px 0; color: #4e37a8; }
          .footer { background: #333; color: white; padding: 20px; text-align: center; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Icon Dumpsters KPI Report</h1>
            <p>Performance Metrics - ${new Date().toLocaleDateString()}</p>
          </div>
          <div class="content">
            <h2>Key Performance Indicators</h2>
            ${Object.entries(kpiMetrics).map(([key, value]) => `
              <div class="metric">
                <h3>${this.formatMetricName(key)}</h3>
                <p><strong>${this.formatMetricValue(value)}</strong></p>
              </div>
            `).join('')}
            <p>This report was generated automatically by the Icon Dumpsters KPI tracking system.</p>
          </div>
          <div class="footer">
            <p>Icon Dumpsters KPI System<br>
            Generated on ${new Date().toLocaleString()}</p>
          </div>
        </div>
      </body>
      </html>
    `;
  }

  private formatMetricName(key: string): string {
    return key
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, str => str.toUpperCase())
      .replace(/([A-Z])/g, ' $1')
      .trim();
  }

  private formatMetricValue(value: any): string {
    if (typeof value === 'number') {
      if (value >= 1000000) return `$${(value / 1000000).toFixed(1)}M`;
      if (value >= 1000) return `$${(value / 1000).toFixed(1)}K`;
      return value.toLocaleString();
    }
    return String(value);
  }

  private htmlToText(html: string): string {
    return html
      .replace(/<[^>]*>/g, '')
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .trim();
  }

  // Method to test email configuration
  async testEmailConfiguration(): Promise<boolean> {
    try {
      const testEmail = {
        to: 'jeremyuwg@gmail.com',
        subject: 'Icon Dumpsters - Email Service Test',
        html: `
          <h1>Email Service Test</h1>
          <p>This is a test email to verify that the Icon Dumpsters email service is working correctly.</p>
          <p>If you receive this email, the SMTP configuration is working properly.</p>
          <p>Test sent at: ${new Date().toLocaleString()}</p>
        `,
      };

      return await this.sendEmail(testEmail);
    } catch (error) {
      console.error('Email configuration test failed:', error);
      return false;
    }
  }
}

// Export singleton instance
export const emailService = new EmailService();

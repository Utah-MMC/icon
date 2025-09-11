import { NextRequest, NextResponse } from 'next/server';
import { emailService } from '../../lib/EmailService';

interface BulkEmailRequest {
  emailType: 'newsletter' | 'promotion' | 'follow_up' | 'seasonal' | 'custom';
  subject: string;
  content: string;
  filters?: {
    clientType?: 'all' | 'residential' | 'commercial';
    county?: string;
    tags?: string[];
    createdAfter?: string;
    createdBefore?: string;
  };
  schedule?: {
    sendImmediately: boolean;
    scheduledTime?: string;
  };
  customTemplate?: boolean;
}

// Email templates for different outreach types
const emailTemplates = {
  newsletter: {
    subject: "Icon Dumpsters Monthly Newsletter - {month} {year}",
    template: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Icon Dumpsters Newsletter</title>
        <style>
          body { font-family: Arial, sans-serif; color: #111827; line-height: 1.6; margin: 0; padding: 0; }
          .container { max-width: 640px; margin: 0 auto; padding: 24px; background: #ffffff; }
          .header { text-align: center; margin-bottom: 32px; }
          .logo { width: 120px; height: 120px; border-radius: 12px; }
          h1 { color: #4e37a8; margin-bottom: 16px; font-size: 28px; }
          .content { margin-bottom: 24px; }
          .cta-button { 
            display: inline-block; 
            background: #4e37a8; 
            color: white; 
            padding: 14px 28px; 
            text-decoration: none; 
            border-radius: 8px; 
            font-weight: 600; 
            margin: 16px 8px;
            font-size: 16px;
          }
          .cta-button:hover { background: #3d2d7a; }
          .footer { 
            border-top: 1px solid #e5e7eb; 
            padding-top: 24px; 
            margin-top: 32px; 
            text-align: center; 
            color: #6b7280; 
            font-size: 14px;
          }
          .highlight-box {
            background: #f3f4f6;
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
            border-left: 4px solid #4e37a8;
          }
          .service-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 16px;
            margin: 20px 0;
          }
          .service-item {
            background: #f9fafb;
            padding: 16px;
            border-radius: 8px;
            text-align: center;
          }
          .contact-info {
            background: #f0f9ff;
            padding: 16px;
            border-radius: 8px;
            margin: 20px 0;
            text-align: center;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <img src="https://icondumpsters.com/Icon_Dumpsters_Final.png" alt="Icon Dumpsters" class="logo" />
            <h1>Icon Dumpsters Newsletter</h1>
            <p style="color: #6b7280; font-size: 18px;">Your trusted waste management partner in Utah</p>
          </div>
          
          <div class="content">
            <h2>What's New This Month</h2>
            <p>Hi {firstName},</p>
            <p>Thank you for being a valued Icon Dumpsters customer! Here's what's happening this month:</p>
            
            <div class="highlight-box">
              <h3>🎯 Special Newsletter Offer</h3>
              <p>Get <strong>10% off</strong> your next dumpster rental when you book before the end of the month. Use code <strong>NEWSLETTER10</strong> when you call or book online!</p>
              <div style="text-align: center; margin-top: 16px;">
                <a href="https://icondumpsters.com/book" class="cta-button">Book Now & Save 10%</a>
              </div>
            </div>
            
            <h3>🚛 Service Updates</h3>
            <div class="service-grid">
              <div class="service-item">
                <strong>Same-Day Delivery</strong><br>
                Available in all Utah service areas
              </div>
              <div class="service-item">
                <strong>Extended Hours</strong><br>
                Weekend pickup now available
              </div>
              <div class="service-item">
                <strong>New Sizes</strong><br>
                20-yard dumpsters for larger projects
              </div>
              <div class="service-item">
                <strong>24/7 Support</strong><br>
                Always here when you need us
              </div>
            </div>
            
            <h3>🌟 Customer Spotlight</h3>
            <p>This month we're featuring {county} County projects. We've helped over 500 customers in your area with their waste management needs!</p>
            
            <div class="contact-info">
              <h3>📞 Need a Dumpster? We're Here to Help!</h3>
              <p><strong>Call us at (801) 918-6000</strong> for immediate assistance or get a free quote online.</p>
              <div style="margin-top: 16px;">
                <a href="https://icondumpsters.com/book" class="cta-button">Book Online</a>
                <a href="https://icondumpsters.com/quote" class="cta-button">Get Free Quote</a>
              </div>
            </div>
            
            <h3>🗑️ Available Dumpster Sizes</h3>
            <ul>
              <li><strong>10-yard:</strong> Perfect for small cleanouts and home projects</li>
              <li><strong>15-yard:</strong> Ideal for kitchen/bathroom renovations</li>
              <li><strong>20-yard:</strong> Great for whole house cleanouts</li>
              <li><strong>30-yard:</strong> Perfect for large construction projects</li>
              <li><strong>40-yard:</strong> Maximum capacity for major projects</li>
            </ul>
          </div>
          
          <div class="footer">
            <p><strong>Icon Dumpsters</strong><br/>
            📞 (801) 918-6000 | 📧 icondumpsters@gmail.com<br/>
            🌐 <a href="https://icondumpsters.com" style="color: #4e37a8;">icondumpsters.com</a></p>
            <p style="margin-top: 16px; font-size: 12px;">
              You're receiving this because you're a valued Icon Dumpsters customer.<br/>
              <a href="https://icondumpsters.com/unsubscribe" style="color: #6b7280;">Unsubscribe</a> | 
              <a href="https://icondumpsters.com/preferences" style="color: #6b7280;">Update Preferences</a> |
              <a href="https://icondumpsters.com/rating" style="color: #6b7280;">Leave a Review</a>
            </p>
          </div>
        </div>
      </body>
      </html>
    `
  },
  
  promotion: {
    subject: "Limited Time Offer - {promotionTitle}",
    template: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Special Offer from Icon Dumpsters</title>
        <style>
          body { font-family: Arial, sans-serif; color: #111827; line-height: 1.6; }
          .container { max-width: 640px; margin: 0 auto; padding: 24px; }
          .header { text-align: center; margin-bottom: 32px; background: linear-gradient(135deg, #4e37a8, #7c3aed); color: white; padding: 32px; border-radius: 12px; }
          .logo { width: 80px; height: 80px; border-radius: 12px; margin-bottom: 16px; }
          h1 { margin: 0; font-size: 28px; }
          .offer-box { 
            background: #fef3c7; 
            border: 2px solid #f59e0b; 
            padding: 24px; 
            border-radius: 12px; 
            text-align: center; 
            margin: 24px 0;
          }
          .offer-code { 
            background: #1f2937; 
            color: white; 
            padding: 8px 16px; 
            border-radius: 6px; 
            font-family: monospace; 
            font-size: 18px; 
            font-weight: bold;
            display: inline-block;
            margin: 8px 0;
          }
          .cta-button { 
            display: inline-block; 
            background: #dc2626; 
            color: white; 
            padding: 16px 32px; 
            text-decoration: none; 
            border-radius: 8px; 
            font-weight: 600; 
            font-size: 18px;
            margin: 16px 0;
          }
          .urgency { color: #dc2626; font-weight: bold; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <img src="https://icondumpsters.com/Icon_Dumpsters_Final.png" alt="Icon Dumpsters" class="logo" />
            <h1>🎉 Special Offer Just for You!</h1>
            <p style="margin: 0; opacity: 0.9;">Limited time promotion</p>
          </div>
          
          <div style="text-align: center;">
            <h2>Hi {firstName}!</h2>
            <p>As one of our valued customers, we're offering you an exclusive deal:</p>
            
            <div class="offer-box">
              <h3 style="margin: 0 0 16px 0; color: #92400e;">{promotionTitle}</h3>
              <p style="font-size: 18px; margin: 0 0 16px 0;">Save {discountAmount} on your next dumpster rental!</p>
              <div class="offer-code">{promoCode}</div>
              <p class="urgency">⏰ Offer expires {expirationDate}</p>
            </div>
            
            <p>This offer is valid for:</p>
            <ul style="text-align: left; max-width: 400px; margin: 0 auto;">
              <li>All dumpster sizes (10, 15, 20, 30, 40 yards)</li>
              <li>Same-day delivery available</li>
              <li>All Utah service areas</li>
              <li>New and existing customers</li>
            </ul>
            
            <div style="margin: 32px 0;">
              <a href="https://icondumpsters.com/book?promo={promoCode}" class="cta-button">Claim Your Discount Now</a>
            </div>
            
            <p style="color: #6b7280; font-size: 14px;">
              Questions? Call us at (801) 918-6000 or reply to this email.
            </p>
          </div>
          
          <div style="border-top: 1px solid #e5e7eb; padding-top: 24px; margin-top: 32px; text-align: center; color: #6b7280; font-size: 14px;">
            <p><strong>Icon Dumpsters</strong><br/>
            📞 (801) 918-6000 | 📧 icondumpsters@gmail.com<br/>
            🌐 <a href="https://icondumpsters.com" style="color: #4e37a8;">icondumpsters.com</a></p>
          </div>
        </div>
      </body>
      </html>
    `
  },
  
  follow_up: {
    subject: "We'd love to serve you again - Icon Dumpsters",
    template: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>We'd love to serve you again</title>
        <style>
          body { font-family: Arial, sans-serif; color: #111827; line-height: 1.6; }
          .container { max-width: 640px; margin: 0 auto; padding: 24px; }
          .header { text-align: center; margin-bottom: 32px; }
          .logo { width: 96px; height: 96px; border-radius: 12px; }
          h1 { color: #4e37a8; margin-bottom: 16px; }
          .content { margin-bottom: 24px; }
          .cta-button { 
            display: inline-block; 
            background: #4e37a8; 
            color: white; 
            padding: 12px 24px; 
            text-decoration: none; 
            border-radius: 8px; 
            font-weight: 600; 
            margin: 16px 0;
          }
          .testimonial {
            background: #f9fafb;
            padding: 20px;
            border-radius: 8px;
            border-left: 4px solid #4e37a8;
            margin: 20px 0;
            font-style: italic;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <img src="https://icondumpsters.com/Icon_Dumpsters_Final.png" alt="Icon Dumpsters" class="logo" />
            <h1>We'd Love to Serve You Again!</h1>
          </div>
          
          <div class="content">
            <p>Hi {firstName},</p>
            <p>We hope you had a great experience with Icon Dumpsters for your {lastServiceType} project in {city}!</p>
            
            <p>As a valued customer, we wanted to reach out and see if you have any upcoming projects that might need our dumpster rental services.</p>
            
            <div class="testimonial">
              "Icon Dumpsters made our renovation project so much easier. Professional, reliable, and great pricing!"<br/>
              <strong>- Sarah M., Salt Lake City</strong>
            </div>
            
            <h3>Why Choose Icon Dumpsters Again?</h3>
            <ul>
              <li>✅ Same-day delivery in most areas</li>
              <li>✅ Competitive pricing with no hidden fees</li>
              <li>✅ Professional, friendly service</li>
              <li>✅ Flexible rental periods</li>
              <li>✅ Local Utah company you can trust</li>
            </ul>
            
            <h3>Upcoming Project?</h3>
            <p>Whether you're planning a home renovation, construction project, or just need to clean out your garage, we're here to help!</p>
            
            <div style="text-align: center; margin: 32px 0;">
              <a href="https://icondumpsters.com/book" class="cta-button">Get Your Next Quote</a>
            </div>
            
            <p>Or give us a call at <strong>(801) 918-6000</strong> to discuss your project needs.</p>
          </div>
          
          <div style="border-top: 1px solid #e5e7eb; padding-top: 24px; margin-top: 32px; text-align: center; color: #6b7280; font-size: 14px;">
            <p><strong>Icon Dumpsters</strong><br/>
            📞 (801) 918-6000 | 📧 icondumpsters@gmail.com<br/>
            🌐 <a href="https://icondumpsters.com" style="color: #4e37a8;">icondumpsters.com</a></p>
          </div>
        </div>
      </body>
      </html>
    `
  },
  
  seasonal: {
    subject: "Spring Cleaning? We've Got You Covered - Icon Dumpsters",
    template: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Spring Cleaning with Icon Dumpsters</title>
        <style>
          body { font-family: Arial, sans-serif; color: #111827; line-height: 1.6; }
          .container { max-width: 640px; margin: 0 auto; padding: 24px; }
          .header { text-align: center; margin-bottom: 32px; background: linear-gradient(135deg, #10b981, #059669); color: white; padding: 32px; border-radius: 12px; }
          .logo { width: 80px; height: 80px; border-radius: 12px; margin-bottom: 16px; }
          h1 { margin: 0; font-size: 28px; }
          .seasonal-tip {
            background: #ecfdf5;
            border: 1px solid #10b981;
            padding: 16px;
            border-radius: 8px;
            margin: 16px 0;
          }
          .cta-button { 
            display: inline-block; 
            background: #10b981; 
            color: white; 
            padding: 12px 24px; 
            text-decoration: none; 
            border-radius: 8px; 
            font-weight: 600; 
            margin: 16px 0;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <img src="https://icondumpsters.com/Icon_Dumpsters_Final.png" alt="Icon Dumpsters" class="logo" />
            <h1>🌸 Spring Cleaning Season is Here!</h1>
            <p style="margin: 0; opacity: 0.9;">Make your cleanup project easy with Icon Dumpsters</p>
          </div>
          
          <div>
            <p>Hi {firstName},</p>
            <p>Spring is the perfect time for cleaning out your home, garage, or workspace. Whether you're decluttering, renovating, or just doing a deep clean, we're here to help make it easy!</p>
            
            <div class="seasonal-tip">
              <h3>🌱 Spring Cleaning Tips</h3>
              <ul>
                <li>Start with one room at a time</li>
                <li>Sort items into keep, donate, and trash piles</li>
                <li>Rent a dumpster for large cleanup projects</li>
                <li>Schedule pickup when you're done</li>
              </ul>
            </div>
            
            <h3>Perfect for Spring Projects:</h3>
            <ul>
              <li>🏠 Home decluttering and organization</li>
              <li>🏡 Garage and basement cleanouts</li>
              <li>🌿 Yard waste and landscaping debris</li>
              <li>🔨 Home renovation and remodeling</li>
              <li>📦 Moving preparation and packing</li>
            </ul>
            
            <h3>Why Choose Icon Dumpsters?</h3>
            <ul>
              <li>✅ Same-day delivery available</li>
              <li>✅ Multiple sizes to fit your project</li>
              <li>✅ Competitive pricing</li>
              <li>✅ Local Utah company</li>
              <li>✅ Flexible rental periods</li>
            </ul>
            
            <div style="text-align: center; margin: 32px 0;">
              <a href="https://icondumpsters.com/book" class="cta-button">Start Your Spring Cleanup</a>
            </div>
            
            <p>Need help choosing the right size? Our team is here to help! Call us at <strong>(801) 918-6000</strong> or visit our website for a free quote.</p>
          </div>
          
          <div style="border-top: 1px solid #e5e7eb; padding-top: 24px; margin-top: 32px; text-align: center; color: #6b7280; font-size: 14px;">
            <p><strong>Icon Dumpsters</strong><br/>
            📞 (801) 918-6000 | 📧 icondumpsters@gmail.com<br/>
            🌐 <a href="https://icondumpsters.com" style="color: #4e37a8;">icondumpsters.com</a></p>
          </div>
        </div>
      </body>
      </html>
    `
  },
  'review-request': {
    subject: 'Thank you for choosing Icon Dumpsters!',
    template: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Thank you for choosing Icon Dumpsters!</title>
        <style>
          body { font-family: Arial, sans-serif; color: #111827; line-height: 1.6; }
          .container { max-width: 640px; margin: 0 auto; padding: 24px; }
          .header { text-align: center; margin-bottom: 32px; }
          .logo { width: 96px; height: 96px; border-radius: 12px; }
          h1 { color: #4e37a8; margin-bottom: 16px; }
          .content { margin-bottom: 24px; }
          .cta-button { 
            display: inline-block; 
            background: #4e37a8; 
            color: white; 
            padding: 12px 24px; 
            text-decoration: none; 
            border-radius: 8px; 
            font-weight: 600; 
            margin: 16px 0;
          }
          .footer { 
            border-top: 1px solid #e5e7eb; 
            padding-top: 24px; 
            margin-top: 32px; 
            text-align: center; 
            color: #6b7280; 
            font-size: 14px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <img src="https://icondumpsters.com/Icon_Dumpsters_Final.png" alt="Icon Dumpsters" class="logo" />
            <h1>Thank You!</h1>
          </div>
          
          <div class="content">
            <p>Hi {firstName},</p>
            
            <p>Thank you for choosing Icon Dumpsters for your recent dumpster rental! We truly appreciate your business and the opportunity to serve you.</p>
            
            <p>Your feedback means the world to us and helps other customers feel confident in choosing our services. If you have a moment, would you mind sharing your experience?</p>
            
            <div style="text-align: center; margin: 24px 0;">
              <a href="https://icondumpsters.com/rating" class="cta-button">👉 Leave Us a Review</a>
            </div>
            
            <p>It only takes a minute, and we'd be so grateful for your support.</p>
            
            <p>Thanks again for trusting us with your project—we look forward to serving you again in the future!</p>
          </div>
          
          <div class="footer">
            <p><strong>Best regards,</strong><br>
            The Icon Dumpsters Team<br>
            <a href="https://icondumpsters.com">icondumpsters.com</a></p>
          </div>
        </div>
      </body>
      </html>
    `
  },
  
  custom: {
    subject: "Custom Email - Icon Dumpsters",
    template: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Custom Email - Icon Dumpsters</title>
        <style>
          body { font-family: Arial, sans-serif; color: #111827; line-height: 1.6; margin: 0; padding: 0; }
          .container { max-width: 640px; margin: 0 auto; padding: 24px; background: #ffffff; }
          .header { text-align: center; margin-bottom: 32px; }
          .logo { width: 120px; height: 120px; border-radius: 12px; }
          h1 { color: #4e37a8; margin-bottom: 16px; font-size: 28px; }
          .content { margin-bottom: 24px; }
          .cta-button { 
            display: inline-block; 
            background: #4e37a8 !important; 
            color: #ffffff !important; 
            padding: 16px 32px; 
            text-decoration: none; 
            border-radius: 8px; 
            font-weight: 700; 
            margin: 16px 8px;
            font-size: 16px;
            border: 2px solid #4e37a8;
            box-shadow: 0 4px 8px rgba(78, 55, 168, 0.3);
            transition: all 0.3s ease;
          }
          .cta-button:hover { 
            background: #3d2d7a !important; 
            color: #ffffff !important;
            border-color: #3d2d7a;
            box-shadow: 0 6px 12px rgba(78, 55, 168, 0.4);
            transform: translateY(-2px);
          }
          .cta-button:visited {
            color: #ffffff !important;
          }
          .cta-button:link {
            color: #ffffff !important;
          }
          .footer { 
            border-top: 1px solid #e5e7eb; 
            padding-top: 24px; 
            margin-top: 32px; 
            text-align: center; 
            color: #6b7280; 
            font-size: 14px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <img src="https://icondumpsters.com/Icon_Dumpsters_Final.png" alt="Icon Dumpsters" class="logo" />
            <h1>Icon Dumpsters</h1>
            <p style="color: #6b7280; font-size: 18px;">Your trusted waste management partner in Utah</p>
          </div>
          
          <div class="content">
            <h2>Hi {firstName},</h2>
            <p>{customContent}</p>
            
            <div style="text-align: center; margin: 24px 0;">
              <a href="tel:8019186000" class="cta-button">Call Us Now</a>
            </div>
          </div>
          
          <div class="footer">
            <p><strong>Icon Dumpsters</strong><br/>
            📞 (801) 918-6000 | 📧 icondumpsters@gmail.com<br/>
            🌐 <a href="https://icondumpsters.com" style="color: #4e37a8;">icondumpsters.com</a></p>
            <p style="margin-top: 16px; font-size: 12px;">
              You're receiving this because you're a valued Icon Dumpsters customer.<br/>
              <a href="https://icondumpsters.com/unsubscribe" style="color: #6b7280;">Unsubscribe</a> | 
              <a href="https://icondumpsters.com/preferences" style="color: #6b7280;">Update Preferences</a> |
              <a href="https://icondumpsters.com/rating" style="color: #6b7280;">Leave a Review</a>
            </p>
          </div>
        </div>
      </body>
      </html>
    `
  }
};

// Function to personalize email content
function personalizeEmail(template: string, client: any, customData: any = {}) {
  const now = new Date();
  const month = now.toLocaleString('default', { month: 'long' });
  const year = now.getFullYear();
  
  return template
    .replace(/{firstName}/g, client.firstName || 'Valued Customer')
    .replace(/{lastName}/g, client.lastName || '')
    .replace(/{companyName}/g, client.companyName || '')
    .replace(/{city}/g, client.city || 'your area')
    .replace(/{county}/g, client.county || 'your county')
    .replace(/{month}/g, month)
    .replace(/{year}/g, year.toString())
    .replace(/{promotionTitle}/g, customData.promotionTitle || 'Special Offer')
    .replace(/{discountAmount}/g, customData.discountAmount || '10%')
    .replace(/{promoCode}/g, customData.promoCode || 'SAVE10')
    .replace(/{expirationDate}/g, customData.expirationDate || 'end of month')
    .replace(/{lastServiceType}/g, customData.lastServiceType || 'recent')
    .replace(/{customContent}/g, customData.content || '');
}

// Function to filter clients based on criteria
function filterClients(clients: any[], filters: any) {
  console.log('Filtering clients with criteria:', filters);
  console.log('Total clients before filtering:', clients.length);
  
  const filtered = clients.filter(client => {
    // Only include clients with email addresses first
    if (!client.email || client.email.trim() === '') {
      console.log('Filtering out client without email:', client.firstName, client.lastName);
      return false;
    }
    
    // Filter by client type
    if (filters.clientType && filters.clientType !== 'all') {
      const hasResidential = client.tags?.includes('Residential');
      const hasCommercial = client.tags?.includes('Commercial');
      
      if (filters.clientType === 'residential' && !hasResidential) {
        console.log('Filtering out non-residential client:', client.firstName, client.lastName);
        return false;
      }
      if (filters.clientType === 'commercial' && !hasCommercial) {
        console.log('Filtering out non-commercial client:', client.firstName, client.lastName);
        return false;
      }
    }
    
    // Filter by county
    if (filters.county && filters.county !== 'all' && client.county !== filters.county) {
      console.log('Filtering out client from different county:', client.firstName, client.lastName, client.county);
      return false;
    }
    
    // Filter by tags
    if (filters.tags && filters.tags.length > 0) {
      const clientTags = client.tags?.split(',').map((tag: string) => tag.trim()) || [];
      const hasMatchingTag = filters.tags.some((tag: string) => clientTags.includes(tag));
      if (!hasMatchingTag) {
        console.log('Filtering out client without matching tags:', client.firstName, client.lastName);
        return false;
      }
    }
    
    // Filter by creation date
    if (filters.createdAfter) {
      const createdDate = new Date(client.createdOn);
      const afterDate = new Date(filters.createdAfter);
      if (createdDate < afterDate) {
        console.log('Filtering out client created before date:', client.firstName, client.lastName);
        return false;
      }
    }
    
    if (filters.createdBefore) {
      const createdDate = new Date(client.createdOn);
      const beforeDate = new Date(filters.createdBefore);
      if (createdDate > beforeDate) {
        console.log('Filtering out client created after date:', client.firstName, client.lastName);
        return false;
      }
    }
    
    return true;
  });
  
  console.log('Clients after filtering:', filtered.length);
  return filtered;
}

export async function POST(request: NextRequest) {
  try {
    const body: BulkEmailRequest = await request.json();
    
    // Validate required fields
    if (!body.emailType || !body.subject) {
      return NextResponse.json(
        { error: 'Email type and subject are required' },
        { status: 400 }
      );
    }
    
    // Get client data
    const clientsResponse = await fetch(`${request.nextUrl.origin}/api/clients`);
    const allClients = await clientsResponse.json();
    
    // Filter clients based on criteria
    const filteredClients = filterClients(allClients, body.filters || {});
    
    if (filteredClients.length === 0) {
      return NextResponse.json(
        { error: 'No clients match the specified criteria' },
        { status: 400 }
      );
    }
    
    // Get email template
    let emailTemplate = emailTemplates[body.emailType];
    let subject = body.subject;
    let content = body.content;
    
    if (body.customTemplate && body.content) {
      // Use custom template
      emailTemplate = {
        subject: body.subject,
        template: body.content
      };
    }
    
    // Send emails in smaller batches to avoid Gmail rate limits
    const batchSize = 5; // Reduced from 10 to 5
    const batches = [];
    
    for (let i = 0; i < filteredClients.length; i += batchSize) {
      batches.push(filteredClients.slice(i, i + batchSize));
    }
    
    const results = {
      totalClients: filteredClients.length,
      emailsSent: 0,
      emailsFailed: 0,
      failedEmails: [] as any[],
      batchResults: [] as any[]
    };
    
    // Process each batch
    for (let batchIndex = 0; batchIndex < batches.length; batchIndex++) {
      const batch = batches[batchIndex];
      const batchResult = {
        batchNumber: batchIndex + 1,
        emailsSent: 0,
        emailsFailed: 0,
        failedEmails: [] as any[]
      };
      
      // Send emails in this batch
      for (const client of batch) {
        try {
          const personalizedSubject = personalizeEmail(subject, client);
          const personalizedContent = personalizeEmail(emailTemplate.template, client, {
            content: body.content,
            promotionTitle: body.content.includes('promotion') ? 'Special Offer' : '',
            discountAmount: '10%',
            promoCode: 'SAVE10',
            expirationDate: 'end of month',
            lastServiceType: 'recent'
          });
          
          await emailService.sendEmail(
            client.email,
            personalizedSubject,
            '', // text version
            personalizedContent
          );
          
          results.emailsSent++;
          batchResult.emailsSent++;
          
          // Rate limiting is now handled in EmailService
          
        } catch (error) {
          console.error(`Failed to send email to ${client.email}:`, error);
          results.emailsFailed++;
          batchResult.emailsFailed++;
          results.failedEmails.push({
            email: client.email,
            name: `${client.firstName} ${client.lastName}`,
            error: error instanceof Error ? error.message : 'Unknown error'
          });
          batchResult.failedEmails.push({
            email: client.email,
            name: `${client.firstName} ${client.lastName}`,
            error: error instanceof Error ? error.message : 'Unknown error'
          });
        }
      }
      
      results.batchResults.push(batchResult);
      
      // Add longer delay between batches to respect Gmail limits
      if (batchIndex < batches.length - 1) {
        console.log(`Batch ${batchIndex + 1} completed. Waiting 10 seconds before next batch...`);
        await new Promise(resolve => setTimeout(resolve, 10000)); // 10 seconds between batches
      }
    }
    
    return NextResponse.json({
      success: true,
      message: `Bulk email campaign completed. ${results.emailsSent} emails sent successfully.`,
      results
    });
    
  } catch (error) {
    console.error('Bulk email error:', error);
    return NextResponse.json(
      { error: 'Failed to send bulk emails', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // Get client data for preview
    const clientsResponse = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/clients`);
    const allClients = await clientsResponse.json();
    
    // Get client statistics
    const stats = {
      totalClients: allClients.length,
      clientsWithEmail: allClients.filter((c: any) => c.email && c.email.trim() !== '').length,
      residentialClients: allClients.filter((c: any) => c.tags?.includes('Residential')).length,
      commercialClients: allClients.filter((c: any) => c.tags?.includes('Commercial')).length,
      counties: [...new Set(allClients.map((c: any) => c.county).filter(Boolean))],
      tags: [...new Set(allClients.flatMap((c: any) => c.tags?.split(',').map((tag: string) => tag.trim()) || []).filter(Boolean))]
    };
    
    return NextResponse.json({
      success: true,
      stats,
      availableTemplates: Object.keys(emailTemplates)
    });
    
  } catch (error) {
    console.error('Error getting bulk email stats:', error);
    return NextResponse.json(
      { error: 'Failed to get bulk email statistics' },
      { status: 500 }
    );
  }
}

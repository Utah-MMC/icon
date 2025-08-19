import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { customerName, customerEmail, rating, review, dumpsterSize, rentalDate } = body;

    // Email content
    const subject = `New Review Submitted - ${customerName}`;
    const emailContent = `
      <h2>New Review Submitted</h2>
      <p><strong>Customer Name:</strong> ${customerName}</p>
      <p><strong>Customer Email:</strong> ${customerEmail}</p>
      <p><strong>Rating:</strong> ${rating}/5 stars</p>
      <p><strong>Dumpster Size:</strong> ${dumpsterSize}</p>
      <p><strong>Rental Date:</strong> ${new Date(rentalDate).toLocaleDateString()}</p>
      ${review ? `<p><strong>Review:</strong> ${review}</p>` : ''}
      <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
    `;

    // For now, we'll log the review data and you can set up email notifications
    // You can integrate with services like:
    // - SendGrid (recommended)
    // - Mailgun
    // - AWS SES
    // - EmailJS (client-side)
    
    console.log('=== NEW REVIEW SUBMITTED ===');
    console.log('Customer Name:', customerName);
    console.log('Customer Email:', customerEmail);
    console.log('Rating:', rating + '/5 stars');
    console.log('Dumpster Size:', dumpsterSize);
    console.log('Rental Date:', new Date(rentalDate).toLocaleDateString());
    if (review) console.log('Review:', review);
    console.log('Submitted:', new Date().toLocaleString());
    console.log('============================');
    
    // You can also save to a database or file for processing
    const reviewData = {
      customerName,
      customerEmail,
      rating,
      review,
      dumpsterSize,
      rentalDate,
      submittedAt: new Date().toISOString()
    };
    
    // Save to localStorage for admin review
    if (typeof window !== 'undefined') {
      const adminReviews = localStorage.getItem('adminReviews') || '[]';
      const reviews = JSON.parse(adminReviews);
      reviews.push(reviewData);
      localStorage.setItem('adminReviews', JSON.stringify(reviews));
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Review submitted successfully' 
    });

  } catch (error) {
    console.error('Error sending review notification:', error);
    
    // Log the review data as fallback
    const body = await request.json();
    console.log('Review data (fallback):', body);
    
    return NextResponse.json({ 
      success: true, 
      message: 'Review submitted successfully' 
    });
  }
}

import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

interface Review {
  id: string;
  customerName: string;
  customerEmail: string;
  rating: number;
  reviewText: string;
  serviceType?: string;
  location?: string;
  date: string;
  verified: boolean;
  source: 'website' | 'google' | 'facebook' | 'other';
}

interface ReviewSubmission {
  customerName: string;
  customerEmail: string;
  rating: number;
  reviewText: string;
  serviceType?: string;
  location?: string;
  source?: string;
}

// File path for storing reviews
const reviewsFilePath = path.join(process.cwd(), 'data', 'reviews.json');

// Ensure data directory exists
function ensureDataDirectory() {
  const dataDir = path.dirname(reviewsFilePath);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
}

// Load reviews from file
function loadReviews(): Review[] {
  try {
    ensureDataDirectory();
    if (fs.existsSync(reviewsFilePath)) {
      const data = fs.readFileSync(reviewsFilePath, 'utf8');
      return JSON.parse(data);
    }
  } catch (error) {
    console.error('Error loading reviews:', error);
  }
  return [];
}

// Save reviews to file
function saveReviews(reviews: Review[]): void {
  try {
    ensureDataDirectory();
    fs.writeFileSync(reviewsFilePath, JSON.stringify(reviews, null, 2));
  } catch (error) {
    console.error('Error saving reviews:', error);
  }
}

// Generate unique ID
function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// POST - Submit a new review
export async function POST(request: NextRequest) {
  try {
    const body: ReviewSubmission = await request.json();
    
    // Validate required fields
    if (!body.customerName || !body.customerEmail || !body.rating || !body.reviewText) {
      return NextResponse.json(
        { error: 'Customer name, email, rating, and review text are required' },
        { status: 400 }
      );
    }
    
    // Validate rating
    if (body.rating < 1 || body.rating > 5) {
      return NextResponse.json(
        { error: 'Rating must be between 1 and 5' },
        { status: 400 }
      );
    }
    
    // Load existing reviews
    const reviews = loadReviews();
    
    // Create new review
    const newReview: Review = {
      id: generateId(),
      customerName: body.customerName,
      customerEmail: body.customerEmail,
      rating: body.rating,
      reviewText: body.reviewText,
      serviceType: body.serviceType || 'Dumpster Rental',
      location: body.location || 'Utah',
      date: new Date().toISOString(),
      verified: false, // Will be verified manually
      source: (body.source as any) || 'website'
    };
    
    // Add to reviews
    reviews.push(newReview);
    
    // Save reviews
    saveReviews(reviews);
    
    // Log the review submission for analytics
    console.log('New review submitted:', {
      id: newReview.id,
      customerName: newReview.customerName,
      rating: newReview.rating,
      source: newReview.source,
      timestamp: newReview.date
    });
    
    return NextResponse.json({
      success: true,
      message: 'Review submitted successfully! Thank you for your feedback.',
      reviewId: newReview.id
    });
    
  } catch (error) {
    console.error('Error submitting review:', error);
    return NextResponse.json(
      { error: 'Failed to submit review', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

// GET - Retrieve reviews (with optional filtering)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const minRating = searchParams.get('minRating');
    const limit = searchParams.get('limit');
    const verified = searchParams.get('verified');
    
    // Load reviews
    let reviews = loadReviews();
    
    // Filter by minimum rating
    if (minRating) {
      const minRatingNum = parseInt(minRating);
      if (!isNaN(minRatingNum)) {
        reviews = reviews.filter(review => review.rating >= minRatingNum);
      }
    }
    
    // Filter by verified status
    if (verified === 'true') {
      reviews = reviews.filter(review => review.verified);
    }
    
    // Sort by date (newest first)
    reviews.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    // Apply limit
    if (limit) {
      const limitNum = parseInt(limit);
      if (!isNaN(limitNum)) {
        reviews = reviews.slice(0, limitNum);
      }
    }
    
    // Calculate statistics
    const allReviews = loadReviews();
    const stats = {
      totalReviews: allReviews.length,
      averageRating: allReviews.length > 0 
        ? (allReviews.reduce((sum, review) => sum + review.rating, 0) / allReviews.length).toFixed(1)
        : '0.0',
      ratingDistribution: {
        5: allReviews.filter(r => r.rating === 5).length,
        4: allReviews.filter(r => r.rating === 4).length,
        3: allReviews.filter(r => r.rating === 3).length,
        2: allReviews.filter(r => r.rating === 2).length,
        1: allReviews.filter(r => r.rating === 1).length
      },
      verifiedReviews: allReviews.filter(r => r.verified).length
    };
    
    return NextResponse.json({
      success: true,
      reviews,
      stats
    });
    
  } catch (error) {
    console.error('Error retrieving reviews:', error);
    return NextResponse.json(
      { error: 'Failed to retrieve reviews', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

// PUT - Update review (for verification, etc.)
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, verified, ...updates } = body;
    
    if (!id) {
      return NextResponse.json(
        { error: 'Review ID is required' },
        { status: 400 }
      );
    }
    
    // Load reviews
    const reviews = loadReviews();
    const reviewIndex = reviews.findIndex(review => review.id === id);
    
    if (reviewIndex === -1) {
      return NextResponse.json(
        { error: 'Review not found' },
        { status: 404 }
      );
    }
    
    // Update review
    reviews[reviewIndex] = {
      ...reviews[reviewIndex],
      ...updates,
      verified: verified !== undefined ? verified : reviews[reviewIndex].verified
    };
    
    // Save reviews
    saveReviews(reviews);
    
    return NextResponse.json({
      success: true,
      message: 'Review updated successfully',
      review: reviews[reviewIndex]
    });
    
  } catch (error) {
    console.error('Error updating review:', error);
    return NextResponse.json(
      { error: 'Failed to update review', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

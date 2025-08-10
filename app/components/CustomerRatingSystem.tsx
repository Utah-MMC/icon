'use client';

import { useState, useEffect } from 'react';

interface RatingData {
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  rentalDate: string;
  dumpsterSize: string;
  rating: number;
  review: string;
  reviewSubmitted: boolean;
  followUpSent: boolean;
  reviewPosted: boolean;
}

export default function CustomerRatingSystem() {
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [currentRating, setCurrentRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [customerData, setCustomerData] = useState<RatingData>({
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    rentalDate: '',
    dumpsterSize: '',
    rating: 0,
    review: '',
    reviewSubmitted: false,
    followUpSent: false,
    reviewPosted: false
  });

  useEffect(() => {
    // Initialize rating system
    initializeRatingSystem();
  }, []);

  const initializeRatingSystem = () => {
    // Check if we should show rating modal (e.g., 3 days after rental)
    const shouldShowRating = checkIfShouldShowRating();
    if (shouldShowRating) {
      setShowRatingModal(true);
    }

    // Set up automatic follow-up emails
    setupFollowUpEmails();
  };

  const checkIfShouldShowRating = (): boolean => {
    // Check URL parameters for rating request
    const urlParams = new URLSearchParams(window.location.search);
    const ratingRequested = urlParams.get('rating');
    
    if (ratingRequested === 'true') {
      return true;
    }

    // Check localStorage for pending ratings
    const pendingRatings = localStorage.getItem('pendingRatings');
    if (pendingRatings) {
      const ratings = JSON.parse(pendingRatings);
      const now = new Date();
      
      for (const rating of ratings) {
        const rentalDate = new Date(rating.rentalDate);
        const daysSinceRental = (now.getTime() - rentalDate.getTime()) / (1000 * 3600 * 24);
        
        if (daysSinceRental >= 3 && !rating.followUpSent) {
          return true;
        }
      }
    }

    return false;
  };

  const setupFollowUpEmails = () => {
    // This would integrate with your email system
    // For now, we'll simulate the process
    console.log('Setting up follow-up emails for customer feedback');
  };

  const handleRatingSubmit = async () => {
    if (currentRating === 0) {
      alert('Please select a rating before submitting');
      return;
    }

    const ratingData: RatingData = {
      ...customerData,
      rating: currentRating,
      review: reviewText,
      reviewSubmitted: true
    };

    // Save rating data
    saveRatingData(ratingData);

    // Update KPI metrics
    updateKPIMetrics(ratingData);

    // Send thank you email
    sendThankYouEmail(ratingData);

    // If rating is 4-5 stars, prompt for review
    if (currentRating >= 4) {
      promptForReview(ratingData);
    } else {
      // For lower ratings, send improvement email
      sendImprovementEmail(ratingData);
    }

    setShowRatingModal(false);
    setCurrentRating(0);
    setReviewText('');
  };

  const saveRatingData = (data: RatingData) => {
    const existingRatings = localStorage.getItem('customerRatings') || '[]';
    const ratings = JSON.parse(existingRatings);
    ratings.push({
      ...data,
      submittedAt: new Date().toISOString()
    });
    localStorage.setItem('customerRatings', JSON.stringify(ratings));
  };

  const updateKPIMetrics = (data: RatingData) => {
    if (typeof window !== 'undefined' && (window as any).iconDumpstersKPI) {
      // Update customer satisfaction score
      const existingRatings = localStorage.getItem('customerRatings') || '[]';
      const ratings = JSON.parse(existingRatings);
      const allRatings = [...ratings, data];
      
      const averageRating = allRatings.reduce((sum: number, r: RatingData) => sum + r.rating, 0) / allRatings.length;
      
      (window as any).iconDumpstersKPI.updateCustomerSatisfaction(averageRating);
    }
  };

  const sendThankYouEmail = (data: RatingData) => {
    const emailContent = `
      Dear ${data.customerName},

      Thank you for choosing Icon Dumpsters for your waste management needs!

      We're thrilled that you rated our service ${data.rating}/5 stars. Your feedback helps us continue providing excellent service to our customers.

      If you have any additional comments or suggestions, please don't hesitate to reach out to us at (801) 918-6000 or icondumpsters@gmail.com.

      We look forward to serving you again in the future!

      Best regards,
      The Icon Dumpsters Team
    `;

    // In production, this would send via your email service
    console.log('Thank you email sent:', emailContent);
  };

  const promptForReview = (data: RatingData) => {
    const reviewPrompt = `
      <div class="review-prompt-modal">
        <h3>Share Your Experience!</h3>
        <p>We're so glad you had a great experience with Icon Dumpsters! Would you mind sharing your experience with others?</p>
        
        <div class="review-buttons">
          <button onclick="submitGoogleReview()" class="google-review-btn">
            Leave Google Review
          </button>
          <button onclick="submitYelpReview()" class="yelp-review-btn">
            Leave Yelp Review
          </button>
          <button onclick="submitFacebookReview()" class="facebook-review-btn">
            Leave Facebook Review
          </button>
        </div>
        
        <p class="review-incentive">
          💡 <strong>Bonus:</strong> Leave a review and get 10% off your next rental!
        </p>
      </div>
    `;

    // Show review prompt modal
    showReviewPromptModal(reviewPrompt);
  };

  const sendImprovementEmail = (data: RatingData) => {
    const improvementEmail = `
      Dear ${data.customerName},

      Thank you for your feedback regarding your recent dumpster rental experience.

      We take all customer feedback seriously and are committed to improving our services. We would appreciate the opportunity to discuss your experience and address any concerns you may have.

      Please contact us at (801) 918-6000 or icondumpsters@gmail.com so we can better understand how we can improve and make things right.

      We value your business and look forward to hearing from you.

      Best regards,
      The Icon Dumpsters Team
    `;

    // In production, this would send via your email service
    console.log('Improvement email sent:', improvementEmail);
  };

  const showReviewPromptModal = (content: string) => {
    const modal = document.createElement('div');
    modal.className = 'review-prompt-overlay';
    modal.innerHTML = `
      <div class="review-prompt-content">
        ${content}
        <button onclick="this.parentElement.parentElement.remove()" class="close-btn">×</button>
      </div>
    `;
    document.body.appendChild(modal);
  };

  // Add review submission functions to window
  if (typeof window !== 'undefined') {
    (window as any).submitGoogleReview = () => {
      window.open('https://search.google.com/local/writereview?placeid=ChIJN1t_tDeuQIYRoj6G_6U7LMA', '_blank');
      trackReviewSubmission('google');
    };

    (window as any).submitYelpReview = () => {
      window.open('https://www.yelp.com/writeareview/biz/icon-dumpsters-salt-lake-city', '_blank');
      trackReviewSubmission('yelp');
    };

    (window as any).submitFacebookReview = () => {
      window.open('https://www.facebook.com/p/Icon-Dumpsters-61557014799828/', '_blank');
      trackReviewSubmission('facebook');
    };
  }

  const trackReviewSubmission = (platform: string) => {
    // Track review submission in analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'review_submission', {
        'event_category': 'engagement',
        'event_label': platform,
        'value': currentRating
      });
    }
  };

  const generateRatingReport = () => {
    const ratings = JSON.parse(localStorage.getItem('customerRatings') || '[]');
    
    const report = {
      totalRatings: ratings.length,
      averageRating: ratings.reduce((sum: number, r: RatingData) => sum + r.rating, 0) / ratings.length,
      ratingDistribution: {
        5: ratings.filter((r: RatingData) => r.rating === 5).length,
        4: ratings.filter((r: RatingData) => r.rating === 4).length,
        3: ratings.filter((r: RatingData) => r.rating === 3).length,
        2: ratings.filter((r: RatingData) => r.rating === 2).length,
        1: ratings.filter((r: RatingData) => r.rating === 1).length
      },
      reviewsSubmitted: ratings.filter((r: RatingData) => r.reviewSubmitted).length,
      reviewsPosted: ratings.filter((r: RatingData) => r.reviewPosted).length
    };

    return report;
  };

  return (
    <>
      {/* Rating Modal */}
      {showRatingModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                How was your experience with Icon Dumpsters?
              </h3>
              
              {/* Star Rating */}
              <div className="flex justify-center space-x-2 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => setCurrentRating(star)}
                    className={`text-3xl ${
                      star <= currentRating ? 'text-yellow-400' : 'text-gray-300'
                    } hover:text-yellow-400 transition-colors`}
                  >
                    ★
                  </button>
                ))}
              </div>

              {/* Rating Labels */}
              <div className="mb-6">
                {currentRating === 1 && <p className="text-red-600 font-medium">Poor</p>}
                {currentRating === 2 && <p className="text-orange-600 font-medium">Fair</p>}
                {currentRating === 3 && <p className="text-yellow-600 font-medium">Good</p>}
                {currentRating === 4 && <p className="text-blue-600 font-medium">Very Good</p>}
                {currentRating === 5 && <p className="text-green-600 font-medium">Excellent</p>}
              </div>

              {/* Review Text */}
              <textarea
                placeholder="Tell us about your experience (optional)..."
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md mb-4 resize-none"
                rows={4}
              />

              {/* Action Buttons */}
              <div className="flex space-x-3">
                <button
                  onClick={() => setShowRatingModal(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Maybe Later
                </button>
                <button
                  onClick={handleRatingSubmit}
                  className="flex-1 px-4 py-2 bg-[#4e37a8] text-white rounded-md hover:bg-purple-700"
                >
                  Submit Rating
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Rating System Styles */}
      <style jsx>{`
        .review-prompt-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }

        .review-prompt-content {
          background: white;
          padding: 2rem;
          border-radius: 8px;
          max-width: 500px;
          text-align: center;
          position: relative;
        }

        .review-buttons {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin: 1.5rem 0;
        }

        .google-review-btn {
          background: #4285f4;
          color: white;
          padding: 0.75rem 1.5rem;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-weight: 500;
        }

        .yelp-review-btn {
          background: #ff1a1a;
          color: white;
          padding: 0.75rem 1.5rem;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-weight: 500;
        }

        .facebook-review-btn {
          background: #1877f2;
          color: white;
          padding: 0.75rem 1.5rem;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-weight: 500;
        }

        .review-incentive {
          background: #fef3c7;
          padding: 1rem;
          border-radius: 4px;
          margin-top: 1rem;
        }

        .close-btn {
          position: absolute;
          top: 0.5rem;
          right: 1rem;
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: #666;
        }
      `}</style>
    </>
  );
}

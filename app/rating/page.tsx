'use client';

import { useState, useEffect } from 'react';

interface Review {
  id: string;
  customerName: string;
  rating: number;
  reviewText: string;
  serviceType?: string;
  location?: string;
  date: string;
  verified: boolean;
}

export default function RatingPage() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const [form, setForm] = useState({
    customerName: '',
    customerEmail: '',
    rating: 0,
    reviewText: '',
    serviceType: 'Dumpster Rental',
    location: 'Utah'
  });

  useEffect(() => {
    loadReviews();
    trackVisit();
  }, []);

  const trackVisit = async () => {
    try {
      // Track that someone visited the rating page
      await fetch('/api/track-rating-visit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: 'website',
          referrer: document.referrer
        })
      });
    } catch (error) {
      // Silently fail - tracking shouldn't break the user experience
      console.log('Visit tracking failed:', error);
    }
  };

  const loadReviews = async () => {
    try {
      const response = await fetch('/api/reviews?verified=true&limit=10');
      const data = await response.json();
      if (data.success) {
        setReviews(data.reviews);
      }
    } catch (error) {
      console.error('Error loading reviews:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    try {
      const response = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'website' }),
      });
      
      const data = await response.json();
      
      if (data.success) {
        setSubmitted(true);
        setForm({
          customerName: '',
          customerEmail: '',
          rating: 0,
          reviewText: '',
          serviceType: 'Dumpster Rental',
          location: 'Utah'
        });
        loadReviews();
      } else {
        alert('Error: ' + data.error);
      }
    } catch (error) {
      alert('Failed to submit review. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const renderStars = (rating: number, interactive: boolean = false) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type={interactive ? "button" : undefined}
            onClick={interactive ? () => setForm(prev => ({ ...prev, rating: star })) : undefined}
            className={`text-2xl ${
              star <= rating ? 'text-yellow-400' : 'text-gray-300'
            } ${interactive ? 'hover:text-yellow-300 cursor-pointer' : ''}`}
          >
            ★
          </button>
        ))}
      </div>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#4e37a8]"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Leave Us a Review</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your feedback helps us improve our services and helps other customers make informed decisions.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Review Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Share Your Experience</h2>
            
            {submitted ? (
              <div className="text-center py-8">
                <div className="text-green-500 text-6xl mb-4">✓</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                <p className="text-gray-600 mb-4">Your review has been submitted successfully.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2 bg-[#4e37a8] text-white rounded-lg hover:bg-purple-700"
                >
                  Leave Another Review
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Overall Rating *</label>
                  {renderStars(form.rating, true)}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={form.customerName}
                    onChange={(e) => setForm(prev => ({ ...prev, customerName: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4e37a8] focus:border-transparent text-black"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Email *</label>
                  <input
                    type="email"
                    required
                    value={form.customerEmail}
                    onChange={(e) => setForm(prev => ({ ...prev, customerEmail: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4e37a8] focus:border-transparent text-black"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Type</label>
                  <select
                    value={form.serviceType}
                    onChange={(e) => setForm(prev => ({ ...prev, serviceType: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4e37a8] focus:border-transparent text-black"
                  >
                    <option value="Dumpster Rental">Dumpster Rental</option>
                    <option value="Construction Cleanup">Construction Cleanup</option>
                    <option value="Home Renovation">Home Renovation</option>
                    <option value="Commercial Project">Commercial Project</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Review *</label>
                  <textarea
                    required
                    rows={4}
                    value={form.reviewText}
                    onChange={(e) => setForm(prev => ({ ...prev, reviewText: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4e37a8] focus:border-transparent text-black"
                    placeholder="Tell us about your experience with Icon Dumpsters..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting || form.rating === 0}
                  className="w-full px-6 py-3 bg-[#4e37a8] text-white rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {submitting ? 'Submitting Review...' : 'Submit Review'}
                </button>
              </form>
            )}
          </div>

          {/* Reviews Display */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Reviews</h3>
              
              {reviews.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <p>No reviews yet. Be the first to share your experience!</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {reviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-200 pb-4 last:border-b-0">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="font-semibold text-gray-900">{review.customerName}</h4>
                          <p className="text-sm text-gray-600">{review.serviceType} • {review.location}</p>
                        </div>
                        <div className="text-right">
                          {renderStars(review.rating)}
                          <p className="text-xs text-gray-500 mt-1">
                            {new Date(review.date).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-700">{review.reviewText}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
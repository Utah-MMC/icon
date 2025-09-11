'use client';

import { useState, useEffect } from 'react';

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
  source: string;
}

export default function AdminReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'verified' | 'pending'>('all');

  useEffect(() => {
    loadReviews();
  }, [filter]);

  const loadReviews = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/reviews');
      const data = await response.json();
      
      if (data.success) {
        let filteredReviews = data.reviews;
        
        if (filter === 'verified') {
          filteredReviews = data.reviews.filter((review: Review) => review.verified);
        } else if (filter === 'pending') {
          filteredReviews = data.reviews.filter((review: Review) => !review.verified);
        }
        
        setReviews(filteredReviews);
      }
    } catch (error) {
      console.error('Error loading reviews:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleVerification = async (reviewId: string, verified: boolean) => {
    try {
      const response = await fetch('/api/reviews', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: reviewId,
          verified: !verified
        }),
      });
      
      const data = await response.json();
      
      if (data.success) {
        // Update local state
        setReviews(prev => prev.map(review => 
          review.id === reviewId 
            ? { ...review, verified: !verified }
            : review
        ));
      } else {
        alert('Error updating review: ' + data.error);
      }
    } catch (error) {
      console.error('Error updating review:', error);
      alert('Failed to update review. Please try again.');
    }
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`text-lg ${
              star <= rating ? 'text-yellow-400' : 'text-gray-300'
            }`}
          >
            ★
          </span>
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Review Management</h1>
          <p className="text-gray-600">Manage and verify customer reviews</p>
        </div>

        {/* Filter Tabs */}
        <div className="mb-6">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              {[
                { key: 'all', label: 'All Reviews', count: reviews.length },
                { key: 'pending', label: 'Pending Verification', count: reviews.filter(r => !r.verified).length },
                { key: 'verified', label: 'Verified', count: reviews.filter(r => r.verified).length }
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setFilter(tab.key as any)}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    filter === tab.key
                      ? 'border-[#4e37a8] text-[#4e37a8]'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.label} ({tab.count})
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Reviews List */}
        <div className="space-y-4">
          {reviews.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">No reviews found.</p>
            </div>
          ) : (
            reviews.map((review) => (
              <div key={review.id} className="bg-white rounded-lg shadow p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{review.customerName}</h3>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        review.verified 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {review.verified ? 'Verified' : 'Pending'}
                      </span>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span>{review.serviceType}</span>
                      <span>•</span>
                      <span>{review.location}</span>
                      <span>•</span>
                      <span>{new Date(review.date).toLocaleDateString()}</span>
                      <span>•</span>
                      <span>Source: {review.source}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    {renderStars(review.rating)}
                    <p className="text-sm text-gray-500 mt-1">{review.rating}/5 stars</p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4">{review.reviewText}</p>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    Email: {review.customerEmail}
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => toggleVerification(review.id, review.verified)}
                      className={`px-3 py-1 text-sm rounded text-black ${
                        review.verified
                          ? 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200'
                          : 'bg-green-100 text-green-800 hover:bg-green-200'
                      }`}
                    >
                      {review.verified ? 'Unverify' : 'Verify'}
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

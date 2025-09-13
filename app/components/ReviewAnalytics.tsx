'use client';

import { useState, useEffect } from 'react';

interface ReviewStats {
  totalReviews: number;
  averageRating: string;
  ratingDistribution: {
    5: number;
    4: number;
    3: number;
    2: number;
    1: number;
  };
  verifiedReviews: number;
}

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

export default function ReviewAnalytics() {
  const [stats, setStats] = useState<ReviewStats | null>(null);
  const [recentReviews, setRecentReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [timeRange, setTimeRange] = useState('7'); // days

  useEffect(() => {
    loadReviewData();
  }, [timeRange]);

  const loadReviewData = async () => {
    try {
      setLoading(true);
      
      // Load review statistics
      const statsResponse = await fetch('/api/reviews');
      const statsData = await statsResponse.json();
      
      if (statsData.success) {
        setStats(statsData.stats);
      }
      
      // Load recent reviews
      const reviewsResponse = await fetch('/api/reviews?limit=5');
      const reviewsData = await reviewsResponse.json();
      
      if (reviewsData.success) {
        setRecentReviews(reviewsData.reviews);
      }
      
    } catch (error) {
      console.error('Error loading review data:', error);
    } finally {
      setLoading(false);
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

  const getRatingPercentage = (count: number) => {
    if (!stats || stats.totalReviews === 0) return 0;
    return ((count / stats.totalReviews) * 100).toFixed(1);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#4e37a8]"></div>
        <span className="ml-2">Loading review analytics...</span>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Review Analytics</h2>
        <p className="text-gray-600">Track customer feedback and review performance</p>
      </div>

      {stats && (
        <>
          {/* Review Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-blue-800">Total Reviews</h3>
              <p className="text-2xl font-bold text-blue-900">{stats.totalReviews}</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-green-800">Average Rating</h3>
              <p className="text-2xl font-bold text-green-900">{stats.averageRating}</p>
              <div className="flex justify-center mt-1">
                {renderStars(Math.round(parseFloat(stats.averageRating)))}
              </div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-purple-800">Verified Reviews</h3>
              <p className="text-2xl font-bold text-purple-900">{stats.verifiedReviews}</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-orange-800">5-Star Reviews</h3>
              <p className="text-2xl font-bold text-orange-900">{stats.ratingDistribution[5]}</p>
            </div>
          </div>

          {/* Rating Distribution */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Rating Distribution</h3>
            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map((rating) => (
                <div key={rating} className="flex items-center">
                  <div className="w-8 text-sm font-medium">{rating}★</div>
                  <div className="flex-1 mx-3">
                    <div className="bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-yellow-400 h-2 rounded-full"
                        style={{ width: `${getRatingPercentage(stats.ratingDistribution[rating as keyof typeof stats.ratingDistribution])}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="w-12 text-sm text-gray-600">
                    {stats.ratingDistribution[rating as keyof typeof stats.ratingDistribution]} ({getRatingPercentage(stats.ratingDistribution[rating as keyof typeof stats.ratingDistribution])}%)
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {/* Recent Reviews */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Recent Reviews</h3>
        
        {recentReviews.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <p>No reviews yet. Encourage customers to leave reviews!</p>
            <div className="mt-4">
              <a
                href="https://icondumpsters.com/rating"
                className="inline-flex items-center px-4 py-2 bg-[#4e37a8] text-white rounded-lg hover:bg-purple-700"
              >
                View Rating Page
              </a>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {recentReviews.map((review) => (
              <div key={review.id} className="border border-gray-200 rounded-lg p-4">
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
                <p className="text-gray-700 text-sm">{review.reviewText}</p>
                <div className="mt-2 flex items-center justify-between">
                  <span className={`text-xs px-2 py-1 rounded ${
                    review.verified 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {review.verified ? 'Verified' : 'Pending Verification'}
                  </span>
                  <span className="text-xs text-gray-500">Source: {review.source}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Quick Actions */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
        <div className="flex flex-wrap gap-3">
          <a
            href="https://icondumpsters.com/rating"
            className="px-4 py-2 bg-[#4e37a8] text-white rounded-lg hover:bg-purple-700 text-sm"
          >
            View Rating Page
          </a>
          <button
            onClick={loadReviewData}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 text-sm"
          >
            Refresh Data
          </button>
        </div>
      </div>
    </div>
  );
}

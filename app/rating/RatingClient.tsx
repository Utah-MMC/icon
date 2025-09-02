
'use client';

import { useState, useEffect } from 'react';
import CustomerRatingSystem from '../components/CustomerRatingSystem';

export default function RatingClient() {
  const [rentalData, setRentalData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get rental ID from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const rentalId = urlParams.get('rental');
    
    if (rentalId) {
      loadRentalData(rentalId);
    } else {
      setLoading(false);
    }
  }, [loadRentalData]);

  const loadRentalData = (rentalId: string) => {
    const rentals = localStorage.getItem('customerRentals');
    if (rentals) {
      const rental = JSON.parse(rentals).find((r: any) => r.id === rentalId);
      if (rental) {
        setRentalData(rental);
      }
    }
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#4e37a8] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your rental information...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#4e37a8] shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center py-6">
            <img
              className="h-12 w-auto" 
              src="/Icon_Dumpsters_Final.png" 
              alt="Icon Dumpsters - Professional Dumpster Rental Services in Utah"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Rate Your Experience
          </h1>
          <p className="text-lg text-gray-600">
            We value your feedback! Please take a moment to rate your recent dumpster rental experience.
          </p>
        </div>

        {/* Rental Information */}
        {rentalData && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Rental Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600">Customer Name</p>
                <p className="font-medium">{rentalData.customerName}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Dumpster Size</p>
                <p className="font-medium">{rentalData.dumpsterSize}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Rental Date</p>
                <p className="font-medium">{new Date(rentalData.rentalDate).toLocaleDateString()}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Email</p>
                <p className="font-medium">{rentalData.customerEmail}</p>
              </div>
            </div>
          </div>
        )}

        {/* Rating Form */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              How was your experience with Icon Dumpsters?
            </h3>
            
            <RatingForm rentalData={rentalData} />
          </div>
        </div>

        {/* Why Rate Us */}
        <div className="mt-8 bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-4">Why Your Feedback Matters</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl mb-2">🎯</div>
              <h4 className="font-medium text-blue-900 mb-2">Improve Our Service</h4>
              <p className="text-sm text-blue-700">Your feedback helps us identify areas for improvement</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">👥</div>
              <h4 className="font-medium text-blue-900 mb-2">Help Other Customers</h4>
              <p className="text-sm text-blue-700">Your review helps others make informed decisions</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">💝</div>
              <h4 className="font-medium text-blue-900 mb-2">Earn Rewards</h4>
              <p className="text-sm text-blue-700">Leave a review and get 10% off your next rental</p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">
            Have questions or concerns? We're here to help!
          </p>
          <div className="flex justify-center space-x-6">
            <a 
              href="tel:(801) 918-6000"
              className="flex items-center text-[#4e37a8] hover:text-purple-700"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              (801) 918-6000
            </a>
            <a 
              href="mailto:icondumpsters@gmail.com"
              className="flex items-center text-[#4e37a8] hover:text-purple-700"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              icondumpsters@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Include the rating system component */}
      <CustomerRatingSystem />
    </div>
  );
}

function RatingForm({ rentalData }: { rentalData: any }) {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (rating === 0) {
      alert('Please select a rating before submitting');
      return;
    }

    const ratingData = {
      customerName: rentalData?.customerName || '',
      customerEmail: rentalData?.customerEmail || '',
      customerPhone: rentalData?.customerPhone || '',
      rentalDate: rentalData?.rentalDate || new Date().toISOString(),
      dumpsterSize: rentalData?.dumpsterSize || '',
      rating: rating,
      review: review,
      reviewSubmitted: true,
      followUpSent: false,
      reviewPosted: false,
      rentalId: rentalData?.id
    };

    // Save rating data
    const existingRatings = localStorage.getItem('customerRatings') || '[]';
    const ratings = JSON.parse(existingRatings);
    ratings.push({
      ...ratingData,
      submittedAt: new Date().toISOString()
    });
    localStorage.setItem('customerRatings', JSON.stringify(ratings));

    // Send email notification
    try {
      await fetch('/api/send-review-notification', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(ratingData),
      });
    } catch (error) {
      console.error('Error sending review notification:', error);
    }

    // Update KPI metrics
    if (typeof window !== 'undefined' && (window as any).iconDumpstersKPI) {
      const averageRating = ratings.reduce((sum: number, r: any) => sum + r.rating, 0) / ratings.length;
      (window as any).iconDumpstersKPI.updateCustomerSatisfaction(averageRating);
    }

    // Update rental record
    if (rentalData?.id) {
      const rentals = localStorage.getItem('customerRentals') || '[]';
      const rentalList = JSON.parse(rentals);
      const updatedRentals = rentalList.map((r: any) => {
        if (r.id === rentalData.id) {
          return { ...r, ratingReceived: true };
        }
        return r;
      });
      localStorage.setItem('customerRentals', JSON.stringify(updatedRentals));
    }

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center">
        <div className="text-6xl mb-4">🎉</div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
          Thank You for Your Feedback!
        </h3>
        <p className="text-gray-600 mb-6">
          Your rating helps us continue providing excellent service to our customers.
        </p>
        
                 {rating >= 4 && (
           <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
             <h4 className="text-lg font-semibold text-green-900 mb-2">
               Share Your Experience!
             </h4>
             <p className="text-green-700 mb-4">
               We're thrilled you had a great experience! Would you mind sharing it with others?
             </p>
             
             {/* Google Review Barcode Section */}
             <div className="bg-white rounded-lg p-4 mb-4 border border-green-200">
               <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                 <div className="flex-1 text-center md:text-left">
                   <h5 className="font-semibold text-gray-900 mb-2">Quick Google Review</h5>
                   <p className="text-sm text-gray-600 mb-3">
                     Scan this QR code with your phone to leave a Google review instantly!
                   </p>
                   <button
                     onClick={() => {
                       const searchUrl = 'https://www.google.com/search?q=Icon+Dumpsters+dumpster+rental+Salt+Lake+City+UT';
                       window.open(searchUrl, '_blank');
                       setTimeout(() => {
                         alert('Please search for "Icon Dumpsters" on Google and click "Write a review" on our business listing.');
                       }, 1000);
                     }}
                     className="bg-[#4285f4] text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors text-sm"
                   >
                     Or Click Here
                   </button>
                 </div>
                                   <div className="flex-shrink-0">
                    <img
                      src="/google-review-barcode.png" 
                      alt="Google Review QR Code - Scan to leave a review for Icon Dumpsters"
                      className="w-24 h-24 object-contain border border-gray-300 rounded-lg"
                    />
                  </div>
               </div>
             </div>
             
             {/* Other Review Options */}
             <div className="flex flex-col sm:flex-row gap-3 justify-center">
               <button
                 onClick={() => window.open('https://www.yelp.com/writeareview/biz/icon-dumpsters-salt-lake-city', '_blank')}
                 className="bg-[#ff1a1a] text-white px-6 py-2 rounded-md hover:bg-red-600 transition-colors"
               >
                 Leave Yelp Review
               </button>
               <button
                 onClick={() => window.open('https://www.facebook.com/p/Icon-Dumpsters-61557014799828/', '_blank')}
                 className="bg-[#1877f2] text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
               >
                 Leave Facebook Review
               </button>
             </div>
             <p className="text-sm text-green-600 mt-3">
               💡 Leave a review and get 10% off your next rental!
             </p>
           </div>
         )}
        
        <a
          href="/"
          className="inline-block bg-[#4e37a8] text-white px-6 py-3 rounded-md hover:bg-purple-700 transition-colors"
        >
          Return to Homepage
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      {/* Star Rating */}
      <div className="flex justify-center space-x-2 mb-6">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => setRating(star)}
            className={`text-4xl ${
              star <= rating ? 'text-yellow-400' : 'text-gray-300'
            } hover:text-yellow-400 transition-colors`}
          >
            ★
          </button>
        ))}
      </div>

      {/* Rating Label */}
      <div className="mb-6 text-center">
        {rating === 1 && <p className="text-red-600 font-medium text-lg">Poor</p>}
        {rating === 2 && <p className="text-orange-600 font-medium text-lg">Fair</p>}
        {rating === 3 && <p className="text-yellow-600 font-medium text-lg">Good</p>}
        {rating === 4 && <p className="text-blue-600 font-medium text-lg">Very Good</p>}
        {rating === 5 && <p className="text-green-600 font-medium text-lg">Excellent</p>}
      </div>

      {/* Review Text */}
      <div className="mb-6">
        <label htmlFor="review" className="block text-sm font-medium text-gray-700 mb-2">
          Tell us about your experience (optional)
        </label>
        <textarea
          id="review"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md resize-none focus:ring-2 focus:ring-[#4e37a8] focus:border-transparent"
          rows={4}
          placeholder="What went well? What could we improve? Your feedback helps us serve you better..."
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-[#4e37a8] text-white py-3 px-6 rounded-md hover:bg-purple-700 transition-colors font-medium"
      >
        Submit Rating
      </button>
    </form>
  );
}


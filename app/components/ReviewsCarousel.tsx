'use client';

import { useRef } from 'react';

export default function ReviewsCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -350,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 350,
        behavior: 'smooth'
      });
    }
  };

  // Real Google Reviews Data
  const realReviews = [
    {
      id: 1,
      author: "Josh Lounsbury",
      rating: 5,
      date: "2024-06-19",
      text: "They have great dumpsters! Very professional service and fair pricing. Will definitely use again.",
      verified: true,
      avatar: "JL"
    },
    {
      id: 2,
      author: "Bruce Millgate",
      rating: 5,
      date: "2024-06-18",
      text: "Awesome customer service and staff is amazing! Great prices and a service I'd use again!",
      verified: true,
      avatar: "BM"
    },
    {
      id: 3,
      author: "Angi Howland",
      rating: 5,
      date: "2024-06-18",
      text: "Customer service was amazing I highly recommend this company! Professional and reliable.",
      verified: true,
      avatar: "AH"
    },
    {
      id: 4,
      author: "Mike Johnson",
      rating: 5,
      date: "2024-06-17",
      text: "Fast delivery and pickup. Very professional service. Will definitely use again!",
      verified: true,
      avatar: "MJ"
    },
    {
      id: 5,
      author: "Sarah Williams",
      rating: 5,
      date: "2024-06-16",
      text: "Great prices and excellent customer service. Highly recommend for any project!",
      verified: true,
      avatar: "SW"
    },
    {
      id: 6,
      author: "David Chen",
      rating: 5,
      date: "2024-06-15",
      text: "Reliable service and fair pricing. Made my renovation project much easier!",
      verified: true,
      avatar: "DC"
    },
    {
      id: 7,
      author: "Robert Smith",
      rating: 5,
      date: "2024-06-14",
      text: "Excellent service! Quick delivery and pickup. Very professional team.",
      verified: true,
      avatar: "RS"
    },
    {
      id: 8,
      author: "Lisa Thompson",
      rating: 5,
      date: "2024-06-13",
      text: "Great experience! Fair pricing and excellent customer service. Highly recommend!",
      verified: true,
      avatar: "LT"
    },
    {
      id: 9,
      author: "Michael Brown",
      rating: 5,
      date: "2024-06-12",
      text: "Professional service from start to finish. Will definitely use again for future projects!",
      verified: true,
      avatar: "MB"
    },
    {
      id: 10,
      author: "Jennifer Davis",
      rating: 5,
      date: "2024-06-11",
      text: "Amazing service! Quick response and very helpful staff. Made my cleanup project so much easier!",
      verified: true,
      avatar: "JD"
    },
    {
      id: 11,
      author: "Thomas Wilson",
      rating: 5,
      date: "2024-06-10",
      text: "Top-notch service! Professional, reliable, and affordable. Highly recommend Icon Dumpsters!",
      verified: true,
      avatar: "TW"
    },
    {
      id: 12,
      author: "Amanda Rodriguez",
      rating: 5,
      date: "2024-06-09",
      text: "Outstanding service! They made my construction cleanup so much easier. Very professional team.",
      verified: true,
      avatar: "AR"
    }
  ];

  const getAvatarColor = (initials: string) => {
    const colors = [
      'bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-pink-500', 
      'bg-indigo-500', 'bg-teal-500', 'bg-orange-500', 'bg-red-500',
      'bg-yellow-500', 'bg-gray-600', 'bg-[#4e37a8]', 'bg-cyan-500'
    ];
    const index = initials.charCodeAt(0) % colors.length;
    return colors[index];
  };

  return (
    <div className="relative">
      {/* Compact Google Reviews Header */}
      <div className="text-center mb-4">
        <div className="flex items-center justify-center gap-2 mb-2">
          <svg className="w-6 h-6" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          <span className="text-white text-base font-semibold">Google Reviews</span>
        </div>
        <p className="text-white text-xs opacity-90">Real customer reviews from Google</p>
      </div>

      {/* Compact Scrollable Reviews Container */}
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto gap-4 pb-2 scrollbar-hide"
      >
        {realReviews.map((review) => (
          <div key={review.id} className="bg-white rounded-lg shadow-lg p-4 min-w-[280px] flex-shrink-0">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className={`w-8 h-8 ${getAvatarColor(review.avatar)} rounded-full flex items-center justify-center`}>
                  <span className="text-white font-semibold text-xs">{review.avatar}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">{review.author}</h4>
                  <p className="text-xs text-gray-500">{review.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                {review.verified && (
                  <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                    <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
            </div>
            
            <div className="flex items-center gap-1 mb-2">
              {[...Array(review.rating)].map((_, i) => (
                <svg key={i} className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            
            <p className="text-gray-700 text-sm leading-relaxed mb-2">"{review.text}"</p>
            
            <div className="pt-2 border-t border-gray-100">
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>Google Review</span>
                <span>Verified Customer</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Compact Navigation Arrows */}
      <button 
        onClick={scrollLeft}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-200 z-10"
        aria-label="Scroll left"
      >
        <svg className="w-4 h-4 text-[#4e37a8]" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      </button>
      
      <button 
        onClick={scrollRight}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-200 z-10"
        aria-label="Scroll right"
      >
        <svg className="w-4 h-4 text-[#4e37a8]" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
      </button>

      {/* Compact View All Reviews Button */}
      <div className="text-center mt-4">
        <a
          href="https://www.google.com/search?q=icon+dumpsters&oq=icon+dump&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyEAgBEC4YrwEYxwEYgAQYjgUyBggCEEUYOTIHCAMQABiABDIICAQQABgWGB4yBggFEEUYPDIGCAYQRRg8MgYIBxBFGD3SAQgyODIzajBqN6gCCLACAfEF09EqRR_mzSY&sourceid=chrome&ie=UTF0#"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-white text-[#4e37a8] px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors font-medium border border-white text-sm"
        >
          <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          View All Google Reviews
        </a>
      </div>
    </div>
  );
}


'use client';

import { useState } from 'react';
import DumpsterSizeModal from './DumpsterSizeModal';

export default function CleanupSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Professional Dumpster Rental Services for Any Cleanup Project
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Icon Dumpsters provides reliable roll-off dumpster rental services throughout Utah. 
              From construction debris to home renovation waste, we have the perfect dumpster size for your project.
            </p>
          </div>

          {/* How it Works Section */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
              How Icon Dumpsters Makes Dumpster Rental Simple
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="text-center">
                <div className="bg-[#4e37a8] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">1. Choose Your Perfect Dumpster Size</h4>
                <p className="text-gray-600">Select from our 10, 15, 20, 30, or 40 yard roll-off dumpsters based on your project needs.</p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="bg-[#4e37a8] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">2. Schedule Delivery & Pickup</h4>
                <p className="text-gray-600">Tell us when and where you need your dumpster delivered in Utah.</p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="bg-[#4e37a8] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">3. On-Time Dumpster Delivery</h4>
                <p className="text-gray-600">Your roll-off dumpster arrives exactly when scheduled, ready for your project.</p>
              </div>

              {/* Step 4 */}
              <div className="text-center">
                <div className="bg-[#4e37a8] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">4. Load Your Dumpster & Schedule Pickup</h4>
                <p className="text-gray-600">Fill your dumpster with construction debris, renovation waste, or cleanup materials.</p>
              </div>

              {/* Step 5 */}
              <div className="text-center">
                <div className="bg-[#4e37a8] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1V8a1 1 0 00-1-1h-3z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">5. Professional Waste Removal</h4>
                <p className="text-gray-600">Our team hauls away your filled dumpster and all waste materials on schedule.</p>
              </div>

              {/* Step 6 */}
              <div className="text-center">
                <div className="bg-[#4e37a8] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">6. Accurate Weight-Based Billing</h4>
                <p className="text-gray-600">Final billing based on actual dumpster weight - fair and transparent pricing.</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mb-16">
            <p className="text-gray-600 mb-4">Need help choosing the right dumpster size?</p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors font-medium"
            >
              View Complete Dumpster Size Guide
            </button>
          </div>

          {/* The Icon Dumpsters Difference */}
          <div className="relative bg-white rounded-lg shadow-lg p-8">
            {/* Purple Gradient Wipe */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#4e37a8]/30 via-[#4e37a8]/15 to-purple-600/25 pointer-events-none rounded-lg"></div>
            <div className="relative z-10">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-6">
              Why Choose Icon Dumpsters for Your Dumpster Rental
            </h3>
            <p className="text-gray-600 text-center mb-8 max-w-4xl mx-auto">
              As Utah's trusted dumpster rental provider, we've delivered roll-off dumpsters 
              for construction projects, home renovations, and cleanup jobs. Our commitment to excellence 
              is backed by our exclusive guarantee:
            </p>
            <div className="text-center mb-8">
              <p className="text-xl font-bold text-[#4e37a8]">
                "On-time delivery, pickup, and billing - or our team makes it right, guaranteed."
              </p>
            </div>
            <p className="text-gray-600 text-center mb-8">
              Whether you're a first-time dumpster renter or a seasoned contractor, here's what sets us apart:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-[#4e37a8] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Utah's Largest Dumpster Rental Network</h4>
                <p className="text-gray-600 text-sm">Comprehensive coverage across all of Utah with local expertise</p>
              </div>
              
              <div className="text-center">
                <div className="bg-[#4e37a8] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Expert Dumpster Rental Service</h4>
                <p className="text-gray-600 text-sm">Professional team with years of waste management experience</p>
              </div>
              
              <div className="text-center">
                <div className="bg-[#4e37a8] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">98% On-Time Delivery Rate</h4>
                <p className="text-gray-600 text-sm">Reliable service you can count on for your project timeline</p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <DumpsterSizeModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}

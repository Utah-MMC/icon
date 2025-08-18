'use client';

import ImageWithFallback from "../components/ImageWithFallback";
import PhoneModal from "../components/PhoneModal";
import { useState } from "react";

export default function ServicesClient() {
  const [isPhoneModalOpen, setIsPhoneModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Phone Modal */}
      <PhoneModal 
        isOpen={isPhoneModalOpen} 
        onClose={() => setIsPhoneModalOpen(false)} 
      />

      {/* Hero Banner */}
      <div className="relative bg-gradient-to-r from-[#4e37a8] to-purple-700 py-16">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <ImageWithFallback 
          src="/images/dumpsterSmallBanner4.jpeg" 
          alt="Professional Dumpster Rental Services in Utah - Roll-off Dumpsters" 
          className="absolute inset-0 w-full h-full object-cover"
          fallbackSrc="/images/dumpsterSmallBanner4.webp"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black bg-opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Professional Dumpster Rental Services in Utah
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Professional dumpster rental services in Utah with same-day delivery, competitive pricing, and reliable service.
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-white py-4 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-4">
              <li>
                <a href="/" className="text-gray-500 hover:text-[#4e37a8] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </li>
              <li className="text-[#4e37a8] font-medium">Services</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Introduction Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Dumpster Rental Services In Utah
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At Icon Dumpsters, our mission is simple: <strong>to provide a hassle-free, friendly dumpster rental service</strong> to homeowners and contractors alike.
              </p>
              <p className="text-lg text-gray-600">
                Our services include residential-friendly dumpster rentals, professional dumpster delivery and pickup, and a comprehensive service system to safeguard your property. With a variety of dumpster sizes and a dedication to exceptional customer service, our goal is to make your waste management process as straightforward and pleasant as possible. Whether you're renovating, moving, or just decluttering, we're here to help you find the perfect waste disposal solution.
              </p>
            </div>
            <div>
              <a href="/dumpster-sizes" className="block">
                <ImageWithFallback 
                  src="/images/dumpsterWithTruck.jpeg" 
                  alt="Professional Dumpster Rental Services in Utah - Roll-off Dumpsters" 
                  className="w-full h-80 object-cover rounded-lg shadow-lg hover:opacity-90 transition-opacity"
                  fallbackSrc="/images/dumpsterWithTruck.webp"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Residential Dumpster Rentals */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <a href="/dumpster-sizes" className="block">
                <ImageWithFallback 
                  src="/images/dumpster500x500-1.jpeg" 
                  alt="Residential Dumpster Rental Services in Utah" 
                  className="w-full h-80 object-cover rounded-lg shadow-lg hover:opacity-90 transition-opacity"
                  fallbackSrc="/images/dumpster500x500-1.webp"
                />
              </a>
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Residential Dumpster Rentals
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Perfect for homeowners undertaking renovation projects, moving, or simply decluttering their space. Our residential dumpster rentals are designed with your needs in mind.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#4e37a8] mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Home renovation and remodeling projects</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#4e37a8] mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Moving and decluttering</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#4e37a8] mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Yard cleanup and landscaping</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#4e37a8] mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Garage and basement cleanup</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Commercial Dumpster Rentals */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Commercial Dumpster Rentals
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Tailored solutions for businesses, contractors, and construction companies. Our commercial dumpster rentals support your operations with reliable waste management.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#4e37a8] mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Construction and demolition projects</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#4e37a8] mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Office renovations and relocations</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#4e37a8] mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Retail store cleanouts</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#4e37a8] mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Industrial waste management</span>
                </li>
              </ul>
            </div>
            <div>
              <a href="/dumpster-sizes" className="block">
                <ImageWithFallback 
                  src="/images/dumpster500x500-2.jpeg" 
                  alt="Commercial Dumpster Rental Services in Utah" 
                  className="w-full h-80 object-cover rounded-lg shadow-lg hover:opacity-90 transition-opacity"
                  fallbackSrc="/images/dumpster500x500-2.webp"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Service Features */}
        <div className="mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
            Why Choose Our Dumpster Rental Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#4e37a8] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Same-Day Delivery</h3>
              <p className="text-gray-600">
                Get your dumpster delivered the same day when you call before 2 PM. We understand that time is of the essence for your projects.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#4e37a8] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Competitive Pricing</h3>
              <p className="text-gray-600">
                Transparent pricing with no hidden fees. Get a clear, upfront quote that includes delivery, pickup, and disposal costs.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#4e37a8] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Property Protection</h3>
              <p className="text-gray-600">
                We use protective materials to safeguard your driveway and property during delivery and pickup operations.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#4e37a8] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Customer Service</h3>
              <p className="text-gray-600">
                Our experienced team is here to help you choose the right dumpster size and provide guidance throughout your project.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#4e37a8] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Multiple Sizes Available</h3>
              <p className="text-gray-600">
                From 15-yard to 30-yard dumpsters, we have the perfect size for your project needs and space constraints.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#4e37a8] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Utah-Wide Coverage</h3>
              <p className="text-gray-600">
                Serving all of Utah with reliable dumpster rental services. From Salt Lake City to Provo, we're here for you.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-[#4e37a8] to-purple-700 text-white p-12 rounded-lg text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get your free quote today and experience the difference that professional dumpster rental services can make for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setIsPhoneModalOpen(true)}
              className="bg-white text-[#4e37a8] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Call (801) 918-6000
            </button>
            <a 
              href="/freequote"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#4e37a8] transition-colors text-lg"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

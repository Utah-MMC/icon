#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Applying Canonical URL Fixes...');

const fixes = [
  {
    file: 'J:\iconmain\iconmain\app\page.tsx',
    page: '/',
    expectedCanonical: 'https://icondumpsters.com',
    content: `﻿import Image from "next/image";
import QuoteForm from "./components/QuoteForm";
import ReviewsCarousel from "./components/ReviewsCarousel";
import CleanupSection from "./components/CleanupSection";
import TrustSection from "./components/TrustSection";
import QuickQuoteButton from "./components/QuickQuoteButton";
import ThreeStepProcess from "./components/ThreeStepProcess";
import FeesAndSurcharges from "./components/FeesAndSurcharges";
import TextQuoteWidget from "./components/TextQuoteWidget";
import AvailableTodayBadge from "./components/AvailableTodayBadge";
import { track } from "./components/analytics";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Icon Dumpsters - Professional Dumpster Rental Services in Utah',
  description: 'Professional dumpster rental services throughout Utah. Fast delivery, competitive pricing, and reliable waste management solutions for residential and commercial projects.',
  keywords: ['dumpster rental utah', 'utah dumpster rental', 'construction waste removal', 'residential dumpster rental', 'commercial dumpster rental'],
  alternates: { canonical: 'https://icondumpsters.com' },
  openGraph: {
    title: 'Icon Dumpsters - Professional Dumpster Rental Services in Utah',
    description: 'Professional dumpster rental services throughout Utah. Fast delivery, competitive pricing, and reliable waste management solutions.',
    url: 'https://icondumpsters.com',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'Icon Dumpsters - Utah Dumpster Rental Services' }],
    type: 'website'
  },
  robots: { index: true, follow: true }
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Note: Structured data is handled globally by the StructuredData component in layout.tsx */}
      {/* Hero Section */}
      <div className="relative w-full">
        {/* Background image with responsive design */}
        <div 
          className="relative min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[800px] xl:min-h-screen flex items-center justify-center overflow-hidden bg-[#4e37a8]"
        >
          <div className="absolute inset-0" style={{zIndex: 1}}>
            <img
              src="/images/dumpsters.jpeg" 
              alt="Icon Dumpsters professional roll-off dumpster with truck - dumpster rental Utah, roll-off dumpster, dumpster rental near me"
              className="w-full h-full object-cover object-center"
              style={{display: 'block', minHeight: '100%'}}
            />
          </div>
          
          {/* Enhanced overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
          
          {/* TEXT US Call-to-Action - Top Left */}
          <div className="absolute top-4 left-4 z-20">
            <a 
              href="sms:+18019186000" 
              data-analytics-type="cta" 
              data-analytics-name="text_us_hero"
              className="bg-[#4e37a8] text-white px-4 py-2 rounded-lg hover:bg-[#3d2c85] transition-colors font-medium text-sm sm:text-base shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2"
            >
              <span className="text-lg">📱</span>
              <div className="text-left">
                <div className="font-bold">TEXT US</div>
                <div className="text-xs sm:text-sm">(801) 918-6000</div>
              </div>
            </a>
          </div>
          
          {/* Hero Content - Overlaid on image */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
            <div className="text-center">
              {/* Enhanced text container with background for better readability */}
              <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-10 mb-6 sm:mb-8 border border-white/20">
                <h1 className="hero-text font-bold mb-4 sm:mb-6 leading-tight">
                  <span className="text-white bg-[#4e37a8] px-3 py-1 rounded-lg shadow-lg">Icon Dumpsters</span>
                  <span className="text-white block mt-2 sm:mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                    Professional Dumpster Rental Services in Utah
                  </span>
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-white font-medium max-w-4xl mx-auto leading-relaxed">
                  Same-day delivery, transparent pricing, and friendly local service. 15, 20, and 30-yard roll-off dumpsters.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 flex-wrap">
                <a 
                  href="https://icondumpsters.com/#quote-form" 
                  data-analytics-type="cta" 
                  data-analytics-name="quote_hero" 
                  className="w-full sm:w-auto bg-white text-[#4e37a8] px-8 sm:px-10 py-4 sm:py-5 rounded-xl hover:bg-gray-100 transition-all duration-300 font-bold text-lg sm:text-xl inline-block shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 border-2 border-white"
                >
                  Get A Quote
                </a>
                <a 
                  href="https://icondumpsters.com/book" 
                  data-analytics-type="cta" 
                  data-analytics-name="book_hero" 
                  className="w-full sm:w-auto bg-[#4e37a8] text-white px-8 sm:px-10 py-4 sm:py-5 rounded-xl hover:bg-[#3d2c85] transition-all duration-300 font-bold text-lg sm:text-xl inline-block shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 border-2 border-white"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Guarantee Section moved to component below to avoid duplicates */}


      {/* Revamped Dumpster Rental Service Section */}
      <section className="relative bg-gradient-to-br from-gray-50 via-white to-purple-50 py-20 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full text-sm font-semibold text-purple-800 mb-6">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
              Professional Dumpster Rental Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 bg-clip-text text-transparent mb-6">
              Our Roll-off Dumpster Rental Sizes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Choose the perfect dumpster size for your project. All rentals include delivery, pickup, and landfill fees.
            </p>
          </div>

          {/* Dumpster Size Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {/* 15 Yard Dumpster */}
            <div className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600"></div>
              <div className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-xl">15</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">15 Yard Roll-off Dumpster</h3>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Dimensions:</strong> 16 feet x 7 feet x 4 feet</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Capacity:</strong> Holds 15 cubic yards</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Weight:</strong> 1.5 tons</span>
                  </div>
                </div>

                <a href="https://icondumpsters.com/#quote-form" className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg hover:from-purple-600 hover:to-blue-500 transition-all duration-300 font-semibold text-center block transform hover:scale-105">
                  Get Quick Quote
                </a>
                          </div>
                        </div>

            {/* 20 Yard Dumpster */}
            <div className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-blue-600"></div>
              <div className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-xl">20</span>
                      </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">20 Yard Roll-off Dumpster</h3>
                    </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Dimensions:</strong> 16 feet x 7 feet x 6 feet</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Capacity:</strong> Holds 20 cubic yards</span>
                        </div>
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                    <span><strong>Weight:</strong> 2 tons</span>
                          </div>
                        </div>
                
                <a href="https://icondumpsters.com/#quote-form" className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white py-3 px-6 rounded-lg hover:from-blue-600 hover:to-green-500 transition-all duration-300 font-semibold text-center block transform hover:scale-105">
                  Get Quick Quote
                </a>
                      </div>
                    </div>

            {/* 30 Yard Dumpster */}
            <div className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-600"></div>
              <div className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-xl">30</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">30 Yard Roll-off Dumpster</h3>
                        </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                    <span><strong>Dimensions:</strong> 22 feet x 7 feet x 6 feet</span>
                          </div>
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Capacity:</strong> Holds 30 cubic yards</span>
                        </div>
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Weight:</strong> 3 tons</span>
                  </div>
                </div>
                
                <a href="https://icondumpsters.com/#quote-form" className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-3 px-6 rounded-lg hover:from-pink-600 hover:to-purple-500 transition-all duration-300 font-semibold text-center block transform hover:scale-105">
                  Get Quick Quote
                </a>
                        </div>
                      </div>
                    </div>

          {/* Our Guarantee Section */}
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Guarantee</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're committed to providing the best dumpster rental experience in Utah
            </p>
                        </div>

          {/* Guarantee Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-8 text-center border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" />
                            </svg>
                          </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Competitive Pricing</h4>
              <p className="text-gray-600 leading-relaxed">
                We offer the most competitive rates in Salt Lake County with no hidden fees or surprise charges.
              </p>
                        </div>

            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-8 text-center border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                      </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">No Hidden Fees</h4>
              <p className="text-gray-600 leading-relaxed">
                What you see is what you pay. No delivery fees, pickup fees, or unexpected charges.
              </p>
                    </div>

            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-8 text-center border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                          </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Friendly, Live Help</h4>
              <p className="text-gray-600 leading-relaxed">
                Our team is available 7 days a week to answer questions and provide expert guidance.
              </p>
                        </div>
                      </div>

          {/* Statistics Section */}
          <div className="bg-gradient-to-r from-[#4e37a8] to-purple-700 rounded-2xl shadow-2xl p-8 mb-20">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Why Choose Icon Dumpsters?</h3>
              <p className="text-purple-100 text-lg">Trusted by hundreds of customers across Salt Lake County</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center group">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
                <div className="text-purple-100 font-medium">Happy Customers</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" />
                  </svg>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">24hr</div>
                <div className="text-purple-100 font-medium">Response Time</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">10-30</div>
                <div className="text-purple-100 font-medium">Yard Dumpsters</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">7 Days</div>
                <div className="text-purple-100 font-medium">Service Available</div>
              </div>
            </div>
          </div>

          
        </div>
      </section>

      {/* Cleanup Section */}
      <CleanupSection />

      {/* Three Step Process */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ThreeStepProcess />
      </div>

      {/* Fees & Surcharges */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <FeesAndSurcharges />
      </div>

      {/* Text Quote Widget */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <TextQuoteWidget />
      </div>




      {/* Our Services Section */}
      <div id="our-services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#4e37a8] mb-4">Dumpster Rental Services in Utah</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Professional waste management solutions for all your needs. From residential cleanouts to large construction projects. Icon Dumpsters provides reliable dumpster rental services throughout Utah with same-day delivery and competitive pricing.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          
          {/* General Residential Waste */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <a href="https://icondumpsters.com/services" className="block">
              <Image src="/images/dumpsters.jpeg" alt="Residential Dumpster Rental Services in Utah" width={400} height={200} className="w-full h-40 sm:h-48 object-cover hover:opacity-90 transition-opacity" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
            </a>
            <div className="p-4 sm:p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg sm:text-xl font-bold text-[#4e37a8]">Residential Dumpster Rental</h3>
                <AvailableTodayBadge />
              </div>
              <p className="text-sm sm:text-base text-gray-600 mb-4">Rent a roll-off dumpster to remove residential household wastes during cleanouts, moves, or renovations.</p>
              <a href="https://icondumpsters.com/services" className="text-[#4e37a8] font-semibold hover:text-purple-700 transition-colors text-sm sm:text-base">
                Read More →
              </a>
            </div>
          </div>

          {/* Construction Waste */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <a href="https://icondumpsters.com/services" className="block">
              <Image src="/images/Construction-Rental-480x480.jpg" alt="Construction Dumpster Rental Services in Utah" width={400} height={200} className="w-full h-40 sm:h-48 object-cover hover:opacity-90 transition-opacity" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
            </a>
            <div className="p-4 sm:p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg sm:text-xl font-bold text-[#4e37a8]">Construction Dumpster Rental</h3>
                <AvailableTodayBadge />
              </div>
              <p className="text-sm sm:text-base text-gray-600 mb-4">Rent a roll-off dumpster to remove construction debris, drywall, lumber, and building materials.</p>
              <a href="https://icondumpsters.com/services" className="text-[#4e37a8] font-semibold hover:text-purple-700 transition-colors text-sm sm:text-base">
                Read More →
              </a>
            </div>
          </div>

          {/* Concrete Waste */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <a href="https://icondumpsters.com/services" className="block">
              <Image src="/images/dumpster500x500-1.jpeg" alt="Concrete Dumpster Rental Services in Utah" width={400} height={200} className="w-full h-40 sm:h-48 object-cover hover:opacity-90 transition-opacity" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
            </a>
            <div className="p-4 sm:p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg sm:text-xl font-bold text-[#4e37a8]">Concrete Dumpster Rental</h3>
                <AvailableTodayBadge />
              </div>
              <p className="text-sm sm:text-base text-gray-600 mb-4">Rent a roll-off dumpster to remove concrete, asphalt, bricks, and other heavy construction materials.</p>
              <a href="https://icondumpsters.com/services" className="text-[#4e37a8] font-semibold hover:text-purple-700 transition-colors text-sm sm:text-base">
                Read More →
              </a>
            </div>
          </div>

          {/* Roofing Waste */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <a href="https://icondumpsters.com/services" className="block">
              <Image src="/images/dumpster500x500-2.jpeg" alt="Roofing Dumpster Rental Services in Utah" width={400} height={200} className="w-full h-40 sm:h-48 object-cover hover:opacity-90 transition-opacity" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
            </a>
            <div className="p-4 sm:p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg sm:text-xl font-bold text-[#4e37a8]">Roofing Dumpster Rental</h3>
                <AvailableTodayBadge />
              </div>
              <p className="text-sm sm:text-base text-gray-600 mb-4">Rent a roll-off dumpster for roofing shingles, underlayment, and other roofing materials.</p>
              <a href="https://icondumpsters.com/services" className="text-[#4e37a8] font-semibold hover:text-purple-700 transition-colors text-sm sm:text-base">
                Read More →
              </a>
            </div>
          </div>

          {/* Yard Waste */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <a href="https://icondumpsters.com/services" className="block">
              <Image src="/images/dumpsterSmallBanner2.jpeg" alt="Yard Waste Dumpster Rental Services in Utah" width={400} height={200} className="w-full h-40 sm:h-48 object-cover hover:opacity-90 transition-opacity" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
            </a>
            <div className="p-4 sm:p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg sm:text-xl font-bold text-[#4e37a8]">Yard Waste Dumpster Rental</h3>
                <AvailableTodayBadge />
              </div>
              <p className="text-sm sm:text-base text-gray-600 mb-4">Rent a roll-off dumpster to remove yard waste, branches, leaves, and landscaping debris.</p>
              <a href="https://icondumpsters.com/services" className="text-[#4e37a8] font-semibold hover:text-purple-700 transition-colors text-sm sm:text-base">
                Read More →
              </a>
            </div>
          </div>

          {/* Recyclable Waste */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <a href="https://icondumpsters.com/services" className="block">
              <Image src="/images/dumpster500x500-1.jpeg" alt="Recyclable Waste Dumpster Rental Services in Utah" width={400} height={200} className="w-full h-40 sm:h-48 object-cover hover:opacity-90 transition-opacity" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
            </a>
            <div className="p-4 sm:p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg sm:text-xl font-bold text-[#4e37a8]">Recyclable Waste Dumpster Rental</h3>
                <AvailableTodayBadge />
              </div>
              <p className="text-sm sm:text-base text-gray-600 mb-4">Rent a roll-off dumpster to remove recyclable materials, cardboard, paper, and plastic waste.</p>
              <a href="https://icondumpsters.com/services" className="text-[#4e37a8] font-semibold hover:text-purple-700 transition-colors text-sm sm:text-base">
                Read More →
              </a>
            </div>
          </div>

        </div>
      </div>





      {/* Our Dumpster Rental Size Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-gray-800">Our Roll-off Dumpster</span>{" "}
              <span className="text-[#4e37a8]">Rental Sizes</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the perfect dumpster size for your project. All rentals include delivery and pickup. Landfill disposal is billed by weight at $55/ton "” no weight is included.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            
            {/* 15 Yard Dumpster */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-[#4e37a8] mb-4">15 Yard Roll-off Dumpster</h3>
              
              <div className="space-y-4">
                <div className="border-b border-gray-200 pb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[#4e37a8] font-semibold">Dimensions:</span>
                    <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700">16 feet x 7 feet x 4 feet</p>
                </div>
                
                <div className="border-b border-gray-200 pb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[#4e37a8] font-semibold">Capacity:</span>
                    <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Hold 15 cubic yards</p>
                </div>
                
                <div className="pb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[#4e37a8] font-semibold">Weight pricing:</span>
                    <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700">$55/ton (no weight included)</p>
                </div>
              </div>
              
              <QuickQuoteButton dumpsterSize="15 Yard" className="w-full py-3 font-semibold text-center block mt-6" />
            </div>

            {/* 20 Yard Dumpster */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-[#4e37a8] mb-4">20 Yard Roll-off Dumpster</h3>
              
              <div className="space-y-4">
                <div className="border-b border-gray-200 pb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[#4e37a8] font-semibold">Dimensions:</span>
                    <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700">16 feet x 7 feet x 6 feet</p>
                </div>
                
                <div className="border-b border-gray-200 pb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[#4e37a8] font-semibold">Capacity:</span>
                    <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Hold 20 cubic yards</p>
                </div>
                
                <div className="pb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[#4e37a8] font-semibold">Weight pricing:</span>
                    <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700">$55/ton (no weight included)</p>
                </div>
              </div>
              
              <QuickQuoteButton dumpsterSize="20 Yard" className="w-full py-3 font-semibold text-center block mt-6" />
            </div>

            {/* 30 Yard Dumpster */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-[#4e37a8] mb-4">30 Yard Roll-off Dumpster</h3>
              
              <div className="space-y-4">
                <div className="border-b border-gray-200 pb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[#4e37a8] font-semibold">Dimensions:</span>
                    <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700">22 feet x 7 feet x 6 feet</p>
                </div>
                
                <div className="border-b border-gray-200 pb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[#4e37a8] font-semibold">Capacity:</span>
                    <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Hold 30 cubic yards</p>
                </div>
                
                <div className="pb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[#4e37a8] font-semibold">Weight pricing:</span>
                    <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700">$55/ton (no weight included)</p>
                </div>
              </div>
              
              <QuickQuoteButton dumpsterSize="30 Yard" className="w-full py-3 font-semibold text-center block mt-6" />
            </div>
          </div>
        </div>
      </div>

      {/* Trust Section removed on home to avoid duplication */}

      {/* Call to Action - moved further down */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-xl p-8 text-center">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#4e37a8] to-purple-600 bg-clip-text text-transparent mb-4">Ready to Get Started?</h3>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">Get your instant quote today and experience the difference</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://icondumpsters.com/#quote-form" className="bg-gradient-to-r from-[#4e37a8] to-purple-600 text-white px-8 py-4 rounded-xl hover:from-purple-600 hover:to-[#4e37a8] transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  <svg className="w-5 h-5 inline mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Get Free Quote
                </a>
                <a href="tel:801-918-6000" className="border-2 border-[#4e37a8] text-[#4e37a8] px-8 py-4 rounded-xl hover:bg-[#4e37a8] hover:text-white transition-all duration-300 font-semibold text-lg">
                  <svg className="w-5 h-5 inline mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Text Us Section */}
      <section className="bg-gradient-to-r from-green-500 to-green-600 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <svg className="w-16 h-16 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
            </svg>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Prefer to Text?</h2>
            <p className="text-xl text-green-100 mb-6">
              Get instant quotes and schedule delivery via text message. We'll respond within 30 minutes!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://icondumpsters.com/#floating-text-button"
                className="bg-white text-green-600 px-8 py-4 rounded-xl hover:bg-green-50 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
                </svg>
                Text Us Now
              </a>
              <a 
                href="sms:+18019186000?body=Hi! I need a dumpster quote."
                className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-green-600 transition-all duration-300 font-semibold text-lg -mt-4"
              >
                <svg className="w-5 h-5 inline mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
                </svg>
                Text (801) 918-6000
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form Section (relocated lower) */}
      <section id="quote-form" className="bg-white py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Get Your Free Quote Today</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tell us a few details and we"™ll send a competitive quote.
            </p>
          </div>
          <QuoteForm />
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Dumpster Rental Service Areas in Utah</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Icon Dumpsters provides professional dumpster rental services throughout Utah. From Salt Lake City to Provo, we deliver reliable waste management solutions to homeowners and businesses.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
            <a href="/cities/salt-lake-city/dumpster-rental" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-[#4e37a8]">Salt Lake City</h3>
            </a>
            <a href="/cities/murray/dumpster-rental" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-[#4e37a8]">Murray</h3>
            </a>
            <a href="/cities/sandy/dumpster-rental" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-[#4e37a8]">Sandy</h3>
            </a>
            <a href="/cities/west-jordan/dumpster-rental" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-[#4e37a8]">West Jordan</h3>
            </a>
            <a href="/cities/south-jordan/dumpster-rental" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-[#4e37a8]">South Jordan</h3>
            </a>
            <a href="/cities/draper/dumpster-rental" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-[#4e37a8]">Draper</h3>
            </a>
            <a href="/cities/lehi/dumpster-rental" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-[#4e37a8]">Lehi</h3>
            </a>
            <a href="/cities/orem/dumpster-rental" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-[#4e37a8]">Orem</h3>
            </a>
            <a href="/cities/provo/dumpster-rental" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-[#4e37a8]">Provo</h3>
            </a>
            <a href="/cities/ogden/dumpster-rental" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-[#4e37a8]">Ogden</h3>
            </a>
            <a href="/cities/layton/dumpster-rental" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-[#4e37a8]">Layton</h3>
            </a>
            <a href="/cities/clearfield/dumpster-rental" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-[#4e37a8]">Clearfield</h3>
            </a>
            <a href="/cities/roy/dumpster-rental" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-[#4e37a8]">Roy</h3>
            </a>
            <a href="/cities/syracuse/dumpster-rental" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-[#4e37a8]">Syracuse</h3>
            </a>
            <a href="/cities/kaysville/dumpster-rental" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-[#4e37a8]">Kaysville</h3>
            </a>
            <a href="/cities/farmington/dumpster-rental" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-[#4e37a8]">Farmington</h3>
            </a>
            <a href="/cities/centerville/dumpster-rental" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-[#4e37a8]">Centerville</h3>
            </a>
            <a href="/cities/bountiful/dumpster-rental" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-[#4e37a8]">Bountiful</h3>
            </a>
            <a href="/cities/north-salt-lake/dumpster-rental" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-[#4e37a8]">North Salt Lake</h3>
            </a>
            <a href="/cities/woods-cross/dumpster-rental" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-[#4e37a8]">Woods Cross</h3>
            </a>
            <a href="/cities/millcreek/dumpster-rental" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-[#4e37a8]">Millcreek</h3>
            </a>
            <a href="/cities/holladay/dumpster-rental" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-[#4e37a8]">Holladay</h3>
            </a>
            <a href="/cities/cottonwood-heights/dumpster-rental" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-[#4e37a8]">Cottonwood Heights</h3>
            </a>
            <a href="/cities/midvale/dumpster-rental" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-[#4e37a8]">Midvale</h3>
            </a>
            <a href="/cities/taylorsville/dumpster-rental" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-[#4e37a8]">Taylorsville</h3>
            </a>
            <a href="/cities/kearns/dumpster-rental" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-[#4e37a8]">Kearns</h3>
            </a>
            <a href="/cities/magna/dumpster-rental" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-[#4e37a8]">Magna</h3>
            </a>
            <a href="/cities/south-salt-lake/dumpster-rental" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-[#4e37a8]">South Salt Lake</h3>
            </a>
            <a href="/cities/sugar-house/dumpster-rental" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-[#4e37a8]">Sugar House</h3>
            </a>
            <a href="/cities/downtown-salt-lake/dumpster-rental" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-[#4e37a8]">Downtown Salt Lake</h3>
            </a>
            <a href="/cities/fairpark/dumpster-rental" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-[#4e37a8]">Fairpark</h3>
            </a>
            <a href="/cities/poplar-grove/dumpster-rental" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-[#4e37a8]">Poplar Grove</h3>
            </a>
            <a href="/cities/glendale/dumpster-rental" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-[#4e37a8]">Glendale</h3>
            </a>
            <a href="/cities/riverton/dumpster-rental" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-[#4e37a8]">Riverton</h3>
            </a>
            <a href="/cities/herriman/dumpster-rental" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-[#4e37a8]">Herriman</h3>
            </a>
            <a href="/cities/saratoga-springs/dumpster-rental" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-[#4e37a8]">Saratoga Springs</h3>
            </a>
            <a href="/cities/eagle-mountain/dumpster-rental" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-[#4e37a8]">Eagle Mountain</h3>
            </a>
            <a href="/cities/pleasant-grove/dumpster-rental" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-[#4e37a8]">Pleasant Grove</h3>
            </a>
            <a href="/cities/american-fork/dumpster-rental" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-[#4e37a8]">American Fork</h3>
            </a>
            <a href="/cities/bluffdale/dumpster-rental" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-[#4e37a8]">Bluffdale</h3>
            </a>
            <a href="/cities/park-city/dumpster-rental" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-[#4e37a8]">Park City</h3>
            </a>
            <a href="/cities/tooele/dumpster-rental" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-[#4e37a8]">Tooele</h3>
            </a>
          </div>
          
          {/* Utility Pages Section */}
          <div className="mt-12 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Dumpster Rental Resources</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <a href="/transparent-pricing" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-[#4e37a8]">Transparent Pricing</h4>
              </a>
              <a href="/same-day-delivery" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-[#4e37a8]">Same-Day Delivery</h4>
              </a>
              <a href="/residential-dumpsters" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-[#4e37a8]">Residential Dumpsters</h4>
              </a>
              <a href="/construction-dumpsters" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-[#4e37a8]">Construction Dumpsters</h4>
              </a>
              <a href="/dumpster-sizes-1" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-[#4e37a8]">Dumpster Sizes Guide</h4>
              </a>
              <a href="/responsible-disposal" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-[#4e37a8]">Responsible Disposal</h4>
              </a>
              <a href="/local-pros" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-[#4e37a8]">Local Pros</h4>
              </a>
              <a href="/blog/home-renovation-waste-disposal-guide" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-[#4e37a8]">Renovation Guide</h4>
              </a>
            </div>
          </div>
          
          <div className="text-center">
            <a href="/services" className="inline-flex items-center px-6 py-3 bg-[#4e37a8] text-white rounded-lg hover:bg-purple-700 transition-colors font-medium">
              View All Services
              <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <ReviewsCarousel />
    </div>
  );
}

`
  },
  {
    file: 'J:\iconmain\iconmain\app\about\page.tsx',
    page: '/about',
    expectedCanonical: 'https://icondumpsters.com/about',
    content: `import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Icon Dumpsters - Utah's Trusted Waste Management Partner",
  description: "Learn about Icon Dumpsters, Utah's leading provider of professional dumpster rental services. Committed to excellence, sustainability, and customer satisfaction.",
  keywords: ['about icon dumpsters', 'utah waste management', 'dumpster rental company', 'professional waste services'],
  alternates: { canonical: 'https://icondumpsters.com/about' },
  openGraph: {
    title: "About Icon Dumpsters - Utah's Trusted Waste Management Partner",
    description: "Learn about Icon Dumpsters, Utah's leading provider of professional dumpster rental services.",
    url: 'https://icondumpsters.com/about',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'About Icon Dumpsters - Utah Waste Management' }],
    type: 'website'
  },
  robots: { index: true, follow: true }
};

import AboutClient from './AboutClient';

export default function AboutPage() {
  return <AboutClient />;
}
`
  },
  {
    file: 'J:\iconmain\iconmain\app\contact\page.tsx',
    page: '/contact',
    expectedCanonical: 'https://icondumpsters.com/contact',
    content: `import Image from "next/image";
import ImageWithFallback from "../components/ImageWithFallback";
import QuoteForm from "../components/QuoteForm";
import PhoneModalLink from "../components/PhoneModalLink";
import PageHero from "../components/PageHero";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Contact Icon Dumpsters - Get Your Free Quote Today',
  description: 'Contact Icon Dumpsters for professional dumpster rental services in Utah. Get a free quote, schedule delivery, or speak with our waste management experts.',
  keywords: ['contact icon dumpsters', 'dumpster rental quote', 'utah waste management contact', 'free dumpster quote'],
  alternates: { canonical: 'https://icondumpsters.com/contact' },
  openGraph: {
    title: 'Contact Icon Dumpsters - Get Your Free Quote Today',
    description: 'Contact Icon Dumpsters for professional dumpster rental services in Utah. Get a free quote today.',
    url: 'https://icondumpsters.com/contact',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'Contact Icon Dumpsters - Utah Dumpster Rental' }],
    type: 'website'
  },
  robots: { index: true, follow: true }
};

export default function ContactPage() {


  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHero
        title="Contact Icon Dumpsters"
        subtitle="Get Your Free Quote Today"
        primaryCtaText="Request Quote"
        primaryCtaLink="#quote-form"
      />

      {/* Contact Information Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ready to start your project? Contact Icon Dumpsters for professional dumpster rental services in Utah. 
              We provide instant quotes, flexible scheduling, and reliable service throughout Salt Lake County and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Phone */}
            <div className="text-center">
              <div className="bg-[#4e37a8] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
              <PhoneModalLink phone="(801) 918-6000" telHref="tel:+18019186000" className="text-lg text-[#4e37a8] font-semibold hover:underline" />
              <p className="text-gray-600">Available 7 days a week</p>
            </div>

            {/* Email */}
            <div className="text-center">
              <div className="bg-[#4e37a8] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
              <a href="mailto:icondumpsters@gmail.com" className="text-lg text-[#4e37a8] font-semibold hover:underline">icondumpsters@gmail.com</a>
              <p className="text-gray-600">Quick response guaranteed</p>
            </div>

            {/* Service Area */}
            <div className="text-center">
              <div className="bg-[#4e37a8] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Service Area</h3>
              <p className="text-lg text-[#4e37a8] font-semibold">Salt Lake County</p>
              <p className="text-gray-600">And surrounding areas</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Form Section */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Information */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Get Your Free Quote</h2>
              <p className="text-lg text-gray-600">
                Fill out the form to receive a free, no-obligation quote for your dumpster rental needs. 
                Our team will get back to you quickly with competitive pricing and flexible scheduling options.
              </p>
              
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-blue-800">Why Choose Icon Dumpsters?</h3>
                    <div className="mt-2 text-sm text-blue-700">
                      <ul className="list-disc list-inside space-y-1">
                        <li>Instant quotes and competitive pricing</li>
                        <li>Flexible delivery and pickup scheduling</li>
                        <li>Professional service throughout Utah</li>
                        <li>Multiple dumpster sizes available</li>
                        <li>Direct contact with owners/operators</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Our Dumpster Sizes</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">15 Yard Dumpster</span>
                    <span className="font-medium">Perfect for small projects</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">20 Yard Dumpster</span>
                    <span className="font-medium">Ideal for medium projects</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">30 Yard Dumpster</span>
                    <span className="font-medium">Great for large projects</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Quote Form */}
            <div>
              <QuoteForm />
            </div>
          </div>
        </div>
      </div>

      {/* SMS Consent Information */}
      <div className="bg-gray-100 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">SMS Messaging Consent</h3>
                         <p className="text-sm text-gray-600 mb-4">
               By checking this box, you agree to receive quote confirmations, delivery updates, service reminders, and promotional offers via SMS from Icon Dumpsters. 
               Message frequency varies. Message and data rates may apply. For help, reply HELP. To opt out, reply STOP. 
               We do not share your information with third parties. See our privacy policy at https://icondumpsters.com/privacy-policy and terms and conditions at https://icondumpsters.com/terms-of-service.
             </p>
                         <div className="text-sm text-gray-600 space-y-2">
               <p><strong>Message Types:</strong> Quote confirmations, delivery updates, service reminders, and promotional offers</p>
               <p><strong>Message Frequency:</strong> Varies based on your service needs and promotions</p>
               <p><strong>Opt-out:</strong> Reply STOP to any message or call (801) 918-6000</p>
               <p><strong>Help:</strong> Reply HELP to any message or call (801) 918-6000</p>
               <p><strong>Privacy:</strong> Your mobile information is never shared with third parties. View our <a href="https://icondumpsters.com/privacy-policy" className="text-[#4e37a8] hover:underline">Privacy Policy</a> and <a href="https://icondumpsters.com/terms-of-service" className="text-[#4e37a8] hover:underline">Terms of Service</a>.</p>
             </div>
          </div>
        </div>
      </div>

      
    </div>
  );
}
`
  },
  {
    file: 'J:\iconmain\iconmain\app\freequote\page.tsx',
    page: '/freequote',
    expectedCanonical: 'https://icondumpsters.com/freequote',
    content: `import QuoteForm from '../components/QuoteForm';
import PageHero from '../components/PageHero';
import PageTemplate from '../components/PageTemplate';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Dumpster Rental Quote | Icon Dumpsters Utah',
  description: 'Get a free, instant quote for dumpster rental in Utah. Professional waste management solutions with competitive pricing and reliable service.',
  keywords: 'dumpster rental quote, free quote, utah dumpster rental, roll-off dumpster, dumpster rental near me',
  openGraph: {
    title: 'Free Dumpster Rental Quote | Icon Dumpsters Utah',
    description: 'Get a free, instant quote for dumpster rental in Utah. Professional waste management solutions with competitive pricing and reliable service.',
    url: 'https://icondumpsters.com/free-quote',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/dumpsters.jpeg',
        width: 1200,
        height: 630,
        alt: 'Free Dumpster Rental Quote - Icon Dumpsters Utah',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Dumpster Rental Quote | Icon Dumpsters Utah',
    description: 'Get a free, instant quote for dumpster rental in Utah. Professional waste management solutions with competitive pricing and reliable service.',
    images: ['/images/dumpsters.jpeg'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/freequote',
  },
};

export default function FreeQuotePage() {
  return (
    <PageTemplate>
      <PageHero
        title="Get Your Free Quote"
        subtitle="Professional dumpster rental services in Utah with competitive pricing and reliable delivery"
        primaryCtaText="Get Free Quote"
        primaryCtaLink="#quote-form"
        secondaryCtaText="Call (801) 918-6000"
        secondaryCtaLink="tel:(801) 918-6000"
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Quote Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#4e37a8] rounded-full mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Request Your Quote</h2>
                <p className="text-gray-600">Fill out the form below and we'll get back to you with a personalized quote</p>
              </div>
              <QuoteForm />
            </div>
          </div>

          {/* Benefits Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl border border-gray-100 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-2 h-2 bg-[#4e37a8] rounded-full mr-3"></span>
                Why Choose Icon Dumpsters?
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Fast Delivery</h4>
                    <p className="text-sm text-gray-600">Same-day or next-day delivery available in most areas</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Competitive Pricing</h4>
                    <p className="text-sm text-gray-600">Best rates guaranteed with transparent pricing</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Secure & Reliable</h4>
                    <p className="text-sm text-gray-600">Licensed, insured, and bonded for your peace of mind</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Expert Support</h4>
                    <p className="text-sm text-gray-600">24/7 customer service to help with any questions</p>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-4">Need Immediate Help?</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-[#4e37a8]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span className="text-sm text-gray-600">Call us: (801) 918-6000</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-[#4e37a8]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span className="text-sm text-gray-600">Email: icondumpsters@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
`
  },
  {
    file: 'J:\iconmain\iconmain\app\herriman\page.tsx',
    page: '/herriman',
    expectedCanonical: 'https://icondumpsters.com/herriman',
    content: `import type { Metadata } from 'next';
import CityPageTemplate from '../components/CityPageTemplate';
import { getCityData } from '../config/cityData';

export const metadata: Metadata = {
  title: "Herriman Dumpster Rental - Professional Services in Herriman, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in Herriman, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "Herriman dumpster rental, dumpster rental Herriman UT, Herriman Utah dumpster, roll-off dumpster Herriman, construction dumpster Herriman, waste management Herriman",
  openGraph: {
    title: "Herriman Dumpster Rental - Professional Services in Herriman, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Herriman, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
    url: 'https://icondumpsters.com/herriman',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Herriman Dumpster Rental - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Herriman Dumpster Rental - Professional Services in Herriman, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Herriman, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/herriman',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function HerrimanPage() {
  const cityData = getCityData('herriman');
  
  if (!cityData) {
    return <div>City data not found</div>;
  }

  return <CityPageTemplate {...cityData} />;
}`
  },
  {
    file: 'J:\iconmain\iconmain\app\holladay\page.tsx',
    page: '/holladay',
    expectedCanonical: 'https://icondumpsters.com/holladay',
    content: `import type { Metadata } from 'next';
import CityPageTemplate from '../components/CityPageTemplate';
import { getCityData } from '../config/cityData';

export const metadata: Metadata = {
  title: "Holladay Dumpster Rental - Professional Services in Holladay, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in Holladay, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "Holladay dumpster rental, dumpster rental Holladay UT, Holladay Utah dumpster, roll-off dumpster Holladay, construction dumpster Holladay, waste management Holladay",
  openGraph: {
    title: "Holladay Dumpster Rental - Professional Services in Holladay, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Holladay, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
    url: 'https://icondumpsters.com/holladay',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Holladay Dumpster Rental - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Holladay Dumpster Rental - Professional Services in Holladay, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Holladay, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/holladay',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function HolladayPage() {
  const cityData = getCityData('holladay');
  
  if (!cityData) {
    return <div>City data not found</div>;
  }

  return <CityPageTemplate {...cityData} />;
}`
  },
  {
    file: 'J:\iconmain\iconmain\app\kearns\page.tsx',
    page: '/kearns',
    expectedCanonical: 'https://icondumpsters.com/kearns',
    content: `import type { Metadata } from 'next';
import CityPageTemplate from '../components/CityPageTemplate';
import { getCityData } from '../config/cityData';

export const metadata: Metadata = {
  title: "Kearns Dumpster Rental - Professional Services in Kearns, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in Kearns, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "Kearns dumpster rental, dumpster rental Kearns UT, Kearns Utah dumpster, roll-off dumpster Kearns, construction dumpster Kearns, waste management Kearns",
  openGraph: {
    title: "Kearns Dumpster Rental - Professional Services in Kearns, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Kearns, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
    url: 'https://icondumpsters.com/kearns',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Kearns Dumpster Rental - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Kearns Dumpster Rental - Professional Services in Kearns, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Kearns, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/kearns',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function KearnsPage() {
  const cityData = getCityData('kearns');
  
  if (!cityData) {
    return <div>City data not found</div>;
  }

  return <CityPageTemplate {...cityData} />;
}`
  },
  {
    file: 'J:\iconmain\iconmain\app\layton\page.tsx',
    page: '/layton',
    expectedCanonical: 'https://icondumpsters.com/layton',
    content: `import type { Metadata } from 'next';
import CityPageTemplate from '../components/CityPageTemplate';
import { getCityData } from '../config/cityData';

export const metadata: Metadata = {
  title: "Layton Dumpster Rental - Professional Services in Layton, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in Layton, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "Layton dumpster rental, dumpster rental Layton UT, Layton Utah dumpster, roll-off dumpster Layton, construction dumpster Layton, waste management Layton",
  openGraph: {
    title: "Layton Dumpster Rental - Professional Services in Layton, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Layton, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
    url: 'https://icondumpsters.com/layton',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Layton Dumpster Rental - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Layton Dumpster Rental - Professional Services in Layton, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Layton, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/layton',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function LaytonPage() {
  const cityData = getCityData('layton');
  
  if (!cityData) {
    return <div>City data not found</div>;
  }

  return <CityPageTemplate {...cityData} />;
}`
  },
  {
    file: 'J:\iconmain\iconmain\app\magna\page.tsx',
    page: '/magna',
    expectedCanonical: 'https://icondumpsters.com/magna',
    content: `import type { Metadata } from 'next';
import CityPageTemplate from '../components/CityPageTemplate';
import { getCityData } from '../config/cityData';

export const metadata: Metadata = {
  title: "Magna Dumpster Rental - Professional Services in Magna, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in Magna, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "Magna dumpster rental, dumpster rental Magna UT, Magna Utah dumpster, roll-off dumpster Magna, construction dumpster Magna, waste management Magna",
  openGraph: {
    title: "Magna Dumpster Rental - Professional Services in Magna, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Magna, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
    url: 'https://icondumpsters.com/magna',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Magna Dumpster Rental - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Magna Dumpster Rental - Professional Services in Magna, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Magna, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/magna',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function MagnaPage() {
  const cityData = getCityData('magna');
  
  if (!cityData) {
    return <div>City data not found</div>;
  }

  return <CityPageTemplate {...cityData} />;
}`
  },
  {
    file: 'J:\iconmain\iconmain\app\midvale\page.tsx',
    page: '/midvale',
    expectedCanonical: 'https://icondumpsters.com/midvale',
    content: `import type { Metadata } from 'next';
import CityPageTemplate from '../components/CityPageTemplate';
import { getCityData } from '../config/cityData';

export const metadata: Metadata = {
  title: "Midvale Dumpster Rental - Professional Services in Midvale, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in Midvale, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "Midvale dumpster rental, dumpster rental Midvale UT, Midvale Utah dumpster, roll-off dumpster Midvale, construction dumpster Midvale, waste management Midvale",
  openGraph: {
    title: "Midvale Dumpster Rental - Professional Services in Midvale, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Midvale, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
    url: 'https://icondumpsters.com/midvale',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Midvale Dumpster Rental - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Midvale Dumpster Rental - Professional Services in Midvale, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Midvale, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/midvale',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function MidvalePage() {
  const cityData = getCityData('midvale');
  
  if (!cityData) {
    return <div>City data not found</div>;
  }

  return <CityPageTemplate {...cityData} />;
}`
  },
  {
    file: 'J:\iconmain\iconmain\app\murray\page.tsx',
    page: '/murray',
    expectedCanonical: 'https://icondumpsters.com/murray',
    content: `import type { Metadata } from 'next';
import CityPageTemplate from '../components/CityPageTemplate';
import { getCityData } from '../config/cityData';

export const metadata: Metadata = {
  title: "Murray Dumpster Rental - Professional Services in Murray, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in Murray, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "Murray dumpster rental, dumpster rental Murray UT, Murray Utah dumpster, roll-off dumpster Murray, construction dumpster Murray, waste management Murray",
  openGraph: {
    title: "Murray Dumpster Rental - Professional Services in Murray, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Murray, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
    url: 'https://icondumpsters.com/murray',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Murray Dumpster Rental - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Murray Dumpster Rental - Professional Services in Murray, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Murray, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/murray',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function MurrayPage() {
  const cityData = getCityData('murray');
  
  if (!cityData) {
    return <div>City data not found</div>;
  }

  return <CityPageTemplate {...cityData} />;
}
`
  },
  {
    file: 'J:\iconmain\iconmain\app\ogden\page.tsx',
    page: '/ogden',
    expectedCanonical: 'https://icondumpsters.com/ogden',
    content: `import type { Metadata } from 'next';
import CityPageTemplate from '../components/CityPageTemplate';
import { getCityData } from '../config/cityData';

export const metadata: Metadata = {
  title: "Ogden Dumpster Rental - Professional Services in Ogden, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in Ogden, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "Ogden dumpster rental, dumpster rental Ogden UT, Ogden Utah dumpster, roll-off dumpster Ogden, construction dumpster Ogden, waste management Ogden",
  openGraph: {
    title: "Ogden Dumpster Rental - Professional Services in Ogden, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Ogden, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
    url: 'https://icondumpsters.com/ogden',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ogden Dumpster Rental - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Ogden Dumpster Rental - Professional Services in Ogden, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Ogden, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/ogden',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function OgdenPage() {
  const cityData = getCityData('ogden');
  
  if (!cityData) {
    return <div>City data not found</div>;
  }

  return <CityPageTemplate {...cityData} />;
}`
  },
  {
    file: 'J:\iconmain\iconmain\app\orem\page.tsx',
    page: '/orem',
    expectedCanonical: 'https://icondumpsters.com/orem',
    content: `import type { Metadata } from 'next';
import CityPageTemplate from '../components/CityPageTemplate';
import { getCityData } from '../config/cityData';

export const metadata: Metadata = {
  title: "Orem Dumpster Rental - Professional Services in Orem, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in Orem, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "Orem dumpster rental, dumpster rental Orem UT, Orem Utah dumpster, roll-off dumpster Orem, construction dumpster Orem, waste management Orem",
  openGraph: {
    title: "Orem Dumpster Rental - Professional Services in Orem, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Orem, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
    url: 'https://icondumpsters.com/orem',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Orem Dumpster Rental - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Orem Dumpster Rental - Professional Services in Orem, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Orem, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/orem',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function OremPage() {
  const cityData = getCityData('orem');
  
  if (!cityData) {
    return <div>City data not found</div>;
  }

  return <CityPageTemplate {...cityData} />;
}`
  },
  {
    file: 'J:\iconmain\iconmain\app\pleasant-grove\page.tsx',
    page: '/pleasant-grove',
    expectedCanonical: 'https://icondumpsters.com/pleasant-grove',
    content: `import type { Metadata } from 'next';
import CityPageTemplate from '../components/CityPageTemplate';
import { getCityData } from '../config/cityData';

export const metadata: Metadata = {
  title: "Pleasant Grove Dumpster Rental - Professional Services in Pleasant Grove, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in Pleasant Grove, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "Pleasant Grove dumpster rental, dumpster rental Pleasant Grove UT, Pleasant Grove Utah dumpster, roll-off dumpster Pleasant Grove, construction dumpster Pleasant Grove, waste management Pleasant Grove",
  openGraph: {
    title: "Pleasant Grove Dumpster Rental - Professional Services in Pleasant Grove, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Pleasant Grove, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
    url: 'https://icondumpsters.com/pleasant-grove',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Pleasant Grove Dumpster Rental - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Pleasant Grove Dumpster Rental - Professional Services in Pleasant Grove, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Pleasant Grove, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/pleasant-grove',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function PleasantGrovePage() {
  const cityData = getCityData('pleasant-grove');
  
  if (!cityData) {
    return <div>City data not found</div>;
  }

  return <CityPageTemplate {...cityData} />;
}`
  },
  {
    file: 'J:\iconmain\iconmain\app\provo\page.tsx',
    page: '/provo',
    expectedCanonical: 'https://icondumpsters.com/provo',
    content: `import type { Metadata } from 'next';
import CityPageTemplate from '../components/CityPageTemplate';
import { getCityData } from '../config/cityData';

export const metadata: Metadata = {
  title: "Provo Dumpster Rental - Professional Services in Provo, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in Provo, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "Provo dumpster rental, dumpster rental Provo UT, Provo Utah dumpster, roll-off dumpster Provo, construction dumpster Provo, waste management Provo",
  openGraph: {
    title: "Provo Dumpster Rental - Professional Services in Provo, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Provo, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
    url: 'https://icondumpsters.com/provo',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Provo Dumpster Rental - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Provo Dumpster Rental - Professional Services in Provo, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Provo, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/provo',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function ProvoPage() {
  const cityData = getCityData('provo');
  
  if (!cityData) {
    return <div>City data not found</div>;
  }

  return <CityPageTemplate {...cityData} />;
}`
  },
  {
    file: 'J:\iconmain\iconmain\app\riverton\page.tsx',
    page: '/riverton',
    expectedCanonical: 'https://icondumpsters.com/riverton',
    content: `import type { Metadata } from 'next';
import CityPageTemplate from '../components/CityPageTemplate';
import { getCityData } from '../config/cityData';

export const metadata: Metadata = {
  title: "Riverton Dumpster Rental - Professional Services in Riverton, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in Riverton, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "Riverton dumpster rental, dumpster rental Riverton UT, Riverton Utah dumpster, roll-off dumpster Riverton, construction dumpster Riverton, waste management Riverton",
  openGraph: {
    title: "Riverton Dumpster Rental - Professional Services in Riverton, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Riverton, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
    url: 'https://icondumpsters.com/riverton',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Riverton Dumpster Rental - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Riverton Dumpster Rental - Professional Services in Riverton, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Riverton, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/riverton',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RivertonPage() {
  const cityData = getCityData('riverton');
  
  if (!cityData) {
    return <div>City data not found</div>;
  }

  return <CityPageTemplate {...cityData} />;
}`
  },
  {
    file: 'J:\iconmain\iconmain\app\sandy\page.tsx',
    page: '/sandy',
    expectedCanonical: 'https://icondumpsters.com/sandy',
    content: `import { Metadata } from "next";
import CityPageTemplate from '../components/CityPageTemplate';
import { getCityData } from '../config/cityData';

export const metadata: Metadata = {
  title: "Sandy Dumpster Rental - Professional Services in Sandy, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in Sandy, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "Sandy dumpster rental, dumpster rental Sandy UT, Sandy Utah dumpster, roll-off dumpster Sandy, construction dumpster Sandy, waste management Sandy",
  openGraph: {
    title: "Sandy Dumpster Rental - Professional Services in Sandy, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Sandy, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
    url: "https://icondumpsters.com/sandy",
    siteName: "Icon Dumpsters",
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sandy Dumpster Rental - Icon Dumpsters',
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sandy Dumpster Rental - Professional Services in Sandy, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Sandy, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/sandy',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function SandyPage() {
  const cityData = getCityData('sandy');
  
  if (!cityData) {
    return <div>City data not found</div>;
  }

  return <CityPageTemplate {...cityData} />;
}
`
  },
  {
    file: 'J:\iconmain\iconmain\app\services\page.tsx',
    page: '/services',
    expectedCanonical: 'https://icondumpsters.com/services',
    content: `import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "../components/PageHero";
import PageTemplate from "../components/PageTemplate";

export const metadata: Metadata = {
  title: 'Dumpster Rental Services in Utah | Icon Dumpsters',
  description: 'Professional dumpster rental services in Utah including residential, construction, garbage removal, yard waste, and downsizing projects. Call (801) 918-6000 for instant quotes.',
  alternates: { canonical: 'https://icondumpsters.com/services' },
  robots: { index: true, follow: true }
};

export default function Services() {
  return (
    <PageTemplate>
      <PageHero
        title="Dumpster Rental Services in Utah"
        subtitle="Professional waste management solutions for every project type"
        primaryCtaText="Get Free Quote"
        primaryCtaLink="/#quote-form"
        secondaryCtaText="Call (801) 918-6000"
        secondaryCtaLink="tel:(801) 918-6000"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Service Overview */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Dumpster Rentals Are Great For A Variety Of Projects!
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            At Icon Dumpsters, our mission is simple: <strong>to provide a hassle-free, friendly dumpster rental service to homeowners and contractors alike.</strong>
          </p>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mt-4">
            Our services include residential-friendly dumpster rentals, professional dumpster delivery and pickup, and comprehensive waste management solutions. With a variety of dumpster sizes and a dedication to exceptional customer service, our goal is to make your waste management process as straightforward and pleasant as possible.
          </p>
        </div>

        {/* Service Images Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/dumpster500x500-1.jpeg"
              alt="Professional dumpster delivery service in Utah"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="font-bold text-lg">Professional Delivery</h3>
              <p className="text-sm opacity-90">Fast & reliable service</p>
            </div>
          </div>
          
          <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/dumpster500x500-2.jpeg"
              alt="Multiple dumpster sizes available for different projects"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="font-bold text-lg">Multiple Sizes</h3>
              <p className="text-sm opacity-90">10-30 yard options</p>
            </div>
          </div>
          
          <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/dumpsterSmallBanner.jpeg"
              alt="Construction site with properly placed dumpster"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="font-bold text-lg">Construction Ready</h3>
              <p className="text-sm opacity-90">Heavy-duty solutions</p>
            </div>
          </div>
          
          <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/dumpsterSmallBanner2.jpeg"
              alt="Efficient waste loading and management"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="font-bold text-lg">Easy Loading</h3>
              <p className="text-sm opacity-90">Convenient access</p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Residential Dumpster Rentals */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-48 overflow-hidden">
              <Image
                src="/images/dumpster500x500-1.jpeg"
                alt="Residential dumpster rental for home projects"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#4e37a8]/80 to-purple-600/80 flex items-center justify-center">
                <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Residential Dumpster Rentals</h3>
              <p className="text-gray-600 mb-4">
                Icon Dumpsters specializes in residential-friendly dumpster rentals, offering a seamless and efficient solution for waste management. Our service includes easy-to-navigate dumpster sizes and professional dumpster delivery and pickup.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="text-[#4e37a8] mr-2">✓</span>
                  <span>Home renovations & remodeling</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="text-[#4e37a8] mr-2">✓</span>
                  <span>Basement & attic cleanouts</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="text-[#4e37a8] mr-2">✓</span>
                  <span>Garage organization projects</span>
                </div>
              </div>
              <a href="https://icondumpsters.com/services/residential-dumpster-rentals" className="inline-block bg-[#4e37a8] text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                Learn More
              </a>
            </div>
          </div>

          {/* Construction Dumpster Rentals */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-48 overflow-hidden">
              <Image
                src="/images/dumpsterSmallBanner.jpeg"
                alt="Construction dumpster rental for building projects"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/80 to-red-600/80 flex items-center justify-center">
                <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Construction Dumpster Rentals</h3>
              <p className="text-gray-600 mb-4">
                Icon Dumpsters offers specialized construction dumpster rentals tailored for any project size, from residential remodels to large-scale construction sites.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="text-[#4e37a8] mr-2">✓</span>
                  <span>New construction projects</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="text-[#4e37a8] mr-2">✓</span>
                  <span>Commercial renovations</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="text-[#4e37a8] mr-2">✓</span>
                  <span>Demolition debris removal</span>
                </div>
              </div>
              <a href="https://icondumpsters.com/services/construction-dumpster-rentals" className="inline-block bg-[#4e37a8] text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                Learn More
              </a>
            </div>
          </div>

          {/* Garbage & Junk Bin Rentals */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-48 overflow-hidden">
              <Image
                src="/images/dumpsterSmallBanner2.jpeg"
                alt="Garbage and junk bin rental for waste removal"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/80 to-teal-600/80 flex items-center justify-center">
                <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Garbage & Junk Bin Rentals</h3>
              <p className="text-gray-600 mb-4">
                Looking to clear out clutter or take on a renovation project? Icon Dumpsters offers a hassle-free garbage and junk removal service, perfectly suited for your needs.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="text-[#4e37a8] mr-2">✓</span>
                  <span>Household clutter removal</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="text-[#4e37a8] mr-2">✓</span>
                  <span>Furniture & appliance disposal</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="text-[#4e37a8] mr-2">✓</span>
                  <span>General household waste</span>
                </div>
              </div>
              <a href="https://icondumpsters.com/services/garbage-junk-bin-rentals" className="inline-block bg-[#4e37a8] text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                Learn More
              </a>
            </div>
          </div>

          {/* Yard Waste & Debris Bin Rental */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-48 overflow-hidden">
              <Image
                src="/images/dumpster500x500-2.jpeg"
                alt="Yard waste and debris bin rental for landscaping"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/80 to-green-600/80 flex items-center justify-center">
                <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Yard Waste & Debris Bin Rental</h3>
              <p className="text-gray-600 mb-4">
                Tackling a yard overhaul or dealing with seasonal cleanup? Icon Dumpsters is here to help manage your yard waste and debris efficiently.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="text-[#4e37a8] mr-2">✓</span>
                  <span>Tree & branch removal</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="text-[#4e37a8] mr-2">✓</span>
                  <span>Landscaping projects</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="text-[#4e37a8] mr-2">✓</span>
                  <span>Seasonal yard cleanup</span>
                </div>
              </div>
              <a href="https://icondumpsters.com/services/yard-waste-debris-bin-rental" className="inline-block bg-[#4e37a8] text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                Learn More
              </a>
            </div>
          </div>

          {/* Downsizing Dumpster Rentals */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-48 overflow-hidden">
              <Image
                src="/images/dumpsterSmallBanner4.jpeg"
                alt="Downsizing dumpster rental for moving and estate cleanout"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/80 to-indigo-600/80 flex items-center justify-center">
                <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v2H8V5z" />
                </svg>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Downsizing Dumpster Rentals</h3>
              <p className="text-gray-600 mb-4">
                Downsizing your home can be a refreshing way to declutter, reduce stress, and start a new chapter. Icon Dumpsters makes the process smoother.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="text-[#4e37a8] mr-2">✓</span>
                  <span>Moving preparation</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="text-[#4e37a8] mr-2">✓</span>
                  <span>Estate cleanouts</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="text-[#4e37a8] mr-2">✓</span>
                  <span>Life transition projects</span>
                </div>
              </div>
              <a href="https://icondumpsters.com/services/downsizing-dumpster-rentals" className="inline-block bg-[#4e37a8] text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                Learn More
              </a>
            </div>
          </div>

          {/* Estate Cleanout */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-48 overflow-hidden">
              <Image
                src="/images/dumpsterSmallBanner.jpeg"
                alt="Estate cleanout dumpster rental for property cleanup"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/80 to-pink-600/80 flex items-center justify-center">
                <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Estate Cleanout</h3>
              <p className="text-gray-600 mb-4">
                Complete property cleanup and estate management services for comprehensive waste removal and property preparation.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="text-[#4e37a8] mr-2">✓</span>
                  <span>Complete property cleanup</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="text-[#4e37a8] mr-2">✓</span>
                  <span>Estate management</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="text-[#4e37a8] mr-2">✓</span>
                  <span>Property preparation</span>
                </div>
              </div>
              <a href="https://icondumpsters.com/estate-cleanout" className="inline-block bg-[#4e37a8] text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                Learn More
              </a>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-[#4e37a8] to-purple-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Whether it's a home renovation, major cleanout, or landscaping overhaul, we've got you covered. Our friendly team is ready to assist you with expert advice and tailored solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:(801) 918-6000" 
              className="bg-white text-[#4e37a8] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Call (801) 918-6000
            </a>
            <a 
              href="https://icondumpsters.com/#quote-form" 
              className="bg-orange-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition-colors"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
`
  },
  {
    file: 'J:\iconmain\iconmain\app\south-jordan\page.tsx',
    page: '/south-jordan',
    expectedCanonical: 'https://icondumpsters.com/south-jordan',
    content: `import type { Metadata } from 'next';
import CityPageTemplate from '../components/CityPageTemplate';
import { getCityData } from '../config/cityData';

export const metadata: Metadata = {
  title: "South Jordan Dumpster Rental - Professional Services in South Jordan, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in South Jordan, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "South Jordan dumpster rental, dumpster rental South Jordan UT, South Jordan Utah dumpster, roll-off dumpster South Jordan, construction dumpster South Jordan, waste management South Jordan",
  openGraph: {
    title: "South Jordan Dumpster Rental - Professional Services in South Jordan, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in South Jordan, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
    url: 'https://icondumpsters.com/south-jordan',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'South Jordan Dumpster Rental - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "South Jordan Dumpster Rental - Professional Services in South Jordan, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in South Jordan, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/south-jordan',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function SouthJordanPage() {
  const cityData = getCityData('south-jordan');
  
  if (!cityData) {
    return <div>City data not found</div>;
  }

  return <CityPageTemplate {...cityData} />;
}`
  },
  {
    file: 'J:\iconmain\iconmain\app\spanish-fork\page.tsx',
    page: '/spanish-fork',
    expectedCanonical: 'https://icondumpsters.com/spanish-fork',
    content: `import type { Metadata } from 'next';
import CityPageTemplate from '../components/CityPageTemplate';
import { getCityData } from '../config/cityData';

export const metadata: Metadata = {
  title: "Spanish Fork Dumpster Rental - Professional Services in Spanish Fork, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in Spanish Fork, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "Spanish Fork dumpster rental, dumpster rental Spanish Fork UT, Spanish Fork Utah dumpster, roll-off dumpster Spanish Fork, construction dumpster Spanish Fork, waste management Spanish Fork",
  openGraph: {
    title: "Spanish Fork Dumpster Rental - Professional Services in Spanish Fork, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Spanish Fork, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
    url: 'https://icondumpsters.com/spanish-fork',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Spanish Fork Dumpster Rental - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Spanish Fork Dumpster Rental - Professional Services in Spanish Fork, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Spanish Fork, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/spanish-fork',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function SpanishForkPage() {
  const cityData = getCityData('spanish-fork');
  
  if (!cityData) {
    return <div>City data not found</div>;
  }

  return <CityPageTemplate {...cityData} />;
}`
  },
  {
    file: 'J:\iconmain\iconmain\app\springville\page.tsx',
    page: '/springville',
    expectedCanonical: 'https://icondumpsters.com/springville',
    content: `import type { Metadata } from 'next';
import CityPageTemplate from '../components/CityPageTemplate';
import { getCityData } from '../config/cityData';

export const metadata: Metadata = {
  title: "Springville Dumpster Rental - Professional Services in Springville, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in Springville, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "Springville dumpster rental, dumpster rental Springville UT, Springville Utah dumpster, roll-off dumpster Springville, construction dumpster Springville, waste management Springville",
  openGraph: {
    title: "Springville Dumpster Rental - Professional Services in Springville, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Springville, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
    url: 'https://icondumpsters.com/springville',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Springville Dumpster Rental - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Springville Dumpster Rental - Professional Services in Springville, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Springville, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/springville',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function SpringvillePage() {
  const cityData = getCityData('springville');
  
  if (!cityData) {
    return <div>City data not found</div>;
  }

  return <CityPageTemplate {...cityData} />;
}`
  },
  {
    file: 'J:\iconmain\iconmain\app\taylorsville\page.tsx',
    page: '/taylorsville',
    expectedCanonical: 'https://icondumpsters.com/taylorsville',
    content: `﻿import type { Metadata } from 'next';
import CityPageTemplate from '../components/CityPageTemplate';
import { getCityData } from '../config/cityData';

export const metadata: Metadata = {
  title: "Taylorsville Dumpster Rental - Professional Services in Taylorsville, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in Taylorsville, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "Taylorsville dumpster rental, dumpster rental Taylorsville UT, Taylorsville Utah dumpster, roll-off dumpster Taylorsville, construction dumpster Taylorsville, waste management Taylorsville",
  openGraph: {
    title: "Taylorsville Dumpster Rental - Professional Services in Taylorsville, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Taylorsville, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
    url: 'https://icondumpsters.com/taylorsville',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Taylorsville Dumpster Rental - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Taylorsville Dumpster Rental - Professional Services in Taylorsville, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Taylorsville, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/taylorsville',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function TaylorsvillePage() {
  const cityData = getCityData('taylorsville');
  
  if (!cityData) {
    return <div>City data not found</div>;
  }

  return <CityPageTemplate {...cityData} />;
}




`
  },
  {
    file: 'J:\iconmain\iconmain\app\tooele\page.tsx',
    page: '/tooele',
    expectedCanonical: 'https://icondumpsters.com/tooele',
    content: `import type { Metadata } from 'next';
import CityPageTemplate from '../components/CityPageTemplate';
import { getCityData } from '../config/cityData';

export const metadata: Metadata = {
  title: "Tooele Dumpster Rental - Professional Services in Tooele, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in Tooele, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "Tooele dumpster rental, dumpster rental Tooele UT, Tooele Utah dumpster, roll-off dumpster Tooele, construction dumpster Tooele, waste management Tooele",
  openGraph: {
    title: "Tooele Dumpster Rental - Professional Services in Tooele, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Tooele, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
    url: 'https://icondumpsters.com/tooele',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Tooele Dumpster Rental - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Tooele Dumpster Rental - Professional Services in Tooele, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Tooele, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/tooele',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function TooelePage() {
  const cityData = getCityData('tooele');
  
  if (!cityData) {
    return <div>City data not found</div>;
  }

  return <CityPageTemplate {...cityData} />;
}`
  },
  {
    file: 'J:\iconmain\iconmain\app\west-jordan\page.tsx',
    page: '/west-jordan',
    expectedCanonical: 'https://icondumpsters.com/west-jordan',
    content: `﻿import type { Metadata } from 'next';
import CityPageTemplate from '../components/CityPageTemplate';
import { getCityData } from '../config/cityData';

export const metadata: Metadata = {
  title: "West Jordan Dumpster Rental - Professional Services in West Jordan, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in West Jordan, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "West Jordan dumpster rental, dumpster rental West Jordan UT, West Jordan Utah dumpster, roll-off dumpster West Jordan, construction dumpster West Jordan, waste management West Jordan",
  openGraph: {
    title: "West Jordan Dumpster Rental - Professional Services in West Jordan, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in West Jordan, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
    url: 'https://icondumpsters.com/west-jordan',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'West Jordan Dumpster Rental - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "West Jordan Dumpster Rental - Professional Services in West Jordan, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in West Jordan, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/west-jordan',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function WestJordanPage() {
  const cityData = getCityData('west-jordan');
  
  if (!cityData) {
    return <div>City data not found</div>;
  }

  return <CityPageTemplate {...cityData} />;
}





`
  },
  {
    file: 'J:\iconmain\iconmain\app\west-valley-city\page.tsx',
    page: '/west-valley-city',
    expectedCanonical: 'https://icondumpsters.com/west-valley-city',
    content: `import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "West Valley City Dumpster Rental - Professional Services in West Valley City, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in West Valley City, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "West Valley City dumpster rental, dumpster rental West Valley City UT, West Valley City Utah dumpster, roll-off dumpster West Valley City, construction dumpster West Valley City, waste management West Valley City",
  openGraph: {
    title: "West Valley City Dumpster Rental - Professional Services in West Valley City, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in West Valley City, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
          url: 'https://icondumpsters.com/west-valley-city',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/Icon_Dumpsters_Final.png',
        width: 1200,
        height: 630,
        alt: 'West Valley City Dumpster Rental - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "West Valley City Dumpster Rental - Professional Services in West Valley City, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in West Valley City, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    images: ['/Icon_Dumpsters_Final.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/west-valley-city',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

import CityPageClient from '../components/CityPageClient';

export default function WestValleyCityPage() {
  const nearbyCities = [
  {
    "name": "Salt Lake City",
    "href": "/salt-lake-city"
  },
  {
    "name": "Taylorsville",
    "href": "/taylorsville"
  },
  {
    "name": "Kearns",
    "href": "/kearns"
  },
  {
    "name": "Magna",
    "href": "/magna"
  },
  {
    "name": "Murray",
    "href": "/murray"
  }
];
  
  return (
    <CityPageClient
      cityName="west-valley-city"
      cityDisplayName="West Valley City"
      nearbyCities={nearbyCities}
      historicalInfo="West Valley City, Utah's second-largest city, is home to the Maverik Center and the Utah Cultural Celebration Center. Our dumpster services support West Valley City's diverse community."
      landmarks="Maverik Center, Utah Cultural Celebration Center, West Valley City Hall"
      localProjects="Supporting West Valley City's cultural events and community projects"
      neighborhoods="West Valley Central, West Valley East, West Valley West, Kearns area"
      localBusinesses="Trusted partner for West Valley City's cultural and community projects"
    />
  );
}
`
  }
];

let appliedFixes = 0;
let errors = 0;

fixes.forEach((fix, index) => {
  try {
    fs.writeFileSync(fix.file, fix.content, 'utf8');
    console.log(`✅ Fixed: ${fix.page} -> ${fix.expectedCanonical}`);
    appliedFixes++;
  } catch (error) {
    console.error(`❌ Error fixing ${fix.page}: ${error.message}`);
    errors++;
  }
});

console.log(`\n📊 Fix Summary:`);
console.log(`   Applied: ${appliedFixes}`);
console.log(`   Errors: ${errors}`);
console.log(`   Total: ${fixes.length}`);

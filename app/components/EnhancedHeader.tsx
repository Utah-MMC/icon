'use client';

import { useState } from 'react';
import PhoneModal from './PhoneModal';

export default function EnhancedHeader() {
  const [isPhoneModalOpen, setIsPhoneModalOpen] = useState(false);
  const [isCityMenuOpen, setIsCityMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="/images/Icon_Dumpsters_Final.png" 
                alt="Icon Dumpsters Logo" 
                className="h-8 w-auto"
              />
              <span className="ml-2 text-xl font-bold text-gray-900">
                ICON <span className="text-[#4e37a8]">DUMPSTERS</span>
              </span>
            </div>

            {/* Navigation - Hidden on mobile */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-700 hover:text-[#4e37a8] transition-colors">
                Services
              </a>
              <a href="#dumpster-sizes" className="text-gray-700 hover:text-[#4e37a8] transition-colors">
                Dumpster Sizes
              </a>
              <a href="#pricing" className="text-gray-700 hover:text-[#4e37a8] transition-colors">
                Pricing
              </a>
              
              {/* City Pages Dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => setIsCityMenuOpen(true)}
                  onMouseLeave={() => setIsCityMenuOpen(false)}
                  className="text-gray-700 hover:text-[#4e37a8] transition-colors flex items-center"
                >
                  Service Areas
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isCityMenuOpen && (
                  <div
                    onMouseEnter={() => setIsCityMenuOpen(true)}
                    onMouseLeave={() => setIsCityMenuOpen(false)}
                    className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
                  >
                    <div className="py-2">
                      <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                        Utah Cities
                      </div>
                      <a href="/murray" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">
                        Murray
                      </a>
                      <a href="/midvale" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">
                        Midvale
                      </a>
                      <a href="/sandy" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">
                        Sandy
                      </a>
                      <a href="/west-jordan" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">
                        West Jordan
                      </a>
                      <a href="/south-jordan" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">
                        South Jordan
                      </a>
                      <a href="/draper" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">
                        Draper
                      </a>
                    </div>
                  </div>
                )}
              </div>
              
              <a href="/blog" className="text-gray-700 hover:text-[#4e37a8] transition-colors">
                Blog
              </a>
            </nav>

            {/* Contact Info & CTAs */}
            <div className="flex items-center space-x-4">
              {/* Phone Number - Always Visible */}
              <div className="hidden sm:flex items-center space-x-2">
                <div className="w-8 h-8 bg-[#4e37a8] rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Call Now</div>
                  <a 
                    href="tel:(801) 918-6000" 
                    className="text-sm font-semibold text-[#4e37a8] hover:text-purple-700"
                  >
                    (801) 918-6000
                  </a>
                </div>
              </div>

              {/* Mobile Phone Button */}
              <button
                onClick={() => setIsPhoneModalOpen(true)}
                className="sm:hidden w-10 h-10 bg-[#4e37a8] rounded-full flex items-center justify-center"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </button>

              {/* CTA Buttons */}
              <div className="hidden sm:flex items-center space-x-3">
                <a 
                  href="tel:(801) 918-6000"
                  className="bg-[#4e37a8] text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors font-medium text-sm"
                >
                  Call Now
                </a>
                <a 
                  href="#quote-form"
                  className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors font-medium text-sm"
                >
                  Get Quote
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button className="md:hidden p-2 rounded-md text-gray-700 hover:text-[#4e37a8] hover:bg-gray-100">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className="md:hidden bg-gray-50 border-t border-gray-200">
          <div className="px-4 py-3 space-y-2">
            <a href="#services" className="block text-gray-700 hover:text-[#4e37a8] py-2">
              Services
            </a>
            <a href="#dumpster-sizes" className="block text-gray-700 hover:text-[#4e37a8] py-2">
              Dumpster Sizes
            </a>
            <a href="#pricing" className="block text-gray-700 hover:text-[#4e37a8] py-2">
              Pricing
            </a>
            
            {/* Mobile City Pages */}
            <div className="border-t border-gray-200 pt-2">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                Service Areas
              </div>
              <a href="/murray" className="block text-gray-700 hover:text-[#4e37a8] py-1">
                Murray
              </a>
              <a href="/midvale" className="block text-gray-700 hover:text-[#4e37a8] py-1">
                Midvale
              </a>
              <a href="/sandy" className="block text-gray-700 hover:text-[#4e37a8] py-1">
                Sandy
              </a>
              <a href="/west-jordan" className="block text-gray-700 hover:text-[#4e37a8] py-1">
                West Jordan
              </a>
              <a href="/south-jordan" className="block text-gray-700 hover:text-[#4e37a8] py-1">
                South Jordan
              </a>
              <a href="/draper" className="block text-gray-700 hover:text-[#4e37a8] py-1">
                Draper
              </a>
            </div>
            
            <a href="/blog" className="block text-gray-700 hover:text-[#4e37a8] py-2">
              Blog
            </a>
            <div className="pt-2 border-t border-gray-200">
              <a 
                href="#quote-form"
                className="block bg-[#4e37a8] text-white px-4 py-2 rounded-lg text-center font-medium"
              >
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Phone Modal */}
      <PhoneModal 
        isOpen={isPhoneModalOpen} 
        onClose={() => setIsPhoneModalOpen(false)} 
      />
    </>
  );
}

'use client';

import { useState } from 'react';
import Image from 'next/image';
import PhoneModal from './PhoneModal';

export default function EnhancedHeader() {
  const [isPhoneModalOpen, setIsPhoneModalOpen] = useState(false);
  const [isCityMenuOpen, setIsCityMenuOpen] = useState(false);
  const [isDumpsterSizesMenuOpen, setIsDumpsterSizesMenuOpen] = useState(false);
  const [isFrequentBuyersMenuOpen, setIsFrequentBuyersMenuOpen] = useState(false);
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Bar - Dark Purple */}
      <div className="bg-[#4e37a8] text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between text-sm">
            {/* Left Side - Contact Info */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a 
                  href="mailto:icondumpsters@gmail.com" 
                  className="hover:text-purple-200 transition-colors cursor-pointer"
                  title="Email us at icondumpsters@gmail.com"
                >
                  icondumpsters@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a 
                  href="tel:+18019186000" 
                  className="hover:text-purple-200 transition-colors cursor-pointer"
                  title="Call us at (801) 918-6000"
                >
                  (801) 918-6000
                </a>
              </div>
            </div>
            
            {/* Right Side - Tagline */}
            <div className="hidden md:block">
              <span className="text-sm">Serving Utah with Professional Dumpster Rentals</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header - White */}
      <header className="bg-white shadow-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center space-x-4">
                {/* Logo Image */}
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg shadow-lg flex items-center justify-center">
                    <div className="w-10 h-10 bg-white rounded-md flex items-center justify-center">
                      <Image
                        src="/images/optimized/Icon_Dumpsters_Final.jpg" 
                        alt="Icon Dumpsters Logo" 
                        className="h-8 w-auto"
                        width={32}
                        height={32}
                      />
                    </div>
                  </div>
                </div>
                
                {/* Logo Text */}
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-[#4e37a8] leading-tight tracking-tight">
                    ICON
                  </span>
                  <span className="text-2xl font-bold text-[#4e37a8] leading-tight tracking-tight -mt-1">
                    DUMPSTERS
                  </span>
                </div>
              </div>
            </div>

            {/* Navigation - Hidden on mobile */}
            <nav className="hidden lg:flex items-center space-x-8">
              {/* Main Dumpster Rental Link */}
              <a href="https://icondumpsters.com/dumpster-rental" className="text-[#4e37a8] hover:text-purple-700 transition-colors font-semibold">
                Dumpster Rentals
              </a>
              
              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => setIsServicesMenuOpen(true)}
                  onMouseLeave={() => setIsServicesMenuOpen(false)}
                  className="text-[#4e37a8] hover:text-purple-700 transition-colors flex items-center font-semibold"
                >
                  Services
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isServicesMenuOpen && (
                  <div
                    onMouseEnter={() => setIsServicesMenuOpen(true)}
                    onMouseLeave={() => setIsServicesMenuOpen(false)}
                    className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
                  >
                    <div className="py-2">
                      <a href="https://icondumpsters.com/services" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8] border-b border-gray-100">
                        <div className="font-semibold">All Services</div>
                        <div className="text-xs text-gray-500">Complete service overview</div>
                      </a>
                      <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide border-b border-gray-100">
                        Service Types
                      </div>
                      <a href="https://icondumpsters.com/services/residential" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8] border-b border-gray-100">
                        <div className="font-semibold">Residential Dumpster Rentals</div>
                        <div className="text-xs text-gray-500">Home projects & renovations</div>
                      </a>
                      <a href="https://icondumpsters.com/services/construction" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8] border-b border-gray-100">
                        <div className="font-semibold">Construction Dumpster Rentals</div>
                        <div className="text-xs text-gray-500">Construction & remodeling projects</div>
                      </a>
                      <a href="https://icondumpsters.com/services/garbage-junk-bin-rentals" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8] border-b border-gray-100">
                        <div className="font-semibold">Garbage & Junk Bin Rentals</div>
                        <div className="text-xs text-gray-500">Clutter removal & cleanouts</div>
                      </a>
                      <a href="https://icondumpsters.com/services/yard-waste-debris-bin-rental" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8] border-b border-gray-100">
                        <div className="font-semibold">Yard Waste & Debris Bin Rental</div>
                        <div className="text-xs text-gray-500">Landscaping & outdoor cleanup</div>
                      </a>
                      <a href="https://icondumpsters.com/services/downsizing" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8] border-b border-gray-100">
                        <div className="font-semibold">Downsizing Dumpster Rentals</div>
                        <div className="text-xs text-gray-500">Moving & decluttering projects</div>
                      </a>
                      
                      <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide border-b border-gray-100">
                        Specialized Services
                      </div>
                      <a href="https://icondumpsters.com/estate-cleanout" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8] border-b border-gray-100">
                        <div className="font-semibold">Estate Cleanout</div>
                        <div className="text-xs text-gray-500">Complete property cleanup</div>
                      </a>
                      <a href="https://icondumpsters.com/fees" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8] border-b border-gray-100">
                        <div className="font-semibold">Fees & Pricing</div>
                        <div className="text-xs text-gray-500">Transparent pricing information</div>
                      </a>
                      
                      <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide border-b border-gray-100">
                        Service Categories
                      </div>
                      <a href="https://icondumpsters.com/dumpster-rental" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8] border-b border-gray-100">
                        <div className="font-semibold">All Dumpster Rentals</div>
                        <div className="text-xs text-gray-500">Complete service overview</div>
                      </a>
                      <a href="https://icondumpsters.com/dumpster-rental/home" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8] border-b border-gray-100">
                        <div className="font-semibold">Residential Services</div>
                        <div className="text-xs text-gray-500">Home & renovation projects</div>
                      </a>
                      <a href="https://icondumpsters.com/dumpster-rental/business" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8] border-b border-gray-100">
                        <div className="font-semibold">Commercial Services</div>
                        <div className="text-xs text-gray-500">Business & office projects</div>
                      </a>
                      <a href="https://icondumpsters.com/dumpster-rental/construction" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">
                        <div className="font-semibold">Construction Services</div>
                        <div className="text-xs text-gray-500">Construction & demolition</div>
                      </a>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Dumpster Sizes Dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => setIsDumpsterSizesMenuOpen(true)}
                  onMouseLeave={() => setIsDumpsterSizesMenuOpen(false)}
                  className="text-[#4e37a8] hover:text-purple-700 transition-colors flex items-center font-semibold"
                >
                  SIZES
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                                 {isDumpsterSizesMenuOpen && (
                   <div
                     onMouseEnter={() => setIsDumpsterSizesMenuOpen(true)}
                     onMouseLeave={() => setIsDumpsterSizesMenuOpen(false)}
                     className="absolute top-full left-0 mt-1 w-72 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
                   >
                     <div className="py-2">
                       {/* Specialized Dumpsters */}
                       <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide border-b border-gray-100">
                         Specialized Dumpsters
                       </div>
                       <a href="https://icondumpsters.com/dumpster-sizes#10-yard-dirt" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8] border-b border-gray-100">
                         <div className="font-semibold">10 Yard Dirt</div>
                         <div className="text-xs text-gray-500">Perfect for dirt & soil projects</div>
                       </a>
                       <a href="https://icondumpsters.com/dumpster-sizes#10-yard-mixed" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8] border-b border-gray-100">
                         <div className="font-semibold">10 Yard Mixed</div>
                         <div className="text-xs text-gray-500">Mixed heavy loads</div>
                       </a>
                       <a href="https://icondumpsters.com/dumpster-sizes#12-yard-concrete" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8] border-b border-gray-100">
                         <div className="font-semibold">12 Yard Concrete</div>
                         <div className="text-xs text-gray-500">Perfect for concrete projects</div>
                       </a>
                       
                       {/* Standard Dumpsters */}
                       <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide border-b border-gray-100">
                         Standard Dumpsters
                       </div>
                       <a href="https://icondumpsters.com/dumpster-sizes#15-yard" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8] border-b border-gray-100">
                         <div className="font-semibold">15 Yard Dumpsters</div>
                         <div className="text-xs text-gray-500">Ideal for medium projects</div>
                       </a>
                       <a href="https://icondumpsters.com/dumpster-sizes#20-yard" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8] border-b border-gray-100">
                         <div className="font-semibold">20 Yard Dumpsters</div>
                         <div className="text-xs text-gray-500">Great for large projects</div>
                       </a>
                       <a href="https://icondumpsters.com/dumpster-sizes#30-yard" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8] border-b border-gray-100">
                         <div className="font-semibold">30 Yard Dumpsters</div>
                         <div className="text-xs text-gray-500">For major projects</div>
                       </a>
                       <a href="https://icondumpsters.com/dumpster-sizes" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">
                         <div className="font-semibold">View All Dumpster Sizes</div>
                         <div className="text-xs text-gray-500">See complete selection</div>
                       </a>
                     </div>
                   </div>
                 )}
              </div>
              
              <a href="https://icondumpsters.com/#pricing" className="text-[#4e37a8] hover:text-purple-700 transition-colors font-semibold">
                Pricing
              </a>
              
              {/* City Pages Dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => setIsCityMenuOpen(true)}
                  onMouseLeave={() => setIsCityMenuOpen(false)}
                  className="text-[#4e37a8] hover:text-purple-700 transition-colors flex items-center font-semibold"
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
                      <a href="https://icondumpsters.com/murray" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">
                        Murray
                      </a>
                      <a href="https://icondumpsters.com/midvale" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">
                        Midvale
                      </a>
                      <a href="https://icondumpsters.com/sandy" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">
                        Sandy
                      </a>
                      <a href="https://icondumpsters.com/west-jordan" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">
                        West Jordan
                      </a>
                      <a href="https://icondumpsters.com/south-jordan" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">
                        South Jordan
                      </a>
                                             <a href="https://icondumpsters.com/draper" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">
                         Draper
                       </a>
                       <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide border-t border-gray-100 mt-2 pt-2">
                         Salt Lake County
                       </div>
                       <a href="https://icondumpsters.com/west-valley-city" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">West Valley City</a>
                       <a href="https://icondumpsters.com/taylorsville" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">Taylorsville</a>
                       <a href="https://icondumpsters.com/kearns" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">Kearns</a>
                       <a href="https://icondumpsters.com/magna" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">Magna</a>
                       <a href="https://icondumpsters.com/millcreek" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">Millcreek</a>
                       <a href="https://icondumpsters.com/holladay" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">Holladay</a>
                       <a href="https://icondumpsters.com/cottonwood-heights" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">Cottonwood Heights</a>
                       <a href="https://icondumpsters.com/south-salt-lake" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">South Salt Lake</a>
                       <a href="https://icondumpsters.com/riverton" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">Riverton</a>
                       <a href="https://icondumpsters.com/herriman" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">Herriman</a>
                       <a href="https://icondumpsters.com/bluffdale" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">Bluffdale</a>

                       <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide border-t border-gray-100 mt-2 pt-2">
                         Davis County
                       </div>
                       <a href="https://icondumpsters.com/bountiful" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">Bountiful</a>
                       <a href="https://icondumpsters.com/north-salt-lake" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">North Salt Lake</a>
                       <a href="https://icondumpsters.com/centerville" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">Centerville</a>
                       <a href="https://icondumpsters.com/farmington" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">Farmington</a>
                       <a href="https://icondumpsters.com/layton" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">Layton</a>
                       <a href="https://icondumpsters.com/woods-cross" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">Woods Cross</a>
                       <a href="https://icondumpsters.com/clearfield" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">Clearfield</a>

                       <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide border-t border-gray-100 mt-2 pt-2">
                         Utah County
                       </div>
                       <a href="https://icondumpsters.com/lehi" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">Lehi</a>
                       <a href="https://icondumpsters.com/american-fork" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">American Fork</a>
                       <a href="https://icondumpsters.com/pleasant-grove" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">Pleasant Grove</a>
                       <a href="https://icondumpsters.com/eagle-mountain" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">Eagle Mountain</a>
                       <a href="https://icondumpsters.com/saratoga-springs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">Saratoga Springs</a>
                       <a href="https://icondumpsters.com/orem" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">Orem</a>
                       <a href="https://icondumpsters.com/provo" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">Provo</a>

                       <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide border-t border-gray-100 mt-2 pt-2">
                         Summit & Tooele
                       </div>
                       <a href="https://icondumpsters.com/park-city" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">Park City</a>
                       <a href="https://icondumpsters.com/tooele" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">Tooele</a>

                       <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide border-t border-gray-100 mt-2 pt-2">
                         SLC Neighborhoods
                       </div>
                       <a href="https://icondumpsters.com/rose-park" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">Rose Park</a>
                       <a href="https://icondumpsters.com/sugar-house" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">Sugar House</a>
                       <a href="https://icondumpsters.com/glendale" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">Glendale</a>
                       <a href="https://icondumpsters.com/poplar-grove" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">Poplar Grove</a>
                       <a href="https://icondumpsters.com/downtown-salt-lake" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">Downtown Salt Lake</a>
                       
                       <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide border-t border-gray-100 mt-2 pt-2">
                         Additional Cities
                       </div>
                       <a href="https://icondumpsters.com/spanish-fork" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">Spanish Fork</a>
                       <a href="https://icondumpsters.com/springville" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">Springville</a>
                       <a href="https://icondumpsters.com/lindon" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">Lindon</a>
                       <a href="https://icondumpsters.com/kaysville" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">Kaysville</a>
                       <a href="https://icondumpsters.com/roy" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">Roy</a>
                       <a href="https://icondumpsters.com/fairpark" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">Fairpark</a>
                       
                       <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide border-t border-gray-100 mt-2 pt-2">
                         County-Based Services
                       </div>
                       <a href="https://icondumpsters.com/dumpster-rental-salt-lake-county-ut" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8] border-b border-gray-100">
                         Salt Lake County
                       </a>
                       <a href="https://icondumpsters.com/dumpster-rental-utah-county-ut" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8] border-b border-gray-100">
                         Utah County
                       </a>
                       <a href="https://icondumpsters.com/dumpster-rental-davis-county-ut" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8] border-b border-gray-100">
                         Davis County
                       </a>
                       <a href="https://icondumpsters.com/dumpster-rental-weber-county-ut" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8] border-b border-gray-100">
                         Weber County
                       </a>
                       <a href="https://icondumpsters.com/dumpster-rental-cache-county-ut" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8] border-b border-gray-100">
                         Cache County
                       </a>
                       <a href="https://icondumpsters.com/dumpster-rental-tooele-county-ut" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8] border-b border-gray-100">
                         Tooele County
                       </a>
                       <a href="https://icondumpsters.com/dumpster-rental-summit-county-ut" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8] border-b border-gray-100">
                         Summit County
                       </a>
                       <a href="https://icondumpsters.com/dumpster-rental-wasatch-county-ut" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">
                         Wasatch County
                       </a>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Frequent Buyers Dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => setIsFrequentBuyersMenuOpen(true)}
                  onMouseLeave={() => setIsFrequentBuyersMenuOpen(false)}
                  className="text-[#4e37a8] hover:text-purple-700 transition-colors flex items-center font-semibold"
                >
                  BUYERS
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isFrequentBuyersMenuOpen && (
                  <div
                    onMouseEnter={() => setIsFrequentBuyersMenuOpen(true)}
                    onMouseLeave={() => setIsFrequentBuyersMenuOpen(false)}
                    className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
                  >
                    <div className="py-2">
                      <a href="https://icondumpsters.com/frequent-buyers" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">
                        Frequent Buyers Program
                      </a>
                    </div>
                  </div>
                )}
              </div>
              

            </nav>

            {/* Contact Info & CTAs */}
            <div className="flex items-center space-x-4">
              {/* Phone Number - Always Visible */}
              <div className="hidden lg:flex items-center space-x-2">
                <div className="flex items-center space-x-2">
                  <span className="text-[#4e37a8] font-semibold">Call Now</span>
                  <div className="w-8 h-8 bg-[#4e37a8] rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <a 
                    href="tel:(801) 918-6000" 
                    className="text-[#4e37a8] font-semibold hover:text-purple-700 transition-colors cursor-pointer"
                    title="Call (801) 918-6000"
                  >
                    (801) 918-6000
                  </a>
                </div>
              </div>

              {/* Mobile Phone Button */}
              <button
                onClick={() => setIsPhoneModalOpen(true)}
                className="lg:hidden w-10 h-10 bg-[#4e37a8] rounded-full flex items-center justify-center"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </button>

              {/* BOOK NOW Button - Special styling with decorative elements */}
              <div className="hidden lg:block relative">
                <div className="absolute -top-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#4e37a8] to-transparent"></div>
                <a 
                  href="https://icondumpsters.com/book"
                  className="bg-white text-[#4e37a8] px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-bold text-sm border-2 border-[#4e37a8] shadow-md block"
                >
                  BOOK NOW
                </a>
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#4e37a8] to-transparent"></div>
              </div>

              {/* CTA Buttons */}
              <div className="hidden lg:flex items-center space-x-3">
                <a 
                  href="tel:(801) 918-6000"
                  className="bg-[#4e37a8] text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors font-medium text-sm"
                >
                  Call Now
                </a>
                <a 
                  href="https://icondumpsters.com/#quote-form"
                  className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors font-medium text-sm"
                >
                  Get Quote
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-md text-[#4e37a8] hover:text-purple-700 hover:bg-gray-100"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-gray-50 border-t border-gray-200">
          <div className="px-4 py-3 space-y-2">
            {/* Main Dumpster Rental Link */}
            <a href="https://icondumpsters.com/dumpster-rental" className="block text-[#4e37a8] hover:text-purple-700 py-2 font-semibold text-lg">
              Dumpster Rentals
            </a>
            
            {/* Mobile Services */}
            <div className="border-b border-gray-200 pb-2">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Services</div>
              <a href="https://icondumpsters.com/dumpster-rental" className="block text-[#4e37a8] hover:text-purple-700 py-1">All Dumpster Rentals</a>
              <a href="https://icondumpsters.com/dumpster-rental/home" className="block text-[#4e37a8] hover:text-purple-700 py-1">Residential Services</a>
              <a href="https://icondumpsters.com/dumpster-rental/business" className="block text-[#4e37a8] hover:text-purple-700 py-1">Commercial Services</a>
              <a href="https://icondumpsters.com/dumpster-rental/construction" className="block text-[#4e37a8] hover:text-purple-700 py-1">Construction Services</a>
              <a href="https://icondumpsters.com/services" className="block text-[#4e37a8] hover:text-purple-700 py-1">All Services</a>
            </div>
            
            {/* Mobile SIZES */}
             <div className="border-t border-gray-200 pt-2">
               <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">SIZES - Specialized Dumpsters</div>
               <a href="https://icondumpsters.com/dumpster-sizes#10-yard-dirt" className="block text-[#4e37a8] hover:text-purple-700 py-1">10 Yard Dirt</a>
               <a href="https://icondumpsters.com/dumpster-sizes#10-yard-mixed" className="block text-[#4e37a8] hover:text-purple-700 py-1">10 Yard Mixed</a>
               <a href="https://icondumpsters.com/dumpster-sizes#12-yard-concrete" className="block text-[#4e37a8] hover:text-purple-700 py-1">12 Yard Concrete</a>
               <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mt-2 pt-2 border-t border-gray-200">Standard Dumpsters</div>
               <a href="https://icondumpsters.com/dumpster-sizes#15-yard" className="block text-[#4e37a8] hover:text-purple-700 py-1">15 Yard Dumpsters</a>
               <a href="https://icondumpsters.com/dumpster-sizes#20-yard" className="block text-[#4e37a8] hover:text-purple-700 py-1">20 Yard Dumpsters</a>
               <a href="https://icondumpsters.com/dumpster-sizes#30-yard" className="block text-[#4e37a8] hover:text-purple-700 py-1">30 Yard Dumpsters</a>
               <a href="https://icondumpsters.com/dumpster-sizes" className="block text-[#4e37a8] hover:text-purple-700 py-1">View All Dumpster Sizes</a>
             </div>
            
            <a href="https://icondumpsters.com/#pricing" className="block text-[#4e37a8] hover:text-purple-700 py-2 font-semibold">
              Pricing
            </a>
            
            {/* Mobile City Pages */}
            <div className="border-t border-gray-200 pt-2">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Salt Lake County</div>
              <a href="https://icondumpsters.com/west-valley-city" className="block text-[#4e37a8] hover:text-purple-700 py-1">West Valley City</a>
              <a href="https://icondumpsters.com/taylorsville" className="block text-[#4e37a8] hover:text-purple-700 py-1">Taylorsville</a>
              <a href="https://icondumpsters.com/kearns" className="block text-[#4e37a8] hover:text-purple-700 py-1">Kearns</a>
              <a href="https://icondumpsters.com/magna" className="block text-[#4e37a8] hover:text-purple-700 py-1">Magna</a>
              <a href="https://icondumpsters.com/millcreek" className="block text-[#4e37a8] hover:text-purple-700 py-1">Millcreek</a>
              <a href="https://icondumpsters.com/holladay" className="block text-[#4e37a8] hover:text-purple-700 py-1">Holladay</a>
              <a href="https://icondumpsters.com/cottonwood-heights" className="block text-[#4e37a8] hover:text-purple-700 py-1">Cottonwood Heights</a>
              <a href="https://icondumpsters.com/south-salt-lake" className="block text-[#4e37a8] hover:text-purple-700 py-1">South Salt Lake</a>
              <a href="https://icondumpsters.com/riverton" className="block text-[#4e37a8] hover:text-purple-700 py-1">Riverton</a>
              <a href="https://icondumpsters.com/herriman" className="block text-[#4e37a8] hover:text-purple-700 py-1">Herriman</a>
              <a href="https://icondumpsters.com/bluffdale" className="block text-[#4e37a8] hover:text-purple-700 py-1">Bluffdale</a>
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mt-2 pt-2 border-t border-gray-200">Davis County</div>
              <a href="https://icondumpsters.com/bountiful" className="block text-[#4e37a8] hover:text-purple-700 py-1">Bountiful</a>
              <a href="https://icondumpsters.com/north-salt-lake" className="block text-[#4e37a8] hover:text-purple-700 py-1">North Salt Lake</a>
              <a href="https://icondumpsters.com/centerville" className="block text-[#4e37a8] hover:text-purple-700 py-1">Centerville</a>
              <a href="https://icondumpsters.com/farmington" className="block text-[#4e37a8] hover:text-purple-700 py-1">Farmington</a>
              <a href="https://icondumpsters.com/layton" className="block text-[#4e37a8] hover:text-purple-700 py-1">Layton</a>
              <a href="https://icondumpsters.com/woods-cross" className="block text-[#4e37a8] hover:text-purple-700 py-1">Woods Cross</a>
              <a href="https://icondumpsters.com/clearfield" className="block text-[#4e37a8] hover:text-purple-700 py-1">Clearfield</a>
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mt-2 pt-2 border-t border-gray-200">Utah County</div>
              <a href="https://icondumpsters.com/lehi" className="block text-[#4e37a8] hover:text-purple-700 py-1">Lehi</a>
              <a href="https://icondumpsters.com/american-fork" className="block text-[#4e37a8] hover:text-purple-700 py-1">American Fork</a>
              <a href="https://icondumpsters.com/pleasant-grove" className="block text-[#4e37a8] hover:text-purple-700 py-1">Pleasant Grove</a>
              <a href="https://icondumpsters.com/eagle-mountain" className="block text-[#4e37a8] hover:text-purple-700 py-1">Eagle Mountain</a>
              <a href="https://icondumpsters.com/saratoga-springs" className="block text-[#4e37a8] hover:text-purple-700 py-1">Saratoga Springs</a>
              <a href="https://icondumpsters.com/orem" className="block text-[#4e37a8] hover:text-purple-700 py-1">Orem</a>
              <a href="https://icondumpsters.com/provo" className="block text-[#4e37a8] hover:text-purple-700 py-1">Provo</a>
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mt-2 pt-2 border-t border-gray-200">Summit & Tooele</div>
              <a href="https://icondumpsters.com/park-city" className="block text-[#4e37a8] hover:text-purple-700 py-1">Park City</a>
              <a href="https://icondumpsters.com/tooele" className="block text-[#4e37a8] hover:text-purple-700 py-1">Tooele</a>
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mt-2 pt-2 border-t border-gray-200">SLC Neighborhoods</div>
              <a href="https://icondumpsters.com/rose-park" className="block text-[#4e37a8] hover:text-purple-700 py-1">Rose Park</a>
              <a href="https://icondumpsters.com/sugar-house" className="block text-[#4e37a8] hover:text-purple-700 py-1">Sugar House</a>
              <a href="https://icondumpsters.com/glendale" className="block text-[#4e37a8] hover:text-purple-700 py-1">Glendale</a>
              <a href="https://icondumpsters.com/poplar-grove" className="block text-[#4e37a8] hover:text-purple-700 py-1">Poplar Grove</a>
              <a href="https://icondumpsters.com/downtown-salt-lake" className="block text-[#4e37a8] hover:text-purple-700 py-1">Downtown Salt Lake</a>
              
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mt-2 pt-2 border-t border-gray-200">County-Based Services</div>
              <a href="https://icondumpsters.com/dumpster-rental-salt-lake-county-ut" className="block text-[#4e37a8] hover:text-purple-700 py-1">Salt Lake County</a>
              <a href="https://icondumpsters.com/dumpster-rental-utah-county-ut" className="block text-[#4e37a8] hover:text-purple-700 py-1">Utah County</a>
              <a href="https://icondumpsters.com/dumpster-rental-davis-county-ut" className="block text-[#4e37a8] hover:text-purple-700 py-1">Davis County</a>
              <a href="https://icondumpsters.com/dumpster-rental-weber-county-ut" className="block text-[#4e37a8] hover:text-purple-700 py-1">Weber County</a>
              <a href="https://icondumpsters.com/dumpster-rental-cache-county-ut" className="block text-[#4e37a8] hover:text-purple-700 py-1">Cache County</a>
              <a href="https://icondumpsters.com/dumpster-rental-tooele-county-ut" className="block text-[#4e37a8] hover:text-purple-700 py-1">Tooele County</a>
              <a href="https://icondumpsters.com/dumpster-rental-summit-county-ut" className="block text-[#4e37a8] hover:text-purple-700 py-1">Summit County</a>
              <a href="https://icondumpsters.com/dumpster-rental-wasatch-county-ut" className="block text-[#4e37a8] hover:text-purple-700 py-1">Wasatch County</a>
            </div>
            
            <a href="https://icondumpsters.com/frequent-buyers" className="block text-[#4e37a8] hover:text-purple-700 py-2 font-semibold">
              Frequent Buyers Program
            </a>
            <div className="pt-2 border-t border-gray-200">
              <a 
                href="https://icondumpsters.com/#quote-form"
                className="block bg-[#4e37a8] text-white px-4 py-2 rounded-lg text-center font-medium"
              >
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
        )}
      </header>

      {/* Phone Modal */}
      <PhoneModal 
        isOpen={isPhoneModalOpen} 
        onClose={() => setIsPhoneModalOpen(false)} 
      />
    </>
  );
}

'use client';

import { useState } from 'react';
import PhoneModal from './PhoneModal';

export default function EnhancedHeader() {
  const [isPhoneModalOpen, setIsPhoneModalOpen] = useState(false);
  const [isCityMenuOpen, setIsCityMenuOpen] = useState(false);
  const [isDumpsterSizesMenuOpen, setIsDumpsterSizesMenuOpen] = useState(false);
  const [isFrequentBuyersMenuOpen, setIsFrequentBuyersMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="bg-white p-1 rounded-lg shadow-sm">
                <img 
                  src="/Icon_Dumpsters_Final.png" 
                  alt="Icon Dumpsters Logo" 
                  className="h-8 w-auto"
                />
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900">
                ICON <span className="text-[#4e37a8]">DUMPSTERS</span>
              </span>
            </div>

            {/* Navigation - Hidden on mobile */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-700 hover:text-[#4e37a8] transition-colors">
                Services
              </a>
              
              {/* Dumpster Sizes Dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => setIsDumpsterSizesMenuOpen(true)}
                  onMouseLeave={() => setIsDumpsterSizesMenuOpen(false)}
                  className="text-gray-700 hover:text-[#4e37a8] transition-colors flex items-center"
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
                       <a href="/dumpster-sizes#10-yard-dirt" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8] border-b border-gray-100">
                         <div className="font-semibold">10 Yard Dirt</div>
                         <div className="text-xs text-gray-500">Perfect for dirt & soil projects</div>
                       </a>
                       <a href="/dumpster-sizes#10-yard-mixed" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8] border-b border-gray-100">
                         <div className="font-semibold">10 Yard Mixed</div>
                         <div className="text-xs text-gray-500">Mixed heavy loads</div>
                       </a>
                       <a href="/dumpster-sizes#12-yard-concrete" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8] border-b border-gray-100">
                         <div className="font-semibold">12 Yard Concrete</div>
                         <div className="text-xs text-gray-500">Perfect for concrete projects</div>
                       </a>
                       
                       {/* Standard Dumpsters */}
                       <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide border-b border-gray-100">
                         Standard Dumpsters
                       </div>
                       <a href="/dumpster-sizes#15-yard" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8] border-b border-gray-100">
                         <div className="font-semibold">15 Yard Dumpsters</div>
                         <div className="text-xs text-gray-500">Ideal for medium projects</div>
                       </a>
                       <a href="/dumpster-sizes#20-yard" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8] border-b border-gray-100">
                         <div className="font-semibold">20 Yard Dumpsters</div>
                         <div className="text-xs text-gray-500">Great for large projects</div>
                       </a>
                       <a href="/dumpster-sizes#30-yard" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8] border-b border-gray-100">
                         <div className="font-semibold">30 Yard Dumpsters</div>
                         <div className="text-xs text-gray-500">For major projects</div>
                       </a>
                       <a href="/dumpster-sizes" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">
                         <div className="font-semibold">View All Dumpster Sizes</div>
                         <div className="text-xs text-gray-500">See complete selection</div>
                       </a>
                     </div>
                   </div>
                 )}
              </div>
              
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
                       <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide border-t border-gray-100 mt-2 pt-2">
                         Salt Lake County
                       </div>
                       <a href="/west-valley-city" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">West Valley City</a>
                       <a href="/taylorsville" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">Taylorsville</a>
                       <a href="/kearns" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">Kearns</a>
                       <a href="/magna" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">Magna</a>
                       <a href="/millcreek" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">Millcreek</a>
                       <a href="/holladay" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">Holladay</a>
                       <a href="/cottonwood-heights" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">Cottonwood Heights</a>
                       <a href="/south-salt-lake" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">South Salt Lake</a>
                       <a href="/riverton" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">Riverton</a>
                       <a href="/herriman" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">Herriman</a>
                       <a href="/bluffdale" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">Bluffdale</a>

                       <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide border-t border-gray-100 mt-2 pt-2">
                         Davis County
                       </div>
                       <a href="/bountiful" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">Bountiful</a>
                       <a href="/north-salt-lake" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">North Salt Lake</a>
                       <a href="/centerville" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">Centerville</a>
                       <a href="/farmington" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">Farmington</a>
                       <a href="/layton" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">Layton</a>
                       <a href="/woods-cross" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">Woods Cross</a>
                       <a href="/clearfield" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">Clearfield</a>

                       <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide border-t border-gray-100 mt-2 pt-2">
                         Utah County
                       </div>
                       <a href="/lehi" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">Lehi</a>
                       <a href="/american-fork" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">American Fork</a>
                       <a href="/pleasant-grove" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">Pleasant Grove</a>
                       <a href="/eagle-mountain" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">Eagle Mountain</a>
                       <a href="/saratoga-springs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">Saratoga Springs</a>
                       <a href="/orem" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">Orem</a>
                       <a href="/provo" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">Provo</a>

                       <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide border-t border-gray-100 mt-2 pt-2">
                         Summit & Tooele
                       </div>
                       <a href="/park-city" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">Park City</a>
                       <a href="/tooele" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">Tooele</a>

                       <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide border-t border-gray-100 mt-2 pt-2">
                         SLC Neighborhoods
                       </div>
                       <a href="/rose-park" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">Rose Park</a>
                       <a href="/sugar-house" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">Sugar House</a>
                       <a href="/glendale" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">Glendale</a>
                       <a href="/poplar-grove" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">Poplar Grove</a>
                       <a href="/downtown-salt-lake" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">Downtown Salt Lake</a>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Frequent Buyers Dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => setIsFrequentBuyersMenuOpen(true)}
                  onMouseLeave={() => setIsFrequentBuyersMenuOpen(false)}
                  className="text-gray-700 hover:text-[#4e37a8] transition-colors flex items-center"
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
                      <a href="/frequent-buyers" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">
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
            
                         {/* Mobile SIZES */}
             <div className="border-t border-gray-200 pt-2">
               <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">SIZES - Specialized Dumpsters</div>
               <a href="/dumpster-sizes#10-yard-dirt" className="block text-gray-700 hover:text-[#4e37a8] py-1">10 Yard Dirt</a>
               <a href="/dumpster-sizes#10-yard-mixed" className="block text-gray-700 hover:text-[#4e37a8] py-1">10 Yard Mixed</a>
               <a href="/dumpster-sizes#12-yard-concrete" className="block text-gray-700 hover:text-[#4e37a8] py-1">12 Yard Concrete</a>
               <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mt-2 pt-2 border-t border-gray-200">Standard Dumpsters</div>
               <a href="/dumpster-sizes#15-yard" className="block text-gray-700 hover:text-[#4e37a8] py-1">15 Yard Dumpsters</a>
               <a href="/dumpster-sizes#20-yard" className="block text-gray-700 hover:text-[#4e37a8] py-1">20 Yard Dumpsters</a>
               <a href="/dumpster-sizes#30-yard" className="block text-gray-700 hover:text-[#4e37a8] py-1">30 Yard Dumpsters</a>
               <a href="/dumpster-sizes" className="block text-gray-700 hover:text-[#4e37a8] py-1">View All Dumpster Sizes</a>
             </div>
            
            <a href="#pricing" className="block text-gray-700 hover:text-[#4e37a8] py-2">
              Pricing
            </a>
            
            {/* Mobile City Pages */}
            <div className="border-t border-gray-200 pt-2">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Salt Lake County</div>
              <a href="/west-valley-city" className="block text-gray-700 hover:text-[#4e37a8] py-1">West Valley City</a>
              <a href="/taylorsville" className="block text-gray-700 hover:text-[#4e37a8] py-1">Taylorsville</a>
              <a href="/kearns" className="block text-gray-700 hover:text-[#4e37a8] py-1">Kearns</a>
              <a href="/magna" className="block text-gray-700 hover:text-[#4e37a8] py-1">Magna</a>
              <a href="/millcreek" className="block text-gray-700 hover:text-[#4e37a8] py-1">Millcreek</a>
              <a href="/holladay" className="block text-gray-700 hover:text-[#4e37a8] py-1">Holladay</a>
              <a href="/cottonwood-heights" className="block text-gray-700 hover:text-[#4e37a8] py-1">Cottonwood Heights</a>
              <a href="/south-salt-lake" className="block text-gray-700 hover:text-[#4e37a8] py-1">South Salt Lake</a>
              <a href="/riverton" className="block text-gray-700 hover:text-[#4e37a8] py-1">Riverton</a>
              <a href="/herriman" className="block text-gray-700 hover:text-[#4e37a8] py-1">Herriman</a>
              <a href="/bluffdale" className="block text-gray-700 hover:text-[#4e37a8] py-1">Bluffdale</a>
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mt-2 pt-2 border-t border-gray-200">Davis County</div>
              <a href="/bountiful" className="block text-gray-700 hover:text-[#4e37a8] py-1">Bountiful</a>
              <a href="/north-salt-lake" className="block text-gray-700 hover:text-[#4e37a8] py-1">North Salt Lake</a>
              <a href="/centerville" className="block text-gray-700 hover:text-[#4e37a8] py-1">Centerville</a>
              <a href="/farmington" className="block text-gray-700 hover:text-[#4e37a8] py-1">Farmington</a>
              <a href="/layton" className="block text-gray-700 hover:text-[#4e37a8] py-1">Layton</a>
              <a href="/woods-cross" className="block text-gray-700 hover:text-[#4e37a8] py-1">Woods Cross</a>
              <a href="/clearfield" className="block text-gray-700 hover:text-[#4e37a8] py-1">Clearfield</a>
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mt-2 pt-2 border-t border-gray-200">Utah County</div>
              <a href="/lehi" className="block text-gray-700 hover:text-[#4e37a8] py-1">Lehi</a>
              <a href="/american-fork" className="block text-gray-700 hover:text-[#4e37a8] py-1">American Fork</a>
              <a href="/pleasant-grove" className="block text-gray-700 hover:text-[#4e37a8] py-1">Pleasant Grove</a>
              <a href="/eagle-mountain" className="block text-gray-700 hover:text-[#4e37a8] py-1">Eagle Mountain</a>
              <a href="/saratoga-springs" className="block text-gray-700 hover:text-[#4e37a8] py-1">Saratoga Springs</a>
              <a href="/orem" className="block text-gray-700 hover:text-[#4e37a8] py-1">Orem</a>
              <a href="/provo" className="block text-gray-700 hover:text-[#4e37a8] py-1">Provo</a>
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mt-2 pt-2 border-t border-gray-200">Summit & Tooele</div>
              <a href="/park-city" className="block text-gray-700 hover:text-[#4e37a8] py-1">Park City</a>
              <a href="/tooele" className="block text-gray-700 hover:text-[#4e37a8] py-1">Tooele</a>
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mt-2 pt-2 border-t border-gray-200">SLC Neighborhoods</div>
              <a href="/rose-park" className="block text-gray-700 hover:text-[#4e37a8] py-1">Rose Park</a>
              <a href="/sugar-house" className="block text-gray-700 hover:text-[#4e37a8] py-1">Sugar House</a>
              <a href="/glendale" className="block text-gray-700 hover:text-[#4e37a8] py-1">Glendale</a>
              <a href="/poplar-grove" className="block text-gray-700 hover:text-[#4e37a8] py-1">Poplar Grove</a>
              <a href="/downtown-salt-lake" className="block text-gray-700 hover:text-[#4e37a8] py-1">Downtown Salt Lake</a>
            </div>
            
            <a href="/frequent-buyers" className="block text-gray-700 hover:text-[#4e37a8] py-2">
              Frequent Buyers Program
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

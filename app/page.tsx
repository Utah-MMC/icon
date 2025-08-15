import Image from "next/image";
import ImageWithFallback from "./components/ImageWithFallback";
import QuoteForm from "./components/QuoteForm";
import ReviewsCarousel from "./components/ReviewsCarousel";
import CleanupSection from "./components/CleanupSection";
import TrustSection from "./components/TrustSection";
import QuickQuoteButton from "./components/QuickQuoteButton";
import DumpsterCalculator from "./components/DumpsterCalculator";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#4e37a8] to-purple-700 h-64 sm:h-80 lg:h-96 flex items-center justify-center">
        {/* Background image */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <ImageWithFallback 
          src="/images/dumpster500x200-1.jpeg" 
          alt="Professional Dumpster Rental Services in Utah - Roll-off Dumpsters for Construction and Waste Management" 
          className="absolute inset-0 w-full h-full object-cover"
          fallbackSrc="/images/dumpsterSmallBanner3.jpeg"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black bg-opacity-20"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4">
                      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Professional Dumpster Rental Services in Salt Lake County</h1>
          <a href="#quote-form" className="bg-[#4e37a8] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-purple-700 transition-colors font-medium text-base sm:text-lg inline-block">
            Get A Quote
          </a>
        </div>
      </div>

      {/* Quick Calculator Section - Added to top */}
      <div className="bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#4e37a8] mb-2">Get Your Instant Quote</h2>
            <p className="text-gray-600">Calculate your dumpster rental cost in seconds</p>
          </div>
          <DumpsterCalculator />
        </div>
      </div>

      {/* Dumpster Rental Service Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        {/* Purple Gradient Wipe */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#4e37a8]/30 via-[#4e37a8]/15 to-purple-600/25 pointer-events-none"></div>
        <div className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Left Column - Information */}
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold">
              <span className="text-gray-800">Roll-off Dumpster Rental</span>{" "}
              <span className="text-[#4e37a8]">Services in Salt Lake County</span>
            </h2>
            
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Looking for reliable dumpster rental services near you? We provide comprehensive roll-off dumpster rental solutions 
              for all your needs. Whether you're renovating your home, cleaning up after a construction project, 
              or need regular waste disposal, our team is here to help with professional Utah dumpster rental services.
            </p>
            
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              <strong>Icon Dumpsters</strong> is a professional dumpster rental company serving Utah communities. We offer 
              instant estimates and handle various types of waste including household, construction, yard, 
              recyclable, and concrete waste. Our roll-off dumpster sizes range from 15 to 30 yards to accommodate 
              any project size. Call us today at <strong>(801) 918-6000</strong> for a free quote and 
              professional dumpster rental service you can trust.
            </p>
            
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Don't let waste management become a headache. Call us or request a free quote to get an 
              instant estimate for your project. Our experienced team will help you choose the right 
              dumpster size and provide reliable delivery and pickup services.
            </p>
            
            <div className="pt-6">
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-[#4e37a8] rounded-full mb-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Choose Your Perfect Dumpster</h3>
                  <p className="text-gray-600 text-sm sm:text-base">Select the right size for your project needs</p>
                </div>

                {/* Standard Dumpsters */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <span className="w-2 h-2 bg-[#4e37a8] rounded-full mr-3"></span>
                    Standard Dumpsters
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden">
                      <div className="p-6">
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 mb-4">
                                                <ImageWithFallback 
                        src="/images/IMG_0350.jpg" 
                        alt="15 Yard Roll-off Dumpster for Utah Dumpster Rental" 
                        className="w-full h-32 object-contain object-center rounded-lg" 
                        fallbackSrc="/images/dumpsters.webp" 
                      />
                        </div>
                        <h4 className="font-bold text-gray-900 text-lg mb-2">15 Yard</h4>
                        <p className="text-gray-600 text-sm mb-3">Perfect for small projects</p>
                        <div className="flex items-center justify-between">
                          <span className="text-[#4e37a8] font-semibold">Most Popular</span>
                          <div className="w-8 h-8 bg-[#4e37a8] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden">
                      <div className="p-6">
                        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 mb-4">
                                                <ImageWithFallback 
                        src="/images/IMG_0336.jpg" 
                        alt="20 Yard Roll-off Dumpster for Utah Dumpster Rental" 
                        className="w-full h-32 object-contain object-center rounded-lg" 
                        fallbackSrc="/images/dumpster500x500-1.webp" 
                      />
                        </div>
                        <h4 className="font-bold text-gray-900 text-lg mb-2">20 Yard</h4>
                        <p className="text-gray-600 text-sm mb-3">Ideal for medium projects</p>
                        <div className="flex items-center justify-between">
                          <span className="text-green-600 font-semibold">Great Value</span>
                          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden">
                      <div className="p-6">
                        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4 mb-4">
                          <ImageWithFallback 
                            src="/images/dumpster5-500x500-1.jpeg" 
                            alt="30 Yard Roll-off Dumpster for Utah Dumpster Rental" 
                            className="w-full h-32 object-contain object-center rounded-lg" 
                            fallbackSrc="/images/dumpster5-500x500-1.webp" 
                          />
                        </div>
                        <h4 className="font-bold text-gray-900 text-lg mb-2">30 Yard</h4>
                        <p className="text-gray-600 text-sm mb-3">Great for large projects</p>
                        <div className="flex items-center justify-between">
                          <span className="text-purple-600 font-semibold">Large Capacity</span>
                          <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Specialized Dumpster Options */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    Specialized Dumpsters
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden">
                      <div className="p-6">
                        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-4 mb-4">
                          <ImageWithFallback 
                            src="/images/IMG_3190.jpg" 
                            alt="10 Yard Clean Dirt Disposal Dumpster for Utah Dumpster Rental" 
                            className="w-full h-32 object-contain object-center rounded-lg" 
                            fallbackSrc="/images/IMG_3190.jpg" 
                          />
                        </div>
                        <h4 className="font-bold text-gray-900 text-lg mb-2">10 Yard Dirt</h4>
                        <p className="text-gray-600 text-sm mb-3">Perfect for dirt & soil projects</p>
                        <div className="flex items-center justify-between">
                          <span className="text-orange-600 font-semibold">Clean Dirt Only</span>
                          <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden">
                      <div className="p-6">
                        <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg p-4 mb-4">
                          <ImageWithFallback 
                            src="/images/IMG_3190.jpg" 
                            alt="10 Yard Mixed Load Disposal Dumpster for Utah Dumpster Rental" 
                            className="w-full h-32 object-contain object-center rounded-lg" 
                            fallbackSrc="/images/IMG_3190.jpg" 
                          />
                        </div>
                        <h4 className="font-bold text-gray-900 text-lg mb-2">10 Yard Mixed</h4>
                        <p className="text-gray-600 text-sm mb-3">4 tons included</p>
                        <div className="flex items-center justify-between">
                          <span className="text-red-600 font-semibold">Mixed Load</span>
                          <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden">
                      <div className="p-6">
                        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4 mb-4">
                          <ImageWithFallback 
                            src="/images/IMG_3190.jpg" 
                            alt="12 Yard Concrete Disposal Dumpster for Utah Dumpster Rental" 
                            className="w-full h-32 object-contain object-center rounded-lg" 
                            fallbackSrc="/images/IMG_3190.jpg" 
                          />
                        </div>
                        <h4 className="font-bold text-gray-900 text-lg mb-2">12 Yard Concrete</h4>
                        <p className="text-gray-600 text-sm mb-3">Perfect for concrete projects</p>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600 font-semibold">Heavy Duty</span>
                          <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="text-center">
                  <a href="/dumpster-sizes" className="inline-flex items-center bg-gradient-to-r from-[#4e37a8] to-purple-600 text-white px-8 py-3 rounded-lg hover:from-purple-600 hover:to-[#4e37a8] transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    View All Sizes & Pricing
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Quote Form */}
          <QuoteForm />
        </div>
        </div>
      </div>

      {/* Cleanup Section */}
      <CleanupSection />




      {/* Our Services Section */}
      <div id="our-services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#4e37a8] mb-4">Our Services</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Professional waste management solutions for all your needs. From residential cleanouts to large construction projects.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          
          {/* General Residential Waste */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <a href="/services" className="block">
              <ImageWithFallback src="/images/dumpsters.jpeg" alt="Residential Dumpster Rental Services in Utah" className="w-full h-40 sm:h-48 object-cover hover:opacity-90 transition-opacity" fallbackSrc="/images/dumpster500x500-1.jpeg" />
            </a>
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-[#4e37a8] mb-3">Residential Dumpster Rental</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4">Rent a roll-off dumpster to remove residential household wastes during cleanouts, moves, or renovations.</p>
              <a href="/services" className="text-[#4e37a8] font-semibold hover:text-purple-700 transition-colors text-sm sm:text-base">
                Read More →
              </a>
            </div>
          </div>

          {/* Construction Waste */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <a href="/services" className="block">
              <ImageWithFallback src="/images/Construction-Rental-480x480.jpg" alt="Construction Dumpster Rental Services in Utah" className="w-full h-40 sm:h-48 object-cover hover:opacity-90 transition-opacity" fallbackSrc="/images/dumpster500x500-1.jpeg" />
            </a>
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-[#4e37a8] mb-3">Construction Dumpster Rental</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4">Rent a roll-off dumpster to remove construction debris, drywall, lumber, and building materials.</p>
              <a href="/services" className="text-[#4e37a8] font-semibold hover:text-purple-700 transition-colors text-sm sm:text-base">
                Read More →
              </a>
            </div>
          </div>

          {/* Concrete Waste */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <a href="/services" className="block">
              <ImageWithFallback src="/images/dumpster500x500-1.jpeg" alt="Concrete Dumpster Rental Services in Utah" className="w-full h-40 sm:h-48 object-cover hover:opacity-90 transition-opacity" fallbackSrc="/images/dumpster500x500-2.jpeg" />
            </a>
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-[#4e37a8] mb-3">Concrete Dumpster Rental</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4">Rent a roll-off dumpster to remove concrete, asphalt, bricks, and other heavy construction materials.</p>
              <a href="/services" className="text-[#4e37a8] font-semibold hover:text-purple-700 transition-colors text-sm sm:text-base">
                Read More →
              </a>
            </div>
          </div>

          {/* Roofing Waste */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <a href="/services" className="block">
              <ImageWithFallback src="/images/dumpster500x500-2.jpeg" alt="Roofing Dumpster Rental Services in Utah" className="w-full h-40 sm:h-48 object-cover hover:opacity-90 transition-opacity" fallbackSrc="/images/dumpster500x500-1.jpeg" />
            </a>
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-[#4e37a8] mb-3">Roofing Dumpster Rental</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4">Rent a roll-off dumpster for roofing shingles, underlayment, and other roofing materials.</p>
              <a href="/services" className="text-[#4e37a8] font-semibold hover:text-purple-700 transition-colors text-sm sm:text-base">
                Read More →
              </a>
            </div>
          </div>

          {/* Yard Waste */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <a href="/services" className="block">
              <ImageWithFallback src="/images/dumpsterSmallBanner2.jpeg" alt="Yard Waste Dumpster Rental Services in Utah" className="w-full h-40 sm:h-48 object-cover hover:opacity-90 transition-opacity" fallbackSrc="/images/dumpster500x500-1.jpeg" />
            </a>
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-[#4e37a8] mb-3">Yard Waste Dumpster Rental</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4">Rent a roll-off dumpster to remove yard waste, branches, leaves, and landscaping debris.</p>
              <a href="/services" className="text-[#4e37a8] font-semibold hover:text-purple-700 transition-colors text-sm sm:text-base">
                Read More →
              </a>
            </div>
          </div>

          {/* Recyclable Waste */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <a href="/services" className="block">
              <ImageWithFallback src="/images/dumpster500x500-1.jpeg" alt="Recyclable Waste Dumpster Rental Services in Utah" className="w-full h-40 sm:h-48 object-cover hover:opacity-90 transition-opacity" fallbackSrc="/images/dumpster500x500-2.jpeg" />
            </a>
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-[#4e37a8] mb-3">Recyclable Waste Dumpster Rental</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4">Rent a roll-off dumpster to remove recyclable materials, cardboard, paper, and plastic waste.</p>
              <a href="/services" className="text-[#4e37a8] font-semibold hover:text-purple-700 transition-colors text-sm sm:text-base">
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
              Choose the perfect dumpster size for your project. All rentals include delivery, pickup, and landfill fees.
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
                    <span className="text-[#4e37a8] font-semibold">Weight:</span>
                    <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700">1.5 tons...</p>
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
                    <span className="text-[#4e37a8] font-semibold">Weight:</span>
                    <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700">2 tons...</p>
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
                    <span className="text-[#4e37a8] font-semibold">Weight:</span>
                    <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700">3 tons...</p>
                </div>
              </div>
              
              <QuickQuoteButton dumpsterSize="30 Yard" className="w-full py-3 font-semibold text-center block mt-6" />
            </div>
          </div>
        </div>
      </div>

      {/* Trust Section */}
      <TrustSection />

      {/* Reviews Section */}
      <ReviewsCarousel />

      {/* Cleanup Section */}
      <CleanupSection />
    </div>
  );
}

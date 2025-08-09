import Image from "next/image";
import ImageWithFallback from "./components/ImageWithFallback";
import QuoteForm from "./components/QuoteForm";
import ReviewsCarousel from "./components/ReviewsCarousel";
import CleanupSection from "./components/CleanupSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#4e37a8] to-purple-700 h-64 sm:h-80 lg:h-96 flex items-center justify-center">
        {/* Background image */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <ImageWithFallback 
          src="/images/dumpsterSmallBanner3.jpeg" 
          alt="Professional Dumpster Rental Services in Utah - Roll-off Dumpsters for Construction and Waste Management" 
          className="absolute inset-0 w-full h-full object-cover"
          fallbackSrc="/images/dumpsterSmallBanner3.webp"
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
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">Dumpster Sizes</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ImageWithFallback src="/images/dumpsters.jpeg" alt="15 Yard Roll-off Dumpster for Utah Dumpster Rental" className="w-full h-20 object-cover object-left rounded mb-2" fallbackSrc="/images/dumpsters.webp" />
                  <h4 className="font-semibold text-gray-800 text-sm sm:text-base">15 Yard Roll-off Dumpster</h4>
                  <p className="text-xs sm:text-sm text-gray-600">Perfect for small projects</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ImageWithFallback src="/images/dumpster500x500-1.jpeg" alt="20 Yard Roll-off Dumpster for Utah Dumpster Rental" className="w-full h-20 object-cover rounded mb-2" fallbackSrc="/images/dumpster500x500-1.webp" />
                  <h4 className="font-semibold text-gray-800 text-sm sm:text-base">20 Yard Roll-off Dumpster</h4>
                  <p className="text-xs sm:text-sm text-gray-600">Ideal for medium projects</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ImageWithFallback src="/images/dumpster5-500x500-1.jpeg" alt="30 Yard Roll-off Dumpster for Utah Dumpster Rental" className="w-full h-20 object-cover rounded mb-2" fallbackSrc="/images/dumpster5-500x500-1.webp" />
                  <h4 className="font-semibold text-gray-800 text-sm sm:text-base">30 Yard Roll-off Dumpster</h4>
                  <p className="text-xs sm:text-sm text-gray-600">Great for large projects</p>
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


      {/* Customer Reviews Section */}
      <div className="bg-[#4e37a8] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">
              Top Rated Dumpster Rentals in Salt Lake County
            </h2>
            <div className="flex items-center justify-center gap-2 mb-1">
              <span className="text-white font-bold text-base">EXCELLENT</span>
            </div>
            <div className="flex items-center justify-center gap-1 mb-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-white text-xs">Based on 13 reviews</p>
            <div className="flex items-center justify-center mt-1">
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            </div>
          </div>

          <ReviewsCarousel />

          {/* Call to Action */}
          <div className="text-center mt-6">
            <p className="text-white text-base mb-4">Ready to experience our excellent service?</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="#quote-form"
                className="inline-flex items-center bg-[#4e37a8] text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors font-medium text-sm"
              >
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
                Get Free Quote
              </a>
              <div
                className="inline-flex items-center bg-[#4e37a8] text-white px-6 py-2 rounded-lg font-medium text-sm cursor-default"
              >
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                (801) 918-6000
              </div>
            </div>
          </div>
        </div>
      </div>

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
              <ImageWithFallback src="/images/dumpsters.jpeg" alt="Residential Dumpster Rental Services in Utah" className="w-full h-40 sm:h-48 object-cover hover:opacity-90 transition-opacity" fallbackSrc="/images/dumpsters.webp" />
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
              <ImageWithFallback src="/images/dumpster500x500-1.jpeg" alt="Construction Dumpster Rental Services in Utah" className="w-full h-40 sm:h-48 object-cover hover:opacity-90 transition-opacity" fallbackSrc="/images/dumpster500x500-1.webp" />
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
              <ImageWithFallback src="/images/dumpster5-500x500-1.jpeg" alt="Concrete Dumpster Rental Services in Utah" className="w-full h-40 sm:h-48 object-cover hover:opacity-90 transition-opacity" fallbackSrc="/images/dumpster5-500x500-1.webp" />
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
              <ImageWithFallback src="/images/dumpsterSmallBanner.jpeg" alt="Roofing Dumpster Rental Services in Utah" className="w-full h-40 sm:h-48 object-cover hover:opacity-90 transition-opacity" fallbackSrc="/images/dumpsterSmallBanner.webp" />
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
              <ImageWithFallback src="/images/dumpsterSmallBanner2.jpeg" alt="Yard Waste Dumpster Rental Services in Utah" className="w-full h-40 sm:h-48 object-cover hover:opacity-90 transition-opacity" fallbackSrc="/images/dumpsterSmallBanner2.webp" />
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
              <ImageWithFallback src="/images/dumpsterSmallBanner3.jpeg" alt="Recyclable Waste Dumpster Rental Services in Utah" className="w-full h-40 sm:h-48 object-cover hover:opacity-90 transition-opacity" fallbackSrc="/images/dumpsterSmallBanner3.webp" />
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

      {/* Popular Dumpster Sizes Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8">
          
          {/* Left Promotional Banner */}
          <div className="bg-[#4e37a8] text-white p-6 sm:p-8 rounded-lg relative overflow-hidden">
            <div className="absolute top-4 left-4 w-12 h-12 sm:w-16 sm:h-16 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                              <ImageWithFallback src="/images/dumpster500x200-1.jpeg" alt="Roll-off Dumpster Truck for Utah Dumpster Rental" className="w-8 h-8 sm:w-12 sm:h-12 object-cover rounded" fallbackSrc="/images/dumpster500x200-1.webp" />
            </div>
            <div className="text-center mt-6 sm:mt-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-1">SEE OUR</h2>
              <h1 className="text-2xl sm:text-3xl font-bold mb-1">MOST</h1>
              <h2 className="text-xl sm:text-2xl font-bold mb-1">POPULAR</h2>
              <h2 className="text-xl sm:text-2xl font-bold mb-1">DUMPSTER</h2>
              <h2 className="text-xl sm:text-2xl font-bold">SIZES</h2>
            </div>
            <div className="absolute bottom-4 right-4 text-2xl sm:text-4xl font-bold">
              &gt;&gt;
            </div>
          </div>

          {/* 15 Yard Dumpster Card */}
          <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">15 YARD ROLL-OFF DUMPSTER</h3>
                            <ImageWithFallback src="/images/dumpster500x200-1.jpeg" alt="15 Yard Roll-off Dumpster for Utah Dumpster Rental" className="w-full h-24 sm:h-32 object-cover rounded mb-4" fallbackSrc="/images/dumpster500x200-1.webp" />
            
            <div className="space-y-3 mb-4">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#4e37a8]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
                <span className="text-xs sm:text-sm text-gray-700">Landfill Fees Included: 1 Ton</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#4e37a8]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                <span className="text-xs sm:text-sm text-gray-700">Rental Duration: 7 Days</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#4e37a8]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
                <span className="text-xs sm:text-sm text-gray-700">Dimensions: 16' L x 7' W x 4' H</span>
              </div>
            </div>
            
            <div className="mb-4">
              <p className="text-xs sm:text-sm text-gray-600">Prices starting at</p>
              <p className="text-2xl sm:text-3xl font-bold text-[#4e37a8]">$175</p>
            </div>
            
            <a href="#quote-form" className="w-full bg-[#4e37a8] text-white py-2 sm:py-3 rounded-lg hover:bg-purple-700 transition-colors font-semibold text-center block text-sm sm:text-base">
              GET QUOTE
            </a>
          </div>

          {/* 20 Yard Dumpster Card */}
          <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">20 YARD ROLL-OFF DUMPSTER</h3>
                            <ImageWithFallback src="/images/dumpster500x200-2.jpeg" alt="20 Yard Roll-off Dumpster for Utah Dumpster Rental" className="w-full h-24 sm:h-32 object-cover rounded mb-4" fallbackSrc="/images/dumpster500x200-2.webp" />
            
            <div className="space-y-3 mb-4">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#4e37a8]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
                <span className="text-xs sm:text-sm text-gray-700">Landfill Fees Included: 2 Tons</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#4e37a8]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                <span className="text-xs sm:text-sm text-gray-700">Rental Duration: 7 Days</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#4e37a8]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
                <span className="text-xs sm:text-sm text-gray-700">Dimensions: 16' L x 7' W x 6' H</span>
              </div>
            </div>
            
            <div className="mb-4">
              <p className="text-xs sm:text-sm text-gray-600">Prices starting at</p>
              <p className="text-2xl sm:text-3xl font-bold text-[#4e37a8]">$200</p>
            </div>
            
            <a href="#quote-form" className="w-full bg-[#4e37a8] text-white py-2 sm:py-3 rounded-lg hover:bg-purple-700 transition-colors font-semibold text-center block text-sm sm:text-base">
              GET QUOTE
            </a>
          </div>

          {/* 30 Yard Dumpster Card */}
          <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">30 YARD ROLL-OFF DUMPSTER</h3>
                            <ImageWithFallback src="/images/dumpster500x200-3.jpeg" alt="30 Yard Roll-off Dumpster for Utah Dumpster Rental" className="w-full h-24 sm:h-32 object-cover rounded mb-4" fallbackSrc="/images/dumpster500x200-3.webp" />
            
            <div className="space-y-3 mb-4">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#4e37a8]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
                <span className="text-xs sm:text-sm text-gray-700">Landfill Fees Included: 3 Tons</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#4e37a8]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                <span className="text-xs sm:text-sm text-gray-700">Rental Duration: 7 Days</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#4e37a8]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
                <span className="text-xs sm:text-sm text-gray-700">Dimensions: 22' L x 7' W x 6' H</span>
              </div>
            </div>
            
            <div className="mb-4">
              <p className="text-xs sm:text-sm text-gray-600">Prices starting at</p>
              <p className="text-2xl sm:text-3xl font-bold text-[#4e37a8]">$225</p>
            </div>
            
            <a href="#quote-form" className="w-full bg-[#4e37a8] text-white py-2 sm:py-3 rounded-lg hover:bg-purple-700 transition-colors font-semibold text-center block text-sm sm:text-base">
              GET QUOTE
            </a>
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
              
              <a href="#quote-form" className="w-full bg-[#4e37a8] text-white py-3 rounded-lg hover:bg-purple-700 transition-colors font-semibold text-center block mt-6">
                Free Quote
              </a>
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
              
              <a href="#quote-form" className="w-full bg-[#4e37a8] text-white py-3 rounded-lg hover:bg-purple-700 transition-colors font-semibold text-center block mt-6">
                Free Quote
              </a>
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
              
              <a href="#quote-form" className="w-full bg-[#4e37a8] text-white py-3 rounded-lg hover:bg-purple-700 transition-colors font-semibold text-center block mt-6">
                Free Quote
              </a>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}

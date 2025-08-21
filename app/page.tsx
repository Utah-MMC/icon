import Image from "next/image";
import ImageWithFallback from "./components/ImageWithFallback";
import QuoteForm from "./components/QuoteForm";
import ReviewsCarousel from "./components/ReviewsCarousel";
import CleanupSection from "./components/CleanupSection";
import TrustSection from "./components/TrustSection";
import QuickQuoteButton from "./components/QuickQuoteButton";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative">
        {/* Background image */}
        <div className="relative h-64 sm:h-80 lg:h-96">
        <ImageWithFallback 
            src="/images/dumpsterSmallBanner5.jpeg" 
          alt="Professional Dumpster Rental Services in Utah - Roll-off Dumpsters for Construction and Waste Management" 
            className="w-full h-full object-cover"
            fallbackSrc="/images/dumpsterSmallBanner5.webp"
          />
        </div>
        
        {/* Hero Content - Now below the image */}
        <div className="bg-gradient-to-r from-[#4e37a8] to-purple-700 text-white py-8 sm:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Professional Dumpster Rental Services in Salt Lake County</h1>
              <a href="#quote-form" className="bg-white text-[#4e37a8] px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-gray-100 transition-colors font-medium text-base sm:text-lg inline-block">
            Get A Quote
          </a>
        </div>
      </div>
        </div>
      </div>



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

                <a href="#quote-form" className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg hover:from-purple-600 hover:to-blue-500 transition-all duration-300 font-semibold text-center block transform hover:scale-105">
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
                
                <a href="#quote-form" className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white py-3 px-6 rounded-lg hover:from-blue-600 hover:to-green-500 transition-all duration-300 font-semibold text-center block transform hover:scale-105">
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
                
                <a href="#quote-form" className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-3 px-6 rounded-lg hover:from-pink-600 hover:to-purple-500 transition-all duration-300 font-semibold text-center block transform hover:scale-105">
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">24hr</div>
              <div className="text-gray-600">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">15-30</div>
              <div className="text-gray-600">Yard Dumpsters</div>
                    </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">7 Days</div>
              <div className="text-gray-600">Service Available</div>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Get your instant quote today and experience the difference
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#quote-form" className="bg-gradient-to-r from-[#4e37a8] to-purple-600 text-white px-8 py-4 rounded-lg hover:from-purple-600 hover:to-[#4e37a8] transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Get Free Quote
              </a>
              <a href="tel:801-918-6000" className="border-2 border-[#4e37a8] text-[#4e37a8] px-8 py-4 rounded-lg hover:bg-[#4e37a8] hover:text-white transition-all duration-300 font-semibold text-lg">
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

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
    </div>
  );
}

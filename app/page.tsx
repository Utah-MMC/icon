import Image from "next/image";
import ImageWithFallback from "./components/ImageWithFallback";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-600 to-purple-700 h-64 sm:h-80 lg:h-96 flex items-center justify-center">
        {/* Background image */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <ImageWithFallback 
          src="/images/dumpsterSmallBanner3.jpeg" 
          alt="Dumpster Rental Services" 
          className="absolute inset-0 w-full h-full object-cover"
          fallbackSrc="/images/dumpsterSmallBanner3.webp"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black bg-opacity-20"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Professional Waste Solutions</h1>
          <a href="#quote-form" className="bg-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-purple-700 transition-colors font-medium text-base sm:text-lg inline-block">
            Get A Quote
          </a>
        </div>
      </div>



      {/* Main Content Area - Two Column Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Left Column - Information */}
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold">
              <span className="text-gray-800">Dumpster Rental</span>{" "}
              <span className="text-purple-600">Service</span>
            </h2>
            
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Looking for reliable dumpster rental services? We provide comprehensive waste management solutions 
              for all your needs. Whether you're renovating your home, cleaning up after a construction project, 
              or need regular waste disposal, our team is here to help.
            </p>
            
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              <strong>Icon Dumpsters</strong> is a professional waste management company serving local communities. We offer 
              instant estimates and handle various types of waste including household, construction, yard, 
              recyclable, and concrete waste. Our dumpster sizes range from 15 to 30 yards to accommodate 
              any project size. Call us today at <strong>(801) 918-6000</strong> for a free quote and 
              professional service you can trust.
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
                  <ImageWithFallback src="/images/dumpsters.jpeg" alt="15 Yard Dumpster" className="w-full h-20 object-cover object-left rounded mb-2" fallbackSrc="/images/dumpsters.webp" />
                  <h4 className="font-semibold text-gray-800 text-sm sm:text-base">15 Yard Dumpster</h4>
                  <p className="text-xs sm:text-sm text-gray-600">Perfect for small projects</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ImageWithFallback src="/images/dumpster500x500-1.jpeg" alt="20 Yard Dumpster" className="w-full h-20 object-cover rounded mb-2" fallbackSrc="/images/dumpster500x500-1.webp" />
                  <h4 className="font-semibold text-gray-800 text-sm sm:text-base">20 Yard Dumpster</h4>
                  <p className="text-xs sm:text-sm text-gray-600">Ideal for medium projects</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ImageWithFallback src="/images/dumpster5-500x500-1.jpeg" alt="30 Yard Dumpster" className="w-full h-20 object-cover rounded mb-2" fallbackSrc="/images/dumpster5-500x500-1.webp" />
                  <h4 className="font-semibold text-gray-800 text-sm sm:text-base">30 Yard Dumpster</h4>
                  <p className="text-xs sm:text-sm text-gray-600">Great for large projects</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Quote Form */}
          <div id="quote-form" className="bg-gray-800 text-white p-6 sm:p-8 rounded-lg">
            <h3 className="text-xl sm:text-2xl font-bold text-purple-400 mb-6">Get a Free Quote</h3>
            
            <form action="https://formspree.io/f/xanblnyj" method="POST" className="space-y-4 sm:space-y-6" onSubmit={(e) => {
              const form = e.currentTarget;
              const submitButton = form.querySelector('button[type="submit"]') as HTMLButtonElement;
              if (submitButton) {
                submitButton.disabled = true;
                submitButton.textContent = 'Submitting...';
              }
            }}>
              {/* Name Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <input 
                    type="text" 
                    name="firstName"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-purple-500 text-white text-sm sm:text-base"
                    placeholder="First Name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <input 
                    type="text" 
                    name="lastName"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-purple-500 text-white text-sm sm:text-base"
                    placeholder="Last Name"
                    required
                  />
                </div>
              </div>
              
              {/* Contact Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-purple-500 text-white text-sm sm:text-base"
                    placeholder="Email"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <input 
                    type="tel" 
                    name="phone"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-purple-500 text-white text-sm sm:text-base"
                    placeholder="Phone"
                    required
                  />
                </div>
              </div>
              
              {/* Location and Waste Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Zip</label>
                  <input 
                    type="text" 
                    name="zipCode"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-purple-500 text-white text-sm sm:text-base"
                    placeholder="Zip Code"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Waste Type</label>
                  <select name="wasteType" className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-purple-500 text-white text-sm sm:text-base" required>
                    <option value="">Select Waste Type</option>
                    <option value="Household Waste">Household Waste</option>
                    <option value="Construction Debris">Construction Debris</option>
                    <option value="Yard Waste">Yard Waste</option>
                    <option value="Recyclable Materials">Recyclable Materials</option>
                    <option value="Concrete">Concrete</option>
                  </select>
                </div>
              </div>
              
              {/* Dumpster Size Selection */}
              <div>
                <label className="block text-sm font-medium mb-3">Dumpster Size</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input type="radio" name="dumpsterSize" value="15" className="text-purple-500 focus:ring-purple-500" required />
                    <span className="text-xs sm:text-sm">15 Yard Dumpster</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input type="radio" name="dumpsterSize" value="20" className="text-purple-500 focus:ring-purple-500" required />
                    <span className="text-xs sm:text-sm">20 Yard Dumpster</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input type="radio" name="dumpsterSize" value="30" className="text-purple-500 focus:ring-purple-500" required />
                    <span className="text-xs sm:text-sm">30 Yard Dumpster</span>
                  </label>
                </div>
              </div>
              
              {/* Date Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Delivery Date</label>
                  <div className="relative">
                    <input 
                      type="date" 
                      name="deliveryDate"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-purple-500 text-white text-sm sm:text-base"
                      required
                    />
                    <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Pickup Date</label>
                  <div className="relative">
                    <input 
                      type="date" 
                      name="pickupDate"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-purple-500 text-white text-sm sm:text-base"
                      required
                    />
                    <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Submit Button */}
              <button 
                type="submit" 
                className="w-full bg-purple-600 text-white py-3 sm:py-4 rounded-lg hover:bg-purple-700 transition-colors font-medium text-base sm:text-lg"
              >
                Send Quote Request
              </button>
            </form>
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
                            <ImageWithFallback src="/images/dumpsters.jpeg" alt="General Residential Waste" className="w-full h-40 sm:h-48 object-cover" fallbackSrc="/images/dumpsters.webp" />
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-[#4e37a8] mb-3">General Residential Waste</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4">Rent a dumpster to remove residential household wastes during cleanouts, moves, or renovations.</p>
              <a href="#quote-form" className="text-[#4e37a8] font-semibold hover:text-purple-700 transition-colors text-sm sm:text-base">
                Read More →
              </a>
            </div>
          </div>

          {/* Construction Waste */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                            <ImageWithFallback src="/images/dumpster500x500-1.jpeg" alt="Construction Waste Dumpster" className="w-full h-40 sm:h-48 object-cover" fallbackSrc="/images/dumpster500x500-1.webp" />
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-[#4e37a8] mb-3">Construction Waste Dumpster</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4">Rent a dumpster to remove construction debris, drywall, lumber, and building materials.</p>
              <a href="#quote-form" className="text-[#4e37a8] font-semibold hover:text-purple-700 transition-colors text-sm sm:text-base">
                Read More →
              </a>
            </div>
          </div>

          {/* Concrete Waste */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                            <ImageWithFallback src="/images/dumpster5-500x500-1.jpeg" alt="Concrete Waste Dumpster" className="w-full h-40 sm:h-48 object-cover" fallbackSrc="/images/dumpster5-500x500-1.webp" />
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-[#4e37a8] mb-3">Concrete Waste Dumpster</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4">Rent a dumpster to remove concrete, asphalt, bricks, and other heavy construction materials.</p>
              <a href="#quote-form" className="text-[#4e37a8] font-semibold hover:text-purple-700 transition-colors text-sm sm:text-base">
                Read More →
              </a>
            </div>
          </div>

          {/* Roofing Waste */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                            <ImageWithFallback src="/images/dumpsterSmallBanner.jpeg" alt="Roofing Waste Removal" className="w-full h-40 sm:h-48 object-cover" fallbackSrc="/images/dumpsterSmallBanner.webp" />
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-[#4e37a8] mb-3">Roofing Waste Removal</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4">Rent a dumpster for roofing shingles, underlayment, and other roofing materials.</p>
              <a href="#quote-form" className="text-[#4e37a8] font-semibold hover:text-purple-700 transition-colors text-sm sm:text-base">
                Read More →
              </a>
            </div>
          </div>

          {/* Yard Waste */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                            <ImageWithFallback src="/images/dumpsterSmallBanner2.jpeg" alt="Green Yard Waste Removal" className="w-full h-40 sm:h-48 object-cover" fallbackSrc="/images/dumpsterSmallBanner2.webp" />
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-[#4e37a8] mb-3">Green Yard Waste Removal</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4">Rent a dumpster to remove yard waste, branches, leaves, and landscaping debris.</p>
              <a href="#quote-form" className="text-[#4e37a8] font-semibold hover:text-purple-700 transition-colors text-sm sm:text-base">
                Read More →
              </a>
            </div>
          </div>

          {/* Recyclable Waste */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                            <ImageWithFallback src="/images/dumpsterSmallBanner3.jpeg" alt="Recyclable Waste Removal" className="w-full h-40 sm:h-48 object-cover" fallbackSrc="/images/dumpsterSmallBanner3.webp" />
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-[#4e37a8] mb-3">Recyclable Waste Removal</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4">Rent a dumpster to remove recyclable materials, cardboard, paper, and plastic waste.</p>
              <a href="#quote-form" className="text-[#4e37a8] font-semibold hover:text-purple-700 transition-colors text-sm sm:text-base">
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
                              <ImageWithFallback src="/images/dumpster500x200-1.jpeg" alt="Dumpster Truck" className="w-8 h-8 sm:w-12 sm:h-12 object-cover rounded" fallbackSrc="/images/dumpster500x200-1.webp" />
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
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">15 YARD DUMPSTER</h3>
                            <ImageWithFallback src="/images/dumpster500x200-1.jpeg" alt="15 Yard Dumpster" className="w-full h-24 sm:h-32 object-cover rounded mb-4" fallbackSrc="/images/dumpster500x200-1.webp" />
            
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
            
            <a href="#quote-form" className="w-full bg-orange-500 text-white py-2 sm:py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold text-center block text-sm sm:text-base">
              BOOK ONLINE
            </a>
          </div>

          {/* 20 Yard Dumpster Card */}
          <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">20 YARD DUMPSTER</h3>
                            <ImageWithFallback src="/images/dumpster500x200-2.jpeg" alt="20 Yard Dumpster" className="w-full h-24 sm:h-32 object-cover rounded mb-4" fallbackSrc="/images/dumpster500x200-2.webp" />
            
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
            
            <a href="#quote-form" className="w-full bg-orange-500 text-white py-2 sm:py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold text-center block text-sm sm:text-base">
              BOOK ONLINE
            </a>
          </div>

          {/* 30 Yard Dumpster Card */}
          <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">30 YARD DUMPSTER</h3>
                            <ImageWithFallback src="/images/dumpster500x200-3.jpeg" alt="30 Yard Dumpster" className="w-full h-24 sm:h-32 object-cover rounded mb-4" fallbackSrc="/images/dumpster500x200-3.webp" />
            
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
            
            <a href="#quote-form" className="w-full bg-orange-500 text-white py-2 sm:py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold text-center block text-sm sm:text-base">
              BOOK ONLINE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

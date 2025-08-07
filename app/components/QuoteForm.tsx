'use client';

export default function QuoteForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    const submitButton = form.querySelector('button[type="submit"]') as HTMLButtonElement;
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = 'Submitting...';
    }
  };

  return (
    <div id="quote-form" className="bg-gray-800 text-white p-6 sm:p-8 rounded-lg">
      <h3 className="text-xl sm:text-2xl font-bold text-[#4e37a8] mb-6">Get a Free Quote</h3>
      
      <form action="https://formspree.io/f/xanblnyj" method="POST" className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
        {/* Name Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">First Name</label>
            <input 
              type="text" 
              name="firstName"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-[#4e37a8] text-white text-sm sm:text-base"
              placeholder="First Name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Last Name</label>
            <input 
              type="text" 
              name="lastName"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-[#4e37a8] text-white text-sm sm:text-base"
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
              className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-[#4e37a8] text-white text-sm sm:text-base"
              placeholder="Email"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Phone</label>
            <input 
              type="tel" 
              name="phone"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-[#4e37a8] text-white text-sm sm:text-base"
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
              className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-[#4e37a8] text-white text-sm sm:text-base"
              placeholder="Zip Code"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Waste Type</label>
            <select name="wasteType" className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-[#4e37a8] text-white text-sm sm:text-base" required>
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
              <input type="radio" name="dumpsterSize" value="15" className="text-[#4e37a8] focus:ring-[#4e37a8]" required />
              <span className="text-xs sm:text-sm">15 Yard Dumpster</span>
            </label>
            <label className="flex items-center space-x-3 cursor-pointer">
              <input type="radio" name="dumpsterSize" value="20" className="text-[#4e37a8] focus:ring-[#4e37a8]" required />
              <span className="text-xs sm:text-sm">20 Yard Dumpster</span>
            </label>
            <label className="flex items-center space-x-3 cursor-pointer">
              <input type="radio" name="dumpsterSize" value="30" className="text-[#4e37a8] focus:ring-[#4e37a8]" required />
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
                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-[#4e37a8] text-white text-sm sm:text-base"
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
                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-[#4e37a8] text-white text-sm sm:text-base"
                required
              />
              <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Additional Information */}
        <div>
          <label className="block text-sm font-medium mb-2">Additional Information</label>
          <textarea 
            name="additionalInfo"
            rows={4}
            className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-[#4e37a8] text-white text-sm sm:text-base resize-none"
            placeholder="Tell us about your project, special requirements, or any questions you have..."
          ></textarea>
        </div>
        
        {/* Submit Button */}
        <button 
          type="submit" 
          className="w-full bg-[#4e37a8] text-white py-3 sm:py-4 rounded-lg hover:bg-purple-700 transition-colors font-semibold text-base sm:text-lg"
        >
          Get Free Quote
        </button>
      </form>
    </div>
  );
}

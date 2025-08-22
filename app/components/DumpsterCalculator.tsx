"use client";

import React, { useState } from 'react';

export default function DumpsterCalculator() {
  const [zipCode, setZipCode] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedDuration, setSelectedDuration] = useState('');
  const [isVeteran, setIsVeteran] = useState(false);
  const [result, setResult] = useState('');

  const handleCalculate = () => {
    if (!zipCode || !selectedSize || !selectedDuration) {
      alert('Please fill in all required fields');
      return;
    }

    // Simple pricing calculation
    const basePrices = {
      '10': 250,
      '15': 350,
      '20': 375,
      '30': 450,
      '40': 525
    };

    const basePrice = basePrices[selectedSize as keyof typeof basePrices] || 350;
    const days = parseInt(selectedDuration);
    const isThirtyDay = days === 30;
    let totalEstimate = basePrice;

    if (isThirtyDay) {
      const thirtyDayPrices = {
        '15': 500,
        '20': 525,
        '30': 600
      };
      totalEstimate = thirtyDayPrices[selectedSize as keyof typeof thirtyDayPrices] || 500;
    } else if (days === 1) {
      totalEstimate = basePrice * 0.7; // 30% discount for 1-day
    } else if (days <= 7) {
      totalEstimate = basePrice;
    } else {
      const extraDays = days - 7;
      const dailyRate = Math.ceil(basePrice / 7);
      totalEstimate = basePrice + (extraDays * dailyRate);
    }

    const veteranDiscount = isVeteran ? totalEstimate * 0.10 : 0;
    const finalPrice = totalEstimate - veteranDiscount;

    // Create result HTML using string concatenation
    let html = '<div class="bg-gradient-to-br from-purple-50 to-[#4e37a8]/10 p-6 rounded-lg border-2 border-[#4e37a8]/20 shadow-md">';
    html += '<h4 class="text-lg font-bold text-[#4e37a8] mb-3">💰 Estimated Cost</h4>';
    html += '<div class="text-3xl font-bold text-[#4e37a8] mb-2">$' + finalPrice.toLocaleString() + '</div>';
    html += '<p class="text-gray-600 mb-3">For ' + selectedSize + '-yard dumpster, ' + selectedDuration + ' day' + (selectedDuration === '1' ? '' : 's') + ' in ' + zipCode + '</p>';
    
    html += '<div class="text-sm text-gray-600 space-y-1">';
    if (selectedDuration === '1') {
      html += '<div>1-day special rate: $' + (basePrice * 0.7).toLocaleString() + '</div>';
    } else {
      html += '<div class="font-semibold text-[#4e37a8]">📦 ' + selectedDuration + ' Day Bundle Breakdown:</div>';
      html += '<div class="ml-4 space-y-1">';
      if (isThirtyDay) {
        // 30-day special pricing breakdown: show special rate only
        html += '<div>• 30-Day Special Rate: $' + totalEstimate.toLocaleString() + '</div>';
      } else {
        html += '<div>• Base Price: $' + basePrice.toLocaleString() + '</div>';
        if (days > 7) {
          const extraDays = days - 7;
          const dailyRate = Math.ceil(basePrice / 7);
          html += '<div>• Additional Days (' + extraDays + ' × $' + dailyRate + '): $' + (extraDays * dailyRate).toLocaleString() + '</div>';
        }
      }
      html += '<div class="font-semibold text-[#4e37a8] border-t pt-1 mt-2">Total Cost: $' + totalEstimate.toLocaleString() + '</div>';
      html += '</div>';
    }
    
    if (isVeteran) {
      html += '<div class="text-[#4e37a8] font-semibold">Veteran discount (10%): -$' + veteranDiscount.toLocaleString() + '</div>';
    }
    
    html += '</div>';
    
    if (isVeteran) {
      html += '<div class="mt-3 p-3 bg-purple-50 rounded-lg border border-[#4e37a8]/20">';
      html += '<p class="text-sm text-[#4e37a8]">';
      html += '<strong>Thank you for your service!</strong> We\'re proud to offer a 10% discount to veterans.';
      html += '</p>';
      html += '</div>';
    }
    
    html += '<div class="mt-4 p-3 bg-purple-50 rounded-lg">';
    html += '<p class="text-sm text-[#4e37a8]">';
    html += '<strong>Note:</strong> This is an estimate. Final price may vary based on location, weight, and specific requirements.';
    html += '</p>';
    html += '</div>';
    
    html += '<div class="mt-3 p-3 bg-purple-50 rounded-lg border border-[#4e37a8]/20">';
    html += '<p class="text-sm text-[#4e37a8]">';
    html += '<strong>⚖️ Tonnage billed separately after service is weighed at $55.00 per ton.</strong> This estimate does not include weight charges.';
    html += '</p>';
    html += '</div>';
    
    html += '<div class="mt-3 p-3 bg-purple-50 rounded-lg border border-[#4e37a8]/20">';
    html += '<p class="text-sm text-[#4e37a8]">';
    html += '<strong>⚠️ Additional Charges:</strong> $25 per item for refrigerators, freezers, drinking water coolers, air conditioning units (must drain freon), mattresses/box springs, or tires.';
    html += '</p>';
    html += '</div>';
    
    html += '<div class="mt-4">';
    html += '<a href="#quote-form" class="bg-[#4e37a8] text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors inline-block">';
    html += 'Get Exact Quote';
    html += '</a>';
    html += '</div>';
    
    html += '</div>';
    
    setResult(html);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div className="text-center mb-4">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#4e37a8] to-purple-600 rounded-full mb-3">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Advanced Dumpster Rental Cost Calculator</h2>
        <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
          Get an instant price estimate for your dumpster rental. Our advanced calculator includes special rates, veteran discounts, and accurate gas pricing.
        </p>
      </div>
      
      <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6">
            {/* Zip Code Input */}
        <div className="max-w-md mx-auto mb-6">
              <label htmlFor="zipCode" className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                <span className="w-2 h-2 bg-[#4e37a8] rounded-full mr-2"></span>
                📍 Zip Code
              </label>
              <input
                type="text"
                id="zipCode"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
                placeholder="Enter zip code"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#4e37a8] focus:border-transparent transition-all duration-300 shadow-sm"
                maxLength={5}
              />
              <p className="text-xs text-gray-500 mt-2">Multiple hubs serving Utah - calculator finds closest location</p>
            </div>
            
        {/* Specialized Dumpsters Section */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
            <h3 className="text-lg font-semibold text-gray-900">Specialized Dumpsters</h3>
                      </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* 10 Yard Dirt */}
            <div className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 overflow-hidden">
              <div className="h-32 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                            </svg>
                          </div>
                        </div>
              <div className="p-4">
                <h4 className="text-lg font-bold text-gray-900 mb-2">10 Yard Dirt</h4>
                <p className="text-sm text-gray-600 mb-3">Perfect for dirt & soil projects</p>
                <div className="flex items-center justify-between">
                  <button className="bg-orange-500 text-white px-3 py-1 rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors">
                    Clean Dirt Only
                  </button>
                  <button className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                  </button>
                          </div>
                        </div>
            </div>

            {/* 10 Yard Mixed */}
            <div className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 overflow-hidden">
              <div className="h-32 bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                      </div>
                    </div>
              <div className="p-4">
                <h4 className="text-lg font-bold text-gray-900 mb-2">10 Yard Mixed</h4>

                <div className="flex items-center justify-between">
                  <button className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm font-medium hover:bg-red-600 transition-colors">
                    Mixed Load
                  </button>
                  <button className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                  </button>
                </div>
                </div>
              </div>
              
            {/* 12 Yard Concrete */}
            <div className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 overflow-hidden">
              <div className="h-32 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                            </svg>
                          </div>
                        </div>
              <div className="p-4">
                <h4 className="text-lg font-bold text-gray-900 mb-2">12 Yard Concrete</h4>
                <p className="text-sm text-gray-600 mb-3">Perfect for concrete projects</p>
                <div className="flex items-center justify-between">
                  <button className="bg-gray-600 text-white px-3 py-1 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors">
                    Heavy Duty
                  </button>
                  <button className="w-8 h-8 bg-gray-600 text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                  </button>
                </div>
                          </div>
                        </div>
                      </div>
                    </div>
        
        {/* Dumpster Size Selection */}
        <div className="mb-8">
          <div className="flex items-center mb-6">
            <div className="w-2 h-2 bg-[#4e37a8] rounded-full mr-3"></div>
            <h3 className="text-xl font-bold text-gray-900">📦 Choose Your Dumpster Size</h3>
          </div>
          
          {/* Standard Dumpsters */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-700 mb-4 text-center">Standard Dumpsters</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { size: '15', color: 'blue', bgGradient: 'from-blue-100 to-blue-200', iconBg: 'bg-blue-500', description: 'Medium renovations' },
                { size: '20', color: 'green', bgGradient: 'from-green-100 to-green-200', iconBg: 'bg-green-500', description: 'Large home projects' },
                { size: '30', color: 'purple', bgGradient: 'from-purple-100 to-purple-200', iconBg: 'bg-purple-500', description: 'Major renovations' }
              ].map((option) => (
                <label
                  key={option.size}
                  className={`group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 overflow-hidden cursor-pointer ${
                    selectedSize === option.size ? `border-[#4e37a8] bg-gradient-to-br ${option.bgGradient} shadow-xl` : 'border-gray-200 hover:border-purple-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="dumpsterSize"
                    value={option.size}
                    checked={selectedSize === option.size}
                    onChange={(e) => setSelectedSize(e.target.value)}
                    className="sr-only"
                  />
                  <div className="p-4 text-center">
                    <div className={`w-12 h-12 ${option.iconBg} rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-white font-bold text-lg">{option.size}</span>
                    </div>
                    <div className="text-xl font-bold text-gray-900 mb-2">{option.size} Yard</div>
                    <div className="text-xs text-gray-600 leading-relaxed">
                      {option.description}
                </div>
              </div>
                </label>
              ))}
            </div>
            </div>
          </div>
          
        {/* Duration Selection */}
        <div className="mb-8">
          <div className="flex items-center mb-6">
            <div className="w-2 h-2 bg-[#4e37a8] rounded-full mr-3"></div>
            <h3 className="text-xl font-bold text-gray-900">⏱️ Select Rental Duration</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { duration: '1', color: 'orange', bgGradient: 'from-orange-100 to-orange-200', iconBg: 'bg-orange-500', description: 'Same day pickup' },
              { duration: '3', color: 'yellow', bgGradient: 'from-yellow-100 to-yellow-200', iconBg: 'bg-yellow-500', description: 'Short term rental' },
              { duration: '7', color: 'blue', bgGradient: 'from-blue-100 to-blue-200', iconBg: 'bg-blue-500', description: 'Standard rental' },
              { duration: '14', color: 'green', bgGradient: 'from-green-100 to-green-200', iconBg: 'bg-green-500', description: 'Extended rental' },
              { duration: '30', color: 'purple', bgGradient: 'from-purple-100 to-purple-200', iconBg: 'bg-purple-500', description: 'Long term rental' }
            ].map((option) => (
              <label
                key={option.duration}
                className={`group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 overflow-hidden cursor-pointer ${
                  selectedDuration === option.duration ? `border-[#4e37a8] bg-gradient-to-br ${option.bgGradient} shadow-xl` : 'border-gray-200 hover:border-purple-300'
                }`}
              >
                <input
                  type="radio"
                  name="duration"
                  value={option.duration}
                  checked={selectedDuration === option.duration}
                  onChange={(e) => setSelectedDuration(e.target.value)}
                  className="sr-only"
                />
                <div className="p-4 text-center">
                  <div className={`w-12 h-12 ${option.iconBg} rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="text-xl font-bold text-gray-900 mb-2">{option.duration} Day{option.duration === '1' ? '' : 's'}</div>
                  <div className="text-xs text-gray-600 leading-relaxed">
                    {option.description}
                  </div>
                </div>
              </label>
            ))}
          </div>
            </div>
            
        {/* Veteran Discount */}
        <div className="mb-6">
          <div className="flex items-start">
                <input
                  type="checkbox"
                  id="veteranDiscount"
              checked={isVeteran}
              onChange={(e) => setIsVeteran(e.target.checked)}
                  className="w-5 h-5 text-[#4e37a8] border-gray-300 rounded focus:ring-[#4e37a8] focus:ring-2"
                />
            <label htmlFor="veteranDiscount" className="text-sm font-semibold text-gray-700 flex items-center ml-3">
                  <svg className="w-4 h-4 text-[#4e37a8] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Veteran Discount (10%)
                </label>
              </div>
              <p className="text-xs text-gray-600 mt-2 ml-8">
                We proudly support our veterans with special pricing on all dumpster rentals.
              </p>
          </div>
          
          {/* Calculate Button */}
        <div className="text-center mb-6">
            <button
              className="bg-gradient-to-r from-[#4e37a8] to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-purple-600 hover:to-[#4e37a8] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg"
              onClick={handleCalculate}
            >
              <svg className="w-5 h-5 inline mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Calculate Estimate
            </button>
          </div>
          
          {/* Results Section */}
        {result && (
          <div 
            className="mt-8"
            dangerouslySetInnerHTML={{ __html: result }}
          />
        )}
          
          {/* How It Works Section */}
        <div className="bg-gradient-to-br from-purple-50 to-[#4e37a8]/10 rounded-xl border border-[#4e37a8]/20 p-4 mt-6">
          <h4 className="font-bold text-[#4e37a8] mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              💡 How the Advanced Calculator Works
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="text-sm text-[#4e37a8] space-y-2">
                <li className="flex items-start">
                <span className="w-2 h-2 bg-[#4e37a8] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Multiple Hubs:</strong> We have 3 locations serving Utah - calculator automatically finds the closest</span>
                </li>
                <li className="flex items-start">
                <span className="w-2 h-2 bg-[#4e37a8] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>1-Day Special:</strong> Discounted rates for same-day pickup projects</span>
                </li>
                <li className="flex items-start">
                <span className="w-2 h-2 bg-[#4e37a8] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>3-7 Day Bundles:</strong> Bundle pricing includes rental, pickup, and dropoff fees with daily rate breakdown</span>
                </li>
            </ul>
            <ul className="text-sm text-[#4e37a8] space-y-2">
                <li className="flex items-start">
                <span className="w-2 h-2 bg-[#4e37a8] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Extended Rentals:</strong> Additional days beyond 7 are charged at daily rates</span>
                </li>
                <li className="flex items-start">
                <span className="w-2 h-2 bg-[#4e37a8] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Veteran Discount:</strong> 10% off for all veterans (thank you for your service!)</span>
                </li>
                <li className="flex items-start">
                <span className="w-2 h-2 bg-[#4e37a8] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Weight-Based Pricing:</strong> $55 per ton charged after disposal facility weighing</span>
                </li>
              </ul>
            </div>
          </div>

        {/* View All Sizes Button */}
        <div className="text-center mt-8">
          <button className="bg-[#4e37a8] text-white px-8 py-3 rounded-xl font-semibold hover:bg-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 inline-flex items-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            View All Sizes & Pricing
          </button>
        </div>
      </div>
    </div>
  );
}

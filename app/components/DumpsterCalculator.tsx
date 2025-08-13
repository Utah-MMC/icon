"use client";

export default function DumpsterCalculator() {
  const handleCalculate = () => {
    const zipCode = (document.getElementById('zipCode') as HTMLInputElement)?.value;
    const size = (document.getElementById('dumpsterSize') as HTMLSelectElement)?.value;
    const duration = (document.getElementById('duration') as HTMLSelectElement)?.value;
    
    if (!zipCode || !size || !duration) {
      alert('Please fill in all fields to get an estimate.');
      return;
    }
    
         // Calculate estimated price based on inputs
     const basePrices = {
       '15': 300,
       '20': 350,
       '30': 450
     };
     
     const dailyRates = {
       '15': 30,
       '20': 35,
       '30': 40
     };
    
    const basePrice = basePrices[size as keyof typeof basePrices];
    const dailyRate = dailyRates[size as keyof typeof dailyRates];
    const extraDays = Math.max(0, parseInt(duration) - 7);
    const extraCost = extraDays * dailyRate;
    const totalEstimate = basePrice + extraCost;
    
    // Display result
    const resultDiv = document.getElementById('calculatorResult');
    if (resultDiv) {
      resultDiv.innerHTML = `
        <div class="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-lg border-2 border-green-200 shadow-md">
          <h4 class="text-lg font-bold text-green-800 mb-3">💰 Estimated Cost</h4>
          <div class="text-3xl font-bold text-green-600 mb-2">$${totalEstimate.toLocaleString()}</div>
          <p class="text-gray-600 mb-3">For ${size}-yard dumpster, ${duration} days in ${zipCode}</p>
          <div class="text-sm text-gray-500 space-y-1">
            <div>Base price (7 days): $${basePrice.toLocaleString()}</div>
            ${extraDays > 0 ? `<div>Additional days (${extraDays} × $${dailyRate}): $${extraCost.toLocaleString()}</div>` : ''}
          </div>
          <div class="mt-4 p-3 bg-blue-50 rounded-lg">
            <p class="text-sm text-blue-800">
              <strong>Note:</strong> This is an estimate. Final price may vary based on location, weight, and specific requirements.
            </p>
          </div>
          <div class="mt-4">
            <a href="#quote-form" class="bg-[#4e37a8] text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors inline-block">
              Get Exact Quote
            </a>
          </div>
        </div>
      `;
      resultDiv.classList.remove('hidden');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#4e37a8] mb-4">Dumpster Rental Cost Calculator</h2>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
          Get an instant price estimate for your dumpster rental. Enter your details below to see estimated costs.
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-6">
            <div>
              <label htmlFor="zipCode" className="block text-sm font-semibold text-gray-700 mb-2">
                📍 Zip Code
              </label>
              <input
                type="text"
                id="zipCode"
                placeholder="Enter zip code"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4e37a8] focus:border-transparent transition-colors"
                maxLength={5}
              />
            </div>
            
            <div>
              <label htmlFor="dumpsterSize" className="block text-sm font-semibold text-gray-700 mb-2">
                📦 Dumpster Size
              </label>
                             <select
                 id="dumpsterSize"
                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4e37a8] focus:border-transparent transition-colors"
               >
                 <option value="">Select size</option>
                 <option value="15">15 Yard</option>
                 <option value="20">20 Yard</option>
                 <option value="30">30 Yard</option>
               </select>
            </div>
            
            <div>
              <label htmlFor="duration" className="block text-sm font-semibold text-gray-700 mb-2">
                ⏰ Duration (Days)
              </label>
              <select
                id="duration"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4e37a8] focus:border-transparent transition-colors"
              >
                <option value="">Select duration</option>
                <option value="3">3 Days</option>
                <option value="7">7 Days</option>
                <option value="10">10 Days</option>
                <option value="14">14 Days</option>
                <option value="30">30 Days</option>
              </select>
            </div>
          </div>
          
          <div className="text-center mb-6">
            <button
              className="bg-gradient-to-r from-[#4e37a8] to-purple-700 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-[#4e37a8] transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
              onClick={handleCalculate}
            >
              Calculate Estimate
            </button>
          </div>
          
          <div id="calculatorResult" className="hidden"></div>
          
          <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <h4 className="font-semibold text-yellow-800 mb-2">💡 How the Calculator Works</h4>
            <ul className="text-sm text-yellow-700 space-y-1">
              <li>• Base prices include delivery, pickup, and disposal for 7 days</li>
              <li>• Additional days are charged at daily rates</li>
              <li>• Prices vary by location and availability</li>
              <li>• Weight limits and prohibited items may affect final cost</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

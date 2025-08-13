"use client";

export default function DumpsterCalculator() {
  // Hub location coordinates (1515 Beck St, Salt Lake City, UT 84116)
  const HUB_LOCATION = {
    lat: 40.7589,
    lng: -111.8911,
    address: "1515 Beck St, Salt Lake City, UT 84116"
  };

  // Gas pricing constants
  const DIESEL_PRICE_PER_GALLON = 3.779;
  const MILES_PER_GALLON = 8; // Average diesel truck MPG
  const FREE_DELIVERY_RADIUS = 10; // miles

  // Function to calculate distance between two coordinates using Haversine formula
  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
    const R = 3959; // Earth's radius in miles
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  };

  // Function to get coordinates from zip code using a simple mapping
  const getCoordinatesFromZip = (zipCode: string): { lat: number, lng: number } | null => {
    // This is a simplified mapping - in production, you'd use a proper geocoding service
    const zipCoordinates: { [key: string]: { lat: number, lng: number } } = {
      // Salt Lake City area zip codes
      '84101': { lat: 40.7608, lng: -111.8910 },
      '84102': { lat: 40.7589, lng: -111.8911 },
      '84103': { lat: 40.7612, lng: -111.8765 },
      '84104': { lat: 40.7456, lng: -111.8910 },
      '84105': { lat: 40.7456, lng: -111.8765 },
      '84106': { lat: 40.7300, lng: -111.8910 },
      '84107': { lat: 40.7300, lng: -111.8765 },
      '84108': { lat: 40.7150, lng: -111.8910 },
      '84109': { lat: 40.7150, lng: -111.8765 },
      '84111': { lat: 40.7608, lng: -111.9055 },
      '84112': { lat: 40.7456, lng: -111.9055 },
      '84113': { lat: 40.7300, lng: -111.9055 },
      '84114': { lat: 40.7150, lng: -111.9055 },
      '84115': { lat: 40.7000, lng: -111.8910 },
      '84116': { lat: 40.7589, lng: -111.8911 }, // Hub location
      '84117': { lat: 40.7456, lng: -111.8615 },
      '84118': { lat: 40.7300, lng: -111.8615 },
      '84119': { lat: 40.7150, lng: -111.8615 },
      '84120': { lat: 40.7000, lng: -111.8765 },
      '84121': { lat: 40.6850, lng: -111.8910 },
      '84122': { lat: 40.6850, lng: -111.8765 },
      '84123': { lat: 40.6700, lng: -111.8910 },
      '84124': { lat: 40.6700, lng: -111.8765 },
      '84125': { lat: 40.6550, lng: -111.8910 },
      '84126': { lat: 40.6550, lng: -111.8765 },
      '84127': { lat: 40.6400, lng: -111.8910 },
      '84128': { lat: 40.6400, lng: -111.8765 },
      '84129': { lat: 40.6250, lng: -111.8910 },
      '84130': { lat: 40.6250, lng: -111.8765 },
      '84131': { lat: 40.6100, lng: -111.8910 },
      '84132': { lat: 40.6100, lng: -111.8765 },
      '84133': { lat: 40.5950, lng: -111.8910 },
      '84134': { lat: 40.5950, lng: -111.8765 },
      '84135': { lat: 40.5800, lng: -111.8910 },
      '84136': { lat: 40.5800, lng: -111.8765 },
      '84137': { lat: 40.5650, lng: -111.8910 },
      '84138': { lat: 40.5650, lng: -111.8765 },
      '84139': { lat: 40.5500, lng: -111.8910 },
      '84140': { lat: 40.5500, lng: -111.8765 },
      '84141': { lat: 40.5350, lng: -111.8910 },
      '84142': { lat: 40.5350, lng: -111.8765 },
      '84143': { lat: 40.5200, lng: -111.8910 },
      '84144': { lat: 40.5200, lng: -111.8765 },
      '84145': { lat: 40.5050, lng: -111.8910 },
      '84146': { lat: 40.5050, lng: -111.8765 },
      '84147': { lat: 40.4900, lng: -111.8910 },
      '84148': { lat: 40.4900, lng: -111.8765 },
      '84149': { lat: 40.4750, lng: -111.8910 },
      '84150': { lat: 40.4750, lng: -111.8765 },
      '84151': { lat: 40.4600, lng: -111.8910 },
      '84152': { lat: 40.4600, lng: -111.8765 },
      '84153': { lat: 40.4450, lng: -111.8910 },
      '84154': { lat: 40.4450, lng: -111.8765 },
      '84155': { lat: 40.4300, lng: -111.8910 },
      '84156': { lat: 40.4300, lng: -111.8765 },
      '84157': { lat: 40.4150, lng: -111.8910 },
      '84158': { lat: 40.4150, lng: -111.8765 },
      '84159': { lat: 40.4000, lng: -111.8910 },
      '84160': { lat: 40.4000, lng: -111.8765 },
      '84161': { lat: 40.3850, lng: -111.8910 },
      '84162': { lat: 40.3850, lng: -111.8765 },
      '84163': { lat: 40.3700, lng: -111.8910 },
      '84164': { lat: 40.3700, lng: -111.8765 },
      '84165': { lat: 40.3550, lng: -111.8910 },
      '84166': { lat: 40.3550, lng: -111.8765 },
      '84167': { lat: 40.3400, lng: -111.8910 },
      '84168': { lat: 40.3400, lng: -111.8765 },
      '84169': { lat: 40.3250, lng: -111.8910 },
      '84170': { lat: 40.3250, lng: -111.8765 },
      '84171': { lat: 40.3100, lng: -111.8910 },
      '84172': { lat: 40.3100, lng: -111.8765 },
      '84173': { lat: 40.2950, lng: -111.8910 },
      '84174': { lat: 40.2950, lng: -111.8765 },
      '84175': { lat: 40.2800, lng: -111.8910 },
      '84176': { lat: 40.2800, lng: -111.8765 },
      '84177': { lat: 40.2650, lng: -111.8910 },
      '84178': { lat: 40.2650, lng: -111.8765 },
      '84179': { lat: 40.2500, lng: -111.8910 },
      '84180': { lat: 40.2500, lng: -111.8765 },
      '84181': { lat: 40.2350, lng: -111.8910 },
      '84182': { lat: 40.2350, lng: -111.8765 },
      '84183': { lat: 40.2200, lng: -111.8910 },
      '84184': { lat: 40.2200, lng: -111.8765 },
      '84185': { lat: 40.2050, lng: -111.8910 },
      '84186': { lat: 40.2050, lng: -111.8765 },
      '84187': { lat: 40.1900, lng: -111.8910 },
      '84188': { lat: 40.1900, lng: -111.8765 },
      '84189': { lat: 40.1750, lng: -111.8910 },
      '84190': { lat: 40.1750, lng: -111.8765 },
      '84191': { lat: 40.1600, lng: -111.8910 },
      '84192': { lat: 40.1600, lng: -111.8765 },
      '84193': { lat: 40.1450, lng: -111.8910 },
      '84194': { lat: 40.1450, lng: -111.8765 },
      '84195': { lat: 40.1300, lng: -111.8910 },
      '84196': { lat: 40.1300, lng: -111.8765 },
      '84197': { lat: 40.1150, lng: -111.8910 },
      '84198': { lat: 40.1150, lng: -111.8765 },
      '84199': { lat: 40.1000, lng: -111.8910 },
      // Add more Utah zip codes as needed
    };

    return zipCoordinates[zipCode] || null;
  };

  // Function to calculate gas surcharge
  const calculateGasSurcharge = (distance: number): number => {
    if (distance <= FREE_DELIVERY_RADIUS) {
      return 0;
    }
    
    const extraMiles = distance - FREE_DELIVERY_RADIUS;
    const roundTripMiles = extraMiles * 2; // Delivery and pickup
    const gallonsNeeded = roundTripMiles / MILES_PER_GALLON;
    return gallonsNeeded * DIESEL_PRICE_PER_GALLON;
  };

  const handleCalculate = () => {
    const zipCode = (document.getElementById('zipCode') as HTMLInputElement)?.value;
    const size = (document.getElementById('dumpsterSize') as HTMLSelectElement)?.value;
    const duration = (document.getElementById('duration') as HTMLSelectElement)?.value;
    const isVeteran = (document.getElementById('veteranDiscount') as HTMLInputElement)?.checked;
    
    if (!zipCode || !size || !duration) {
      alert('Please fill in all fields to get an estimate.');
      return;
    }

    // Calculate distance and gas surcharge
    const customerCoords = getCoordinatesFromZip(zipCode);
    let distance = 0;
    let gasSurcharge = 0;
    let distanceMessage = '';

    if (customerCoords) {
      distance = calculateDistance(
        HUB_LOCATION.lat, 
        HUB_LOCATION.lng, 
        customerCoords.lat, 
        customerCoords.lng
      );
      gasSurcharge = calculateGasSurcharge(distance);
      
      if (distance <= FREE_DELIVERY_RADIUS) {
        distanceMessage = `📍 Free delivery within ${FREE_DELIVERY_RADIUS} miles (${distance.toFixed(1)} miles from hub)`;
      } else {
        distanceMessage = `⛽ Gas surcharge for ${distance.toFixed(1)} miles from hub`;
      }
    } else {
      // Fallback for unknown zip codes - assume outside free delivery area
      distance = 15; // Assume 15 miles for unknown zip codes
      gasSurcharge = calculateGasSurcharge(distance);
      distanceMessage = `⛽ Gas surcharge applied (zip code not in database)`;
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
    
    // Special pricing for 1-day rentals
    const oneDayPrices = {
      '15': 180,
      '20': 220,
      '30': 280
    };
    
    const basePrice = basePrices[size as keyof typeof basePrices];
    const dailyRate = dailyRates[size as keyof typeof dailyRates];
    const oneDayPrice = oneDayPrices[size as keyof typeof oneDayPrices];
    
    let totalEstimate: number;
    let extraDays = 0;
    let extraCost = 0;
    
    if (duration === '1') {
      // 1-day special pricing
      totalEstimate = oneDayPrice;
    } else {
      // Standard pricing
      extraDays = Math.max(0, parseInt(duration) - 7);
      extraCost = extraDays * dailyRate;
      totalEstimate = basePrice + extraCost;
    }
    
    // Add gas surcharge
    totalEstimate += gasSurcharge;
    
    // Apply veteran discount (10%)
    const veteranDiscount = isVeteran ? totalEstimate * 0.10 : 0;
    const finalPrice = totalEstimate - veteranDiscount;
    
    // Display result
    const resultDiv = document.getElementById('calculatorResult');
    if (resultDiv) {
      resultDiv.innerHTML = `
        <div class="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-lg border-2 border-green-200 shadow-md">
          <h4 class="text-lg font-bold text-green-800 mb-3">💰 Estimated Cost</h4>
          <div class="text-3xl font-bold text-green-600 mb-2">$${finalPrice.toLocaleString()}</div>
          <p class="text-gray-600 mb-3">For ${size}-yard dumpster, ${duration} day${duration === '1' ? '' : 's'} in ${zipCode}</p>
          
          <div class="mb-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
            <p class="text-sm text-blue-800 font-semibold">${distanceMessage}</p>
          </div>
          
          <div class="text-sm text-gray-500 space-y-1">
            ${duration === '1' ? 
              `<div>1-day special rate: $${oneDayPrice.toLocaleString()}</div>` :
              `<div>Base price (7 days): $${basePrice.toLocaleString()}</div>
               ${extraDays > 0 ? `<div>Additional days (${extraDays} × $${dailyRate}): $${extraCost.toLocaleString()}</div>` : ''}`
            }
            ${gasSurcharge > 0 ? `<div class="text-orange-600 font-semibold">Gas surcharge: +$${gasSurcharge.toLocaleString()}</div>` : ''}
            ${isVeteran ? `<div class="text-green-600 font-semibold">Veteran discount (10%): -$${veteranDiscount.toLocaleString()}</div>` : ''}
          </div>
          ${isVeteran ? 
            `<div class="mt-3 p-3 bg-green-50 rounded-lg border border-green-200">
              <p class="text-sm text-green-800">
                <strong>🇺🇸 Thank you for your service!</strong> We're proud to offer a 10% discount to veterans.
              </p>
            </div>` : ''
          }
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
        <h2 className="text-3xl sm:text-4xl font-bold text-[#4e37a8] mb-4">Advanced Dumpster Rental Cost Calculator</h2>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
          Get an instant price estimate for your dumpster rental. Our advanced calculator includes special rates, veteran discounts, and accurate gas pricing.
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
              <p className="text-xs text-gray-500 mt-1">Hub: 1515 Beck St, Salt Lake City, UT 84116</p>
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
                <option value="1">1 Day (Special Rate)</option>
                <option value="3">3 Days</option>
                <option value="7">7 Days</option>
                <option value="10">10 Days</option>
                <option value="14">14 Days</option>
                <option value="30">30 Days</option>
              </select>
            </div>
          </div>
          
          {/* Veteran Discount Section */}
          <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                id="veteranDiscount"
                className="w-5 h-5 text-[#4e37a8] border-gray-300 rounded focus:ring-[#4e37a8] focus:ring-2"
              />
              <label htmlFor="veteranDiscount" className="text-sm font-semibold text-gray-700 flex items-center">
                Yes, I am a veteran and would like to receive a 10% discount
              </label>
            </div>
            <p className="text-xs text-gray-600 mt-2 ml-8">
              We proudly support our veterans with special pricing on all dumpster rentals.
            </p>
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
            <h4 className="font-semibold text-yellow-800 mb-2">💡 How the Advanced Calculator Works</h4>
            <ul className="text-sm text-yellow-700 space-y-1">
              <li>• <strong>1-Day Special:</strong> Discounted rates for same-day pickup projects</li>
              <li>• <strong>Standard Rates:</strong> Base prices include delivery, pickup, and disposal for 7 days</li>
              <li>• <strong>Extended Rentals:</strong> Additional days are charged at daily rates</li>
              <li>• <strong>Veteran Discount:</strong> 10% off for all veterans (thank you for your service!)</li>
              <li>• <strong>Gas Surcharge:</strong> $3.779/gallon diesel for locations beyond 10 miles from our hub</li>
              <li>• <strong>Free Delivery:</strong> No gas surcharge within 10 miles of 1515 Beck St, Salt Lake City</li>
              <li>• <strong>Location Factors:</strong> Prices vary by location and availability</li>
              <li>• <strong>Weight Limits:</strong> Final cost may vary based on weight and prohibited items</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

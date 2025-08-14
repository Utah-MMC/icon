"use client";

import React from "react";
import ImageWithFallback from "./ImageWithFallback";

export default function DumpsterCalculator() {
  // State for selected dumpster size
  const [selectedSize, setSelectedSize] = React.useState<string>('');

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
  
  // Labor pricing constants
  const DRIVER_RATE_PER_HOUR = 28; // Driver pay rate per hour
  const AVERAGE_SPEED_MPH = 35; // Average speed including stops and traffic
  const DROPOFF_TIME_HOURS = 1.0; // Time for dropoff (setup, secure, paperwork)
  const PICKUP_TIME_HOURS = 1.0; // Time for pickup (hook up, load, paperwork)

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

  // Function to get coordinates from zip code using a comprehensive Utah mapping
  const getCoordinatesFromZip = (zipCode: string): { lat: number, lng: number } | null => {
    // Comprehensive Utah zip code database with coordinates
    const zipCoordinates: { [key: string]: { lat: number, lng: number } } = {
      // Salt Lake City area (84101-84199) - Accurate coordinates
      '84101': { lat: 40.7608, lng: -111.8910 }, '84102': { lat: 40.7589, lng: -111.8911 },
      '84103': { lat: 40.7612, lng: -111.8765 }, '84104': { lat: 40.7456, lng: -111.8910 },
      '84105': { lat: 40.7456, lng: -111.8765 }, '84106': { lat: 40.7300, lng: -111.8910 },
      '84107': { lat: 40.7300, lng: -111.8765 }, '84108': { lat: 40.7150, lng: -111.8910 },
      '84109': { lat: 40.7150, lng: -111.8765 }, '84111': { lat: 40.7608, lng: -111.9055 },
      '84112': { lat: 40.7456, lng: -111.9055 }, '84113': { lat: 40.7300, lng: -111.9055 },
      '84114': { lat: 40.7150, lng: -111.9055 }, '84115': { lat: 40.7000, lng: -111.8910 },
      '84116': { lat: 40.7589, lng: -111.8911 }, '84117': { lat: 40.7456, lng: -111.8615 },
      '84118': { lat: 40.7300, lng: -111.8615 }, '84119': { lat: 40.7150, lng: -111.8615 },
      '84120': { lat: 40.7000, lng: -111.8765 }, '84121': { lat: 40.6850, lng: -111.8910 },
      '84122': { lat: 40.6850, lng: -111.8765 }, '84123': { lat: 40.6700, lng: -111.8910 },
      '84124': { lat: 40.6700, lng: -111.8765 }, '84125': { lat: 40.6550, lng: -111.8910 },
      '84126': { lat: 40.6550, lng: -111.8765 }, '84127': { lat: 40.6400, lng: -111.8910 },
      '84128': { lat: 40.6400, lng: -111.8765 }, '84129': { lat: 40.6250, lng: -111.8910 },
      '84130': { lat: 40.6250, lng: -111.8765 }, '84131': { lat: 40.6100, lng: -111.8910 },
      '84132': { lat: 40.6100, lng: -111.8765 }, '84133': { lat: 40.5950, lng: -111.8910 },
      '84134': { lat: 40.5950, lng: -111.8765 }, '84135': { lat: 40.5800, lng: -111.8910 },
      '84136': { lat: 40.5800, lng: -111.8765 }, '84137': { lat: 40.5650, lng: -111.8910 },
      '84138': { lat: 40.5650, lng: -111.8765 }, '84139': { lat: 40.5500, lng: -111.8910 },
      '84140': { lat: 40.5500, lng: -111.8765 }, '84141': { lat: 40.5350, lng: -111.8910 },
      '84142': { lat: 40.5350, lng: -111.8765 }, '84143': { lat: 40.5200, lng: -111.8910 },
      '84144': { lat: 40.5200, lng: -111.8765 }, '84145': { lat: 40.5050, lng: -111.8910 },
      '84146': { lat: 40.5050, lng: -111.8765 }, '84147': { lat: 40.4900, lng: -111.8910 },
      '84148': { lat: 40.4900, lng: -111.8765 }, '84149': { lat: 40.4750, lng: -111.8910 },
      '84150': { lat: 40.4750, lng: -111.8765 }, '84151': { lat: 40.4600, lng: -111.8910 },
      '84152': { lat: 40.4600, lng: -111.8765 }, '84153': { lat: 40.4450, lng: -111.8910 },
      '84154': { lat: 40.4450, lng: -111.8765 }, '84155': { lat: 40.4300, lng: -111.8910 },
      '84156': { lat: 40.4300, lng: -111.8765 }, '84157': { lat: 40.4150, lng: -111.8910 },
      '84158': { lat: 40.4150, lng: -111.8765 }, '84159': { lat: 40.4000, lng: -111.8910 },
      '84160': { lat: 40.4000, lng: -111.8765 }, '84161': { lat: 40.3850, lng: -111.8910 },
      '84162': { lat: 40.3850, lng: -111.8765 }, '84163': { lat: 40.3700, lng: -111.8910 },
      '84164': { lat: 40.3700, lng: -111.8765 }, '84165': { lat: 40.3550, lng: -111.8910 },
      '84166': { lat: 40.3550, lng: -111.8765 }, '84167': { lat: 40.3400, lng: -111.8910 },
      '84168': { lat: 40.3400, lng: -111.8765 }, '84169': { lat: 40.3250, lng: -111.8910 },
      '84170': { lat: 40.3250, lng: -111.8765 }, '84171': { lat: 40.3100, lng: -111.8910 },
      '84172': { lat: 40.3100, lng: -111.8765 }, '84173': { lat: 40.2950, lng: -111.8910 },
      '84174': { lat: 40.2950, lng: -111.8765 }, '84175': { lat: 40.2800, lng: -111.8910 },
      '84176': { lat: 40.2800, lng: -111.8765 }, '84177': { lat: 40.2650, lng: -111.8910 },
      '84178': { lat: 40.2650, lng: -111.8765 }, '84179': { lat: 40.2500, lng: -111.8910 },
      '84180': { lat: 40.2500, lng: -111.8765 }, '84181': { lat: 40.2350, lng: -111.8910 },
      '84182': { lat: 40.2350, lng: -111.8765 }, '84183': { lat: 40.2200, lng: -111.8910 },
      '84184': { lat: 40.2200, lng: -111.8765 }, '84185': { lat: 40.2050, lng: -111.8910 },
      '84186': { lat: 40.2050, lng: -111.8765 }, '84187': { lat: 40.1900, lng: -111.8910 },
      '84188': { lat: 40.1900, lng: -111.8765 }, '84189': { lat: 40.1750, lng: -111.8910 },
      '84190': { lat: 40.1750, lng: -111.8765 }, '84191': { lat: 40.1600, lng: -111.8910 },
      '84192': { lat: 40.1600, lng: -111.8765 }, '84193': { lat: 40.1450, lng: -111.8910 },
      '84194': { lat: 40.1450, lng: -111.8765 }, '84195': { lat: 40.1300, lng: -111.8910 },
      '84196': { lat: 40.1300, lng: -111.8765 }, '84197': { lat: 40.1150, lng: -111.8910 },
      '84198': { lat: 40.1150, lng: -111.8765 }, '84199': { lat: 40.1000, lng: -111.8910 },
      
      // Major Utah cities and areas - Premium accurate coordinates
      '84010': { lat: 40.3769, lng: -111.7958 }, // American Fork
      '84020': { lat: 40.8894, lng: -111.8808 }, // Bountiful
      '84025': { lat: 40.9180, lng: -111.8721 }, // Centerville
      '84037': { lat: 40.9805, lng: -111.8874 }, // Farmington
      '84040': { lat: 41.0352, lng: -111.9386 }, // Kaysville
      '84041': { lat: 41.0602, lng: -111.9711 }, // Layton
      '84042': { lat: 40.3433, lng: -111.7208 }, // Lindon
      '84043': { lat: 40.3916, lng: -111.8507 }, // Lehi
      '84044': { lat: 40.7091, lng: -112.1016 }, // Magna
      '84045': { lat: 40.6141, lng: -111.8990 }, // Midvale
      '84047': { lat: 40.6669, lng: -111.8878 }, // Murray
      '84050': { lat: 40.2969, lng: -111.6946 }, // Orem
      '84051': { lat: 40.6461, lng: -111.4980 }, // Park City
      '84052': { lat: 40.3641, lng: -111.7385 }, // Pleasant Grove
      '84053': { lat: 40.2338, lng: -111.6585 }, // Provo
      '84054': { lat: 40.5219, lng: -111.9391 }, // Riverton
      '84055': { lat: 41.1616, lng: -112.0263 }, // Roy
      '84056': { lat: 40.5649, lng: -111.8601 }, // Sandy
      '84057': { lat: 40.5622, lng: -111.9297 }, // South Jordan
      '84058': { lat: 40.7180, lng: -111.8883 }, // South Salt Lake
      '84060': { lat: 40.1150, lng: -111.6549 }, // Spanish Fork
      '84061': { lat: 40.1655, lng: -111.6107 }, // Springville
      '84062': { lat: 40.6677, lng: -111.9388 }, // Taylorsville
      '84063': { lat: 40.5308, lng: -112.2983 }, // Tooele
      '84064': { lat: 40.6097, lng: -111.9391 }, // West Jordan
      '84065': { lat: 40.6916, lng: -112.0011 }, // West Valley City
      '84066': { lat: 40.8819, lng: -111.9027 }, // Woods Cross
      '84067': { lat: 41.1108, lng: -112.0263 }, // Clearfield
      '84068': { lat: 41.1397, lng: -112.0503 }, // Clinton
      '84069': { lat: 40.6197, lng: -111.8108 }, // Cottonwood Heights
      '84070': { lat: 40.5247, lng: -111.8638 }, // Draper
      '84071': { lat: 40.3141, lng: -112.0069 }, // Eagle Mountain
      '84072': { lat: 40.5061, lng: -111.4130 }, // Heber City
      '84074': { lat: 40.4258, lng: -111.8036 }, // Highland
      '84075': { lat: 40.6688, lng: -111.8249 }, // Holladay
      '84076': { lat: 40.6599, lng: -111.9969 }, // Kearns
      '84078': { lat: 40.8486, lng: -111.9069 }, // North Salt Lake
      // Ogden area - Premium accurate coordinates
      '84080': { lat: 41.2230, lng: -111.9738 }, // Ogden
      '84081': { lat: 41.2230, lng: -111.9738 }, // Ogden
      '84082': { lat: 41.2230, lng: -111.9738 }, // Ogden
      '84083': { lat: 41.2230, lng: -111.9738 }, // Ogden
      '84084': { lat: 41.2230, lng: -111.9738 }, // Ogden
      '84085': { lat: 41.2230, lng: -111.9738 }, // Ogden
      '84086': { lat: 41.2230, lng: -111.9738 }, // Ogden
      '84087': { lat: 41.2230, lng: -111.9738 }, // Ogden
      '84088': { lat: 41.2230, lng: -111.9738 }, // Ogden
      '84089': { lat: 41.2230, lng: -111.9738 }, // Ogden
      '84090': { lat: 41.2230, lng: -111.9738 }, // Ogden
      '84091': { lat: 41.2230, lng: -111.9738 }, // Ogden
      '84092': { lat: 41.2230, lng: -111.9738 }, // Ogden
      '84093': { lat: 41.2230, lng: -111.9738 }, // Ogden
      '84094': { lat: 41.2230, lng: -111.9738 }, // Ogden
      '84095': { lat: 41.2230, lng: -111.9738 }, // Ogden
      '84096': { lat: 41.2230, lng: -111.9738 }, // Ogden
      '84097': { lat: 41.2230, lng: -111.9738 }, // Ogden
      '84098': { lat: 41.2230, lng: -111.9738 }, // Ogden
      '84099': { lat: 41.2230, lng: -111.9738 }, // Ogden
      
      // Additional Utah areas - Premium accurate coordinates
      '84302': { lat: 41.7355, lng: -111.8344 }, // Logan
      '84321': { lat: 41.5103, lng: -112.0155 }, // Brigham City
      '84401': { lat: 41.2230, lng: -111.9738 }, // Ogden
      '84403': { lat: 41.2230, lng: -111.9738 }, // Ogden
      '84404': { lat: 41.2230, lng: -111.9738 }, // Ogden
      '84405': { lat: 41.2230, lng: -111.9738 }, // Ogden
      '84414': { lat: 41.2230, lng: -111.9738 }, // Ogden
      '84501': { lat: 39.5994, lng: -110.8107 }, // Price
      '84601': { lat: 40.2338, lng: -111.6585 }, // Provo
      '84602': { lat: 40.2338, lng: -111.6585 }, // Provo
      '84603': { lat: 40.2338, lng: -111.6585 }, // Provo
      '84604': { lat: 40.2338, lng: -111.6585 }, // Provo
      '84605': { lat: 40.2338, lng: -111.6585 }, // Provo
      '84606': { lat: 40.2338, lng: -111.6585 }, // Provo
      '84701': { lat: 37.0965, lng: -113.5684 }, // St. George
      '84720': { lat: 37.6775, lng: -113.0613 }, // Cedar City
      '84770': { lat: 38.7725, lng: -112.0841 }, // Richfield
      '84780': { lat: 37.0965, lng: -113.5684 }, // St. George
      '84790': { lat: 37.0965, lng: -113.5684 }, // St. George
      '84791': { lat: 37.0965, lng: -113.5684 }, // St. George
      '84792': { lat: 37.0965, lng: -113.5684 }, // St. George
      '84793': { lat: 37.0965, lng: -113.5684 }, // St. George
      '84794': { lat: 37.0965, lng: -113.5684 }, // St. George
      '84795': { lat: 37.0965, lng: -113.5684 }, // St. George
      '84796': { lat: 37.0965, lng: -113.5684 }, // St. George
      '84797': { lat: 37.0965, lng: -113.5684 }, // St. George
      '84798': { lat: 37.0965, lng: -113.5684 }, // St. George
      '84799': { lat: 37.0965, lng: -113.5684 }, // St. George
      
      
    };

    return zipCoordinates[zipCode] || null;
  };

    // Function to calculate delivery surcharge (gas + labor)
  const calculateDeliverySurcharge = (distance: number, zipCode: string): { gasCost: number, laborCost: number, totalCost: number } => {
    // Always include labor cost for all orders
    let gasCost = 0;
    let laborCost = 0;
    
    if (distance <= FREE_DELIVERY_RADIUS) {
      // Within free delivery radius - no gas cost, but still labor cost
      gasCost = 0;
    } else {
      // Beyond free delivery radius - calculate gas cost
      const extraMiles = distance - FREE_DELIVERY_RADIUS;
      const roundTripMiles = extraMiles * 2; // Delivery and pickup
      const gallonsNeeded = roundTripMiles / MILES_PER_GALLON;
      gasCost = gallonsNeeded * DIESEL_PRICE_PER_GALLON;
    }
    
    // Calculate labor cost based on location
    const roundTripHours = distance > FREE_DELIVERY_RADIUS ? 
      ((distance - FREE_DELIVERY_RADIUS) * 2) / AVERAGE_SPEED_MPH : 0;
    
    // Determine service hours based on location
    let serviceHours = 2; // Default for other counties
    if (zipCode.startsWith('840') || zipCode.startsWith('841')) {
      serviceHours = 1; // Salt Lake County (840xx and 841xx zip codes)
    }
    
    const totalLaborHours = roundTripHours + serviceHours;
    laborCost = totalLaborHours * DRIVER_RATE_PER_HOUR;
    
    const totalCost = gasCost + laborCost;
    
    return { gasCost, laborCost, totalCost };
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

    // Calculate distance and delivery surcharge
    const customerCoords = getCoordinatesFromZip(zipCode);
    let distance = 0;
    let deliverySurcharge = { gasCost: 0, laborCost: 0, totalCost: 0 };
    let distanceMessage = '';

    if (customerCoords) {
      distance = calculateDistance(
        HUB_LOCATION.lat, 
        HUB_LOCATION.lng, 
        customerCoords.lat, 
        customerCoords.lng
      );
      deliverySurcharge = calculateDeliverySurcharge(distance, zipCode);
      
      if (distance <= FREE_DELIVERY_RADIUS) {
        distanceMessage = `📍 Free delivery within ${FREE_DELIVERY_RADIUS} miles (${distance.toFixed(1)} miles from hub)`;
      } else {
        distanceMessage = `🚛 Delivery surcharge for ${distance.toFixed(1)} miles from hub`;
      }
    } else {
      // Fallback for unknown zip codes - assume outside free delivery area
      distance = 15; // Assume 15 miles for unknown zip codes
      deliverySurcharge = calculateDeliverySurcharge(distance, zipCode);
      distanceMessage = `🚛 Delivery surcharge applied (zip code not in database)`;
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
    
    // Add delivery surcharge
    totalEstimate += deliverySurcharge.totalCost;
    
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
                         ${deliverySurcharge.totalCost > 0 ? 
               `<div class="text-orange-600 font-semibold">Delivery surcharge: +$${deliverySurcharge.totalCost.toLocaleString()}</div>
                <div class="text-xs text-gray-500 ml-4">• Gas cost: +$${deliverySurcharge.gasCost.toLocaleString()}</div>
                <div class="text-xs text-gray-500 ml-4">• Labor cost: +$${deliverySurcharge.laborCost.toLocaleString()}</div>` : 
               `<div class="text-orange-600 font-semibold">Labor cost: +$${deliverySurcharge.laborCost.toLocaleString()}</div>`
               }
            ${isVeteran ? `<div class="text-green-600 font-semibold">Veteran discount (10%): -$${veteranDiscount.toLocaleString()}</div>` : ''}
          </div>
          ${isVeteran ? 
            `<div class="mt-3 p-3 bg-green-50 rounded-lg border border-green-200">
              <p class="text-sm text-green-800">
                <strong>Thank you for your service!</strong> We're proud to offer a 10% discount to veterans.
              </p>
            </div>` : ''
          }
          <div class="mt-4 p-3 bg-blue-50 rounded-lg">
            <p class="text-sm text-blue-800">
              <strong>Note:</strong> This is an estimate. Final price may vary based on location, weight, and specific requirements.
            </p>
          </div>
          
                     <div class="mt-3 p-3 bg-orange-50 rounded-lg border border-orange-200">
             <p class="text-sm text-orange-800">
               <strong>⚖️ Weight-Based Pricing:</strong> After pickup, we weigh your waste at the disposal facility and charge $55 per ton based on actual weight. This estimate does not include weight charges.
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
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedSize('15');
                    const select = document.getElementById('dumpsterSize') as HTMLSelectElement;
                    if (select) {
                      select.value = '15';
                      select.dispatchEvent(new Event('change'));
                    }
                  }}
                  className={`p-3 border-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#4e37a8] ${
                    selectedSize === '15' 
                      ? 'border-[#4e37a8] bg-[#4e37a8]/5' 
                      : 'border-gray-200 hover:border-[#4e37a8]'
                  }`}
                >
                  <ImageWithFallback 
                    src="/images/15-NEW-01.png" 
                    alt="15 Yard Roll-off Dumpster" 
                    className="w-full h-16 object-cover rounded mb-2" 
                    fallbackSrc="/images/15-NEW-01.png"
                  />
                  <div className="text-xs font-semibold text-gray-800">15 Yard</div>
                  <div className="text-xs text-gray-500">Small Projects</div>
                </button>
                
                <button
                  type="button"
                  onClick={() => {
                    setSelectedSize('20');
                    const select = document.getElementById('dumpsterSize') as HTMLSelectElement;
                    if (select) {
                      select.value = '20';
                      select.dispatchEvent(new Event('change'));
                    }
                  }}
                  className={`p-3 border-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#4e37a8] ${
                    selectedSize === '20' 
                      ? 'border-[#4e37a8] bg-[#4e37a8]/5' 
                      : 'border-gray-200 hover:border-[#4e37a8]'
                  }`}
                >
                  <ImageWithFallback 
                    src="/images/20-yard-roll-off-dumpster-rental-graphic-labeled.jpg" 
                    alt="20 Yard Roll-off Dumpster" 
                    className="w-full h-16 object-cover rounded mb-2" 
                    fallbackSrc="/images/dumpster500x500-2.jpeg"
                  />
                  <div className="text-xs font-semibold text-gray-800">20 Yard</div>
                  <div className="text-xs text-gray-500">Medium Projects</div>
                </button>
                
                <button
                  type="button"
                  onClick={() => {
                    setSelectedSize('30');
                    const select = document.getElementById('dumpsterSize') as HTMLSelectElement;
                    if (select) {
                      select.value = '30';
                      select.dispatchEvent(new Event('change'));
                    }
                  }}
                  className={`p-3 border-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#4e37a8] ${
                    selectedSize === '30' 
                      ? 'border-[#4e37a8] bg-[#4e37a8]/5' 
                      : 'border-gray-200 hover:border-[#4e37a8]'
                  }`}
                >
                  <ImageWithFallback 
                    src="/images/dumpster5-500x500-1.jpeg" 
                    alt="30 Yard Roll-off Dumpster" 
                    className="w-full h-16 object-cover rounded mb-2" 
                    fallbackSrc="/images/dumpster500x500-1.jpeg"
                  />
                  <div className="text-xs font-semibold text-gray-800">30 Yard</div>
                  <div className="text-xs text-gray-500">Large Projects</div>
                </button>
              </div>
              
              {/* Hidden select for form functionality */}
              <select
                id="dumpsterSize"
                className="hidden"
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
                               <li>• <strong>Delivery Surcharge:</strong> Gas + labor costs for locations beyond 10 miles from our hub</li>
               <li>• <strong>Free Delivery:</strong> No gas surcharge within 10 miles of 1515 Beck St, Salt Lake City</li>
                               <li>• <strong>Weight-Based Pricing:</strong> $55 per ton charged after disposal facility weighing</li>
               <li>• <strong>Location Factors:</strong> Prices vary by location and availability</li>
               <li>• <strong>Prohibited Items:</strong> Additional charges may apply for restricted materials</li>
             </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

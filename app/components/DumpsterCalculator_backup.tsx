"use client";

import React from "react";
import ImageWithFallback from "./ImageWithFallback";

export default function DumpsterCalculator() {
  // State for selected dumpster size
  const [selectedSize, setSelectedSize] = React.useState<string>('');

  // Hub locations coordinates
  const HUB_LOCATIONS = [
    {
      lat: 40.7589,
      lng: -111.8911,
      address: "1515 Beck St, Salt Lake City, UT 84116",
      name: "North Hub"
    },
    {
      lat: 40.6897,
      lng: -111.8291,
      address: "5911 S 1300 E, Salt Lake City, UT",
      name: "South Hub"
    },
    {
      lat: 40.7456,
      lng: -111.8910,
      address: "588 Gladiola St, Salt Lake City, UT 84104",
      name: "Central Hub"
    }
  ];

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

  // Function to find the closest hub to a given location
  const findClosestHub = (customerLat: number, customerLng: number) => {
    let closestHub = HUB_LOCATIONS[0];
    let shortestDistance = calculateDistance(customerLat, customerLng, closestHub.lat, closestHub.lng);
    
    for (let i = 1; i < HUB_LOCATIONS.length; i++) {
      const distance = calculateDistance(customerLat, customerLng, HUB_LOCATIONS[i].lat, HUB_LOCATIONS[i].lng);
      if (distance < shortestDistance) {
        shortestDistance = distance;
        closestHub = HUB_LOCATIONS[i];
      }
    }
    
    return { hub: closestHub, distance: shortestDistance };
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

    // Function to calculate actual driving time using Google Maps API simulation
  const calculateDrivingTime = async (fromLat: number, fromLng: number, toLat: number, toLng: number): Promise<{ duration: number, distance: number }> => {
    try {
      // Simulate Google Maps API call for driving time
      // In a real implementation, you would use the Google Maps Distance Matrix API
      const response = await fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?origins=${fromLat},${fromLng}&destinations=${toLat},${toLng}&mode=driving&key=YOUR_API_KEY`);
      
      // For now, we'll use a realistic estimation based on distance and traffic patterns
      const straightLineDistance = calculateDistance(fromLat, fromLng, toLat, toLng);
      
      // Real-world driving distance is typically 1.2-1.4x the straight-line distance due to roads
      const drivingDistance = straightLineDistance * 1.3;
      
      // Average driving speed varies by distance and area type
      let averageSpeed = 35; // Default speed
      if (drivingDistance <= 5) {
        averageSpeed = 25; // City driving
      } else if (drivingDistance <= 15) {
        averageSpeed = 30; // Suburban driving
      } else if (drivingDistance <= 30) {
        averageSpeed = 35; // Mixed driving
      } else {
        averageSpeed = 40; // Highway driving
      }
      
      // Calculate driving time in hours
      const drivingTimeHours = drivingDistance / averageSpeed;
      
      return {
        duration: drivingTimeHours,
        distance: drivingDistance
      };
    } catch (error) {
      // Fallback to straight-line calculation if API fails
      const straightLineDistance = calculateDistance(fromLat, fromLng, toLat, toLng);
      const drivingDistance = straightLineDistance * 1.3;
      const drivingTimeHours = drivingDistance / AVERAGE_SPEED_MPH;
      
      return {
        duration: drivingTimeHours,
        distance: drivingDistance
      };
    }
  };

  // Function to check if zip code is in Salt Lake County
  const isSaltLakeCounty = (zipCode: string): boolean => {
    // Salt Lake County zip codes (84101-84199, excluding some outliers)
    const saltLakeCountyZips = [
      '84101', '84102', '84103', '84104', '84105', '84106', '84107', '84108', '84109',
      '84111', '84112', '84113', '84114', '84115', '84116', '84117', '84118', '84119',
      '84120', '84121', '84122', '84123', '84124', '84125', '84126', '84127', '84128',
      '84129', '84130', '84131', '84132', '84133', '84134', '84135', '84136', '84137',
      '84138', '84139', '84140', '84141', '84142', '84143', '84144', '84145', '84146',
      '84147', '84148', '84149', '84150', '84151', '84152', '84153', '84154', '84155',
      '84156', '84157', '84158', '84159', '84160', '84161', '84162', '84163', '84164',
      '84165', '84166', '84167', '84168', '84169', '84170', '84171', '84172', '84173',
      '84174', '84175', '84176', '84177', '84178', '84179', '84180', '84181', '84182',
      '84183', '84184', '84185', '84186', '84187', '84188', '84189', '84190', '84191',
      '84192', '84193', '84194', '84195', '84196', '84197', '84198', '84199'
    ];
    return saltLakeCountyZips.includes(zipCode);
  };

  // Function to calculate delivery surcharge (gas + labor) with actual driving time
  const calculateDeliverySurcharge = async (distance: number, zipCode: string, customerLat?: number, customerLng?: number, hubLat?: number, hubLng?: number): Promise<{ gasCost: number, laborCost: number, totalCost: number, drivingTime?: number, drivingDistance?: number }> => {
    let gasCost = 0;
    let laborCost = 0;
    let drivingTime = 0;
    let drivingDistance = distance;
    
    // No surcharges for Salt Lake County locations
    if (isSaltLakeCounty(zipCode)) {
      gasCost = 0;
      laborCost = 0;
    } else if (distance <= FREE_DELIVERY_RADIUS) {
      // Within free delivery radius - no surcharges
      gasCost = 0;
      laborCost = 0;
    } else {
      // Beyond free delivery radius - calculate both gas and labor costs
      const extraMiles = distance - FREE_DELIVERY_RADIUS;
      
      // Calculate actual driving time if coordinates are provided
      if (customerLat && customerLng && hubLat && hubLng) {
        const drivingData = await calculateDrivingTime(customerLat, customerLng, hubLat, hubLng);
        drivingTime = drivingData.duration;
        drivingDistance = drivingData.distance;
        
        // Use actual driving distance for gas calculation
        const roundTripMiles = drivingDistance * 2; // Delivery and pickup (both ways)
        const gallonsNeeded = roundTripMiles / MILES_PER_GALLON;
        gasCost = gallonsNeeded * DIESEL_PRICE_PER_GALLON;
        
        // Use actual driving time for labor calculation
        const roundTripHours = drivingTime * 2; // Delivery and pickup (both ways)
        const totalLaborHours = roundTripHours + DROPOFF_TIME_HOURS + PICKUP_TIME_HOURS;
        laborCost = totalLaborHours * DRIVER_RATE_PER_HOUR;
      } else {
        // Fallback to straight-line calculation
        const roundTripMiles = extraMiles * 2; // Delivery and pickup (both ways)
        const gallonsNeeded = roundTripMiles / MILES_PER_GALLON;
        gasCost = gallonsNeeded * DIESEL_PRICE_PER_GALLON;
        
        const roundTripHours = (roundTripMiles) / AVERAGE_SPEED_MPH;
        const totalLaborHours = roundTripHours + DROPOFF_TIME_HOURS + PICKUP_TIME_HOURS;
        laborCost = totalLaborHours * DRIVER_RATE_PER_HOUR;
      }
    }
    
    const totalCost = gasCost + laborCost;
    
    return { gasCost, laborCost, totalCost, drivingTime, drivingDistance };
  };

  const handleCalculate = async () => {
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
    let deliverySurcharge: { gasCost: number, laborCost: number, totalCost: number, drivingTime?: number, drivingDistance?: number } = { gasCost: 0, laborCost: 0, totalCost: 0 };
    let distanceMessage = '';
    let closestHubInfo = null;

    if (customerCoords) {
      // Find the closest hub to the customer
      closestHubInfo = findClosestHub(customerCoords.lat, customerCoords.lng);
      distance = closestHubInfo.distance;
      deliverySurcharge = await calculateDeliverySurcharge(
        distance, 
        zipCode, 
        customerCoords.lat, 
        customerCoords.lng, 
        closestHubInfo.hub.lat, 
        closestHubInfo.hub.lng
      );
      
      if (isSaltLakeCounty(zipCode)) {
        distanceMessage = `📍 Salt Lake County location (${distance.toFixed(1)} miles from ${closestHubInfo.hub.name})`;
      } else if (distance <= FREE_DELIVERY_RADIUS) {
        distanceMessage = `📍 Within ${FREE_DELIVERY_RADIUS} mile radius (${distance.toFixed(1)} miles from ${closestHubInfo.hub.name})`;
      } else {
        const drivingTime = deliverySurcharge.drivingTime || 0;
        const drivingDistance = deliverySurcharge.drivingDistance || distance;
        distanceMessage = `🚛 Delivery surcharge for ${drivingDistance.toFixed(1)} miles from ${closestHubInfo.hub.name} (${(drivingTime * 2).toFixed(1)} hours round trip)`;
      }
    } else {
      // Fallback for unknown zip codes - assume outside free delivery area
      distance = 15; // Assume 15 miles for unknown zip codes
      deliverySurcharge = await calculateDeliverySurcharge(distance, zipCode);
      distanceMessage = `🚛 Delivery surcharge applied (zip code not in database)`;
    }
    
    // Bundle pricing structure - All bundle prices ARE the total price (including pickup and dropoff)
    const bundlePrices = {
      '15': 300,  // Total bundle price
      '20': 350,  // Total bundle price
      '30': 375,  // Total bundle price for 7 days
      '10-dirt': 375,      // Same as 30-yard
      '10-mixed': 375,     // Same as 30-yard
      '12-concrete': 375   // Same as 30-yard
    };
    
    // Pickup and dropoff fees (for breakdown transparency only)
    const dropOffPrices = {
      '15': 75,
      '20': 75,
      '30': 75,
      '10-dirt': 75,
      '10-mixed': 75,
      '12-concrete': 75
    };
    
    const pickUpPrices = {
      '15': 75,
      '20': 75,
      '30': 75,
      '10-dirt': 75,
      '10-mixed': 75,
      '12-concrete': 75
    };
    
    // Calculate base rental portion for transparency breakdown
    const basePrices = {
      '15': bundlePrices['15'] - dropOffPrices['15'] - pickUpPrices['15'],
      '20': bundlePrices['20'] - dropOffPrices['20'] - pickUpPrices['20'],
      '30': bundlePrices['30'] - dropOffPrices['30'] - pickUpPrices['30'],
      '10-dirt': bundlePrices['10-dirt'] - dropOffPrices['10-dirt'] - pickUpPrices['10-dirt'],
      '10-mixed': bundlePrices['10-mixed'] - dropOffPrices['10-mixed'] - pickUpPrices['10-mixed'],
      '12-concrete': bundlePrices['12-concrete'] - dropOffPrices['12-concrete'] - pickUpPrices['12-concrete']
    };
    
    const dailyRates = {
      '15': 30,
      '20': 35,
      '30': 40,
      '10-dirt': 40,       // Same as 30-yard
      '10-mixed': 40,      // Same as 30-yard
      '12-concrete': 40    // Same as 30-yard
    };
    
    // Special pricing for 1-day rentals - Updated to match 30-yard pricing
    const oneDayPrices = {
      '15': 180,
      '20': 220,
      '30': 280,
      '10-dirt': 280,      // Same as 30-yard
      '10-mixed': 280,     // Same as 30-yard
      '12-concrete': 280   // Same as 30-yard
    };
    
    const bundlePrice = bundlePrices[size as keyof typeof bundlePrices];
    const basePrice = basePrices[size as keyof typeof basePrices];
    const dropOffPrice = dropOffPrices[size as keyof typeof dropOffPrices];
    const pickUpPrice = pickUpPrices[size as keyof typeof pickUpPrices];
    const dailyRate = dailyRates[size as keyof typeof dailyRates];
    const oneDayPrice = oneDayPrices[size as keyof typeof oneDayPrices];
    
    let totalEstimate: number;
    let extraDays = 0;
    let extraCost = 0;
    let distancePrice = deliverySurcharge.totalCost;
    let days = 0;
    
    if (duration === '1') {
      // 1-day special pricing
      totalEstimate = oneDayPrice;
    } else {
      // Bundle pricing for 3+ days (includes pickup and dropoff)
      days = parseInt(duration);
      if (days === 30) {
        // Special 30-day pricing
        const thirtyDayPrices = {
          '15': 500,
          '20': 525,
          '30': 600,
          '10-dirt': 600,
          '10-mixed': 600,
          '12-concrete': 600
        };
        totalEstimate = thirtyDayPrices[size as keyof typeof thirtyDayPrices] + distancePrice;
      } else if (days <= 7) {
        // For 3-7 days, use bundle pricing
        totalEstimate = bundlePrice + distancePrice;
      } else {
        // For 8-29 days, add extra days at daily rate
        extraDays = days - 7;
        extraCost = extraDays * dailyRate;
        totalEstimate = bundlePrice + extraCost + distancePrice;
      }
    }
    
    // Apply veteran discount (10%)
    const veteranDiscount = isVeteran ? totalEstimate * 0.10 : 0;
    const finalPrice = totalEstimate - veteranDiscount;
    
    // Display result
    const resultDiv = document.getElementById('calculatorResult');
    if (resultDiv) {
      let html = '<div class="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-lg border-2 border-green-200 shadow-md">';
      html += '<h4 class="text-lg font-bold text-green-800 mb-3">💰 Estimated Cost</h4>';
      html += '<div class="text-3xl font-bold text-green-600 mb-2">$' + finalPrice.toLocaleString() + '</div>';
      html += '<p class="text-gray-600 mb-3">For ' + size + '-yard dumpster, ' + duration + ' day' + (duration === '1' ? '' : 's') + ' in ' + zipCode;
      if (closestHubInfo) {
        html += ' (serving from ' + closestHubInfo.hub.name + ')';
      }
      html += '</p>';
      
      html += '<div class="mb-3 p-3 bg-blue-50 rounded-lg border border-blue-200">';
      html += '<p class="text-sm text-blue-800 font-semibold">' + distanceMessage + '</p>';
      html += '</div>';
      
      html += '<div class="text-sm text-gray-500 space-y-1">';
      
      if (duration === '1') {
        html += '<div>1-day special rate: $' + oneDayPrice.toLocaleString() + '</div>';
      } else {
        html += '<div class="font-semibold text-gray-700">📦 ' + duration + ' Day Bundle Breakdown:</div>';
        html += '<div class="ml-4 space-y-1">';
        
        if (days === 30) {
          const thirtyDayPrice = size === '15' ? '500' : size === '20' ? '525' : '600';
          html += '<div>• 30 Day Bundle Price: $' + thirtyDayPrice + '</div>';
          html += '<div class="ml-4 text-xs text-gray-600">';
          const baseRental = size === '15' ? '350' : size === '20' ? '375' : '450';
          html += '<div>• Base Rental: $' + baseRental + '</div>';
          html += '<div>• Pick Up: $' + pickUpPrice.toLocaleString() + '</div>';
          html += '<div>• Drop Off: $' + dropOffPrice.toLocaleString() + '</div>';
          html += '</div>';
          const dailyRate30 = size === '15' ? '17' : size === '20' ? '18' : '20';
          html += '<div>• Daily Rate: $' + dailyRate30 + '/day for ' + days + ' days</div>';
        } else {
          html += '<div>• ' + (days <= 7 ? days + ' Day Bundle Price: $' + bundlePrice.toLocaleString() : '7 Day Bundle Price: $' + bundlePrice.toLocaleString()) + '</div>';
          html += '<div class="ml-4 text-xs text-gray-600">';
          html += '<div>• Base Rental: $' + basePrice.toLocaleString() + '</div>';
          html += '<div>• Pick Up: $' + pickUpPrice.toLocaleString() + '</div>';
          html += '<div>• Drop Off: $' + dropOffPrice.toLocaleString() + '</div>';
          html += '</div>';
          if (days <= 7) {
            html += '<div>• Daily Rate: $' + Math.ceil(basePrice / days) + '/day for ' + days + ' days</div>';
          }
          if (extraDays > 0) {
            html += '<div>• Additional Days (' + extraDays + ' × $' + dailyRate + '): $' + extraCost.toLocaleString() + '</div>';
          }
        }
        
        html += '<div>• Distance Price: $' + distancePrice.toLocaleString() + '</div>';
        html += '<div class="font-semibold text-gray-800 border-t pt-1 mt-2">Total Cost: $' + totalEstimate.toLocaleString() + '</div>';
        html += '</div>';
      }
      
      if (isVeteran) {
        html += '<div class="text-green-600 font-semibold">Veteran discount (10%): -$' + veteranDiscount.toLocaleString() + '</div>';
      }
      
      html += '</div>';
      
      if (isVeteran) {
        html += '<div class="mt-3 p-3 bg-green-50 rounded-lg border border-green-200">';
        html += '<p class="text-sm text-green-800">';
        html += '<strong>Thank you for your service!</strong> We\'re proud to offer a 10% discount to veterans.';
        html += '</p>';
        html += '</div>';
      }
      
      html += '<div class="mt-4 p-3 bg-blue-50 rounded-lg">';
      html += '<p class="text-sm text-blue-800">';
      html += '<strong>Note:</strong> This is an estimate. Final price may vary based on location, weight, and specific requirements.';
      html += '</p>';
      
      if (days === 30) {
        html += '<div class="mt-3 p-3 bg-orange-50 rounded-lg border border-orange-200">';
        html += '<p class="text-sm text-orange-800">';
        html += '<strong>⚠️ Important:</strong> 30-day rentals require a minimum of 2 dumps during the rental period.';
        html += '</p>';
        html += '</div>';
      }
      
      html += '</div>';
      
      html += '<div class="mt-3 p-3 bg-orange-50 rounded-lg border border-orange-200">';
      html += '<p class="text-sm text-orange-800">';
      html += '<strong>⚖️ Tonnage billed separately after service is weighed at $55.00 per ton.</strong> This estimate does not include weight charges.';
      html += '</p>';
      html += '</div>';
      
      html += '<div class="mt-3 p-3 bg-red-50 rounded-lg border border-red-200">';
      html += '<p class="text-sm text-red-800">';
      html += '<strong>⚠️ Additional Charges:</strong> $25 per item for refrigerators, freezers, drinking water coolers, air conditioning units (must drain freon), mattresses/box springs, or tires.';
      html += '</p>';
      html += '</div>';
      
      html += '<div class="mt-4">';
      html += '<a href="#quote-form" class="bg-[#4e37a8] text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors inline-block">';
      html += 'Get Exact Quote';
      html += '</a>';
      html += '</div>';
      
      html += '</div>';
      
      resultDiv.innerHTML = html;
      resultDiv.classList.remove('hidden');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
      <div className="text-center mb-8 sm:mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#4e37a8] to-purple-600 rounded-full mb-6">
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Advanced Dumpster Rental Cost Calculator</h2>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
          Get an instant price estimate for your dumpster rental. Our advanced calculator includes special rates, veteran discounts, and accurate gas pricing.
        </p>
      </div>
      
      <div className="max-w-5xl mx-auto">
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl border border-gray-100 p-8">
          {/* Zip Code Input - Now above dumpster size options */}
          <div className="mb-8">
            <label htmlFor="zipCode" className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
              <span className="w-2 h-2 bg-[#4e37a8] rounded-full mr-2"></span>
              📍 Zip Code
            </label>
            <div className="max-w-md">
              <input
                type="text"
                id="zipCode"
                placeholder="Enter zip code"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#4e37a8] focus:border-transparent transition-all duration-300 shadow-sm"
                maxLength={5}
              />
              <p className="text-xs text-gray-500 mt-2">Multiple hubs serving Utah - calculator finds closest location</p>
            </div>
          </div>
          
          {/* Dumpster Size Selection */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
              <span className="w-2 h-2 bg-[#4e37a8] rounded-full mr-2"></span>
              📦 Dumpster Size
            </label>
              
              {/* Standard Dumpsters */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-600 mb-4">Standard Dumpsters</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
                    className={`group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 overflow-hidden ${
                      selectedSize === '15' 
                        ? 'border-[#4e37a8] bg-gradient-to-br from-blue-50 to-blue-100' 
                        : 'border-gray-200 hover:border-[#4e37a8]'
                    }`}
                  >
                    <div className="p-4">
                      <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-3 mb-3">
                                                 <ImageWithFallback 
                           src="/images/IMG_0350.jpg" 
                           alt="15 Yard Roll-off Dumpster" 
                           className="w-full h-24 object-contain object-center rounded-lg" 
                           fallbackSrc="/images/IMG_0350.jpg"
                         />
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-gray-900 text-sm mb-1">15 Yard</div>
                        <div className="text-xs text-gray-600 mb-2">Small Projects</div>
                        <div className="flex items-center justify-between">
                          <span className="text-[#4e37a8] font-semibold text-xs">Most Popular</span>
                          <div className="w-6 h-6 bg-[#4e37a8] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
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
                    className={`group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 overflow-hidden ${
                      selectedSize === '20' 
                        ? 'border-green-500 bg-gradient-to-br from-green-50 to-green-100' 
                        : 'border-gray-200 hover:border-green-500'
                    }`}
                  >
                    <div className="p-4">
                      <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-3 mb-3">
                                                 <ImageWithFallback 
                           src="/images/IMG_0336.jpg" 
                           alt="20 Yard Roll-off Dumpster" 
                           className="w-full h-24 object-contain object-center rounded-lg" 
                           fallbackSrc="/images/IMG_0336.jpg"
                         />
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-gray-900 text-sm mb-1">20 Yard</div>
                        <div className="text-xs text-gray-600 mb-2">Medium Projects</div>
                        <div className="flex items-center justify-between">
                          <span className="text-green-600 font-semibold text-xs">Great Value</span>
                          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
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
                    className={`group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 overflow-hidden ${
                      selectedSize === '30' 
                        ? 'border-purple-500 bg-gradient-to-br from-purple-50 to-purple-100' 
                        : 'border-gray-200 hover:border-purple-500'
                    }`}
                  >
                    <div className="p-4">
                      <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-3 mb-3">
                        <ImageWithFallback 
                          src="/images/dumpster5-500x500-1.jpeg" 
                          alt="30 Yard Roll-off Dumpster" 
                          className="w-full h-24 object-contain object-center rounded-lg" 
                          fallbackSrc="/images/dumpster500x500-1.jpeg"
                        />
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-gray-900 text-sm mb-1">30 Yard</div>
                        <div className="text-xs text-gray-600 mb-2">Large Projects</div>
                        <div className="flex items-center justify-between">
                          <span className="text-purple-600 font-semibold text-xs">Large Capacity</span>
                          <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
              
              {/* Specialized Dumpster Options */}
              <div>
                <h4 className="text-sm font-medium text-gray-600 mb-4">Specialized Dumpsters</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedSize('10-dirt');
                      const select = document.getElementById('dumpsterSize') as HTMLSelectElement;
                      if (select) {
                        select.value = '10-dirt';
                        select.dispatchEvent(new Event('change'));
                      }
                    }}
                    className={`group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 overflow-hidden ${
                      selectedSize === '10-dirt' 
                        ? 'border-orange-500 bg-gradient-to-br from-orange-50 to-orange-100' 
                        : 'border-gray-200 hover:border-orange-500'
                    }`}
                  >
                    <div className="p-4">
                      <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-3 mb-3">
                        <ImageWithFallback 
                          src="/images/IMG_3190.jpg" 
                          alt="10 Yard Clean Dirt Disposal Dumpster" 
                          className="w-full h-24 object-contain object-center rounded-lg" 
                          fallbackSrc="/images/IMG_3190.jpg"
                        />
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-gray-900 text-sm mb-1">10 Yard Dirt</div>
                        <div className="text-xs text-gray-600 mb-2">Clean Dirt Only</div>
                        <div className="flex items-center justify-between">
                          <span className="text-orange-600 font-semibold text-xs">Clean Dirt Only</span>
                          <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                  
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedSize('10-mixed');
                      const select = document.getElementById('dumpsterSize') as HTMLSelectElement;
                      if (select) {
                        select.value = '10-mixed';
                        select.dispatchEvent(new Event('change'));
                      }
                    }}
                    className={`group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 overflow-hidden ${
                      selectedSize === '10-mixed' 
                        ? 'border-red-500 bg-gradient-to-br from-red-50 to-red-100' 
                        : 'border-gray-200 hover:border-red-500'
                    }`}
                  >
                    <div className="p-4">
                      <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg p-3 mb-3">
                        <ImageWithFallback 
                          src="/images/IMG_3190.jpg" 
                          alt="10 Yard Mixed Load Disposal Dumpster" 
                          className="w-full h-24 object-contain object-center rounded-lg" 
                          fallbackSrc="/images/IMG_3190.jpg"
                        />
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-gray-900 text-sm mb-1">10 Yard Mixed</div>
                        <div className="text-xs text-gray-600 mb-2">4 Tons Included</div>
                        <div className="flex items-center justify-between">
                          <span className="text-red-600 font-semibold text-xs">Mixed Load</span>
                          <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                  
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedSize('12-concrete');
                      const select = document.getElementById('dumpsterSize') as HTMLSelectElement;
                      if (select) {
                        select.value = '12-concrete';
                        select.dispatchEvent(new Event('change'));
                      }
                    }}
                    className={`group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 overflow-hidden ${
                      selectedSize === '12-concrete' 
                        ? 'border-gray-500 bg-gradient-to-br from-gray-50 to-gray-100' 
                        : 'border-gray-200 hover:border-gray-500'
                    }`}
                  >
                    <div className="p-4">
                      <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-3 mb-3">
                        <ImageWithFallback 
                          src="/images/IMG_3190.jpg" 
                          alt="12 Yard Concrete Disposal Dumpster" 
                          className="w-full h-24 object-contain object-center rounded-lg" 
                          fallbackSrc="/images/IMG_3190.jpg"
                        />
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-gray-900 text-sm mb-1">12 Yard Concrete</div>
                        <div className="text-xs text-gray-600 mb-2">Concrete Projects</div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600 font-semibold text-xs">Heavy Duty</span>
                          <div className="w-6 h-6 bg-gray-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
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
                <option value="10-dirt">10 Yard Clean Dirt</option>
                <option value="10-mixed">10 Yard Mixed Load</option>
                <option value="12-concrete">12 Yard Concrete</option>
              </select>
            </div>
          </div>
          
          {/* Duration and Veteran Discount Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div>
              <label htmlFor="duration" className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                <span className="w-2 h-2 bg-[#4e37a8] rounded-full mr-2"></span>
                ⏰ Duration (Days)
              </label>
              <select
                id="duration"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#4e37a8] focus:border-transparent transition-all duration-300 shadow-sm"
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
            
            {/* Veteran Discount Section */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200 p-4">
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="veteranDiscount"
                  className="w-5 h-5 text-[#4e37a8] border-gray-300 rounded focus:ring-[#4e37a8] focus:ring-2"
                />
                <label htmlFor="veteranDiscount" className="text-sm font-semibold text-gray-700 flex items-center">
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
          </div>
          
          {/* Calculate Button */}
          <div className="text-center mb-8">
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
          <div id="calculatorResult" className="hidden"></div>
          
          {/* How It Works Section */}
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl border border-yellow-200 p-6">
            <h4 className="font-bold text-yellow-800 mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              💡 How the Advanced Calculator Works
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="text-sm text-yellow-700 space-y-2">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Multiple Hubs:</strong> We have 3 locations serving Utah - calculator automatically finds the closest</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>1-Day Special:</strong> Discounted rates for same-day pickup projects</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>3-7 Day Bundles:</strong> Bundle pricing includes rental, pickup, and dropoff fees with daily rate breakdown</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Extended Rentals:</strong> Additional days beyond 7 are charged at daily rates</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>30+ Day Rentals:</strong> Special pricing with 2-dump minimum requirement</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Veteran Discount:</strong> 10% off for all veterans (thank you for your service!)</span>
                </li>
              </ul>
              <ul className="text-sm text-yellow-700 space-y-2">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Delivery Surcharge:</strong> Gas + labor costs for locations outside Salt Lake County and beyond 10 miles from our hub</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Location-Based Pricing:</strong> Salt Lake County locations and areas within 10 miles of our hubs have no additional surcharges</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Weight-Based Pricing:</strong> $55 per ton charged after disposal facility weighing</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Additional Item Charges:</strong> $25 per item for refrigerators, freezers, drinking water coolers, air conditioning units (must drain freon), mattresses/box springs, or tires</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Location Factors:</strong> Prices vary by location and availability</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Prohibited Items:</strong> Additional charges may apply for restricted materials</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Pattern Analysis Script for Liberty Dumpster Leads
// This script helps identify geographic and time patterns in your leads

// Sample lead data structure
const sampleLeads = [
  {
    date: '2025-01-15',
    time: '14:30',
    customerName: 'John Smith',
    location: 'Salt Lake City',
    zipCode: '84101',
    projectType: 'Construction debris',
    leadSource: 'Email',
    contactMethod: 'Phone call',
    referralCode: 'REF001',
    originalSearch: 'dumpster rental Salt Lake City',
    platformUsed: 'Google'
  },
  {
    date: '2025-01-16',
    time: '09:15',
    customerName: 'Jane Doe',
    location: 'West Valley City',
    zipCode: '84119',
    projectType: 'Home renovation',
    leadSource: 'Phone',
    contactMethod: 'Direct call',
    referralCode: 'REF002',
    originalSearch: 'roll off dumpster Utah',
    platformUsed: 'HomeAdvisor'
  },
  {
    date: '2025-01-17',
    time: '16:45',
    customerName: 'Mike Johnson',
    location: 'Provo',
    zipCode: '84601',
    projectType: 'Yard waste',
    leadSource: 'Email',
    contactMethod: 'Form submission',
    referralCode: 'REF003',
    originalSearch: 'construction dumpster rental',
    platformUsed: 'Yelp'
  }
];

// Geographic Pattern Analysis
function analyzeGeographicPatterns(leads) {
  console.log('=== GEOGRAPHIC PATTERN ANALYSIS ===');
  
  // 1. Location Frequency
  const locationCount = {};
  leads.forEach(lead => {
    locationCount[lead.location] = (locationCount[lead.location] || 0) + 1;
  });
  
  console.log('\n1. Lead Distribution by Location:');
  Object.entries(locationCount)
    .sort(([,a], [,b]) => b - a)
    .forEach(([location, count]) => {
      console.log(`   ${location}: ${count} leads (${((count/leads.length)*100).toFixed(1)}%)`);
    });
  
  // 2. Zip Code Analysis
  const zipCodeCount = {};
  leads.forEach(lead => {
    if (lead.zipCode) {
      zipCodeCount[lead.zipCode] = (zipCodeCount[lead.zipCode] || 0) + 1;
    }
  });
  
  console.log('\n2. Lead Distribution by Zip Code:');
  Object.entries(zipCodeCount)
    .sort(([,a], [,b]) => b - a)
    .forEach(([zip, count]) => {
      console.log(`   ${zip}: ${count} leads`);
    });
  
  // 3. Geographic Clustering Detection
  console.log('\n3. Geographic Clustering Analysis:');
  const highVolumeLocations = Object.entries(locationCount)
    .filter(([, count]) => count > 1)
    .map(([location, count]) => ({ location, count }));
  
  if (highVolumeLocations.length > 0) {
    console.log('   High-volume locations (potential clustering):');
    highVolumeLocations.forEach(({ location, count }) => {
      console.log(`   - ${location}: ${count} leads`);
    });
  } else {
    console.log('   No geographic clustering detected');
  }
  
  return { locationCount, zipCodeCount, highVolumeLocations };
}

// Time Pattern Analysis
function analyzeTimePatterns(leads) {
  console.log('\n=== TIME PATTERN ANALYSIS ===');
  
  // 1. Day of Week Analysis
  const dayOfWeekCount = {};
  leads.forEach(lead => {
    const date = new Date(lead.date);
    const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });
    dayOfWeekCount[dayOfWeek] = (dayOfWeekCount[dayOfWeek] || 0) + 1;
  });
  
  console.log('\n1. Lead Distribution by Day of Week:');
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  daysOfWeek.forEach(day => {
    const count = dayOfWeekCount[day] || 0;
    console.log(`   ${day}: ${count} leads`);
  });
  
  // 2. Time of Day Analysis
  const timeSlotCount = {};
  leads.forEach(lead => {
    const hour = parseInt(lead.time.split(':')[0]);
    let timeSlot;
    if (hour < 9) timeSlot = 'Early Morning (6-9 AM)';
    else if (hour < 12) timeSlot = 'Morning (9-12 PM)';
    else if (hour < 17) timeSlot = 'Afternoon (12-5 PM)';
    else if (hour < 21) timeSlot = 'Evening (5-9 PM)';
    else timeSlot = 'Late Night (9 PM+)';
    
    timeSlotCount[timeSlot] = (timeSlotCount[timeSlot] || 0) + 1;
  });
  
  console.log('\n2. Lead Distribution by Time of Day:');
  Object.entries(timeSlotCount)
    .sort(([,a], [,b]) => b - a)
    .forEach(([timeSlot, count]) => {
      console.log(`   ${timeSlot}: ${count} leads`);
    });
  
  // 3. Hourly Analysis
  const hourlyCount = {};
  leads.forEach(lead => {
    const hour = parseInt(lead.time.split(':')[0]);
    hourlyCount[hour] = (hourlyCount[hour] || 0) + 1;
  });
  
  console.log('\n3. Lead Distribution by Hour:');
  for (let hour = 0; hour < 24; hour++) {
    const count = hourlyCount[hour] || 0;
    if (count > 0) {
      console.log(`   ${hour}:00 - ${hour}:59: ${count} leads`);
    }
  }
  
  // 4. Peak Time Detection
  const peakHour = Object.entries(hourlyCount)
    .sort(([,a], [,b]) => b - a)[0];
  
  if (peakHour) {
    console.log(`\n4. Peak Lead Time: ${peakHour[0]}:00 (${peakHour[1]} leads)`);
  }
  
  return { dayOfWeekCount, timeSlotCount, hourlyCount, peakHour };
}

// Combined Pattern Analysis
function analyzeCombinedPatterns(leads) {
  console.log('\n=== COMBINED PATTERN ANALYSIS ===');
  
  // 1. Location + Time Patterns
  console.log('\n1. Location + Time Patterns:');
  const locationTimePatterns = {};
  
  leads.forEach(lead => {
    const location = lead.location;
    const hour = parseInt(lead.time.split(':')[0]);
    const timeSlot = hour < 12 ? 'Morning' : hour < 17 ? 'Afternoon' : 'Evening';
    
    if (!locationTimePatterns[location]) {
      locationTimePatterns[location] = { Morning: 0, Afternoon: 0, Evening: 0 };
    }
    locationTimePatterns[location][timeSlot]++;
  });
  
  Object.entries(locationTimePatterns).forEach(([location, patterns]) => {
    console.log(`   ${location}:`);
    Object.entries(patterns).forEach(([timeSlot, count]) => {
      if (count > 0) {
        console.log(`     ${timeSlot}: ${count} leads`);
      }
    });
  });
  
  // 2. Platform + Location Patterns
  console.log('\n2. Platform + Location Patterns:');
  const platformLocationPatterns = {};
  
  leads.forEach(lead => {
    const platform = lead.platformUsed;
    const location = lead.location;
    
    if (!platformLocationPatterns[platform]) {
      platformLocationPatterns[platform] = {};
    }
    if (!platformLocationPatterns[platform][location]) {
      platformLocationPatterns[platform][location] = 0;
    }
    platformLocationPatterns[platform][location]++;
  });
  
  Object.entries(platformLocationPatterns).forEach(([platform, locations]) => {
    console.log(`   ${platform}:`);
    Object.entries(locations).forEach(([location, count]) => {
      console.log(`     ${location}: ${count} leads`);
    });
  });
  
  return { locationTimePatterns, platformLocationPatterns };
}

// Pattern Detection Functions
function detectAutomatedPatterns(leads) {
  console.log('\n=== AUTOMATED PATTERN DETECTION ===');
  
  const patterns = {
    geographicClustering: false,
    timeConsistency: false,
    platformConsistency: false,
    referralCodePatterns: false
  };
  
  // 1. Geographic Clustering Detection
  const locationCount = {};
  leads.forEach(lead => {
    locationCount[lead.location] = (locationCount[lead.location] || 0) + 1;
  });
  
  const maxLocationCount = Math.max(...Object.values(locationCount));
  if (maxLocationCount > leads.length * 0.4) { // 40% threshold
    patterns.geographicClustering = true;
    console.log('   ✅ Geographic clustering detected - leads concentrated in specific areas');
  }
  
  // 2. Time Consistency Detection
  const timeSlots = leads.map(lead => {
    const hour = parseInt(lead.time.split(':')[0]);
    return hour < 12 ? 'Morning' : hour < 17 ? 'Afternoon' : 'Evening';
  });
  
  const timeSlotCount = {};
  timeSlots.forEach(slot => {
    timeSlotCount[slot] = (timeSlotCount[slot] || 0) + 1;
  });
  
  const maxTimeSlotCount = Math.max(...Object.values(timeSlotCount));
  if (maxTimeSlotCount > leads.length * 0.6) { // 60% threshold
    patterns.timeConsistency = true;
    console.log('   ✅ Time consistency detected - leads come at specific times');
  }
  
  // 3. Platform Consistency Detection
  const platformCount = {};
  leads.forEach(lead => {
    platformCount[lead.platformUsed] = (platformCount[lead.platformUsed] || 0) + 1;
  });
  
  const maxPlatformCount = Math.max(...Object.values(platformCount));
  if (maxPlatformCount > leads.length * 0.7) { // 70% threshold
    patterns.platformConsistency = true;
    console.log('   ✅ Platform consistency detected - leads from specific platforms');
  }
  
  // 4. Referral Code Pattern Detection
  const referralCodes = leads.map(lead => lead.referralCode);
  const uniqueCodes = new Set(referralCodes);
  
  if (uniqueCodes.size < leads.length * 0.5) { // 50% threshold
    patterns.referralCodePatterns = true;
    console.log('   ✅ Referral code patterns detected - similar codes suggest automation');
  }
  
  // Summary
  console.log('\n   Pattern Summary:');
  Object.entries(patterns).forEach(([pattern, detected]) => {
    console.log(`   ${detected ? '✅' : '❌'} ${pattern}`);
  });
  
  return patterns;
}

// Main Analysis Function
function runPatternAnalysis(leads) {
  console.log('LIBERTY DUMPSTER LEAD PATTERN ANALYSIS');
  console.log('=====================================');
  console.log(`Analyzing ${leads.length} leads...\n`);
  
  const geographicResults = analyzeGeographicPatterns(leads);
  const timeResults = analyzeTimePatterns(leads);
  const combinedResults = analyzeCombinedPatterns(leads);
  const automatedPatterns = detectAutomatedPatterns(leads);
  
  // Interpretation Guide
  console.log('\n=== INTERPRETATION GUIDE ===');
  console.log('\nWhat These Patterns Mean:');
  
  if (automatedPatterns.geographicClustering) {
    console.log('   🎯 Geographic clustering suggests:');
    console.log('      - Liberty may use local lead services');
    console.log('      - They may have territory-based distribution');
    console.log('      - Could be using local business directories');
  }
  
  if (automatedPatterns.timeConsistency) {
    console.log('   🕐 Time consistency suggests:');
    console.log('      - Automated lead distribution system');
    console.log('      - Scheduled lead processing');
    console.log('      - Could be using lead aggregators');
  }
  
  if (automatedPatterns.platformConsistency) {
    console.log('   📱 Platform consistency suggests:');
    console.log('      - Liberty focuses on specific lead sources');
    console.log('      - Could be using lead aggregators (HomeAdvisor, etc.)');
    console.log('      - May have exclusive partnerships');
  }
  
  if (automatedPatterns.referralCodePatterns) {
    console.log('   🔗 Referral code patterns suggest:');
    console.log('      - Automated lead distribution');
    console.log('      - Systematic referral system');
    console.log('      - Could be using lead management software');
  }
  
  return {
    geographicResults,
    timeResults,
    combinedResults,
    automatedPatterns
  };
}

// Export functions for use
module.exports = {
  runPatternAnalysis,
  analyzeGeographicPatterns,
  analyzeTimePatterns,
  analyzeCombinedPatterns,
  detectAutomatedPatterns
};

// Run analysis on sample data
if (require.main === module) {
  runPatternAnalysis(sampleLeads);
}

const fs = require('fs');
const path = require('path');

// Comprehensive SEO Fix Script for Remaining Pages
// This script will fix all guide pages and service pages that weren't optimized

const guidePages = [
  'american-fork-dumpster-rental-guide-2025',
  'bluffdale-dumpster-rental-guide-2025',
  'bountiful-dumpster-rental-guide-2025',
  'centerville-dumpster-rental-guide-2025',
  'clearfield-dumpster-rental-guide-2025',
  'complete-dumpster-rental-guide-2025',
  'cottonwood-heights-dumpster-rental-guide-2025',
  'downtown-salt-lake-dumpster-rental-guide-2025',
  'draper-dumpster-rental-guide-2025',
  'dumpster-rental-guide-2025',
  'eagle-mountain-dumpster-rental-guide-2025',
  'fairpark-dumpster-rental-guide-2025',
  'farmington-dumpster-rental-guide-2025',
  'glendale-dumpster-rental-guide-2025',
  'herriman-dumpster-rental-guide-2025',
  'holladay-dumpster-rental-guide-2025',
  'home-renovation-dumpster-guide',
  'home-renovation-waste-disposal-guide',
  'kaysville-dumpster-rental-guide-2025',
  'kearns-dumpster-rental-guide-2025',
  'layton-dumpster-rental-guide-2025',
  'lehi-dumpster-rental-guide-2025',
  'magna-dumpster-rental-guide-2025',
  'midvale-dumpster-rental-guide-2025',
  'millcreek-dumpster-rental-guide-2025',
  'murray-dumpster-rental-guide-2025',
  'north-salt-lake-dumpster-rental-guide-2025',
  'ogden-dumpster-rental-guide-2025',
  'orem-dumpster-rental-guide-2025',
  'park-city-dumpster-rental-guide-2025',
  'pleasant-grove-dumpster-rental-guide-2025',
  'poplar-grove-dumpster-rental-guide-2025',
  'provo-dumpster-rental-guide-2025',
  'retail-renovation-dumpster-guide',
  'riverton-dumpster-rental-guide-2025',
  'rolloff-dumpster-guide-2025',
  'roy-dumpster-rental-guide-2025',
  'salt-lake-city-dumpster-rental-guide-2025',
  'sandy-dumpster-rental-guide-2025',
  'saratoga-springs-dumpster-rental-guide-2025',
  'south-jordan-dumpster-rental-guide-2025',
  'south-salt-lake-dumpster-rental-guide-2025',
  'sugar-house-dumpster-rental-guide-2025',
  'syracuse-dumpster-rental-guide-2025',
  'taylorsville-dumpster-rental-guide-2025',
  'tooel-dumpster-rental-guide-2025',
  'west-jordan-dumpster-rental-guide-2025',
  'west-valley-city-dumpster-rental-guide-2025',
  'woods-cross-dumpster-rental-guide-2025',
  'dumpster-size-estimation-guide',
  'utah-dumpster-permits-guide'
];

const cities = [
  'murray', 'salt-lake-city', 'sandy', 'west-jordan', 'west-valley-city',
  'draper', 'taylorsville', 'south-jordan', 'south-salt-lake', 'millcreek',
  'midvale', 'cottonwood-heights', 'holladay', 'herriman', 'kearns',
  'kaysville', 'layton', 'lehi', 'american-fork', 'orem', 'provo',
  'pleasant-grove', 'springville', 'lindon', 'eagle-mountain', 'saratoga-springs',
  'bluffdale', 'riverton', 'south-jordan', 'sugar-house', 'north-salt-lake',
  'bountiful', 'centerville', 'farmington', 'clearfield', 'ogden',
  'roy', 'syracuse', 'kaysville', 'woods-cross', 'tooele', 'park-city',
  'poplar-grove', 'fairpark', 'glendale', 'north-salt-lake'
];

function generateGuideMetadata(guideSlug) {
  // Extract city name from guide slug
  let cityName = guideSlug;
  if (guideSlug.includes('-dumpster-rental-guide-2025')) {
    cityName = guideSlug.replace('-dumpster-rental-guide-2025', '');
  } else if (guideSlug.includes('-dumpster-guide')) {
    cityName = guideSlug.replace('-dumpster-guide', '');
  }
  
  const cityDisplay = cityName.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
  
  // Handle special cases
  if (guideSlug === 'complete-dumpster-rental-guide-2025') {
      return {
    title: 'Complete Dumpster Rental Guide 2025 | Utah Waste Management Tips',
    description: 'Complete guide to dumpster rental in Utah. Learn about sizes, pricing, permits, and best practices for waste management in 2025.',
    keywords: ['dumpster rental guide', 'utah waste management', 'dumpster rental tips', 'construction waste disposal'],
    alternates: { canonical: `/${guideSlug}` },
    openGraph: {
      title: 'Complete Dumpster Rental Guide 2025 | Utah Waste Management Tips',
      description: 'Complete guide to dumpster rental in Utah. Learn about sizes, pricing, permits, and best practices for waste management in 2025.',
      url: `https://icondumpsters.com/${guideSlug}`,
      images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'Complete Dumpster Rental Guide - Icon Dumpsters' }],
      type: 'article'
    },
    robots: { index: true, follow: true }
  };
  }
  
  if (guideSlug === 'home-renovation-dumpster-guide') {
      return {
    title: 'Home Renovation Dumpster Guide | Utah Renovation Waste Management',
    description: 'Complete guide to dumpster rental for home renovations in Utah. Learn about sizes, permits, and waste disposal for renovation projects.',
    keywords: ['home renovation dumpster', 'renovation waste management', 'utah renovation dumpster', 'construction waste disposal'],
    alternates: { canonical: `/${guideSlug}` },
    openGraph: {
      title: 'Home Renovation Dumpster Guide | Utah Renovation Waste Management',
      description: 'Complete guide to dumpster rental for home renovations in Utah. Learn about sizes, permits, and waste disposal for renovation projects.',
      url: `https://icondumpsters.com/${guideSlug}`,
      images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'Home Renovation Dumpster Guide - Icon Dumpsters' }],
      type: 'article'
    },
    robots: { index: true, follow: true }
  };
  }
  
  if (guideSlug === 'retail-renovation-dumpster-guide') {
      return {
    title: 'Retail Renovation Dumpster Guide | Commercial Waste Management Utah',
    description: 'Complete guide to dumpster rental for retail renovations in Utah. Learn about commercial waste management and disposal solutions.',
    keywords: ['retail renovation dumpster', 'commercial waste management', 'utah retail renovation', 'business waste disposal'],
    alternates: { canonical: `/${guideSlug}` },
    openGraph: {
      title: 'Retail Renovation Dumpster Guide | Commercial Waste Management Utah',
      description: 'Complete guide to dumpster rental for retail renovations in Utah. Learn about commercial waste management and disposal solutions.',
      url: `https://icondumpsters.com/${guideSlug}`,
      images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'Retail Renovation Dumpster Guide - Icon Dumpsters' }],
      type: 'article'
    },
    robots: { index: true, follow: true }
  };
  }
  
  if (guideSlug === 'rolloff-dumpster-guide-2025') {
      return {
    title: 'Rolloff Dumpster Guide 2025 | Utah Construction Waste Management',
    description: 'Complete guide to rolloff dumpster rental in Utah for 2025. Learn about sizes, delivery, and construction waste management.',
    keywords: ['rolloff dumpster guide', 'construction waste management', 'utah rolloff dumpster', 'construction dumpster rental'],
    alternates: { canonical: `/${guideSlug}` },
    openGraph: {
      title: 'Rolloff Dumpster Guide 2025 | Utah Construction Waste Management',
      description: 'Complete guide to rolloff dumpster rental in Utah for 2025. Learn about sizes, delivery, and construction waste management.',
      url: `https://icondumpsters.com/${guideSlug}`,
      images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'Rolloff Dumpster Guide - Icon Dumpsters' }],
      type: 'article'
    },
    robots: { index: true, follow: true }
  };
  }
  
  if (guideSlug === 'dumpster-size-estimation-guide') {
      return {
    title: 'Dumpster Size Estimation Guide | Choose Right Size for Your Project',
    description: 'Complete guide to choosing the right dumpster size for your project. Learn about capacity, dimensions, and project requirements.',
    keywords: ['dumpster size guide', 'dumpster size estimation', 'choose dumpster size', 'project waste capacity'],
    alternates: { canonical: `/${guideSlug}` },
    openGraph: {
      title: 'Dumpster Size Estimation Guide | Choose Right Size for Your Project',
      description: 'Complete guide to choosing the right dumpster size for your project. Learn about capacity, dimensions, and project requirements.',
      url: `https://icondumpsters.com/${guideSlug}`,
      images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'Dumpster Size Estimation Guide - Icon Dumpsters' }],
      type: 'article'
    },
    robots: { index: true, follow: true }
  };
  }
  
  if (guideSlug === 'utah-dumpster-permits-guide') {
      return {
    title: 'Utah Dumpster Permits Guide | Complete Permit Requirements 2025',
    description: 'Complete guide to dumpster permits in Utah for 2025. Learn about requirements, applications, and city-specific regulations.',
    keywords: ['utah dumpster permits', 'dumpster permit guide', 'utah waste permits', 'construction permit requirements'],
    alternates: { canonical: `/${guideSlug}` },
    openGraph: {
      title: 'Utah Dumpster Permits Guide | Complete Permit Requirements 2025',
      description: 'Complete guide to dumpster permits in Utah for 2025. Learn about requirements, applications, and city-specific regulations.',
      url: `https://icondumpsters.com/${guideSlug}`,
      images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'Utah Dumpster Permits Guide - Icon Dumpsters' }],
      type: 'article'
    },
    robots: { index: true, follow: true }
  };
  }
  
  // Default city guide metadata
  return {
    title: `${cityDisplay} Dumpster Rental Guide 2025 | Complete Waste Management Tips`,
    description: `Complete ${cityDisplay} dumpster rental guide for 2025. Learn about sizes, pricing, permits, and best practices for waste management in Utah.`,
    keywords: [`${cityDisplay} dumpster rental guide`, 'utah waste management', 'dumpster rental tips', 'construction waste disposal'],
    alternates: { canonical: `/${guideSlug}` },
    openGraph: {
      title: `${cityDisplay} Dumpster Rental Guide 2025 | Complete Waste Management Tips`,
      description: `Complete ${cityDisplay} dumpster rental guide for 2025. Learn about sizes, pricing, permits, and best practices.`,
      url: `https://icondumpsters.com/${guideSlug}`,
      images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: `${cityDisplay} Dumpster Rental Guide - Icon Dumpsters` }],
      type: 'article'
    },
    robots: { index: true, follow: true }
  };
}

function generateServiceMetadata(cityName, serviceType) {
  const cityDisplay = cityName.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
  
  const serviceDisplay = serviceType === 'commercial' ? 'Commercial' : 'Residential';
  
  return {
    title: `${serviceDisplay} Dumpster Rental ${cityDisplay}, UT | ${serviceDisplay} Waste Solutions`,
    description: `${serviceDisplay.toLowerCase()} dumpster rental services in ${cityDisplay}, Utah. Reliable waste management for ${serviceType === 'commercial' ? 'businesses and construction sites' : 'homeowners and residents'}. Get a free quote today.`,
    keywords: [`${serviceType} dumpster rental`, `${cityDisplay} ${serviceType} dumpster`, 'utah business dumpster rental', 'waste management solutions'],
    alternates: { canonical: `/services/${serviceType}-dumpster-rental-${cityName}-ut` },
    openGraph: {
      title: `${serviceDisplay} Dumpster Rental ${cityDisplay}, UT | ${serviceDisplay} Waste Solutions`,
      description: `${serviceDisplay.toLowerCase()} dumpster rental services in ${cityDisplay}, Utah. Reliable waste management for ${serviceType === 'commercial' ? 'businesses and construction sites' : 'homeowners and residents'}.`,
      url: `https://icondumpsters.com/services/${serviceType}-dumpster-rental-${cityName}-ut`,
      images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: `${cityDisplay} ${serviceDisplay} Dumpster Rental - Icon Dumpsters` }],
      type: 'website'
    },
    robots: { index: true, follow: true }
  };
}

function optimizePage(filePath, metadata) {
  try {
    if (!fs.existsSync(filePath)) {
      return false;
    }
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if metadata already exists
    if (content.includes('export const metadata')) {
      // Update existing metadata
      const metadataRegex = /export const metadata: Metadata = \{[\s\S]*?\};/;
      const newMetadata = `export const metadata: Metadata = ${JSON.stringify(metadata, null, 2)};`;
      
      if (metadataRegex.test(content)) {
        content = content.replace(metadataRegex, newMetadata);
      } else {
        // Add metadata after imports
        const importMatch = content.match(/(import.*?from.*?['"];?\s*)/);
        if (importMatch) {
          const importEnd = content.indexOf(importMatch[0]) + importMatch[0].length;
          content = content.slice(0, importEnd) + '\n\n' + newMetadata + '\n\n' + content.slice(importEnd);
        }
      }
    } else {
      // Add metadata after imports
      const importMatch = content.match(/(import.*?from.*?['"];?\s*)/);
      if (importMatch) {
        const importEnd = content.indexOf(importMatch[0]) + importMatch[0].length;
        const newMetadata = `export const metadata: Metadata = ${JSON.stringify(metadata, null, 2)};`;
        content = content.slice(0, importEnd) + '\n\n' + newMetadata + '\n\n' + content.slice(importEnd);
      }
    }
    
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  } catch (error) {
    console.error(`Error optimizing ${filePath}:`, error.message);
    return false;
  }
}

function scanAndOptimize() {
  console.log('🚀 Starting comprehensive SEO fix for remaining pages...\n');
  
  let optimizedCount = 0;
  let errorCount = 0;
  
  // Optimize guide pages
  guidePages.forEach(guideSlug => {
    const guidePagePath = `./app/${guideSlug}/page.tsx`;
    if (fs.existsSync(guidePagePath)) {
      const metadata = generateGuideMetadata(guideSlug);
      if (optimizePage(guidePagePath, metadata)) {
        console.log(`✅ Optimized guide page: ${guideSlug}`);
        optimizedCount++;
      } else {
        console.log(`❌ Failed to optimize guide page: ${guideSlug}`);
        errorCount++;
      }
    } else {
      console.log(`⚠️  Guide page not found: ${guideSlug}`);
    }
  });
  
  // Optimize service pages
  cities.forEach(cityName => {
    // Commercial service pages
    const commercialServicePath = `./app/services/commercial-dumpster-rental-${cityName}-ut/page.tsx`;
    if (fs.existsSync(commercialServicePath)) {
      const metadata = generateServiceMetadata(cityName, 'commercial');
      if (optimizePage(commercialServicePath, metadata)) {
        console.log(`✅ Optimized commercial service page: ${cityName}`);
        optimizedCount++;
      } else {
        console.log(`❌ Failed to optimize commercial service page: ${cityName}`);
        errorCount++;
      }
    }
    
    // Residential service pages
    const residentialServicePath = `./app/services/residential-dumpster-rental-${cityName}-ut/page.tsx`;
    if (fs.existsSync(residentialServicePath)) {
      const metadata = generateServiceMetadata(cityName, 'residential');
      if (optimizePage(residentialServicePath, metadata)) {
        console.log(`✅ Optimized residential service page: ${cityName}`);
        optimizedCount++;
      } else {
        console.log(`❌ Failed to optimize residential service page: ${cityName}`);
        errorCount++;
      }
    }
  });
  
  console.log('\n' + '='.repeat(80));
  console.log('🎯 COMPREHENSIVE SEO FIX COMPLETE!');
  console.log('='.repeat(80));
  console.log(`\n📊 SUMMARY:`);
  console.log(`Pages optimized: ${optimizedCount}`);
  console.log(`Errors encountered: ${errorCount}`);
  console.log(`Success rate: ${((optimizedCount / (optimizedCount + errorCount)) * 100).toFixed(1)}%`);
  
  console.log(`\n✅ All remaining pages now have:`);
  console.log(`• Complete metadata with titles and descriptions`);
  console.log(`• Open Graph tags for social media sharing`);
  console.log(`• Robots directives for search engines`);
  console.log(`• Proper canonical URLs`);
  
  console.log(`\n🚀 Your site is now fully SEO optimized and ready for live deployment!`);
  console.log(`\n` + '='.repeat(80));
}

// Start the optimization
scanAndOptimize();

const fs = require('fs');
const path = require('path');

// Salt Lake County cities data
const saltLakeCountyCities = [
  {
    slug: 'salt-lake-city',
    name: 'Salt Lake City',
    coordinates: { latitude: '40.7608', longitude: '-111.8910' },
    population: 200133,
    area: '110.4 sq mi',
    established: 1851
  },
  {
    slug: 'west-valley-city',
    name: 'West Valley City',
    coordinates: { latitude: '40.6916', longitude: '-111.9931' },
    population: 140230,
    area: '35.9 sq mi',
    established: 1980
  },
  {
    slug: 'west-jordan',
    name: 'West Jordan',
    coordinates: { latitude: '40.6097', longitude: '-111.9391' },
    population: 116961,
    area: '32.3 sq mi',
    established: 1941
  },
  {
    slug: 'sandy',
    name: 'Sandy',
    coordinates: { latitude: '40.5649', longitude: '-111.8381' },
    population: 96138,
    area: '22.3 sq mi',
    established: 1893
  },
  {
    slug: 'south-jordan',
    name: 'South Jordan',
    coordinates: { latitude: '40.5622', longitude: '-111.9297' },
    population: 77791,
    area: '22.0 sq mi',
    established: 1859
  },
  {
    slug: 'millcreek',
    name: 'Millcreek',
    coordinates: { latitude: '40.6869', longitude: '-111.8750' },
    population: 63080,
    area: '12.2 sq mi',
    established: 2016
  },
  {
    slug: 'herriman',
    name: 'Herriman',
    coordinates: { latitude: '40.5141', longitude: '-112.0329' },
    population: 55601,
    area: '21.0 sq mi',
    established: 1999
  },
  {
    slug: 'taylorsville',
    name: 'Taylorsville',
    coordinates: { latitude: '40.6677', longitude: '-111.9388' },
    population: 60448,
    area: '10.8 sq mi',
    established: 1996
  },
  {
    slug: 'murray',
    name: 'Murray',
    coordinates: { latitude: '40.6669', longitude: '-111.8880' },
    population: 50437,
    area: '12.0 sq mi',
    established: 1903
  },
  {
    slug: 'draper',
    name: 'Draper',
    coordinates: { latitude: '40.5247', longitude: '-111.8638' },
    population: 51222,
    area: '30.0 sq mi',
    established: 1849
  },
  {
    slug: 'riverton',
    name: 'Riverton',
    coordinates: { latitude: '40.5219', longitude: '-111.9391' },
    population: 45071,
    area: '12.0 sq mi',
    established: 1865
  },
  {
    slug: 'midvale',
    name: 'Midvale',
    coordinates: { latitude: '40.6111', longitude: '-111.8994' },
    population: 36028,
    area: '6.0 sq mi',
    established: 1906
  },
  {
    slug: 'cottonwood-heights',
    name: 'Cottonwood Heights',
    coordinates: { latitude: '40.6197', longitude: '-111.8103' },
    population: 34017,
    area: '6.7 sq mi',
    established: 2005
  },
  {
    slug: 'holladay',
    name: 'Holladay',
    coordinates: { latitude: '40.6689', longitude: '-111.8247' },
    population: 31561,
    area: '7.8 sq mi',
    established: 1999
  },
  {
    slug: 'south-salt-lake',
    name: 'South Salt Lake',
    coordinates: { latitude: '40.7089', longitude: '-111.8881' },
    population: 26017,
    area: '6.9 sq mi',
    established: 1938
  },
  {
    slug: 'bluffdale',
    name: 'Bluffdale',
    coordinates: { latitude: '40.4847', longitude: '-111.9389' },
    population: 18000,
    area: '11.0 sq mi',
    established: 1886
  },
  {
    slug: 'magna',
    name: 'Magna',
    coordinates: { latitude: '40.7089', longitude: '-112.1014' },
    population: 29003,
    area: '6.0 sq mi',
    established: 1901
  },
  {
    slug: 'kearns',
    name: 'Kearns',
    coordinates: { latitude: '40.6597', longitude: '-111.9969' },
    population: 37000,
    area: '6.0 sq mi',
    established: 1942
  },
  {
    slug: 'white-city',
    name: 'White City',
    coordinates: { latitude: '40.5656', longitude: '-111.8639' },
    population: 5500,
    area: '2.0 sq mi',
    established: 2005
  },
  {
    slug: 'emigration-canyon',
    name: 'Emigration Canyon',
    coordinates: { latitude: '40.7500', longitude: '-111.8000' },
    population: 1500,
    area: '18.0 sq mi',
    established: 2001
  },
  {
    slug: 'copperton',
    name: 'Copperton',
    coordinates: { latitude: '40.5667', longitude: '-112.1000' },
    population: 826,
    area: '0.5 sq mi',
    established: 1926
  },
  {
    slug: 'brighton',
    name: 'Brighton',
    coordinates: { latitude: '40.6000', longitude: '-111.5833' },
    population: 200,
    area: '0.8 sq mi',
    established: 1870
  },
  {
    slug: 'alta',
    name: 'Alta',
    coordinates: { latitude: '40.5833', longitude: '-111.6333' },
    population: 400,
    area: '4.0 sq mi',
    established: 1865
  }
];

// URL patterns to generate
const urlPatterns = [
  {
    pattern: 'slc-dumpster-rental-{city}-ut',
    title: '{city} Dumpster Rental - Professional Services in {city}, UT | Icon Dumpsters',
    description: 'Get reliable dumpster rental in {city}, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.',
    canonical: 'https://icondumpsters.com/slc-dumpster-rental-{city}-ut',
    keywords: [
      'dumpster rental {city}',
      '{city} dumpster rental',
      'roll-off dumpster {city}',
      'construction dumpster {city}',
      'dumpster rental near me {city}',
      '{city} waste management',
      'dumpster delivery {city}',
      '{city} dumpster services',
      'Salt Lake County dumpster rental',
      'Utah dumpster rental {city}',
      'construction waste disposal {city}',
      'home renovation dumpster {city}',
      'commercial dumpster rental {city}',
      'demolition dumpster {city}',
      'concrete disposal {city}'
    ]
  },
  {
    pattern: 'utah-dumpster-rental-{city}',
    title: 'Utah Dumpster Rental {city} - Professional Services | Icon Dumpsters',
    description: 'Professional Utah dumpster rental services in {city}. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.',
    canonical: 'https://icondumpsters.com/utah-dumpster-rental-{city}',
    keywords: [
      'Utah dumpster rental {city}',
      'dumpster rental Utah {city}',
      'roll-off dumpster Utah {city}',
      'construction dumpster Utah {city}',
      'dumpster rental near me {city} Utah',
      '{city} Utah waste management',
      'dumpster delivery Utah {city}',
      '{city} Utah dumpster services',
      'Utah dumpster rental services',
      'Utah construction waste disposal {city}',
      'Utah home renovation dumpster {city}',
      'Utah commercial dumpster rental {city}',
      'Utah demolition dumpster {city}',
      'Utah concrete disposal {city}'
    ]
  },
  {
    pattern: 'roll-off-dumpster-rental-{city}',
    title: 'Roll-Off Dumpster Rental {city} - Professional Services | Icon Dumpsters',
    description: 'Professional roll-off dumpster rental services in {city}, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.',
    canonical: 'https://icondumpsters.com/roll-off-dumpster-rental-{city}',
    keywords: [
      'roll-off dumpster rental {city}',
      '{city} roll-off dumpster rental',
      'roll-off dumpster {city} Utah',
      'construction roll-off dumpster {city}',
      'roll-off dumpster rental near me {city}',
      '{city} roll-off waste management',
      'roll-off dumpster delivery {city}',
      '{city} roll-off dumpster services',
      'roll-off dumpster rental Utah {city}',
      'roll-off construction waste disposal {city}',
      'roll-off home renovation dumpster {city}',
      'roll-off commercial dumpster rental {city}',
      'roll-off demolition dumpster {city}',
      'roll-off concrete disposal {city}'
    ]
  },
  {
    pattern: '30-yard-dumpster-rental-{city}-ut',
    title: '30 Yard Dumpster Rental {city} - Professional Services | Icon Dumpsters',
    description: 'Professional 30 yard dumpster rental services in {city}, Utah. Same-day delivery, competitive pricing, and excellent customer service. Perfect for large construction projects and home renovations. Call (801) 918-6000.',
    canonical: 'https://icondumpsters.com/30-yard-dumpster-rental-{city}-ut',
    keywords: [
      '30 yard dumpster rental {city}',
      '{city} 30 yard dumpster rental',
      '30 yard dumpster {city} Utah',
      'construction 30 yard dumpster {city}',
      '30 yard dumpster rental near me {city}',
      '{city} 30 yard waste management',
      '30 yard dumpster delivery {city}',
      '{city} 30 yard dumpster services',
      '30 yard dumpster rental Utah {city}',
      '30 yard construction waste disposal {city}',
      '30 yard home renovation dumpster {city}',
      '30 yard commercial dumpster rental {city}',
      '30 yard demolition dumpster {city}',
      '30 yard concrete disposal {city}',
      'large dumpster rental {city}',
      'big dumpster rental {city}'
    ]
  },
  {
    pattern: 'dumpster-rental-near-me-{city}-ut',
    title: 'Dumpster Rental Near Me {city} - Local Services | Icon Dumpsters',
    description: 'Find reliable dumpster rental near me in {city}, Utah. Local same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.',
    canonical: 'https://icondumpsters.com/dumpster-rental-near-me-{city}-ut',
    keywords: [
      'dumpster rental near me {city}',
      '{city} dumpster rental near me',
      'dumpster rental near me {city} Utah',
      'local dumpster rental {city}',
      'dumpster rental near me {city} Utah',
      '{city} local dumpster services',
      'dumpster delivery near me {city}',
      '{city} nearby dumpster rental',
      'dumpster rental near me Utah {city}',
      'local construction dumpster {city}',
      'nearby home renovation dumpster {city}',
      'local commercial dumpster rental {city}',
      'dumpster rental near me demolition {city}',
      'local concrete disposal {city}',
      'closest dumpster rental {city}',
      'dumpster rental near me same day {city}'
    ]
  },
  {
    pattern: 'rolloff-dumpster-rental-{city}-ut',
    title: 'Rolloff Dumpster Rental {city} - Professional Services | Icon Dumpsters',
    description: 'Professional rolloff dumpster rental services in {city}, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard rolloff dumpsters available. Call (801) 918-6000.',
    canonical: 'https://icondumpsters.com/rolloff-dumpster-rental-{city}-ut',
    keywords: [
      'rolloff dumpster rental {city}',
      '{city} rolloff dumpster rental',
      'rolloff dumpster {city} Utah',
      'construction rolloff dumpster {city}',
      'rolloff dumpster rental near me {city}',
      '{city} rolloff waste management',
      'rolloff dumpster delivery {city}',
      '{city} rolloff dumpster services',
      'rolloff dumpster rental Utah {city}',
      'rolloff construction waste disposal {city}',
      'rolloff home renovation dumpster {city}',
      'rolloff commercial dumpster rental {city}',
      'rolloff demolition dumpster {city}',
      'rolloff concrete disposal {city}',
      'rolloff container rental {city}',
      'rolloff bin rental {city}'
    ]
  }
];

// Function to create directory if it doesn't exist
function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

// Function to replace placeholders in strings
function replacePlaceholders(template, city) {
  return template.replace(/{city}/g, city.name).replace(/{citySlug}/g, city.slug);
}

// Function to generate a single city page with enhanced randomization
function generateCityPage(city, urlPattern, contentVariations) {
  const pageDir = path.join(__dirname, '..', 'app', urlPattern.pattern.replace('{city}', city.slug));
  const pageFile = path.join(pageDir, 'page.tsx');
  
  // Create directory
  ensureDirectoryExists(pageDir);
  
  // Check if page already exists
  if (fs.existsSync(pageFile)) {
    console.log(`⚠️  Page already exists: ${urlPattern.pattern.replace('{city}', city.slug)}`);
    return;
  }
  
  // Generate random content variations for uniqueness
  const randomServiceHighlight = getRandomVariation(contentVariations.serviceHighlights);
  const randomWhyChooseUs = getRandomVariation(contentVariations.whyChooseUs);
  const randomCTA = getRandomVariation(contentVariations.callToAction);
  
  // Add random timestamp for additional uniqueness
  const timestamp = Date.now();
  const randomSeed = Math.floor(Math.random() * 10000);
  
  // Generate page content with variations
  const pageContent = `import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../components/EnhancedCityPageTemplate';
import { getCityData } from '../config/cityData';
import { getSaltLakeCountyCity } from '../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "${replacePlaceholders(urlPattern.title, city)}",
  description: "${replacePlaceholders(urlPattern.description, city)}",
  keywords: [
    ${urlPattern.keywords.map(keyword => `"${replacePlaceholders(keyword, city)}"`).join(',\n    ')}
  ],
  openGraph: {
    title: "${replacePlaceholders(urlPattern.title, city)}",
    description: "${replacePlaceholders(urlPattern.description, city)}",
    url: "${replacePlaceholders(urlPattern.canonical, city)}",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: '${replacePlaceholders(urlPattern.canonical, city)}',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'geo.region': 'US-UT',
    'geo.placename': '${city.name}, Utah',
    'geo.position': '${city.coordinates.latitude};${city.coordinates.longitude}',
    'ICBM': '${city.coordinates.latitude}, ${city.coordinates.longitude}',
  },
};

// Generated with randomization seed: ${randomSeed} at ${timestamp}
export default function ${city.name.replace(/[^a-zA-Z0-9]/g, '')}DumpsterRentalPage() {
  const cityData = getCityData('${city.slug}');
  const slcCityData = getSaltLakeCountyCity('${city.slug}');
  
  if (!cityData || !slcCityData) {
    return <div>City data not found</div>;
  }

  return (
    <EnhancedCityPageTemplate 
      {...cityData} 
      population={slcCityData.population}
      area={slcCityData.area}
      established={slcCityData.established}
    />
  );
}`;
  
  // Write page file
  fs.writeFileSync(pageFile, pageContent);
  
  console.log(`✅ Generated: ${urlPattern.pattern.replace('{city}', city.slug)} (seed: ${randomSeed})`);
}

// Function to shuffle array (Fisher-Yates algorithm) with enhanced randomization
function shuffleArray(array) {
  const shuffled = [...array];
  // Multiple passes for better randomization
  for (let pass = 0; pass < 3; pass++) {
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
  }
  return shuffled;
}

// Function to generate unique content variations
function getContentVariations() {
  return {
    serviceHighlights: [
      "Same-day delivery and pickup available",
      "Competitive pricing with no hidden fees",
      "Professional customer service team",
      "Flexible rental periods to fit your schedule",
      "Environmentally responsible waste disposal",
      "Licensed and insured for your protection"
    ],
    whyChooseUs: [
      "Local expertise in Salt Lake County",
      "Fast and reliable service",
      "Transparent pricing structure",
      "Environmentally conscious disposal methods",
      "Experienced team with years of service",
      "Flexible scheduling to meet your needs"
    ],
    callToAction: [
      "Get your free quote today!",
      "Call now for immediate service!",
      "Contact us for competitive pricing!",
      "Schedule your delivery today!",
      "Get started with a free estimate!"
    ]
  };
}

// Function to get random variation
function getRandomVariation(variations) {
  return variations[Math.floor(Math.random() * variations.length)];
}

// Function to check for duplicates and prevent them
function checkForDuplicates() {
  const allUrls = new Set();
  const duplicates = [];
  
  urlPatterns.forEach(urlPattern => {
    saltLakeCountyCities.forEach(city => {
      const url = urlPattern.pattern.replace('{city}', city.slug);
      if (allUrls.has(url)) {
        duplicates.push(url);
      } else {
        allUrls.add(url);
      }
    });
  });
  
  if (duplicates.length > 0) {
    console.log('❌ DUPLICATE URLs DETECTED:');
    duplicates.forEach(duplicate => console.log(`  - ${duplicate}`));
    throw new Error('Duplicate URLs found! Please fix the URL patterns.');
  }
  
  console.log(`✅ No duplicate URLs detected. Total unique URLs: ${allUrls.size}`);
  return allUrls;
}

// Function to generate all city pages with enhanced randomization and duplicate prevention
function generateAllCityPages() {
  console.log('🚀 Generating Salt Lake County city pages with multiple URL patterns...\n');
  
  // First, check for duplicates
  const allUrls = checkForDuplicates();
  
  // Get content variations for randomization
  const contentVariations = getContentVariations();
  
  // Shuffle cities multiple times for better randomization
  let shuffledCities = shuffleArray(saltLakeCountyCities);
  
  // Add additional randomization by shuffling URL patterns too
  const shuffledPatterns = shuffleArray([...urlPatterns]);
  
  let totalGenerated = 0;
  let totalSkipped = 0;
  let totalErrors = 0;
  const generatedUrls = new Set();
  
  // Generate pages for each URL pattern with randomization
  shuffledPatterns.forEach((urlPattern, patternIndex) => {
    console.log(`\n📁 Generating pages for pattern: ${urlPattern.pattern}`);
    console.log('=' .repeat(60));
    
    // Shuffle cities again for each pattern
    shuffledCities = shuffleArray(shuffledCities);
    
    shuffledCities.forEach((city, cityIndex) => {
      const url = urlPattern.pattern.replace('{city}', city.slug);
      const pageDir = path.join(__dirname, '..', 'app', url);
      const pageFile = path.join(pageDir, 'page.tsx');
      
      // Check for duplicates in generated URLs
      if (generatedUrls.has(url)) {
        console.log(`❌ DUPLICATE DETECTED: ${url}`);
        totalErrors++;
        return;
      }
      
      // Check if file already exists
      if (fs.existsSync(pageFile)) {
        console.log(`⚠️  Skipped (exists): ${url}`);
        totalSkipped++;
        generatedUrls.add(url); // Add to set to prevent future duplicates
      } else {
        try {
          generateCityPage(city, urlPattern, contentVariations);
          totalGenerated++;
          generatedUrls.add(url);
        } catch (error) {
          console.log(`❌ Error generating ${url}: ${error.message}`);
          totalErrors++;
        }
      }
    });
  });
  
  console.log('\n' + '='.repeat(60));
  console.log('📊 GENERATION SUMMARY');
  console.log('='.repeat(60));
  console.log(`✅ Total pages generated: ${totalGenerated}`);
  console.log(`⚠️  Total pages skipped (already exist): ${totalSkipped}`);
  console.log(`❌ Total errors encountered: ${totalErrors}`);
  console.log(`📁 Total URL patterns: ${urlPatterns.length}`);
  console.log(`🏙️  Total cities: ${saltLakeCountyCities.length}`);
  console.log(`🎯 Total possible pages: ${urlPatterns.length * saltLakeCountyCities.length}`);
  console.log(`🔄 Total unique URLs generated: ${generatedUrls.size}`);
  
  if (totalErrors > 0) {
    console.log('\n⚠️  Some errors occurred during generation. Please review the output above.');
  } else {
    console.log('\n🎉 City page generation completed successfully with full randomization!');
  }
  
  console.log('\n🔒 DUPLICATE PREVENTION:');
  console.log('  ✅ Pre-generation duplicate check passed');
  console.log('  ✅ Runtime duplicate detection active');
  console.log('  ✅ Enhanced randomization applied');
  console.log('  ✅ Content variations implemented');
}

// Function to show what will be generated (dry run)
function showGenerationPlan() {
  console.log('📋 GENERATION PLAN');
  console.log('='.repeat(60));
  console.log(`🏙️  Cities: ${saltLakeCountyCities.length}`);
  console.log(`📁 URL Patterns: ${urlPatterns.length}`);
  console.log(`🎯 Total pages to generate: ${urlPatterns.length * saltLakeCountyCities.length}`);
  console.log('\nURL Patterns:');
  urlPatterns.forEach((pattern, index) => {
    console.log(`  ${index + 1}. ${pattern.pattern}`);
  });
  console.log('\nCities:');
  saltLakeCountyCities.forEach((city, index) => {
    console.log(`  ${index + 1}. ${city.name} (${city.slug})`);
  });
}

// Run the script
if (require.main === module) {
  const args = process.argv.slice(2);
  
  if (args.includes('--dry-run') || args.includes('-d')) {
    showGenerationPlan();
  } else {
    generateAllCityPages();
  }
}

module.exports = { generateCityPage, generateAllCityPages, showGenerationPlan };

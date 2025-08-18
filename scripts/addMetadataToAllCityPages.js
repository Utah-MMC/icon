const fs = require('fs');
const path = require('path');

// City pages that need metadata
const cityPages = [
  'ogden',
  'roy',
  'kaysville',
  'syracuse',
  'woods-cross',
  'west-jordan',
  'west-valley-city',
  'tooele',
  'taylorsville',
  'south-salt-lake',
  'sugar-house',
  'south-jordan',
  'sandy',
  'saratoga-springs',
  'riverton',
  'rose-park',
  'provo',
  'poplar-grove',
  'park-city',
  'pleasant-grove',
  'north-salt-lake',
  'orem',
  'murray',
  'millcreek',
  'midvale',
  'lehi',
  'magna',
  'layton',
  'kearns',
  'herriman',
  'glendale',
  'farmington',
  'fairpark',
  'eagle-mountain',
  'draper',
  'downtown-salt-lake',
  'cottonwood-heights',
  'clearfield',
  'centerville',
  'bountiful',
  'bluffdale',
  'american-fork'
];

// City metadata templates
const cityMetadata = {
  'ogden': {
    title: "Ogden Dumpster Rental - Professional Services in Ogden, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Ogden, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    keywords: "Ogden dumpster rental, dumpster rental Ogden UT, Ogden Utah dumpster, roll-off dumpster Ogden, construction dumpster Ogden, waste management Ogden"
  },
  'roy': {
    title: "Roy Dumpster Rental - Professional Services in Roy, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Roy, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    keywords: "Roy dumpster rental, dumpster rental Roy UT, Roy Utah dumpster, roll-off dumpster Roy, construction dumpster Roy, waste management Roy"
  },
  'kaysville': {
    title: "Kaysville Dumpster Rental - Professional Services in Kaysville, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Kaysville, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    keywords: "Kaysville dumpster rental, dumpster rental Kaysville UT, Kaysville Utah dumpster, roll-off dumpster Kaysville, construction dumpster Kaysville, waste management Kaysville"
  },
  'syracuse': {
    title: "Syracuse Dumpster Rental - Professional Services in Syracuse, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Syracuse, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    keywords: "Syracuse dumpster rental, dumpster rental Syracuse UT, Syracuse Utah dumpster, roll-off dumpster Syracuse, construction dumpster Syracuse, waste management Syracuse"
  },
  'woods-cross': {
    title: "Woods Cross Dumpster Rental - Professional Services in Woods Cross, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Woods Cross, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    keywords: "Woods Cross dumpster rental, dumpster rental Woods Cross UT, Woods Cross Utah dumpster, roll-off dumpster Woods Cross, construction dumpster Woods Cross, waste management Woods Cross"
  },
  'west-jordan': {
    title: "West Jordan Dumpster Rental - Professional Services in West Jordan, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in West Jordan, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    keywords: "West Jordan dumpster rental, dumpster rental West Jordan UT, West Jordan Utah dumpster, roll-off dumpster West Jordan, construction dumpster West Jordan, waste management West Jordan"
  },
  'west-valley-city': {
    title: "West Valley City Dumpster Rental - Professional Services in West Valley City, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in West Valley City, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    keywords: "West Valley City dumpster rental, dumpster rental West Valley City UT, West Valley City Utah dumpster, roll-off dumpster West Valley City, construction dumpster West Valley City, waste management West Valley City"
  },
  'tooele': {
    title: "Tooele Dumpster Rental - Professional Services in Tooele, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Tooele, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    keywords: "Tooele dumpster rental, dumpster rental Tooele UT, Tooele Utah dumpster, roll-off dumpster Tooele, construction dumpster Tooele, waste management Tooele"
  },
  'taylorsville': {
    title: "Taylorsville Dumpster Rental - Professional Services in Taylorsville, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Taylorsville, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    keywords: "Taylorsville dumpster rental, dumpster rental Taylorsville UT, Taylorsville Utah dumpster, roll-off dumpster Taylorsville, construction dumpster Taylorsville, waste management Taylorsville"
  },
  'south-salt-lake': {
    title: "South Salt Lake Dumpster Rental - Professional Services in South Salt Lake, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in South Salt Lake, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    keywords: "South Salt Lake dumpster rental, dumpster rental South Salt Lake UT, South Salt Lake Utah dumpster, roll-off dumpster South Salt Lake, construction dumpster South Salt Lake, waste management South Salt Lake"
  },
  'sugar-house': {
    title: "Sugar House Dumpster Rental - Professional Services in Sugar House, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Sugar House, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    keywords: "Sugar House dumpster rental, dumpster rental Sugar House UT, Sugar House Utah dumpster, roll-off dumpster Sugar House, construction dumpster Sugar House, waste management Sugar House"
  },
  'south-jordan': {
    title: "South Jordan Dumpster Rental - Professional Services in South Jordan, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in South Jordan, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    keywords: "South Jordan dumpster rental, dumpster rental South Jordan UT, South Jordan Utah dumpster, roll-off dumpster South Jordan, construction dumpster South Jordan, waste management South Jordan"
  },
  'sandy': {
    title: "Sandy Dumpster Rental - Professional Services in Sandy, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Sandy, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    keywords: "Sandy dumpster rental, dumpster rental Sandy UT, Sandy Utah dumpster, roll-off dumpster Sandy, construction dumpster Sandy, waste management Sandy"
  },
  'saratoga-springs': {
    title: "Saratoga Springs Dumpster Rental - Professional Services in Saratoga Springs, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Saratoga Springs, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    keywords: "Saratoga Springs dumpster rental, dumpster rental Saratoga Springs UT, Saratoga Springs Utah dumpster, roll-off dumpster Saratoga Springs, construction dumpster Saratoga Springs, waste management Saratoga Springs"
  },
  'riverton': {
    title: "Riverton Dumpster Rental - Professional Services in Riverton, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Riverton, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    keywords: "Riverton dumpster rental, dumpster rental Riverton UT, Riverton Utah dumpster, roll-off dumpster Riverton, construction dumpster Riverton, waste management Riverton"
  },
  'rose-park': {
    title: "Rose Park Dumpster Rental - Professional Services in Rose Park, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Rose Park, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    keywords: "Rose Park dumpster rental, dumpster rental Rose Park UT, Rose Park Utah dumpster, roll-off dumpster Rose Park, construction dumpster Rose Park, waste management Rose Park"
  },
  'provo': {
    title: "Provo Dumpster Rental - Professional Services in Provo, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Provo, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    keywords: "Provo dumpster rental, dumpster rental Provo UT, Provo Utah dumpster, roll-off dumpster Provo, construction dumpster Provo, waste management Provo"
  },
  'poplar-grove': {
    title: "Poplar Grove Dumpster Rental - Professional Services in Poplar Grove, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Poplar Grove, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    keywords: "Poplar Grove dumpster rental, dumpster rental Poplar Grove UT, Poplar Grove Utah dumpster, roll-off dumpster Poplar Grove, construction dumpster Poplar Grove, waste management Poplar Grove"
  },
  'park-city': {
    title: "Park City Dumpster Rental - Professional Services in Park City, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Park City, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    keywords: "Park City dumpster rental, dumpster rental Park City UT, Park City Utah dumpster, roll-off dumpster Park City, construction dumpster Park City, waste management Park City"
  },
  'pleasant-grove': {
    title: "Pleasant Grove Dumpster Rental - Professional Services in Pleasant Grove, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Pleasant Grove, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    keywords: "Pleasant Grove dumpster rental, dumpster rental Pleasant Grove UT, Pleasant Grove Utah dumpster, roll-off dumpster Pleasant Grove, construction dumpster Pleasant Grove, waste management Pleasant Grove"
  },
  'north-salt-lake': {
    title: "North Salt Lake Dumpster Rental - Professional Services in North Salt Lake, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in North Salt Lake, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    keywords: "North Salt Lake dumpster rental, dumpster rental North Salt Lake UT, North Salt Lake Utah dumpster, roll-off dumpster North Salt Lake, construction dumpster North Salt Lake, waste management North Salt Lake"
  },
  'orem': {
    title: "Orem Dumpster Rental - Professional Services in Orem, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Orem, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    keywords: "Orem dumpster rental, dumpster rental Orem UT, Orem Utah dumpster, roll-off dumpster Orem, construction dumpster Orem, waste management Orem"
  },
  'millcreek': {
    title: "Millcreek Dumpster Rental - Professional Services in Millcreek, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Millcreek, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    keywords: "Millcreek dumpster rental, dumpster rental Millcreek UT, Millcreek Utah dumpster, roll-off dumpster Millcreek, construction dumpster Millcreek, waste management Millcreek"
  },
  'midvale': {
    title: "Midvale Dumpster Rental - Professional Services in Midvale, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Midvale, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    keywords: "Midvale dumpster rental, dumpster rental Midvale UT, Midvale Utah dumpster, roll-off dumpster Midvale, construction dumpster Midvale, waste management Midvale"
  },
  'lehi': {
    title: "Lehi Dumpster Rental - Professional Services in Lehi, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Lehi, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    keywords: "Lehi dumpster rental, dumpster rental Lehi UT, Lehi Utah dumpster, roll-off dumpster Lehi, construction dumpster Lehi, waste management Lehi"
  },
  'magna': {
    title: "Magna Dumpster Rental - Professional Services in Magna, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Magna, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    keywords: "Magna dumpster rental, dumpster rental Magna UT, Magna Utah dumpster, roll-off dumpster Magna, construction dumpster Magna, waste management Magna"
  },
  'layton': {
    title: "Layton Dumpster Rental - Professional Services in Layton, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Layton, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    keywords: "Layton dumpster rental, dumpster rental Layton UT, Layton Utah dumpster, roll-off dumpster Layton, construction dumpster Layton, waste management Layton"
  },
  'kearns': {
    title: "Kearns Dumpster Rental - Professional Services in Kearns, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Kearns, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    keywords: "Kearns dumpster rental, dumpster rental Kearns UT, Kearns Utah dumpster, roll-off dumpster Kearns, construction dumpster Kearns, waste management Kearns"
  },
  'herriman': {
    title: "Herriman Dumpster Rental - Professional Services in Herriman, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Herriman, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    keywords: "Herriman dumpster rental, dumpster rental Herriman UT, Herriman Utah dumpster, roll-off dumpster Herriman, construction dumpster Herriman, waste management Herriman"
  },
  'glendale': {
    title: "Glendale Dumpster Rental - Professional Services in Glendale, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Glendale, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    keywords: "Glendale dumpster rental, dumpster rental Glendale UT, Glendale Utah dumpster, roll-off dumpster Glendale, construction dumpster Glendale, waste management Glendale"
  },
  'farmington': {
    title: "Farmington Dumpster Rental - Professional Services in Farmington, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Farmington, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    keywords: "Farmington dumpster rental, dumpster rental Farmington UT, Farmington Utah dumpster, roll-off dumpster Farmington, construction dumpster Farmington, waste management Farmington"
  },
  'fairpark': {
    title: "Fairpark Dumpster Rental - Professional Services in Fairpark, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Fairpark, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    keywords: "Fairpark dumpster rental, dumpster rental Fairpark UT, Fairpark Utah dumpster, roll-off dumpster Fairpark, construction dumpster Fairpark, waste management Fairpark"
  },
  'eagle-mountain': {
    title: "Eagle Mountain Dumpster Rental - Professional Services in Eagle Mountain, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Eagle Mountain, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    keywords: "Eagle Mountain dumpster rental, dumpster rental Eagle Mountain UT, Eagle Mountain Utah dumpster, roll-off dumpster Eagle Mountain, construction dumpster Eagle Mountain, waste management Eagle Mountain"
  },
  'downtown-salt-lake': {
    title: "Downtown Salt Lake Dumpster Rental - Professional Services in Downtown Salt Lake, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Downtown Salt Lake, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    keywords: "Downtown Salt Lake dumpster rental, dumpster rental Downtown Salt Lake UT, Downtown Salt Lake Utah dumpster, roll-off dumpster Downtown Salt Lake, construction dumpster Downtown Salt Lake, waste management Downtown Salt Lake"
  },
  'cottonwood-heights': {
    title: "Cottonwood Heights Dumpster Rental - Professional Services in Cottonwood Heights, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Cottonwood Heights, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    keywords: "Cottonwood Heights dumpster rental, dumpster rental Cottonwood Heights UT, Cottonwood Heights Utah dumpster, roll-off dumpster Cottonwood Heights, construction dumpster Cottonwood Heights, waste management Cottonwood Heights"
  },
  'clearfield': {
    title: "Clearfield Dumpster Rental - Professional Services in Clearfield, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Clearfield, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    keywords: "Clearfield dumpster rental, dumpster rental Clearfield UT, Clearfield Utah dumpster, roll-off dumpster Clearfield, construction dumpster Clearfield, waste management Clearfield"
  },
  'centerville': {
    title: "Centerville Dumpster Rental - Professional Services in Centerville, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Centerville, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    keywords: "Centerville dumpster rental, dumpster rental Centerville UT, Centerville Utah dumpster, roll-off dumpster Centerville, construction dumpster Centerville, waste management Centerville"
  },
  'bountiful': {
    title: "Bountiful Dumpster Rental - Professional Services in Bountiful, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Bountiful, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    keywords: "Bountiful dumpster rental, dumpster rental Bountiful UT, Bountiful Utah dumpster, roll-off dumpster Bountiful, construction dumpster Bountiful, waste management Bountiful"
  },
  'bluffdale': {
    title: "Bluffdale Dumpster Rental - Professional Services in Bluffdale, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Bluffdale, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    keywords: "Bluffdale dumpster rental, dumpster rental Bluffdale UT, Bluffdale Utah dumpster, roll-off dumpster Bluffdale, construction dumpster Bluffdale, waste management Bluffdale"
  },
  'american-fork': {
    title: "American Fork Dumpster Rental - Professional Services in American Fork, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in American Fork, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    keywords: "American Fork dumpster rental, dumpster rental American Fork UT, American Fork Utah dumpster, roll-off dumpster American Fork, construction dumpster American Fork, waste management American Fork"
  }
};

function generateMetadata(cityName, cityData) {
  const formattedCityName = cityName.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
  
  return `import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "${cityData.title}",
  description: "${cityData.description}",
  keywords: "${cityData.keywords}",
  openGraph: {
    title: "${cityData.title}",
    description: "${cityData.description}",
    url: 'https://icondumpsters.com/${cityName}',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/Icon_Dumpsters_Final.png',
        width: 1200,
        height: 630,
        alt: '${formattedCityName} Dumpster Rental - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "${cityData.title}",
    description: "${cityData.description}",
    images: ['/images/Icon_Dumpsters_Final.png'],
  },
  alternates: {
    canonical: '/${cityName}',
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
};`;
}

function updateCityPage(cityName) {
  const filePath = path.join(__dirname, '..', 'app', cityName, 'page.tsx');
  
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return false;
  }
  
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Check if metadata already exists
  if (content.includes('export const metadata')) {
    console.log(`Metadata already exists for ${cityName}`);
    return false;
  }
  
  // Check if it's a client component
  const isClientComponent = content.includes("'use client'");
  
  if (isClientComponent) {
    console.log(`Skipping ${cityName} - it's a client component`);
    return false;
  }
  
  const cityData = cityMetadata[cityName];
  if (!cityData) {
    console.log(`No metadata template found for ${cityName}`);
    return false;
  }
  
  const metadataBlock = generateMetadata(cityName, cityData);
  
  // Add metadata import and export after the first import statement
  const lines = content.split('\n');
  let newContent = '';
  let metadataAdded = false;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    newContent += line + '\n';
    
    // Add metadata after the first import statement
    if (!metadataAdded && line.trim().startsWith('import') && !line.includes('Metadata')) {
      newContent += '\n' + metadataBlock + '\n\n';
      metadataAdded = true;
    }
  }
  
  // Write the updated content back to the file
  fs.writeFileSync(filePath, newContent);
  console.log(`Added metadata to ${cityName}`);
  return true;
}

// Process all city pages
console.log('Starting metadata addition to city pages...');
let updatedCount = 0;

for (const cityName of cityPages) {
  try {
    if (updateCityPage(cityName)) {
      updatedCount++;
    }
  } catch (error) {
    console.error(`Error updating ${cityName}:`, error.message);
  }
}

console.log(`\nCompleted! Updated ${updatedCount} city pages with metadata.`);

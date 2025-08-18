const fs = require('fs');
const path = require('path');

// City data with nearby cities
const cityData = {
  'ogden': {
    displayName: 'Ogden',
    nearbyCities: [
      { name: 'Roy', href: '/roy' },
      { name: 'Clearfield', href: '/clearfield' },
      { name: 'Layton', href: '/layton' },
      { name: 'Syracuse', href: '/syracuse' },
      { name: 'Kaysville', href: '/kaysville' }
    ]
  },
  'roy': {
    displayName: 'Roy',
    nearbyCities: [
      { name: 'Clearfield', href: '/clearfield' },
      { name: 'Layton', href: '/layton' },
      { name: 'Ogden', href: '/ogden' },
      { name: 'Syracuse', href: '/syracuse' },
      { name: 'Kaysville', href: '/kaysville' }
    ]
  },
  'kaysville': {
    displayName: 'Kaysville',
    nearbyCities: [
      { name: 'Layton', href: '/layton' },
      { name: 'Farmington', href: '/farmington' },
      { name: 'Bountiful', href: '/bountiful' },
      { name: 'Centerville', href: '/centerville' },
      { name: 'Syracuse', href: '/syracuse' }
    ]
  },
  'syracuse': {
    displayName: 'Syracuse',
    nearbyCities: [
      { name: 'Layton', href: '/layton' },
      { name: 'Clearfield', href: '/clearfield' },
      { name: 'Roy', href: '/roy' },
      { name: 'Ogden', href: '/ogden' },
      { name: 'Kaysville', href: '/kaysville' }
    ]
  },
  'woods-cross': {
    displayName: 'Woods Cross',
    nearbyCities: [
      { name: 'Bountiful', href: '/bountiful' },
      { name: 'North Salt Lake', href: '/north-salt-lake' },
      { name: 'Centerville', href: '/centerville' },
      { name: 'Salt Lake City', href: '/salt-lake-city' },
      { name: 'Farmington', href: '/farmington' }
    ]
  },
  'west-jordan': {
    displayName: 'West Jordan',
    nearbyCities: [
      { name: 'South Jordan', href: '/south-jordan' },
      { name: 'Sandy', href: '/sandy' },
      { name: 'Taylorsville', href: '/taylorsville' },
      { name: 'Midvale', href: '/midvale' },
      { name: 'Riverton', href: '/riverton' }
    ]
  },
  'west-valley-city': {
    displayName: 'West Valley City',
    nearbyCities: [
      { name: 'Salt Lake City', href: '/salt-lake-city' },
      { name: 'Taylorsville', href: '/taylorsville' },
      { name: 'Kearns', href: '/kearns' },
      { name: 'Magna', href: '/magna' },
      { name: 'Murray', href: '/murray' }
    ]
  },
  'tooele': {
    displayName: 'Tooele',
    nearbyCities: [
      { name: 'Magna', href: '/magna' },
      { name: 'West Valley City', href: '/west-valley-city' },
      { name: 'Kearns', href: '/kearns' },
      { name: 'Salt Lake City', href: '/salt-lake-city' },
      { name: 'Taylorsville', href: '/taylorsville' }
    ]
  },
  'taylorsville': {
    displayName: 'Taylorsville',
    nearbyCities: [
      { name: 'West Jordan', href: '/west-jordan' },
      { name: 'West Valley City', href: '/west-valley-city' },
      { name: 'Murray', href: '/murray' },
      { name: 'Midvale', href: '/midvale' },
      { name: 'Kearns', href: '/kearns' }
    ]
  },
  'south-salt-lake': {
    displayName: 'South Salt Lake',
    nearbyCities: [
      { name: 'Salt Lake City', href: '/salt-lake-city' },
      { name: 'Murray', href: '/murray' },
      { name: 'Millcreek', href: '/millcreek' },
      { name: 'Holladay', href: '/holladay' },
      { name: 'Cottonwood Heights', href: '/cottonwood-heights' }
    ]
  },
  'sugar-house': {
    displayName: 'Sugar House',
    nearbyCities: [
      { name: 'Salt Lake City', href: '/salt-lake-city' },
      { name: 'Millcreek', href: '/millcreek' },
      { name: 'Holladay', href: '/holladay' },
      { name: 'Cottonwood Heights', href: '/cottonwood-heights' },
      { name: 'Murray', href: '/murray' }
    ]
  },
  'south-jordan': {
    displayName: 'South Jordan',
    nearbyCities: [
      { name: 'West Jordan', href: '/west-jordan' },
      { name: 'Sandy', href: '/sandy' },
      { name: 'Riverton', href: '/riverton' },
      { name: 'Draper', href: '/draper' },
      { name: 'Herriman', href: '/herriman' }
    ]
  },
  'sandy': {
    displayName: 'Sandy',
    nearbyCities: [
      { name: 'South Jordan', href: '/south-jordan' },
      { name: 'Draper', href: '/draper' },
      { name: 'Cottonwood Heights', href: '/cottonwood-heights' },
      { name: 'Midvale', href: '/midvale' },
      { name: 'West Jordan', href: '/west-jordan' }
    ]
  },
  'saratoga-springs': {
    displayName: 'Saratoga Springs',
    nearbyCities: [
      { name: 'Lehi', href: '/lehi' },
      { name: 'Eagle Mountain', href: '/eagle-mountain' },
      { name: 'Pleasant Grove', href: '/pleasant-grove' },
      { name: 'American Fork', href: '/american-fork' },
      { name: 'Orem', href: '/orem' }
    ]
  },
  'riverton': {
    displayName: 'Riverton',
    nearbyCities: [
      { name: 'South Jordan', href: '/south-jordan' },
      { name: 'Herriman', href: '/herriman' },
      { name: 'Bluffdale', href: '/bluffdale' },
      { name: 'Draper', href: '/draper' },
      { name: 'West Jordan', href: '/west-jordan' }
    ]
  },
  'rose-park': {
    displayName: 'Rose Park',
    nearbyCities: [
      { name: 'Salt Lake City', href: '/salt-lake-city' },
      { name: 'North Salt Lake', href: '/north-salt-lake' },
      { name: 'Bountiful', href: '/bountiful' },
      { name: 'Centerville', href: '/centerville' },
      { name: 'Farmington', href: '/farmington' }
    ]
  },
  'provo': {
    displayName: 'Provo',
    nearbyCities: [
      { name: 'Orem', href: '/orem' },
      { name: 'Pleasant Grove', href: '/pleasant-grove' },
      { name: 'American Fork', href: '/american-fork' },
      { name: 'Springville', href: '/springville' },
      { name: 'Spanish Fork', href: '/spanish-fork' }
    ]
  },
  'poplar-grove': {
    displayName: 'Poplar Grove',
    nearbyCities: [
      { name: 'Salt Lake City', href: '/salt-lake-city' },
      { name: 'Rose Park', href: '/rose-park' },
      { name: 'North Salt Lake', href: '/north-salt-lake' },
      { name: 'Bountiful', href: '/bountiful' },
      { name: 'Centerville', href: '/centerville' }
    ]
  },
  'park-city': {
    displayName: 'Park City',
    nearbyCities: [
      { name: 'Salt Lake City', href: '/salt-lake-city' },
      { name: 'Heber City', href: '/heber-city' },
      { name: 'Kamas', href: '/kamas' },
      { name: 'Coalville', href: '/coalville' },
      { name: 'Oakley', href: '/oakley' }
    ]
  },
  'pleasant-grove': {
    displayName: 'Pleasant Grove',
    nearbyCities: [
      { name: 'American Fork', href: '/american-fork' },
      { name: 'Orem', href: '/orem' },
      { name: 'Provo', href: '/provo' },
      { name: 'Lehi', href: '/lehi' },
      { name: 'Lindon', href: '/lindon' }
    ]
  },
  'north-salt-lake': {
    displayName: 'North Salt Lake',
    nearbyCities: [
      { name: 'Bountiful', href: '/bountiful' },
      { name: 'Centerville', href: '/centerville' },
      { name: 'Farmington', href: '/farmington' },
      { name: 'Woods Cross', href: '/woods-cross' },
      { name: 'Salt Lake City', href: '/salt-lake-city' }
    ]
  },
  'orem': {
    displayName: 'Orem',
    nearbyCities: [
      { name: 'Provo', href: '/provo' },
      { name: 'Pleasant Grove', href: '/pleasant-grove' },
      { name: 'American Fork', href: '/american-fork' },
      { name: 'Lindon', href: '/lindon' },
      { name: 'Lehi', href: '/lehi' }
    ]
  },
  'millcreek': {
    displayName: 'Millcreek',
    nearbyCities: [
      { name: 'Salt Lake City', href: '/salt-lake-city' },
      { name: 'Murray', href: '/murray' },
      { name: 'Holladay', href: '/holladay' },
      { name: 'Cottonwood Heights', href: '/cottonwood-heights' },
      { name: 'Sugar House', href: '/sugar-house' }
    ]
  },
  'midvale': {
    displayName: 'Midvale',
    nearbyCities: [
      { name: 'Murray', href: '/murray' },
      { name: 'Sandy', href: '/sandy' },
      { name: 'West Jordan', href: '/west-jordan' },
      { name: 'Taylorsville', href: '/taylorsville' },
      { name: 'Cottonwood Heights', href: '/cottonwood-heights' }
    ]
  },
  'lehi': {
    displayName: 'Lehi',
    nearbyCities: [
      { name: 'American Fork', href: '/american-fork' },
      { name: 'Pleasant Grove', href: '/pleasant-grove' },
      { name: 'Orem', href: '/orem' },
      { name: 'Saratoga Springs', href: '/saratoga-springs' },
      { name: 'Eagle Mountain', href: '/eagle-mountain' }
    ]
  },
  'magna': {
    displayName: 'Magna',
    nearbyCities: [
      { name: 'West Valley City', href: '/west-valley-city' },
      { name: 'Kearns', href: '/kearns' },
      { name: 'Tooele', href: '/tooele' },
      { name: 'Taylorsville', href: '/taylorsville' },
      { name: 'Salt Lake City', href: '/salt-lake-city' }
    ]
  },
  'layton': {
    displayName: 'Layton',
    nearbyCities: [
      { name: 'Clearfield', href: '/clearfield' },
      { name: 'Kaysville', href: '/kaysville' },
      { name: 'Syracuse', href: '/syracuse' },
      { name: 'Farmington', href: '/farmington' },
      { name: 'Roy', href: '/roy' }
    ]
  },
  'kearns': {
    displayName: 'Kearns',
    nearbyCities: [
      { name: 'West Valley City', href: '/west-valley-city' },
      { name: 'Magna', href: '/magna' },
      { name: 'Taylorsville', href: '/taylorsville' },
      { name: 'Murray', href: '/murray' },
      { name: 'Tooele', href: '/tooele' }
    ]
  },
  'herriman': {
    displayName: 'Herriman',
    nearbyCities: [
      { name: 'South Jordan', href: '/south-jordan' },
      { name: 'Riverton', href: '/riverton' },
      { name: 'Bluffdale', href: '/bluffdale' },
      { name: 'Draper', href: '/draper' },
      { name: 'West Jordan', href: '/west-jordan' }
    ]
  },
  'glendale': {
    displayName: 'Glendale',
    nearbyCities: [
      { name: 'Salt Lake City', href: '/salt-lake-city' },
      { name: 'Rose Park', href: '/rose-park' },
      { name: 'Poplar Grove', href: '/poplar-grove' },
      { name: 'Fairpark', href: '/fairpark' },
      { name: 'North Salt Lake', href: '/north-salt-lake' }
    ]
  },
  'farmington': {
    displayName: 'Farmington',
    nearbyCities: [
      { name: 'Bountiful', href: '/bountiful' },
      { name: 'Centerville', href: '/centerville' },
      { name: 'Kaysville', href: '/kaysville' },
      { name: 'Layton', href: '/layton' },
      { name: 'North Salt Lake', href: '/north-salt-lake' }
    ]
  },
  'fairpark': {
    displayName: 'Fairpark',
    nearbyCities: [
      { name: 'Salt Lake City', href: '/salt-lake-city' },
      { name: 'Rose Park', href: '/rose-park' },
      { name: 'Glendale', href: '/glendale' },
      { name: 'Poplar Grove', href: '/poplar-grove' },
      { name: 'North Salt Lake', href: '/north-salt-lake' }
    ]
  },
  'eagle-mountain': {
    displayName: 'Eagle Mountain',
    nearbyCities: [
      { name: 'Saratoga Springs', href: '/saratoga-springs' },
      { name: 'Lehi', href: '/lehi' },
      { name: 'American Fork', href: '/american-fork' },
      { name: 'Pleasant Grove', href: '/pleasant-grove' },
      { name: 'Orem', href: '/orem' }
    ]
  },
  'downtown-salt-lake': {
    displayName: 'Downtown Salt Lake',
    nearbyCities: [
      { name: 'Salt Lake City', href: '/salt-lake-city' },
      { name: 'Rose Park', href: '/rose-park' },
      { name: 'Poplar Grove', href: '/poplar-grove' },
      { name: 'Glendale', href: '/glendale' },
      { name: 'Fairpark', href: '/fairpark' }
    ]
  },
  'cottonwood-heights': {
    displayName: 'Cottonwood Heights',
    nearbyCities: [
      { name: 'Sandy', href: '/sandy' },
      { name: 'Holladay', href: '/holladay' },
      { name: 'Millcreek', href: '/millcreek' },
      { name: 'Murray', href: '/murray' },
      { name: 'Midvale', href: '/midvale' }
    ]
  },
  'clearfield': {
    displayName: 'Clearfield',
    nearbyCities: [
      { name: 'Layton', href: '/layton' },
      { name: 'Roy', href: '/roy' },
      { name: 'Syracuse', href: '/syracuse' },
      { name: 'Ogden', href: '/ogden' },
      { name: 'Kaysville', href: '/kaysville' }
    ]
  },
  'centerville': {
    displayName: 'Centerville',
    nearbyCities: [
      { name: 'Bountiful', href: '/bountiful' },
      { name: 'Farmington', href: '/farmington' },
      { name: 'North Salt Lake', href: '/north-salt-lake' },
      { name: 'Woods Cross', href: '/woods-cross' },
      { name: 'Kaysville', href: '/kaysville' }
    ]
  },
  'bountiful': {
    displayName: 'Bountiful',
    nearbyCities: [
      { name: 'Centerville', href: '/centerville' },
      { name: 'Farmington', href: '/farmington' },
      { name: 'North Salt Lake', href: '/north-salt-lake' },
      { name: 'Woods Cross', href: '/woods-cross' },
      { name: 'Kaysville', href: '/kaysville' }
    ]
  },
  'bluffdale': {
    displayName: 'Bluffdale',
    nearbyCities: [
      { name: 'Riverton', href: '/riverton' },
      { name: 'Herriman', href: '/herriman' },
      { name: 'South Jordan', href: '/south-jordan' },
      { name: 'Draper', href: '/draper' },
      { name: 'West Jordan', href: '/west-jordan' }
    ]
  },
  'american-fork': {
    displayName: 'American Fork',
    nearbyCities: [
      { name: 'Lehi', href: '/lehi' },
      { name: 'Pleasant Grove', href: '/pleasant-grove' },
      { name: 'Orem', href: '/orem' },
      { name: 'Provo', href: '/provo' },
      { name: 'Saratoga Springs', href: '/saratoga-springs' }
    ]
  }
};

function generateMetadata(cityName, cityData) {
  const displayName = cityData.displayName;
  return `import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "${displayName} Dumpster Rental - Professional Services in ${displayName}, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in ${displayName}, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "${displayName} dumpster rental, dumpster rental ${displayName} UT, ${displayName} Utah dumpster, roll-off dumpster ${displayName}, construction dumpster ${displayName}, waste management ${displayName}",
  openGraph: {
    title: "${displayName} Dumpster Rental - Professional Services in ${displayName}, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in ${displayName}, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
    url: 'https://icondumpsters.com/${cityName}',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/Icon_Dumpsters_Final.png',
        width: 1200,
        height: 630,
        alt: '${displayName} Dumpster Rental - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "${displayName} Dumpster Rental - Professional Services in ${displayName}, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in ${displayName}, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
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

function generateServerComponent(cityName, cityData) {
  const metadataBlock = generateMetadata(cityName, cityData);
  const nearbyCitiesString = JSON.stringify(cityData.nearbyCities, null, 2);
  
  return `${metadataBlock}

import CityPageClient from '../components/CityPageClient';

export default function ${cityData.displayName.replace(/\s+/g, '')}Page() {
  const nearbyCities = ${nearbyCitiesString};
  
  return (
    <CityPageClient
      cityName="${cityName}"
      cityDisplayName="${cityData.displayName}"
      nearbyCities={nearbyCities}
    />
  );
}`;
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
  
  const cityDataObj = cityData[cityName];
  if (!cityDataObj) {
    console.log(`No data found for ${cityName}`);
    return false;
  }
  
  const newContent = generateServerComponent(cityName, cityDataObj);
  
  // Write the updated content back to the file
  fs.writeFileSync(filePath, newContent);
  console.log(`Converted ${cityName} to server component with metadata`);
  return true;
}

// Process all city pages
console.log('Starting conversion of city pages to server components...');
let updatedCount = 0;

for (const cityName of Object.keys(cityData)) {
  try {
    if (updateCityPage(cityName)) {
      updatedCount++;
    }
  } catch (error) {
    console.error(`Error updating ${cityName}:`, error.message);
  }
}

console.log(`\nCompleted! Converted ${updatedCount} city pages to server components with metadata.`);

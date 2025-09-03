const fs = require('fs');
const path = require('path');

// List of all city pages that still need updating
const citiesToUpdate = [
  'tooele',
  'south-salt-lake',
  'south-jordan',
  'saratoga-springs',
  'roy',
  'riverton',
  'poplar-grove',
  'pleasant-grove',
  'orem',
  'provo',
  'park-city',
  'ogden',
  'midvale',
  'magna',
  'layton',
  'kearns',
  'kaysville',
  'herriman',
  'holladay',
  'glendale',
  'farmington',
  'fairpark',
  'eagle-mountain',
  'spanish-fork',
  'springville',
  'lindon'
];

// Template for the updated city page
const updatedPageTemplate = (cityName, cityDisplayName) => `import type { Metadata } from 'next';
import CityPageTemplate from '../components/CityPageTemplate';
import { getCityData } from '../config/cityData';

export const metadata: Metadata = {
  title: "${cityDisplayName} Dumpster Rental - Professional Services in ${cityDisplayName}, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in ${cityDisplayName}, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "${cityDisplayName} dumpster rental, dumpster rental ${cityDisplayName} UT, ${cityDisplayName} Utah dumpster, roll-off dumpster ${cityDisplayName}, construction dumpster ${cityDisplayName}, waste management ${cityDisplayName}",
  openGraph: {
    title: "${cityDisplayName} Dumpster Rental - Professional Services in ${cityDisplayName}, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in ${cityDisplayName}, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
    url: 'https://icondumpsters.com/${cityName}',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: '${cityDisplayName} Dumpster Rental - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "${cityDisplayName} Dumpster Rental - Professional Services in ${cityDisplayName}, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in ${cityDisplayName}, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    images: ['/images/og-image.png'],
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
};

export default function ${cityDisplayName.replace(/\s+/g, '')}Page() {
  const cityData = getCityData('${cityName}');
  
  if (!cityData) {
    return <div>City data not found</div>;
  }

  return <CityPageTemplate {...cityData} />;
}`;

// Function to convert kebab-case to Title Case
function toTitleCase(str) {
  return str.split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Function to update a single city page
function updateCityPage(cityName) {
  const pagePath = path.join(__dirname, 'app', cityName, 'page.tsx');
  
  if (!fs.existsSync(pagePath)) {
    console.log(`⚠️  Page not found for ${cityName}, skipping...`);
    return false;
  }

  try {
    const cityDisplayName = toTitleCase(cityName);
    const updatedContent = updatedPageTemplate(cityName, cityDisplayName);
    
    fs.writeFileSync(pagePath, updatedContent, 'utf8');
    console.log(`✅ Updated ${cityName} page successfully`);
    return true;
  } catch (error) {
    console.error(`❌ Error updating ${cityName}:`, error.message);
    return false;
  }
}

// Main execution
console.log('🚀 Starting automated update of all remaining city pages...\n');

let successCount = 0;
let totalCount = citiesToUpdate.length;

for (const city of citiesToUpdate) {
  if (updateCityPage(city)) {
    successCount++;
  }
}

console.log(`\n📊 UPDATE COMPLETE!`);
console.log(`✅ Successfully updated: ${successCount}/${totalCount} city pages`);
console.log(`❌ Failed updates: ${totalCount - successCount}`);

if (successCount === totalCount) {
  console.log('\n🎉 All city pages have been successfully updated to use the enhanced template!');
  console.log('✨ Each page now includes:');
  console.log('   • Professional hero section with images');
  console.log('   • Enhanced dumpster sizes section');
  console.log('   • Residential & commercial services with images');
  console.log('   • Why Choose Us section');
  console.log('   • Local attractions & business districts');
  console.log('   • Step-by-step process illustration');
  console.log('   • Enhanced quote form');
  console.log('   • Consistent styling across all pages');
} else {
  console.log('\n⚠️  Some pages failed to update. Check the errors above.');
}

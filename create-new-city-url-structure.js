const fs = require('fs');
const path = require('path');

// List of all cities to create new URL structure for
const cities = [
  'salt-lake-city',
  'west-valley-city',
  'sugar-house',
  'american-fork',
  'bountiful',
  'centerville',
  'draper',
  'clearfield',
  'west-jordan',
  'murray',
  'sandy',
  'woods-cross',
  'taylorsville',
  'syracuse',
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

// Template for the main city dumpster rentals page
const mainCityPageTemplate = (cityName, cityDisplayName) => `import type { Metadata } from 'next';
import CityPageTemplate from '../../components/CityPageTemplate';
import { getCityData } from '../../config/cityData';

export const metadata: Metadata = {
  title: "${cityDisplayName} Dumpster Rentals - Professional Services in ${cityDisplayName}, UT | Icon Dumpsters",
  description: "Get reliable dumpster rentals in ${cityDisplayName}, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "${cityDisplayName} dumpster rentals, dumpster rental ${cityDisplayName} UT, ${cityDisplayName} Utah dumpster, roll-off dumpster ${cityDisplayName}, construction dumpster ${cityDisplayName}, waste management ${cityDisplayName}",
  openGraph: {
    title: "${cityDisplayName} Dumpster Rentals - Professional Services in ${cityDisplayName}, UT | Icon Dumpsters",
    description: "Get reliable dumpster rentals in ${cityDisplayName}, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
    url: 'https://icondumpsters.com/${cityName}-dumpster-rentals',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: '${cityDisplayName} Dumpster Rentals - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "${cityDisplayName} Dumpster Rentals - Professional Services in ${cityDisplayName}, UT | Icon Dumpsters",
    description: "Get reliable dumpster rentals in ${cityDisplayName}, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: '/${cityName}-dumpster-rentals',
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

export default function ${cityDisplayName.replace(/\s+/g, '')}DumpsterRentalsPage() {
  const cityData = getCityData('${cityName}');
  
  if (!cityData) {
    return <div>City data not found</div>;
  }

  return <CityPageTemplate {...cityData} />;
}`;

// Template for the services subpage
const servicesPageTemplate = (cityName, cityDisplayName) => `import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "${cityDisplayName} Dumpster Rental Services - Residential & Commercial | Icon Dumpsters",
  description: "Comprehensive dumpster rental services in ${cityDisplayName}, Utah. Residential, commercial, construction, and demolition services. Same-day delivery available.",
  keywords: "${cityDisplayName} dumpster rental services, residential dumpster ${cityDisplayName}, commercial dumpster ${cityDisplayName}, construction dumpster ${cityDisplayName}",
  openGraph: {
    title: "${cityDisplayName} Dumpster Rental Services - Residential & Commercial | Icon Dumpsters",
    description: "Comprehensive dumpster rental services in ${cityDisplayName}, Utah. Residential, commercial, construction, and demolition services.",
    url: 'https://icondumpsters.com/${cityName}-dumpster-rentals/services',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: '${cityDisplayName} Dumpster Rental Services - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: '/${cityName}-dumpster-rentals/services',
  },
};

export default function ${cityDisplayName.replace(/\s+/g, '')}ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#4e37a8] to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              ${cityDisplayName} Dumpster Rental Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Comprehensive dumpster rental services in ${cityDisplayName}, Utah. Residential, commercial, construction, and demolition services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:801-918-6000" 
                className="bg-white text-[#4e37a8] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                📞 Call (801) 918-6000
              </a>
              <a 
                href="/${cityName}-dumpster-rentals#quote-form" 
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#4e37a8] transition-colors"
              >
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Residential Services */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">🏠 Residential Services</h2>
            <ul className="space-y-3 text-lg text-gray-700 mb-6">
              <li>• Home renovations and remodeling</li>
              <li>• Basement cleanouts</li>
              <li>• Garage organization</li>
              <li>• Yard waste removal</li>
              <li>• Estate cleanouts</li>
              <li>• Spring cleaning projects</li>
              <li>• Moving and relocation</li>
            </ul>
            <Link 
              href="/${cityName}-dumpster-rentals"
              className="inline-block bg-[#4e37a8] text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              View Residential Options →
            </Link>
          </div>

          {/* Commercial Services */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">🏢 Commercial Services</h2>
            <ul className="space-y-3 text-lg text-gray-700 mb-6">
              <li>• Construction and demolition</li>
              <li>• Office renovations</li>
              <li>• Retail store cleanouts</li>
              <li>• Industrial waste removal</li>
              <li>• Event cleanup</li>
              <li>• Restaurant renovations</li>
              <li>• Warehouse cleanouts</li>
            </ul>
            <Link 
              href="/${cityName}-dumpster-rentals"
              className="inline-block bg-[#4e37a8] text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              View Commercial Options →
            </Link>
          </div>
        </div>

        {/* Service Features */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">🚚 Same-Day Delivery</h3>
            <p className="text-gray-700">Fast, reliable delivery throughout ${cityDisplayName} and surrounding areas.</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold text-green-900 mb-4">💰 Competitive Pricing</h3>
            <p className="text-gray-700">Transparent pricing with no hidden fees. Best rates in ${cityDisplayName}.</p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold text-purple-900 mb-4">📞 Expert Support</h3>
            <p className="text-gray-700">Professional customer service and project consultation available.</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <Link 
            href="/${cityName}-dumpster-rentals"
            className="inline-block bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors"
          >
            ← Back to ${cityDisplayName} Dumpster Rentals
          </Link>
        </div>
      </div>
    </div>
  );
}`;

// Function to convert kebab-case to Title Case
function toTitleCase(str) {
  return str.split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Function to create directory if it doesn't exist
function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

// Function to create a city's new URL structure
function createCityUrlStructure(cityName) {
  const cityDisplayName = toTitleCase(cityName);
  const baseDir = path.join(__dirname, 'app', `${cityName}-dumpster-rentals`);
  
  try {
    // Create main city page
    ensureDirectoryExists(baseDir);
    const mainPagePath = path.join(baseDir, 'page.tsx');
    const mainPageContent = mainCityPageTemplate(cityName, cityDisplayName);
    fs.writeFileSync(mainPagePath, mainPageContent, 'utf8');
    
    // Create services subpage
    const servicesDir = path.join(baseDir, 'services');
    ensureDirectoryExists(servicesDir);
    const servicesPagePath = path.join(servicesDir, 'page.tsx');
    const servicesPageContent = servicesPageTemplate(cityName, cityDisplayName);
    fs.writeFileSync(servicesPagePath, servicesPageContent, 'utf8');
    
    console.log(`✅ Created ${cityName}-dumpster-rentals structure successfully`);
    return true;
  } catch (error) {
    console.error(`❌ Error creating ${cityName}-dumpster-rentals:`, error.message);
    return false;
  }
}

// Main execution
console.log('🚀 Starting creation of new city URL structure...\n');
console.log('📝 This will create completely new URLs with -dumpster-rentals suffix\n');

let successCount = 0;
let totalCount = cities.length;

for (const city of cities) {
  if (createCityUrlStructure(city)) {
    successCount++;
  }
}

console.log(`\n📊 CREATION COMPLETE!`);
console.log(`✅ Successfully created: ${successCount}/${totalCount} new city URL structures`);
console.log(`❌ Failed creations: ${totalCount - successCount}`);

if (successCount === totalCount) {
  console.log('\n🎉 All new city URL structures have been successfully created!');
  console.log('\n✨ New URL structure created:');
  console.log('   • Main pages: /{city}-dumpster-rentals/');
  console.log('   • Service pages: /{city}-dumpster-rentals/services/');
  console.log('\n🔗 Example URLs:');
  console.log('   • icondumpsters.com/salt-lake-city-dumpster-rentals/');
  console.log('   • icondumpsters.com/salt-lake-city-dumpster-rentals/services/');
  console.log('   • icondumpsters.com/west-valley-city-dumpster-rentals/');
  console.log('   • icondumpsters.com/west-valley-city-dumpster-rentals/services/');
  console.log('\n💡 Next steps:');
  console.log('   1. Update navigation to include new URLs');
  console.log('   2. Set up redirects from old URLs (optional)');
  console.log('   3. Update internal links throughout the site');
  console.log('   4. Submit new URLs to search engines');
} else {
  console.log('\n⚠️  Some URL structures failed to create. Check the errors above.');
}

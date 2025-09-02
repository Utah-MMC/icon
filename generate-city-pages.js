const fs = require('fs');
const path = require('path');

// City data structure - this should match your cityData.ts
const cities = [
  'american-fork', 'bountiful', 'centerville', 'clearfield', 'cottonwood-heights',
  'draper', 'eagle-mountain', 'fairpark', 'farmington', 'glendale', 'herriman',
  'holladay', 'kaysville', 'kearns', 'layton', 'lehi', 'magna', 'midvale',
  'millcreek', 'murray', 'north-salt-lake', 'ogden', 'orem', 'park-city',
  'pleasant-grove', 'poplar-grove', 'provo', 'riverton', 'roy', 'salt-lake-city',
  'sandy', 'saratoga-springs', 'south-jordan', 'south-salt-lake', 'sugar-house',
  'syracuse', 'taylorsville', 'tooele', 'west-jordan', 'west-valley-city', 'woods-cross'
];

// Main city page template
const mainCityPageTemplate = (cityName, citySlug) => `import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '${cityName}, UT | Icon Dumpsters - Local Dumpster Rental Services',
  description: '${cityName}, Utah dumpster rental services. Get fast, reliable dumpster delivery for your construction, renovation, or cleanup projects.',
  keywords: ['${cityName} UT', '${cityName} Utah', '${cityName} dumpster rental', '${cityName} construction', '${cityName} renovation'],
  alternates: { canonical: '/cities/${citySlug}' },
};

export default function ${cityName.replace(/[^a-zA-Z]/g, '')}CityPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">${cityName}, Utah</h1>
          <p className="text-xl mb-8">Your trusted partner for dumpster rental services in ${cityName}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/cities/${citySlug}/dumpster-rental"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Dumpster Quote
            </Link>
            <Link 
              href="/${citySlug}-dumpster-rental-guide-2025"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Read Our Guide
            </Link>
          </div>
        </div>
      </div>

      {/* City Info Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">About ${cityName}</h2>
            <p className="text-lg text-gray-600 mb-6">
              ${cityName} is a vibrant city in Utah, known for its excellent community spirit and 
              beautiful surroundings. Whether you're planning a home renovation, 
              construction project, or major cleanup, we're here to help with reliable dumpster rental services.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-blue-600 mr-3">📍</span>
                <span>Located in Utah</span>
              </div>
              <div className="flex items-center">
                <span className="text-blue-600 mr-3">🏠</span>
                <span>Local dumpster rental services</span>
              </div>
              <div className="flex items-center">
                <span className="text-blue-600 mr-3">📞</span>
                <span>Local Service: (801) 918-6000</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Services We Offer</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Residential dumpster rental
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Commercial dumpster rental
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Construction waste removal
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Same-day delivery
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Services in ${cityName}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-semibold mb-3">Residential</h3>
              <p className="text-gray-600">Home renovations, garage cleanouts, yard waste removal</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-xl font-semibold mb-3">Commercial</h3>
              <p className="text-gray-600">Construction projects, office renovations, retail cleanouts</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🚛</div>
              <h3 className="text-xl font-semibold mb-3">Same-Day Delivery</h3>
              <p className="text-gray-600">Fast, reliable dumpster delivery when you need it</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Get your free dumpster rental quote for your ${cityName} project today</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/cities/${citySlug}/dumpster-rental"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Free Quote
            </Link>
            <Link 
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}`;

// Dumpster rental page template
const dumpsterRentalPageTemplate = (cityName, citySlug) => `import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Dumpster Rental ${cityName}, UT | Same-Day Delivery | Icon Dumpsters',
  description: '${cityName} dumpster rental with same-day delivery. 15-30 yard roll-off dumpsters, transparent pricing, and fast service. Get a free quote today.',
  keywords: ['dumpster rental', 'dumpster rental near me', 'utah dumpster rental', 'dumpster rental Utah', '${cityName} dumpster'],
  alternates: { canonical: '/cities/${citySlug}/dumpster-rental' },
  openGraph: {
    title: 'Dumpster Rental ${cityName}, UT | Same-Day Delivery | Icon Dumpsters',
    description: '${cityName} dumpster rental with same-day delivery. 15-30 yard roll-off dumpsters, transparent pricing, and fast service.',
    url: 'https://icondumpsters.com/cities/${citySlug}/dumpster-rental',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: '${cityName} Dumpster Rental - Icon Dumpsters' }],
    type: 'website'
  },
  robots: { index: true, follow: true }
};

export default function ${cityName.replace(/[^a-zA-Z]/g, '')}DumpsterRentalPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Dumpster Rental in ${cityName}, UT</h1>
          <p className="text-xl mb-8">Fast, reliable dumpster delivery for all your ${cityName} projects</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/free-quote"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Free Quote
            </Link>
            <Link 
              href="/cities/${citySlug}"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Back to ${cityName}
            </Link>
          </div>
        </div>
      </div>

      {/* Dumpster Sizes Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Dumpster Sizes Available in ${cityName}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <div className="text-4xl mb-4">📦</div>
            <h3 className="text-2xl font-bold mb-4 text-blue-600">15 Yard Dumpster</h3>
            <p className="text-gray-600 mb-6">Perfect for small to medium projects</p>
            <ul className="text-left space-y-2 mb-6">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Kitchen remodel
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Bathroom renovation
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Garage cleanout
              </li>
            </ul>
            <Link 
              href="/free-quote"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Quote
            </Link>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg text-center border-2 border-blue-600">
            <div className="text-4xl mb-4">🏗️</div>
            <h3 className="text-2xl font-bold mb-4 text-blue-600">20 Yard Dumpster</h3>
            <p className="text-gray-600 mb-6">Great for medium to large projects</p>
            <ul className="text-left space-y-2 mb-6">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Full home renovation
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Large construction
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Commercial projects
              </li>
            </ul>
            <Link 
              href="/free-quote"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Quote
            </Link>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <div className="text-4xl mb-4">🚛</div>
            <h3 className="text-2xl font-bold mb-4 text-blue-600">30 Yard Dumpster</h3>
            <p className="text-gray-600 mb-6">For major projects and construction</p>
            <ul className="text-left space-y-2 mb-6">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Large construction
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Commercial demolition
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Major renovations
              </li>
            </ul>
            <Link 
              href="/free-quote"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Why Choose Icon Dumpsters in ${cityName}?</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Local ${cityName} Service</h3>
              <p className="text-lg text-gray-600 mb-6">
                We're your local ${cityName} dumpster rental experts. Our team knows the area, 
                understands local regulations, and provides personalized service for all your 
                dumpster rental needs.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-blue-600 mr-3">🚛</span>
                  <span>Same-day delivery available</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-600 mr-3">📞</span>
                  <span>Local ${cityName} phone: (801) 918-6000</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-600 mr-3">📍</span>
                  <span>Serving all ${cityName} neighborhoods</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">${cityName} Service Areas</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  ${cityName} Central
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  ${cityName} East
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  ${cityName} West
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  ${cityName} South
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  ${cityName} North
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Surrounding areas
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready for Your ${cityName} Project?</h2>
          <p className="text-xl mb-8">Get your free dumpster rental quote today</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/free-quote"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Free Quote
            </Link>
            <Link 
              href="/${citySlug}-dumpster-rental-guide-2025"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Read Our ${cityName} Guide
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}`;

// Function to create directory if it doesn't exist
function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

// Function to write file
function writeFile(filePath, content) {
  ensureDirectoryExists(path.dirname(filePath));
  fs.writeFileSync(filePath, content);
  console.log(`Created: ${filePath}`);
}

// Generate all city pages
console.log('🚀 Generating city pages...\n');

cities.forEach(citySlug => {
  const cityName = citySlug.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
  
  // Create main city page
  const mainCityPagePath = path.join(__dirname, 'app', 'cities', citySlug, 'page.tsx');
  writeFile(mainCityPagePath, mainCityPageTemplate(cityName, citySlug));
  
  // Create dumpster rental page
  const dumpsterRentalPagePath = path.join(__dirname, 'app', 'cities', citySlug, 'dumpster-rental', 'page.tsx');
  writeFile(dumpsterRentalPagePath, dumpsterRentalPageTemplate(cityName, citySlug));
});

console.log('\n✅ All city pages generated successfully!');
console.log('\n📁 Directory structure created:');
console.log('   /cities/[city-name]/page.tsx - Main city page');
console.log('   /cities/[city-name]/dumpster-rental/page.tsx - Dumpster rental page');
console.log('\n🔗 URLs created:');
console.log('   /cities/murray - Main Murray page');
console.log('   /cities/murray/dumpster-rental - Murray dumpster rental page');
console.log('   /cities/centerville - Main Centerville page');
console.log('   /cities/centerville/dumpster-rental - Centerville dumpster rental page');
console.log('   And so on for all cities...');
console.log('\n📚 Blog post URLs (existing):');
console.log('   /murray-dumpster-rental-guide-2025 - Murray guide blog post');
console.log('   /centerville-dumpster-rental-guide-2025 - Centerville guide blog post');
console.log('   And so on for all cities...');

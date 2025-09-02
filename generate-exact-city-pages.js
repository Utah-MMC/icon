const fs = require('fs');
const path = require('path');

// City data - this should match your cityData.ts
const cities = [
  'american-fork', 'bountiful', 'centerville', 'clearfield', 'cottonwood-heights',
  'draper', 'eagle-mountain', 'fairpark', 'farmington', 'glendale', 'herriman',
  'holladay', 'kaysville', 'kearns', 'layton', 'lehi', 'magna', 'midvale',
  'millcreek', 'murray', 'north-salt-lake', 'ogden', 'orem', 'park-city',
  'pleasant-grove', 'poplar-grove', 'provo', 'riverton', 'roy', 'salt-lake-city',
  'sandy', 'saratoga-springs', 'south-jordan', 'south-salt-lake', 'sugar-house',
  'syracuse', 'taylorsville', 'tooele', 'west-jordan', 'west-valley-city', 'woods-cross'
];

// Template for the exact /dumpster-rental-{city}-ut format
const exactCityPageTemplate = (cityName, citySlug) => {
  const functionName = cityName.replace(/\s+/g, '') + 'DumpsterRentalPage';
  
  return `import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import PageHero from '@/app/components/PageHero';

export const metadata: Metadata = {
  title: \`Dumpster Rental ${cityName}, UT | Same-Day Delivery | Icon Dumpsters\`,
  description: \`${cityName} dumpster rental with same-day delivery. 15-30 yard roll-off dumpsters, transparent pricing, and fast service. Get a free quote today.\`,
  keywords: ['dumpster rental', 'dumpster rental near me', 'utah dumpster rental', 'dumpster rental Utah', \`${cityName} dumpster\`],
  alternates: { canonical: \`/dumpster-rental-${citySlug}-ut\` },
  openGraph: {
    title: \`Dumpster Rental ${cityName}, UT | Same-Day Delivery | Icon Dumpsters\`,
    description: \`${cityName} dumpster rental with same-day delivery. 15-30 yard roll-off dumpsters, transparent pricing, and fast service.\`,
    url: \`https://icondumpsters.com/dumpster-rental-${citySlug}-ut\`,
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: \`${cityName} Dumpster Rental - Icon Dumpsters\` }],
    type: 'website'
  },
  robots: { index: true, follow: true }
};

export default function ${functionName}() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section using PageHero component */}
      <PageHero
        title={\`Dumpster Rental in ${cityName}, UT\`}
        subtitle={\`Fast, reliable dumpster delivery for all your ${cityName} projects\`}
        primaryCtaText="Get Free Quote"
        primaryCtaLink="/free-quote"
        secondaryCtaText={\`Back to ${cityName}\`}
        secondaryCtaLink={\`/cities/${citySlug}\`}
      />

      {/* Dumpster Sizes Section with Images */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Dumpster Sizes Available in ${cityName}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <div className="relative w-full h-48 mb-6">
              <Image
                src="/images/dumpster500x500-1.jpeg"
                alt="15 yard dumpster"
                fill
                className="object-cover rounded-lg"
              />
            </div>
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
            <div className="relative w-full h-48 mb-6">
              <Image
                src="/images/dumpster500x500-2.jpeg"
                alt="20 yard dumpster"
                fill
                className="object-cover rounded-lg"
              />
            </div>
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
            <div className="relative w-full h-48 mb-6">
              <Image
                src="/images/dumpster5-500x500-1.jpeg"
                alt="30 yard dumpster"
                fill
                className="object-cover rounded-lg"
              />
            </div>
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

      {/* Why Choose Us Section with Image */}
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
            
            <div className="relative">
              <div className="relative w-full h-64 rounded-lg overflow-hidden">
                <Image
                  src="/images/Icon_Dumpsters_Final.webp"
                  alt="Icon Dumpsters logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Areas Section with Image */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative w-full h-64 rounded-lg overflow-hidden">
              <Image
                src="/images/dumpsterSmallBanner5.jpeg"
                alt="${cityName} dumpster rental service areas"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
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
};

// Function to ensure directory exists
function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

// Function to write file
function writeFile(filePath, content) {
  ensureDirectoryExists(path.dirname(filePath));
  fs.writeFileSync(filePath, content);
}

// Generate pages for each city
console.log('🚀 Generating EXACT format city pages with PageHero component...\n');

cities.forEach(citySlug => {
  const cityName = citySlug.split('-').map(word =>
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

  // Create the exact format: /dumpster-rental-{city}-ut
  const exactPagePath = path.join(__dirname, 'app', `dumpster-rental-${citySlug}-ut`, 'page.tsx');
  writeFile(exactPagePath, exactCityPageTemplate(cityName, citySlug));
  
  console.log(`✅ Created: /dumpster-rental-${citySlug}-ut (with PageHero)`);
});

console.log('\n🎉 ALL EXACT FORMAT PAGES WITH PAGEHERO COMPONENT CREATED!');
console.log('\n🔗 Your new URLs:');
cities.forEach(citySlug => {
  console.log(`   /dumpster-rental-${citySlug}-ut`);
});

console.log('\n📁 Directory structure:');
console.log('   /app/dumpster-rental-murray-ut/page.tsx');
console.log('   /app/dumpster-rental-centerville-ut/page.tsx');
console.log('   /app/dumpster-rental-draper-ut/page.tsx');
console.log('   And so on for all cities...');

console.log('\n✨ Now you have:');
console.log('   1. ✅ Organized: /cities/murray/dumpster-rental');
console.log('   2. ✅ Dynamic: /dumpster-rental-[city]-ut (catch-all)');
console.log('   3. ✅ EXACT: /dumpster-rental-murray-ut (individual pages with PageHero)');
console.log('   4. ✅ Blog guides: /murray-dumpster-rental-guide-2025');
console.log('\n🖼️ Images added:');
console.log('   - 15-yard dumpster image (dumpster500x500-1.jpeg)');
console.log('   - 20-yard dumpster image (dumpster500x500-2.jpeg)');
console.log('   - 30-yard dumpster image (dumpster5-500x500-1.jpeg)');
console.log('   - Company logo (Icon_Dumpsters_Final.webp)');
console.log('   - Service areas image (dumpsterSmallBanner5.jpeg)');
console.log('\n🎨 PageHero component used for consistent styling across all pages!');
console.log('\n🚀 All working together perfectly with beautiful visuals and consistent branding!');

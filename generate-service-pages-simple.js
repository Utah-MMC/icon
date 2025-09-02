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

// Function to create commercial page content
function createCommercialPageContent(cityName, citySlug) {
  const functionName = cityName.replace(/\s+/g, '') + 'CommercialDumpsterRentalPage';
  
  return `import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import PageHero from '../../components/PageHero';

export const metadata: Metadata = {
  title: \`Commercial Dumpster Rental ${cityName}, UT | Business Waste Solutions | Icon Dumpsters\`,
  description: \`Commercial dumpster rental services in ${cityName}, Utah. Reliable waste management for businesses, construction sites, and commercial projects. Get a free quote today.\`,
  keywords: ['commercial dumpster rental', 'business waste management', 'construction dumpster', 'commercial waste removal', \`${cityName} commercial dumpster\`, 'utah business dumpster rental'],
  alternates: { canonical: \`/services/commercial-dumpster-rental-${citySlug}-ut\` },
  openGraph: {
    title: \`Commercial Dumpster Rental ${cityName}, UT | Business Waste Solutions\`,
    description: \`Commercial dumpster rental services in ${cityName}, Utah. Reliable waste management for businesses and construction sites.\`,
    url: \`https://icondumpsters.com/services/commercial-dumpster-rental-${citySlug}-ut\`,
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: \`${cityName} Commercial Dumpster Rental - Icon Dumpsters\` }],
    type: 'website'
  },
  robots: { index: true, follow: true }
};

export default function ${functionName}() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero
        title={\`Premier Commercial Dumpster Rental in ${cityName}, UT\`}
        subtitle={\`At Icon Dumpsters, we provide Commercial Dumpster Rental services designed for you – businesses and business owners in ${cityName} who need reliable, professional waste management solutions.\`}
        primaryCtaText="Reserve Commercial Dumpster Now!"
        primaryCtaLink="/free-quote"
        secondaryCtaText={\`Back to ${cityName}\`}
        secondaryCtaLink={\`/cities/${citySlug}\`}
        showCta={true}
      />

      {/* Commercial Services Overview */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Commercial Dumpster Services in ${cityName}</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Business Waste Management</h3>
            <p className="text-lg text-gray-600 mb-6">
              We provide comprehensive commercial dumpster rental services throughout ${cityName}, 
              helping businesses maintain clean, safe, and compliant work environments.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                <span>Flexible rental periods</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                <span>Multiple dumpster sizes</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                <span>Same-day delivery</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                <span>Professional waste disposal</span>
              </li>
            </ul>
          </div>
          
          <div className="relative">
            <div className="relative w-full h-64 rounded-lg overflow-hidden">
              <Image
                src="/images/dumpsterSmallBanner5.jpeg"
                alt="${cityName} commercial dumpster rental"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Commercial Dumpster Sizes */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Commercial Dumpster Sizes Available</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="relative w-full h-48 mb-6">
                <Image
                  src="/images/dumpster500x500-1.jpeg"
                  alt="15 yard commercial dumpster"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-600">15 Yard Commercial</h3>
              <p className="text-gray-600 mb-6">Perfect for small businesses and retail locations</p>
              <ul className="text-left space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Retail stores
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Office cleanouts
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Small renovations
                </li>
              </ul>
              <Link 
                href="/free-quote"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Quote
              </Link>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg text-center border-2 border-blue-600">
              <div className="relative w-full h-48 mb-6">
                <Image
                  src="/images/dumpster500x500-2.jpeg"
                  alt="20 yard commercial dumpster"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-600">20 Yard Commercial</h3>
              <p className="text-gray-600 mb-6">Ideal for medium businesses and construction projects</p>
              <ul className="text-left space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Restaurant renovations
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Office buildings
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Commercial construction
                </li>
              </ul>
              <Link 
                href="/free-quote"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Quote
              </Link>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="relative w-full h-48 mb-6">
                <Image
                  src="/images/dumpster5-500x500-1.jpeg"
                  alt="30 yard commercial dumpster"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-600">30 Yard Commercial</h3>
              <p className="text-gray-600 mb-6">For large commercial projects and demolition</p>
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
                  Industrial projects
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
      </div>

      {/* Commercial Industries Served */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Industries We Serve in ${cityName}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Construction</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• New building construction</li>
                <li>• Renovation projects</li>
                <li>• Demolition waste</li>
                <li>• Site preparation</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Restaurants</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Kitchen renovations</li>
                <li>• Equipment removal</li>
                <li>• Dining area updates</li>
                <li>• General maintenance</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Retail</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Store renovations</li>
                <li>• Inventory cleanouts</li>
                <li>• Display updates</li>
                <li>• Seasonal changes</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Manufacturing</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Production waste</li>
                <li>• Equipment disposal</li>
                <li>• Facility maintenance</li>
                <li>• Safety compliance</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Healthcare</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Facility renovations</li>
                <li>• Equipment updates</li>
                <li>• Compliance waste</li>
                <li>• General maintenance</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Office Buildings</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Office renovations</li>
                <li>• Furniture disposal</li>
                <li>• Technology updates</li>
                <li>• Space reconfiguration</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us for Commercial */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Why Choose Icon Dumpsters for Commercial Services?</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Professional ${cityName} Service</h3>
              <p className="text-lg text-gray-600 mb-6">
                We understand the unique needs of ${cityName} businesses and provide 
                reliable, professional dumpster rental services that keep your operations running smoothly.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-blue-600 mr-3">🚛</span>
                  <span>Flexible scheduling options</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-600 mr-3">📞</span>
                  <span>24/7 customer support</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-600 mr-3">📋</span>
                  <span>Compliance documentation</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-600 mr-3">💰</span>
                  <span>Competitive commercial pricing</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative w-full h-64 rounded-lg overflow-hidden">
                <Image
                  src="/images/Icon_Dumpsters_Final.webp"
                  alt="Icon Dumpsters commercial services"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready for Professional Waste Management in ${cityName}?</h2>
          <p className="text-xl mb-8">Get your commercial dumpster rental quote today</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/free-quote"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Commercial Quote
            </Link>
            <Link 
              href="/dumpster-rental-${citySlug}-ut"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              View All ${cityName} Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}`;
}

// Function to create residential page content
function createResidentialPageContent(cityName, citySlug) {
  const functionName = cityName.replace(/\s+/g, '') + 'ResidentialDumpsterRentalPage';
  
  return `import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import PageHero from '../../components/PageHero';

export const metadata: Metadata = {
  title: \`Residential Dumpster Rental ${cityName}, UT | Home Waste Removal | Icon Dumpsters\`,
  description: \`Residential dumpster rental services in ${cityName}, Utah. Home renovation, cleanout, and maintenance waste removal. Same-day delivery available.\`,
  keywords: ['residential dumpster rental', 'home waste removal', 'house cleanout', 'renovation dumpster', \`${cityName} residential dumpster\`, 'utah home dumpster rental'],
  alternates: { canonical: \`/services/residential-dumpster-rental-${citySlug}-ut\` },
  openGraph: {
    title: \`Residential Dumpster Rental ${cityName}, UT | Home Waste Removal\`,
    description: \`Residential dumpster rental services in ${cityName}, Utah. Home renovation, cleanout, and maintenance waste removal.\`,
    url: \`https://icondumpsters.com/services/residential-dumpster-rental-${citySlug}-ut\`,
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: \`${cityName} Residential Dumpster Rental - Icon Dumpsters\` }],
    type: 'website'
  },
  robots: { index: true, follow: true }
};

export default function ${functionName}() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero
        title={\`Premier Residential Dumpster Rental in ${cityName}, UT\`}
        subtitle={\`At Icon Dumpsters, we provide Residential Dumpster Rental services designed for you – ${cityName} homeowners and residents who need reliable, convenient waste removal solutions for your projects.\`}
        primaryCtaText="Reserve Residential Dumpster Now!"
        primaryCtaLink="/free-quote"
        secondaryCtaText={\`Back to ${cityName}\`}
        secondaryCtaLink={\`/cities/${citySlug}\`}
        showCta={true}
      />

      {/* Residential Services Overview */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Residential Dumpster Services in ${cityName}</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Home Waste Management</h3>
            <p className="text-lg text-gray-600 mb-6">
              We provide convenient residential dumpster rental services throughout ${cityName}, 
              helping homeowners tackle projects big and small with reliable waste removal solutions.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                <span>Flexible rental periods</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                <span>Multiple dumpster sizes</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                <span>Same-day delivery</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                <span>Environmentally responsible disposal</span>
              </li>
            </ul>
          </div>
          
          <div className="relative">
            <div className="relative w-full h-64 rounded-lg overflow-hidden">
              <Image
                src="/images/dumpsterSmallBanner5.jpeg"
                alt="${cityName} residential dumpster rental"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Residential Dumpster Sizes */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Residential Dumpster Sizes Available</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="relative w-full h-48 mb-6">
                <Image
                  src="/images/dumpster500x500-1.jpeg"
                  alt="15 yard residential dumpster"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-600">15 Yard Residential</h3>
              <p className="text-gray-600 mb-6">Perfect for small home projects and cleanouts</p>
              <ul className="text-left space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Kitchen remodels
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Bathroom renovations
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Garage cleanouts
                </li>
              </ul>
              <Link 
                href="/free-quote"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Quote
              </Link>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg text-center border-2 border-blue-600">
              <div className="relative w-full h-48 mb-6">
                <Image
                  src="/images/dumpster500x500-2.jpeg"
                  alt="20 yard residential dumpster"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-600">20 Yard Residential</h3>
              <p className="text-gray-600 mb-6">Great for medium home projects and renovations</p>
              <ul className="text-left space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Full home renovations
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Basement finishing
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Large cleanouts
                </li>
              </ul>
              <Link 
                href="/free-quote"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Quote
              </Link>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="relative w-full h-48 mb-6">
                <Image
                  src="/images/dumpster5-500x500-1.jpeg"
                  alt="30 yard residential dumpster"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-600">30 Yard Residential</h3>
              <p className="text-gray-600 mb-6">For major home projects and construction</p>
              <ul className="text-left space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Major renovations
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Home additions
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Complete home cleanouts</li>
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
      </div>

      {/* Residential Projects Served */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Home Projects We Support in ${cityName}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Home Renovations</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Kitchen remodels</li>
                <li>• Bathroom updates</li>
                <li>• Basement finishing</li>
                <li>• Room additions</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Cleanouts</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Garage organization</li>
                <li>• Attic cleanouts</li>
                <li>• Estate cleanouts</li>
                <li>• Moving preparation</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Landscaping</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Yard waste removal</li>
                <li>• Tree trimming debris</li>
                <li>• Garden renovations</li>
                <li>• Hardscape projects</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Maintenance</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Roof repairs</li>
                <li>• Siding replacement</li>
                <li>• Deck maintenance</li>
                <li>• General repairs</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Seasonal</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Spring cleaning</li>
                <li>• Fall yard work</li>
                <li>• Holiday preparation</li>
                <li>• Weather damage</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Special Events</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Party cleanup</li>
                <li>• Event preparation</li>
                <li>• Temporary projects</li>
                <li>• Quick cleanups</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us for Residential */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Why Choose Icon Dumpsters for Residential Services?</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Local ${cityName} Expertise</h3>
              <p className="text-lg text-gray-600 mb-6">
                We're your neighbors in ${cityName} and understand the unique needs of local 
                homeowners. Our residential dumpster rental services are designed with your convenience in mind.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-blue-600 mr-3">🏠</span>
                  <span>Homeowner-friendly pricing</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-600 mr-3">📅</span>
                  <span>Flexible scheduling</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-600 mr-3">🌱</span>
                  <span>Eco-friendly disposal</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-600 mr-3">📞</span>
                  <span>Local customer support</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative w-full h-64 rounded-lg overflow-hidden">
                <Image
                  src="/images/Icon_Dumpsters_Final.webp"
                  alt="Icon Dumpsters residential services"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Tackle Your ${cityName} Home Project?</h2>
          <p className="text-xl mb-8">Get your residential dumpster rental quote today</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/free-quote"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Residential Quote
            </Link>
            <Link 
              href="/dumpster-rental-${citySlug}-ut"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              View All ${cityName} Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}`;
}

// Function to create service directories and pages
function createServicePages(citySlug) {
  const cityName = citySlug.split('-').map(word =>
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

  // Create services directory if it doesn't exist
  const servicesDir = path.join(__dirname, 'app', 'services');
  if (!fs.existsSync(servicesDir)) {
    fs.mkdirSync(servicesDir, { recursive: true });
  }

  // Create commercial page
  const commercialDir = path.join(servicesDir, `commercial-dumpster-rental-${citySlug}-ut`);
  if (!fs.existsSync(commercialDir)) {
    fs.mkdirSync(commercialDir, { recursive: true });
  }
  
  const commercialPagePath = path.join(commercialDir, 'page.tsx');
  const commercialContent = createCommercialPageContent(cityName, citySlug);
  fs.writeFileSync(commercialPagePath, commercialContent);

  // Create residential page
  const residentialDir = path.join(servicesDir, `residential-dumpster-rental-${citySlug}-ut`);
  if (!fs.existsSync(residentialDir)) {
    fs.mkdirSync(residentialDir, { recursive: true });
  }
  
  const residentialPagePath = path.join(residentialDir, 'page.tsx');
  const residentialContent = createResidentialPageContent(cityName, citySlug);
  fs.writeFileSync(residentialPagePath, residentialContent);

  console.log(`✅ Created service pages for ${cityName}:`);
  console.log(`   📁 /services/commercial-dumpster-rental-${citySlug}-ut/page.tsx`);
  console.log(`   📁 /services/residential-dumpster-rental-${citySlug}-ut/page.tsx`);
}

// Main execution
console.log('🚀 Generating commercial and residential dumpster rental service pages...\n');

cities.forEach(citySlug => {
  createServicePages(citySlug);
});

console.log('\n🎉 SERVICE PAGES GENERATION COMPLETE!');
console.log('\n📁 New service pages created:');
console.log(`   ✅ ${cities.length} Commercial dumpster rental pages`);
console.log(`   ✅ ${cities.length} Residential dumpster rental pages`);
console.log('\n🔗 New URL structure:');
console.log('   • /services/commercial-dumpster-rental-{city}-ut');
console.log('   • /services/residential-dumpster-rental-{city}-ut');
console.log('\n✨ All pages use the new business-focused header style!');
console.log('\n🚀 Ready to build and deploy!');

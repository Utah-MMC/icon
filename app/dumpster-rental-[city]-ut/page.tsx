import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';

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

interface PageProps {
  params: Promise<{
    city: string;
  }>;
}

export async function generateStaticParams() {
  return cities.map((city) => ({
    city: city,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const citySlug = resolvedParams.city;
  
  if (!cities.includes(citySlug)) {
    return {
      title: 'City Not Found',
    };
  }

  const cityName = citySlug.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

  return {
    title: `Dumpster Rental ${cityName}, UT | Same-Day Delivery | Icon Dumpsters`,
    description: `${cityName} dumpster rental with same-day delivery. 15-30 yard roll-off dumpsters, transparent pricing, and fast service. Get a free quote today.`,
    keywords: ['dumpster rental', 'dumpster rental near me', 'utah dumpster rental', 'dumpster rental Utah', `${cityName} dumpster`],
    alternates: { canonical: `/dumpster-rental-${citySlug}-ut` },
    openGraph: {
      title: `Dumpster Rental ${cityName}, UT | Same-Day Delivery | Icon Dumpsters`,
      description: `${cityName} dumpster rental with same-day delivery. 15-30 yard roll-off dumpsters, transparent pricing, and fast service.`,
      url: `https://icondumpsters.com/dumpster-rental-${citySlug}-ut`,
      images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: `${cityName} Dumpster Rental - Icon Dumpsters` }],
      type: 'website'
    },
    robots: { index: true, follow: true }
  };
}

export default async function CityDumpsterRentalPage({ params }: PageProps) {
  const resolvedParams = await params;
  const citySlug = resolvedParams.city;
  
  if (!cities.includes(citySlug)) {
    notFound();
  }

  const cityName = citySlug.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Dumpster Rental in {cityName}, UT</h1>
          <p className="text-xl mb-8">Fast, reliable dumpster delivery for all your {cityName} projects</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="https://icondumpsters.com/free-quote"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Free Quote
            </Link>
            <Link 
              href={`/cities/${citySlug}`}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Back to {cityName}
            </Link>
          </div>
        </div>
      </div>

      {/* Dumpster Sizes Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Dumpster Sizes Available in {cityName}</h2>
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
              href="https://icondumpsters.com/free-quote"
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
              href="https://icondumpsters.com/free-quote"
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
              href="https://icondumpsters.com/free-quote"
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
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Why Choose Icon Dumpsters in {cityName}?</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Local {cityName} Service</h3>
              <p className="text-lg text-gray-600 mb-6">
                We're your local {cityName} dumpster rental experts. Our team knows the area, 
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
                  <span>Local {cityName} phone: (801) 918-6000</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-600 mr-3">📍</span>
                  <span>Serving all {cityName} neighborhoods</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">{cityName} Service Areas</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  {cityName} Central
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  {cityName} East
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  {cityName} West
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  {cityName} South
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  {cityName} North
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
          <h2 className="text-3xl font-bold mb-6">Ready for Your {cityName} Project?</h2>
          <p className="text-xl mb-8">Get your free dumpster rental quote today</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="https://icondumpsters.com/free-quote"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Free Quote
            </Link>
            <Link 
              href={`/${citySlug}-dumpster-rental-guide-2025`}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Read Our {cityName} Guide
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

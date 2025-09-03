import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '../../components/PageHero';

export const metadata: Metadata = {
  title: 'Salt Lake City, UT | Icon Dumpsters - Local Dumpster Rental Services',
  description: 'Salt Lake City, Utah dumpster rental services. Get fast, reliable dumpster delivery for your construction, renovation, or cleanup projects.',
  keywords: ['Salt Lake City UT', 'Salt Lake City Utah', 'Salt Lake City dumpster rental', 'Salt Lake City construction', 'Salt Lake City renovation'],
  alternates: { canonical: '/cities/salt-lake-city' },
  openGraph: {
    title: 'Salt Lake City, UT Dumpster Rental - Icon Dumpsters',
    description: 'Salt Lake City, Utah dumpster rental services. Fast, reliable waste management solutions.',
    url: 'https://icondumpsters.com/cities/salt-lake-city',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'Salt Lake City Dumpster Rental - Icon Dumpsters' }],
    type: 'website'
  },
  robots: { index: true, follow: true }
};

export default function SaltLakeCityCityPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section using PageHero component */}
      <PageHero
        title={`Salt Lake City, Utah`}
        subtitle={`Your trusted partner for dumpster rental services in Salt Lake City`}
        primaryCtaText="Get Dumpster Quote"
        primaryCtaLink="/dumpster-rental-salt-lake-city-ut"
        secondaryCtaText="Read Our Guide"
        secondaryCtaLink="/salt-lake-city-dumpster-rental-guide-2025"
      />

      {/* City Info Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">About Salt Lake City</h2>
            <p className="text-lg text-gray-600 mb-6">
              Salt Lake City is a vibrant city in Utah, known for its excellent community spirit and 
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
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Services in Salt Lake City</h2>
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
          <p className="text-xl mb-8">Get your free dumpster rental quote for your Salt Lake City project today</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/dumpster-rental-salt-lake-city-ut"
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
}
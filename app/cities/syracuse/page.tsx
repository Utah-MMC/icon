import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/app/components/PageHero';

export const metadata: Metadata = {
  title: 'Syracuse, UT | Icon Dumpsters - Local Dumpster Rental Services',
  description: 'Syracuse, Utah dumpster rental services. Get fast, reliable dumpster delivery for your construction, renovation, or cleanup projects.',
  keywords: ['Syracuse UT', 'Syracuse Utah', 'Syracuse dumpster rental', 'Syracuse construction', 'Syracuse renovation'],
  alternates: { canonical: '/cities/syracuse' },
  openGraph: {
    title: 'Syracuse, UT Dumpster Rental - Icon Dumpsters',
    description: 'Syracuse, Utah dumpster rental services. Fast, reliable waste management solutions.',
    url: 'https://icondumpsters.com/cities/syracuse',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'Syracuse Dumpster Rental - Icon Dumpsters' }],
    type: 'website'
  },
  robots: { index: true, follow: true }
};

export default function SyracuseCityPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section using PageHero component */}
      <PageHero
        title={`Syracuse, Utah`}
        subtitle={`Your trusted partner for dumpster rental services in Syracuse`}
        primaryCtaText="Get Dumpster Quote"
        primaryCtaLink="/dumpster-rental-syracuse-ut"
        secondaryCtaText="Read Our Guide"
        secondaryCtaLink="/syracuse-dumpster-rental-guide-2025"
      />

      {/* City Info Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">About Syracuse</h2>
            <p className="text-lg text-gray-600 mb-6">
              Syracuse is a vibrant city in Utah, known for its excellent community spirit and 
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
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Services in Syracuse</h2>
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
          <p className="text-xl mb-8">Get your free dumpster rental quote for your Syracuse project today</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/dumpster-rental-syracuse-ut"
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
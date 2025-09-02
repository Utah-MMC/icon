import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Dumpster Rental North Salt Lake, UT | Fast Delivery & Competitive Pricing',
  description: 'Dumpster rental in North Salt Lake, Utah. Multiple sizes available with same-day delivery. Get competitive pricing and professional service from Icon Dumpsters.',
  keywords: ['dumpster rental North Salt Lake', 'North Salt Lake dumpster', 'utah dumpster rental', 'construction waste removal'],
  alternates: { canonical: '/dumpster-rental-north-salt-lake-ut' },
  openGraph: {
    title: 'Dumpster Rental North Salt Lake, UT | Fast Delivery & Competitive Pricing',
    description: 'Dumpster rental in North Salt Lake, Utah. Multiple sizes available with same-day delivery. Get competitive pricing and professional service.',
    url: 'https://icondumpsters.com/dumpster-rental-north-salt-lake-ut',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'North Salt Lake Dumpster Rental - Icon Dumpsters' }],
    type: 'website'
  },
  robots: { index: true, follow: true }
};

export default function NorthSaltLakeDumpsterRentalPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Dumpster Rental in North Salt Lake, UT</h1>
          <p className="text-xl mb-8">Fast, reliable dumpster delivery for all your North Salt Lake projects</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/free-quote"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Free Quote
            </Link>
            <Link 
              href="/cities/north-salt-lake"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Back to North Salt Lake
            </Link>
          </div>
        </div>
      </div>

      {/* Dumpster Sizes Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Dumpster Sizes Available in North Salt Lake</h2>
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
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Why Choose Icon Dumpsters in North Salt Lake?</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Local North Salt Lake Service</h3>
              <p className="text-lg text-gray-600 mb-6">
                We're your local North Salt Lake dumpster rental experts. Our team knows the area, 
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
                  <span>Local North Salt Lake phone: (801) 918-6000</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-600 mr-3">📍</span>
                  <span>Serving all North Salt Lake neighborhoods</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">North Salt Lake Service Areas</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  North Salt Lake Central
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  North Salt Lake East
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  North Salt Lake West
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  North Salt Lake South
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  North Salt Lake North
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
          <h2 className="text-3xl font-bold mb-6">Ready for Your North Salt Lake Project?</h2>
          <p className="text-xl mb-8">Get your free dumpster rental quote today</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/free-quote"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Free Quote
            </Link>
            <Link 
              href="/north-salt-lake-dumpster-rental-guide-2025"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Read Our North Salt Lake Guide
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
import { Metadata } from 'next';
import DumpsterCalculator from '../components/DumpsterCalculator';
import QuoteForm from '../components/QuoteForm';

export const metadata: Metadata = {
  title: "Sandy Dumpster Rental - Professional Services in Sandy, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in Sandy, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "Sandy dumpster rental, dumpster rental Sandy UT, Sandy Utah dumpster, roll-off dumpster Sandy, construction dumpster Sandy, waste management Sandy",
  openGraph: {
    title: "Sandy Dumpster Rental - Professional Services in Sandy, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Sandy, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
    url: 'https://icondumpsters.com/sandy',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/Icon_Dumpsters_Final.png',
        width: 1200,
        height: 630,
        alt: 'Sandy Dumpster Rental - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Sandy Dumpster Rental - Professional Services in Sandy, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Sandy, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    images: ['/images/Icon_Dumpsters_Final.png'],
  },
  alternates: {
    canonical: '/sandy',
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

export default function SandyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Dumpster Rental Sandy, UT
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Professional dumpster rental services in Sandy, Utah. Get same-day delivery for 15-30 yard roll-off dumpsters.
        </p>

        {/* Dumpster Calculator Section - Moved to Top */}
        <div id="pricing" className="mb-12">
          <DumpsterCalculator />
        </div>
        
        <div className="bg-gray-50 p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Icon Dumpsters in Sandy?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Same-day delivery to Sandy and surrounding areas</li>
            <li>Competitive pricing with no hidden fees</li>
            <li>Flexible rental periods (1-30 days)</li>
            <li>Professional customer service</li>
            <li>Local knowledge of Sandy regulations</li>
            <li>Multiple dumpster sizes available</li>
          </ul>
        </div>

        <div className="bg-blue-50 p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Sandy Service Areas</h2>
          <p className="text-gray-600 mb-4">We serve all of Sandy and surrounding communities:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Sandy Areas:</h3>
              <ul className="space-y-1 text-gray-600">
                <li>• Downtown Sandy</li>
                <li>• Sandy Heights</li>
                <li>• Sandy East</li>
                <li>• Sandy West</li>
                <li>• Sandy Hills</li>
              </ul>
            </div>
        {/* City-Specific Information */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About Sandy</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Sandy, the gateway to Little Cottonwood Canyon, serves as the access point to world-famous Alta and Snowbird ski resorts. Our dumpster services support Sandy's residential and commercial growth.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Local Landmarks</h3>
              <p className="text-gray-600 text-sm">Little Cottonwood Canyon, Alta Ski Resort, Snowbird, Sandy City Hall</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Recent Projects</h3>
              <p className="text-gray-600 text-sm">Supporting Sandy's annual Harvest Festival cleanup and residential development projects</p>
            </div>
          </div>
        </div>

        <div className="bg-green-50 p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Sandy Service Areas</h2>
          <p className="text-gray-600 mb-4">We serve all of Sandy and surrounding communities:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Sandy Areas:</h3>
              <ul className="space-y-1 text-gray-600">
                <li>• Sandy Heights</li>
                <li>• Bell Canyon</li>
                <li>• White City</li>
                <li>• Sandy Central</li>
                <li>• Sandy East</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Local Partnerships:</h3>
              <p className="text-gray-600 text-sm">Preferred dumpster provider for Sandy's residential development projects</p>
            </div>
          </div>
        </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Nearby Cities:</h3>
              <ul className="space-y-1 text-gray-600">
                <li>• <a href="/murray" className="text-[#4e37a8] hover:underline">Murray</a></li>
                <li>• <a href="/midvale" className="text-[#4e37a8] hover:underline">Midvale</a></li>
                <li>• <a href="/west-jordan" className="text-[#4e37a8] hover:underline">West Jordan</a></li>
                <li>• <a href="/south-jordan" className="text-[#4e37a8] hover:underline">South Jordan</a></li>
                <li>• <a href="/draper" className="text-[#4e37a8] hover:underline">Draper</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-green-50 p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Sandy Dumpster Services</h2>
          <p className="text-gray-600 mb-4">Explore our comprehensive dumpster rental services in Sandy:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Dumpster Sizes</h3>
              <p className="text-gray-600 mb-3">15, 20, and 30 yard options</p>
              <a href="/dumpster-sizes" className="text-[#4e37a8] hover:underline font-medium">
                View All Sizes →
              </a>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Pricing</h3>
              <p className="text-gray-600 mb-3">Competitive rates with no hidden fees</p>
              <a href="#pricing" className="text-[#4e37a8] hover:underline font-medium">
                Get Quote →
              </a>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Services</h3>
              <p className="text-gray-600 mb-3">Residential and commercial solutions</p>
              <a href="/services" className="text-[#4e37a8] hover:underline font-medium">
                Learn More →
              </a>
            </div>
          </div>
        </div>

        {/* Quote Form Section */}
        <div className="mb-12">
          <QuoteForm />
        </div>
      </div>
    </div>
  );
}

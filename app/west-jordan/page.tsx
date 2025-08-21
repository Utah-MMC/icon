import { Metadata } from 'next';
import DumpsterCalculator from '../components/DumpsterCalculator';
import QuoteForm from '../components/QuoteForm';

export const metadata: Metadata = {
  title: "West Jordan Dumpster Rental - Professional Services in West Jordan, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in West Jordan, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "West Jordan dumpster rental, dumpster rental West Jordan UT, West Jordan Utah dumpster, roll-off dumpster West Jordan, construction dumpster West Jordan, waste management West Jordan",
  openGraph: {
    title: "West Jordan Dumpster Rental - Professional Services in West Jordan, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in West Jordan, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
    url: 'https://www.icondumpsters.com/west-jordan',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/Icon_Dumpsters_Final.png',
        width: 1200,
        height: 630,
        alt: 'West Jordan Dumpster Rental - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "West Jordan Dumpster Rental - Professional Services in West Jordan, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in West Jordan, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    images: ['/Icon_Dumpsters_Final.png'],
  },
  alternates: {
    canonical: '/west-jordan',
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

export default function WestJordanPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Dumpster Rental West Jordan, UT
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Professional dumpster rental services in West Jordan, Utah. Get same-day delivery for 15-30 yard roll-off dumpsters.
        </p>

        {/* Dumpster Calculator Section - Moved to Top */}
        <div id="pricing" className="mb-12">
          <DumpsterCalculator />
        </div>
        
        <div className="bg-gray-50 p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Icon Dumpsters in West Jordan?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Same-day delivery to West Jordan and surrounding areas</li>
            <li>Competitive pricing with no hidden fees</li>
            <li>Flexible rental periods (1-30 days)</li>
            <li>Professional customer service</li>
            <li>Local knowledge of West Jordan regulations</li>
            <li>Multiple dumpster sizes available</li>
          </ul>
        </div>

        <div className="bg-blue-50 p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">West Jordan Service Areas</h2>
          <p className="text-gray-600 mb-4">We serve all of West Jordan and surrounding communities:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">West Jordan Areas:</h3>
              <ul className="space-y-1 text-gray-600">
                <li>• Downtown West Jordan</li>
                <li>• West Jordan Heights</li>
                <li>• West Jordan East</li>
                <li>• West Jordan West</li>
                <li>• Jordan Landing</li>
              </ul>
            </div>
        {/* City-Specific Information */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About West Jordan</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            West Jordan, named after the Jordan River, is home to the historic Gardner Village and Jordan Landing shopping center. We provide reliable dumpster services for West Jordan's diverse community.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Local Landmarks</h3>
              <p className="text-gray-600 text-sm">Gardner Village, Jordan Landing, Jordan River Parkway, West Jordan City Hall</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Recent Projects</h3>
              <p className="text-gray-600 text-sm">Proud to serve West Jordan's community garden projects and Jordan Landing developments</p>
            </div>
          </div>
        </div>

        <div className="bg-green-50 p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">West Jordan Service Areas</h2>
          <p className="text-gray-600 mb-4">We serve all of West Jordan and surrounding communities:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">West Jordan Areas:</h3>
              <ul className="space-y-1 text-gray-600">
                <li>• Jordan Landing</li>
                <li>• West Jordan Central</li>
                <li>• West Jordan East</li>
                <li>• West Jordan West</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Local Partnerships:</h3>
              <p className="text-gray-600 text-sm">Trusted partner for West Jordan's construction and renovation projects</p>
            </div>
          </div>
        </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Nearby Cities:</h3>
              <ul className="space-y-1 text-gray-600">
                <li>• <a href="/murray" className="text-[#4e37a8] hover:underline">Murray</a></li>
                <li>• <a href="/midvale" className="text-[#4e37a8] hover:underline">Midvale</a></li>
                <li>• <a href="/sandy" className="text-[#4e37a8] hover:underline">Sandy</a></li>
                <li>• <a href="/south-jordan" className="text-[#4e37a8] hover:underline">South Jordan</a></li>
                <li>• <a href="/draper" className="text-[#4e37a8] hover:underline">Draper</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-green-50 p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">West Jordan Dumpster Services</h2>
          <p className="text-gray-600 mb-4">Explore our comprehensive dumpster rental services in West Jordan:</p>
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

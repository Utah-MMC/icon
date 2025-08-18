import { Metadata } from 'next';
import DumpsterCalculator from '../components/DumpsterCalculator';
import QuoteForm from '../components/QuoteForm';

export const metadata: Metadata = {
  title: "Salt Lake City Dumpster Rental - Professional Services in SLC, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in Salt Lake City, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "Salt Lake City dumpster rental, dumpster rental SLC UT, Salt Lake City Utah dumpster, roll-off dumpster Salt Lake City, construction dumpster SLC, waste management Salt Lake City",
  openGraph: {
    title: "Salt Lake City Dumpster Rental - Professional Services in SLC, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Salt Lake City, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
    url: 'https://icondumpsters.com/salt-lake-city',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/Icon_Dumpsters_Final.png',
        width: 1200,
        height: 630,
        alt: 'Salt Lake City Dumpster Rental - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Salt Lake City Dumpster Rental - Professional Services in SLC, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Salt Lake City, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    images: ['/images/Icon_Dumpsters_Final.png'],
  },
  alternates: {
    canonical: '/salt-lake-city',
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

export default function SaltLakeCityPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Dumpster Rental Salt Lake City, UT
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Professional dumpster rental services in Salt Lake City, Utah. Get same-day delivery for 15-30 yard roll-off dumpsters.
        </p>
        <div id="pricing" className="mb-12">
          <DumpsterCalculator />
        </div>
        <div className="bg-gray-50 p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Icon Dumpsters in Salt Lake City?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Same-day delivery to Salt Lake City and surrounding areas</li>
            <li>Competitive pricing with no hidden fees</li>
            <li>Flexible rental periods (1-30 days)</li>
            <li>Professional customer service</li>
            <li>Local knowledge of Salt Lake City regulations</li>
            <li>Multiple dumpster sizes available</li>
          </ul>
        </div>
        <div className="bg-blue-50 p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Salt Lake City Service Areas</h2>
          <p className="text-gray-600 mb-4">We serve all of Salt Lake City and surrounding communities:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Salt Lake City Areas:</h3>
              <ul className="space-y-1 text-gray-600">
                <li>• Downtown Salt Lake City</li>
                <li>• Sugar House</li>
                <li>• Rose Park</li>
                <li>• Glendale</li>
                <li>• Poplar Grove</li>
              </ul>
            </div>
        {/* City-Specific Information */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About Salt Lake City</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Founded by Brigham Young in 1847, Salt Lake City is Utah's capital and home to Temple Square and the Utah State Capitol. Our dumpster services support the city's ongoing development.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Local Landmarks</h3>
              <p className="text-gray-600 text-sm">Temple Square, Utah State Capitol, Liberty Park, The Gateway, Downtown</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Recent Projects</h3>
              <p className="text-gray-600 text-sm">Supporting downtown Salt Lake City renovations and Liberty Park improvements</p>
            </div>
          </div>
        </div>

        <div className="bg-green-50 p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Salt Lake City Service Areas</h2>
          <p className="text-gray-600 mb-4">We serve all of Salt Lake City and surrounding communities:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Salt Lake City Areas:</h3>
              <ul className="space-y-1 text-gray-600">
                <li>• Downtown</li>
                <li>• Sugar House</li>
                <li>• Rose Park</li>
                <li>• Poplar Grove</li>
                <li>• Glendale</li>
                <li>• Fairpark</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Local Partnerships:</h3>
              <p className="text-gray-600 text-sm">Preferred provider for downtown Salt Lake City construction projects</p>
            </div>
          </div>
        </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Nearby Cities:</h3>
              <ul className="space-y-1 text-gray-600">
                <li>• <a href="/downtown-salt-lake" className="text-[#4e37a8] hover:underline">Downtown Salt Lake</a></li>
                <li>• <a href="/sugar-house" className="text-[#4e37a8] hover:underline">Sugar House</a></li>
                <li>• <a href="/rose-park" className="text-[#4e37a8] hover:underline">Rose Park</a></li>
                <li>• <a href="/glendale" className="text-[#4e37a8] hover:underline">Glendale</a></li>
                <li>• <a href="/poplar-grove" className="text-[#4e37a8] hover:underline">Poplar Grove</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-green-50 p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Salt Lake City Dumpster Services</h2>
          <p className="text-gray-600 mb-4">Explore our comprehensive dumpster rental services in Salt Lake City:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Dumpster Sizes</h3>
              <p className="text-gray-600 mb-3">15, 20, and 30 yard options</p>
              <a href="/dumpster-sizes" className="text-[#4e37a8] hover:underline font-medium">View All Sizes →</a>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Pricing</h3>
              <p className="text-gray-600 mb-3">Competitive rates with no hidden fees</p>
              <a href="#pricing" className="text-[#4e37a8] hover:underline font-medium">Get Quote →</a>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Services</h3>
              <p className="text-gray-600 mb-3">Residential and commercial solutions</p>
              <a href="/services" className="text-[#4e37a8] hover:underline font-medium">Learn More →</a>
            </div>
          </div>
        </div>
        <div className="mb-12">
          <QuoteForm />
        </div>
      </div>
    </div>
  );
}

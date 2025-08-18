import { Metadata } from 'next';
import DumpsterCalculator from '../components/DumpsterCalculator';
import QuoteForm from '../components/QuoteForm';

export const metadata: Metadata = {
  title: "Draper Dumpster Rental - Professional Services in Draper, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in Draper, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "Draper dumpster rental, dumpster rental Draper UT, Draper Utah dumpster, roll-off dumpster Draper, construction dumpster Draper, waste management Draper",
  openGraph: {
    title: "Draper Dumpster Rental - Professional Services in Draper, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Draper, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
    url: 'https://icondumpsters.com/draper',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/Icon_Dumpsters_Final.png',
        width: 1200,
        height: 630,
        alt: 'Draper Dumpster Rental - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Draper Dumpster Rental - Professional Services in Draper, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Draper, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    images: ['/images/Icon_Dumpsters_Final.png'],
  },
  alternates: {
    canonical: '/draper',
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

export default function DraperPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Dumpster Rental Draper, UT
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Professional dumpster rental services in Draper, Utah. Get same-day delivery for 15-30 yard roll-off dumpsters.
        </p>

        {/* Dumpster Calculator Section - Moved to Top */}
        <div id="pricing" className="mb-12">
          <DumpsterCalculator />
        </div>
        
        <div className="bg-gray-50 p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Icon Dumpsters in Draper?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Same-day delivery to Draper and surrounding areas</li>
            <li>Competitive pricing with no hidden fees</li>
            <li>Flexible rental periods (1-30 days)</li>
            <li>Professional customer service</li>
            <li>Local knowledge of Draper regulations</li>
            <li>Multiple dumpster sizes available</li>
          </ul>
        </div>

        <div className="bg-blue-50 p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Draper Service Areas</h2>
          <p className="text-gray-600 mb-4">We serve all of Draper and surrounding communities:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Draper Areas:</h3>
              <ul className="space-y-1 text-gray-600">
                <li>• Downtown Draper</li>
                <li>• Draper Heights</li>
                <li>• Suncrest</li>
                <li>• Draper East</li>
                <li>• Draper West</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Nearby Cities:</h3>
              <ul className="space-y-1 text-gray-600">
                <li>• <a href="/murray" className="text-[#4e37a8] hover:underline">Murray</a></li>
                <li>• <a href="/midvale" className="text-[#4e37a8] hover:underline">Midvale</a></li>
                <li>• <a href="/sandy" className="text-[#4e37a8] hover:underline">Sandy</a></li>
                <li>• <a href="/west-jordan" className="text-[#4e37a8] hover:underline">West Jordan</a></li>
                <li>• <a href="/south-jordan" className="text-[#4e37a8] hover:underline">South Jordan</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-green-50 p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Draper Dumpster Services</h2>
          <p className="text-gray-600 mb-4">Explore our comprehensive dumpster rental services in Draper:</p>
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

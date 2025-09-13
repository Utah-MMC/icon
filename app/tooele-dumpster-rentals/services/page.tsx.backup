import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Tooele Dumpster Rental Services - Residential & Commercial | Icon Dumpsters",
  description: "Comprehensive dumpster rental services in Tooele, Utah. Residential, commercial, construction, and demolition services. Same-day delivery available.",
  keywords: "Tooele dumpster rental services, residential dumpster Tooele, commercial dumpster Tooele, construction dumpster Tooele",
  openGraph: {
    title: "Tooele Dumpster Rental Services - Residential & Commercial | Icon Dumpsters",
    description: "Comprehensive dumpster rental services in Tooele, Utah. Residential, commercial, construction, and demolition services.",
    url: 'https://icondumpsters.com/tooele-dumpster-rentals/services',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Tooele Dumpster Rental Services - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: '/tooele-dumpster-rentals/services',
  },
};

export default function TooeleServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#4e37a8] to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Tooele Dumpster Rental Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Comprehensive dumpster rental services in Tooele, Utah. Residential, commercial, construction, and demolition services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:801-918-6000" 
                className="bg-white text-[#4e37a8] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                📞 Call (801) 918-6000
              </a>
              <a 
                href="https://icondumpsters.com/tooele-dumpster-rentals#quote-form" 
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#4e37a8] transition-colors"
              >
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Residential Services */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">🏠 Residential Services</h2>
            <ul className="space-y-3 text-lg text-gray-700 mb-6">
              <li>• Home renovations and remodeling</li>
              <li>• Basement cleanouts</li>
              <li>• Garage organization</li>
              <li>• Yard waste removal</li>
              <li>• Estate cleanouts</li>
              <li>• Spring cleaning projects</li>
              <li>• Moving and relocation</li>
            </ul>
            <Link 
              href="https://icondumpsters.com/tooele-dumpster-rentals"
              className="inline-block bg-[#4e37a8] text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              View Residential Options →
            </Link>
          </div>

          {/* Commercial Services */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">🏢 Commercial Services</h2>
            <ul className="space-y-3 text-lg text-gray-700 mb-6">
              <li>• Construction and demolition</li>
              <li>• Office renovations</li>
              <li>• Retail store cleanouts</li>
              <li>• Industrial waste removal</li>
              <li>• Event cleanup</li>
              <li>• Restaurant renovations</li>
              <li>• Warehouse cleanouts</li>
            </ul>
            <Link 
              href="https://icondumpsters.com/tooele-dumpster-rentals"
              className="inline-block bg-[#4e37a8] text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              View Commercial Options →
            </Link>
          </div>
        </div>

        {/* Service Features */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">🚚 Same-Day Delivery</h3>
            <p className="text-gray-700">Fast, reliable delivery throughout Tooele and surrounding areas.</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold text-green-900 mb-4">💰 Competitive Pricing</h3>
            <p className="text-gray-700">Transparent pricing with no hidden fees. Best rates in Tooele.</p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold text-purple-900 mb-4">📞 Expert Support</h3>
            <p className="text-gray-700">Professional customer service and project consultation available.</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <Link 
            href="https://icondumpsters.com/tooele-dumpster-rentals"
            className="inline-block bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors"
          >
            ← Back to Tooele Dumpster Rentals
          </Link>
        </div>
      </div>
    </div>
  );
}
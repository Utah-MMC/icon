import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '../components/PageHero';
import QuoteForm from '../components/QuoteForm';

export const metadata: Metadata = {
  title: "Millcreek Dumpster Rental - Professional Dumpster Services in Millcreek, UT | (801) 918-6000",
  description: "Professional dumpster rental services in Millcreek, Utah. Fast delivery, competitive pricing, and reliable waste management solutions. Call (801) 918-6000 for instant quotes.",
  keywords: "Millcreek dumpster rental, dumpster rental Millcreek UT, Millcreek Utah dumpster, roll-off dumpster Millcreek, construction dumpster Millcreek, waste management Millcreek",
  openGraph: {
    title: "Millcreek Dumpster Rental - Professional Dumpster Services in Millcreek, UT | (801) 918-6000",
    description: "Professional dumpster rental services in Millcreek, Utah. Fast delivery, competitive pricing, and reliable waste management solutions.",
    url: 'https://icondumpsters.com/millcreek',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Millcreek Dumpster Rental - Professional Dumpster Services in Millcreek, UT',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Millcreek Dumpster Rental - Professional Dumpster Services in Millcreek, UT | (801) 918-6000",
    description: "Professional dumpster rental services in Millcreek, Utah. Fast delivery, competitive pricing, and reliable waste management solutions.",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/millcreek',
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
  other: {
    'geo.region': 'US-UT',
    'geo.placename': 'Millcreek, Utah',
    'geo.position': '40.7608;-111.8910',
    'ICBM': '40.7608, -111.8910',
  },
};

export default function MillcreekPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#4e37a8] to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Millcreek Dumpster Rental
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Professional dumpster rental services in Millcreek, Utah. Fast delivery, competitive pricing, and reliable waste management solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:801-918-6000" 
                className="bg-white text-[#4e37a8] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                ðŸ“ž Call (801) 918-6000
              </a>
              <a 
                href="#quote-form" 
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
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2">
            {/* Service Overview */}
            <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Dumpster Rental Services in Millcreek</h2>
              <p className="text-lg text-gray-700 mb-6">
                Icon Dumpsters provides reliable dumpster rental services throughout Millcreek, Utah. Whether you're tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.
              </p>                
                {/* Hero Image */}
                <div className="mb-8">
                  <img 
                    src="/images/IMG_0350.jpg" 
                    alt="Professional dumpster rental services in Millcreek, Utah - Icon Dumpsters" 
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
                </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">ðŸ  Residential Projects</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>â€¢ Home renovations and remodeling</li>
                    <li>â€¢ Basement cleanouts</li>
                    <li>â€¢ Garage organization</li>
                    <li>â€¢ Yard waste removal</li>
                    <li>â€¢ Estate cleanouts</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">ðŸ¢ Commercial Projects</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>â€¢ Construction and demolition</li>
                    <li>â€¢ Office renovations</li>
                    <li>â€¢ Retail store cleanouts</li>
                    <li>â€¢ Industrial waste removal</li>
                    <li>â€¢ Event cleanup</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">ðŸ  Need a Permit?</h3>
                <p className="text-gray-700 mb-4">
                  Contact Millcreek for permit requirements and applications. We can help guide you through the process.
                </p>
                <a 
                  href="tel:801-214-2700" 
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  Millcreek: (801-214-2700)
                </a>
              </div>
            </section>

            {/* Dumpster Sizes */}
            <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Available Dumpster Sizes</h2>                
                {/* Dumpster Sizes Image */}
                <div className="mb-8">
                  <img 
                    src="/images/dumpsterSmallBanner3.jpeg" 
                    alt="Available dumpster sizes for Millcreek dumpster rental - 15, 20, and 30 yard options" 
                    className="w-full h-48 object-cover rounded-lg shadow-md"
                  />
                </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="border border-gray-200 rounded-lg p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">15 Yard Dumpster</h3>
                  <p className="text-gray-600 mb-4">Perfect for small to medium projects</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>â€¢ Kitchen remodel</li>
                    <li>â€¢ Bathroom renovation</li>
                    <li>â€¢ Garage cleanout</li>
                    <li>â€¢ Small construction</li>
                  </ul>
                </div>
                <div className="border border-gray-200 rounded-lg p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">20 Yard Dumpster</h3>
                  <p className="text-gray-600 mb-4">Great for medium to large projects</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>â€¢ Full home renovation</li>
                    <li>â€¢ Large construction</li>
                    <li>â€¢ Commercial projects</li>
                    <li>â€¢ Major cleanouts</li>
                  </ul>
                </div>
                <div className="border border-gray-200 rounded-lg p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">30 Yard Dumpster</h3>
                  <p className="text-gray-600 mb-4">For major projects and construction</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>â€¢ Large construction</li>
                    <li>â€¢ Commercial demolition</li>
                    <li>â€¢ Major renovations</li>
                    <li>â€¢ Industrial projects</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Detailed Guide Link */}
            <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Complete Millcreek Dumpster Rental Guide</h2>
              <p className="text-lg text-gray-700 mb-6">
                Get detailed information about dumpster rental in Millcreek, including pricing, regulations, permit requirements, and more.
              </p>                
                {/* Guide Image */}
                <div className="mb-6">
                  <img 
                    src="/images/IMG_0336.jpg" 
                    alt="Complete Millcreek dumpster rental guide with pricing and regulations" 
                    className="w-full h-48 object-cover rounded-lg shadow-md"
                  />
                </div>                
                {/* Hero Image */}
                <div className="mb-8">
                  <img 
                    src="/images/IMG_0350.jpg" 
                    alt="Professional dumpster rental services in Millcreek, Utah - Icon Dumpsters" 
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
                </div>
              <Link 
                href="/millcreek-dumpster-rental-guide-2025"
                className="inline-block bg-[#4e37a8] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-700 transition-colors"
              >
                ðŸ“– Read Complete Guide â†’
              </Link>
            </section>
          </div>

          {/* Right Column - Quote Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <QuoteForm />
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get your Millcreek dumpster rental quote today. Fast delivery, competitive pricing, and professional service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:801-918-6000" 
              className="bg-[#4e37a8] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-700 transition-colors"
            >
              ðŸ“ž Call Now: (801) 918-6000
            </a>
            <a 
              href="#quote-form" 
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-colors"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}





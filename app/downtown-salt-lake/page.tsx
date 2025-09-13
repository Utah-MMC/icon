import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '../components/PageHero';
import QuoteForm from '../components/QuoteForm';

export const metadata: Metadata = {
  title: "Downtown Salt Lake Dumpster Rental - Professional Dumpster Services in Downtown Salt Lake, UT | (801) 918-6000",
  description: "Professional dumpster rental services in Downtown Salt Lake, Utah. Fast delivery, competitive pricing, and reliable waste management solutions. Call (801) 918-6000 for instant quotes.",
  keywords: "Downtown Salt Lake dumpster rental, dumpster rental Downtown Salt Lake UT, Downtown Salt Lake Utah dumpster, roll-off dumpster Downtown Salt Lake, construction dumpster Downtown Salt Lake, waste management Downtown Salt Lake",
  openGraph: {
    title: "Downtown Salt Lake Dumpster Rental - Professional Dumpster Services in Downtown Salt Lake, UT | (801) 918-6000",
    description: "Professional dumpster rental services in Downtown Salt Lake, Utah. Fast delivery, competitive pricing, and reliable waste management solutions.",
    url: 'https://icondumpsters.com/downtown-salt-lake',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Downtown Salt Lake Dumpster Rental - Professional Dumpster Services in Downtown Salt Lake, UT',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Downtown Salt Lake Dumpster Rental - Professional Dumpster Services in Downtown Salt Lake, UT | (801) 918-6000",
    description: "Professional dumpster rental services in Downtown Salt Lake, Utah. Fast delivery, competitive pricing, and reliable waste management solutions.",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/downtown-salt-lake',
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
    'geo.placename': 'Downtown Salt Lake, Utah',
    'geo.position': '40.7608;-111.8910',
    'ICBM': '40.7608, -111.8910',
  },
};

export default function DowntownSaltLakePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero 
        title="Downtown Salt Lake Dumpster Rental"
        subtitle="Professional dumpster rental services in Downtown Salt Lake, Utah. Fast delivery, competitive pricing, and reliable waste management solutions."
        primaryCtaText="Get Free Quote"
        primaryCtaLink="#quote-form"
        secondaryCtaText="Call (801) 918-6000"
        secondaryCtaLink="tel:801-918-6000"
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2">
            {/* Service Overview */}
            <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Dumpster Rental Services in Downtown Salt Lake</h2>
              <p className="text-lg text-gray-700 mb-6">
                Icon Dumpsters provides reliable dumpster rental services throughout Downtown Salt Lake, Utah. Whether you're tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.
              </p>
              
              {/* Hero Image */}
              
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">🏠 Residential Projects</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Home renovations and remodeling</li>
                    <li>• Basement cleanouts</li>
                    <li>• Garage organization</li>
                    <li>• Yard waste removal</li>
                    <li>• Estate cleanouts</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">🏢 Commercial Projects</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Construction and demolition</li>
                    <li>• Office renovations</li>
                    <li>• Retail store cleanouts</li>
                    <li>• Industrial waste removal</li>
                    <li>• Event cleanup</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">📞 Need a Permit??</h3>
                <p className="text-gray-700 mb-4">
                  Contact Downtown Salt Lake for permit requirements and applications. We can help guide you through the process.
                </p>
                <a 
                  href="tel:801-535-6000" 
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  Downtown Salt Lake: (801) 535-6000
                </a>
              </div>
            </section>

            {/* Dumpster Sizes */}
            <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Available Dumpster Sizes</h2>
              
              {/* Dumpster Sizes Image */}
              
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="border border-gray-200 rounded-lg p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">15 Yard Dumpster</h3>
                  <p className="text-gray-600 mb-4">Perfect for small to medium projects</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Kitchen remodel</li>
                    <li>• Bathroom renovation</li>
                    <li>• Garage cleanout</li>
                    <li>• Small construction</li>
                  </ul>
                </div>
                <div className="border border-gray-200 rounded-lg p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">20 Yard Dumpster</h3>
                  <p className="text-gray-600 mb-4">Great for medium to large projects</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Full home renovation</li>
                    <li>• Large construction</li>
                    <li>• Commercial projects</li>
                    <li>• Major cleanouts</li>
                  </ul>
                </div>
                <div className="border border-gray-200 rounded-lg p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">30 Yard Dumpster</h3>
                  <p className="text-gray-600 mb-4">For major projects and construction</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Large construction</li>
                    <li>• Commercial demolition</li>
                    <li>• Major renovations</li>
                    <li>• Industrial projects</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Detailed Guide Link */}
            <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Complete Downtown Salt Lake Dumpster Rental Guide</h2>
              <p className="text-lg text-gray-700 mb-6">
                Get detailed information about dumpster rental in Downtown Salt Lake, including pricing, regulations, permit requirements, and more.
              </p>
              
              {/* Guide Image */}
              
              
              <Link 
                href="https://icondumpsters.com/downtown-salt-lake-dumpster-rental-guide-2025"
                className="inline-block bg-[#4e37a8] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-700 transition-colors"
              >
                📖 Read Complete Guide →
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
            Get your Downtown Salt Lake dumpster rental quote today. Fast delivery, competitive pricing, and professional service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:801-918-6000" 
              className="bg-[#4e37a8] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-700 transition-colors"
            >
              📞 Call Now: (801) 918-6000
            </a>
            <a 
              href="https://icondumpsters.com/#quote-form" 
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





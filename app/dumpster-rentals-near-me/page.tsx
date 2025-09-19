import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import QuoteForm from '../components/QuoteForm';
import OptimizedImage from '../components/OptimizedImage';

export const metadata: Metadata = {
  title: "Dumpster Rentals Near Me - Same Day Delivery | Icon Dumpsters Utah",
  description: "Find dumpster rentals near me in Utah. Same-day delivery, competitive pricing, and professional service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000 for instant quote.",
  keywords: "dumpster rentals near me, dumpster rental near me, roll off dumpster near me, construction dumpster near me, residential dumpster near me, utah dumpster rental",
  openGraph: {
    title: "Dumpster Rentals Near Me - Same Day Delivery | Icon Dumpsters Utah",
    description: "Find dumpster rentals near me in Utah. Same-day delivery, competitive pricing, and professional service. 15-30 yard roll-off dumpsters available.",
    url: 'https://icondumpsters.com/dumpster-rentals-near-me',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Dumpster Rentals Near Me - Icon Dumpsters Utah',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Dumpster Rentals Near Me - Same Day Delivery | Icon Dumpsters Utah",
    description: "Find dumpster rentals near me in Utah. Same-day delivery, competitive pricing, and professional service.",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: '/dumpster-rentals-near-me',
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

export default function DumpsterRentalsNearMePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#4e37a8] to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Dumpster Rentals Near Me in Utah
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Find the best dumpster rental near me with same-day delivery and competitive pricing.
              </p>
              <p className="text-lg mb-8 text-purple-100">
                15, 20, and 30-yard roll-off dumpsters available for delivery near you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a 
                  href="tel:801-918-6000"
                  className="bg-white text-[#4e37a8] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
                >
                  Call (801) 918-6000
                </a>
                <a 
                  href="#quote-form" 
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#4e37a8] transition-colors"
                >
                  Get Free Quote
                </a>
              </div>
            </div>
            {/* Hero Image */}
            <div className="mb-8">
              <OptimizedImage
                src="/images/optimized/dumpsterWithTruck.jpg"
                alt="Professional dumpster rental services near me in Utah"
                width={800}
                height={400}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2">
            
            {/* Why Choose Us for Near Me Searches */}
            <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Icon Dumpsters for Your "Near Me" Search?</h2>
              <p className="text-lg text-gray-700 mb-6">
                When you search for "dumpster rentals near me," you want a local company that understands Utah and provides reliable service. Icon Dumpsters is your trusted local partner for all dumpster rental needs.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">🏠 Local Utah Company</h3>
                  <div className="mb-4">
                    <OptimizedImage src="/images/optimized/IMG_3190.jpg"
                      alt="Local Utah dumpster rental company serving all areas"
                      width={400}
                      height={250}
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Based in Utah, serving Utah communities</li>
                    <li>• Local drivers who know the area</li>
                    <li>• Understanding of local regulations</li>
                    <li>• Community-focused service</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">🚚 Same-Day Delivery</h3>
                  <div className="mb-4">
                    <OptimizedImage src="/images/optimized/commercial.jpg"
                      alt="Same-day dumpster delivery service in Utah"
                      width={400}
                      height={250}
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Same-day delivery when available</li>
                    <li>• Next-day delivery standard</li>
                    <li>• Flexible scheduling options</li>
                    <li>• Emergency service available</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">📞 Ready to Find Dumpster Rentals Near You?</h3>
                <p className="text-gray-700 mb-4">
                  Call us now at (801) 918-6000 to get a quote for dumpster rental near your location. We'll confirm service to your address and provide same-day delivery when available.
                </p>
                <a 
                  href="tel:801-918-6000"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  Call (801) 918-6000 Now →
                </a>
              </div>
            </section>

            {/* Service Areas */}
            <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Dumpster Rental Service Areas Near You</h2>
              <p className="text-lg text-gray-700 mb-6">
                We provide dumpster rental services throughout Utah, making it easy to find dumpster rentals near me no matter where you're located.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">🏙️ Salt Lake County</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Salt Lake City</li>
                    <li>• Murray</li>
                    <li>• Sandy</li>
                    <li>• West Jordan</li>
                    <li>• South Jordan</li>
                    <li>• Draper</li>
                    <li>• Riverton</li>
                    <li>• Herriman</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">🏔️ Utah County</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Provo</li>
                    <li>• Orem</li>
                    <li>• Lehi</li>
                    <li>• American Fork</li>
                    <li>• Pleasant Grove</li>
                    <li>• Saratoga Springs</li>
                    <li>• Eagle Mountain</li>
                    <li>• Bluffdale</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">🌲 Davis County</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Layton</li>
                    <li>• Clearfield</li>
                    <li>• Roy</li>
                    <li>• Syracuse</li>
                    <li>• Kaysville</li>
                    <li>• Farmington</li>
                    <li>• Centerville</li>
                    <li>• Bountiful</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Dumpster Sizes */}
            <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Available Dumpster Sizes Near You</h2>
              <p className="text-lg text-gray-700 mb-6">
                Choose the perfect dumpster size for your project. All rentals include delivery, pickup, and landfill fees. Weight is billed at $55/ton after pickup.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="border border-gray-200 rounded-lg p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">15 Yard Dumpster</h3>
                  <p className="text-gray-600 mb-4">Perfect for small home projects and cleanouts</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Kitchen renovations</li>
                    <li>• Bathroom remodels</li>
                    <li>• Small cleanouts</li>
                    <li>• Yard waste removal</li>
                  </ul>
                </div>
                <div className="border border-gray-200 rounded-lg p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">20 Yard Dumpster</h3>
                  <p className="text-gray-600 mb-4">Ideal for medium-sized projects</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Whole house cleanouts</li>
                    <li>• Roofing projects</li>
                    <li>• Deck removal</li>
                    <li>• Basement finishing</li>
                  </ul>
                </div>
                <div className="border border-gray-200 rounded-lg p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">30 Yard Dumpster</h3>
                  <p className="text-gray-600 mb-4">Best for large construction projects</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• New construction</li>
                    <li>• Major renovations</li>
                    <li>• Commercial projects</li>
                    <li>• Large cleanouts</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions - Dumpster Rentals Near Me</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">How do I find dumpster rentals near me?</h3>
                  <p className="text-gray-700">
                    Icon Dumpsters serves all major areas in Utah. Simply call us at (801) 918-6000 and we'll confirm service to your specific address. We provide same-day delivery when available.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Do you deliver to my area?</h3>
                  <p className="text-gray-700">
                    We serve all major cities and towns in Utah, including Salt Lake County, Utah County, and Davis County. Call us to confirm delivery to your specific address.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">How quickly can you deliver a dumpster near me?</h3>
                  <p className="text-gray-700">
                    We offer same-day delivery when available, and next-day delivery is our standard. Call us early in the day for same-day service options.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">What makes Icon Dumpsters the best choice for dumpster rentals near me?</h3>
                  <p className="text-gray-700">
                    We're a local Utah company with transparent pricing, no hidden fees, same-day delivery, and 24/7 customer support. Our drivers are professional and experienced with local regulations.
                  </p>
                </div>
              </div>
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
          <h2 className="text-3xl font-bold mb-6">Ready to Find Dumpster Rentals Near You?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get your dumpster rental quote today. Fast delivery, competitive pricing, and professional service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:801-918-6000"
              className="bg-[#4e37a8] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-700 transition-colors"
            >
              Call Now: (801) 918-6000
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

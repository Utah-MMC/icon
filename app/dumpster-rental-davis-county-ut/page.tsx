import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '../components/PageHero';

export const metadata: Metadata = {
  title: "Dumpster Rentals in Davis County County, Utah | Icon Dumpsters",
  description: "Professional dumpster rental services throughout Davis County County, Utah. Same-day delivery, competitive pricing, and excellent customer service for all your waste management needs.",
  keywords: "dumpster rental Davis County County Utah, Davis County County dumpster rental, Utah dumpster rental, same day delivery",
  openGraph: {
    title: "Dumpster Rentals in Davis County County, Utah | Icon Dumpsters",
    description: "Professional dumpster rental services throughout Davis County County, Utah. Same-day delivery and competitive pricing.",
    url: 'https://icondumpsters.com/dumpster-rental-davis-county-ut',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Dumpster Rentals in Davis County County, Utah - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Dumpster Rentals in Davis County County, Utah | Icon Dumpsters",
    description: "Professional dumpster rental services throughout Davis County County, Utah.",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: '/dumpster-rental-davis-county-ut',
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

export default function DavisCountyCountyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero
        title="Dumpster Rentals in Davis County County, Utah"
        subtitle="Professional dumpster rental services throughout Davis County County. Same-day delivery, competitive pricing, and excellent customer service for all your waste management needs."
        primaryCtaText="Get Free Quote"
        primaryCtaLink="#quote-form"
        secondaryCtaText="Call (801) 918-6000"
        secondaryCtaLink="tel:801-918-6000"
      />

      {/* Cities Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Cities We Serve in Davis County County
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional dumpster rental services available in all cities throughout Davis County County.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            
            <Link
              href="https://icondumpsters.com/dumpster-rental-davis-county-ut/layton-ut"
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow border border-gray-200"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Layton</h3>
              <p className="text-sm text-gray-600">Professional dumpster rental services</p>
              <span className="inline-block mt-3 text-[#4e37a8] font-medium">Learn More →</span>
            </Link>
            <Link
              href="https://icondumpsters.com/dumpster-rental-davis-county-ut/clearfield-ut"
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow border border-gray-200"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Clearfield</h3>
              <p className="text-sm text-gray-600">Professional dumpster rental services</p>
              <span className="inline-block mt-3 text-[#4e37a8] font-medium">Learn More →</span>
            </Link>
            <Link
              href="https://icondumpsters.com/dumpster-rental-davis-county-ut/kaysville-ut"
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow border border-gray-200"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Kaysville</h3>
              <p className="text-sm text-gray-600">Professional dumpster rental services</p>
              <span className="inline-block mt-3 text-[#4e37a8] font-medium">Learn More →</span>
            </Link>
            <Link
              href="https://icondumpsters.com/dumpster-rental-davis-county-ut/bountiful-ut"
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow border border-gray-200"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Bountiful</h3>
              <p className="text-sm text-gray-600">Professional dumpster rental services</p>
              <span className="inline-block mt-3 text-[#4e37a8] font-medium">Learn More →</span>
            </Link>
            <Link
              href="https://icondumpsters.com/dumpster-rental-davis-county-ut/centerville-ut"
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow border border-gray-200"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Centerville</h3>
              <p className="text-sm text-gray-600">Professional dumpster rental services</p>
              <span className="inline-block mt-3 text-[#4e37a8] font-medium">Learn More →</span>
            </Link>
            <Link
              href="https://icondumpsters.com/dumpster-rental-davis-county-ut/farmington-ut"
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow border border-gray-200"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Farmington</h3>
              <p className="text-sm text-gray-600">Professional dumpster rental services</p>
              <span className="inline-block mt-3 text-[#4e37a8] font-medium">Learn More →</span>
            </Link>
            <Link
              href="https://icondumpsters.com/dumpster-rental-davis-county-ut/clinton-ut"
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow border border-gray-200"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Clinton</h3>
              <p className="text-sm text-gray-600">Professional dumpster rental services</p>
              <span className="inline-block mt-3 text-[#4e37a8] font-medium">Learn More →</span>
            </Link>
            <Link
              href="https://icondumpsters.com/dumpster-rental-davis-county-ut/syracuse-ut"
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow border border-gray-200"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Syracuse</h3>
              <p className="text-sm text-gray-600">Professional dumpster rental services</p>
              <span className="inline-block mt-3 text-[#4e37a8] font-medium">Learn More →</span>
            </Link>
            <Link
              href="https://icondumpsters.com/dumpster-rental-davis-county-ut/north-salt-lake-ut"
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow border border-gray-200"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">North Salt Lake</h3>
              <p className="text-sm text-gray-600">Professional dumpster rental services</p>
              <span className="inline-block mt-3 text-[#4e37a8] font-medium">Learn More →</span>
            </Link>
            <Link
              href="https://icondumpsters.com/dumpster-rental-davis-county-ut/woods-cross-ut"
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow border border-gray-200"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Woods Cross</h3>
              <p className="text-sm text-gray-600">Professional dumpster rental services</p>
              <span className="inline-block mt-3 text-[#4e37a8] font-medium">Learn More →</span>
            </Link>
            <Link
              href="https://icondumpsters.com/dumpster-rental-davis-county-ut/west-bountiful-ut"
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow border border-gray-200"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">West Bountiful</h3>
              <p className="text-sm text-gray-600">Professional dumpster rental services</p>
              <span className="inline-block mt-3 text-[#4e37a8] font-medium">Learn More →</span>
            </Link>
            <Link
              href="https://icondumpsters.com/dumpster-rental-davis-county-ut/sunset-ut"
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow border border-gray-200"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Sunset</h3>
              <p className="text-sm text-gray-600">Professional dumpster rental services</p>
              <span className="inline-block mt-3 text-[#4e37a8] font-medium">Learn More →</span>
            </Link>
            <Link
              href="https://icondumpsters.com/dumpster-rental-davis-county-ut/south-weber-ut"
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow border border-gray-200"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">South Weber</h3>
              <p className="text-sm text-gray-600">Professional dumpster rental services</p>
              <span className="inline-block mt-3 text-[#4e37a8] font-medium">Learn More →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comprehensive Dumpster Rental Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From home renovations to large construction projects, we have the right dumpster size and service for your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Residential Services */}
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🏠</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Residential Services</h3>
              <p className="text-gray-600 mb-6">
                Perfect for home renovations, cleanouts, and yard projects. Flexible scheduling and competitive rates.
              </p>
              <Link
                href="https://icondumpsters.com/dumpster-rental/home"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Learn More →
              </Link>
            </div>

            {/* Commercial Services */}
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🏢</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Commercial Services</h3>
              <p className="text-gray-600 mb-6">
                Professional waste management for businesses of all sizes. Reliable service and flexible scheduling.
              </p>
              <Link
                href="https://icondumpsters.com/dumpster-rental/business"
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Learn More →
              </Link>
            </div>

            {/* Construction Services */}
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🚧</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Construction Services</h3>
              <p className="text-gray-600 mb-6">
                Heavy-duty dumpsters for construction and demolition projects. Multiple sizes available.
              </p>
              <Link
                href="https://icondumpsters.com/dumpster-rental/construction"
                className="inline-block bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#4e37a8] text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Get Started in Davis County County?
          </h2>
          <p className="text-xl mb-8">
            Get your free quote today and experience the difference professional dumpster rental service makes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:801-918-6000"
              className="bg-white text-[#4e37a8] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              📞 Call (801) 918-6000
            </a>
            <a
              href="https://icondumpsters.com/#quote-form"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#4e37a8] transition-colors"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section id="quote-form" className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Get Your Free Quote
            </h2>
            <p className="text-lg text-gray-600">
              Fill out the form below and we'll get back to you with a custom quote for your project in Davis County County.
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4e37a8] focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4e37a8] focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4e37a8] focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4e37a8] focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                City in Davis County County
              </label>
              <select
                id="city"
                name="city"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4e37a8] focus:border-transparent"
                required
              >
                <option value="">Select your city</option>
                <option value="layton">Layton</option><option value="clearfield">Clearfield</option><option value="kaysville">Kaysville</option><option value="bountiful">Bountiful</option><option value="centerville">Centerville</option><option value="farmington">Farmington</option><option value="clinton">Clinton</option><option value="syracuse">Syracuse</option><option value="north-salt-lake">North Salt Lake</option><option value="woods-cross">Woods Cross</option><option value="west-bountiful">West Bountiful</option><option value="sunset">Sunset</option><option value="south-weber">South Weber</option>
              </select>
            </div>

            <div>
              <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                Project Type
              </label>
              <select
                id="projectType"
                name="projectType"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4e37a8] focus:border-transparent"
                required
              >
                <option value="">Select project type</option>
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
                <option value="construction">Construction</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Project Details
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4e37a8] focus:border-transparent"
                placeholder="Tell us about your project, timeline, and any specific requirements..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#4e37a8] text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-purple-700 transition-colors"
            >
              Get Free Quote
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
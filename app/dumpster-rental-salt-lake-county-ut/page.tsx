import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import PageHero from '../../components/PageHero';

export const metadata: Metadata = {
  title: "Dumpster Rentals in Salt Lake County County, Utah | Icon Dumpsters",
  description: "Professional dumpster rental services throughout Salt Lake County County, Utah. Same-day delivery, competitive pricing, and excellent customer service for all your waste management needs.",
  keywords: "dumpster rental Salt Lake County County Utah, Salt Lake County County dumpster rental, Utah dumpster rental, same day delivery",
  openGraph: {
    title: "Dumpster Rentals in Salt Lake County County, Utah | Icon Dumpsters",
    description: "Professional dumpster rental services throughout Salt Lake County County, Utah. Same-day delivery and competitive pricing.",
    url: 'https://icondumpsters.com/dumpster-rental-salt-lake-county-ut',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Dumpster Rentals in Salt Lake County County, Utah - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Dumpster Rentals in Salt Lake County County, Utah | Icon Dumpsters",
    description: "Professional dumpster rental services throughout Salt Lake County County, Utah.",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: '/dumpster-rental-salt-lake-county-ut',
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

export default function SaltLakeCountyCountyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero
        title="Dumpster Rentals in Salt Lake County County, Utah"
        subtitle="Professional dumpster rental services throughout Salt Lake County County. Same-day delivery, competitive pricing, and excellent customer service for all your waste management needs."
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
              Cities We Serve in Salt Lake County County
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional dumpster rental services available in all cities throughout Salt Lake County County.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            
            <Link
              href="/dumpster-rental-salt-lake-county-ut/salt-lake-city-ut"
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow border border-gray-200"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Salt Lake City</h3>
              <p className="text-sm text-gray-600">Professional dumpster rental services</p>
              <span className="inline-block mt-3 text-[#4e37a8] font-medium">Learn More →</span>
            </Link>
            <Link
              href="/dumpster-rental-salt-lake-county-ut/west-valley-city-ut"
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow border border-gray-200"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">West Valley City</h3>
              <p className="text-sm text-gray-600">Professional dumpster rental services</p>
              <span className="inline-block mt-3 text-[#4e37a8] font-medium">Learn More →</span>
            </Link>
            <Link
              href="/dumpster-rental-salt-lake-county-ut/sandy-ut"
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow border border-gray-200"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Sandy</h3>
              <p className="text-sm text-gray-600">Professional dumpster rental services</p>
              <span className="inline-block mt-3 text-[#4e37a8] font-medium">Learn More →</span>
            </Link>
            <Link
              href="/dumpster-rental-salt-lake-county-ut/west-jordan-ut"
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow border border-gray-200"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">West Jordan</h3>
              <p className="text-sm text-gray-600">Professional dumpster rental services</p>
              <span className="inline-block mt-3 text-[#4e37a8] font-medium">Learn More →</span>
            </Link>
            <Link
              href="/dumpster-rental-salt-lake-county-ut/murray-ut"
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow border border-gray-200"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Murray</h3>
              <p className="text-sm text-gray-600">Professional dumpster rental services</p>
              <span className="inline-block mt-3 text-[#4e37a8] font-medium">Learn More →</span>
            </Link>
            <Link
              href="/dumpster-rental-salt-lake-county-ut/taylorsville-ut"
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow border border-gray-200"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Taylorsville</h3>
              <p className="text-sm text-gray-600">Professional dumpster rental services</p>
              <span className="inline-block mt-3 text-[#4e37a8] font-medium">Learn More →</span>
            </Link>
            <Link
              href="/dumpster-rental-salt-lake-county-ut/south-jordan-ut"
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow border border-gray-200"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">South Jordan</h3>
              <p className="text-sm text-gray-600">Professional dumpster rental services</p>
              <span className="inline-block mt-3 text-[#4e37a8] font-medium">Learn More →</span>
            </Link>
            <Link
              href="/dumpster-rental-salt-lake-county-ut/draper-ut"
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow border border-gray-200"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Draper</h3>
              <p className="text-sm text-gray-600">Professional dumpster rental services</p>
              <span className="inline-block mt-3 text-[#4e37a8] font-medium">Learn More →</span>
            </Link>
            <Link
              href="/dumpster-rental-salt-lake-county-ut/midvale-ut"
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow border border-gray-200"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Midvale</h3>
              <p className="text-sm text-gray-600">Professional dumpster rental services</p>
              <span className="inline-block mt-3 text-[#4e37a8] font-medium">Learn More →</span>
            </Link>
            <Link
              href="/dumpster-rental-salt-lake-county-ut/holladay-ut"
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow border border-gray-200"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Holladay</h3>
              <p className="text-sm text-gray-600">Professional dumpster rental services</p>
              <span className="inline-block mt-3 text-[#4e37a8] font-medium">Learn More →</span>
            </Link>
            <Link
              href="/dumpster-rental-salt-lake-county-ut/cottonwood-heights-ut"
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow border border-gray-200"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Cottonwood Heights</h3>
              <p className="text-sm text-gray-600">Professional dumpster rental services</p>
              <span className="inline-block mt-3 text-[#4e37a8] font-medium">Learn More →</span>
            </Link>
            <Link
              href="/dumpster-rental-salt-lake-county-ut/herriman-ut"
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow border border-gray-200"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Herriman</h3>
              <p className="text-sm text-gray-600">Professional dumpster rental services</p>
              <span className="inline-block mt-3 text-[#4e37a8] font-medium">Learn More →</span>
            </Link>
            <Link
              href="/dumpster-rental-salt-lake-county-ut/riverton-ut"
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow border border-gray-200"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Riverton</h3>
              <p className="text-sm text-gray-600">Professional dumpster rental services</p>
              <span className="inline-block mt-3 text-[#4e37a8] font-medium">Learn More →</span>
            </Link>
            <Link
              href="/dumpster-rental-salt-lake-county-ut/bluffdale-ut"
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow border border-gray-200"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Bluffdale</h3>
              <p className="text-sm text-gray-600">Professional dumpster rental services</p>
              <span className="inline-block mt-3 text-[#4e37a8] font-medium">Learn More →</span>
            </Link>
            <Link
              href="/dumpster-rental-salt-lake-county-ut/white-city-ut"
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow border border-gray-200"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">White City</h3>
              <p className="text-sm text-gray-600">Professional dumpster rental services</p>
              <span className="inline-block mt-3 text-[#4e37a8] font-medium">Learn More →</span>
            </Link>
            <Link
              href="/dumpster-rental-salt-lake-county-ut/brighton-ut"
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow border border-gray-200"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Brighton</h3>
              <p className="text-sm text-gray-600">Professional dumpster rental services</p>
              <span className="inline-block mt-3 text-[#4e37a8] font-medium">Learn More →</span>
            </Link>
            <Link
              href="/dumpster-rental-salt-lake-county-ut/emigration-canyon-ut"
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow border border-gray-200"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Emigration Canyon</h3>
              <p className="text-sm text-gray-600">Professional dumpster rental services</p>
              <span className="inline-block mt-3 text-[#4e37a8] font-medium">Learn More →</span>
            </Link>
            <Link
              href="/dumpster-rental-salt-lake-county-ut/granite-ut"
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow border border-gray-200"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Granite</h3>
              <p className="text-sm text-gray-600">Professional dumpster rental services</p>
              <span className="inline-block mt-3 text-[#4e37a8] font-medium">Learn More →</span>
            </Link>
            <Link
              href="/dumpster-rental-salt-lake-county-ut/kearns-ut"
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow border border-gray-200"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Kearns</h3>
              <p className="text-sm text-gray-600">Professional dumpster rental services</p>
              <span className="inline-block mt-3 text-[#4e37a8] font-medium">Learn More →</span>
            </Link>
            <Link
              href="/dumpster-rental-salt-lake-county-ut/magna-ut"
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow border border-gray-200"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Magna</h3>
              <p className="text-sm text-gray-600">Professional dumpster rental services</p>
              <span className="inline-block mt-3 text-[#4e37a8] font-medium">Learn More →</span>
            </Link>
            <Link
              href="/dumpster-rental-salt-lake-county-ut/millcreek-ut"
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow border border-gray-200"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Millcreek</h3>
              <p className="text-sm text-gray-600">Professional dumpster rental services</p>
              <span className="inline-block mt-3 text-[#4e37a8] font-medium">Learn More →</span>
            </Link>
            <Link
              href="/dumpster-rental-salt-lake-county-ut/salt-lake-city-ut"
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow border border-gray-200"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Salt Lake City</h3>
              <p className="text-sm text-gray-600">Professional dumpster rental services</p>
              <span className="inline-block mt-3 text-[#4e37a8] font-medium">Learn More →</span>
            </Link>
            <Link
              href="/dumpster-rental-salt-lake-county-ut/south-salt-lake-ut"
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow border border-gray-200"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">South Salt Lake</h3>
              <p className="text-sm text-gray-600">Professional dumpster rental services</p>
              <span className="inline-block mt-3 text-[#4e37a8] font-medium">Learn More →</span>
            </Link>
            <Link
              href="/dumpster-rental-salt-lake-county-ut/taylorsville-ut"
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow border border-gray-200"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Taylorsville</h3>
              <p className="text-sm text-gray-600">Professional dumpster rental services</p>
              <span className="inline-block mt-3 text-[#4e37a8] font-medium">Learn More →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Equipment Showcase */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Professional Equipment You Can Trust
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our fleet of well-maintained, purple roll-off dumpsters is ready for your project throughout Salt Lake County.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/dumpster500x500-1.jpeg"
                alt="Professional roll-off dumpster for rent in Salt Lake County"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/dumpster500x500-2.jpeg"
                alt="High-quality dumpster rental equipment in Salt Lake County"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/dumpsterWithTruck.jpeg"
                alt="Dumpster delivery and pickup service in Salt Lake County"
                fill
                className="object-cover"
              />
            </div>
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
                href="/dumpster-rental/home"
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
                href="/dumpster-rental/business"
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
                href="/dumpster-rental/construction"
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
            Ready to Get Started in Salt Lake County County?
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
              href="#quote-form"
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
              Fill out the form below and we'll get back to you with a custom quote for your project in Salt Lake County County.
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
                City in Salt Lake County County
              </label>
              <select
                id="city"
                name="city"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4e37a8] focus:border-transparent"
                required
              >
                <option value="">Select your city</option>
                <option value="salt-lake-city">Salt Lake City</option><option value="west-valley-city">West Valley City</option><option value="sandy">Sandy</option><option value="west-jordan">West Jordan</option><option value="murray">Murray</option><option value="taylorsville">Taylorsville</option><option value="south-jordan">South Jordan</option><option value="draper">Draper</option><option value="midvale">Midvale</option><option value="holladay">Holladay</option><option value="cottonwood-heights">Cottonwood Heights</option><option value="herriman">Herriman</option><option value="riverton">Riverton</option><option value="bluffdale">Bluffdale</option><option value="white-city">White City</option><option value="brighton">Brighton</option><option value="emigration-canyon">Emigration Canyon</option><option value="granite">Granite</option><option value="kearns">Kearns</option><option value="magna">Magna</option><option value="millcreek">Millcreek</option><option value="salt-lake-city">Salt Lake City</option><option value="south-salt-lake">South Salt Lake</option><option value="taylorsville">Taylorsville</option>
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
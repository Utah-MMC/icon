import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import PageHero from '../components/PageHero';

export const metadata: Metadata = {
  title: "Dumpster Rentals for Home & Business | Icon Dumpsters",
  description: "Professional dumpster rental services for residential, commercial, and construction projects. Same-day delivery, competitive pricing,...",
  keywords: "dumpster rental, dumpster rentals, residential dumpster, commercial dumpster, construction dumpster, Utah dumpster rental, same day delivery",
  openGraph: {
    title: "Dumpster Rentals for Home & Business | Icon Dumpsters",
    description: "Professional dumpster rental services for residential, commercial, and construction projects. Same-day delivery, competitive pricing,...",
    url: 'https://icondumpsters.com/dumpster-rental',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Dumpster Rentals for Home & Business - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Dumpster Rentals for Home & Business | Icon Dumpsters",
    description: "Professional dumpster rental services for residential, commercial, and construction projects. Same-day delivery, competitive pricing,...",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: '/dumpster-rental',
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

export default function DumpsterRentalPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero
        title="Dumpster Rentals for Home & Business"
        subtitle="Professional dumpster rental services throughout Utah. Same-day delivery, competitive pricing, and excellent customer service for all your waste management needs."
        primaryCtaText="Get Free Quote"
        primaryCtaLink="#quote-form"
        secondaryCtaText="Call (801) 918-6000"
        secondaryCtaLink="tel:801-918-6000"
      />

      {/* Service Categories */}
      <section className="py-16">
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
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow overflow-hidden">
              <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                <OptimizedImage src="/images/optimized/dumpster500x500-2.jpg"
                  alt="Residential dumpster rental for home projects"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Residential Services</h3>
              <p className="text-gray-600 mb-6">
                Perfect for home renovations, cleanouts, and yard projects. Flexible scheduling and competitive rates.
              </p>
              <ul className="text-left text-gray-600 mb-6 space-y-2">
                <li>• Home renovations & remodeling</li>
                <li>• Basement & garage cleanouts</li>
                <li>• Yard waste removal</li>
                <li>• Estate cleanouts</li>
                <li>• Moving & relocation</li>
              </ul>
              <Link
                href="https://icondumpsters.com/dumpster-rental/home"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Learn More →
              </Link>
            </div>

            {/* Commercial Services */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow overflow-hidden">
              <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                <OptimizedImage src="/images/optimized/commercial.jpg"
                  alt="Commercial dumpster rental for business projects"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Commercial Services</h3>
              <p className="text-gray-600 mb-6">
                Professional waste management for businesses of all sizes. Reliable service and flexible scheduling.
              </p>
              <ul className="text-left text-gray-600 mb-6 space-y-2">
                <li>• Office renovations</li>
                <li>• Retail store cleanouts</li>
                <li>• Restaurant renovations</li>
                <li>• Industrial waste removal</li>
                <li>• Event cleanup</li>
              </ul>
              <Link
                href="https://icondumpsters.com/dumpster-rental/business"
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Learn More →
              </Link>
            </div>

            {/* Construction Services */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow overflow-hidden">
              <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                <OptimizedImage src="/images/optimized/Construction-Rental-480x480.jpg"
                  alt="Construction dumpster rental for heavy projects"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Construction Services</h3>
              <p className="text-gray-600 mb-6">
                Heavy-duty dumpsters for construction and demolition projects. Multiple sizes available.
              </p>
              <ul className="text-left text-gray-600 mb-6 space-y-2">
                <li>• New construction</li>
                <li>• Demolition projects</li>
                <li>• Roofing projects</li>
                <li>• Concrete removal</li>
                <li>Large-scale renovations</li>
              </ul>
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

      {/* Equipment Showcase */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Professional Equipment You Can Trust
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our fleet of well-maintained, purple roll-off dumpsters is ready for your project.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
              <OptimizedImage src="/images/optimized/dumpster500x500-1.jpg"
                alt="Professional roll-off dumpster for rent"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
              <OptimizedImage src="/images/optimized/dumpster500x500-2.jpg"
                alt="High-quality dumpster rental equipment"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
              <OptimizedImage src="/images/optimized/dumpsterWithTruck.jpg"
                alt="Dumpster delivery and pickup service"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dumpster Sizes */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Dumpster Sizes for Every Project
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our range of dumpster sizes to match your project requirements and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">15 Yard</h3>
              <p className="text-gray-600 text-sm mb-4">Perfect for small projects</p>
              <div className="text-2xl font-bold text-[#4e37a8]">$299</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">20 Yard</h3>
              <p className="text-gray-600 text-sm mb-4">Most popular size</p>
              <div className="text-2xl font-bold text-[#4e37a8]">$349</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">30 Yard</h3>
              <p className="text-gray-600 text-sm mb-4">Large projects</p>
              <div className="text-2xl font-bold text-[#4e37a8]">$449</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">40 Yard</h3>
              <p className="text-gray-600 text-sm mb-4">Major construction</p>
              <div className="text-2xl font-bold text-[#4e37a8]">$549</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Icon Dumpsters?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Same-Day Delivery</h3>
              <p className="text-gray-600">Fast, reliable delivery throughout Utah and surrounding areas.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Competitive Pricing</h3>
              <p className="text-gray-600">Transparent pricing with no hidden fees. Best rates in the area.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Support</h3>
              <p className="text-gray-600">Professional customer service and project consultation available.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#4e37a8] text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Get Started?
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
              Fill out the form below and we'll get back to you with a custom quote for your project.
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

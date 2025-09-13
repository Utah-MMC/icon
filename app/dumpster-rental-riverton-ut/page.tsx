import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import PageHero from '../components/PageHero';

export const metadata: Metadata = {
  title: 'Dumpster Rental Riverton, UT | Fast Delivery & Competitive Pricing',
  description: 'Dumpster rental in Riverton, Utah. Multiple sizes available with same-day delivery. Get competitive pricing and professional service from Icon Dumpsters.',
  keywords: ['dumpster rental Riverton', 'Riverton dumpster', 'utah dumpster rental', 'construction waste removal'],
  alternates: { canonical: '/dumpster-rental-riverton-ut' },
  openGraph: {
    title: 'Dumpster Rental Riverton, UT | Fast Delivery & Competitive Pricing',
    description: 'Dumpster rental in Riverton, Utah. Multiple sizes available with same-day delivery. Get competitive pricing and professional service.',
    url: 'https://icondumpsters.com/dumpster-rental-riverton-ut',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'Riverton Dumpster Rental - Icon Dumpsters' }],
    type: 'website'
  },
  robots: { index: true, follow: true }
};

export default function RivertonDumpsterRentalPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section using PageHero component */}
      <PageHero
        title={`Dumpster Rental in Riverton, UT`}
        subtitle={`Fast, reliable dumpster delivery for all your Riverton projects`}
        primaryCtaText="Get Free Quote"
        primaryCtaLink="/free-quote"
        secondaryCtaText={`Back to Riverton`}
        secondaryCtaLink={`/cities/riverton`}
      />

      {/* Dumpster Sizes Section with Images */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Dumpster Sizes Available in Riverton</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <div className="relative w-full h-48 mb-6">
              <Image
                src="/images/dumpster500x500-1.jpeg"
                alt="15 yard dumpster"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-blue-600">15 Yard Dumpster</h3>
            <p className="text-gray-600 mb-6">Perfect for small to medium projects</p>
            <ul className="text-left space-y-2 mb-6">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Kitchen remodel
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Bathroom renovation
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Garage cleanout
              </li>
            </ul>
            <Link 
              href="https://icondumpsters.com/free-quote"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Quote
            </Link>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg text-center border-2 border-blue-600">
            <div className="relative w-full h-48 mb-6">
              <Image
                src="/images/dumpster500x500-2.jpeg"
                alt="20 yard dumpster"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-blue-600">20 Yard Dumpster</h3>
            <p className="text-gray-600 mb-6">Great for medium to large projects</p>
            <ul className="text-left space-y-2 mb-6">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Full home renovation
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Large construction
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Commercial projects
              </li>
            </ul>
            <Link 
              href="https://icondumpsters.com/free-quote"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Quote
            </Link>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <div className="relative w-full h-48 mb-6">
              <Image
                src="/images/dumpster5-500x500-1.jpeg"
                alt="30 yard dumpster"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-blue-600">30 Yard Dumpster</h3>
            <p className="text-gray-600 mb-6">For major projects and construction</p>
            <ul className="text-left space-y-2 mb-6">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Large construction
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Commercial demolition
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Major renovations
              </li>
            </ul>
            <Link 
              href="https://icondumpsters.com/free-quote"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section with Image */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Why Choose Icon Dumpsters in Riverton?</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Local Riverton Service</h3>
              <p className="text-lg text-gray-600 mb-6">
                We're your local Riverton dumpster rental experts. Our team knows the area, 
                understands local regulations, and provides personalized service for all your 
                dumpster rental needs.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-blue-600 mr-3">🚛</span>
                  <span>Same-day delivery available</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-600 mr-3">📞</span>
                  <span>Local Riverton phone: (801) 918-6000</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-600 mr-3">📍</span>
                  <span>Serving all Riverton neighborhoods</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative w-full h-64 rounded-lg overflow-hidden">
                <Image
                  src="/images/Icon_Dumpsters_Final.webp"
                  alt="Icon Dumpsters logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Areas Section with Image */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative w-full h-64 rounded-lg overflow-hidden">
              <Image
                src="/images/dumpsterSmallBanner5.jpeg"
                alt="Riverton dumpster rental service areas"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Riverton Service Areas</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Riverton Central
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Riverton East
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Riverton West
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Riverton South
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Riverton North
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Surrounding areas
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready for Your Riverton Project?</h2>
          <p className="text-xl mb-8">Get your free dumpster rental quote today</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="https://icondumpsters.com/free-quote"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Free Quote
            </Link>
            <Link 
              href="https://icondumpsters.com/riverton-dumpster-rental-guide-2025"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Read Our Riverton Guide
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
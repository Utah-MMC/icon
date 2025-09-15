import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import PageHero from '../../components/PageHero';

import OptimizedImage from '../../components/OptimizedImage';
export const metadata: Metadata = {
  "title": "Commercial Dumpster Rental Orem, UT | Commercial Waste Solutions",
  "description": "commercial dumpster rental services in Orem, Utah. Reliable waste management for businesses and construction sites. Get a free quote today.",
  "keywords": [
    "commercial dumpster rental",
    "Orem commercial dumpster",
    "utah business dumpster rental",
    "waste management solutions"
  ],
  "alternates": {
    "canonical": "/services/commercial-dumpster-rental-orem-ut"
  },
  "openGraph": {
    "title": "Commercial Dumpster Rental Orem, UT | Commercial Waste Solutions",
    "description": "commercial dumpster rental services in Orem, Utah. Reliable waste management for businesses and construction sites.",
    "url": "https://icondumpsters.com/services/commercial-dumpster-rental-orem-ut",
    "images": [
      {
        "url": "/images/og-image.png",
        "width": 1200,
        "height": 630,
        "alt": "Orem Commercial Dumpster Rental - Icon Dumpsters"
      }
    ],
    "type": "website"
  },
  "robots": {
    "index": true,
    "follow": true
  }
};

export default function OremCommercialDumpsterRentalPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero
        title={`Premier Commercial Dumpster Rental in Orem, UT`}
        subtitle={`At Icon Dumpsters, we provide Commercial Dumpster Rental services designed for you – businesses and business owners in Orem who need reliable, professional waste management solutions.`}
        primaryCtaText="Reserve Commercial Dumpster Now!"
        primaryCtaLink="/free-quote"
        secondaryCtaText={`Back to Orem`}
        secondaryCtaLink={`/cities/orem`}
        showCta={true}
      />

      {/* Commercial Services Overview */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Commercial Dumpster Services in Orem</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Business Waste Management</h3>
            <p className="text-lg text-gray-600 mb-6">
              We provide comprehensive commercial dumpster rental services throughout Orem, 
              helping businesses maintain clean, safe, and compliant work environments.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                <span>Flexible rental periods</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                <span>Multiple dumpster sizes</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                <span>Same-day delivery</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                <span>Professional waste disposal</span>
              </li>
            </ul>
          </div>
          
          <div className="relative">
            <div className="relative w-full h-64 rounded-lg overflow-hidden">
              <OptimizedImage src="/images/optimized/dumpsterSmallBanner5.jpg"
                alt="Orem commercial dumpster rental"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Commercial Dumpster Sizes */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Commercial Dumpster Sizes Available</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="relative w-full h-48 mb-6">
                <OptimizedImage src="/images/optimized/dumpster500x500-1.jpg"
                  alt="15 yard commercial dumpster"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-600">15 Yard Commercial</h3>
              <p className="text-gray-600 mb-6">Perfect for small businesses and retail locations</p>
              <ul className="text-left space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Retail stores
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Office cleanouts
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Small renovations
                </li>
              </ul>
              <Link 
                href="https://icondumpsters.com/free-quote"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Quote
              </Link>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg text-center border-2 border-blue-600">
              <div className="relative w-full h-48 mb-6">
                <OptimizedImage src="/images/optimized/dumpster500x500-2.jpg"
                  alt="20 yard commercial dumpster"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-600">20 Yard Commercial</h3>
              <p className="text-gray-600 mb-6">Ideal for medium businesses and construction projects</p>
              <ul className="text-left space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Restaurant renovations
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Office buildings
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Commercial construction
                </li>
              </ul>
              <Link 
                href="https://icondumpsters.com/free-quote"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Quote
              </Link>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="relative w-full h-48 mb-6">
                <OptimizedImage src="/images/optimized/dumpster5-500x500-1.jpg"
                  alt="30 yard commercial dumpster"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-600">30 Yard Commercial</h3>
              <p className="text-gray-600 mb-6">For large commercial projects and demolition</p>
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
                  Industrial projects
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
      </div>

      {/* Commercial Industries Served */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Industries We Serve in Orem</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Construction</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• New building construction</li>
                <li>• Renovation projects</li>
                <li>• Demolition waste</li>
                <li>• Site preparation</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Restaurants</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Kitchen renovations</li>
                <li>• Equipment removal</li>
                <li>• Dining area updates</li>
                <li>• General maintenance</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Retail</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Store renovations</li>
                <li>• Inventory cleanouts</li>
                <li>• Display updates</li>
                <li>• Seasonal changes</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Manufacturing</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Production waste</li>
                <li>• Equipment disposal</li>
                <li>• Facility maintenance</li>
                <li>• Safety compliance</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Healthcare</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Facility renovations</li>
                <li>• Equipment updates</li>
                <li>• Compliance waste</li>
                <li>• General maintenance</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Office Buildings</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Office renovations</li>
                <li>• Furniture disposal</li>
                <li>• Technology updates</li>
                <li>• Space reconfiguration</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us for Commercial */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Why Choose Icon Dumpsters for Commercial Services?</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Professional Orem Service</h3>
              <p className="text-lg text-gray-600 mb-6">
                We understand the unique needs of Orem businesses and provide 
                reliable, professional dumpster rental services that keep your operations running smoothly.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-blue-600 mr-3">🚛</span>
                  <span>Flexible scheduling options</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-600 mr-3">📞</span>
                  <span>24/7 customer support</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-600 mr-3">📋</span>
                  <span>Compliance documentation</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-600 mr-3">💰</span>
                  <span>Competitive commercial pricing</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative w-full h-64 rounded-lg overflow-hidden">
                <OptimizedImage src="/images/optimized/Icon_Dumpsters_Final.jpg"
                  alt="Icon Dumpsters commercial services"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready for Professional Waste Management in Orem?</h2>
          <p className="text-xl mb-8">Get your commercial dumpster rental quote today</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="https://icondumpsters.com/free-quote"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Commercial Quote
            </Link>
            <Link 
              href="https://icondumpsters.com/dumpster-rental-orem-ut"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              View All Orem Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
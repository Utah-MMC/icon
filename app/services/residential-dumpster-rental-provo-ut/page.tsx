import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import PageHero from '../../components/PageHero';

import OptimizedImage from '../../components/OptimizedImage';
export const metadata: Metadata = {
  "title": "Residential Dumpster Rental Provo, UT | Residential Waste Solutions",
  "description": "residential dumpster rental services in Provo, Utah. Reliable waste management for homeowners and residents. Get a free quote today.",
  "keywords": [
    "residential dumpster rental",
    "Provo residential dumpster",
    "utah business dumpster rental",
    "waste management solutions"
  ],
  "alternates": {
    "canonical": "/services/residential-dumpster-rental-provo-ut"
  },
  "openGraph": {
    "title": "Residential Dumpster Rental Provo, UT | Residential Waste Solutions",
    "description": "residential dumpster rental services in Provo, Utah. Reliable waste management for homeowners and residents.",
    "url": "https://icondumpsters.com/services/residential-dumpster-rental-provo-ut",
    "images": [
      {
        "url": "/images/og-image.png",
        "width": 1200,
        "height": 630,
        "alt": "Provo Residential Dumpster Rental - Icon Dumpsters"
      }
    ],
    "type": "website"
  },
  "robots": {
    "index": true,
    "follow": true
  }
};

export default function ProvoResidentialDumpsterRentalPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero
        title={`Premier Residential Dumpster Rental in Provo, UT`}
        subtitle={`At Icon Dumpsters, we provide Residential Dumpster Rental services designed for you – Provo homeowners and residents who need reliable, convenient waste removal solutions for your projects.`}
        primaryCtaText="Reserve Residential Dumpster Now!"
        primaryCtaLink="/free-quote"
        secondaryCtaText={`Back to Provo`}
        secondaryCtaLink={`/cities/provo`}
        showCta={true}
      />

      {/* Residential Services Overview */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Residential Dumpster Services in Provo</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Home Waste Management</h3>
            <p className="text-lg text-gray-600 mb-6">
              We provide convenient residential dumpster rental services throughout Provo, 
              helping homeowners tackle projects big and small with reliable waste removal solutions.
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
                <span>Environmentally responsible disposal</span>
              </li>
            </ul>
          </div>
          
          <div className="relative">
            <div className="relative w-full h-64 rounded-lg overflow-hidden">
              <OptimizedImage src="/images/optimized/dumpsterSmallBanner5.jpg"
                alt="Provo residential dumpster rental"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Residential Dumpster Sizes */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Residential Dumpster Sizes Available</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="relative w-full h-48 mb-6">
                <OptimizedImage src="/images/optimized/dumpster500x500-1.jpg"
                  alt="15 yard residential dumpster"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-600">15 Yard Residential</h3>
              <p className="text-gray-600 mb-6">Perfect for small home projects and cleanouts</p>
              <ul className="text-left space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Kitchen remodels
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Bathroom renovations
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Garage cleanouts
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
                  alt="20 yard residential dumpster"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-600">20 Yard Residential</h3>
              <p className="text-gray-600 mb-6">Great for medium home projects and renovations</p>
              <ul className="text-left space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Full home renovations
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Basement finishing
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Large cleanouts
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
                  alt="30 yard residential dumpster"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-600">30 Yard Residential</h3>
              <p className="text-gray-600 mb-6">For major home projects and construction</p>
              <ul className="text-left space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Major renovations
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Home additions
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Complete home cleanouts</li>
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

      {/* Residential Projects Served */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Home Projects We Support in Provo</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Home Renovations</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Kitchen remodels</li>
                <li>• Bathroom updates</li>
                <li>• Basement finishing</li>
                <li>• Room additions</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Cleanouts</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Garage organization</li>
                <li>• Attic cleanouts</li>
                <li>• Estate cleanouts</li>
                <li>• Moving preparation</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Landscaping</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Yard waste removal</li>
                <li>• Tree trimming debris</li>
                <li>• Garden renovations</li>
                <li>• Hardscape projects</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Maintenance</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Roof repairs</li>
                <li>• Siding replacement</li>
                <li>• Deck maintenance</li>
                <li>• General repairs</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Seasonal</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Spring cleaning</li>
                <li>• Fall yard work</li>
                <li>• Holiday preparation</li>
                <li>• Weather damage</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Special Events</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Party cleanup</li>
                <li>• Event preparation</li>
                <li>• Temporary projects</li>
                <li>• Quick cleanups</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us for Residential */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Why Choose Icon Dumpsters for Residential Services?</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Local Provo Expertise</h3>
              <p className="text-lg text-gray-600 mb-6">
                We're your neighbors in Provo and understand the unique needs of local 
                homeowners. Our residential dumpster rental services are designed with your convenience in mind.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-blue-600 mr-3">🏠</span>
                  <span>Homeowner-friendly pricing</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-600 mr-3">📅</span>
                  <span>Flexible scheduling</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-600 mr-3">🌱</span>
                  <span>Eco-friendly disposal</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-600 mr-3">📞</span>
                  <span>Local customer support</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative w-full h-64 rounded-lg overflow-hidden">
                <OptimizedImage src="/images/optimized/Icon_Dumpsters_Final.jpg"
                  alt="Icon Dumpsters residential services"
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
          <h2 className="text-3xl font-bold mb-6">Ready to Tackle Your Provo Home Project?</h2>
          <p className="text-xl mb-8">Get your residential dumpster rental quote today</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="https://icondumpsters.com/free-quote"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Residential Quote
            </Link>
            <Link 
              href="https://icondumpsters.com/dumpster-rental-provo-ut"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              View All Provo Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
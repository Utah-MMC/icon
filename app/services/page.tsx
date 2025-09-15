import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "../components/PageHero";
import PageTemplate from "../components/PageTemplate";
import RelatedPages from "../components/RelatedPages";

import OptimizedImage from '../components/OptimizedImage';
export const metadata: Metadata = {
  title: 'Dumpster Rental Services in Utah | Icon Dumpsters',
  description: 'Professional dumpster rental services in Utah including residential, construction, garbage removal, yard waste, and downsizing projects. Call (801) 918-6000 for instant quotes.',
  alternates: { canonical: 'https://icondumpsters.com/services' },
  robots: { index: true, follow: true }
};

export default function Services() {
  return (
    <PageTemplate>
      <PageHero
        title="Dumpster Rental Services in Utah"
        subtitle="Professional waste management solutions for every project type"
        primaryCtaText="Get Free Quote"
        primaryCtaLink="/#quote-form"
        secondaryCtaText="Call (801) 918-6000"
        secondaryCtaLink="tel:(801) 918-6000"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Service Overview */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Dumpster Rentals Are Great For A Variety Of Projects!
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            At Icon Dumpsters, our mission is simple: <strong>to provide a hassle-free, friendly dumpster rental service to homeowners and contractors alike.</strong>
          </p>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mt-4">
            Our services include residential-friendly dumpster rentals, professional dumpster delivery and pickup, and comprehensive waste management solutions. With a variety of dumpster sizes and a dedication to exceptional customer service, our goal is to make your waste management process as straightforward and pleasant as possible.
          </p>
        </div>

        {/* Service Images Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
            <OptimizedImage src="/images/optimized/dumpster500x500-1.jpg"
              alt="Professional dumpster delivery service in Utah"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="font-bold text-lg">Professional Delivery</h3>
              <p className="text-sm opacity-90">Fast & reliable service</p>
            </div>
          </div>
          
          <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
            <OptimizedImage src="/images/optimized/dumpster500x500-2.jpg"
              alt="Multiple dumpster sizes available for different projects"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="font-bold text-lg">Multiple Sizes</h3>
              <p className="text-sm opacity-90">10-30 yard options</p>
            </div>
          </div>
          
          <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
            <OptimizedImage src="/images/optimized/dumpsterSmallBanner.jpg"
              alt="Construction site with properly placed dumpster"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="font-bold text-lg">Construction Ready</h3>
              <p className="text-sm opacity-90">Heavy-duty solutions</p>
            </div>
          </div>
          
          <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
            <OptimizedImage src="/images/optimized/dumpsterSmallBanner2.jpg"
              alt="Efficient waste loading and management"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="font-bold text-lg">Easy Loading</h3>
              <p className="text-sm opacity-90">Convenient access</p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Residential Dumpster Rentals */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-48 overflow-hidden">
              <OptimizedImage src="/images/optimized/dumpster500x500-1.jpg"
                alt="Residential dumpster rental for home projects"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#4e37a8]/80 to-purple-600/80 flex items-center justify-center">
                <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Residential Dumpster Rentals</h3>
              <p className="text-gray-600 mb-4">
                Icon Dumpsters specializes in residential-friendly dumpster rentals, offering a seamless and efficient solution for waste management. Our service includes easy-to-navigate dumpster sizes and professional dumpster delivery and pickup.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="text-[#4e37a8] mr-2">✓</span>
                  <span>Home renovations & remodeling</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="text-[#4e37a8] mr-2">✓</span>
                  <span>Basement & attic cleanouts</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="text-[#4e37a8] mr-2">✓</span>
                  <span>Garage organization projects</span>
                </div>
              </div>
              <a href="https://icondumpsters.com/services/residential-dumpster-rentals" className="inline-block bg-[#4e37a8] text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                Learn More
              </a>
            </div>
          </div>

          {/* Construction Dumpster Rentals */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-48 overflow-hidden">
              <OptimizedImage src="/images/optimized/dumpsterSmallBanner.jpg"
                alt="Construction dumpster rental for building projects"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/80 to-red-600/80 flex items-center justify-center">
                <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Construction Dumpster Rentals</h3>
              <p className="text-gray-600 mb-4">
                Icon Dumpsters offers specialized construction dumpster rentals tailored for any project size, from residential remodels to large-scale construction sites.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="text-[#4e37a8] mr-2">✓</span>
                  <span>New construction projects</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="text-[#4e37a8] mr-2">✓</span>
                  <span>Commercial renovations</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="text-[#4e37a8] mr-2">✓</span>
                  <span>Demolition debris removal</span>
                </div>
              </div>
              <a href="https://icondumpsters.com/services/construction-dumpster-rentals" className="inline-block bg-[#4e37a8] text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                Learn More
              </a>
            </div>
          </div>

          {/* Garbage & Junk Bin Rentals */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-48 overflow-hidden">
              <OptimizedImage src="/images/optimized/dumpsterSmallBanner2.jpg"
                alt="Garbage and junk bin rental for waste removal"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/80 to-teal-600/80 flex items-center justify-center">
                <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Garbage & Junk Bin Rentals</h3>
              <p className="text-gray-600 mb-4">
                Looking to clear out clutter or take on a renovation project? Icon Dumpsters offers a hassle-free garbage and junk removal service, perfectly suited for your needs.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="text-[#4e37a8] mr-2">✓</span>
                  <span>Household clutter removal</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="text-[#4e37a8] mr-2">✓</span>
                  <span>Furniture & appliance disposal</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="text-[#4e37a8] mr-2">✓</span>
                  <span>General household waste</span>
                </div>
              </div>
              <a href="https://icondumpsters.com/services/garbage-junk-bin-rentals" className="inline-block bg-[#4e37a8] text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                Learn More
              </a>
            </div>
          </div>

          {/* Yard Waste & Debris Bin Rental */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-48 overflow-hidden">
              <OptimizedImage src="/images/optimized/dumpster500x500-2.jpg"
                alt="Yard waste and debris bin rental for landscaping"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/80 to-green-600/80 flex items-center justify-center">
                <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Yard Waste & Debris Bin Rental</h3>
              <p className="text-gray-600 mb-4">
                Tackling a yard overhaul or dealing with seasonal cleanup? Icon Dumpsters is here to help manage your yard waste and debris efficiently.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="text-[#4e37a8] mr-2">✓</span>
                  <span>Tree & branch removal</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="text-[#4e37a8] mr-2">✓</span>
                  <span>Landscaping projects</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="text-[#4e37a8] mr-2">✓</span>
                  <span>Seasonal yard cleanup</span>
                </div>
              </div>
              <a href="https://icondumpsters.com/services/yard-waste-debris-bin-rental" className="inline-block bg-[#4e37a8] text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                Learn More
              </a>
            </div>
          </div>

          {/* Downsizing Dumpster Rentals */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-48 overflow-hidden">
              <OptimizedImage src="/images/optimized/dumpsterSmallBanner4.jpg"
                alt="Downsizing dumpster rental for moving and estate cleanout"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/80 to-indigo-600/80 flex items-center justify-center">
                <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v2H8V5z" />
                </svg>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Downsizing Dumpster Rentals</h3>
              <p className="text-gray-600 mb-4">
                Downsizing your home can be a refreshing way to declutter, reduce stress, and start a new chapter. Icon Dumpsters makes the process smoother.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="text-[#4e37a8] mr-2">✓</span>
                  <span>Moving preparation</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="text-[#4e37a8] mr-2">✓</span>
                  <span>Estate cleanouts</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="text-[#4e37a8] mr-2">✓</span>
                  <span>Life transition projects</span>
                </div>
              </div>
              <a href="https://icondumpsters.com/services/downsizing-dumpster-rentals" className="inline-block bg-[#4e37a8] text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                Learn More
              </a>
            </div>
          </div>

          {/* Estate Cleanout */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-48 overflow-hidden">
              <OptimizedImage src="/images/optimized/dumpsterSmallBanner.jpg"
                alt="Estate cleanout dumpster rental for property cleanup"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/80 to-pink-600/80 flex items-center justify-center">
                <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Estate Cleanout</h3>
              <p className="text-gray-600 mb-4">
                Complete property cleanup and estate management services for comprehensive waste removal and property preparation.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="text-[#4e37a8] mr-2">✓</span>
                  <span>Complete property cleanup</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="text-[#4e37a8] mr-2">✓</span>
                  <span>Estate management</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="text-[#4e37a8] mr-2">✓</span>
                  <span>Property preparation</span>
                </div>
              </div>
              <a href="https://icondumpsters.com/estate-cleanout" className="inline-block bg-[#4e37a8] text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                Learn More
              </a>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-[#4e37a8] to-purple-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Whether it's a home renovation, major cleanout, or landscaping overhaul, we've got you covered. Our friendly team is ready to assist you with expert advice and tailored solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:(801) 918-6000" 
              className="bg-white text-[#4e37a8] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Call (801) 918-6000
            </a>
            <a 
              href="https://icondumpsters.com/#quote-form" 
              className="bg-orange-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition-colors"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      </div>

      {/* Internal Linking Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <RelatedPages pageType="service" />
      </div>
    </PageTemplate>
  );
}

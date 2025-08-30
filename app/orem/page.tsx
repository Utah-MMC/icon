import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '../components/PageHero';
import QuoteForm from '../components/QuoteForm';

export const metadata: Metadata = {
  title: "Orem Dumpster Rental - Professional Dumpster Services in Orem, UT | (801) 918-6000",
  description: "Professional dumpster rental services in Orem, Utah. Fast delivery, competitive pricing, and reliable waste management solutions. Call (801) 918-6000 for instant quotes.",
  keywords: "Orem dumpster rental, dumpster rental Orem UT, Orem Utah dumpster, roll-off dumpster Orem, construction dumpster Orem, waste management Orem",
  openGraph: {
    title: "Orem Dumpster Rental - Professional Dumpster Services in Orem, UT | (801) 918-6000",
    description: "Professional dumpster rental services in Orem, Utah. Fast delivery, competitive pricing, and reliable waste management solutions.",
    url: 'https://icondumpsters.com/orem',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Orem Dumpster Rental - Professional Dumpster Services in Orem, UT',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Orem Dumpster Rental - Professional Dumpster Services in Orem, UT | (801) 918-6000",
    description: "Professional dumpster rental services in Orem, Utah. Fast delivery, competitive pricing, and reliable waste management solutions.",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/orem',
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
    'geo.placename': 'Orem, Utah',
    'geo.position': '40.7608;-111.8910',
    'ICBM': '40.7608, -111.8910',
  },
};

export default function OremPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#4e37a8] to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Orem Dumpster Rental
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Professional dumpster rental services in Orem, Utah. Fast delivery, competitive pricing, and reliable waste management solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:801-918-6000" 
                className="bg-white text-[#4e37a8] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                🏠“ž Call (801) 918-6000
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Dumpster Rental Services in Orem</h2>
              <p className="text-lg text-gray-700 mb-6">
                Icon Dumpsters provides reliable dumpster rental services throughout Orem, Utah. Whether you're tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.
              </p>                
                {/* Hero Image */}
                
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">🏠  Residential Projects</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Home renovations and remodeling</li>
                    <li>• Basement cleanouts</li>
                    <li>• Garage organization</li>
                    <li>• Yard waste removal</li>
                    <li>• Estate cleanouts</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">🏠¢ Commercial Projects</h3>
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
                <h3 className="text-xl font-semibold text-blue-900 mb-4">🏠  Need a Permit?</h3>
                <p className="text-gray-700 mb-4">
                  Contact Orem for permit requirements and applications. We can help guide you through the process.
                </p>
                <a 
                  href="tel:801-229-7000" 
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  Orem: (801-229-7000)
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Complete Orem Dumpster Rental Guide</h2>
              <p className="text-lg text-gray-700 mb-6">
                Get detailed information about dumpster rental in Orem, including pricing, regulations, permit requirements, and more.
              </p>                
                {/* Guide Image */}
                                
                {/* Hero Image */}
                <div className="mb-8">
                  <img 
                    
                </div>
              <Link 
                href="/orem-dumpster-rental-guide-2025"
                className="inline-block bg-[#4e37a8] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-700 transition-colors"
              >
                🏠“– Read Complete Guide â†’
              </Link>              {/* Local Orem Landmarks & Attractions */}
              <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Orem Landmarks & Attractions</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Orem is home to several popular attractions and landmarks. Whether you're working on a project near these areas or just exploring the city, we're here to help with your dumpster rental needs.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">🏠🏛️ï¸ Popular Orem Attractions</h3>
                    <ul className="space-y-2 text-gray-700">
                        <li>• <strong><a href="https://www.uvu.edu/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Utah Valley University</a></strong> - <a href="https://www.google.com/maps/search/800 W University Pkwy" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">800 W University Pkwy</a></li>
                        <li>• <strong><a href="https://www.universityplaceorem.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">University Place</a></strong> - <a href="https://www.google.com/maps/search/575 E University Pkwy" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">575 E University Pkwy</a></li>
                        <li>• <strong><a href="https://www.scera.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">SCERA Center</a></strong> - <a href="https://www.google.com/maps/search/745 S State St" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">745 S State St</a></li>
                        <li>• <strong><a href="https://www.orem.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Orem City Hall</a></strong> - <a href="https://www.google.com/maps/search/56 N State St" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">56 N State St</a></li>
                        <li>• <strong><a href="https://www.orem.org/library/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Orem Library</a></strong> - <a href="https://www.google.com/maps/search/58 N State St" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">58 N State St</a></li>
                        <li>• <strong><a href="https://www.cascadegolf.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Cascade Golf Course</a></strong> - <a href="https://www.google.com/maps/search/1441 E 800 N" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">1441 E 800 N</a></li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">🏠¢ Orem Business Districts</h3>
                    <ul className="space-y-2 text-gray-700">
                        <li>• <strong><a href="/dumpster-rental" className="text-blue-600 hover:text-blue-800 underline">Orem Central</a></strong> - <a href="/blog/retail-renovation-dumpster-guide" className="text-gray-500 hover:text-gray-700">Major retail and dining</a></li>
                        <li>• <strong><a href="/dumpster-rental" className="text-blue-600 hover:text-blue-800 underline">Orem East</a></strong> - <a href="/blog/government-project-dumpster-rental" className="text-gray-500 hover:text-gray-700">Government and civic center</a></li>
                        <li>• <strong><a href="/dumpster-rental" className="text-blue-600 hover:text-blue-800 underline">Orem West</a></strong> - <a href="/blog/residential-cleanup-guide" className="text-gray-500 hover:text-gray-700">Residential and commercial mix</a></li>
                        <li>• <strong><a href="/dumpster-rental" className="text-blue-600 hover:text-blue-800 underline">Orem South</a></strong> - <a href="/blog/industrial-waste-management" className="text-gray-500 hover:text-gray-700">Industrial and commercial</a></li>
                        <li>• <strong><a href="/dumpster-rental" className="text-blue-600 hover:text-blue-800 underline">Orem North</a></strong> - <a href="/blog/new-construction-dumpster-guide" className="text-gray-500 hover:text-gray-700">Growing residential area</a></li>
                        <li>• <strong><a href="/dumpster-rental" className="text-blue-600 hover:text-blue-800 underline">Downtown Orem</a></strong> - <a href="/blog/established-neighborhood-renovation" className="text-gray-500 hover:text-gray-700">Established neighborhoods</a></li>                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 bg-purple-50 border border-purple-200 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-purple-900 mb-4">🚚 Dumpster Rental Near Orem Attractions</h3>
                  <p className="text-gray-700 mb-4">
                    We provide dumpster rental services throughout Orem, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <h4 className="font-semibold text-purple-800 mb-2">Near Orem Parks</h4>
                      <p className="text-gray-600">Perfect for <a href="/blog/park-renovation-projects" className="text-purple-600 hover:text-purple-800 underline">park renovation projects</a> and <a href="/blog/community-event-cleanup" className="text-purple-600 hover:text-purple-800 underline">community events</a></p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-800 mb-2">Business Districts</h4>
                      <p className="text-gray-600">Convenient for <a href="/blog/retail-renovation-dumpster-guide" className="text-purple-600 hover:text-purple-800 underline">retail and restaurant renovation projects</a></p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-800 mb-2">Residential Areas</h4>
                      <p className="text-gray-600">Ideal for <a href="/blog/home-renovation-dumpster-guide" className="text-purple-600 hover:text-purple-800 underline">home renovations</a> and <a href="/blog/residential-cleanup-guide" className="text-purple-600 hover:text-purple-800 underline">residential cleanouts</a></p>
                    </div>
                  </div>
                </div>
              </section>

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
            Get your Orem dumpster rental quote today. Fast delivery, competitive pricing, and professional service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:801-918-6000" 
              className="bg-[#4e37a8] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-700 transition-colors"
            >
              🏠“ž Call Now: (801) 918-6000
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






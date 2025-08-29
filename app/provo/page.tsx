import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '../components/PageHero';
import QuoteForm from '../components/QuoteForm';

export const metadata: Metadata = {
  title: "Provo Dumpster Rental - Professional Dumpster Services in Provo, UT | (801) 918-6000",
  description: "Professional dumpster rental services in Provo, Utah. Fast delivery, competitive pricing, and reliable waste management solutions. Call (801) 918-6000 for instant quotes.",
  keywords: "Provo dumpster rental, dumpster rental Provo UT, Provo Utah dumpster, roll-off dumpster Provo, construction dumpster Provo, waste management Provo",
  openGraph: {
    title: "Provo Dumpster Rental - Professional Dumpster Services in Provo, UT | (801) 918-6000",
    description: "Professional dumpster rental services in Provo, Utah. Fast delivery, competitive pricing, and reliable waste management solutions.",
    url: 'https://icondumpsters.com/provo',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Provo Dumpster Rental - Professional Dumpster Services in Provo, UT',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Provo Dumpster Rental - Professional Dumpster Services in Provo, UT | (801) 918-6000",
    description: "Professional dumpster rental services in Provo, Utah. Fast delivery, competitive pricing, and reliable waste management solutions.",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/provo',
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
    'geo.placename': 'Provo, Utah',
    'geo.position': '40.7608;-111.8910',
    'ICBM': '40.7608, -111.8910',
  },
};

export default function ProvoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#4e37a8] to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Provo Dumpster Rental
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Professional dumpster rental services in Provo, Utah. Fast delivery, competitive pricing, and reliable waste management solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:801-918-6000" 
                className="bg-white text-[#4e37a8] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                ðŸ“ž Call (801) 918-6000
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Dumpster Rental Services in Provo</h2>
              <p className="text-lg text-gray-700 mb-6">
                Icon Dumpsters provides reliable dumpster rental services throughout Provo, Utah. Whether you're tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.
              </p>                
                {/* Hero Image */}
                <div className="mb-8">
                  <img 
                    src="/images/IMG_0350.jpg" 
                    alt="Professional dumpster rental services in Provo, Utah - Icon Dumpsters" 
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
                </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">ðŸ  Residential Projects</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>â€¢ Home renovations and remodeling</li>
                    <li>â€¢ Basement cleanouts</li>
                    <li>â€¢ Garage organization</li>
                    <li>â€¢ Yard waste removal</li>
                    <li>â€¢ Estate cleanouts</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">ðŸ¢ Commercial Projects</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>â€¢ Construction and demolition</li>
                    <li>â€¢ Office renovations</li>
                    <li>â€¢ Retail store cleanouts</li>
                    <li>â€¢ Industrial waste removal</li>
                    <li>â€¢ Event cleanup</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">ðŸ  Need a Permit?</h3>
                <p className="text-gray-700 mb-4">
                  Contact Provo for permit requirements and applications. We can help guide you through the process.
                </p>
                <a 
                  href="tel:801-852-6000" 
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  Provo: (801-852-6000)
                </a>
              </div>
            </section>

            {/* Dumpster Sizes */}
            <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Available Dumpster Sizes</h2>                
                {/* Dumpster Sizes Image */}
                <div className="mb-8">
                  <img 
                    src="/images/dumpsterSmallBanner3.jpeg" 
                    alt="Available dumpster sizes for Provo dumpster rental - 15, 20, and 30 yard options" 
                    className="w-full h-48 object-cover rounded-lg shadow-md"
                  />
                </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="border border-gray-200 rounded-lg p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">15 Yard Dumpster</h3>
                  <p className="text-gray-600 mb-4">Perfect for small to medium projects</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>â€¢ Kitchen remodel</li>
                    <li>â€¢ Bathroom renovation</li>
                    <li>â€¢ Garage cleanout</li>
                    <li>â€¢ Small construction</li>
                  </ul>
                </div>
                <div className="border border-gray-200 rounded-lg p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">20 Yard Dumpster</h3>
                  <p className="text-gray-600 mb-4">Great for medium to large projects</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>â€¢ Full home renovation</li>
                    <li>â€¢ Large construction</li>
                    <li>â€¢ Commercial projects</li>
                    <li>â€¢ Major cleanouts</li>
                  </ul>
                </div>
                <div className="border border-gray-200 rounded-lg p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">30 Yard Dumpster</h3>
                  <p className="text-gray-600 mb-4">For major projects and construction</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>â€¢ Large construction</li>
                    <li>â€¢ Commercial demolition</li>
                    <li>â€¢ Major renovations</li>
                    <li>â€¢ Industrial projects</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Detailed Guide Link */}
            <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Complete Provo Dumpster Rental Guide</h2>
              <p className="text-lg text-gray-700 mb-6">
                Get detailed information about dumpster rental in Provo, including pricing, regulations, permit requirements, and more.
              </p>                
                {/* Guide Image */}
                <div className="mb-6">
                  <img 
                    src="/images/IMG_0336.jpg" 
                    alt="Complete Provo dumpster rental guide with pricing and regulations" 
                    className="w-full h-48 object-cover rounded-lg shadow-md"
                  />
                </div>                
                {/* Hero Image */}
                <div className="mb-8">
                  <img 
                    src="/images/IMG_0350.jpg" 
                    alt="Professional dumpster rental services in Provo, Utah - Icon Dumpsters" 
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
                </div>
              <Link 
                href="/provo-dumpster-rental-guide-2025"
                className="inline-block bg-[#4e37a8] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-700 transition-colors"
              >
                ðŸ“– Read Complete Guide â†’
              </Link>              {/* Local Provo Landmarks & Attractions */}
              <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Provo Landmarks & Attractions</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Provo is home to several popular attractions and landmarks. Whether you're working on a project near these areas or just exploring the city, we're here to help with your dumpster rental needs.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">ðŸ›ï¸ Popular Provo Attractions</h3>
                    <ul className="space-y-2 text-gray-700">
                        <li>â€¢ <strong><a href="https://www.byu.edu/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Brigham Young University</a></strong> - <a href="https://www.google.com/maps/search/1 N University Ave" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">1 N University Ave</a></li>
                        <li>â€¢ <strong><a href="https://www.google.com/maps/place/Provo+Canyon/@40.6669,-111.8878,15z" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Provo Canyon</a></strong> - <a href="https://www.google.com/maps/search/US-189" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">US-189</a></li>
                        <li>â€¢ <strong><a href="https://www.google.com/maps/place/Utah+Lake/@40.6669,-111.8878,15z" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Utah Lake</a></strong> - <a href="https://www.google.com/maps/search/Utah Lake State Park" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">Utah Lake State Park</a></li>
                        <li>â€¢ <strong><a href="https://www.provo.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Provo City Hall</a></strong> - <a href="https://www.google.com/maps/search/351 W Center St" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">351 W Center St</a></li>
                        <li>â€¢ <strong><a href="https://www.provo.org/library/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Provo Library</a></strong> - <a href="https://www.google.com/maps/search/550 N University Ave" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">550 N University Ave</a></li>
                        <li>â€¢ <strong><a href="https://www.provotownecentre.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Provo Towne Centre</a></strong> - <a href="https://www.google.com/maps/search/1200 Towne Centre Blvd" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">1200 Towne Centre Blvd</a></li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">ðŸ¢ Provo Business Districts</h3>
                    <ul className="space-y-2 text-gray-700">
                        <li>â€¢ <strong><a href="/commercial-dumpster-rental" className="text-blue-600 hover:text-blue-800 underline">Provo Central</a></strong> - <a href="/blog/retail-renovation-dumpster-guide" className="text-gray-500 hover:text-gray-700">Major retail and dining</a></li>
                        <li>â€¢ <strong><a href="/government-dumpster-rental" className="text-blue-600 hover:text-blue-800 underline">Provo East</a></strong> - <a href="/blog/government-project-dumpster-rental" className="text-gray-500 hover:text-gray-700">Government and civic center</a></li>
                        <li>â€¢ <strong><a href="/residential-dumpster-rental" className="text-blue-600 hover:text-blue-800 underline">Provo West</a></strong> - <a href="/blog/residential-cleanup-guide" className="text-gray-500 hover:text-gray-700">Residential and commercial mix</a></li>
                        <li>â€¢ <strong><a href="/industrial-dumpster-rental" className="text-blue-600 hover:text-blue-800 underline">Provo South</a></strong> - <a href="/blog/industrial-waste-management" className="text-gray-500 hover:text-gray-700">Industrial and commercial</a></li>
                        <li>â€¢ <strong><a href="/residential-dumpster-rental" className="text-blue-600 hover:text-blue-800 underline">Provo North</a></strong> - <a href="/blog/new-construction-dumpster-guide" className="text-gray-500 hover:text-gray-700">Growing residential area</a></li>
                        <li>â€¢ <strong><a href="/residential-dumpster-rental" className="text-blue-600 hover:text-blue-800 underline">Downtown Provo</a></strong> - <a href="/blog/established-neighborhood-renovation" className="text-gray-500 hover:text-gray-700">Established neighborhoods</a></li>                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 bg-purple-50 border border-purple-200 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-purple-900 mb-4">ðŸšš Dumpster Rental Near Provo Attractions</h3>
                  <p className="text-gray-700 mb-4">
                    We provide dumpster rental services throughout Provo, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <h4 className="font-semibold text-purple-800 mb-2">Near Provo Parks</h4>
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
            Get your Provo dumpster rental quote today. Fast delivery, competitive pricing, and professional service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:801-918-6000" 
              className="bg-[#4e37a8] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-700 transition-colors"
            >
              ðŸ“ž Call Now: (801) 918-6000
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






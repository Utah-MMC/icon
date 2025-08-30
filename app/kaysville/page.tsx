import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '../components/PageHero';
import QuoteForm from '../components/QuoteForm';

export const metadata: Metadata = {
  title: "Kaysville Dumpster Rental - Professional Dumpster Services in Kaysville, UT | (801) 918-6000",
  description: "Professional dumpster rental services in Kaysville, Utah. Fast delivery, competitive pricing, and reliable waste management solutions. Call (801) 918-6000 for instant quotes.",
  keywords: "Kaysville dumpster rental, dumpster rental Kaysville UT, Kaysville Utah dumpster, roll-off dumpster Kaysville, construction dumpster Kaysville, waste management Kaysville",
  openGraph: {
    title: "Kaysville Dumpster Rental - Professional Dumpster Services in Kaysville, UT | (801) 918-6000",
    description: "Professional dumpster rental services in Kaysville, Utah. Fast delivery, competitive pricing, and reliable waste management solutions.",
    url: 'https://icondumpsters.com/kaysville',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Kaysville Dumpster Rental - Professional Dumpster Services in Kaysville, UT',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Kaysville Dumpster Rental - Professional Dumpster Services in Kaysville, UT | (801) 918-6000",
    description: "Professional dumpster rental services in Kaysville, Utah. Fast delivery, competitive pricing, and reliable waste management solutions.",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/kaysville',
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
    'geo.placename': 'Kaysville, Utah',
    'geo.position': '40.7608;-111.8910',
    'ICBM': '40.7608, -111.8910',
  },
};

export default function KaysvillePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#4e37a8] to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Kaysville Dumpster Rental
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Professional dumpster rental services in Kaysville, Utah. Fast delivery, competitive pricing, and reliable waste management solutions.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Dumpster Rental Services in Kaysville</h2>
              <p className="text-lg text-gray-700 mb-6">
                Icon Dumpsters provides reliable <a href="/dumpster-rental" className="text-blue-600 hover:text-blue-800 underline">dumpster rental services</a> throughout Kaysville, Utah. Whether you're tackling a <a href="/blog/home-renovation-dumpster-guide" className="text-blue-600 hover:text-blue-800 underline">home renovation</a>, <a href="/blog/construction-dumpster-rental-guide" className="text-blue-600 hover:text-blue-800 underline">construction project</a>, or <a href="/blog/residential-cleanup-guide" className="text-blue-600 hover:text-blue-800 underline">major cleanup</a>, we have the right <a href="/dumpster-sizes" className="text-blue-600 hover:text-blue-800 underline">dumpster size</a> for your needs.
              </p>                
                {/* Hero Image */}
                
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">🏠 Residential Projects</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <a href="/blog/home-renovation-dumpster-guide" className="text-blue-600 hover:text-blue-800 underline">Home renovations and remodeling</a></li>
                    <li>• <a href="/blog/basement-cleanout-guide" className="text-blue-600 hover:text-blue-800 underline">Basement cleanouts</a></li>
                    <li>• <a href="/blog/garage-organization-guide" className="text-blue-600 hover:text-blue-800 underline">Garage organization</a></li>
                    <li>• <a href="/blog/yard-waste-removal-guide" className="text-blue-600 hover:text-blue-800 underline">Yard waste removal</a></li>
                    <li>• <a href="/blog/estate-cleanout-guide" className="text-blue-600 hover:text-blue-800 underline">Estate cleanouts</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">🏢 Commercial Projects</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <a href="/blog/construction-dumpster-rental-guide" className="text-blue-600 hover:text-blue-800 underline">Construction and demolition</a></li>
                    <li>• <a href="/blog/office-renovation-guide" className="text-blue-600 hover:text-blue-800 underline">Office renovations</a></li>
                    <li>• <a href="/blog/retail-renovation-dumpster-guide" className="text-blue-600 hover:text-blue-800 underline">Retail store cleanouts</a></li>
                    <li>• <a href="/blog/industrial-waste-management" className="text-blue-600 hover:text-blue-800 underline">Industrial waste removal</a></li>
                    <li>• <a href="/blog/event-cleanup-guide" className="text-blue-600 hover:text-blue-800 underline">Event cleanup</a></li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">🏠  Need a Permit?</h3>
                <p className="text-gray-700 mb-4">
                  Contact Kaysville for permit requirements and applications. We can help guide you through the process.
                </p>
                <a 
                  href="tel:801-546-1235" 
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  Kaysville: (801-546-1235)
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
                    <li>• <a href="/blog/kitchen-remodel-dumpster-guide" className="text-blue-600 hover:text-blue-800 underline">Kitchen remodel</a></li>
                    <li>• <a href="/blog/bathroom-renovation-guide" className="text-blue-600 hover:text-blue-800 underline">Bathroom renovation</a></li>
                    <li>• <a href="/blog/garage-organization-guide" className="text-blue-600 hover:text-blue-800 underline">Garage cleanout</a></li>
                    <li>• <a href="/blog/small-construction-dumpster-guide" className="text-blue-600 hover:text-blue-800 underline">Small construction</a></li>
                  </ul>
                </div>
                <div className="border border-gray-200 rounded-lg p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">20 Yard Dumpster</h3>
                  <p className="text-gray-600 mb-4">Great for medium to large projects</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• <a href="/blog/home-renovation-dumpster-guide" className="text-blue-600 hover:text-blue-800 underline">Full home renovation</a></li>
                    <li>• <a href="/blog/construction-dumpster-rental-guide" className="text-blue-600 hover:text-blue-800 underline">Large construction</a></li>
                    <li>• <a href="/blog/commercial-dumpster-rental-guide" className="text-blue-600 hover:text-blue-800 underline">Commercial projects</a></li>
                    <li>• <a href="/blog/major-cleanout-guide" className="text-blue-600 hover:text-blue-800 underline">Major cleanouts</a></li>
                  </ul>
                </div>
                <div className="border border-gray-200 rounded-lg p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">30 Yard Dumpster</h3>
                  <p className="text-gray-600 mb-4">For major projects and construction</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• <a href="/blog/large-construction-dumpster-guide" className="text-blue-600 hover:text-blue-800 underline">Large construction</a></li>
                    <li>• <a href="/blog/demolition-dumpster-calculator" className="text-blue-600 hover:text-blue-800 underline">Commercial demolition</a></li>
                    <li>• <a href="/blog/major-renovation-guide" className="text-blue-600 hover:text-blue-800 underline">Major renovations</a></li>
                    <li>• <a href="/blog/industrial-dumpster-rental-guide" className="text-blue-600 hover:text-blue-800 underline">Industrial projects</a></li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Detailed Guide Link */}
            <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Complete Kaysville Dumpster Rental Guide</h2>
              <p className="text-lg text-gray-700 mb-6">
                Get detailed information about dumpster rental in Kaysville, including pricing, regulations, permit requirements, and more.
              </p>                
                
              <Link 
                href="/kaysville-dumpster-rental-guide-2025"
                className="inline-block bg-[#4e37a8] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-700 transition-colors"
              >
                📖 Read Complete Guide →
              </Link>
            </section>

            {/* Local Kaysville Landmarks & Attractions */}
            <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Kaysville Landmarks & Attractions</h2>
              <p className="text-lg text-gray-700 mb-6">
                Kaysville is home to several popular attractions and landmarks. Whether you're working on a project near these areas or just exploring the city, we're here to help with your dumpster rental needs.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">🏛️ Popular Kaysville Attractions</h3>
                  <ul className="space-y-2 text-gray-700">
                      <li>• <strong><a href="https://www.kaysville.utah.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Kaysville City Hall</a></strong> - <a href="https://www.google.com/maps/search/23 E Center St" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">23 E Center St</a></li>
                      <li>• <strong><a href="https://www.kaysville.utah.gov/parks-recreation/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Kaysville City Park</a></strong> - <a href="https://www.google.com/maps/search/200 W 400 N" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">200 W 400 N</a></li>
                      <li>• <strong><a href="https://www.kaysville.utah.gov/library/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Kaysville Library</a></strong> - <a href="https://www.google.com/maps/search/215 N Fairfield Rd" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">215 N Fairfield Rd</a></li>
                      <li>• <strong><a href="https://www.google.com/maps/place/Barnes+Park/@41.0353,-111.9386,15z" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Barnes Park</a></strong> - <a href="https://www.google.com/maps/search/950 W 200 N" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">950 W 200 N</a></li>
                      <li>• <strong><a href="https://www.google.com/maps/place/Kaysville+Utah+Temple/@41.0353,-111.9386,15z" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Kaysville Utah Temple</a></strong> - <a href="https://www.google.com/maps/search/200 S 1000 E" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">200 S 1000 E</a></li>
                      <li>• <strong><a href="https://www.google.com/maps/place/Davis+High+School/@41.0353,-111.9386,15z" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Davis High School</a></strong> - <a href="https://www.google.com/maps/search/325 S Main St" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">325 S Main St</a></li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">🏢 Kaysville Business Districts</h3>
                  <ul className="space-y-2 text-gray-700">
                      <li>• <strong><a href="/dumpster-rental" className="text-blue-600 hover:text-blue-800 underline">Kaysville Main Street</a></strong> - <a href="/blog/retail-renovation-dumpster-guide" className="text-gray-500 hover:text-gray-700">Historic downtown area</a></li>
                      <li>• <strong><a href="/dumpster-rental" className="text-blue-600 hover:text-blue-800 underline">Kaysville Civic Center</a></strong> - <a href="/blog/government-project-dumpster-rental" className="text-gray-500 hover:text-gray-700">Government and civic buildings</a></li>
                      <li>• <strong><a href="/dumpster-rental" className="text-blue-600 hover:text-blue-800 underline">Kaysville East</a></strong> - <a href="/blog/residential-cleanup-guide" className="text-gray-500 hover:text-gray-700">Residential neighborhoods</a></li>
                      <li>• <strong><a href="/dumpster-rental" className="text-blue-600 hover:text-blue-800 underline">Kaysville West</a></strong> - <a href="/blog/industrial-waste-management" className="text-gray-500 hover:text-gray-700">Commercial and light industrial</a></li>
                      <li>• <strong><a href="/dumpster-rental" className="text-blue-600 hover:text-blue-800 underline">Kaysville South</a></strong> - <a href="/blog/new-construction-dumpster-guide" className="text-gray-500 hover:text-gray-700">Growing residential area</a></li>
                      <li>• <strong><a href="/dumpster-rental" className="text-blue-600 hover:text-blue-800 underline">Kaysville North</a></strong> - <a href="/blog/established-neighborhood-renovation" className="text-gray-500 hover:text-gray-700">Established neighborhoods</a></li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 bg-purple-50 border border-purple-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-900 mb-4">🚚 Dumpster Rental Near Kaysville Attractions</h3>
                <p className="text-gray-700 mb-4">
                  We provide dumpster rental services throughout Kaysville, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.
                </p>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-purple-800 mb-2">Near Kaysville Parks</h4>
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
            Get your Kaysville dumpster rental quote today. Fast delivery, competitive pricing, and professional service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:801-918-6000" 
              className="bg-[#4e37a8] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-700 transition-colors"
            >
              📞 Call Now: (801) 918-6000
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





import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '../components/PageHero';
import QuoteForm from '../components/QuoteForm';

export const metadata: Metadata = {
  title: "Sandy Dumpster Rental - Professional Dumpster Services in Sandy, UT | (801) 918-6000",
  description: "Professional dumpster rental services in Sandy, Utah. Fast delivery, competitive pricing, and reliable waste management solutions. Call (801) 918-6000 for instant quotes.",
  keywords: "Sandy dumpster rental, dumpster rental Sandy UT, Sandy Utah dumpster, roll-off dumpster Sandy, construction dumpster Sandy, waste management Sandy",
  openGraph: {
    title: "Sandy Dumpster Rental - Professional Dumpster Services in Sandy, UT | (801) 918-6000",
    description: "Professional dumpster rental services in Sandy, Utah. Fast delivery, competitive pricing, and reliable waste management solutions.",
    url: 'https://icondumpsters.com/sandy',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sandy Dumpster Rental - Professional Dumpster Services in Sandy, UT',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Sandy Dumpster Rental - Professional Dumpster Services in Sandy, UT | (801) 918-6000",
    description: "Professional dumpster rental services in Sandy, Utah. Fast delivery, competitive pricing, and reliable waste management solutions.",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/sandy',
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
    'geo.placename': 'Sandy, Utah',
    'geo.position': '40.7608;-111.8910',
    'ICBM': '40.7608, -111.8910',
  },
};

export default function SandyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero 
        title="Sandy Dumpster Rental"
        subtitle="Professional dumpster rental services in Sandy, Utah. Fast delivery, competitive pricing, and reliable waste management solutions."
        primaryCtaText="Get Free Quote"
        primaryCtaLink="#quote-form"
        secondaryCtaText="Call (801) 918-6000"
        secondaryCtaLink="tel:801-918-6000"
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2">
            {/* Service Overview */}
            <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Dumpster Rental Services in Sandy</h2>
              <p className="text-lg text-gray-700 mb-6">
                Icon Dumpsters provides reliable dumpster rental services throughout Sandy, Utah. Whether you're tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.
              </p>                
                {/* Hero Image */}
                
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">🏠Residential Projects</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Home renovations and remodeling</li>
                    <li>• Basement cleanouts</li>
                    <li>• Garage organization</li>
                    <li>• Yard waste removal</li>
                    <li>• Estate cleanouts</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">🏠Commercial Projects</h3>
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
                <h3 className="text-xl font-semibold text-blue-900 mb-4">🏠Need a Permit?</h3>
                <p className="text-gray-700 mb-4">
                  Contact Sandy for permit requirements and applications. We can help guide you through the process.
                </p>
                <a 
                  href="tel:801-568-2900" 
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  Sandy: (801-568-2900)
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Complete Sandy Dumpster Rental Guide</h2>
              <p className="text-lg text-gray-700 mb-6">
                Get detailed information about dumpster rental in Sandy, including pricing, regulations, permit requirements, and more.
              </p>                
                {/* Guide Image */}
                                
                {/* Hero Image */}
                <div className="mb-8">
                  </div>
              <Link 
                href="/sandy-dumpster-rental-guide-2025"
                className="inline-block bg-[#4e37a8] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-700 transition-colors"
              >
                📖 Read Complete Guide →
              </Link>              {/* Local Sandy Landmarks & Attractions */}
              <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Sandy Landmarks & Attractions</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Sandy is home to several popular attractions and landmarks. Whether you're working on a project near these areas or just exploring the city, we're here to help with your dumpster rental needs.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">🏠Popular Sandy Attractions</h3>
                    <ul className="space-y-2 text-gray-700">
                        <li>• <strong><a href="https://www.southtownecenter.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">South Towne Center</a></strong> - <a href="https://www.google.com/maps/search/10450 S State St" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">10450 S State St</a></li>
                        <li>• <strong><a href="https://www.sandy.utah.gov/amphitheater" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Sandy Amphitheater</a></strong> - <a href="https://www.google.com/maps/search/1245 E 9400 S" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">1245 E 9400 S</a></li>
                        <li>• <strong><a href="https://slco.org/parks/dimple-dell/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Dimple Dell Regional Park</a></strong> - <a href="https://www.google.com/maps/search/700 E 10600 S" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">700 E 10600 S</a></li>
                        <li>• <strong><a href="https://www.sandy.utah.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Sandy City Hall</a></strong> - <a href="https://www.google.com/maps/search/10000 Centennial Pkwy" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">10000 Centennial Pkwy</a></li>
                        <li>• <strong><a href="https://www.sandy.utah.gov/library" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Sandy Library</a></strong> - <a href="https://www.google.com/maps/search/10100 S Petunia Way" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">10100 S Petunia Way</a></li>
                        <li>• <strong><a href="https://www.google.com/maps/place/Bell+Canyon+Trailhead/@40.6669,-111.8878,15z" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Bell Canyon Trailhead</a></strong> - <a href="https://www.google.com/maps/search/10245 S Wasatch Blvd" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">10245 S Wasatch Blvd</a></li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">🏠Sandy Business Districts</h3>
                    <ul className="space-y-2 text-gray-700">
                        <li>• <strong><a href="/" className="text-blue-600 hover:text-blue-800 underline">Sandy Central</a></strong> - Major retail and dining</li>
                        <li>• <strong><a href="/" className="text-blue-600 hover:text-blue-800 underline">Sandy East</a></strong> - Government and civic center</li>
                        <li>• <strong><a href="/" className="text-blue-600 hover:text-blue-800 underline">Sandy West</a></strong> - <a href="/" className="text-gray-500 hover:text-gray-700">Residential and commercial mix</a></li>
                        <li>• <strong><a href="/" className="text-blue-600 hover:text-blue-800 underline">Sandy South</a></strong> - Industrial and commercial</li>
                        <li>• <strong><a href="/" className="text-blue-600 hover:text-blue-800 underline">Sandy North</a></strong> - Growing residential area</li>
                        <li>• <strong><a href="/" className="text-blue-600 hover:text-blue-800 underline">Downtown Sandy</a></strong> - Established neighborhoods</li>                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 bg-purple-50 border border-purple-200 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-purple-900 mb-4">🚚 Dumpster Rental Near Sandy Attractions</h3>
                  <p className="text-gray-700 mb-4">
                    We provide dumpster rental services throughout Sandy, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <h4 className="font-semibold text-purple-800 mb-2">Near Sandy Parks</h4>
                      <p className="text-gray-600">Perfect for <a href="/park-renovation-projects" className="text-purple-600 hover:text-purple-800 underline">park renovation projects</a> and <a href="/" className="text-purple-600 hover:text-purple-800 underline">community events</a></p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-800 mb-2">Business Districts</h4>
                      <p className="text-gray-600">Convenient for retail and restaurant renovation projects</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-800 mb-2">Residential Areas</h4>
                      <p className="text-gray-600">Ideal for <a href="/home-renovation-dumpster-guide" className="text-purple-600 hover:text-purple-800 underline">home renovations</a> and <a href="/" className="text-purple-600 hover:text-purple-800 underline">residential cleanouts</a></p>
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
            Get your Sandy dumpster rental quote today. Fast delivery, competitive pricing, and professional service.
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






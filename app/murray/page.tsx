import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '../components/PageHero';
import QuoteForm from '../components/QuoteForm';

export const metadata: Metadata = {
  title: "Murray Dumpster Rental - Professional Dumpster Services in Murray, UT | (801) 918-6000",
  description: "Professional dumpster rental services in Murray, Utah. Fast delivery, competitive pricing, and reliable waste management solutions. Call (801) 918-6000 for instant quotes.",
  keywords: "Murray dumpster rental, dumpster rental Murray UT, Murray Utah dumpster, roll-off dumpster Murray, construction dumpster Murray, waste management Murray",
  openGraph: {
    title: "Murray Dumpster Rental - Professional Dumpster Services in Murray, UT | (801) 918-6000",
    description: "Professional dumpster rental services in Murray, Utah. Fast delivery, competitive pricing, and reliable waste management solutions.",
    url: 'https://icondumpsters.com/murray',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Murray Dumpster Rental - Professional Dumpster Services in Murray, UT',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Murray Dumpster Rental - Professional Dumpster Services in Murray, UT | (801) 918-6000",
    description: "Professional dumpster rental services in Murray, Utah. Fast delivery, competitive pricing, and reliable waste management solutions.",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/murray',
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
    'geo.placename': 'Murray, Utah',
    'geo.position': '40.6669;-111.8878',
    'ICBM': '40.6669, -111.8878',
  },
};

export default function MurrayPage() {
  return (
    <>
      {/* LocalBusiness Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Icon Dumpsters",
            "description": "Professional dumpster rental services in Murray, Utah. Fast delivery, competitive pricing, and reliable waste management solutions.",
            "url": "https://icondumpsters.com/murray",
            "telephone": "+1-801-918-6000",
            "email": "icondumpsters@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Murray",
              "addressRegion": "UT",
              "addressCountry": "US",
              "postalCode": "84107"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 40.6669,
              "longitude": -111.8878
            },
            "areaServed": {
              "@type": "City",
              "name": "Murray",
              "addressRegion": "UT",
              "addressCountry": "US"
            },
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": 40.6669,
                "longitude": -111.8878
              },
              "geoRadius": "25000"
            },
            "openingHours": "Mo-Su 06:00-22:00",
            "priceRange": "$$",
            "paymentAccepted": ["Cash", "Credit Card", "Check"],
            "currenciesAccepted": "USD",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Dumpster Rental Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "15-Yard Dumpster Rental",
                    "description": "Perfect for small projects like home cleanouts and minor renovations"
                  },
                  "price": "300",
                  "priceCurrency": "USD"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "20-Yard Dumpster Rental",
                    "description": "Most popular choice for medium-sized projects"
                  },
                  "price": "350",
                  "priceCurrency": "USD"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "30-Yard Dumpster Rental",
                    "description": "For large construction projects and major cleanouts"
                  },
                  "price": "375",
                  "priceCurrency": "USD"
                }
              ]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "127",
              "bestRating": "5",
              "worstRating": "1"
            },
            "review": [
              {
                "@type": "Review",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "author": {
                  "@type": "Person",
                  "name": "Sarah Johnson"
                },
                "reviewBody": "Excellent service in Murray! Fast delivery and competitive pricing. Highly recommend for any construction project."
              }
            ],
            "sameAs": [
              "https://www.facebook.com/p/Icon-Dumpsters-61557014799828/"
            ]
          })
        }}
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#4e37a8] to-purple-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Murray Dumpster Rental
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Professional dumpster rental services in Murray, Utah. Fast delivery, competitive pricing, and reliable waste management solutions.
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Dumpster Rental Services in Murray</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Icon Dumpsters provides reliable dumpster rental services throughout Murray, Utah. Whether you're tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.
                </p>
                
                {/* Hero Image */}
                <div className="mb-8">
                  <img
                    src="/images/IMG_0350.jpg" 
                    alt="Professional dumpster rental services in Murray, Utah - Icon Dumpsters" 
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
                </div>
                
                {/* Local Murray Information */}
                <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-semibold text-blue-900 mb-4">🏠 About Murray, Utah</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-blue-800 mb-2">Murray City Facts</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Population: ~50,000 residents</li>
                        <li>• Founded: 1903</li>
                        <li>• County: Salt Lake County</li>
                        <li>• Elevation: 4,350 feet</li>
                        <li>• Area: 12.4 square miles</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-800 mb-2">Popular Murray Areas</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Murray Central (State Street)</li>
                        <li>• Murray East (I-215 corridor)</li>
                        <li>• Murray West (I-15 area)</li>
                        <li>• Murray North (South Salt Lake border)</li>
                        <li>• Murray South (Midvale border)</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">🏠 Residential Projects</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Home renovations and remodeling</li>
                      <li>• Basement cleanouts</li>
                      <li>• Garage organization</li>
                      <li>• Yard waste removal</li>
                      <li>• Estate cleanouts</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">🏢 Commercial Projects</h3>
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
                  <h3 className="text-xl font-semibold text-blue-900 mb-4">🏠 Need a Permit?</h3>
                  <p className="text-gray-700 mb-4">
                    Contact Murray City for permit requirements and applications. We can help guide you through the process.
                  </p>
                  <a 
                    href="tel:801-264-2600" 
                    className="text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    Murray City: (801) 264-2600
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
                    alt="Available dumpster sizes for Murray dumpster rental - 15, 20, and 30 yard options" 
                    className="w-full h-48 object-cover rounded-lg shadow-md"
                  />
                </div>
                
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Complete Murray Dumpster Rental Guide</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Get detailed information about dumpster rental in Murray, including pricing, regulations, permit requirements, and more.
                </p>
                
                {/* Guide Image */}
                <div className="mb-6">
                  <img
                    src="/images/IMG_0336.jpg" 
                    alt="Complete Murray dumpster rental guide with pricing and regulations" 
                    className="w-full h-48 object-cover rounded-lg shadow-md"
                  />
                </div>
                
                <Link 
                  href="/murray-dumpster-rental-guide-2025"
                  className="inline-block bg-[#4e37a8] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-700 transition-colors"
                >
                  📖 Read Complete Guide →
                </Link>
              </section>

              {/* Local Murray Landmarks & Attractions */}
              <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Murray Landmarks & Attractions</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Murray is home to several popular attractions and landmarks. Whether you're working on a project near these areas or just exploring the city, we're here to help with your dumpster rental needs.
                </p>
                
                {/* Landmarks Image */}
                <div className="mb-6">
                  <img
                    src="/images/dumpster5-500x500-1.jpeg" 
                    alt="Murray landmarks and attractions - dumpster rental services near popular locations" 
                    className="w-full h-48 object-cover rounded-lg shadow-md"
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">🏛️ Popular Murray Attractions</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong><a href="https://www.google.com/maps/place/Murray+Park/@40.6669,-111.8878,15z" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Murray Park</a></strong> - <a href="https://www.google.com/maps/place/500+E+5300+S,+Murray,+UT+84107" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">500 E 5300 S</a></li>
                      <li>• <strong><a href="https://www.murray.utah.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Murray City Hall</a></strong> - <a href="https://www.google.com/maps/place/5025+S+State+St,+Murray,+UT+84107" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">5025 S State St</a></li>
                      <li>• <strong><a href="https://www.murraytheatre.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Murray Theatre</a></strong> - <a href="https://www.google.com/maps/place/4961+S+State+St,+Murray,+UT+84107" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">4961 S State St</a></li>
                      <li>• <strong><a href="https://www.google.com/maps/place/Murray+City+Cemetery/@40.6669,-111.8878,15z" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Murray City Cemetery</a></strong> - <a href="https://www.google.com/maps/place/5490+S+Vine+St,+Murray,+UT+84107" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">5490 S Vine St</a></li>
                      <li>• <strong><a href="https://www.murray.utah.gov/community/library" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Murray City Library</a></strong> - <a href="https://www.google.com/maps/place/166+E+5300+S,+Murray,+UT+84107" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">166 E 5300 S</a></li>
                      <li>• <strong><a href="https://www.google.com/maps/place/Murray+Parkway+Trail/@40.6669,-111.8878,15z" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Murray Parkway Trail</a></strong> - <a href="/blog/outdoor-projects-dumpster-rental" className="text-gray-500 hover:text-gray-700">Along Little Cottonwood Creek</a></li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">🏢 Murray Business Districts</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong><a href="/dumpster-rental" className="text-blue-600 hover:text-blue-800 underline">State Street Corridor</a></strong> - <a href="/blog/retail-renovation-dumpster-guide" className="text-gray-500 hover:text-gray-700">Major retail and dining</a></li>
                      <li>• <strong><a href="/dumpster-rental" className="text-blue-600 hover:text-blue-800 underline">Murray Central</a></strong> - <a href="/blog/government-project-dumpster-rental" className="text-gray-500 hover:text-gray-700">Government and civic center</a></li>
                      <li>• <strong><a href="/dumpster-rental" className="text-blue-600 hover:text-blue-800 underline">Murray East</a></strong> - <a href="/blog/residential-cleanup-guide" className="text-gray-500 hover:text-gray-700">Residential and commercial mix</a></li>
                      <li>• <strong><a href="/dumpster-rental" className="text-blue-600 hover:text-blue-800 underline">Murray West</a></strong> - <a href="/blog/industrial-waste-management" className="text-gray-500 hover:text-gray-700">Industrial and commercial</a></li>
                      <li>• <strong><a href="/dumpster-rental" className="text-blue-600 hover:text-blue-800 underline">Murray South</a></strong> - <a href="/blog/new-construction-dumpster-guide" className="text-gray-500 hover:text-gray-700">Growing residential area</a></li>
                      <li>• <strong><a href="/dumpster-rental" className="text-blue-600 hover:text-blue-800 underline">Murray North</a></strong> - <a href="/blog/established-neighborhood-renovation" className="text-gray-500 hover:text-gray-700">Established neighborhoods</a></li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 bg-purple-50 border border-purple-200 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-purple-900 mb-4">🚚 Dumpster Rental Near Murray Attractions</h3>
                  <p className="text-gray-700 mb-4">
                    We provide dumpster rental services throughout Murray, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <h4 className="font-semibold text-purple-800 mb-2">Near Murray Park</h4>
                      <p className="text-gray-600">Perfect for <a href="/blog/park-renovation-projects" className="text-purple-600 hover:text-purple-800 underline">park renovation projects</a> and <a href="/blog/community-event-cleanup" className="text-purple-600 hover:text-purple-800 underline">community events</a></p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-800 mb-2">State Street Area</h4>
                      <p className="text-gray-600">Convenient for <a href="/blog/retail-renovation-dumpster-guide" className="text-purple-600 hover:text-purple-800 underline">retail and restaurant renovation projects</a></p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-800 mb-2">Residential Areas</h4>
                      <p className="text-gray-600">Ideal for <a href="/blog/home-renovation-dumpster-guide" className="text-purple-600 hover:text-purple-800 underline">home renovations</a> and <a href="/blog/residential-cleanup-guide" className="text-purple-600 hover:text-purple-800 underline">residential cleanouts</a></p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Local Murray FAQ Section */}
              <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Murray Dumpster Rental FAQ</h2>
                
                {/* FAQ Image */}
                <div className="mb-6">
                  <img
                    src="/images/IMG_0350.jpg" 
                    alt="Murray dumpster rental FAQ - common questions and answers" 
                    className="w-full h-48 object-cover rounded-lg shadow-md"
                  />
                </div>
                
                <div className="space-y-6">
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Do I need a permit for dumpster rental in Murray?</h3>
                    <p className="text-gray-700">
                      Permits may be required if you need to place the dumpster on the street. Contact Murray City at (801) 264-2660 for permit requirements. We can help guide you through the process.
                    </p>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">What are the most popular dumpster sizes in Murray?</h3>
                    <p className="text-gray-700">
                      The 20-yard dumpster is our most popular choice in Murray, perfect for home renovations and construction projects. 15-yard dumpsters are great for smaller projects, while 30-yard dumpsters handle large construction and demolition projects.
                    </p>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Do you deliver to Murray Park area?</h3>
                    <p className="text-gray-700">
                      Yes! We deliver throughout Murray, including the Murray Park area (500 E 5300 S). Our same-day delivery service is available for most Murray locations.
                    </p>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">What's the best time to schedule delivery in Murray?</h3>
                    <p className="text-gray-700">
                      We recommend scheduling delivery early in the day for Murray projects. This ensures you have the full day to work with your dumpster and helps avoid any potential delays.
                    </p>
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
              Get your Murray dumpster rental quote today. Fast delivery, competitive pricing, and professional service.
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
    </>
  );
}






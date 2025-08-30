import type { Metadata } from 'next';
import Link from 'next/link';
import QuoteForm from './QuoteForm';

interface CityPageTemplateProps {
  cityName: string;
  citySlug: string;
  state: string;
  phoneNumber: string;
  latitude: string;
  longitude: string;
  landmarks: Array<{
    name: string;
    address: string;
    url?: string;
    description?: string;
  }>;
  businessDistricts: Array<{
    name: string;
    description: string;
    link: string;
  }>;
  permitInfo: {
    cityName: string;
    phoneNumber: string;
    requirements: string;
  };
  contentSections: {
    overview: string;
    residentialServices: string[];
    commercialServices: string[];
    whyChooseUs: string;
    dumpsterSizes: Array<{
      size: string;
      description: string;
      useCases: string[];
    }>;
    localInfo: string;
    serviceAreas: string;
  };
}

export default function CityPageTemplate({
  cityName,
  citySlug,
  state,
  phoneNumber,
  latitude,
  longitude,
  landmarks,
  businessDistricts,
  permitInfo,
  contentSections
}: CityPageTemplateProps) {
  
  // Generate metadata dynamically
  const metadata: Metadata = {
    title: `${cityName} Dumpster Rental - Professional Dumpster Services in ${cityName}, ${state} | (${phoneNumber})`,
    description: `Professional dumpster rental services in ${cityName}, ${state}. Fast delivery, competitive pricing, and reliable waste management solutions. Call ${phoneNumber} for instant quotes.`,
    keywords: `${cityName} dumpster rental, dumpster rental ${cityName} ${state}, ${cityName} ${state} dumpster, roll-off dumpster ${cityName}, construction dumpster ${cityName}, waste management ${cityName}`,
    openGraph: {
      title: `${cityName} Dumpster Rental - Professional Dumpster Services in ${cityName}, ${state} | (${phoneNumber})`,
      description: `Professional dumpster rental services in ${cityName}, ${state}. Fast delivery, competitive pricing, and reliable waste management solutions.`,
      url: `https://icondumpsters.com/${citySlug}`,
      siteName: 'Icon Dumpsters',
      images: [
        {
          url: '/images/og-image.png',
          width: 1200,
          height: 630,
          alt: `${cityName} Dumpster Rental - Professional Dumpster Services in ${cityName}, ${state}`,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${cityName} Dumpster Rental - Professional Dumpster Services in ${cityName}, ${state} | (${phoneNumber})`,
      description: `Professional dumpster rental services in ${cityName}, ${state}. Fast delivery, competitive pricing, and reliable waste management solutions.`,
      images: ['/images/og-image.png'],
    },
    alternates: {
      canonical: `https://icondumpsters.com/${citySlug}`,
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
      'geo.placename': `${cityName}, ${state}`,
      'geo.position': `${latitude};${longitude}`,
      'ICBM': `${latitude}, ${longitude}`,
    },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#4e37a8] to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {cityName} Dumpster Rental
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Professional dumpster rental services in {cityName}, {state}. Fast delivery, competitive pricing, and reliable waste management solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={`tel:${phoneNumber}`}
                className="bg-white text-[#4e37a8] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Call {phoneNumber}
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Dumpster Rental Services in {cityName}</h2>
              <p className="text-lg text-gray-700 mb-6">
                {contentSections.overview}
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">🏠 Residential Projects</h3>
                  <ul className="space-y-2 text-gray-700">
                    {contentSections.residentialServices.map((service, index) => (
                      <li key={index}>• {service}</li>
                    ))}
              </ul>
            </div>
            <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">🏢 Commercial Projects</h3>
                  <ul className="space-y-2 text-gray-700">
                    {contentSections.commercialServices.map((service, index) => (
                      <li key={index}>• {service}</li>
                ))}
              </ul>
            </div>
          </div>

              <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">📞 Need a Permit?</h3>
                <p className="text-gray-700 mb-4">
                  {permitInfo.requirements}
                </p>
                <a 
                  href={`tel:${permitInfo.phoneNumber}`}
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  {permitInfo.cityName}: ({permitInfo.phoneNumber})
                </a>
              </div>
        </section>

            {/* Why Choose Icon Dumpsters */}
            <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Icon Dumpsters in {cityName}?</h2>
              <p className="text-lg text-gray-700 mb-6">
                {contentSections.whyChooseUs}
              </p>
              
          <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-purple-900 mb-4">🚚 Same-Day Delivery</h3>
                  <p className="text-gray-700 mb-4">
                    We offer same-day delivery throughout {cityName} and surrounding areas. Order by 3 PM for next-day delivery, or call us for same-day service when available.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Fast, reliable delivery</li>
                    <li>• Professional drivers</li>
                    <li>• Flexible scheduling</li>
                    <li>• Emergency service available</li>
              </ul>
            </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-900 mb-4">💰 Competitive Pricing</h3>
                  <p className="text-gray-700 mb-4">
                    We provide transparent, competitive pricing with no hidden fees. Our rates are among the best in {cityName} and the surrounding area.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• No hidden fees</li>
                    <li>• Transparent pricing</li>
                    <li>• Competitive rates</li>
                    <li>• Flexible rental periods</li>
              </ul>
            </div>
          </div>
        </section>

            {/* Dumpster Sizes */}
            <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Available Dumpster Sizes</h2>
              <p className="text-lg text-gray-700 mb-6">
                Choose the perfect dumpster size for your project in {cityName}. All rentals include delivery, pickup, and landfill fees. Weight is billed at $55/ton after pickup.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                {contentSections.dumpsterSizes.map((dumpster, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6 text-center">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{dumpster.size} Dumpster</h3>
                    <p className="text-gray-600 mb-4">{dumpster.description}</p>
                <ul className="text-sm text-gray-700 space-y-1">
                      {dumpster.useCases.map((useCase, useIndex) => (
                        <li key={useIndex}>• {useCase}</li>
                      ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

            {/* Local Information */}
            <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{cityName} Local Information</h2>
              <p className="text-lg text-gray-700 mb-6">
                {contentSections.localInfo}
              </p>
              
          <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">🏛️ Popular {cityName} Attractions</h3>
                  <ul className="space-y-2 text-gray-700">
                    {landmarks.map((landmark, index) => (
                      <li key={index}>
                        • <strong>
                          {landmark.url ? (
                            <a href={landmark.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                              {landmark.name}
                            </a>
                          ) : (
                            landmark.name
                          )}
                        </strong> - <a href={`https://www.google.com/maps/search/${encodeURIComponent(landmark.address)}`} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">{landmark.address}</a>
                      </li>
                    ))}
              </ul>
            </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">🏢 {cityName} Business Districts</h3>
                  <ul className="space-y-2 text-gray-700">
                    {businessDistricts.map((district, index) => (
                      <li key={index}>
                        • <strong>
                          <a href={district.link} className="text-blue-600 hover:text-blue-800 underline">
                            {district.name}
                          </a>
                        </strong> - {district.description}
                      </li>
                    ))}
              </ul>
            </div>
          </div>
              
              <div className="mt-6 bg-purple-50 border border-purple-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-900 mb-4">🚚 Dumpster Rental Near {cityName} Attractions</h3>
                <p className="text-gray-700 mb-4">
                  {contentSections.serviceAreas}
                </p>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div>
                    <h4 className="font-semibold text-purple-800 mb-2">Near {cityName} Parks</h4>
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

            {/* Detailed Guide Link */}
            <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Complete {cityName} Dumpster Rental Guide</h2>
              <p className="text-lg text-gray-700 mb-6">
                Get detailed information about dumpster rental in {cityName}, including pricing, regulations, permit requirements, and more.
              </p>
              <Link 
                href={`/${citySlug}-dumpster-rental-guide-2025`}
                className="inline-block bg-[#4e37a8] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-700 transition-colors"
              >
                Read Complete Guide →
              </Link>
            </section>

            {/* Additional Content for SEO */}
            <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Dumpster Rental Process in {cityName}</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our dumpster rental process in {cityName} is simple and straightforward. We make it easy to get the waste management solution you need for your project.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">📋 Step 1: Choose Your Size</h3>
                  <p className="text-gray-700 mb-4">
                    Select the appropriate dumpster size based on your project scope. Our team can help you determine the right size if you're unsure.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 15-yard for small projects</li>
                    <li>• 20-yard for medium projects</li>
                    <li>• 30-yard for large projects</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">📅 Step 2: Schedule Delivery</h3>
                  <p className="text-gray-700 mb-4">
                    Choose your delivery date and time. We offer flexible scheduling to accommodate your project timeline.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Same-day delivery available</li>
                    <li>• Next-day delivery standard</li>
                    <li>• Flexible scheduling</li>
                </ul>
                </div>
              </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">🚚 Step 3: Professional Delivery</h3>
                  <p className="text-gray-700 mb-4">
                    Our experienced drivers will deliver your dumpster to your specified location with care and precision.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Professional drivers</li>
                    <li>• Careful placement</li>
                    <li>• Clear instructions</li>
              </ul>
            </div>
            <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">♻️ Step 4: Pickup & Disposal</h3>
                  <p className="text-gray-700 mb-4">
                    When you're finished, we'll pick up the dumpster and handle all disposal and recycling properly.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Prompt pickup</li>
                    <li>• Proper disposal</li>
                    <li>• Recycling when possible</li>
              </ul>
            </div>
          </div>
        </section>

            {/* FAQ Section */}
            <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions - {cityName} Dumpster Rental</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Do I need a permit for dumpster rental in {cityName}?</h3>
                  <p className="text-gray-700">
                    Permit requirements vary by location in {cityName}. Contact {permitInfo.cityName} at {permitInfo.phoneNumber} to check specific requirements for your address. We can help guide you through the permit process.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">How long can I keep the dumpster?</h3>
                  <p className="text-gray-700">
                    Our standard rental period is 7 days, but we offer flexible terms to accommodate your project timeline. Extended rentals are available for longer projects.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">What can I put in the dumpster?</h3>
                  <p className="text-gray-700">
                    We accept most construction debris, household waste, and yard waste. Prohibited items include hazardous materials, electronics, and certain appliances. Contact us for specific guidelines.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Do you offer same-day delivery in {cityName}?</h3>
                  <p className="text-gray-700">
                    Yes, we offer same-day delivery throughout {cityName} when available. Call us early in the day to check availability and schedule same-day service.
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
            Get your {cityName} dumpster rental quote today. Fast delivery, competitive pricing, and professional service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={`tel:${phoneNumber}`}
              className="bg-[#4e37a8] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-700 transition-colors"
            >
              Call Now: {phoneNumber}
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


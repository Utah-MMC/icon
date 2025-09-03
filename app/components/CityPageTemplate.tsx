import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
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
  
  // Debug logging
  console.log('CityPageTemplate rendering with:', {
    cityName,
    citySlug,
    state,
    phoneNumber,
    landmarks: landmarks?.length,
    businessDistricts: businessDistricts?.length,
    contentSections: Object.keys(contentSections || {})
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#4e37a8] to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {cityName} Dumpster Rental
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Same-day delivery, transparent pricing, and friendly local service.
              </p>
              <p className="text-lg mb-8 text-purple-100">
                15, 20, and 30-yard roll-off dumpsters.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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
            {/* Hero Image - Dumpster in action */}
            <div className="mb-8">
              <Image
                src="/images/dumpsterWithTruck.jpeg"
                alt={`Professional dumpster rental services in ${cityName}, Utah`}
                width={800}
                height={400}
                className="w-full h-auto rounded-lg shadow-lg"
              />
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
                  <div className="mb-4">
                    <Image
                      src="/images/IMG_3190.jpg"
                      alt={`Residential dumpster rental services in ${cityName}, Utah`}
                      width={400}
                      height={250}
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    {contentSections.residentialServices.map((service, index) => (
                      <li key={index}>• {service}</li>
                    ))}
              </ul>
            </div>
            <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">🏢 Commercial Projects</h3>
                  <div className="mb-4">
                    <Image
                      src="/images/commercial.jpg"
                      alt={`Commercial dumpster rental services in ${cityName}, Utah`}
                      width={400}
                      height={250}
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                  </div>
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
              
              {/* Why choose us image */}
              <div className="mb-6">
                <Image
                  src="/images/IMG_0350.jpg"
                  alt={`Professional dumpster rental services in ${cityName}, Utah`}
                  width={800}
                  height={400}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              
              {/* Equipment Showcase */}
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="relative h-32 rounded-lg overflow-hidden">
                  <Image
                    src="/images/dumpster500x500-1.jpeg"
                    alt={`Professional roll-off dumpster in ${cityName}, Utah`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-32 rounded-lg overflow-hidden">
                  <Image
                    src="/images/dumpster500x500-2.jpeg"
                    alt={`High-quality dumpster rental equipment in ${cityName}, Utah`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-32 rounded-lg overflow-hidden">
                  <Image
                    src="/images/dumpsterWithTruck.jpeg"
                    alt={`Dumpster delivery service in ${cityName}, Utah`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
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
              
              {/* Dumpster sizes image */}
              <div className="mb-8">
                <Image
                  src="/images/20-yard-roll-off-dumpster-rental-graphic-labeled.jpg"
                  alt={`Dumpster size comparison for ${cityName} projects`}
                  width={800}
                  height={300}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              
              {/* Additional dumpster visuals */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="/images/dumpster500x500-1.jpeg"
                    alt={`Professional roll-off dumpster rental in ${cityName}, Utah`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="/images/dumpster500x500-2.jpeg"
                    alt={`High-quality dumpster equipment in ${cityName}, Utah`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
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
              
              {/* Local city image */}
              <div className="mb-6">
                <Image
                  src="/images/bigstock-Salt-Lake-City-Utah-USA-down-360462808-1536x1025.webp"
                  alt={`${cityName}, Utah - Local attractions and business districts`}
                  width={800}
                  height={400}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              
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
                    <p className="text-gray-600">Perfect for <a href="/park-renovation-projects" className="text-purple-600 hover:text-purple-800 underline">park renovation projects</a> and <a href="/" className="text-purple-600 hover:text-purple-800 underline">community events</a></p>
            </div>
            <div>
                    <h4 className="font-semibold text-purple-800 mb-2">Business Districts</h4>
                    <p className="text-gray-600">Convenient for retail and restaurant renovation projects</p>
              </div>
              <div>
                    <h4 className="font-semibold text-purple-800 mb-2">Residential Areas</h4>
                    <p className="text-gray-600">Ideal for <a href="/home-renovation-dumpster-guide" className="text-purple-600 hover:text-purple-800 underline">home renovations</a> and residential cleanouts</p>
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
              
              {/* Process illustration */}
              <div className="mb-6">
                <Image
                  src="/images/dumpster500x500-1.jpeg"
                  alt={`Dumpster rental process in ${cityName}, Utah`}
                  width={800}
                  height={400}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              
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


import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import QuoteForm from './QuoteForm';
import BlogSEO from './BlogSEO';

interface EnhancedCityPageTemplateProps {
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
  population?: number;
  area?: string;
  established?: number;
}

export default function EnhancedCityPageTemplate({
  cityName,
  citySlug,
  state,
  phoneNumber,
  latitude,
  longitude,
  landmarks,
  businessDistricts,
  permitInfo,
  contentSections,
  population,
  area,
  established
}: EnhancedCityPageTemplateProps) {
  
  return (
    <>
      <BlogSEO
        title={`${cityName} Dumpster Rental - Professional Services in ${cityName}, UT | Icon Dumpsters`}
        description={`Get reliable dumpster rental in ${cityName}, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.`}
        canonicalUrl={`https://icondumpsters.com/slc-dumpster-rental-${citySlug}-ut`}
        publishedDate={new Date().toISOString()}
        modifiedDate={new Date().toISOString()}
        author="Icon Dumpsters"
        category="Dumpster Rental"
        readTime="8 min read"
        featuredImage="/images/dumpster500x500-1.jpeg"
        keywords={[
          `dumpster rental ${cityName}`,
          `${cityName} dumpster rental`,
          `roll-off dumpster ${cityName}`,
          `construction dumpster ${cityName}`,
          `dumpster rental near me ${cityName}`,
          `${cityName} waste management`,
          `dumpster delivery ${cityName}`,
          `${cityName} dumpster services`,
          `Salt Lake County dumpster rental`,
          `Utah dumpster rental ${cityName}`,
          `construction waste disposal ${cityName}`,
          `home renovation dumpster ${cityName}`,
          `commercial dumpster rental ${cityName}`,
          `demolition dumpster ${cityName}`,
          `concrete disposal ${cityName}`
        ]}
        articleBody={`Comprehensive guide to dumpster rental services in ${cityName}, Utah. Professional waste management solutions for residential and commercial projects.`}
      />
      
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
              {/* City Overview */}
              <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">About {cityName} Dumpster Rental Services</h2>
                <p className="text-lg text-gray-700 mb-6">
                  {contentSections.overview}
                </p>
                
                {/* City Statistics */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {population && (
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">{population.toLocaleString()}</div>
                      <div className="text-sm text-gray-600">Population</div>
                    </div>
                  )}
                  {area && (
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">{area}</div>
                      <div className="text-sm text-gray-600">City Area</div>
                    </div>
                  )}
                  {established && (
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">{established}</div>
                      <div className="text-sm text-gray-600">Established</div>
                    </div>
                  )}
                </div>
                
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Available Dumpster Sizes in {cityName}</h2>
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
                      <p className="text-gray-600">Perfect for <Link href="/park-renovation-projects" className="text-purple-600 hover:text-purple-800 underline">park renovation projects</Link> and <Link href="/" className="text-purple-600 hover:text-purple-800 underline">community events</Link></p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-800 mb-2">Business Districts</h4>
                      <p className="text-gray-600">Convenient for retail and restaurant renovation projects</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-800 mb-2">Residential Areas</h4>
                      <p className="text-gray-600">Ideal for <Link href="/home-renovation-dumpster-guide" className="text-purple-600 hover:text-purple-800 underline">home renovations</Link> and residential cleanouts</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Related Services */}
              <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Related Dumpster Rental Services</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Explore our comprehensive range of waste management services available throughout {cityName} and Salt Lake County.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">🏗️ Construction Projects</h3>
                    <p className="text-gray-700 mb-4">
                      Professional dumpster rental for construction sites, demolition projects, and building renovations in {cityName}.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1 mb-4">
                      <li>• <Link href="/construction-dumpster-rental-guide-2025" className="text-blue-600 hover:text-blue-800 underline">Construction dumpster rental guide</Link></li>
                      <li>• <Link href="/demolition-dumpster-calculator" className="text-blue-600 hover:text-blue-800 underline">Demolition waste calculator</Link></li>
                      <li>• <Link href="/construction-waste-management-guide" className="text-blue-600 hover:text-blue-800 underline">Waste management strategies</Link></li>
                    </ul>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">🏠 Home Renovations</h3>
                    <p className="text-gray-700 mb-4">
                      Reliable dumpster rental for home improvement projects, kitchen remodels, and residential cleanouts in {cityName}.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1 mb-4">
                      <li>• <Link href="/home-renovation-waste-disposal-complete-guide" className="text-blue-600 hover:text-blue-800 underline">Home renovation guide</Link></li>
                      <li>• <Link href="/estimate-right-dumpster-size-home-cleanout" className="text-blue-600 hover:text-blue-800 underline">Dumpster size estimator</Link></li>
                      <li>• <Link href="/rolloff-dumpster-guide-2025" className="text-blue-600 hover:text-blue-800 underline">Complete dumpster guide</Link></li>
                    </ul>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">🏢 Commercial Services</h3>
                    <p className="text-gray-700 mb-4">
                      Business-focused dumpster rental solutions for offices, retail spaces, and commercial properties in {cityName}.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1 mb-4">
                      <li>• <Link href="/commercial-dumpster-rental-business-solutions-2025" className="text-blue-600 hover:text-blue-800 underline">Commercial solutions</Link></li>
                      <li>• <Link href="/dumpster-calculator" className="text-blue-600 hover:text-blue-800 underline">Dumpster calculator</Link></li>
                      <li>• <Link href="/dumpster-volume-calculator" className="text-blue-600 hover:text-blue-800 underline">Volume calculator</Link></li>
                    </ul>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">🧮 Calculators & Tools</h3>
                    <p className="text-gray-700 mb-4">
                      Use our specialized calculators to determine the right dumpster size and estimate costs for your {cityName} project.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1 mb-4">
                      <li>• <Link href="/dumpster-calculator-for-concrete" className="text-blue-600 hover:text-blue-800 underline">Concrete disposal calculator</Link></li>
                      <li>• <Link href="/roofing-dumpster-calculator" className="text-blue-600 hover:text-blue-800 underline">Roofing waste calculator</Link></li>
                      <li>• <Link href="/concrete-debris-calculator" className="text-blue-600 hover:text-blue-800 underline">Concrete debris calculator</Link></li>
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
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">What are the weight limits for dumpsters in {cityName}?</h3>
                    <p className="text-gray-700">
                      Weight limits vary by dumpster size: 15-yard dumpsters typically have a 2-3 ton limit, 20-yard dumpsters have a 3-4 ton limit, and 30-yard dumpsters have a 4-6 ton limit. Weight is billed at $55/ton after pickup.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">How do I choose the right dumpster size for my {cityName} project?</h3>
                    <p className="text-gray-700">
                      Use our <Link href="/dumpster-calculator" className="text-blue-600 hover:text-blue-800 underline">dumpster calculator</Link> or <Link href="/estimate-right-dumpster-size-home-cleanout" className="text-blue-600 hover:text-blue-800 underline">size estimator</Link> to determine the right size. Our team can also help you choose based on your project details.
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
    </>
  );
}

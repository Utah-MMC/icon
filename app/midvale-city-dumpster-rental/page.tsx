import type { Metadata } from 'next';
import PageHero from '../components/PageHero';
import PageTemplate from '../components/PageTemplate';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Midvale City Dumpster Rental - Professional Services in Midvale, UT | Icon Dumpsters",
  description: "Professional dumpster rental services in Midvale City, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: [
    "midvale city dumpster rental",
    "dumpster rental midvale city",
    "midvale utah dumpster rental",
    "dumpster rental midvale ut",
    "roll-off dumpster midvale",
    "construction dumpster midvale"
  ],
  openGraph: {
    title: "Midvale City Dumpster Rental - Professional Services in Midvale, UT | Icon Dumpsters",
    description: "Professional dumpster rental services in Midvale City, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    url: 'https://icondumpsters.com/midvale-city-dumpster-rental',
    images: [
      {
        url: '/images/dumpster500x500-1.jpeg',
        width: 1200,
        height: 630,
        alt: 'Midvale City Dumpster Rental - Icon Dumpsters',
      },
    ],
  },
  alternates: {
    canonical: '/midvale-city-dumpster-rental',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function MidvaleCityDumpsterRental() {
  return (
    <PageTemplate>
      <PageHero
        title="Midvale City Dumpster Rental - Professional Services in Midvale, UT"
        subtitle="Professional dumpster rental services in Midvale City, Utah. Same-day delivery, competitive pricing, and excellent customer service for all your waste management needs."
        primaryCtaText="Get Midvale Quote"
        primaryCtaLink="/#quote-form"
        secondaryCtaText="Call (801) 918-6000"
        secondaryCtaLink="tel:(801) 918-6000"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Local Services Section */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Dumpster Rental Services in Midvale City, Utah</h2>
          <p className="text-lg text-gray-700 mb-8">
            Looking for reliable dumpster rental services in Midvale City? Icon Dumpsters provides professional waste management solutions for residents and businesses throughout Midvale, Utah. We offer same-day delivery, competitive pricing, and excellent customer service.
          </p>
          
          <div className="bg-purple-50 border-l-4 border-purple-400 p-6 mb-8">
            <h3 className="text-xl font-semibold text-purple-900 mb-3">🏙️ Midvale City's Trusted Dumpster Rental Partner</h3>
            <p className="text-gray-700">
              As Midvale City's premier dumpster rental service, Icon Dumpsters understands the unique needs of our local community. From residential renovations in Midvale Heights to commercial projects in Bingham Junction, we provide reliable, affordable waste management solutions tailored to Midvale's diverse neighborhoods and business districts. Our local expertise ensures smooth delivery, proper placement, and compliance with all Midvale City regulations.
            </p>
          </div>
          
          {/* Hero Image */}
          <div className="mb-8">
            <img 
              src="/images/bigstock-Salt-Lake-City-Utah-USA-down-360462808-1536x1025.webp" 
              alt="Professional dumpster rental services in Midvale City, Utah" 
              className="w-full h-64 sm:h-80 object-cover rounded-lg shadow-lg"
            />
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="border border-gray-200 rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">15 Yard Dumpster</h3>
              <div className="text-3xl font-bold text-[#4e37a8] mb-2">Starting at $299</div>
              <p className="text-gray-600 mb-4">Perfect for Midvale home projects</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Kitchen renovations</li>
                <li>• Bathroom remodels</li>
                <li>• Garage cleanouts</li>
                <li>• Small construction</li>
                <li>• 7-day rental included</li>
              </ul>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6 text-center bg-purple-50">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">20 Yard Dumpster</h3>
              <div className="text-3xl font-bold text-[#4e37a8] mb-2">Starting at $349</div>
              <p className="text-gray-600 mb-4">Most popular in Midvale</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Whole house cleanouts</li>
                <li>• Roofing projects</li>
                <li>• Deck demolition</li>
                <li>• Medium construction</li>
                <li>• 7-day rental included</li>
              </ul>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">30 Yard Dumpster</h3>
              <div className="text-3xl font-bold text-[#4e37a8] mb-2">Starting at $399</div>
              <p className="text-gray-600 mb-4">For large Midvale projects</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Major renovations</li>
                <li>• Commercial projects</li>
                <li>• Large construction</li>
                <li>• Estate cleanouts</li>
                <li>• 7-day rental included</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">🏙️ Why Choose Icon Dumpsters for Midvale City Dumpster Rental?</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-blue-800 mb-2">Local Expertise</h4>
                <p className="text-gray-700 text-sm">We know Midvale City and understand local permit requirements and regulations.</p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-800 mb-2">Fast Delivery</h4>
                <p className="text-gray-700 text-sm">Same-day delivery available throughout Midvale City when you need it most.</p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-800 mb-2">Competitive Pricing</h4>
                <p className="text-gray-700 text-sm">Transparent pricing with no hidden fees. Best rates in Midvale City.</p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-800 mb-2">Reliable Service</h4>
                <p className="text-gray-700 text-sm">Professional drivers and equipment. We're here when you need us.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Midvale City Image */}
        <section className="mb-12">
          <img 
            src="/images/dumpster500x200-2.webp" 
            alt="Midvale City, Utah - local dumpster rental service area" 
            className="w-full h-64 sm:h-80 object-cover rounded-xl shadow-lg"
          />
        </section>

        {/* Local Information Section */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Midvale City Local Information</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">About Midvale City</h3>
              <p className="text-gray-700 mb-4">
                Midvale City is a vibrant community in Salt Lake County, Utah, known for its family-friendly neighborhoods and growing business district. Located between Salt Lake City and Sandy, Midvale offers easy access to major highways and transportation routes.
              </p>
              <p className="text-gray-700 mb-4">
                With a population of over 36,000 residents, Midvale City is home to many residential and commercial projects that require professional waste management services. Our dumpster rental services are designed to meet the needs of Midvale's diverse community.
              </p>
              
              <h4 className="font-semibold text-gray-900 mb-2">Popular Midvale Areas We Serve:</h4>
              <ul className="text-gray-700 space-y-1">
                <li>• Historic Midvale District</li>
                <li>• Midvale Heights</li>
                <li>• Union Park</li>
                <li>• Midvale Meadows</li>
                <li>• Midvale Commons</li>
                <li>• Bingham Junction</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Midvale City Dumpster Rental Permits</h3>
              <p className="text-gray-700 mb-4">
                Midvale City may require permits for dumpster placement on public property or in certain areas. Here's what you need to know:
              </p>
              
              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-yellow-800 mb-2">Permit Requirements</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Permits required for street placement</li>
                  <li>• Driveway placement usually doesn't require permits</li>
                  <li>• Commercial properties may have different requirements</li>
                  <li>• Contact Midvale City for specific requirements</li>
                </ul>
              </div>
              
              <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">How We Help</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• We can help guide you through permit requirements</li>
                  <li>• We work with Midvale City on permit applications</li>
                  <li>• We ensure proper placement to avoid violations</li>
                  <li>• We handle all permit-related paperwork</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Service Area Image */}
        <section className="mb-12">
          <img 
            src="/images/dumpsterSmallBanner3.webp" 
            alt="Midvale City dumpster rental service areas - professional waste management" 
            className="w-full h-64 sm:h-80 object-cover rounded-xl shadow-lg"
          />
        </section>

        {/* Service Areas Section */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Midvale City Service Areas</h2>
          <p className="text-lg text-gray-700 mb-8">
            We provide comprehensive dumpster rental services throughout Midvale City and surrounding areas. Our service area includes all neighborhoods and business districts in Midvale.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Residential Areas</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Midvale Heights</li>
                <li>• Union Park</li>
                <li>• Midvale Meadows</li>
                <li>• Historic Midvale</li>
                <li>• Midvale Commons</li>
                <li>• Bingham Junction</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Business Districts</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Midvale Main Street</li>
                <li>• Fort Union Boulevard</li>
                <li>• State Street Corridor</li>
                <li>• 7200 South Business District</li>
                <li>• Bingham Junction</li>
                <li>• Midvale Commons</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Nearby Areas</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Sandy (North)</li>
                <li>• Murray (South)</li>
                <li>• West Jordan (West)</li>
                <li>• Cottonwood Heights (East)</li>
                <li>• Taylorsville (Northwest)</li>
                <li>• South Jordan (Southwest)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Final Midvale Image */}
        <section className="mb-12">
          <img 
            src="/images/dumpsterSmallBanner4.webp" 
            alt="Midvale City dumpster rental - professional local service" 
            className="w-full h-64 sm:h-80 object-cover rounded-xl shadow-lg"
          />
        </section>

        {/* Midvale City Project Types */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Popular Dumpster Rental Projects in Midvale City</h2>
          <p className="text-lg text-gray-700 mb-8">
            Midvale City's diverse community and growing business district create unique opportunities for various types of projects. Understanding the most common dumpster rental needs in Midvale helps you choose the right service for your specific project requirements.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Residential Projects in Midvale</h3>
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Home Renovations</h4>
                  <p className="text-sm text-gray-600 mb-2">Kitchen and bathroom remodels, basement finishing, room additions</p>
                  <p className="text-xs text-gray-500">Recommended: 15-20 yard dumpster</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Estate Cleanouts</h4>
                  <p className="text-sm text-gray-600 mb-2">Moving, downsizing, or clearing inherited properties</p>
                  <p className="text-xs text-gray-500">Recommended: 20-30 yard dumpster</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Landscaping Projects</h4>
                  <p className="text-sm text-gray-600 mb-2">Yard cleanups, tree removal, hardscaping installations</p>
                  <p className="text-xs text-gray-500">Recommended: 15-20 yard dumpster</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Garage Organization</h4>
                  <p className="text-sm text-gray-600 mb-2">Clearing out old items, making space for storage</p>
                  <p className="text-xs text-gray-500">Recommended: 15 yard dumpster</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Commercial Projects in Midvale</h3>
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Office Renovations</h4>
                  <p className="text-sm text-gray-600 mb-2">Business space updates, tenant improvements, expansions</p>
                  <p className="text-xs text-gray-500">Recommended: 20-30 yard dumpster</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Retail Construction</h4>
                  <p className="text-sm text-gray-600 mb-2">New store builds, shopping center developments</p>
                  <p className="text-xs text-gray-500">Recommended: 30 yard dumpster</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Restaurant Projects</h4>
                  <p className="text-sm text-gray-600 mb-2">Kitchen renovations, dining area updates, equipment changes</p>
                  <p className="text-xs text-gray-500">Recommended: 20 yard dumpster</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Warehouse Operations</h4>
                  <p className="text-sm text-gray-600 mb-2">Inventory management, facility maintenance, equipment disposal</p>
                  <p className="text-xs text-gray-500">Recommended: 30 yard dumpster</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">🎯 Choosing the Right Dumpster for Your Midvale Project</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-blue-800 mb-2">Project Size Assessment</h4>
                <p className="text-gray-700 text-sm">Consider the scope of your project, amount of debris, and timeline to select the most cost-effective dumpster size.</p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-800 mb-2">Location Considerations</h4>
                <p className="text-gray-700 text-sm">Factor in Midvale's neighborhood characteristics, access requirements, and permit needs for optimal placement.</p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-800 mb-2">Timeline Planning</h4>
                <p className="text-gray-700 text-sm">Plan your project timeline to maximize the included rental period and avoid additional fees.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions - Midvale City Dumpster Rental</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Do I need a permit for dumpster rental in Midvale City?</h3>
              <p className="text-gray-700">
                Permits are typically required for street placement in Midvale City. If you're placing the dumpster on your driveway or private property, permits are usually not required. We can help you determine if you need a permit and assist with the application process.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How quickly can you deliver a dumpster to Midvale City?</h3>
              <p className="text-gray-700">
                We offer same-day delivery in Midvale City when available. For next-day delivery, we typically deliver within 24 hours of your order. Call us early in the day to check same-day availability.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What dumpster size is best for Midvale City projects?</h3>
              <p className="text-gray-700">
                The best size depends on your project. For most Midvale City home renovations, a 20-yard dumpster is the most popular choice. For smaller projects like bathroom remodels, a 15-yard dumpster works well. For large construction projects, consider a 30-yard dumpster.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Do you serve all areas of Midvale City?</h3>
              <p className="text-gray-700">
                Yes, we provide dumpster rental services throughout all areas of Midvale City, including residential neighborhoods, business districts, and commercial areas. We also serve surrounding communities like Sandy, Murray, and West Jordan.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-[#4e37a8] to-purple-700 text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Get Your Midvale City Dumpster Rental Quote Today</h2>
          <p className="text-xl mb-8">Professional dumpster rental services in Midvale City. Fast delivery, competitive pricing, and excellent customer service.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/#quote-form"
              className="bg-white text-[#4e37a8] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Get Midvale Quote
            </Link>
            <Link 
              href="tel:(801) 918-6000"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#4e37a8] transition-colors"
            >
              Call (801) 918-6000
            </Link>
          </div>
        </section>
      </div>
    </PageTemplate>
  );
}

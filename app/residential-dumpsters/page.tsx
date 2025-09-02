import { Metadata } from 'next';
import ArticleSchema from '../components/ArticleSchema';

export const metadata: Metadata = {
  title: 'Residential Dumpster Rental | Home Projects & Cleanups | Icon Dumpsters',
  description: 'Professional residential dumpster rental services for home projects, cleanouts, and renovations. Same-day delivery, competitive pricing, and reliable waste disposal. Call (801) 918-6000!',
  keywords: 'residential dumpster rental, home dumpster rental, residential waste disposal, home renovation dumpster, residential cleanup dumpster',
  openGraph: {
    title: 'Residential Dumpster Rental | Home Projects & Cleanouts',
    description: 'Professional residential dumpster rental services for home projects, cleanouts, and renovations. Same-day delivery and competitive pricing.',
    type: 'website',
    url: 'https://www.icondumpsters.com/residential-dumpsters',
  },
};

export default function ResidentialDumpstersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ArticleSchema
        title="Residential Dumpster Rental: Complete Home Waste Management Solutions"
        description="Professional residential dumpster rental services for home projects, cleanouts, and renovations. Learn about our comprehensive waste management solutions for homeowners."
        publishedDate="2025-01-15T08:00:00.000Z"
        modifiedDate="2025-01-15T08:00:00.000Z"
        author="Icon Dumpsters Team"
        imageUrl="/images/dumpster500x200-1.jpeg"
        articleUrl="/residential-dumpsters"
        category="DUMPSTER RENTAL"
        readTime="10 min read"
      />
      
      <article className="max-w-4xl mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Residential Dumpster Rental: Complete Home Waste Management Solutions
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            Professional residential dumpster rental services for home projects, cleanouts, and renovations. Get same-day delivery, competitive pricing, and reliable waste disposal solutions.
          </p>
          <div className="flex items-center text-sm text-gray-500">
            <span>Published: January 15, 2025</span>
            <span className="mx-2">•</span>
            <span>Updated: January 15, 2025</span>
          </div>
        </header>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Table of Contents</h2>
          <ul className="space-y-2 text-blue-600">
            <li><a href="#residential-services" className="hover:underline">Residential Services</a></li>
            <li><a href="#dumpster-sizes" className="hover:underline">Dumpster Sizes Available</a></li>
            <li><a href="#project-types" className="hover:underline">Home Project Types</a></li>
            <li><a href="#pricing-guide" className="hover:underline">Pricing Guide</a></li>
            <li><a href="#delivery-scheduling" className="hover:underline">Delivery & Scheduling</a></li>
            <li><a href="#waste-management" className="hover:underline">Waste Management</a></li>
            <li><a href="#homeowner-tips" className="hover:underline">Homeowner Tips</a></li>
            <li><a href="#faq" className="hover:underline">Frequently Asked Questions</a></li>
          </ul>
        </div>

        <section id="residential-services" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Residential Services</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Home Renovations</h3>
              <p className="text-gray-600">Kitchen and bathroom remodels, basement finishing, and home additions require efficient waste management for construction debris.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Home Cleanouts</h3>
              <p className="text-gray-600">Garage cleanouts, basement organization, estate sales, and residential property maintenance generate significant waste.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Landscaping Projects</h3>
              <p className="text-gray-600">Yard cleanups, tree removal, outdoor living space construction, and landscaping projects need proper waste disposal.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Seasonal Cleanups</h3>
              <p className="text-gray-600">Spring cleaning, fall yard maintenance, and seasonal home organization projects require convenient waste solutions.</p>
            </div>
          </div>
        </section>

        <section id="dumpster-sizes" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Dumpster Sizes Available</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">10 Yard</h3>
              <p className="text-gray-600 mb-4">Perfect for small home projects</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Kitchen remodel</li>
                <li>• Garage cleanup</li>
                <li>• Small deck removal</li>
                <li>• Bathroom renovation</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">15 Yard</h3>
              <p className="text-gray-600 mb-4">Ideal for medium home projects</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Basement finishing</li>
                <li>• Roof replacement</li>
                <li>• Large garage cleanup</li>
                <li>• Home addition</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">20 Yard</h3>
              <p className="text-gray-600 mb-4">Great for large home projects</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Full home remodel</li>
                <li>• Large deck removal</li>
                <li>• Major landscaping</li>
                <li>• Estate cleanout</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">30 Yard</h3>
              <p className="text-gray-600 mb-4">Maximum capacity for big projects</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Complete home renovation</li>
                <li>• Large estate sale</li>
                <li>• Major property cleanup</li>
                <li>• Multi-room projects</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="project-types" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Home Project Types</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Interior Projects</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Kitchen and bathroom remodels</li>
                <li>• Basement finishing and remodeling</li>
                <li>• Room additions and expansions</li>
                <li>• Interior painting and flooring</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Exterior Projects</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Deck and patio construction</li>
                <li>• Roof replacement and repair</li>
                <li>• Siding and window installation</li>
                <li>• Exterior painting and maintenance</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Landscaping & Yard Work</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Tree removal and trimming</li>
                <li>• Yard cleanup and organization</li>
                <li>• Garden and landscape design</li>
                <li>• Outdoor living space construction</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Organization & Cleanup</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Garage and basement organization</li>
                <li>• Estate sales and cleanouts</li>
                <li>• Spring and fall cleaning</li>
                <li>• Moving preparation and cleanup</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="pricing-guide" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Pricing Guide</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-600 mb-4">
              Our residential dumpster rental pricing is transparent and homeowner-friendly. Contact us for exact pricing based on your specific project needs.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Standard Rental Period</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• 7-14 days included</li>
                  <li>• Extended rentals available</li>
                  <li>• No hidden fees</li>
                  <li>• Homeowner discounts</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Included Services</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Delivery and pickup</li>
                  <li>• Disposal fees</li>
                  <li>• Weight allowance</li>
                  <li>• Customer support</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="delivery-scheduling" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Delivery & Scheduling</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Flexible Scheduling</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Same-day delivery available</li>
                <li>• Weekend and holiday service</li>
                <li>• Project timeline coordination</li>
                <li>• Emergency delivery options</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Placement Options</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Driveway placement</li>
                <li>• Yard placement</li>
                <li>• Street placement (with permit)</li>
                <li>• Alley access options</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="waste-management" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Waste Management</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Accepted Materials</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Construction debris</li>
                  <li>• Household items and furniture</li>
                  <li>• Yard waste and landscaping debris</li>
                  <li>• Appliances (non-refrigerated)</li>
                  <li>• General household trash</li>
                  <li>• Renovation materials</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Prohibited Items</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Hazardous materials</li>
                  <li>• Chemicals and solvents</li>
                  <li>• Refrigerators and freezers</li>
                  <li>• Medical waste</li>
                  <li>• Electronics and batteries</li>
                  <li>• Tires and automotive parts</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="homeowner-tips" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Homeowner Tips</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Planning Your Project</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Estimate waste volume accurately</li>
                <li>• Plan for weather considerations</li>
                <li>• Coordinate with contractors</li>
                <li>• Check HOA restrictions</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Loading Best Practices</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Distribute weight evenly</li>
                <li>• Break down large items</li>
                <li>• Don't exceed weight limits</li>
                <li>• Keep items below rim</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="faq" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How quickly can you deliver to my home?</h3>
              <p className="text-gray-600">We offer same-day delivery for most residential areas. Contact us to confirm availability for your specific location and project timeline.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What size dumpster do I need for my home project?</h3>
              <p className="text-gray-600">Our team can help you determine the right size based on your project scope. We offer free consultations and estimates for homeowners.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Do I need a permit for the dumpster?</h3>
              <p className="text-gray-600">Permits are typically not required for driveway or yard placement. Street placement may require a city permit, which we can help you with.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What types of waste can I put in the dumpster?</h3>
              <p className="text-gray-600">We accept most construction debris, household items, and yard waste. Contact us for a complete list of acceptable and prohibited materials.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Can you work around my schedule?</h3>
              <p className="text-gray-600">Yes, we offer flexible scheduling to accommodate your project timeline. We can coordinate delivery and pickup around your schedule.</p>
            </div>
          </div>
        </section>

        <div className="bg-blue-50 rounded-lg p-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready for Your Home Project?</h2>
          <p className="text-gray-600 mb-6">
            Get your free quote for residential dumpster rental today. Our team is ready to help you with your home project's waste management needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/free-quote"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Free Quote
            </a>
            <a
              href="tel:801-918-6000"
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              Call (801) 918-6000
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}

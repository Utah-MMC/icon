import { Metadata } from 'next';
import ArticleSchema from '../components/ArticleSchema';

export const metadata: Metadata = {
  title: 'Dumpster Rental Springville | Fast Delivery & Affordable Rates',
  description: 'Get reliable dumpster rental in Springville, UT. Same-day delivery, competitive pricing, and professional service. 10-40 yard dumpsters available. Call (801) 555-0123 for instant quote!',
  keywords: 'dumpster rental springville, springville dumpster rental, roll-off dumpster springville, construction dumpster springville, waste disposal springville',
  openGraph: {
    title: 'Dumpster Rental Springville | Fast Delivery & Affordable Rates',
    description: 'Professional dumpster rental services in Springville, UT. Same-day delivery, competitive pricing, and reliable waste disposal solutions.',
    type: 'website',
    url: 'https://icondumpsters.com/springville',
  },
};

export default function SpringvilleDumpsterRental() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ArticleSchema
        title="Dumpster Rental Springville: Professional Waste Disposal Services"
        description="Professional dumpster rental services in Springville, UT. Get same-day delivery, competitive pricing, and reliable waste disposal solutions."
        publishedDate="2025-01-15T08:00:00.000Z"
        modifiedDate="2025-01-15T08:00:00.000Z"
        author="Springville Dumpster Rental Team"
        imageUrl="/images/dumpster500x200-1.jpeg"
        articleUrl="/springville"
        category="DUMPSTER RENTAL"
        readTime="8 min read"
      />
      
      <article className="max-w-4xl mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Dumpster Rental Springville
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            Professional dumpster rental services in Springville, Utah. Get same-day delivery, competitive pricing, and reliable waste disposal solutions for your next project.
          </p>
          <div className="flex items-center text-sm text-gray-500">
            <span>Service Area: Springville, UT</span>
            <span className="mx-2">•</span>
            <span>Same-Day Delivery Available</span>
          </div>
        </header>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Quick Service Overview</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Dumpster Sizes</h3>
              <p className="text-gray-600">10, 15, 20, 30, 40 Yard</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Delivery</h3>
              <p className="text-gray-600">Same-Day Available</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Service Area</h3>
              <p className="text-gray-600">Springville & Surrounding Areas</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Contact</h3>
              <p className="text-gray-600">(801) 555-0123</p>
            </div>
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Springville Dumpster Rental?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Local Expertise</h3>
              <p className="text-gray-600">We know Springville and understand local regulations, permit requirements, and best practices for waste disposal in the area.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fast Service</h3>
              <p className="text-gray-600">Same-day delivery available for urgent projects. We work around your schedule to ensure minimal disruption.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Competitive Pricing</h3>
              <p className="text-gray-600">Transparent pricing with no hidden fees. Get the best value for your money with our affordable rates.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Professional Equipment</h3>
              <p className="text-gray-600">Well-maintained dumpsters in various sizes to handle any project, from small cleanups to major construction.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Popular Projects in Springville</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Home Renovations</h3>
              <p className="text-gray-600">Kitchen and bathroom remodels, basement finishing, and home improvements.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Construction Projects</h3>
              <p className="text-gray-600">New builds, additions, and commercial construction projects.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Property Cleanup</h3>
              <p className="text-gray-600">Yard waste, debris removal, and property maintenance.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Get Started Today</h2>
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Rent a Dumpster?</h3>
            <p className="text-lg mb-6">Get instant pricing and same-day delivery for your Springville project.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/free-quote" className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Free Quote
              </a>
              <a href="tel:8015550123" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                Call Now: (801) 555-0123
              </a>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Learn More</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-600 mb-4">
              For detailed information about dumpster sizes, pricing, permits, and best practices in Springville, 
              check out our comprehensive guide:
            </p>
            <a 
              href="/springville-dumpster-rental-guide-2025" 
              className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              📖 Read Complete Guide →
            </a>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Service Areas Near Springville</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Utah County</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Provo</li>
                <li>• Orem</li>
                <li>• Spanish Fork</li>
                <li>• Mapleton</li>
                <li>• Payson</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Surrounding Cities</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Salem</li>
                <li>• Woodland Hills</li>
                <li>• Elk Ridge</li>
                <li>• Benjamin</li>
                <li>• Lake Shore</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Get in Touch</h3>
                <p className="text-gray-600 mb-2">📞 Phone: (801) 555-0123</p>
                <p className="text-gray-600 mb-2">📧 Email: info@icondumpsters.com</p>
                <p className="text-gray-600 mb-2">🕒 Hours: Mon-Sat 7AM-7PM</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Service Area</h3>
                <p className="text-gray-600 mb-2">📍 Springville, UT</p>
                <p className="text-gray-600 mb-2">🚚 Same-day delivery available</p>
                <p className="text-gray-600 mb-2">⚡ Emergency service available</p>
              </div>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}

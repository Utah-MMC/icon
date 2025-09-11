import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Rose Park Dumpster Rental Guide 2025 | Complete Guide | Icon Dumpsters',
  description: 'Complete guide to dumpster rental in Rose Park, Salt Lake City. Learn about permits, pricing, sizes, and local regulations for 2025.',
  keywords: 'Rose Park dumpster rental, Salt Lake City permits, dumpster rental Rose Park, construction waste Rose Park',
};

export default function RoseParkDumpsterRentalGuide2025() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#4e37a8] to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Complete Rose Park Dumpster Rental Guide 2025
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Everything you need to know about dumpster rental in Rose Park, Salt Lake City
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:801-555-0123"
                className="bg-white text-[#4e37a8] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Call 801-555-0123
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
            {/* Overview */}
            <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Dumpster Rental in Rose Park, Salt Lake City</h2>
              <p className="text-lg text-gray-700 mb-6">
                Rose Park is a vibrant neighborhood in Salt Lake City with a mix of historic homes and new development. 
                Whether you're renovating a historic home, managing a construction project, or cleaning out a property, 
                you'll need reliable dumpster rental services.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Icon Dumpsters provides same-day delivery throughout Rose Park and surrounding Salt Lake City areas. 
                Our transparent pricing and professional service make us the top choice for waste management in Rose Park.
              </p>
            </section>

            {/* Permit Information */}
            <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Rose Park Dumpster Permit Requirements</h2>
              <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">📞 Need a Permit?</h3>
                <p className="text-gray-700 mb-4">
                  Dumpster permits are required in Salt Lake City for dumpsters placed on public property or right-of-way. 
                  Contact the Salt Lake City Building Services Division for specific requirements.
                </p>
                <a 
                  href="tel:801-535-6000"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  Salt Lake City Building Services: (801) 535-6000
                </a>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Permit Process</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>Contact the Salt Lake City Building Services Division</li>
                <li>Provide project details and dumpster placement location</li>
                <li>Pay permit fee (typically $25-50)</li>
                <li>Receive permit before dumpster delivery</li>
                <li>Display permit on or near the dumpster</li>
              </ol>
            </section>

            {/* Dumpster Sizes */}
            <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Available Dumpster Sizes in Rose Park</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="border border-gray-200 rounded-lg p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">15-Yard Dumpster</h3>
                  <p className="text-gray-600 mb-4">Perfect for small projects</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Home cleanouts</li>
                    <li>• Small renovations</li>
                    <li>• Yard waste removal</li>
                  </ul>
                </div>
                <div className="border border-gray-200 rounded-lg p-6 text-center border-2 border-[#4e37a8]">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">20-Yard Dumpster</h3>
                  <p className="text-gray-600 mb-4">Most popular choice</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Kitchen renovations</li>
                    <li>• Bathroom remodels</li>
                    <li>• Roof replacements</li>
                  </ul>
                </div>
                <div className="border border-gray-200 rounded-lg p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">30-Yard Dumpster</h3>
                  <p className="text-gray-600 mb-4">Best for large projects</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Whole house renovations</li>
                    <li>• Commercial projects</li>
                    <li>• Construction sites</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Local Information */}
            <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Rose Park Local Information</h2>
              <p className="text-lg text-gray-700 mb-6">
                Rose Park is a historic neighborhood in Salt Lake City, Utah, known for its tree-lined streets and 
                diverse community. The neighborhood has seen significant growth and development in recent years.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">🏛️ Popular Rose Park Attractions</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Rose Park Golf Course</strong> - Public golf course</li>
                    <li>• <strong>Rose Park Community Center</strong> - Local events and activities</li>
                    <li>• <strong>Rose Park Elementary School</strong> - Historic school building</li>
                    <li>• <strong>Jordan River Parkway</strong> - Walking and biking trails</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">🏢 Rose Park Business Districts</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>North Temple Corridor</strong> - Main commercial area</li>
                    <li>• <strong>Rose Park Shopping Center</strong> - Local businesses</li>
                    <li>• <strong>Jordan River Business District</strong> - Mixed-use development</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions - Rose Park Dumpster Rental</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Do I need a permit for dumpster rental in Rose Park?</h3>
                  <p className="text-gray-700">
                    Yes, permits are required for dumpsters placed on public property or right-of-way in Salt Lake City. 
                    Contact the Salt Lake City Building Services Division at (801) 535-6000 for specific requirements.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">How long can I keep the dumpster?</h3>
                  <p className="text-gray-700">
                    Our standard rental period is 7 days, but we offer flexible terms to accommodate your project timeline. 
                    Extended rentals are available for longer projects.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">What can I put in the dumpster?</h3>
                  <p className="text-gray-700">
                    We accept most construction debris, household waste, and yard waste. Prohibited items include 
                    hazardous materials, electronics, and certain appliances. Contact us for specific guidelines.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Do you offer same-day delivery in Rose Park?</h3>
                  <p className="text-gray-700">
                    Yes, we offer same-day delivery throughout Rose Park and Salt Lake City when available. Call us early in the day 
                    to check availability and schedule same-day service.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column - Quick Info */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Quick Contact */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Contact</h3>
                <div className="space-y-3">
                  <a 
                    href="tel:801-555-0123"
                    className="block w-full bg-[#4e37a8] text-white px-4 py-3 rounded-lg font-semibold text-center hover:bg-purple-700 transition-colors"
                  >
                    Call 801-555-0123
                  </a>
                  <a 
                    href="#quote-form" 
                    className="block w-full bg-transparent border-2 border-[#4e37a8] text-[#4e37a8] px-4 py-3 rounded-lg font-semibold text-center hover:bg-[#4e37a8] hover:text-white transition-colors"
                  >
                    Get Free Quote
                  </a>
                </div>
              </div>

              {/* Permit Info */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Permit Information</h3>
                <p className="text-gray-700 mb-4">
                  Contact Salt Lake City Building Services for permit requirements.
                </p>
                <a 
                  href="tel:801-535-6000"
                  className="text-[#4e37a8] hover:text-purple-700 font-semibold"
                >
                  (801) 535-6000
                </a>
              </div>

              {/* Related Links */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Related Links</h3>
                <ul className="space-y-2">
                  <li><Link href="/dumpster-prices" className="text-blue-600 hover:text-blue-800">Dumpster Prices</Link></li>
                  <li><Link href="/dumpster-sizes" className="text-blue-600 hover:text-blue-800">Dumpster Sizes</Link></li>
                  <li><Link href="/faq" className="text-blue-600 hover:text-blue-800">FAQ</Link></li>
                  <li><Link href="/contact" className="text-blue-600 hover:text-blue-800">Contact Us</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get your Rose Park dumpster rental quote today. Fast delivery, competitive pricing, and professional service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:801-555-0123"
              className="bg-[#4e37a8] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-700 transition-colors"
            >
              Call Now: 801-555-0123
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



import type { Metadata } from 'next';
import PageHero from '../components/PageHero';

export const metadata: Metadata = {
  title: 'Frequent Buyer Program | Icon Dumpsters',
  description: 'Save on repeat dumpster rentals with Icon Dumpsters. Contractor and multi-project discounts, priority scheduling, and dedicated support.',
  alternates: { canonical: '/frequent-buyers' },
  robots: { index: true, follow: true }
};

export default function FrequentBuyers() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero
        title="Frequent Buyer Program"
        subtitle="Designed for contractors and repeat customers who rent multiple dumpsters throughout the year."
        primaryCtaText="Enroll Now"
        primaryCtaLink="/#quote-form"
        secondaryCtaText="Call Us"
        secondaryCtaLink="tel:(801) 918-6000"
      />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Program Overview */}
        <div className="text-center mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequent Buyer Program</h2>
            <div className="space-y-4 text-lg text-gray-700">
              <p className="font-medium">Ordering multiple dumpsters, or use them on your jobsite frequently?</p>
              <p className="font-medium">Have a long-term project going on?</p>
              <p className="text-xl font-semibold text-[#4e37a8]">Reach out today to see what sort of rates we can offer you!</p>
            </div>
          </div>
          
          {/* Call to Action Button */}
          <a 
            href="tel:(801) 918-6000" 
            className="inline-block bg-[#4e37a8] text-white px-8 py-4 rounded-lg font-bold text-xl hover:bg-purple-700 transition-colors shadow-lg"
          >
            Click to Call: (801) 918-6000
          </a>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-lg border p-6 text-center">
            <div className="w-16 h-16 bg-[#4e37a8] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Volume Discounts</h3>
            <p className="text-gray-600">Discounted rates after your 3rd rental with increasing savings for higher volume</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg border p-6 text-center">
            <div className="w-16 h-16 bg-[#4e37a8] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Priority Scheduling</h3>
            <p className="text-gray-600">First access to available dumpsters and priority delivery scheduling</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg border p-6 text-center">
            <div className="w-16 h-16 bg-[#4e37a8] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Dedicated Support</h3>
            <p className="text-gray-600">Direct line to our experienced team for quick problem resolution</p>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#4e37a8] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="font-semibold mb-2">Call to Enroll</h3>
              <p className="text-gray-600">Contact us at <a href="tel:801-918-6000" className="text-[#4e37a8] font-semibold">(801) 918-6000</a> to discuss your needs</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#4e37a8] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="font-semibold mb-2">Get Member Code</h3>
              <p className="text-gray-600">Receive a unique member code tied to your account</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#4e37a8] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="font-semibold mb-2">Start Saving</h3>
              <p className="text-gray-600">Use your code on new orders to automatically apply member rates</p>
            </div>
          </div>
        </div>

        {/* Additional Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-lg border p-6">
            <h3 className="text-xl font-semibold mb-4">Perfect For:</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-[#4e37a8] mr-2">✓</span>
                <span>Contractors with ongoing projects</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#4e37a8] mr-2">✓</span>
                <span>Property management companies</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#4e37a8] mr-2">✓</span>
                <span>Construction firms</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#4e37a8] mr-2">✓</span>
                <span>Renovation specialists</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#4e37a8] mr-2">✓</span>
                <span>Commercial property owners</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg border p-6">
            <h3 className="text-xl font-semibold mb-4">Program Features:</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-[#4e37a8] mr-2">✓</span>
                <span>Flexible billing for active jobsites</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#4e37a8] mr-2">✓</span>
                <span>Extended rental periods available</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#4e37a8] mr-2">✓</span>
                <span>Quick swap-outs when needed</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#4e37a8] mr-2">✓</span>
                <span>No long-term contracts required</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#4e37a8] mr-2">✓</span>
                <span>Custom scheduling options</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="text-center bg-gradient-to-r from-[#4e37a8] to-purple-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Saving?</h2>
          <p className="text-xl mb-8 opacity-90">Join our Frequent Buyer Program today and unlock exclusive benefits!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:(801) 918-6000" 
              className="bg-white text-[#4e37a8] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Call (801) 918-6000
            </a>
            <a 
              href="https://icondumpsters.com/#quote-form" 
              className="bg-orange-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition-colors"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      </div>
    
      {/* Internal Links Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Related Resources
            </h2>
            <p className="text-xl text-gray-600">
              Explore more helpful resources for your dumpster rental needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
              <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  <a href="/cheap-dumpster-rentals-near-me" className="text-[#4e37a8] hover:text-purple-700 transition-colors">
                    Cheap Dumpster Rentals Near Me
                  </a>
                </h3>
              </div>
            
              <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  <a href="/dumpster-rentals-near-me-prices" className="text-[#4e37a8] hover:text-purple-700 transition-colors">
                    Dumpster Rentals Near Me Prices
                  </a>
                </h3>
              </div>
            
              <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  <a href="/multiple-sizes-available" className="text-[#4e37a8] hover:text-purple-700 transition-colors">
                    Multiple Sizes Available
                  </a>
                </h3>
              </div>
            
              <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  <a href="/utah-wide-coverage" className="text-[#4e37a8] hover:text-purple-700 transition-colors">
                    Utah-Wide Coverage
                  </a>
                </h3>
              </div>
            
          </div>
        </div>
      </section>
    
    </div>
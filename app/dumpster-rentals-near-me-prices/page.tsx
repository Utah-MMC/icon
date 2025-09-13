import type { Metadata } from 'next';
import PageHero from '../components/PageHero';
import PageTemplate from '../components/PageTemplate';
import CalculatorBanner from '../components/CalculatorBanner';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Dumpster Rentals Near Me Prices - Compare Local Rates 2025 | Icon Dumpsters",
  description: "Compare dumpster rental prices near you. Get instant quotes for local dumpster rentals with transparent pricing. No hidden fees. Serving Utah with competitive rates. Call (801) 918-6000.",
  keywords: [
    "dumpster rentals near me prices",
    "dumpster rental prices near me",
    "local dumpster rental prices",
    "dumpster rental cost near me",
    "cheap dumpster rental near me",
    "dumpster rental quotes near me"
  ],
  openGraph: {
    title: "Dumpster Rentals Near Me Prices - Compare Local Rates 2025 | Icon Dumpsters",
    description: "Compare dumpster rental prices near you. Get instant quotes for local dumpster rentals with transparent pricing.",
    url: 'https://icondumpsters.com/dumpster-rentals-near-me-prices',
    images: [
      {
        url: '/images/dumpster500x500-1.jpeg',
        width: 1200,
        height: 630,
        alt: 'Dumpster Rentals Near Me Prices - Icon Dumpsters',
      },
    ],
  },
  alternates: {
    canonical: '/dumpster-rentals-near-me-prices',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function DumpsterRentalsNearMePrices() {
  return (
    <PageTemplate>
      <PageHero
        title="Dumpster Rentals Near Me Prices - Compare Local Rates 2025"
        subtitle="Find the best dumpster rental prices in your area. Compare local rates, get instant quotes, and save money on your dumpster rental project."
        primaryCtaText="Get Local Quote"
        primaryCtaLink="/#quote-form"
        secondaryCtaText="Call (801) 918-6000"
        secondaryCtaLink="tel:(801) 918-6000"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Local Pricing Section */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Local Dumpster Rental Prices in Your Area</h2>
          <p className="text-lg text-gray-700 mb-8">
            Wondering about dumpster rental prices near you? We provide transparent, competitive pricing throughout Utah. Here's what you can expect to pay for dumpster rentals in your local area.
          </p>
          
          <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-8">
            <h3 className="text-xl font-semibold text-green-900 mb-3">💰 Understanding Local Dumpster Rental Pricing</h3>
            <p className="text-gray-700">
              Dumpster rental prices vary significantly based on your location, project type, and rental duration. Our comprehensive pricing guide helps you understand what factors influence local dumpster rental costs and how to get the best value for your money. Whether you're in Salt Lake City, Provo, Ogden, or anywhere in Utah, we provide competitive rates with transparent pricing.
            </p>
          </div>
          
          {/* Hero Image */}
          <div className="mb-8">
            <img 
              src="/images/dumpster500x500-1.jpeg" 
              alt="Local dumpster rental prices near you - Icon Dumpsters" 
              className="w-full h-64 sm:h-80 object-cover rounded-lg shadow-lg"
            />
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="border border-gray-200 rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">15 Yard Dumpster</h3>
              <div className="text-3xl font-bold text-[#4e37a8] mb-2">$299 - $399</div>
              <p className="text-gray-600 mb-4">Small to medium projects</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Kitchen renovations</li>
                <li>• Bathroom remodels</li>
                <li>• Garage cleanouts</li>
                <li>• Small construction</li>
              </ul>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6 text-center bg-purple-50">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">20 Yard Dumpster</h3>
              <div className="text-3xl font-bold text-[#4e37a8] mb-2">$349 - $449</div>
              <p className="text-gray-600 mb-4">Most popular choice</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Whole house cleanouts</li>
                <li>• Roofing projects</li>
                <li>• Deck demolition</li>
                <li>• Medium construction</li>
              </ul>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">30 Yard Dumpster</h3>
              <div className="text-3xl font-bold text-[#4e37a8] mb-2">$399 - $499</div>
              <p className="text-gray-600 mb-4">Large projects</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Major renovations</li>
                <li>• Commercial projects</li>
                <li>• Large construction</li>
                <li>• Estate cleanouts</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">📍 Local Service Areas - Competitive Pricing Near You</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-blue-800 mb-2">Salt Lake County</h4>
                <p className="text-gray-700 text-sm">Salt Lake City, Murray, Sandy, West Jordan, South Jordan, Draper, Midvale, Taylorsville, West Valley City</p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-800 mb-2">Utah County</h4>
                <p className="text-gray-700 text-sm">Provo, Orem, Lehi, American Fork, Pleasant Grove, Saratoga Springs, Eagle Mountain, Spanish Fork</p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-800 mb-2">Davis County</h4>
                <p className="text-gray-700 text-sm">Layton, Clearfield, Kaysville, Farmington, Centerville, Bountiful, North Salt Lake, Woods Cross</p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-800 mb-2">Weber County</h4>
                <p className="text-gray-700 text-sm">Ogden, Roy, Syracuse, West Haven, Washington Terrace, South Ogden, North Ogden</p>
              </div>
            </div>
          </div>
        </section>

        {/* Dumpster Size Image */}
        <section className="mb-12">
          <img 
            src="/images/dumpster500x500-2.webp" 
            alt="Different dumpster sizes and their rental prices near you" 
            className="w-full h-64 sm:h-80 object-cover rounded-xl shadow-lg"
          />
        </section>

        {/* Price Factors Section */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What Affects Dumpster Rental Prices Near You?</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Factors That Impact Local Pricing</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#4e37a8] mr-2">•</span>
                  <div>
                    <strong>Location:</strong> Urban areas may have different pricing than rural areas
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4e37a8] mr-2">•</span>
                  <div>
                    <strong>Dumpster Size:</strong> Larger dumpsters cost more but may be more cost-effective
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4e37a8] mr-2">•</span>
                  <div>
                    <strong>Rental Duration:</strong> Longer rentals may have additional fees
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4e37a8] mr-2">•</span>
                  <div>
                    <strong>Weight:</strong> Heavy materials like concrete cost more to dispose of
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4e37a8] mr-2">•</span>
                  <div>
                    <strong>Permits:</strong> Some areas require permits (additional cost)
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">How to Get the Best Local Price</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <div>
                    <strong>Compare Local Quotes:</strong> Get quotes from multiple companies in your area
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <div>
                    <strong>Choose the Right Size:</strong> Don't overpay for a larger dumpster than needed
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <div>
                    <strong>Plan Your Project:</strong> Complete within the rental period to avoid extra fees
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <div>
                    <strong>Book in Advance:</strong> Last-minute rentals may cost more
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <div>
                    <strong>Ask About Discounts:</strong> Some companies offer discounts for longer rentals
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Calculator Banner */}
        <CalculatorBanner />

        {/* Construction Debris Image */}
        <section className="mb-12">
          <img 
            src="/images/dumpster500x200-1.webp" 
            alt="Construction debris and waste management - dumpster rental near me" 
            className="w-full h-64 sm:h-80 object-cover rounded-xl shadow-lg"
          />
        </section>

        {/* Local Comparison Section */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Compare Local Dumpster Rental Companies</h2>
          <p className="text-lg text-gray-700 mb-8">
            When looking for dumpster rentals near you, it's important to compare not just prices, but also service quality, reliability, and customer support.
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 p-4 text-left">Company</th>
                  <th className="border border-gray-300 p-4 text-left">15 Yard</th>
                  <th className="border border-gray-300 p-4 text-left">20 Yard</th>
                  <th className="border border-gray-300 p-4 text-left">30 Yard</th>
                  <th className="border border-gray-300 p-4 text-left">Service Area</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-4 font-semibold">Icon Dumpsters</td>
                  <td className="border border-gray-300 p-4">$299</td>
                  <td className="border border-gray-300 p-4">$349</td>
                  <td className="border border-gray-300 p-4">$399</td>
                  <td className="border border-gray-300 p-4">All of Utah</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-4">Competitor A</td>
                  <td className="border border-gray-300 p-4">$350</td>
                  <td className="border border-gray-300 p-4">$400</td>
                  <td className="border border-gray-300 p-4">$450</td>
                  <td className="border border-gray-300 p-4">Limited areas</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4">Competitor B</td>
                  <td className="border border-gray-300 p-4">$325</td>
                  <td className="border border-gray-300 p-4">$375</td>
                  <td className="border border-gray-300 p-4">$425</td>
                  <td className="border border-gray-300 p-4">Salt Lake County</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-6 bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-yellow-900 mb-4">⚠️ Important: Compare More Than Just Price</h3>
            <p className="text-gray-700 mb-4">
              While price is important, also consider these factors when choosing a local dumpster rental company:
            </p>
            <ul className="text-gray-700 space-y-2">
              <li>• <strong>Reliability:</strong> Do they deliver on time?</li>
              <li>• <strong>Customer Service:</strong> Are they responsive to questions?</li>
              <li>• <strong>Equipment Quality:</strong> Are their dumpsters in good condition?</li>
              <li>• <strong>Flexibility:</strong> Can they accommodate schedule changes?</li>
              <li>• <strong>Transparency:</strong> Are there hidden fees?</li>
            </ul>
          </div>
        </section>

        {/* Final Service Image */}
        <section className="mb-12">
          <img 
            src="/images/dumpsterSmallBanner.webp" 
            alt="Professional dumpster rental service near you - Icon Dumpsters" 
            className="w-full h-64 sm:h-80 object-cover rounded-xl shadow-lg"
          />
        </section>

        {/* Regional Pricing Analysis */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Utah Regional Dumpster Rental Price Analysis</h2>
          <p className="text-lg text-gray-700 mb-8">
            Understanding regional pricing variations helps you make informed decisions about dumpster rentals. Here's how prices differ across Utah's major metropolitan areas and what drives these variations.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Major Utah Markets</h3>
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Salt Lake City Metro</h4>
                  <p className="text-sm text-gray-600 mb-2">Average 20-yard dumpster: $349-$399</p>
                  <p className="text-xs text-gray-500">Higher demand, urban challenges, permit requirements</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Utah County (Provo/Orem)</h4>
                  <p className="text-sm text-gray-600 mb-2">Average 20-yard dumpster: $329-$379</p>
                  <p className="text-xs text-gray-500">Growing market, suburban access, competitive pricing</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Davis County (Layton/Clearfield)</h4>
                  <p className="text-sm text-gray-600 mb-2">Average 20-yard dumpster: $339-$389</p>
                  <p className="text-xs text-gray-500">Balanced market, good access, moderate pricing</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Weber County (Ogden)</h4>
                  <p className="text-sm text-gray-600 mb-2">Average 20-yard dumpster: $319-$369</p>
                  <p className="text-xs text-gray-500">Established market, good competition, value pricing</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Price Influencing Factors</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#4e37a8] mr-2">•</span>
                  <div>
                    <strong>Population Density:</strong> Urban areas typically have higher prices due to increased demand and operational challenges.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4e37a8] mr-2">•</span>
                  <div>
                    <strong>Competition Level:</strong> Markets with more dumpster rental companies often have more competitive pricing.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4e37a8] mr-2">•</span>
                  <div>
                    <strong>Disposal Costs:</strong> Local landfill fees and recycling costs directly impact dumpster rental pricing.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4e37a8] mr-2">•</span>
                  <div>
                    <strong>Permit Requirements:</strong> Areas with complex permit processes may have higher administrative costs.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4e37a8] mr-2">•</span>
                  <div>
                    <strong>Seasonal Demand:</strong> Construction seasons and weather patterns affect pricing throughout the year.
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-purple-900 mb-4">🎯 How to Get the Best Local Price</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-purple-800 mb-2">Compare Multiple Quotes</h4>
                <p className="text-gray-700 text-sm">Get quotes from at least 3 local companies to ensure you're getting competitive pricing for your area.</p>
              </div>
              <div>
                <h4 className="font-semibold text-purple-800 mb-2">Consider Total Cost</h4>
                <p className="text-gray-700 text-sm">Factor in delivery fees, pickup costs, and any additional charges when comparing prices.</p>
              </div>
              <div>
                <h4 className="font-semibold text-purple-800 mb-2">Timing Matters</h4>
                <p className="text-gray-700 text-sm">Book during off-peak seasons or plan ahead to secure better rates and availability.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions - Dumpster Rentals Near Me Prices</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How much does a dumpster rental cost near me?</h3>
              <p className="text-gray-700">
                Dumpster rental prices vary by location and size. In Utah, you can expect to pay $299-$499 for most dumpster rentals, depending on the size and duration. Contact us for a personalized quote for your specific location.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Do dumpster rental prices vary by location?</h3>
              <p className="text-gray-700">
                Yes, dumpster rental prices can vary by location due to factors like local disposal costs, delivery distance, and local competition. We provide competitive pricing throughout Utah.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What's included in the dumpster rental price?</h3>
              <p className="text-gray-700">
                Our dumpster rental prices include delivery, pickup, and disposal. The only additional cost is weight overage at $55/ton, which is clearly stated upfront. No hidden fees.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Can I get a same-day dumpster rental near me?</h3>
              <p className="text-gray-700">
                Yes, we offer same-day delivery in many areas when available. Call us early in the day to check availability and schedule same-day service in your area.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-[#4e37a8] to-purple-700 text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Get Your Local Dumpster Rental Quote Today</h2>
          <p className="text-xl mb-8">Compare our competitive local prices and get the best deal on dumpster rental in your area.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="https://icondumpsters.com/#quote-form"
              className="bg-white text-[#4e37a8] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Get Local Quote
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

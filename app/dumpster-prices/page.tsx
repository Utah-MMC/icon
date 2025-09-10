import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Dumpster Rental Prices | Transparent Pricing | Icon Dumpsters',
  description: 'Get transparent dumpster rental prices with no hidden fees. Competitive rates for 15, 20, and 30-yard dumpsters. Same-day delivery available.',
  keywords: 'dumpster rental prices, dumpster costs, transparent pricing, no hidden fees, competitive rates',
};

export default function DumpsterPricesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#4e37a8] to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Transparent Dumpster Rental Prices
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              No hidden fees. No surprises. Just honest, competitive pricing.
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

      {/* Pricing Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Dumpster Rental Prices</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              All prices include delivery, pickup, and landfill fees. Weight is billed at $55/ton after pickup. 
              No hidden fees, no surprises.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* 15 Yard Dumpster */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">15-Yard Dumpster</h3>
              <div className="text-4xl font-bold text-[#4e37a8] mb-4">$299</div>
              <p className="text-gray-600 mb-6">Perfect for small projects</p>
              <ul className="text-left space-y-2 text-gray-700 mb-8">
                <li>• Home cleanouts</li>
                <li>• Small renovations</li>
                <li>• Yard waste removal</li>
                <li>• Garage organization</li>
              </ul>
              <a 
                href="tel:801-555-0123"
                className="w-full bg-[#4e37a8] text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors block"
              >
                Book Now
              </a>
            </div>

            {/* 20 Yard Dumpster */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center border-2 border-[#4e37a8] relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-[#4e37a8] text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">20-Yard Dumpster</h3>
              <div className="text-4xl font-bold text-[#4e37a8] mb-4">$399</div>
              <p className="text-gray-600 mb-6">Ideal for medium projects</p>
              <ul className="text-left space-y-2 text-gray-700 mb-8">
                <li>• Kitchen renovations</li>
                <li>• Bathroom remodels</li>
                <li>• Roof replacements</li>
                <li>• Basement cleanouts</li>
              </ul>
              <a 
                href="tel:801-555-0123"
                className="w-full bg-[#4e37a8] text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors block"
              >
                Book Now
              </a>
            </div>

            {/* 30 Yard Dumpster */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">30-Yard Dumpster</h3>
              <div className="text-4xl font-bold text-[#4e37a8] mb-4">$499</div>
              <p className="text-gray-600 mb-6">Best for large projects</p>
              <ul className="text-left space-y-2 text-gray-700 mb-8">
                <li>• Whole house renovations</li>
                <li>• Commercial projects</li>
                <li>• Construction sites</li>
                <li>• Major cleanouts</li>
              </ul>
              <a 
                href="tel:801-555-0123"
                className="w-full bg-[#4e37a8] text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors block"
              >
                Book Now
              </a>
            </div>
          </div>

          {/* What's Included */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">What's Included in Our Prices</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">✅ Always Included</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Delivery to your location</li>
                  <li>• Pickup when you're done</li>
                  <li>• Landfill disposal fees</li>
                  <li>• 7-day rental period</li>
                  <li>• Professional service</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">💰 Additional Costs</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Weight overage: $55/ton</li>
                  <li>• Extended rental: $25/day</li>
                  <li>• Prohibited items: $50 fee</li>
                  <li>• Permit fees (if required)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Pricing FAQ</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Are there any hidden fees?</h4>
                <p className="text-gray-700">
                  No! Our prices are completely transparent. The only additional costs are weight overage ($55/ton) 
                  and extended rental periods ($25/day). We'll always tell you upfront if there are any additional costs.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">How is weight calculated?</h4>
                <p className="text-gray-700">
                  Weight is calculated when we pick up your dumpster. If you exceed the weight limit, 
                  you'll be charged $55 per ton over the limit. Most residential projects stay within the weight limits.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Can I get a quote before booking?</h4>
                <p className="text-gray-700">
                  Absolutely! Call us at 801-555-0123 for a free, no-obligation quote. We'll help you 
                  choose the right size and give you an accurate price estimate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get your free quote today. No hidden fees, no surprises, just honest pricing.
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


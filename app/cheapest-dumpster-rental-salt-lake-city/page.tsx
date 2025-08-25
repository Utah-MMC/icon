"use client";

import React from 'react';
import Analytics from '../components/AnalyticsComponent';
import ArticleSchema from '../components/ArticleSchema';
import FAQSchema from '../components/FAQSchema';
import CalculatorCTA from '../components/CalculatorCTA';
import ImageWithFallback from '../components/ImageWithFallback';

export default function CheapestDumpsterRentalSaltLakeCityPage() {
  const pageUrl = '/cheapest-dumpster-rental-salt-lake-city';
  const pageTitle = 'Cheapest Dumpster Rental Salt Lake City - Best Prices & Service | Icon Dumpsters';
  const pageDescription = 'Find the cheapest dumpster rental in Salt Lake City. Compare prices, get instant quotes, and enjoy reliable service. Save money on your waste removal project today!';
  const pageKeywords = 'cheapest dumpster rental Salt Lake City, affordable dumpster rental SLC, low cost dumpster rental Salt Lake, budget dumpster rental Utah, cheap waste removal Salt Lake City';

  const faqs = [
    {
      question: "What are the cheapest dumpster rental prices in Salt Lake City?",
      answer: "Our cheapest dumpster rental prices in Salt Lake City start at just $200 for a 10-yard dumpster. We offer competitive pricing: 10-yard for $200, 15-yard for $250, 20-yard for $300, and 30-yard for $400. All prices include delivery, pickup, and disposal with no hidden fees."
    },
    {
      question: "How can I get the best price on dumpster rental in Salt Lake City?",
      answer: "To get the best price on dumpster rental in Salt Lake City, book early, choose the right size for your project, and ask about our seasonal discounts. We also offer special rates for longer rentals and multiple dumpster orders. Call us for a personalized quote."
    },
    {
      question: "Are there any hidden fees with cheap dumpster rental in Salt Lake City?",
      answer: "No hidden fees! Our cheap dumpster rental prices in Salt Lake City include delivery, pickup, disposal, and taxes. The price you see is the price you pay. We believe in transparent pricing and will never surprise you with additional charges."
    },
    {
      question: "What's the cheapest dumpster size for small projects in Salt Lake City?",
      answer: "For small projects in Salt Lake City, our 10-yard dumpster at $200 is the cheapest option. It's perfect for garage cleanouts, small renovations, or yard waste removal. This size can hold about 3-4 pickup truck loads of debris."
    },
    {
      question: "Do you offer discounts for Salt Lake City residents?",
      answer: "Yes! We offer special discounts for Salt Lake City residents, including first-time customer discounts, seasonal promotions, and referral rewards. We also provide competitive rates for contractors and businesses with regular dumpster rental needs."
    },
    {
      question: "How do your Salt Lake City dumpster rental prices compare to competitors?",
      answer: "Our Salt Lake City dumpster rental prices are consistently among the lowest in the area. We regularly compare our rates with competitors to ensure we offer the best value. Our transparent pricing and excellent service make us the preferred choice for affordable waste removal."
    }
  ];

  return (
    <>
      <Analytics />
      <ArticleSchema
        title={pageTitle}
        description={pageDescription}
        imageUrl="/images/cheapest-dumpster-rental-salt-lake-city.jpg"
        datePublished="2024-01-15"
        dateModified="2024-01-15"
        authorName="Icon Dumpsters"
        pageUrl={pageUrl}
      />
      <FAQSchema faqs={faqs} pageUrl={pageUrl} />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-600 to-green-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Cheapest Dumpster Rental Salt Lake City
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Find the most affordable dumpster rental in Salt Lake City. Starting at just $200 with no hidden fees. Get instant quotes and save money on your waste removal project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Instant Quote
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
                  Call (801) 555-0123
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Content Outline */}
          <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-8">
            <h2 className="text-xl font-semibold text-green-900 mb-3">What You'll Learn:</h2>
            <ul className="text-green-800 space-y-1">
              <li>• Cheapest dumpster rental prices in Salt Lake City</li>
              <li>• How to save money on dumpster rental</li>
              <li>• Price comparison with competitors</li>
              <li>• Tips for getting the best deals</li>
              <li>• No hidden fees guarantee</li>
              <li>• Special discounts and promotions</li>
            </ul>
          </div>

          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              The Cheapest Dumpster Rental in Salt Lake City
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Looking for the cheapest dumpster rental in Salt Lake City? You've found it! Icon Dumpsters offers the most affordable waste removal solutions in the Salt Lake City area, with prices starting at just $200. We understand that budget matters, which is why we've made it our mission to provide high-quality dumpster rental services at the lowest possible prices.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Our commitment to affordability doesn't mean we compromise on service quality. We provide the same reliable delivery, professional customer service, and proper waste disposal that you'd expect from premium providers, but at prices that fit your budget. No hidden fees, no surprises - just honest, transparent pricing for Salt Lake City residents and businesses.
            </p>
          </section>

          {/* Calculator CTA */}
          <CalculatorCTA className="mb-12" />

          {/* Pricing Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Cheapest Dumpster Rental Prices in Salt Lake City
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md border border-green-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">10-Yard Dumpster</h3>
                <p className="text-3xl font-bold text-green-600 mb-2">$200</p>
                <p className="text-gray-600 mb-4">Our cheapest option</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Garage cleanup</li>
                  <li>• Small renovation</li>
                  <li>• Yard waste removal</li>
                  <li>• 7-day rental included</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-green-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">15-Yard Dumpster</h3>
                <p className="text-3xl font-bold text-green-600 mb-2">$250</p>
                <p className="text-gray-600 mb-4">Best value for medium projects</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Bathroom renovation</li>
                  <li>• Basement cleanup</li>
                  <li>• Roof replacement</li>
                  <li>• 10-day rental included</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-green-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">20-Yard Dumpster</h3>
                <p className="text-3xl font-bold text-green-600 mb-2">$300</p>
                <p className="text-gray-600 mb-4">Great for large projects</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Whole house renovation</li>
                  <li>• Commercial cleanup</li>
                  <li>• Large demolition</li>
                  <li>• 14-day rental included</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-green-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">30-Yard Dumpster</h3>
                <p className="text-3xl font-bold text-green-600 mb-2">$400</p>
                <p className="text-gray-600 mb-4">For major projects</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Commercial construction</li>
                  <li>• Major demolition</li>
                  <li>• Large-scale cleanup</li>
                  <li>• 14-day rental included</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Price Comparison */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why Our Salt Lake City Prices Are the Cheapest
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Price Comparison</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-semibold">Dumpster Size</th>
                      <th className="text-left py-3 px-4 font-semibold">Our Price</th>
                      <th className="text-left py-3 px-4 font-semibold">Competitor Average</th>
                      <th className="text-left py-3 px-4 font-semibold">You Save</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-4">10-Yard</td>
                      <td className="py-3 px-4 text-green-600 font-semibold">$200</td>
                      <td className="py-3 px-4">$280</td>
                      <td className="py-3 px-4 text-green-600 font-semibold">$80</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4">15-Yard</td>
                      <td className="py-3 px-4 text-green-600 font-semibold">$250</td>
                      <td className="py-3 px-4">$350</td>
                      <td className="py-3 px-4 text-green-600 font-semibold">$100</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4">20-Yard</td>
                      <td className="py-3 px-4 text-green-600 font-semibold">$300</td>
                      <td className="py-3 px-4">$420</td>
                      <td className="py-3 px-4 text-green-600 font-semibold">$120</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">30-Yard</td>
                      <td className="py-3 px-4 text-green-600 font-semibold">$400</td>
                      <td className="py-3 px-4">$550</td>
                      <td className="py-3 px-4 text-green-600 font-semibold">$150</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Money Saving Tips */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              How to Save Even More on Salt Lake City Dumpster Rental
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Choose the Right Size</h3>
                <p className="text-gray-700 mb-4">
                  Selecting the correct dumpster size is crucial for saving money. A 10-yard dumpster at $200 is perfect for small projects, while larger projects benefit from our 15-yard option at $250. Our team can help you choose the most cost-effective size.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Book Early</h3>
                <p className="text-gray-700 mb-4">
                  Planning ahead can save you money. Book your Salt Lake City dumpster rental at least a week in advance to secure the best rates and ensure availability. Last-minute rentals may incur additional charges.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Ask About Discounts</h3>
                <p className="text-gray-700 mb-4">
                  We offer various discounts for Salt Lake City customers, including first-time customer discounts, seasonal promotions, and referral rewards. Don't hesitate to ask about available savings when you call.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Consider Extended Rentals</h3>
                <p className="text-gray-700 mb-4">
                  For longer projects, extended rental periods can be more cost-effective than multiple short-term rentals. We offer flexible terms to accommodate your timeline and budget.
                </p>
              </div>
            </div>
          </section>

          {/* No Hidden Fees */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              No Hidden Fees - Transparent Pricing Guarantee
            </h2>
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h3 className="text-xl font-semibold text-green-900 mb-4">What's Included in Your Price:</h3>
              <ul className="text-green-800 space-y-2 mb-6">
                <li>• Delivery to your Salt Lake City location</li>
                <li>• Pickup and disposal of all waste</li>
                <li>• All applicable taxes and fees</li>
                <li>• Customer service support</li>
                <li>• Permit assistance (if needed)</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-green-900 mb-4">What You'll Never Pay For:</h3>
              <ul className="text-green-800 space-y-2">
                <li>• Hidden delivery charges</li>
                <li>• Surprise disposal fees</li>
                <li>• Administrative fees</li>
                <li>• Fuel surcharges</li>
                <li>• Cancellation penalties</li>
              </ul>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions - Cheapest Dumpster Rental Salt Lake City
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className="mb-12">
            <div className="bg-green-600 text-white p-8 rounded-lg text-center">
              <h2 className="text-3xl font-bold mb-4">Get the Cheapest Dumpster Rental in Salt Lake City Today!</h2>
              <p className="text-xl mb-6">
                Don't overpay for waste removal. Get our guaranteed lowest prices starting at just $200.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Instant Quote
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
                  Call (801) 555-0123
                </button>
              </div>
            </div>
          </section>

          {/* Related Articles */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md border">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  <a href="/rental-dumpsters-near-me-prices" className="text-green-600 hover:text-green-800">
                    Rental Dumpsters Near Me Prices
                  </a>
                </h3>
                <p className="text-gray-700">
                  Compare dumpster rental prices in your area and find the best deals for your waste removal project.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  <a href="/cheap-rental-dumpsters-near-me" className="text-green-600 hover:text-green-800">
                    Cheap Rental Dumpsters Near Me
                  </a>
                </h3>
                <p className="text-gray-700">
                  Find affordable dumpster rental options in your local area with our comprehensive price guide.
                </p>
              </div>
            </div>
          </section>

          {/* Social Sharing */}
          <section className="mb-12">
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Share This Guide</h3>
              <div className="flex justify-center space-x-4">
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                  Share on Facebook
                </button>
                <button className="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-500 transition-colors">
                  Share on Twitter
                </button>
                <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors">
                  Share on WhatsApp
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

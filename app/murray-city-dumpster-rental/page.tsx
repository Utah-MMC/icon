"use client";

import React from 'react';
import Analytics from '../components/PageAnalytics';
import ArticleSchema from '../components/ArticleSchema';
import FAQSchema from '../components/FAQSchema';
import CalculatorCTA from '../components/CalculatorCTA';
import ImageWithFallback from '../components/ImageWithFallback';

export default function MurrayCityDumpsterRentalPage() {
  const pageUrl = '/murray-city-dumpster-rental';
  const pageTitle = 'Murray City Dumpster Rental - Fast & Reliable Service | Icon Dumpsters';
  const pageDescription = 'Get reliable dumpster rental in Murray City, UT. Same-day delivery, competitive pricing, and excellent customer service. Call us today for your project!';
  const pageKeywords = 'Murray City dumpster rental, dumpster rental Murray UT, construction dumpster Murray, residential dumpster Murray City, commercial dumpster rental Murray';

  const faqs = [
    {
      question: "How much does dumpster rental cost in Murray City?",
      answer: "Dumpster rental prices in Murray City typically range from $250-$450 depending on size and rental duration. Our 10-yard dumpsters start at $250, 15-yard at $300, 20-yard at $350, and 30-yard at $450. We offer competitive pricing and transparent quotes with no hidden fees."
    },
    {
      question: "Do you offer same-day delivery in Murray City?",
      answer: "Yes, we offer same-day delivery for most Murray City locations when you call before 2 PM. We understand that construction and cleanup projects often need immediate solutions, and we're committed to providing fast, reliable service to Murray City residents and businesses."
    },
    {
      question: "What dumpster sizes are available in Murray City?",
      answer: "We offer all standard dumpster sizes in Murray City: 10-yard (small projects), 15-yard (medium projects), 20-yard (large projects), and 30-yard (major projects). Our team can help you choose the right size based on your specific project needs and space constraints."
    },
    {
      question: "Are there any restrictions for dumpster rental in Murray City?",
      answer: "Murray City has some local regulations for dumpster placement. Dumpsters cannot block sidewalks, driveways, or public rights-of-way. You may need a permit for placement on city streets. We handle all permit applications and ensure compliance with local regulations."
    },
    {
      question: "How long can I keep a dumpster in Murray City?",
      answer: "Our standard rental period is 7-14 days, but we offer flexible rental terms to accommodate your project timeline. Extended rentals are available for longer projects. We work with you to ensure the dumpster is available for the duration you need."
    },
    {
      question: "What materials can I dispose of in Murray City dumpsters?",
      answer: "We accept most construction and demolition debris, household junk, yard waste, and general waste. Prohibited items include hazardous materials, electronics, appliances with refrigerants, and tires. Contact us for specific guidance on your materials."
    }
  ];

  return (
    <>
      <Analytics />
      <ArticleSchema
        title={pageTitle}
        description={pageDescription}
        imageUrl="/images/murray-city-dumpster-rental.jpg"
        datePublished="2024-01-15"
        dateModified="2024-01-15"
        authorName="Icon Dumpsters"
        pageUrl={pageUrl}
      />
      <FAQSchema faqs={faqs} pageUrl={pageUrl} />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Murray City Dumpster Rental
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Fast, reliable dumpster rental service in Murray City, UT. Same-day delivery, competitive pricing, and exceptional customer service for all your waste removal needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Instant Quote
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  Call (801) 555-0123
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Content Outline */}
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
            <h2 className="text-xl font-semibold text-blue-900 mb-3">What You'll Learn:</h2>
            <ul className="text-blue-800 space-y-1">
              <li>• Murray City dumpster rental pricing and options</li>
              <li>• Same-day delivery service availability</li>
              <li>• Local regulations and permit requirements</li>
              <li>• Dumpster size selection guide</li>
              <li>• Accepted materials and disposal guidelines</li>
              <li>• Customer service and support information</li>
            </ul>
          </div>

          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Professional Dumpster Rental Services in Murray City
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Looking for reliable dumpster rental in Murray City? Icon Dumpsters provides fast, affordable, and professional waste removal solutions for residents and businesses throughout Murray, Utah. Whether you're tackling a home renovation, construction project, or major cleanup, we have the right dumpster size and service to meet your needs.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Our Murray City dumpster rental service includes same-day delivery, flexible rental periods, and transparent pricing with no hidden fees. We're committed to providing exceptional customer service and ensuring your project runs smoothly from start to finish.
            </p>
          </section>

          {/* Calculator CTA */}
          <CalculatorCTA className="mb-12" />

          {/* Pricing Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Murray City Dumpster Rental Pricing
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md border">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">10-Yard Dumpster</h3>
                <p className="text-3xl font-bold text-blue-600 mb-2">$250</p>
                <p className="text-gray-600 mb-4">Perfect for small projects</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Kitchen remodel</li>
                  <li>• Garage cleanup</li>
                  <li>• Small deck removal</li>
                  <li>• 7-day rental included</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">15-Yard Dumpster</h3>
                <p className="text-3xl font-bold text-blue-600 mb-2">$300</p>
                <p className="text-gray-600 mb-4">Ideal for medium projects</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Bathroom renovation</li>
                  <li>• Basement cleanup</li>
                  <li>• Roof replacement</li>
                  <li>• 10-day rental included</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">20-Yard Dumpster</h3>
                <p className="text-3xl font-bold text-blue-600 mb-2">$350</p>
                <p className="text-gray-600 mb-4">Great for large projects</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Whole house renovation</li>
                  <li>• Commercial cleanup</li>
                  <li>• Large demolition</li>
                  <li>• 14-day rental included</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">30-Yard Dumpster</h3>
                <p className="text-3xl font-bold text-blue-600 mb-2">$450</p>
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

          {/* Service Features */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why Choose Icon Dumpsters in Murray City?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Same-Day Delivery</h3>
                <p className="text-gray-700 mb-4">
                  Need a dumpster fast? We offer same-day delivery for most Murray City locations when you call before 2 PM. Our efficient delivery team ensures your dumpster arrives when you need it, keeping your project on schedule.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Competitive Pricing</h3>
                <p className="text-gray-700 mb-4">
                  We believe in transparent, competitive pricing for Murray City residents and businesses. No hidden fees, no surprises. Get a clear, upfront quote that includes delivery, pickup, and disposal costs.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Local Expertise</h3>
                <p className="text-gray-700 mb-4">
                  As a local Murray City dumpster rental company, we understand the specific needs and regulations of our community. We handle all permit applications and ensure compliance with local ordinances.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Excellent Customer Service</h3>
                <p className="text-gray-700 mb-4">
                  Our dedicated customer service team is here to help with any questions about your Murray City dumpster rental. From size selection to scheduling, we're committed to making your experience smooth and stress-free.
                </p>
              </div>
            </div>
          </section>

          {/* Local Information */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Murray City Dumpster Rental Guidelines
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Local Regulations</h3>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>• Dumpsters cannot block sidewalks, driveways, or public rights-of-way</li>
                <li>• Street placement may require a permit from Murray City</li>
                <li>• Maximum rental period is typically 30 days</li>
                <li>• Proper covering may be required to prevent debris from blowing</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Accepted Materials</h3>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>• Construction and demolition debris</li>
                <li>• Household junk and furniture</li>
                <li>• Yard waste and landscaping materials</li>
                <li>• General waste and non-hazardous materials</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Prohibited Items</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Hazardous materials and chemicals</li>
                <li>• Electronics and appliances with refrigerants</li>
                <li>• Tires and automotive parts</li>
                <li>• Medical waste and biohazard materials</li>
              </ul>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions - Murray City Dumpster Rental
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
            <div className="bg-blue-600 text-white p-8 rounded-lg text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Start Your Murray City Project?</h2>
              <p className="text-xl mb-6">
                Get your dumpster rental quote today and enjoy fast, reliable service in Murray City.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Free Quote
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
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
                  <a href="/salt-lake-county-dumpster-rental" className="text-blue-600 hover:text-blue-800">
                    Salt Lake County Dumpster Rental Guide
                  </a>
                </h3>
                <p className="text-gray-700">
                  Comprehensive guide to dumpster rental services throughout Salt Lake County, including pricing and regulations.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  <a href="/dumpster-rental-sandy-utah" className="text-blue-600 hover:text-blue-800">
                    Sandy, Utah Dumpster Rental Services
                  </a>
                </h3>
                <p className="text-gray-700">
                  Everything you need to know about dumpster rental in Sandy, Utah, including local regulations and service options.
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

"use client";

import React from 'react';
import Analytics from '../components/Analytics';
import ArticleSchema from '../components/ArticleSchema';
import FAQSchema from '../components/FAQSchema';
import DumpsterCalculator from '../components/DumpsterCalculator';
import ImageWithFallback from '../components/ImageWithFallback';

export default function SaltLakeCountyDumpsterRentalPage() {
  const pageUrl = '/salt-lake-county-dumpster-rental';
  const pageTitle = 'Salt Lake County Dumpster Rental - Complete Guide & Services | Icon Dumpsters';
  const pageDescription = 'Comprehensive guide to dumpster rental services throughout Salt Lake County. Find reliable waste removal solutions for all cities and communities in SLC County.';
  const pageKeywords = 'Salt Lake County dumpster rental, SLC County waste removal, dumpster rental Salt Lake County, county-wide dumpster services, Utah dumpster rental';

  const faqs = [
    {
      question: "What cities are included in Salt Lake County dumpster rental services?",
      answer: "Our Salt Lake County dumpster rental services cover all cities and unincorporated areas within Salt Lake County, including Salt Lake City, West Valley City, Sandy, Murray, Taylorsville, South Jordan, West Jordan, Draper, Riverton, Herriman, Bluffdale, Midvale, Cottonwood Heights, Holladay, and more."
    },
    {
      question: "How much does dumpster rental cost in Salt Lake County?",
      answer: "Dumpster rental prices in Salt Lake County vary by location and size, typically ranging from $200-$500. Our 10-yard dumpsters start at $200, 15-yard at $250, 20-yard at $300, and 30-yard at $400. Prices include delivery, pickup, and disposal for most Salt Lake County locations."
    },
    {
      question: "Do you offer same-day delivery throughout Salt Lake County?",
      answer: "Yes, we offer same-day delivery for most Salt Lake County locations when you call before 2 PM. Our extensive fleet and strategic locations throughout the county allow us to provide fast, reliable service to all communities within Salt Lake County."
    },
    {
      question: "Are there different regulations for dumpster rental in different Salt Lake County cities?",
      answer: "Yes, different cities within Salt Lake County may have varying regulations for dumpster placement, permits, and rental periods. We're familiar with all local ordinances and handle permit applications for each jurisdiction. Contact us for specific requirements in your city."
    },
    {
      question: "What dumpster sizes are available for Salt Lake County residents?",
      answer: "We offer all standard dumpster sizes throughout Salt Lake County: 10-yard (small projects), 15-yard (medium projects), 20-yard (large projects), and 30-yard (major projects). Our team can help you choose the right size based on your project needs and local space constraints."
    },
    {
      question: "How do I schedule a dumpster rental in Salt Lake County?",
      answer: "Scheduling a dumpster rental in Salt Lake County is easy. Simply call us at (801) 555-0123 or use our online quote form. Provide your address, project details, and preferred delivery date. We'll confirm availability and coordinate delivery to your Salt Lake County location."
    }
  ];

  return (
    <>
      <Analytics />
      <ArticleSchema
        title={pageTitle}
        description={pageDescription}
        imageUrl="/images/salt-lake-county-dumpster-rental.jpg"
        publishedDate="2024-01-15"
        modifiedDate="2024-01-15"
        author="Icon Dumpsters"
        articleUrl={`https://icondumpsters.com${pageUrl}`}
        category="LOCAL SERVICES"
        readTime="10 min read"
      />
      <FAQSchema faqs={faqs} pageUrl={pageUrl} />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Salt Lake County Dumpster Rental
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Complete dumpster rental services throughout Salt Lake County. Serving all cities and communities with reliable waste removal solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get County-Wide Quote
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors">
                  Call (801) 555-0123
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Content Outline */}
          <div className="bg-indigo-50 border-l-4 border-indigo-400 p-6 mb-8">
            <h2 className="text-xl font-semibold text-indigo-900 mb-3">What You'll Learn:</h2>
            <ul className="text-indigo-800 space-y-1">
              <li>• Salt Lake County dumpster rental coverage areas</li>
              <li>• County-wide pricing and service options</li>
              <li>• Local regulations by city</li>
              <li>• Same-day delivery availability</li>
              <li>• Dumpster size selection guide</li>
              <li>• Scheduling and booking process</li>
            </ul>
          </div>

          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Complete Dumpster Rental Services Throughout Salt Lake County
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Looking for reliable dumpster rental services in Salt Lake County? Icon Dumpsters provides comprehensive waste removal solutions to all cities and communities throughout Salt Lake County. From Salt Lake City to Sandy, West Valley to Draper, we're your trusted partner for all your dumpster rental needs.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Our extensive coverage area and local expertise make us the preferred choice for Salt Lake County residents and businesses. We understand the unique requirements of each city within the county and provide tailored services to meet your specific needs, whether you're in a bustling urban area or a quiet suburban neighborhood.
            </p>
          </section>

          {/* Dumpster Calculator */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Calculate Your Salt Lake County Dumpster Needs
            </h2>
            <DumpsterCalculator />
          </section>

          {/* Coverage Areas */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Salt Lake County Coverage Areas
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md border">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Major Cities</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Salt Lake City</li>
                  <li>• West Valley City</li>
                  <li>• Sandy</li>
                  <li>• Murray</li>
                  <li>• Taylorsville</li>
                  <li>• South Jordan</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Suburban Areas</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• West Jordan</li>
                  <li>• Draper</li>
                  <li>• Riverton</li>
                  <li>• Herriman</li>
                  <li>• Bluffdale</li>
                  <li>• Midvale</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Other Communities</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Cottonwood Heights</li>
                  <li>• Holladay</li>
                  <li>• Magna</li>
                  <li>• Kearns</li>
                  <li>• Unincorporated areas</li>
                  <li>• All county locations</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Salt Lake County Dumpster Rental Pricing
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md border border-indigo-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">10-Yard Dumpster</h3>
                <p className="text-3xl font-bold text-indigo-600 mb-2">$200</p>
                <p className="text-gray-600 mb-4">Perfect for small projects</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Garage cleanup</li>
                  <li>• Small renovation</li>
                  <li>• Yard waste removal</li>
                  <li>• 7-day rental included</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-indigo-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">15-Yard Dumpster</h3>
                <p className="text-3xl font-bold text-indigo-600 mb-2">$250</p>
                <p className="text-gray-600 mb-4">Ideal for medium projects</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Bathroom renovation</li>
                  <li>• Basement cleanup</li>
                  <li>• Roof replacement</li>
                  <li>• 10-day rental included</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-indigo-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">20-Yard Dumpster</h3>
                <p className="text-3xl font-bold text-indigo-600 mb-2">$300</p>
                <p className="text-gray-600 mb-4">Great for large projects</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Whole house renovation</li>
                  <li>• Commercial cleanup</li>
                  <li>• Large demolition</li>
                  <li>• 14-day rental included</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-indigo-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">30-Yard Dumpster</h3>
                <p className="text-3xl font-bold text-indigo-600 mb-2">$400</p>
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
              Why Choose Icon Dumpsters for Salt Lake County?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">County-Wide Coverage</h3>
                <p className="text-gray-700 mb-4">
                  We serve every city and community within Salt Lake County, from the urban core of Salt Lake City to the suburban areas of Draper and Herriman. Our extensive network ensures fast, reliable service regardless of your location.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Local Expertise</h3>
                <p className="text-gray-700 mb-4">
                  Our team understands the unique regulations and requirements of each Salt Lake County city. We handle all permit applications and ensure compliance with local ordinances, saving you time and hassle.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Same-Day Delivery</h3>
                <p className="text-gray-700 mb-4">
                  Need a dumpster fast? We offer same-day delivery throughout Salt Lake County when you call before 2 PM. Our strategic locations and efficient fleet allow us to provide quick service to all county locations.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Competitive Pricing</h3>
                <p className="text-gray-700 mb-4">
                  We offer transparent, competitive pricing for all Salt Lake County locations. No hidden fees, no surprises. Get a clear, upfront quote that includes delivery, pickup, and disposal costs.
                </p>
              </div>
            </div>
          </section>

          {/* Local Regulations */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Salt Lake County Dumpster Rental Regulations
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">General County Guidelines</h3>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>• Dumpsters cannot block sidewalks, driveways, or public rights-of-way</li>
                <li>• Street placement may require permits from individual cities</li>
                <li>• Maximum rental periods vary by city (typically 7-30 days)</li>
                <li>• Proper covering may be required to prevent debris from blowing</li>
                <li>• Some cities require specific placement locations</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">City-Specific Requirements</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Salt Lake City</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Permit required for street placement</li>
                    <li>• Maximum 14-day rental period</li>
                    <li>• Specific placement guidelines</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">West Valley City</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Permit required for all placements</li>
                    <li>• Maximum 30-day rental period</li>
                    <li>• Must be on private property</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions - Salt Lake County Dumpster Rental
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
            <div className="bg-indigo-600 text-white p-8 rounded-lg text-center">
              <h2 className="text-3xl font-bold mb-4">Ready for Your Salt Lake County Project?</h2>
              <p className="text-xl mb-6">
                Get your dumpster rental quote today and enjoy reliable service throughout Salt Lake County.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Free Quote
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors">
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
                  <a href="/dumpster-rental-west-valley" className="text-indigo-600 hover:text-indigo-800">
                    West Valley Dumpster Rental Guide
                  </a>
                </h3>
                <p className="text-gray-700">
                  Complete guide to dumpster rental services in West Valley City, including local regulations and pricing.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  <a href="/dumpster-rental-sandy-utah" className="text-indigo-600 hover:text-indigo-800">
                    Sandy, Utah Dumpster Rental Services
                  </a>
                </h3>
                <p className="text-gray-700">
                  Everything you need to know about dumpster rental in Sandy, Utah, including local requirements and service options.
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
                <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors">
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

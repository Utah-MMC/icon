"use client";

import React from 'react';
import Analytics from '../components/PageAnalytics';
import ArticleSchema from '../components/ArticleSchema';
import FAQSchema from '../components/FAQSchema';
import DumpsterCalculator from '../components/DumpsterCalculator';
import ImageWithFallback from '../components/ImageWithFallback';

export default function MurrayCityDumpsterProgramPage() {
  const pageUrl = '/murray-city-dumpster-program';
  const pageTitle = 'Murray City Dumpster Program - Municipal Waste Services | Icon Dumpsters';
  const pageDescription = 'Learn about Murray City dumpster programs, municipal waste services, and how to participate in local waste management initiatives. Get information about city-sponsored dumpster services.';
  const pageKeywords = 'Murray City dumpster program, municipal waste services Murray, city dumpster program Murray UT, Murray waste management, Murray City garbage services';

  const faqs = [
    {
      question: "What is the Murray City dumpster program?",
      answer: "The Murray City dumpster program is a municipal waste management initiative that provides residents and businesses with access to dumpster services for large-scale cleanup projects, construction debris removal, and special waste disposal needs. The program is designed to help maintain clean neighborhoods and proper waste disposal."
    },
    {
      question: "How do I participate in the Murray City dumpster program?",
      answer: "To participate in the Murray City dumpster program, contact the Murray City Public Works Department or visit their website to apply for a dumpster permit. You'll need to provide project details, location information, and pay any applicable fees. The city will coordinate delivery and pickup of the dumpster."
    },
    {
      question: "What are the costs associated with the Murray City dumpster program?",
      answer: "Costs for the Murray City dumpster program vary depending on dumpster size, rental duration, and type of waste being disposed. There are typically permit fees, rental fees, and disposal charges. Contact Murray City Public Works for current pricing and fee schedules."
    },
    {
      question: "What types of waste are accepted in the Murray City dumpster program?",
      answer: "The Murray City dumpster program accepts construction and demolition debris, household junk, yard waste, and general non-hazardous materials. Prohibited items include hazardous materials, electronics, appliances with refrigerants, and medical waste. Check with the city for specific guidelines."
    },
    {
      question: "How long can I keep a dumpster from the Murray City program?",
      answer: "Dumpster rental periods through the Murray City program are typically limited to 7-14 days, though extensions may be available for special circumstances. The city sets these limits to ensure fair access for all residents and to maintain efficient waste management operations."
    },
    {
      question: "Are there alternatives to the Murray City dumpster program?",
      answer: "Yes, private dumpster rental companies like Icon Dumpsters offer alternative services in Murray City. Private companies often provide more flexible rental terms, faster delivery, and competitive pricing. You can choose between municipal and private services based on your specific needs."
    }
  ];

  return (
    <>
      <Analytics pageName="Murray City Dumpster Program" pageType="page" />
      <ArticleSchema
        title={pageTitle}
        description={pageDescription}
        imageUrl="/images/murray-city-dumpster-program.jpg"
        publishedDate="2024-01-15T08:00:00.000Z"
        modifiedDate="2024-01-15T08:00:00.000Z"
        author="Icon Dumpsters"
        articleUrl={pageUrl}
        category="DUMPSTER RENTAL"
        readTime="8 min read"
      />
      <FAQSchema faqs={faqs} pageUrl={pageUrl} />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Murray City Dumpster Program
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Learn about Murray City's municipal waste management programs, dumpster services, and how to participate in local waste disposal initiatives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Learn More
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                  Contact City
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Content Outline */}
          <div className="bg-purple-50 border-l-4 border-purple-400 p-6 mb-8">
            <h2 className="text-xl font-semibold text-purple-900 mb-3">What You'll Learn:</h2>
            <ul className="text-purple-800 space-y-1">
              <li>• Murray City dumpster program overview</li>
              <li>• How to participate in municipal services</li>
              <li>• Program costs and requirements</li>
              <li>• Accepted materials and restrictions</li>
              <li>• Alternative private services</li>
              <li>• Contact information and resources</li>
            </ul>
          </div>

          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Understanding the Murray City Dumpster Program
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              The Murray City dumpster program is a comprehensive municipal waste management initiative designed to help residents and businesses maintain clean, safe neighborhoods while properly disposing of large amounts of waste. This program is part of Murray City's commitment to environmental stewardship and community cleanliness.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Whether you're planning a major home renovation, cleaning up after a construction project, or need to dispose of large amounts of yard waste, the Murray City dumpster program provides a structured, regulated approach to waste disposal that benefits the entire community.
            </p>
          </section>

          {/* Dumpster Calculator */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Calculate Your Waste Disposal Needs
            </h2>
            <DumpsterCalculator />
          </section>

          {/* Program Overview */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Murray City Dumpster Program Overview
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Program Purpose</h3>
                <p className="text-gray-700 mb-4">
                  The Murray City dumpster program serves multiple purposes: it helps maintain neighborhood cleanliness, provides residents with affordable waste disposal options, and ensures proper handling of construction and demolition debris. The program is designed to prevent illegal dumping and promote responsible waste management.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Eligibility</h3>
                <p className="text-gray-700 mb-4">
                  The program is available to Murray City residents and businesses. You must provide proof of residency or business ownership within Murray City limits. The program is particularly beneficial for large cleanup projects that exceed regular garbage service capacity.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Program Benefits</h3>
                <ul className="text-gray-700 space-y-2 mb-4">
                  <li>• Regulated waste disposal</li>
                  <li>• Environmental protection</li>
                  <li>• Community cleanliness</li>
                  <li>• Cost-effective solutions</li>
                  <li>• Proper material handling</li>
                </ul>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Program Limitations</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Limited availability</li>
                  <li>• Restricted rental periods</li>
                  <li>• Specific material restrictions</li>
                  <li>• Permit requirements</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How to Participate */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              How to Participate in the Murray City Dumpster Program
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Step-by-Step Process</h3>
              <ol className="text-gray-700 space-y-3 mb-6">
                <li><strong>Contact Murray City Public Works:</strong> Call or visit the Public Works Department to inquire about dumpster availability and requirements.</li>
                <li><strong>Submit Application:</strong> Complete the required application form with project details, location, and waste type information.</li>
                <li><strong>Pay Fees:</strong> Pay any applicable permit fees, rental charges, and disposal costs as determined by the city.</li>
                <li><strong>Receive Permit:</strong> Once approved, you'll receive a permit authorizing the dumpster placement.</li>
                <li><strong>Schedule Delivery:</strong> Coordinate with the city for dumpster delivery to your specified location.</li>
                <li><strong>Use and Return:</strong> Fill the dumpster according to guidelines and schedule pickup when complete.</li>
              </ol>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Required Documentation</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Proof of Murray City residency or business ownership</li>
                <li>• Project description and timeline</li>
                <li>• Waste type and estimated volume</li>
                <li>• Property owner permission (if applicable)</li>
                <li>• Site plan showing dumpster placement</li>
              </ul>
            </div>
          </section>

          {/* Costs and Fees */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Murray City Dumpster Program Costs
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Fee Structure</h3>
                <p className="text-gray-700 mb-4">
                  The Murray City dumpster program operates on a fee-based system. Costs typically include permit fees, rental charges, and disposal fees. The exact amount depends on dumpster size, rental duration, and type of waste being disposed.
                </p>
                <p className="text-gray-700 mb-4">
                  Residents may qualify for reduced rates compared to commercial users. The city periodically reviews and adjusts fees to maintain program sustainability while providing affordable access to waste disposal services.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Payment Options</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Cash or check payments</li>
                  <li>• Credit card payments (if available)</li>
                  <li>• Payment plans for large projects</li>
                  <li>• Deposit requirements</li>
                  <li>• Refund policies</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Accepted Materials */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Materials Accepted in Murray City Dumpster Program
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Accepted Materials</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Construction and demolition debris</li>
                  <li>• Household furniture and appliances</li>
                  <li>• Yard waste and landscaping materials</li>
                  <li>• General household junk</li>
                  <li>• Non-hazardous building materials</li>
                  <li>• Clean wood and lumber</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Prohibited Materials</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Hazardous chemicals and materials</li>
                  <li>• Electronics and e-waste</li>
                  <li>• Appliances with refrigerants</li>
                  <li>• Medical waste and biohazards</li>
                  <li>• Tires and automotive parts</li>
                  <li>• Asbestos-containing materials</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Alternative Services */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Alternative Dumpster Services in Murray City
            </h2>
            <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
              <h3 className="text-xl font-semibold text-purple-900 mb-4">Private Dumpster Rental Services</h3>
              <p className="text-purple-800 mb-4">
                While the Murray City dumpster program provides valuable municipal services, private companies like Icon Dumpsters offer alternative options that may better suit your specific needs. Private services often provide:
              </p>
              <ul className="text-purple-800 space-y-2 mb-4">
                <li>• More flexible rental periods</li>
                <li>• Faster delivery and pickup</li>
                <li>• Competitive pricing</li>
                <li>• Extended customer service hours</li>
                <li>• Specialized waste handling</li>
              </ul>
              <p className="text-purple-800">
                Consider both municipal and private options to determine which service best meets your project requirements, timeline, and budget.
              </p>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions - Murray City Dumpster Program
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

          {/* Contact Information */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Contact Murray City Dumpster Program
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Murray City Public Works Department</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-700 mb-2"><strong>Phone:</strong> (801) 264-2660</p>
                  <p className="text-gray-700 mb-2"><strong>Email:</strong> publicworks@murray.utah.gov</p>
                  <p className="text-gray-700 mb-2"><strong>Address:</strong> 5025 S State St, Murray, UT 84107</p>
                </div>
                <div>
                  <p className="text-gray-700 mb-2"><strong>Hours:</strong> Monday-Friday, 8:00 AM - 5:00 PM</p>
                  <p className="text-gray-700 mb-2"><strong>Website:</strong> <a href="https://www.google.com/maps/search/Murray+City+Hall+Utah" className="text-blue-600 hover:underline">Murray City Hall</a></p>
                  <p className="text-gray-700 mb-2"><strong>Emergency:</strong> (801) 264-2660</p>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="mb-12">
            <div className="bg-purple-600 text-white p-8 rounded-lg text-center">
              <h2 className="text-3xl font-bold mb-4">Need Dumpster Services in Murray City?</h2>
              <p className="text-xl mb-6">
                Whether you choose municipal services or private rental, we're here to help with your waste disposal needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Private Quote
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                  Contact City
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
                  <a href="https://icondumpsters.com/murray-city-dumpster-rental" className="text-purple-600 hover:text-purple-800">
                    Murray City Dumpster Rental Services
                  </a>
                </h3>
                <p className="text-gray-700">
                  Comprehensive guide to dumpster rental services in Murray City, including pricing and local regulations.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  <a href="https://icondumpsters.com/salt-lake-county-dumpster-program" className="text-purple-600 hover:text-purple-800">
                    Salt Lake County Dumpster Programs
                  </a>
                </h3>
                <p className="text-gray-700">
                  Overview of dumpster programs and waste management services throughout Salt Lake County.
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
                <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors">
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

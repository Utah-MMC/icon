import type { Metadata } from "next";
import ImageWithFallback from "../components/ImageWithFallback";
import Link from "next/link";
import Analytics from "../components/PageAnalytics";
import ArticleSchema from "../components/ArticleSchema";
import FAQSchema from "../components/FAQSchema";
import CallToActionBanner from "../components/CallToActionBanner";
import DumpsterCalculatorPageClient from "./DumpsterCalculatorPageClient";
import PageHero from "../components/PageHero";

export const metadata: Metadata = {
  title: "Dumpster Calculator – Costs, Weight, Delivery Fees | Icon Dumpsters",
  description: "Calculate dumpster rental costs, weight estimates, and delivery fees for 15, 20, and 30‑yard dumpsters in Utah. Get an instant estimate.",
  alternates: { canonical: "/dumpster-calculator" }
};

export default function DumpsterCalculatorPage() {
  return (
    <>
      <Analytics
        pageName="Dumpster Calculator - Calculate Dumpster Rental Costs & Weight"
        pageType="article"
        articleId="dumpster-calculator"
      />
      <ArticleSchema
        title="Dumpster Calculator - Calculate Dumpster Rental Costs & Weight"
        description="Use our advanced dumpster calculator to estimate rental costs, weight limits, and delivery fees. Get instant quotes for 15, 20, and 30-yard dumpsters in Utah."
        author="Icon Dumpsters"
        publishedDate="2025-01-27"
        modifiedDate="2025-01-27"
        imageUrl="https://icondumpsters.com/images/dumpster500x500-2.jpeg"
        articleUrl="https://icondumpsters.com/dumpster-calculator"
        category="CALCULATOR"
        readTime="PT8M"
      />
      <FAQSchema
        pageUrl="https://icondumpsters.com/dumpster-calculator"
        faqs={[
          {
            question: "How does the dumpster calculator work?",
            answer: "Our dumpster calculator uses your zip code to find the nearest hub, calculates delivery distance, and factors in dumpster size, rental duration, and any applicable discounts. It provides a detailed breakdown of costs including base rental, delivery fees, and additional charges."
          },
          {
            question: "What weight limits apply to dumpster rentals?",
            answer: "Weight limits vary by dumpster size: 15-yard dumpsters have a 3-ton limit, 20-yard dumpsters have a 4-ton limit, and 30-yard dumpsters have a 6-ton limit. Additional weight is charged at $55 per ton after the dumpster is weighed at the disposal facility."
          },
          {
            question: "How do I avoid overweight charges?",
            answer: "Use our weight calculator to estimate your waste weight before filling the dumpster. Heavy materials like concrete, dirt, and construction debris can quickly reach weight limits. Consider the type of materials you're disposing of and choose an appropriate dumpster size."
          },
          {
            question: "What delivery fees apply to my location?",
            answer: "Delivery is free within Salt Lake County and within 10 miles of our hubs. Beyond these areas, delivery fees are calculated based on distance and include both fuel costs and driver time. The calculator automatically determines these fees based on your zip code."
          }
        ]}
      />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <PageHero
          title="Dumpster Calculator"
          subtitle="Calculate dumpster rental costs, weight limits, and delivery fees. Get instant estimates for your project."
          primaryCtaText="START CALCULATING"
          primaryCtaLink="#calculator"
          secondaryCtaText="Call (801) 918-6000"
          secondaryCtaLink="tel:(801) 918-6000"
        />

        {/* Calculator Section */}
        <section id="calculator" className="py-16 bg-gray-50">
          <DumpsterCalculatorPageClient />
        </section>

        {/* Call to Action Banner */}
        <CallToActionBanner />

        {/* Tonnage Calculator moved to its own page */}
        <section className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Need Material Weight Estimates?</h2>
            <p className="text-lg text-gray-600 mb-6">Use our dedicated tonnage calculator to estimate weights for concrete, dirt, roofing and more.</p>
            <Link href="/tonnage-calculator" className="inline-block bg-[#4e37a8] text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700">Open Tonnage Calculator</Link>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-8 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                How Our Dumpster Calculator Works
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our advanced calculator provides accurate estimates by considering multiple factors that affect your final cost.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded-xl shadow-lg">
                <div className="bg-blue-100 text-blue-600 w-10 h-10 rounded-full flex items-center justify-center mb-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Location-Based Pricing</h3>
                <p className="text-sm text-gray-600">Enter your zip code and our calculator automatically finds the nearest hub and calculates delivery distance and fees.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-lg">
                <div className="bg-green-100 text-green-600 w-10 h-10 rounded-full flex items-center justify-center mb-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Weight Calculation</h3>
                <p className="text-sm text-gray-600">Use our weight calculator to estimate your waste weight and avoid overweight charges that can add significant costs.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-lg">
                <div className="bg-purple-100 text-purple-600 w-10 h-10 rounded-full flex items-center justify-center mb-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Transparent Pricing</h3>
                <p className="text-sm text-gray-600">Get a detailed breakdown of all costs including base rental, delivery fees, and any additional charges.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-lg">
                <div className="bg-yellow-100 text-yellow-600 w-10 h-10 rounded-full flex items-center justify-center mb-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Special Rates</h3>
                <p className="text-sm text-gray-600">Access to 1-day special rates, veteran discounts, and bundle pricing for longer rentals.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-lg">
                <div className="bg-red-100 text-red-600 w-10 h-10 rounded-full flex items-center justify-center mb-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Instant Results</h3>
                <p className="text-sm text-gray-600">Get immediate cost estimates with detailed breakdowns to help you make informed decisions.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-lg">
                <div className="bg-indigo-100 text-indigo-600 w-10 h-10 rounded-full flex items-center justify-center mb-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Expert Guidance</h3>
                <p className="text-sm text-gray-600">Our calculator helps you choose the right dumpster size and avoid common pitfalls like overweight charges.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-[#4e37a8] to-purple-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Your Exact Quote?
            </h2>
            <p className="text-xl mb-8 text-purple-100">
              Use our calculator above for instant estimates, or contact us for personalized assistance with your dumpster rental needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/#quote-form" 
                className="bg-white text-[#4e37a8] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Quote
              </Link>
              <a 
                href="tel:(801) 918-6000" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#4e37a8] transition-colors"
              >
                Call (801) 918-6000
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

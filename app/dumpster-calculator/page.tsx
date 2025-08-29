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
  keywords: "dumpster calculator, dumpster rental costs, dumpster weight calculator, dumpster delivery fees, Utah dumpster rental calculator, roll-off dumpster pricing, dumpster rental estimate",
  openGraph: {
    title: "Dumpster Calculator – Costs, Weight, Delivery Fees | Icon Dumpsters",
    description: "Calculate dumpster rental costs, weight estimates, and delivery fees for 15, 20, and 30‑yard dumpsters in Utah. Get an instant estimate.",
    url: 'https://icondumpsters.com/dumpster-calculator',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/Icon_Dumpsters_Final.png',
        width: 1200,
        height: 630,
        alt: 'Dumpster Calculator - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Dumpster Calculator – Costs, Weight, Delivery Fees | Icon Dumpsters",
    description: "Calculate dumpster rental costs, weight estimates, and delivery fees for 15, 20, and 30‑yard dumpsters in Utah. Get an instant estimate.",
    images: ['/images/Icon_Dumpsters_Final.png'],
  },
  alternates: { 
    canonical: "https://icondumpsters.com/dumpster-calculator" 
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function DumpsterCalculatorPage() {
  return (
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
              <a 
                href="sms:+18019186000?body=Hi! I need a dumpster quote from your calculator."
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#4e37a8] transition-colors"
              >
                <svg className="w-4 h-4 inline mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
                </svg>
                Text Us
              </a>
            </div>
          </div>
        </section>
      </div>
  );
}

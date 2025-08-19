"use client";

import ImageWithFallback from "../components/ImageWithFallback";
import Link from "next/link";
import Analytics from "../components/Analytics";
import ArticleSchema from "../components/ArticleSchema";
import FAQSchema from "../components/FAQSchema";
import DumpsterCalculator from "../components/DumpsterCalculator";
import CallToActionBanner from "../components/CallToActionBanner";

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
        <section className="relative bg-gradient-to-r from-[#4e37a8] to-purple-700 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Dumpster Calculator
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Calculate dumpster rental costs, weight limits, and delivery fees. Get instant estimates for your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="#calculator" 
                className="bg-white text-[#4e37a8] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                START CALCULATING
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

        {/* Calculator Section */}
        <section id="calculator" className="py-16 bg-gray-50">
          <DumpsterCalculator />
        </section>

        {/* Call to Action Banner */}
        <CallToActionBanner />

        {/* Weight Calculator Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Dumpster Weight Calculator
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Estimate the weight of your waste to avoid overweight charges and choose the right dumpster size.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Weight Calculator Form */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Calculate Your Waste Weight</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Concrete & Masonry</label>
                      <div className="flex items-center space-x-2">
                        <input
                          type="number"
                          id="concrete"
                          placeholder="0"
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4e37a8] focus:border-transparent"
                        />
                        <span className="text-sm text-gray-600">cubic yards</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Weight: ~2.5 tons per cubic yard</p>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Dirt & Soil</label>
                      <div className="flex items-center space-x-2">
                        <input
                          type="number"
                          id="dirt"
                          placeholder="0"
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4e37a8] focus:border-transparent"
                        />
                        <span className="text-sm text-gray-600">cubic yards</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Weight: ~1.5 tons per cubic yard</p>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Construction Debris</label>
                      <div className="flex items-center space-x-2">
                        <input
                          type="number"
                          id="construction"
                          placeholder="0"
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4e37a8] focus:border-transparent"
                        />
                        <span className="text-sm text-gray-600">cubic yards</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Weight: ~1.0 tons per cubic yard</p>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Wood & Lumber</label>
                      <div className="flex items-center space-x-2">
                        <input
                          type="number"
                          id="wood"
                          placeholder="0"
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4e37a8] focus:border-transparent"
                        />
                        <span className="text-sm text-gray-600">cubic yards</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Weight: ~0.5 tons per cubic yard</p>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Cardboard & Paper</label>
                      <div className="flex items-center space-x-2">
                        <input
                          type="number"
                          id="cardboard"
                          placeholder="0"
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4e37a8] focus:border-transparent"
                        />
                        <span className="text-sm text-gray-600">cubic yards</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Weight: ~0.1 tons per cubic yard</p>
                    </div>

                    <button
                      onClick={() => {
                        const concrete = parseFloat((document.getElementById('concrete') as HTMLInputElement)?.value || '0');
                        const dirt = parseFloat((document.getElementById('dirt') as HTMLInputElement)?.value || '0');
                        const construction = parseFloat((document.getElementById('construction') as HTMLInputElement)?.value || '0');
                        const wood = parseFloat((document.getElementById('wood') as HTMLInputElement)?.value || '0');
                        const cardboard = parseFloat((document.getElementById('cardboard') as HTMLInputElement)?.value || '0');

                        const totalWeight = (concrete * 2.5) + (dirt * 1.5) + (construction * 1.0) + (wood * 0.5) + (cardboard * 0.1);
                        const totalVolume = concrete + dirt + construction + wood + cardboard;

                        const resultDiv = document.getElementById('weightResult');
                        if (resultDiv) {
                          resultDiv.innerHTML = `
                            <div class="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-lg border-2 border-green-200">
                              <h4 class="text-lg font-bold text-green-800 mb-3">📊 Weight Calculation Results</h4>
                              <div class="grid grid-cols-2 gap-4 mb-4">
                                <div class="text-center">
                                  <div class="text-2xl font-bold text-green-600">${totalWeight.toFixed(1)}</div>
                                  <div class="text-sm text-gray-600">Total Tons</div>
                                </div>
                                <div class="text-center">
                                  <div class="text-2xl font-bold text-blue-600">${totalVolume.toFixed(1)}</div>
                                  <div class="text-sm text-gray-600">Cubic Yards</div>
                                </div>
                              </div>
                              <div class="space-y-2 text-sm">
                                <div class="flex justify-between">
                                  <span>Concrete: ${(concrete * 2.5).toFixed(1)} tons</span>
                                  <span>${concrete.toFixed(1)} cu yd</span>
                                </div>
                                <div class="flex justify-between">
                                  <span>Dirt: ${(dirt * 1.5).toFixed(1)} tons</span>
                                  <span>${dirt.toFixed(1)} cu yd</span>
                                </div>
                                <div class="flex justify-between">
                                  <span>Construction: ${(construction * 1.0).toFixed(1)} tons</span>
                                  <span>${construction.toFixed(1)} cu yd</span>
                                </div>
                                <div class="flex justify-between">
                                  <span>Wood: ${(wood * 0.5).toFixed(1)} tons</span>
                                  <span>${wood.toFixed(1)} cu yd</span>
                                </div>
                                <div class="flex justify-between">
                                  <span>Cardboard: ${(cardboard * 0.1).toFixed(1)} tons</span>
                                  <span>${cardboard.toFixed(1)} cu yd</span>
                                </div>
                              </div>
                              <div class="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                                <p class="text-sm text-yellow-800">
                                  <strong>Recommendation:</strong> ${totalWeight <= 3 ? '15-yard dumpster' : totalWeight <= 4 ? '20-yard dumpster' : '30-yard dumpster'} would be appropriate for this weight.
                                </p>
                              </div>
                            </div>
                          `;
                          resultDiv.classList.remove('hidden');
                        }
                      }}
                      className="w-full bg-gradient-to-r from-[#4e37a8] to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-[#4e37a8] transition-all duration-300"
                    >
                      Calculate Weight
                    </button>
                  </div>
                </div>

                {/* Weight Information */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Weight Limits & Guidelines</h3>
                  
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <h4 className="font-semibold text-blue-900 mb-2">Dumpster Weight Limits</h4>
                      <div className="space-y-2 text-sm text-blue-800">
                        <div className="flex justify-between">
                          <span>15-Yard Dumpster:</span>
                          <span className="font-semibold">3 tons</span>
                        </div>
                        <div className="flex justify-between">
                          <span>20-Yard Dumpster:</span>
                          <span className="font-semibold">4 tons</span>
                        </div>
                        <div className="flex justify-between">
                          <span>30-Yard Dumpster:</span>
                          <span className="font-semibold">6 tons</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <h4 className="font-semibold text-green-900 mb-2">Material Weight Guide</h4>
                      <div className="space-y-1 text-sm text-green-800">
                        <div className="flex justify-between">
                          <span>Concrete:</span>
                          <span>2.5 tons/cu yd</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Asphalt:</span>
                          <span>2.0 tons/cu yd</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Brick:</span>
                          <span>2.0 tons/cu yd</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Dirt/Soil:</span>
                          <span>1.5 tons/cu yd</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Construction Debris:</span>
                          <span>1.0 tons/cu yd</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Wood/Lumber:</span>
                          <span>0.5 tons/cu yd</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Cardboard/Paper:</span>
                          <span>0.1 tons/cu yd</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                      <h4 className="font-semibold text-red-900 mb-2">Avoid Overweight Charges</h4>
                      <ul className="text-sm text-red-800 space-y-1">
                        <li>• Additional weight is charged at $55 per ton</li>
                        <li>• Heavy materials can quickly reach limits</li>
                        <li>• Consider material density when estimating</li>
                        <li>• When in doubt, choose a larger dumpster</li>
                      </ul>
                    </div>
                  </div>

                  {/* Weight Calculation Result */}
                  <div id="weightResult" className="hidden mt-6"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How Our Dumpster Calculator Works
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our advanced calculator provides accurate estimates by considering multiple factors that affect your final cost.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Location-Based Pricing</h3>
                <p className="text-gray-600">Enter your zip code and our calculator automatically finds the nearest hub and calculates delivery distance and fees.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="bg-green-100 text-green-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Weight Calculation</h3>
                <p className="text-gray-600">Use our weight calculator to estimate your waste weight and avoid overweight charges that can add significant costs.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="bg-purple-100 text-purple-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Transparent Pricing</h3>
                <p className="text-gray-600">Get a detailed breakdown of all costs including base rental, delivery fees, and any additional charges.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="bg-yellow-100 text-yellow-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Special Rates</h3>
                <p className="text-gray-600">Access to 1-day special rates, veteran discounts, and bundle pricing for longer rentals.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="bg-red-100 text-red-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Instant Results</h3>
                <p className="text-gray-600">Get immediate cost estimates with detailed breakdowns to help you make informed decisions.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="bg-indigo-100 text-indigo-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Guidance</h3>
                <p className="text-gray-600">Our calculator helps you choose the right dumpster size and avoid common pitfalls like overweight charges.</p>
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

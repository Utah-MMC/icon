# PowerShell script to update all city guide pages with optimized template
# This script will update all city guide pages to match the Murray template

$cities = @(
    "american-fork",
    "bountiful", 
    "centerville",
    "clearfield",
    "cottonwood-heights",
    "downtown-salt-lake",
    "draper",
    "eagle-mountain",
    "fairpark",
    "farmington",
    "glendale",
    "herriman",
    "holladay",
    "kaysville",
    "kearns",
    "layton",
    "lehi",
    "magna",
    "midvale",
    "millcreek",
    "north-salt-lake",
    "ogden",
    "orem",
    "park-city",
    "pleasant-grove",
    "poplar-grove",
    "provo",
    "riverton",
    "roy",
    "sandy",
    "saratoga-springs",
    "south-jordan",
    "south-salt-lake",
    "sugar-house",
    "syracuse",
    "taylorsville",
    "tooele",
    "west-jordan",
    "west-valley-city",
    "woods-cross"
)

$template = @'
'use client';

import Link from 'next/link';
import { Metadata } from 'next';
import Head from 'next/head';

export default function {CITY_NAME}DumpsterRentalGuide2025() {
  return (
    <>
      <Head>
        <title>{CITY_DISPLAY} Dumpster Rental Guide 2025 | Best Prices & Same-Day Delivery | Icon Dumpsters</title>
        <meta name="description" content="Complete {CITY_DISPLAY} dumpster rental guide for 2025. Get same-day delivery, competitive pricing, and expert service. 15, 20, 30-yard dumpsters available. Free quotes!" />
        <meta name="keywords" content="{CITY_DISPLAY} dumpster rental, roll-off dumpster {CITY_DISPLAY}, dumpster rental near me, Utah dumpster rental, {CITY_DISPLAY} Utah dumpster, construction dumpster {CITY_DISPLAY}, home renovation dumpster {CITY_DISPLAY}" />
        <meta property="og:title" content="{CITY_DISPLAY} Dumpster Rental Guide 2025 | Icon Dumpsters" />
        <meta property="og:description" content="Complete guide to dumpster rental in {CITY_DISPLAY}, Utah. Same-day delivery, competitive pricing, expert service. Get your free quote today!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://icondumpsters.com/{CITY_SLUG}-dumpster-rental-guide-2025" />
        <link rel="canonical" href="https://icondumpsters.com/{CITY_SLUG}-dumpster-rental-guide-2025" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center justify-between">
              <div className="flex items-center space-x-8">
                <Link href="/" className="text-2xl font-bold text-gray-900">
                  Icon Dumpsters
                </Link>
                <div className="hidden md:flex space-x-6">
                  <Link href="/" className="hover:text-purple-600 transition-colors">Home</Link>
                  <Link href="/{CITY_SLUG}" className="hover:text-purple-600 transition-colors">{CITY_DISPLAY}</Link>
                  <Link href="/blog" className="hover:text-purple-600 transition-colors">Blog</Link>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Link 
                  href="/freequote"
                  className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Get Quote
                </Link>
              </div>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <article className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Complete {CITY_DISPLAY} Dumpster Rental Guide 2025
              </h1>
              <p className="text-xl opacity-90 mb-4">
                Everything you need to know about renting dumpsters in {CITY_DISPLAY}, Utah
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">Same-Day Delivery</span>
                <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">Competitive Pricing</span>
                <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">Expert Service</span>
              </div>
            </div>

            {/* Table of Contents */}
            <div className="bg-gray-50 p-6 border-b">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Table of Contents</h2>
              <nav className="space-y-2">
                <a href="#why-choose" className="block text-purple-600 hover:text-purple-800">Why Choose Icon Dumpsters in {CITY_DISPLAY}?</a>
                <a href="#service-areas" className="block text-purple-600 hover:text-purple-800">{CITY_DISPLAY} Service Areas</a>
                <a href="#dumpster-sizes" className="block text-purple-600 hover:text-purple-800">Dumpster Sizes & Pricing</a>
                <a href="#common-uses" className="block text-purple-600 hover:text-purple-800">Common Uses in {CITY_DISPLAY}</a>
                <a href="#regulations" className="block text-purple-600 hover:text-purple-800">{CITY_DISPLAY} Regulations & Permits</a>
                <a href="#how-to-start" className="block text-purple-600 hover:text-purple-800">How to Get Started</a>
                <a href="#faq" className="block text-purple-600 hover:text-purple-800">Frequently Asked Questions</a>
              </nav>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="prose max-w-none">
                {/* Why Choose Section */}
                <section id="why-choose">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Icon Dumpsters in {CITY_DISPLAY}?</h2>
                  <p className="text-lg text-gray-700 mb-6">
                    {CITY_DISPLAY} residents and businesses trust Icon Dumpsters for reliable, affordable dumpster rental services. 
                    We've been serving the Salt Lake Valley for years, providing exceptional customer service and competitive pricing.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-purple-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-purple-900 mb-3">🚚 Same-Day Delivery</h3>
                      <p className="text-gray-700">Get your dumpster delivered the same day you order, even on weekends and holidays.</p>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-blue-900 mb-3">💰 Competitive Pricing</h3>
                      <p className="text-gray-700">Transparent pricing with no hidden fees. Get the best value for your money.</p>
                    </div>
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-green-900 mb-3">👨‍🔧 Expert Service</h3>
                      <p className="text-gray-700">Our experienced team ensures proper placement and timely pickup.</p>
                    </div>
                    <div className="bg-orange-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-orange-900 mb-3">🌱 Eco-Friendly</h3>
                      <p className="text-gray-700">We recycle and dispose of waste responsibly, protecting {CITY_DISPLAY}'s environment.</p>
                    </div>
                  </div>
                </section>

                {/* Service Areas Section */}
                <section id="service-areas">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">{CITY_DISPLAY} Service Areas</h2>
                  <p className="text-lg text-gray-700 mb-6">
                    We serve all of {CITY_DISPLAY} and surrounding communities, ensuring convenient access to dumpster rental services throughout the area.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-4 mb-8">
                    <div className="bg-white border border-gray-200 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">{CITY_DISPLAY} Central</h4>
                      <p className="text-gray-600 text-sm">Downtown area and main business district</p>
                    </div>
                    <div className="bg-white border border-gray-200 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">{CITY_DISPLAY} East</h4>
                      <p className="text-gray-600 text-sm">Eastern neighborhoods and residential areas</p>
                    </div>
                    <div className="bg-white border border-gray-200 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">{CITY_DISPLAY} West</h4>
                      <p className="text-gray-600 text-sm">Western neighborhoods and commercial areas</p>
                    </div>
                    <div className="bg-white border border-gray-200 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">{CITY_DISPLAY} North</h4>
                      <p className="text-gray-600 text-sm">Northern residential and business areas</p>
                    </div>
                    <div className="bg-white border border-gray-200 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">{CITY_DISPLAY} South</h4>
                      <p className="text-gray-600 text-sm">Southern neighborhoods and industrial areas</p>
                    </div>
                    <div className="bg-white border border-gray-200 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Surrounding Areas</h4>
                      <p className="text-gray-600 text-sm">Nearby cities and communities</p>
                    </div>
                  </div>
                </section>

                {/* Dumpster Sizes Section */}
                <section id="dumpster-sizes">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Dumpster Sizes & Pricing</h2>
                  <p className="text-lg text-gray-700 mb-6">
                    Choose from our range of dumpster sizes to fit your project needs. All prices include delivery, pickup, and disposal fees.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white border-2 border-purple-200 p-6 rounded-lg">
                      <h3 className="text-2xl font-bold text-purple-900 mb-4">15-Yard Dumpster</h3>
                      <p className="text-3xl font-bold text-gray-900 mb-2">$300</p>
                      <p className="text-gray-600 mb-4">Perfect for small projects</p>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• Small home cleanouts</li>
                        <li>• Minor renovations</li>
                        <li>• Garage cleanouts</li>
                        <li>• Yard waste removal</li>
                      </ul>
                      <div className="mt-4 p-3 bg-purple-50 rounded-lg">
                        <p className="text-sm text-purple-800">
                          <strong>Bundle Pricing:</strong><br/>
                          • 3-7 Days: $300<br/>
                          • 1 Day Special: $180<br/>
                          • 30 Days: $500
                        </p>
                      </div>
                      <Link 
                        href="/freequote"
                        className="mt-4 inline-block bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                      >
                        Get Quote
                      </Link>
                    </div>
                    
                    <div className="bg-white border-2 border-blue-200 p-6 rounded-lg">
                      <h3 className="text-2xl font-bold text-blue-900 mb-4">20-Yard Dumpster</h3>
                      <p className="text-3xl font-bold text-gray-900 mb-2">$350</p>
                      <p className="text-gray-600 mb-4">Most popular choice</p>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• Medium-sized projects</li>
                        <li>• Construction debris</li>
                        <li>• Kitchen renovations</li>
                        <li>• Bathroom remodels</li>
                      </ul>
                      <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                        <p className="text-sm text-blue-800">
                          <strong>Bundle Pricing:</strong><br/>
                          • 3-7 Days: $350<br/>
                          • 1 Day Special: $220<br/>
                          • 30 Days: $525
                        </p>
                      </div>
                      <Link 
                        href="/freequote"
                        className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Get Quote
                      </Link>
                    </div>
                    
                    <div className="bg-white border-2 border-green-200 p-6 rounded-lg">
                      <h3 className="text-2xl font-bold text-green-900 mb-4">30-Yard Dumpster</h3>
                      <p className="text-3xl font-bold text-gray-900 mb-2">$375</p>
                      <p className="text-gray-600 mb-4">For large projects</p>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• Large construction projects</li>
                        <li>• Major cleanouts</li>
                        <li>• Commercial projects</li>
                        <li>• Demolition debris</li>
                      </ul>
                      <div className="mt-4 p-3 bg-green-50 rounded-lg">
                        <p className="text-sm text-green-800">
                          <strong>Bundle Pricing:</strong><br/>
                          • 3-7 Days: $375<br/>
                          • 1 Day Special: $280<br/>
                          • 30 Days: $600
                        </p>
                      </div>
                      <Link 
                        href="/freequote"
                        className="mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                      >
                        Get Quote
                      </Link>
                    </div>
                  </div>

                  {/* Specialized Dumpsters */}
                  <div className="mt-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Specialized Dumpsters</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="bg-white border-2 border-orange-200 p-6 rounded-lg">
                        <h4 className="text-xl font-bold text-orange-900 mb-4">10-Yard Clean Dirt</h4>
                        <p className="text-2xl font-bold text-gray-900 mb-2">$375</p>
                        <p className="text-gray-600 mb-4">Clean dirt disposal only</p>
                        <div className="mt-4 p-3 bg-orange-50 rounded-lg">
                          <p className="text-sm text-orange-800">
                            <strong>Bundle Pricing:</strong><br/>
                            • 3-7 Days: $375<br/>
                            • 1 Day Special: $280<br/>
                            • 30 Days: $600
                          </p>
                        </div>
                      </div>
                      
                      <div className="bg-white border-2 border-red-200 p-6 rounded-lg">
                        <h4 className="text-xl font-bold text-red-900 mb-4">10-Yard Mixed Load</h4>
                        <p className="text-2xl font-bold text-gray-900 mb-2">$375</p>
                        <p className="text-gray-600 mb-4">4 tons included</p>
                        <div className="mt-4 p-3 bg-red-50 rounded-lg">
                          <p className="text-sm text-red-800">
                            <strong>Bundle Pricing:</strong><br/>
                            • 3-7 Days: $375<br/>
                            • 1 Day Special: $280<br/>
                            • 30 Days: $600
                          </p>
                        </div>
                      </div>
                      
                      <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                        <h4 className="text-xl font-bold text-gray-900 mb-4">12-Yard Concrete</h4>
                        <p className="text-2xl font-bold text-gray-900 mb-2">$375</p>
                        <p className="text-gray-600 mb-4">Heavy-duty concrete disposal</p>
                        <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                          <p className="text-sm text-gray-800">
                            <strong>Bundle Pricing:</strong><br/>
                            • 3-7 Days: $375<br/>
                            • 1 Day Special: $280<br/>
                            • 30 Days: $600
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Additional Charges */}
                  <div className="mt-8 bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-yellow-900 mb-4">⚠️ Additional Charges</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-yellow-800 mb-2">Weight-Based Pricing</h4>
                        <p className="text-sm text-gray-700">$55 per ton charged after disposal facility weighing</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-yellow-800 mb-2">Special Items</h4>
                        <p className="text-sm text-gray-700">$25 per item for refrigerators, freezers, drinking water coolers, air conditioning units (must drain freon), mattresses/box springs, or tires</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Common Uses Section */}
                <section id="common-uses">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Uses in {CITY_DISPLAY}</h2>
                  <p className="text-lg text-gray-700 mb-6">
                    Our dumpsters are used for various projects throughout {CITY_DISPLAY}, from residential cleanouts to commercial construction.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">🏠 Residential Projects</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Home renovations and remodeling</li>
                        <li>• Garage and basement cleanouts</li>
                        <li>• Estate sales and moving cleanouts</li>
                        <li>• Yard waste and landscaping cleanup</li>
                        <li>• Roof replacement debris</li>
                        <li>• Furniture and appliance disposal</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">🏢 Commercial Projects</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Construction and demolition projects</li>
                        <li>• Commercial property cleanouts</li>
                        <li>• Office renovations</li>
                        <li>• Retail space remodeling</li>
                        <li>• Industrial waste disposal</li>
                        <li>• Construction site cleanup</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Regulations Section */}
                <section id="regulations">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">{CITY_DISPLAY} Regulations & Permits</h2>
                  <p className="text-lg text-gray-700 mb-6">
                    When renting a dumpster in {CITY_DISPLAY}, be aware of local regulations to ensure compliance and avoid fines.
                  </p>
                  
                  <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg mb-6">
                    <h3 className="text-xl font-semibold text-yellow-900 mb-4">⚠️ Important Regulations</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li><strong>Street Placement:</strong> Permits may be required for street placement. Contact {CITY_DISPLAY} for permit information.</li>
                      <li><strong>Restricted Materials:</strong> Hazardous materials, electronics, and certain chemicals are not allowed.</li>
                      <li><strong>Weight Limits:</strong> All dumpsters have weight limits that must be observed.</li>
                      <li><strong>Placement Guidelines:</strong> Dumpsters must be placed on private property when possible.</li>
                      <li><strong>Time Limits:</strong> Street placement is typically limited to 7-14 days.</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-blue-900 mb-4">📞 Need a Permit?</h3>
                    <p className="text-gray-700 mb-4">
                      Contact {CITY_DISPLAY} for permit requirements and applications. We can help guide you through the process.
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>{CITY_DISPLAY} Contact:</strong> Contact local city offices for permit information
                    </p>
                  </div>
                </section>

                {/* How to Start Section */}
                <section id="how-to-start">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Get Started</h2>
                  <p className="text-lg text-gray-700 mb-6">
                    Getting a dumpster rental in {CITY_DISPLAY} is easy with our streamlined process.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">📋 Simple 4-Step Process</h3>
                      <ol className="space-y-4">
                        <li className="flex items-start">
                          <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 mt-1">1</span>
                          <div>
                            <h4 className="font-semibold text-gray-900">Contact us for a free quote</h4>
                            <p className="text-gray-600 text-sm">Call or fill out our online form for instant pricing</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 mt-1">2</span>
                          <div>
                            <h4 className="font-semibold text-gray-900">Choose your dumpster size and rental period</h4>
                            <p className="text-gray-600 text-sm">Select from 15, 20, or 30-yard dumpsters</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 mt-1">3</span>
                          <div>
                            <h4 className="font-semibold text-gray-900">Schedule delivery at your convenience</h4>
                            <p className="text-gray-600 text-sm">Same-day delivery available</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 mt-1">4</span>
                          <div>
                            <h4 className="font-semibold text-gray-900">We'll handle pickup and disposal</h4>
                            <p className="text-gray-600 text-sm">Professional cleanup when you're done</p>
                          </div>
                        </li>
                      </ol>
                    </div>
                    
                    <div className="bg-gradient-to-br from-purple-600 to-blue-600 text-white p-6 rounded-lg">
                      <h3 className="text-xl font-semibold mb-4">🚀 Ready to Get Started?</h3>
                      <p className="mb-6">
                        Get your free quote today and experience the best dumpster rental service in {CITY_DISPLAY}!
                      </p>
                      <div className="space-y-3">
                        <Link 
                          href="/freequote"
                          className="block bg-white text-purple-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors text-center font-semibold"
                        >
                          Get Your Free Quote
                        </Link>
                        <Link 
                          href="/{CITY_SLUG}"
                          className="block bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-colors text-center font-semibold"
                        >
                          View {CITY_DISPLAY} Services
                        </Link>
                      </div>
                    </div>
                  </div>
                </section>

                {/* FAQ Section */}
                <section id="faq">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                  
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">How much does dumpster rental cost in {CITY_DISPLAY}?</h3>
                      <p className="text-gray-700">
                        Our dumpster rental prices in {CITY_DISPLAY} start at $300 for a 15-yard dumpster (3-7 days), $350 for a 20-yard dumpster, and $375 for a 30-yard dumpster. 1-day special rates start at $180. All prices include delivery, pickup, and disposal fees.
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Do I need a permit for dumpster rental in {CITY_DISPLAY}?</h3>
                      <p className="text-gray-700">
                        Permits may be required if you need to place the dumpster on the street. Contact {CITY_DISPLAY} for permit requirements. We can help guide you through the process.
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">How long can I keep the dumpster?</h3>
                      <p className="text-gray-700">
                        Our standard rental period is 3-7 days with bundle pricing, but we offer flexible rental periods from 1-30 days. 1-day special rates are available, and 30-day rentals have special pricing with a 2-dump minimum requirement.
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">What can I put in the dumpster?</h3>
                      <p className="text-gray-700">
                        You can dispose of construction debris, household items, furniture, appliances, yard waste, and general trash. Hazardous materials, electronics, and certain chemicals are not allowed. Additional charges apply for special items like refrigerators, mattresses, and tires.
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Do you offer same-day delivery in {CITY_DISPLAY}?</h3>
                      <p className="text-gray-700">
                        Yes! We offer same-day delivery in {CITY_DISPLAY} and throughout the Salt Lake Valley. Call us early in the day for same-day service availability.
                      </p>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Are there additional charges beyond the base price?</h3>
                      <p className="text-gray-700">
                        Yes, additional charges include $55 per ton for weight after disposal facility weighing, and $25 per item for refrigerators, freezers, drinking water coolers, air conditioning units (must drain freon), mattresses/box springs, or tires.
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </article>

          {/* Related Articles */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/complete-dumpster-rental-guide-2025" className="group">
                <div className="bg-white p-6 rounded-lg shadow-md border hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 mb-2">
                    Complete Dumpster Rental Guide 2025
                  </h3>
                  <p className="text-gray-600">
                    Everything you need to know about dumpster rentals, from choosing the right size to understanding costs.
                  </p>
                </div>
              </Link>
              <Link href="/construction-waste-management-2025" className="group">
                <div className="bg-white p-6 rounded-lg shadow-md border hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 mb-2">
                    Construction Waste Management Guide 2025
                  </h3>
                  <p className="text-gray-600">
                    Best practices for managing construction waste and debris on your project site.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Icon Dumpsters</h3>
                <p className="text-gray-300">
                  Professional dumpster rental services throughout Utah. Same-day delivery, competitive pricing, exceptional service.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><Link href="/" className="text-gray-300 hover:text-white">Home</Link></li>
                  <li><Link href="/services" className="text-gray-300 hover:text-white">Services</Link></li>
                  <li><Link href="/dumpster-sizes" className="text-gray-300 hover:text-white">Dumpster Sizes</Link></li>
                  <li><Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
                <p className="text-gray-300">
                  Ready to get started? Contact us today for a free quote!
                </p>
                <Link 
                  href="/contact"
                  className="inline-block bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors mt-4"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-300">
              <p>&copy; 2025 Icon Dumpsters. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
'@

# Function to convert city slug to display name
function Get-CityDisplayName($slug) {
    $cityMap = @{
        "american-fork" = "American Fork"
        "bountiful" = "Bountiful"
        "centerville" = "Centerville"
        "clearfield" = "Clearfield"
        "cottonwood-heights" = "Cottonwood Heights"
        "downtown-salt-lake" = "Downtown Salt Lake"
        "draper" = "Draper"
        "eagle-mountain" = "Eagle Mountain"
        "fairpark" = "Fairpark"
        "farmington" = "Farmington"
        "glendale" = "Glendale"
        "herriman" = "Herriman"
        "holladay" = "Holladay"
        "kaysville" = "Kaysville"
        "kearns" = "Kearns"
        "layton" = "Layton"
        "lehi" = "Lehi"
        "magna" = "Magna"
        "midvale" = "Midvale"
        "millcreek" = "Millcreek"
        "north-salt-lake" = "North Salt Lake"
        "ogden" = "Ogden"
        "orem" = "Orem"
        "park-city" = "Park City"
        "pleasant-grove" = "Pleasant Grove"
        "poplar-grove" = "Poplar Grove"
        "provo" = "Provo"
        "riverton" = "Riverton"
        "roy" = "Roy"
        "sandy" = "Sandy"
        "saratoga-springs" = "Saratoga Springs"
        "south-jordan" = "South Jordan"
        "south-salt-lake" = "South Salt Lake"
        "sugar-house" = "Sugar House"
        "syracuse" = "Syracuse"
        "taylorsville" = "Taylorsville"
        "tooele" = "Tooele"
        "west-jordan" = "West Jordan"
        "west-valley-city" = "West Valley City"
        "woods-cross" = "Woods Cross"
    }
    
    if ($cityMap.ContainsKey($slug)) {
        return $cityMap[$slug]
    } else {
        return $slug
    }
}

# Function to convert city slug to PascalCase for function name
function Get-CityFunctionName($slug) {
    $parts = $slug -split '-'
    $functionName = ($parts | ForEach-Object { $_.Substring(0,1).ToUpper() + $_.Substring(1) }) -join ''
    return $functionName
}

# Process each city
foreach ($city in $cities) {
    $cityDisplay = Get-CityDisplayName $city
    $cityFunctionName = Get-CityFunctionName $city
    
    Write-Host "Processing $cityDisplay..."
    
    # Create the page content
    $pageContent = $template -replace '{CITY_SLUG}', $city -replace '{CITY_DISPLAY}', $cityDisplay -replace '{CITY_NAME}', $cityFunctionName
    
    # Write to file
    $filePath = "app/$city-dumpster-rental-guide-2025/page.tsx"
    $pageContent | Out-File -FilePath $filePath -Encoding UTF8
    
    Write-Host "Updated $filePath"
}

Write-Host "All city guide pages have been updated with the optimized template!"

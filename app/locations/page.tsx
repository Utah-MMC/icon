"use client";

import ImageWithFallback from "../components/ImageWithFallback";
import Link from "next/link";
import Analytics from "../components/Analytics";
import ArticleSchema from "../components/ArticleSchema";
import FAQSchema from "../components/FAQSchema";
import { useMemo, useState } from "react";
import { zipToCity } from "../config/serviceAreas";

export default function UtahDumpsterRentalLocations() {
  // Utah cities organized by region
  const utahCities = {
    "Salt Lake Valley": [
      { name: "Salt Lake City", url: "/salt-lake-city", guideUrl: "/salt-lake-city-dumpster-rental-guide-2025" },
      { name: "West Valley City", url: "/west-valley-city", guideUrl: "/west-valley-city-dumpster-rental-guide-2025" },
      { name: "Sandy", url: "/sandy", guideUrl: "/sandy-dumpster-rental-guide-2025" },
      { name: "West Jordan", url: "/west-jordan", guideUrl: "/west-jordan-dumpster-rental-guide-2025" },
      { name: "Murray", url: "/murray", guideUrl: "/murray-dumpster-rental-guide-2025" },
      { name: "Taylorsville", url: "/taylorsville", guideUrl: "/taylorsville-dumpster-rental-guide-2025" },
      { name: "South Jordan", url: "/south-jordan", guideUrl: "/south-jordan-dumpster-rental-guide-2025" },
      { name: "Riverton", url: "/riverton", guideUrl: "/riverton-dumpster-rental-guide-2025" },
      { name: "Draper", url: "/draper", guideUrl: "/draper-dumpster-rental-guide-2025" },
      { name: "Midvale", url: "/midvale", guideUrl: "/midvale-dumpster-rental-guide-2025" },
      { name: "Cottonwood Heights", url: "/cottonwood-heights", guideUrl: "/cottonwood-heights-dumpster-rental-guide-2025" },
      { name: "Holladay", url: "/holladay", guideUrl: "/holladay-dumpster-rental-guide-2025" },
      { name: "South Salt Lake", url: "/south-salt-lake", guideUrl: "/south-salt-lake-dumpster-rental-guide-2025" },
      { name: "Sugar House", url: "/sugar-house", guideUrl: "/sugar-house-dumpster-rental-guide-2025" },
      { name: "Millcreek", url: "/millcreek", guideUrl: "/millcreek-dumpster-rental-guide-2025" },
      { name: "Kearns", url: "/kearns", guideUrl: "/kearns-dumpster-rental-guide-2025" },
      { name: "Magna", url: "/magna", guideUrl: "/magna-dumpster-rental-guide-2025" },
      { name: "Fairpark", url: "/fairpark", guideUrl: "/fairpark-dumpster-rental-guide-2025" },
      { name: "Downtown Salt Lake", url: "/downtown-salt-lake", guideUrl: "/downtown-salt-lake-dumpster-rental-guide-2025" },
      { name: "Poplar Grove", url: "/poplar-grove", guideUrl: "/poplar-grove-dumpster-rental-guide-2025" },
      { name: "Glendale", url: "/glendale", guideUrl: "/glendale-dumpster-rental-guide-2025" },
      { name: "Rose Park", url: "/rose-park" }
    ],
    "Utah County": [
      { name: "Provo", url: "/provo", guideUrl: "/provo-dumpster-rental-guide-2025" },
      { name: "Orem", url: "/orem", guideUrl: "/orem-dumpster-rental-guide-2025" },
      { name: "Lehi", url: "/lehi", guideUrl: "/lehi-dumpster-rental-guide-2025" },
      { name: "American Fork", url: "/american-fork", guideUrl: "/american-fork-dumpster-rental-guide-2025" },
      { name: "Pleasant Grove", url: "/pleasant-grove", guideUrl: "/pleasant-grove-dumpster-rental-guide-2025" },
      { name: "Eagle Mountain", url: "/eagle-mountain", guideUrl: "/eagle-mountain-dumpster-rental-guide-2025" },
      { name: "Saratoga Springs", url: "/saratoga-springs", guideUrl: "/saratoga-springs-dumpster-rental-guide-2025" },
      { name: "Bluffdale", url: "/bluffdale", guideUrl: "/bluffdale-dumpster-rental-guide-2025" },
      { name: "Herriman", url: "/herriman", guideUrl: "/herriman-dumpster-rental-guide-2025" }
    ],
    "Davis County": [
      { name: "Layton", url: "/layton", guideUrl: "/layton-dumpster-rental-guide-2025" },
      { name: "Bountiful", url: "/bountiful", guideUrl: "/bountiful-dumpster-rental-guide-2025" },
      { name: "Clearfield", url: "/clearfield", guideUrl: "/clearfield-dumpster-rental-guide-2025" },
      { name: "Centerville", url: "/centerville", guideUrl: "/centerville-dumpster-rental-guide-2025" },
      { name: "Kaysville", url: "/kaysville", guideUrl: "/kaysville-dumpster-rental-guide-2025" },
      { name: "Syracuse", url: "/syracuse", guideUrl: "/syracuse-dumpster-rental-guide-2025" },
      { name: "North Salt Lake", url: "/north-salt-lake", guideUrl: "/north-salt-lake-dumpster-rental-guide-2025" },
      { name: "Farmington", url: "/farmington", guideUrl: "/farmington-dumpster-rental-guide-2025" },
      { name: "Woods Cross", url: "/woods-cross", guideUrl: "/woods-cross-dumpster-rental-guide-2025" },
      { name: "Roy", url: "/roy", guideUrl: "/roy-dumpster-rental-guide-2025" }
    ],
    "Weber County": [
      { name: "Ogden", url: "/ogden", guideUrl: "/ogden-dumpster-rental-guide-2025" }
    ],
    "Summit County": [
      { name: "Park City", url: "/park-city", guideUrl: "/park-city-dumpster-rental-guide-2025" }
    ],
    "Tooele County": [
      { name: "Tooele", url: "/tooele", guideUrl: "/tooel-dumpster-rental-guide-2025" }
    ]
  } as const;

  const [search, setSearch] = useState<string>("");
  const [callbackPhone, setCallbackPhone] = useState<string>("");
  const [callbackStatus, setCallbackStatus] = useState<'idle' | 'sent' | 'error'>("idle");

  const zipMatchedCityNames = useMemo(() => {
    const term = search.trim();
    const isZipLike = /^\d{5}$/.test(term);
    if (!isZipLike) return new Set<string>();
    const lowerCaseMatches = new Set<string>();
    Object.entries(zipToCity).forEach(([zip, city]) => {
      if (zip.startsWith(term)) {
        lowerCaseMatches.add(city.toLowerCase());
      }
    });
    return lowerCaseMatches;
  }, [search]);

  const unknownZip = useMemo(() => {
    const z = search.trim();
    if (!/^\d{5}$/.test(z)) return false;
    return !zipToCity[z];
  }, [search]);

  async function submitZipCallback() {
    try {
      const z = search.trim();
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          phone: callbackPhone,
          zipCode: z,
          source: 'locations-zip-callback',
          subject: `Callback request for ZIP ${z}`,
        }),
      });
      setCallbackStatus('sent');
      setCallbackPhone('');
    } catch {
      setCallbackStatus('error');
    }
  }

  function cityMatches(name: string): boolean {
    const term = search.trim().toLowerCase();
    if (!term) return true;
    if (name.toLowerCase().includes(term)) return true;
    if (zipMatchedCityNames.has(name.toLowerCase())) return true;
    return false;
  }

  return (
    <>
      <Analytics
        pageName="Utah Dumpster Rental Locations - Find Dumpster Services Near You"
        pageType="article"
        articleId="utah-dumpster-rental-locations"
      />
      <ArticleSchema
        title="Utah Dumpster Rental Locations - Find Dumpster Services Near You"
        description="Find dumpster rental services in Utah cities. Professional roll-off dumpster rentals available in Salt Lake City, Provo, Ogden, and all Utah counties. Get instant quotes and same-day delivery."
        author="Icon Dumpsters"
        publishedDate="2025-01-27"
        modifiedDate="2025-01-27"
        imageUrl="https://icondumpsters.com/images/dumpster500x500-2.jpeg"
        articleUrl="https://icondumpsters.com/locations"
        category="LOCATIONS"
        readTime="PT5M"
      />
      <FAQSchema
        pageUrl="https://icondumpsters.com/locations"
        faqs={[
          {
            question: "What Utah cities do you serve for dumpster rental?",
            answer: "We serve all major Utah cities including Salt Lake City, Provo, Ogden, West Valley City, Sandy, West Jordan, Murray, Layton, Bountiful, Orem, Lehi, American Fork, Park City, and many more. Our service area covers the entire Wasatch Front and surrounding areas."
          },
          {
            question: "How quickly can you deliver a dumpster in Utah?",
            answer: "We offer same-day delivery for most Utah locations when ordered before 2 PM. For remote areas or special requests, delivery is typically available within 24-48 hours. Contact us for specific delivery times in your area."
          },
          {
            question: "What dumpster sizes are available in Utah?",
            answer: "We offer 15-yard, 20-yard, and 30-yard roll-off dumpsters throughout Utah. These sizes accommodate everything from small home cleanouts to large construction projects. Our team can help you choose the right size for your specific project."
          },
          {
            question: "Do you serve rural areas in Utah?",
            answer: "Yes, we serve both urban and rural areas throughout Utah. While delivery times may be slightly longer for remote locations, we're committed to providing professional dumpster rental services to all Utah residents and businesses."
          }
        ]}
      />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-[#4e37a8] to-purple-700 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Utah Dumpster Rental Locations
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Professional dumpster rental services available throughout Utah. Find your nearest location and get instant quotes for roll-off dumpsters.
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

        {/* Service Areas Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Utah Dumpster Rental Service Areas
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We provide professional dumpster rental services across all major Utah counties. 
                Find your city below and get started with your project today.
              </p>
            </div>

            {/* Search Section */}
            <div className="mb-12 bg-white p-8 rounded-xl shadow-lg">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Find Your City</h3>
                <p className="text-gray-600">Search by city name or ZIP code</p>
              </div>
              <div className="max-w-md mx-auto">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Enter city or ZIP..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4e37a8] focus:border-transparent"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        // If exactly one city matches, navigate to its page
                        for (const [, cities] of Object.entries(utahCities)) {
                          const filtered = (cities as any[]).filter(c => cityMatches(c.name));
                          if (filtered.length === 1) {
                            window.location.href = filtered[0].url;
                            return;
                          }
                        }
                      }
                    }}
                  />
                  <div className="absolute right-3 top-3">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
                {unknownZip && (
                  <div className="mt-4 p-4 border border-yellow-300 rounded-lg bg-yellow-50">
                    <div className="text-sm text-yellow-800">
                      We may still serve ZIP {search.trim()}. Talk to an expert now at
                      {' '}
                      <a href="tel:801-918-6000" className="font-semibold underline text-yellow-900">(801) 918-6000</a>
                      {' '}or request a call back:
                    </div>
                    <div className="mt-3 flex flex-col sm:flex-row gap-2">
                      <input
                        type="tel"
                        value={callbackPhone}
                        onChange={(e) => setCallbackPhone(e.target.value)}
                        placeholder="Your phone number"
                        className="flex-1 border rounded-lg px-3 py-2"
                      />
                      <button
                        onClick={submitZipCallback}
                        className="px-4 py-2 rounded-lg bg-[#4e37a8] text-white"
                      >
                        Request Call
                      </button>
                    </div>
                    {callbackStatus === 'sent' && (
                      <div className="mt-2 text-sm text-green-700">Thanks! We’ll call you shortly.</div>
                    )}
                    {callbackStatus === 'error' && (
                      <div className="mt-2 text-sm text-red-600">Something went wrong. Please call us directly.</div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Cities by Region */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {Object.entries(utahCities).map(([region, cities]) => {
                const filteredCities = (cities as any[]).filter((city) => cityMatches(city.name));
                if (search.trim() && filteredCities.length === 0) return null;
                return (
                <div key={region} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-[#4e37a8] to-purple-700 p-6">
                    <h3 className="text-xl font-bold text-white">{region}</h3>
                    <p className="text-purple-100 mt-1">{(search.trim() ? filteredCities.length : (cities as any[]).length)} cities served</p>
                  </div>
                  <div className="p-6">
                    <div className="space-y-3">
                      {filteredCities.map((city) => (
                        <div key={city.name} className="city-item">
                          <div className="flex justify-between items-center">
                            <Link 
                              href={city.url}
                              className="text-[#4e37a8] hover:text-purple-700 font-medium transition-colors"
                            >
                              {city.name}
                            </Link>
                            <div className="flex gap-2">
                              <Link 
                                href={city.url}
                                className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded hover:bg-gray-200 transition-colors"
                              >
                                Services
                              </Link>
                              {city.guideUrl && (
                                <Link 
                                  href={city.guideUrl}
                                  className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded hover:bg-green-200 transition-colors"
                                >
                                  Guide
                                </Link>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );})}
            </div>
          </div>
        </section>

        {/* Service Information */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-[#4e37a8] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Same-Day Delivery</h3>
                <p className="text-gray-600">Most Utah locations receive same-day delivery when ordered before 2 PM</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Professional Service</h3>
                <p className="text-gray-600">Licensed and insured dumpster rental services throughout Utah</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Competitive Pricing</h3>
                <p className="text-gray-600">Transparent pricing with no hidden fees across all Utah locations</p>
              </div>
            </div>
          </div>
        </section>

        {/* Dumpster Sizes */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Available Dumpster Sizes
              </h2>
              <p className="text-xl text-gray-600">
                Choose from our range of dumpster sizes to fit your project needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">15</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">15-Yard Dumpster</h3>
                <p className="text-gray-600 mb-4">Perfect for small projects and cleanouts</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Kitchen remodels</li>
                  <li>• Bathroom renovations</li>
                  <li>• Garage cleanouts</li>
                  <li>• Small construction projects</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="bg-green-100 text-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">20</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">20-Yard Dumpster</h3>
                <p className="text-gray-600 mb-4">Most popular size for medium projects</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Home renovations</li>
                  <li>• Basement cleanouts</li>
                  <li>• Roofing projects</li>
                  <li>• Construction debris</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="bg-purple-100 text-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">30</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">30-Yard Dumpster</h3>
                <p className="text-gray-600 mb-4">Large capacity for major projects</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Whole house cleanouts</li>
                  <li>• Large construction projects</li>
                  <li>• Commercial projects</li>
                  <li>• Demolition debris</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-[#4e37a8] to-purple-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 text-purple-100">
              Get instant quotes for dumpster rental in your Utah city. Same-day delivery available for most locations.
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

"use client";

import ImageWithFallback from "../components/ImageWithFallback";
import Link from "next/link";
import Analytics from "../components/PageAnalytics";
import ArticleSchema from "../components/ArticleSchema";
import FAQSchema from "../components/FAQSchema";
import PageHero from "../components/PageHero";
import { useMemo, useState } from "react";
import { zipToCity } from "../config/serviceAreas";

export default function LocationsClient() {
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
  };

  // Type for cities with optional guideUrl
  type CityWithOptionalGuide = {
    name: string;
    url: string;
    guideUrl?: string;
  };

  // Type for the cities object
  type UtahCitiesType = {
    [key: string]: CityWithOptionalGuide[];
  };

  const utahCitiesTyped: UtahCitiesType = utahCities;

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
    <div className="min-h-screen bg-white">
      <PageHero
        title="Utah Dumpster Rental Locations"
        subtitle="Find dumpster rental services across Utah: Salt Lake City, Utah County, Davis County, Weber, Summit, Tooele and more. Same‑day delivery, transparent pricing."
        primaryCtaText="Get Free Quote"
        primaryCtaLink="/free-quote"
        secondaryCtaText="Call Us"
        secondaryCtaLink="tel:(801) 918-6000"
      />

      {/* Schema Markup */}
      <ArticleSchema
        title="Utah Dumpster Rental Locations | Icon Dumpsters"
        description="Find dumpster rental services across Utah: Salt Lake City, Utah County, Davis County, Weber, Summit, Tooele and more. Same‑day delivery, transparent pricing."
        author="Icon Dumpsters"
        publishedDate="2024-01-01"
        modifiedDate="2024-12-19"
        imageUrl="/images/utah-dumpster-rental-locations.jpg"
        articleUrl="https://icondumpsters.com/locations"
        category="Dumpster Rental Locations"
        readTime="5 min read"
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search Section */}
        <section className="bg-gradient-to-r from-[#4e37a8] to-purple-700 rounded-2xl p-8 text-white mb-12">
          <h2 className="text-3xl font-bold mb-4">Find Your Location</h2>
          <p className="text-purple-100 mb-6">Search by city name or ZIP code to find dumpster rental services in your area.</p>
          
          <div className="max-w-md">
            <input
              type="text"
              placeholder="Enter city name or ZIP code..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          {unknownZip && (
            <div className="mt-4 p-4 bg-yellow-100 text-yellow-800 rounded-lg">
              <p className="font-semibold mb-2">We don't currently serve this ZIP code, but we're expanding!</p>
              <p className="text-sm mb-3">Enter your phone number and we'll notify you when we start serving your area.</p>
              <div className="flex gap-2">
                <input
                  type="tel"
                  placeholder="Your phone number"
                  value={callbackPhone}
                  onChange={(e) => setCallbackPhone(e.target.value)}
                  className="flex-1 px-3 py-2 rounded text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                <button
                  onClick={submitZipCallback}
                  disabled={callbackStatus === 'sent' || !callbackPhone.trim()}
                  className="px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700 disabled:opacity-50"
                >
                  {callbackStatus === 'sent' ? 'Submitted!' : 'Notify Me'}
                </button>
              </div>
            </div>
          )}
        </section>

        {/* Cities by Region */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Utah Dumpster Rental Locations</h2>
          
          {Object.entries(utahCitiesTyped).map(([region, cities]) => {
            const filteredCities = cities.filter(city => cityMatches(city.name));
            if (filteredCities.length === 0) return null;
            
            return (
              <div key={region} className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">{region}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredCities.map((city) => (
                    <div key={city.name} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <Link href={city.url} className="block">
                        <h4 className="text-lg font-semibold text-[#4e37a8] hover:text-purple-700 mb-2">
                          {city.name}
                        </h4>
                        <p className="text-gray-600 text-sm mb-3">Dumpster rental services in {city.name}</p>
                        <div className="flex gap-2">
                          <Link 
                            href={city.url}
                            className="text-sm bg-[#4e37a8] text-white px-3 py-1 rounded hover:bg-purple-700 transition-colors"
                          >
                            Get Quote
                          </Link>
                          {city.guideUrl && (
                            <Link 
                              href={city.guideUrl}
                              className="text-sm border border-[#4e37a8] text-[#4e37a8] px-3 py-1 rounded hover:bg-[#4e37a8] hover:text-white transition-colors"
                            >
                              Guide
                            </Link>
                          )}
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </section>

        {/* Service Coverage */}
        <section className="bg-gray-50 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Service Coverage Areas</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Primary Service Areas</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Salt Lake Valley:</strong> Salt Lake City, West Valley City, Sandy, West Jordan, Murray</li>
                <li>• <strong>Utah County:</strong> Provo, Orem, Lehi, American Fork, Pleasant Grove</li>
                <li>• <strong>Davis County:</strong> Layton, Bountiful, Clearfield, Centerville, Kaysville</li>
                <li>• <strong>Weber County:</strong> Ogden and surrounding areas</li>
                <li>• <strong>Summit County:</strong> Park City and nearby communities</li>
                <li>• <strong>Tooele County:</strong> Tooele and surrounding areas</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Service Features</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Same-Day Delivery:</strong> Available in most areas when ordered before 2 PM</li>
                <li>• <strong>Flexible Scheduling:</strong> Choose delivery and pickup times that work for you</li>
                <li>• <strong>Multiple Sizes:</strong> 10, 15, 20, and 30-yard dumpsters available</li>
                <li>• <strong>Transparent Pricing:</strong> No hidden fees, clear bundle pricing</li>
                <li>• <strong>Local Expertise:</strong> Knowledge of local regulations and permit requirements</li>
                <li>• <strong>Responsive Support:</strong> Quick response times for all service areas</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-[#4e37a8] to-purple-700 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-purple-100 mb-6">Get a free quote for your project, no matter where you're located in Utah.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="https://icondumpsters.com/free-quote" 
              className="bg-white text-[#4e37a8] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Get Free Quote
            </Link>
            <Link 
              href="tel:8019186000" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-[#4e37a8] transition-colors"
            >
              Call (801) 918-6000
            </Link>
          </div>
        </section>
      </main>

      <Analytics pageName="Utah Dumpster Rental Locations" pageType="page" />
    </div>
  );
}



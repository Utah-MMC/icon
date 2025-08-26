'use client';

import Link from 'next/link';
import DumpsterCalculator from './DumpsterCalculator';
import QuoteForm from './QuoteForm';
import ImageWithFallback from './ImageWithFallback';
import CalculatorCTA from './CalculatorCTA';
import InternalLinks from './InternalLinks';
import AvailableTodayBadge from './AvailableTodayBadge';
import BookNowBanner from './BookNowBanner';
import PageHero from './PageHero';

interface CityPageTemplateProps {
  city: string;
  neighborhoods: string[];
  nearbyLinks: { label: string; href: string }[];
  showCalculator?: boolean;
}

export default function CityPageTemplate({ city, neighborhoods, nearbyLinks, showCalculator = false }: CityPageTemplateProps) {
  const cityShort = city.replace(', UT', '').replace('City of ', '');

  // Deterministic pseudo-randomness per city to diversify layout/copy
  function xfnv1a(str: string) {
    let h = 2166136261 >>> 0;
    for (let i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h += (h << 1) + (h << 4) + (h << 7) + (h << 8) + (h << 24);
    }
    return h >>> 0;
  }
  function mulberry32(a: number) {
    return function () {
      let t = (a += 0x6D2B79F5);
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  const rng = mulberry32(xfnv1a(cityShort));
  const pick = <T,>(arr: T[]): T => arr[Math.floor(rng() * arr.length)] as T;
  const shuffle = <T,>(arr: T[]): T[] => {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  // Variant text/styles
  const heroTitle = pick([
    `Dumpster Rental ${cityShort}`,
    `${cityShort} Dumpster Rentals`,
    `Roll‑off Dumpster Rental ${cityShort}`,
    `Rent a Dumpster in ${cityShort}`,
  ]);
  const heroSubtitle = pick([
    'Same‑day delivery, transparent pricing, and friendly local service. 15, 20, and 30‑yard roll‑off dumpsters.',
    'Fast, reliable dumpsters for any project with clear pricing and local pros.',
    'From cleanouts to construction, get the right roll‑off size with honest pricing.',
  ]);

  const neighborhoodsShuffled = shuffle(neighborhoods);
  const nearbyLinksShuffled = shuffle(nearbyLinks);
  const gallerySwap = rng() > 0.5;
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <PageHero
        title={heroTitle}
        subtitle={heroSubtitle}
        primaryCtaText="Get Free Quote"
        primaryCtaLink="/free-quote"
        secondaryCtaText="View Pricing"
        secondaryCtaLink="#pricing"
      />

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Calculator (optional) */}
        {showCalculator && (
          <section id="calculator" className="mb-12">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Instant Pricing – {cityShort}</h2>
              <p className="text-gray-600">Use the calculator to estimate the perfect dumpster size and price.</p>
            </div>
            <DumpsterCalculator />
          </section>
        )}

        {/* Why */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Icon Dumpsters in {cityShort}</h2>
          <p className="text-gray-600 mb-6">When you need reliable dumpster rental services in {cityShort}, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of {cityShort}'s unique needs makes us the preferred choice for residents and businesses alike.</p>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/same-day-delivery" className="bg-purple-50 p-6 rounded-lg block hover:ring-2 hover:ring-purple-300 transition-shadow">
              <h3 className="text-xl font-semibold text-purple-900 mb-2">Same-Day Delivery</h3>
              <p className="text-gray-700">Fast delivery across {cityShort} and the valley. Our local drivers know the area's traffic patterns and can navigate efficiently to get your dumpster delivered when you need it most.</p>
            </Link>
            <Link href="/transparent-pricing" className="bg-blue-50 p-6 rounded-lg block hover:ring-2 hover:ring-blue-300 transition-shadow">
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Transparent Pricing</h3>
              <p className="text-gray-700">No hidden fees or surprise charges. Our bundle pricing for 1-day, 3-7 days, and 30-day rentals gives you flexibility and cost certainty for your {cityShort} project.</p>
            </Link>
            <Link href="/local-pros" className="bg-green-50 p-6 rounded-lg block hover:ring-2 hover:ring-green-300 transition-shadow">
              <h3 className="text-xl font-semibold text-green-900 mb-2">Local Pros</h3>
              <p className="text-gray-700">Our experienced drivers and staff understand {cityShort}'s regulations, permit requirements, and local nuances. We're your neighbors, serving our community with pride.</p>
            </Link>
            <Link href="/responsible-disposal" className="bg-orange-50 p-6 rounded-lg block hover:ring-2 hover:ring-orange-300 transition-shadow">
              <h3 className="text-xl font-semibold text-orange-900 mb-2">Responsible Disposal</h3>
              <p className="text-gray-700">We recycle whenever possible and partner with local facilities to ensure environmentally responsible waste management for {cityShort} and surrounding areas.</p>
            </Link>
          </div>
        </section>

        {/* Service Areas */}
        <section className="bg-blue-50 p-8 rounded-xl mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{cityShort} Service Areas</h2>
          <p className="text-gray-700 mb-6">Icon Dumpsters provides comprehensive dumpster rental services throughout {cityShort} and its surrounding areas. Our local knowledge and extensive coverage ensure we can serve your project regardless of where you're located in the {cityShort} area.</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Neighborhoods We Serve</h3>
              <ul className="space-y-1 text-gray-700">
                {neighborhoodsShuffled.map((n) => (<li key={n}>• {n}</li>))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Nearby Cities</h3>
              <ul className="space-y-1 text-gray-700">
                {nearbyLinksShuffled.map((l) => (
                  <li key={l.href}>• <Link href={l.href} className="text-[#4e37a8] hover:underline">{l.label}</Link></li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* City-Specific Information */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">About {cityShort} Dumpster Rental</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Local Infrastructure</h3>
              <p className="text-gray-700 mb-4">{cityShort} features a mix of residential neighborhoods, commercial districts, and industrial areas, each with unique waste management needs. Our dumpster services are tailored to accommodate the diverse requirements of this dynamic community.</p>
              <ul className="text-gray-700 space-y-2">
                <li>• <strong>Residential Areas:</strong> Single-family homes, townhouses, and apartment complexes</li>
                <li>• <strong>Commercial Zones:</strong> Shopping centers, office buildings, and retail establishments</li>
                <li>• <strong>Industrial Sectors:</strong> Manufacturing facilities and warehouse operations</li>
                <li>• <strong>Mixed-Use Developments:</strong> Combined residential and commercial spaces</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Community Characteristics</h3>
              <p className="text-gray-700 mb-4">Understanding {cityShort}'s community dynamics helps us provide better service. From family-oriented neighborhoods to bustling commercial districts, we adapt our approach to meet local needs.</p>
              <ul className="text-gray-700 space-y-2">
                <li>• <strong>Growth Patterns:</strong> Rapid development and construction activity</li>
                <li>• <strong>Seasonal Variations:</strong> Weather-related project timing considerations</li>
                <li>• <strong>Regulatory Environment:</strong> Local ordinances and permit requirements</li>
                <li>• <strong>Environmental Awareness:</strong> Community commitment to sustainability</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Visual Gallery: two images side by side to fill space */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(!gallerySwap ? [0,1] : [1,0]).map((idx) => (
              <div key={idx} className="w-full h-64 md:h-80 lg:h-96 relative rounded-xl overflow-hidden shadow bg-white flex items-center justify-center">
                <ImageWithFallback 
                  src={idx === 0 ? '/images/IMG_0350.jpg' : '/images/dumpsterWithTruck.jpeg'} 
                  fallbackSrc={idx === 0 ? '/images/dumpsterWithTruck.jpeg' : '/images/dumpsters.webp'} 
                  alt={`${cityShort} ${idx === 0 ? 'dumpster rental Utah - roll-off dumpster near me' : 'roll-off dumpsters - Utah dumpster rental'}`} 
                  fill 
                  className="object-contain" 
                />
              </div>
            ))}
          </div>
        </section>

        {/* Calculator CTA */}
        <CalculatorCTA className="mb-12" />

        {/* Pricing */}
        <section id="pricing" className="bg-white rounded-xl shadow-md p-8 mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">{cityShort} Dumpster Rental Pricing</h2>
            <AvailableTodayBadge />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[ 
              { title: '10-Yard Dumpster', price: 250, note: 'Perfect for small projects', bullets: ['Garage cleanup', 'Small renovation', 'Yard waste', '7-day rental included'] },
              { title: '15-Yard Dumpster', price: 300, note: 'Ideal for medium projects', bullets: ['Bathroom renovation', 'Basement cleanup', 'Roof replacement', '10-day rental included'] },
              { title: '20-Yard Dumpster', price: 350, note: 'Great for large projects', bullets: ['Whole-home renovation', 'Commercial cleanup', 'Large demolition', '14-day rental included'] },
              { title: '30-Yard Dumpster', price: 450, note: 'For major projects', bullets: ['Commercial construction', 'Major demo', 'Large-scale cleanup', '14-day rental included'] }
            ].map((card) => (
              <div key={card.title} className="bg-white p-6 rounded-lg shadow border">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-3xl font-bold text-[#4e37a8] mb-2">${card.price}</p>
                <p className="text-gray-600 mb-4">{card.note}</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  {card.bullets.map((b) => (<li key={b}>• {b}</li>))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Local Guidelines */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{cityShort} Dumpster Rental Guidelines</h2>
          <div className="bg-white p-6 rounded-lg border">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Local Regulations</h3>
            <ul className="text-gray-700 space-y-2 mb-6">
              <li>• Dumpsters cannot block sidewalks, driveways, or rights-of-way</li>
              <li>• Street placement may require a city permit</li>
              <li>• Typical rental periods range from 7-30 days</li>
              <li>• Cover may be required to prevent debris from blowing</li>
            </ul>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Accepted Materials</h3>
            <ul className="text-gray-700 space-y-2 mb-6">
              <li>• Construction and demolition debris</li>
              <li>• Household junk and furniture</li>
              <li>• Yard waste and landscaping materials</li>
              <li>• General non‑hazardous waste</li>
            </ul>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Prohibited Items</h3>
            <ul className="text-gray-700 space-y-2">
              <li>• Hazardous materials and chemicals</li>
              <li>• Electronics and appliances with refrigerants</li>
              <li>• Tires and automotive parts</li>
              <li>• Medical waste and biohazards</li>
            </ul>
          </div>
        </section>

        {/* Project Types & Use Cases */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Projects in {cityShort}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Residential Projects</h3>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>• <strong>Home Renovations:</strong> Kitchen and bathroom remodels, basement finishing, attic conversions</li>
                <li>• <strong>Garage Cleanouts:</strong> Removing old furniture, tools, and accumulated items</li>
                <li>• <strong>Yard Work:</strong> Landscaping debris, tree removal, garden cleanup</li>
                <li>• <strong>Moving Preparation:</strong> Decluttering before selling or relocating</li>
                <li>• <strong>Estate Cleanouts:</strong> Clearing properties after inheritance or sale</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Commercial Projects</h3>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>• <strong>Office Renovations:</strong> Updating workspaces and removing old fixtures</li>
                <li>• <strong>Retail Remodels:</strong> Store renovations and display updates</li>
                <li>• <strong>Construction Sites:</strong> Building materials and construction debris</li>
                <li>• <strong>Property Management:</strong> Multi-unit building maintenance and cleanup</li>
                <li>• <strong>Restaurant Updates:</strong> Kitchen equipment and dining area renovations</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Seasonal Considerations */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Seasonal Dumpster Rental in {cityShort}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Spring & Summer</h3>
              <p className="text-gray-700 mb-4">The warmer months bring increased demand for dumpster rentals in {cityShort}. Spring cleaning projects, landscaping work, and home improvement projects peak during this time.</p>
              <ul className="text-gray-700 space-y-2">
                <li>• <strong>Spring Cleaning:</strong> Garage and attic cleanouts after winter</li>
                <li>• <strong>Landscaping:</strong> Yard waste, tree trimming, and garden renovations</li>
                <li>• <strong>Home Improvements:</strong> Exterior painting, deck building, and outdoor projects</li>
                <li>• <strong>Construction:</strong> Peak building season with increased construction debris</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Fall & Winter</h3>
              <p className="text-gray-700 mb-4">While demand may be lower, winter projects still require reliable dumpster services. Indoor renovations and preparation for seasonal changes are common.</p>
              <ul className="text-gray-700 space-y-2">
                <li>• <strong>Indoor Renovations:</strong> Kitchen and bathroom remodels during colder months</li>
                <li>• <strong>Holiday Preparation:</strong> Decluttering before holiday gatherings</li>
                <li>• <strong>Weather Damage:</strong> Cleanup after storms and weather-related damage</li>
                <li>• <strong>Year-End Projects:</strong> Completing projects before the new year</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Environmental Impact */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Environmental Responsibility in {cityShort}</h2>
          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <h3 className="text-xl font-semibold text-green-900 mb-4">Our Commitment to Sustainability</h3>
            <p className="text-gray-700 mb-4">At Icon Dumpsters, we understand the importance of responsible waste management in {cityShort} and throughout Utah. Our environmental practices include:</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-900 mb-2">Recycling Programs</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Construction materials sorting and recycling</li>
                  <li>• Metal and wood separation for reuse</li>
                  <li>• Concrete and asphalt recycling</li>
                  <li>• Cardboard and paper waste processing</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-900 mb-2">Waste Reduction</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Efficient routing to minimize fuel consumption</li>
                  <li>• Proper dumpster sizing to reduce waste</li>
                  <li>• Education on waste separation</li>
                  <li>• Partnership with local recycling facilities</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Sizes */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Dumpster Sizes & Uses for {cityShort} Projects</h2>
          <p className="text-gray-600 mb-6">Choosing the right dumpster size is crucial for the success of your {cityShort} project. Our comprehensive size guide helps you make an informed decision based on your specific needs and project scope.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                title: '15-Yard', 
                description: 'Perfect for small to medium projects',
                items: ['Small cleanouts', 'Bathroom remodels', 'Yard debris', 'Garage organization', 'Minor renovations'],
                capacity: '15 cubic yards',
                dimensions: '12\' x 8\' x 4\'',
                weightLimit: '3 tons'
              },
              { 
                title: '20-Yard', 
                description: 'Ideal for medium to large projects',
                items: ['Kitchen remodels', 'Roofing projects', 'Medium renovations', 'Basement finishing', 'Office cleanouts'],
                capacity: '20 cubic yards',
                dimensions: '12\' x 8\' x 5\'',
                weightLimit: '4 tons'
              },
              { 
                title: '30-Yard', 
                description: 'Best for major projects',
                items: ['Whole-home cleanouts', 'Construction & demo', 'Commercial projects', 'Large renovations', 'Multi-room remodels'],
                capacity: '30 cubic yards',
                dimensions: '12\' x 8\' x 6\'',
                weightLimit: '6 tons'
              },
            ].map((c) => (
              <div key={c.title} className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{c.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{c.description}</p>
                <div className="text-xs text-gray-500 mb-3">
                  <p><strong>Capacity:</strong> {c.capacity}</p>
                  <p><strong>Dimensions:</strong> {c.dimensions}</p>
                  <p><strong>Weight Limit:</strong> {c.weightLimit}</p>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Perfect For:</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  {c.items.map((i) => (<li key={i}>• {i}</li>))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Planning & Preparation */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Planning Your {cityShort} Dumpster Rental</h2>
          <p className="text-gray-600 mb-6">Proper planning ensures a smooth dumpster rental experience in {cityShort}. Consider these important factors when preparing for your project to maximize efficiency and minimize costs.</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Timeline Considerations</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• <strong>Project Duration:</strong> Estimate your project timeline to choose the right rental period</li>
                <li>• <strong>Weather Factors:</strong> Consider seasonal weather patterns in {cityShort} that may affect your project</li>
                <li>• <strong>Permit Processing:</strong> Allow time for permit applications if street placement is required</li>
                <li>• <strong>Delivery Scheduling:</strong> Plan delivery timing to coincide with project start dates</li>
                <li>• <strong>Pickup Coordination:</strong> Schedule pickup when your project is complete</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Site Preparation</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• <strong>Access Requirements:</strong> Ensure adequate space for delivery truck access</li>
                <li>• <strong>Surface Conditions:</strong> Prepare a stable, level surface for dumpster placement</li>
                <li>• <strong>Clearance Needs:</strong> Remove obstacles that might impede delivery or pickup</li>
                <li>• <strong>Safety Considerations:</strong> Plan for safe loading and unloading procedures</li>
                <li>• <strong>Neighbor Communication:</strong> Inform neighbors about the temporary dumpster placement</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions – {cityShort}</h2>
          <p className="text-gray-600 mb-6">Get answers to the most common questions about dumpster rental in {cityShort}. Our local expertise helps us provide accurate, city-specific information for your project needs.</p>
          <div className="space-y-4">
            {[
              { 
                q: `How much does dumpster rental cost in ${cityShort}?`, 
                a: `Dumpster rental pricing in ${cityShort} varies based on size, rental duration, and project type. Our transparent pricing structure starts at $250 for 10-yard dumpsters and goes up to $450 for 30-yard containers. All prices include delivery, pickup, and disposal fees. We offer bundle pricing for different rental periods (1-day, 3-7 days, 30 days) to give you the best value for your ${cityShort} project. Contact us for a personalized quote based on your specific needs.`
              },
              { 
                q: 'Do you offer same-day delivery in the area?', 
                a: `Yes, we provide same-day delivery throughout ${cityShort} when you call before 2 PM. Our local drivers are familiar with the area's traffic patterns and can navigate efficiently to get your dumpster delivered quickly. Same-day service is subject to availability and is perfect for urgent projects or last-minute cleanup needs in ${cityShort}.`
              },
              { 
                q: 'What dumpster sizes are available for my project?', 
                a: `We offer a comprehensive range of dumpster sizes to meet ${cityShort}'s diverse project needs. Our selection includes 10-yard dumpsters for small cleanouts, 15-yard containers for medium projects, 20-yard dumpsters for larger renovations, and 30-yard containers for major construction or demolition projects. Our team can help you select the right size based on your project scope and waste volume.`
              },
              { 
                q: 'Do I need a permit for street placement in this area?', 
                a: `Permit requirements in ${cityShort} vary by neighborhood and placement location. If placing on private property (driveway, yard), permits are usually not required. However, street placement typically requires a city permit. Our team is familiar with ${cityShort}'s local regulations and can help you determine permit requirements and assist with the application process to ensure compliance.`
              },
              { 
                q: 'How long can I keep the dumpster for my project?', 
                a: `Rental periods in ${cityShort} are flexible to accommodate your project timeline. Standard rentals include 7-14 days, but we offer extended periods for longer projects. Our bundle pricing includes different timeframes (1-day, 3-7 days, 30 days) to give you cost-effective options. We understand that ${cityShort} projects can vary in duration, so we work with you to find the right rental period.`
              },
              { 
                q: 'What types of waste can I put in the dumpster?', 
                a: `Our dumpsters in ${cityShort} accept most construction debris, household junk, furniture, yard waste, and general non-hazardous materials. This includes building materials, old appliances (without refrigerants), furniture, landscaping debris, and general cleanup waste. We cannot accept hazardous materials, chemicals, tires, batteries, or medical waste. Contact us for a complete list of acceptable and prohibited items specific to your ${cityShort} project.`
              }
            ].map((item) => (
              <div key={item.q} className="bg-gray-50 p-6 rounded-lg border">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-gray-700">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA & Quote */}
        <section className="bg-gradient-to-r from-[#4e37a8] to-purple-700 rounded-2xl p-8 text-white text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">Ready to Get Your Dumpster in {cityShort}?</h2>
          <p className="text-purple-100 mb-6">Get instant pricing or call (801) 918-6000.</p>
          <a href="#quote" onClick={() => { try { (window as any).dataLayer?.push({ event:'cta_click', cta:'quote_city' }); fetch('/api/analytics',{ method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ type:'cta', name:'quote_city' })}); } catch {} }} className="inline-block bg-white text-[#4e37a8] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">Start Free Quote</a>
        </section>
        <div id="quote" className="mb-12">
          <QuoteForm />
        </div>
        <InternalLinks className="mb-12" />

        <BookNowBanner />
      </main>
    </div>
  );
}


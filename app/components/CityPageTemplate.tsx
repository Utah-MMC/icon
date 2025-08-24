'use client';

import Link from 'next/link';
import DumpsterCalculator from './DumpsterCalculator';
import QuoteForm from './QuoteForm';
import ImageWithFallback from './ImageWithFallback';
import CalculatorCTA from './CalculatorCTA';
import InternalLinks from './InternalLinks';
import AvailableTodayBadge from './AvailableTodayBadge';
import BookNowBanner from './BookNowBanner';

interface CityPageTemplateProps {
  city: string;
  neighborhoods: string[];
  nearbyLinks: { label: string; href: string }[];
  heroImages?: { src: string; fallback?: string }[]; // 1-2 images
  showCalculator?: boolean;
}

export default function CityPageTemplate({ city, neighborhoods, nearbyLinks, heroImages = [], showCalculator = false }: CityPageTemplateProps) {
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
  const heroGradient = pick([
    'from-[#4e37a8] via-purple-700 to-[#4e37a8]',
    'from-purple-700 via-[#4e37a8] to-purple-700',
    'from-indigo-600 via-purple-700 to-indigo-600',
  ]);

  const neighborhoodsShuffled = shuffle(neighborhoods);
  const nearbyLinksShuffled = shuffle(nearbyLinks);
  const gallerySwap = rng() > 0.5;
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className={`bg-gradient-to-br ${heroGradient} text-white py-16`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">{heroTitle}</h1>
              <p className="text-purple-100 text-lg md:text-xl">{heroSubtitle}</p>
            </div>
            {heroImages[0] && (
              <div className="h-48 md:h-56 lg:h-64 relative rounded-xl overflow-hidden shadow-lg bg-white flex items-center justify-center">
                <ImageWithFallback src={heroImages[0].src} fallbackSrc={heroImages[0].fallback} alt={`${cityShort} dumpster rental`} fill className="object-contain" />
              </div>
            )}
          </div>
        </div>
      </section>

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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Icon Dumpsters</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/same-day-delivery" className="bg-purple-50 p-6 rounded-lg block hover:ring-2 hover:ring-purple-300 transition-shadow">
              <h3 className="text-xl font-semibold text-purple-900 mb-2">🚚 Same‑Day Delivery</h3>
              <p className="text-gray-700">Fast delivery across {cityShort} and the valley.</p>
            </Link>
            <Link href="/transparent-pricing" className="bg-blue-50 p-6 rounded-lg block hover:ring-2 hover:ring-blue-300 transition-shadow">
              <h3 className="text-xl font-semibold text-blue-900 mb-2">💰 Transparent Pricing</h3>
              <p className="text-gray-700">No hidden fees. Bundle pricing for 1‑day, 3‑7 days, and 30‑day rentals.</p>
            </Link>
            <Link href="/local-pros" className="bg-green-50 p-6 rounded-lg block hover:ring-2 hover:ring-green-300 transition-shadow">
              <h3 className="text-xl font-semibold text-green-900 mb-2">👷 Local Pros</h3>
              <p className="text-gray-700">Experienced drivers and regulation know‑how.</p>
            </Link>
            <Link href="/responsible-disposal" className="bg-orange-50 p-6 rounded-lg block hover:ring-2 hover:ring-orange-300 transition-shadow">
              <h3 className="text-xl font-semibold text-orange-900 mb-2">♻️ Responsible Disposal</h3>
              <p className="text-gray-700">We recycle whenever possible.</p>
            </Link>
          </div>
        </section>

        {/* Service Areas */}
        <section className="bg-blue-50 p-8 rounded-xl mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{cityShort} Service Areas</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Neighborhoods</h3>
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

        {/* Visual Gallery: two images side by side to fill space */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(!gallerySwap ? [0,1] : [1,0]).map((idx) => (
              <div key={idx} className="w-full h-64 md:h-80 lg:h-96 relative rounded-xl overflow-hidden shadow bg-white flex items-center justify-center">
                <ImageWithFallback 
                  src={(heroImages[idx]?.src) || (idx === 0 ? '/images/IMG_0350.jpg' : '/images/dumpsterWithTruck.jpeg')} 
                  fallbackSrc={(heroImages[idx]?.fallback) || (idx === 0 ? '/images/dumpsterWithTruck.jpeg' : '/images/dumpsters.webp')} 
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
        <section className="bg-white rounded-xl shadow-md p-8 mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">{cityShort} Dumpster Rental Pricing</h2>
            <AvailableTodayBadge />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[ 
              { title: '10‑Yard Dumpster', price: 250, note: 'Perfect for small projects', bullets: ['Garage cleanup', 'Small renovation', 'Yard waste', '7‑day rental included'] },
              { title: '15‑Yard Dumpster', price: 300, note: 'Ideal for medium projects', bullets: ['Bathroom renovation', 'Basement cleanup', 'Roof replacement', '10‑day rental included'] },
              { title: '20‑Yard Dumpster', price: 350, note: 'Great for large projects', bullets: ['Whole‑home renovation', 'Commercial cleanup', 'Large demolition', '14‑day rental included'] },
              { title: '30‑Yard Dumpster', price: 450, note: 'For major projects', bullets: ['Commercial construction', 'Major demo', 'Large‑scale cleanup', '14‑day rental included'] }
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
              <li>• Dumpsters cannot block sidewalks, driveways, or rights‑of‑way</li>
              <li>• Street placement may require a city permit</li>
              <li>• Typical rental periods range from 7–30 days</li>
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

        {/* Sizes */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Dumpster Sizes & Uses</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: '15‑Yard', items: ['Small cleanouts', 'Bathroom remodels', 'Yard debris'] },
              { title: '20‑Yard', items: ['Kitchen remodels', 'Roofing projects', 'Medium renovations'] },
              { title: '30‑Yard', items: ['Whole‑home cleanouts', 'Construction & demo', 'Commercial projects'] },
            ].map((c) => (
              <div key={c.title} className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{c.title}</h3>
                <ul className="text-gray-700 space-y-1">
                  {c.items.map((i) => (<li key={i}>• {i}</li>))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions – {cityShort}</h2>
          <div className="space-y-4">
            {[
              { q: `How much does dumpster rental cost in ${cityShort}?`, a: 'Pricing depends on size and rental duration. Typical pricing starts at $250 for 10‑yard up to $450 for 30‑yard with bundle periods included.' },
              { q: 'Do you offer same‑day delivery?', a: 'Yes, same‑day delivery is often available when you call before 2 PM.' },
              { q: 'What sizes are available?', a: 'We offer 15‑, 20‑, and 30‑yard dumpsters with guidance to select the right size for your project.' },
              { q: 'Do I need a permit for street placement?', a: 'Some neighborhoods require permits for street placement. We can help you check and handle the process.' }
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
          <p className="text-purple-100 mb-6">Get instant pricing or call (801) 918‑6000.</p>
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


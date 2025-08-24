import type { Metadata } from 'next';
import InternalLinks from '../components/InternalLinks';
import QuoteForm from '../components/QuoteForm';
import ImageWithFallback from '../components/ImageWithFallback';

export const metadata: Metadata = {
  title: 'Dumpster Rental West Jordan, UT | Same‑Day Delivery | Icon Dumpsters',
  description: 'West Jordan dumpster rental with same‑day delivery. 15‑30 yard roll‑off dumpsters, transparent pricing, and fast service. Get a free quote today.',
  keywords: ['dumpster rental', 'dumpster rental near me', 'utah dumpster rental', 'dumpster rental Utah', 'West Jordan dumpster'],
  alternates: { canonical: '/dumpster-rental-west-jordan-ut' },
  openGraph: {
    title: 'Dumpster Rental West Jordan, UT | Same‑Day Delivery | Icon Dumpsters',
    description: 'West Jordan dumpster rental with same‑day delivery. 15‑30 yard roll‑off dumpsters, transparent pricing, and fast service.',
    url: 'https://icondumpsters.com/dumpster-rental-west-jordan-ut',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'West Jordan Dumpster Rental - Icon Dumpsters' }],
    type: 'website'
  },
  robots: { index: true, follow: true }
};

export default function WJDumpsterRentalPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-[#4e37a8] via-purple-700 to-[#4e37a8] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Dumpster Rental West Jordan, UT</h1>
              <p className="text-purple-100 text-lg md:text-xl">Same‑day delivery, transparent pricing, and friendly local service. 15, 20, and 30‑yard roll‑off dumpsters.</p>
            </div>
            <div className="h-48 md:h-56 lg:h-64 relative rounded-xl overflow-hidden shadow-lg bg-white flex items-center justify-center">
              <ImageWithFallback src="/images/IMG_0350.jpg" fallbackSrc="/images/dumpsterWithTruck.jpeg" alt="West Jordan dumpster rental" fill className="object-contain" />
            </div>
          </div>
        </div>
      </section>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="bg-white rounded-xl shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Dumpster Sizes & Pricing</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: '15‑Yard', bullets: ['Garage cleanouts', 'Yard debris', 'Small renovations'] },
              { title: '20‑Yard', bullets: ['Kitchen remodels', 'Roofing projects', 'Medium renovations'] },
              { title: '30‑Yard', bullets: ['Construction & demo', 'Large cleanouts', 'Commercial projects'] },
            ].map((c) => (
              <div key={c.title} className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{c.title}</h3>
                <ul className="text-gray-700 space-y-1">
                  {c.bullets.map((i) => (<li key={i}>• {i}</li>))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-6 text-sm text-gray-600">Weight billed after pickup at $55/ton. Call <a className="text-[#4e37a8] underline" href="tel:801-918-6000">(801) 918‑6000</a> for exact pricing.</div>
        </section>
        <section className="bg-gradient-to-r from-[#4e37a8] to-purple-700 rounded-2xl p-8 text-white text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">Ready to Get Your Dumpster in West Jordan?</h2>
          <p className="text-purple-100 mb-6">Get instant pricing or call (801) 918‑6000.</p>
          <a href="#quote" className="inline-block bg-white text-[#4e37a8] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">Start Free Quote</a>
        </section>
        <div id="quote" className="mb-12">
          <QuoteForm />
        </div>
        <InternalLinks className="mb-12" />
      </main>
    </div>
  );
}



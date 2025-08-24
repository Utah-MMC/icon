import type { Metadata } from 'next';
import FeesAndSurcharges from '../components/FeesAndSurcharges';

export const metadata: Metadata = {
  title: 'Fees & Surcharges | Icon Dumpsters',
  description: 'Transparent dumpster rental fees in Utah: weight billed at $55/ton after pickup, plus optional item surcharges (mattress, fridge, tires). No hidden fees.',
  alternates: { canonical: '/fees' },
  robots: { index: true, follow: true }
};

export default function FeesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Fees & Surcharges</h1>
        <p className="text-gray-600 mb-8">We keep pricing simple and transparent. Below are the typical weight rates and item fees. Call us with any questions at <a href="tel:801-918-6000" className="text-[#4e37a8] underline">(801) 918‑6000</a>.</p>
        <FeesAndSurcharges />
      </div>
    </div>
  );
}



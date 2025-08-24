import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accurate Weight-Based Billing | Icon Dumpsters',
  description: 'Transparent billing based on actual landfill tonnage with sample calculations and tips to avoid overage.',
  alternates: { canonical: '/accurate-weight-based-billing' },
};

export default function AccurateWeightBillingPage() {
  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-4">
          <a href="/" className="text-[#4e37a8] hover:underline">Home</a>
          <span className="mx-2">/</span>
          <span>Accurate Weight-Based Billing</span>
        </nav>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Accurate Weight-Based Billing</h1>
        <p className="text-lg text-gray-700 mb-6">We bill by actual disposal weight at a fair per-ton rate with no hidden fees.</p>
        <p className="text-gray-700">Tip: Keep dirt, concrete, and roofing separate to manage weight efficiently.</p>
      </div>
    </div>
  );
}



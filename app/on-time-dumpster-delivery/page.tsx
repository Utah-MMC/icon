import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'On-Time Dumpster Delivery | Icon Dumpsters',
  description: 'What to expect on delivery day: ETA updates, placement process, and safety guidelines for on-time dumpster delivery.',
  alternates: { canonical: '/on-time-dumpster-delivery' },
};

export default function OnTimeDeliveryPage() {
  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-4">
          <a href="/" className="text-[#4e37a8] hover:underline">Home</a>
          <span className="mx-2">/</span>
          <span>On-Time Dumpster Delivery</span>
        </nav>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">On-Time Dumpster Delivery</h1>
        <p className="text-lg text-gray-700 mb-6">We coordinate accurate ETAs and placement to keep your project moving without delays.</p>
        <p className="text-gray-700">Please ensure access is clear and vehicles are moved during your delivery window.</p>
      </div>
    </div>
  );
}



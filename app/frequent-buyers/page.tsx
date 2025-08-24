import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Frequent Buyers Program | Icon Dumpsters',
  description: 'Save on repeat dumpster rentals with Icon Dumpsters. Contractor and multi-project discounts, priority scheduling, and dedicated support.',
  alternates: { canonical: '/frequent-buyers' },
  robots: { index: true, follow: true }
};

export default function FrequentBuyers() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Frequent Buyers Program</h1>
        <p className="text-gray-700 mb-6">Designed for contractors and repeat customers who rent multiple dumpsters throughout the year.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-white rounded-xl shadow border p-6">
            <h2 className="text-xl font-semibold mb-2">Member Benefits</h2>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li>• Discounted base rates after your 3rd rental</li>
              <li>• Priority scheduling and swap‑outs</li>
              <li>• Dedicated support contact</li>
              <li>• Flexible billing for active jobsites</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl shadow border p-6">
            <h2 className="text-xl font-semibold mb-2">How It Works</h2>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li>• Enroll by calling <a href="tel:801-918-6000" className="text-[#4e37a8] underline">(801) 918‑6000</a></li>
              <li>• Get a member code tied to your account</li>
              <li>• Use it on new orders to apply member rates</li>
            </ul>
          </div>
        </div>
        <a href="/#quote-form" className="inline-block bg-[#4e37a8] text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700">Enroll Now</a>
      </div>
    </div>
  );
}



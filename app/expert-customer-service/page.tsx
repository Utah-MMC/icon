import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Expert Customer Service | Icon Dumpsters',
  description: 'Our experienced team helps you choose the right dumpster size and provides guidance throughout your project.',
  alternates: { canonical: '/expert-customer-service' },
};

export default function ExpertCustomerServicePage() {
  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-4">
          <a href="/" className="text-[#4e37a8] hover:underline">Home</a>
          <span className="mx-2">/</span>
          <span>Expert Customer Service</span>
        </nav>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Expert Customer Service</h1>
        <p className="text-lg text-gray-700 mb-6">Talk to a real person 7 days a week. We’ll help you plan size, placement and timing for a smooth project.</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Quick quotes and real‑time scheduling</li>
          <li>Project‑specific guidance</li>
          <li>Friendly, local support</li>
        </ul>
        <div className="mt-10">
          <a href="/contact" className="inline-block bg-[#4e37a8] text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700">Contact Us</a>
        </div>
      </div>
    </div>
  );
}



import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Multiple Sizes Available | Icon Dumpsters',
  description: 'From 15‑yard to 30‑yard dumpsters, we have the perfect size for your project needs and space constraints.',
  alternates: { canonical: '/multiple-sizes-available' },
};

export default function MultipleSizesAvailablePage() {
  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-4">
          <a href="/" className="text-[#4e37a8] hover:underline">Home</a>
          <span className="mx-2">/</span>
          <span>Multiple Sizes Available</span>
        </nav>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Multiple Sizes Available</h1>
        <p className="text-lg text-gray-700 mb-6">From small cleanouts to major renovations, choose from 15‑, 20‑ and 30‑yard roll‑off dumpsters.</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>15‑yard: tight driveways and small projects</li>
          <li>20‑yard: most renovations and roofing</li>
          <li>30‑yard: large construction and cleanouts</li>
        </ul>
        <div className="mt-10">
          <a href="/dumpster-sizes" className="inline-block bg-[#4e37a8] text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700">View Dumpster Sizes</a>
        </div>
      </div>
    </div>
  );
}



import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Utah‑Wide Coverage | Icon Dumpsters',
  description: 'Serving all of Utah with reliable dumpster rental services. From Salt Lake City to Provo and beyond, we’re here for you.',
  alternates: { canonical: '/utah-wide-coverage' },
};

export default function UtahWideCoveragePage() {
  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-4">
          <a href="https://icondumpsters.com/" className="text-[#4e37a8] hover:underline">Home</a>
          <span className="mx-2">/</span>
          <span>Utah‑Wide Coverage</span>
        </nav>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Utah‑Wide Coverage</h1>
        <p className="text-lg text-gray-700 mb-6">We serve the Wasatch Front and surrounding areas with dependable delivery, pickup, and support.</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Salt Lake, Utah, Davis, Weber and Summit counties</li>
          <li>Fast routes and dedicated dispatch</li>
          <li>Local knowledge for permits and placement</li>
        </ul>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href="https://icondumpsters.com/locations" className="inline-block bg-[#4e37a8] text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700">Browse Locations</a>
          <a href="https://icondumpsters.com/#quote-form" className="inline-block border-2 border-[#4e37a8] text-[#4e37a8] px-6 py-3 rounded-lg font-semibold hover:bg-[#4e37a8] hover:text-white">Get Free Quote</a>
        </div>
      </div>
    </div>
  );
}



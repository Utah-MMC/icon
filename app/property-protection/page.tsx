import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Driveway & Property Protection | Icon Dumpsters',
  description: 'We use protective materials to safeguard your driveway and property during delivery and pickup operations.',
  alternates: { canonical: '/property-protection' },
};

export default function PropertyProtectionPage() {
  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-4">
          <a href="https://icondumpsters.com/" className="text-[#4e37a8] hover:underline">Home</a>
          <span className="mx-2">/</span>
          <span>Property Protection</span>
        </nav>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Driveway & Property Protection</h1>
        <p className="text-lg text-gray-700 mb-6">Protective boards, careful placement, and trained drivers help keep your driveway and jobsite safe.</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Protective mats/boards on request</li>
          <li>Spotter assistance for tight placements</li>
          <li>Clear site communication with dispatch</li>
        </ul>
        <div className="mt-10">
          <a href="https://icondumpsters.com/#quote-form" className="inline-block bg-[#4e37a8] text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700">Get Free Quote</a>
        </div>
      </div>
    </div>
  );
}



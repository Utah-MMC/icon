import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Professional Waste Removal | Icon Dumpsters',
  description: 'What happens after you fill your dumpster: timely pickup, responsible disposal, and recycling where possible.',
  alternates: { canonical: '/professional-waste-removal' },
};

export default function ProfessionalWasteRemovalPage() {
  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-4">
          <a href="https://icondumpsters.com/" className="text-[#4e37a8] hover:underline">Home</a>
          <span className="mx-2">/</span>
          <span>Professional Waste Removal</span>
        </nav>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Professional Waste Removal</h1>
        <p className="text-lg text-gray-700 mb-6">Our team removes and disposes of materials responsibly with full compliance.</p>
        <p className="text-gray-700">We prioritize recycling streams for concrete, metal, and clean wood when available.</p>
      </div>
    </div>
  );
}



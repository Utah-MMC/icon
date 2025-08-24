import Link from 'next/link';

export const metadata = {
  title: 'Transparent Pricing | Icon Dumpsters',
  description: 'No hidden fees. Clear bundle pricing for 1‑day, 3‑7 days, 14‑day and 30‑day rentals. Weight billed at $55/ton after pickup.',
};

export default function TransparentPricing() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Transparent Pricing</h1>
      <p className="text-lg text-gray-700 mb-6">Simple bundles with no hidden fees. Choose the rental length that fits your project.</p>
      <div className="grid sm:grid-cols-3 gap-4 mb-8">
        {[
          { title: '1‑Day Special', note: 'Save with short projects' },
          { title: '3–7 Day Bundle', note: 'Most popular' },
          { title: '30‑Day Rental', note: 'Long‑term projects' },
        ].map((c) => (
          <div key={c.title} className="border rounded-lg p-4">
            <div className="font-semibold text-gray-900">{c.title}</div>
            <div className="text-sm text-gray-600">{c.note}</div>
          </div>
        ))}
      </div>
      <p className="text-gray-700 mb-8">Weight is billed after disposal at $55/ton. We\'ll email a receipt with the scale ticket.</p>
      <div className="flex gap-3">
        <Link href="/dumpster-calculator" className="bg-[#4e37a8] text-white px-5 py-3 rounded-lg hover:bg-purple-700">Open Calculator</Link>
        <Link href="/" className="border-2 border-[#4e37a8] text-[#4e37a8] px-5 py-3 rounded-lg hover:bg-[#4e37a8] hover:text-white">Get Free Quote</Link>
      </div>
    </div>
  );
}



import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dumpster Rental Spanish Fork, UT | Icon Dumpsters - Same Day Delivery",
  description: "Professional dumpster rental in Spanish Fork, Utah. Get same-day delivery for 15-30 yard roll-off dumpsters. Serving Spanish Fork and Utah County. Call (801) 918-6000 for free quote!",
  keywords: "dumpster rental spanish fork ut, spanish fork dumpster rental, roll-off dumpster spanish fork, construction dumpster spanish fork utah, spanish fork waste disposal, dumpster rental near me spanish fork",
  openGraph: {
    title: "Dumpster Rental Spanish Fork, UT | Icon Dumpsters",
    description: "Professional dumpster rental services in Spanish Fork, Utah. Same-day delivery, competitive pricing, and reliable service.",
    url: "https://www.icondumpsters.com/spanish-fork",
    siteName: "Icon Dumpsters",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dumpster Rental Spanish Fork, UT | Icon Dumpsters",
    description: "Professional dumpster rental services in Spanish Fork, Utah. Same-day delivery and competitive pricing.",
  },
  alternates: {
    canonical: "https://www.icondumpsters.com/spanish-fork",
  },
};

export default function SpanishForkPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Dumpster Rental Spanish Fork, UT
        </h1>
        <p className="text-lg text-gray-600">
          Professional dumpster rental services in Spanish Fork, Utah. Get same-day delivery for 15-30 yard roll-off dumpsters.
        </p>
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Icon Dumpsters in Spanish Fork?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Same-day delivery to Spanish Fork and surrounding areas</li>
            <li>Competitive pricing with no hidden fees</li>
            <li>Flexible rental periods (1-30 days)</li>
            <li>Professional customer service</li>
            <li>Local knowledge of Spanish Fork regulations</li>
            <li>Multiple dumpster sizes available</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

'use client';

export default function WestJordanPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Dumpster Rental West Jordan, UT
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Professional dumpster rental services in West Jordan, Utah. Get same-day delivery for 15-30 yard roll-off dumpsters.
        </p>
        
        <div className="bg-gray-50 p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Icon Dumpsters in West Jordan?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Same-day delivery to West Jordan and surrounding areas</li>
            <li>Competitive pricing with no hidden fees</li>
            <li>Flexible rental periods (1-30 days)</li>
            <li>Professional customer service</li>
            <li>Local knowledge of West Jordan regulations</li>
            <li>Multiple dumpster sizes available</li>
          </ul>
        </div>

        <div className="bg-blue-50 p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">West Jordan Service Areas</h2>
          <p className="text-gray-600 mb-4">We serve all of West Jordan and surrounding communities:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">West Jordan Areas:</h3>
              <ul className="space-y-1 text-gray-600">
                <li>• Downtown West Jordan</li>
                <li>• West Jordan Heights</li>
                <li>• West Jordan East</li>
                <li>• West Jordan West</li>
                <li>• Jordan Landing</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Nearby Cities:</h3>
              <ul className="space-y-1 text-gray-600">
                <li>• South Jordan</li>
                <li>• Taylorsville</li>
                <li>• Kearns</li>
                <li>• West Valley City</li>
                <li>• Riverton</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-green-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Popular West Jordan Projects</h2>
          <p className="text-gray-600 mb-4">We serve a variety of projects in West Jordan:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Residential Projects:</h3>
              <ul className="space-y-1 text-gray-600">
                <li>• Home renovations</li>
                <li>• Garage cleanouts</li>
                <li>• Yard waste removal</li>
                <li>• Moving and estate cleanouts</li>
                <li>• Basement finishing</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Commercial Projects:</h3>
              <ul className="space-y-1 text-gray-600">
                <li>• Construction debris</li>
                <li>• Office renovations</li>
                <li>• Retail remodeling</li>
                <li>• Property management</li>
                <li>• Landscaping projects</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

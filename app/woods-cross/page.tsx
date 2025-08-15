'use client';

import DumpsterCalculator from '../components/DumpsterCalculator';
import QuoteForm from '../components/QuoteForm';

export default function WoodsCrossPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Dumpster Rental Woods Cross, UT
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Professional dumpster rental services in Woods Cross, Utah. Get same-day delivery for 15-30 yard roll-off dumpsters.
        </p>
        <div id="pricing" className="mb-12">
          <DumpsterCalculator />
        </div>
        <div className="bg-gray-50 p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Icon Dumpsters in Woods Cross?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Same-day delivery to Woods Cross and surrounding areas</li>
            <li>Competitive pricing with no hidden fees</li>
            <li>Flexible rental periods (1-30 days)</li>
            <li>Professional customer service</li>
            <li>Local knowledge of Woods Cross regulations</li>
            <li>Multiple dumpster sizes available</li>
          </ul>
        </div>
        <div className="bg-blue-50 p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Woods Cross Service Areas</h2>
          <p className="text-gray-600 mb-4">We serve all of Woods Cross and surrounding communities:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Woods Cross Areas:</h3>
              <ul className="space-y-1 text-gray-600">
                <li>• Woods Cross Central</li>
                <li>• Mountain View</li>
                <li>• Mills Park</li>
                <li>• West Bountiful</li>
                <li>• South Woods Cross</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Nearby Cities:</h3>
              <ul className="space-y-1 text-gray-600">
                <li>• <a href="/bountiful" className="text-[#4e37a8] hover:underline">Bountiful</a></li>
                <li>• <a href="/north-salt-lake" className="text-[#4e37a8] hover:underline">North Salt Lake</a></li>
                <li>• <a href="/centerville" className="text-[#4e37a8] hover:underline">Centerville</a></li>
                <li>• <a href="/salt-lake-city" className="text-[#4e37a8] hover:underline">Salt Lake City</a></li>
                <li>• <a href="/farmington" className="text-[#4e37a8] hover:underline">Farmington</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-green-50 p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Woods Cross Dumpster Services</h2>
          <p className="text-gray-600 mb-4">Explore our comprehensive dumpster rental services in Woods Cross:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Dumpster Sizes</h3>
              <p className="text-gray-600 mb-3">15, 20, and 30 yard options</p>
              <a href="/dumpster-sizes" className="text-[#4e37a8] hover:underline font-medium">View All Sizes →</a>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Pricing</h3>
              <p className="text-gray-600 mb-3">Competitive rates with no hidden fees</p>
              <a href="#pricing" className="text-[#4e37a8] hover:underline font-medium">Get Quote →</a>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Services</h3>
              <p className="text-gray-600 mb-3">Residential and commercial solutions</p>
              <a href="/services" className="text-[#4e37a8] hover:underline font-medium">Learn More →</a>
            </div>
          </div>
        </div>
        <div className="mb-12">
          <QuoteForm />
        </div>
      </div>
    </div>
  );
}

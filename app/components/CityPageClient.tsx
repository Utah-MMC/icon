'use client';

import DumpsterCalculator from './DumpsterCalculator';
import QuoteForm from './QuoteForm';

interface CityPageClientProps {
  cityName: string;
  cityDisplayName: string;
  nearbyCities: Array<{
    name: string;
    href: string;
  }>;
  historicalInfo?: string;
  landmarks?: string;
  localProjects?: string;
  neighborhoods?: string;
  localBusinesses?: string;
}

export default function CityPageClient({ 
  cityName, 
  cityDisplayName, 
  nearbyCities,
  historicalInfo,
  landmarks,
  localProjects,
  neighborhoods,
  localBusinesses
}: CityPageClientProps) {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Dumpster Rental {cityDisplayName}, UT
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Professional dumpster rental services in {cityDisplayName}, Utah. Get same-day delivery for 15-30 yard roll-off dumpsters.
        </p>
        <div id="pricing" className="mb-12">
          <DumpsterCalculator />
        </div>
        <div className="bg-gray-50 p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Icon Dumpsters in {cityDisplayName}?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Same-day delivery to {cityDisplayName} and surrounding areas</li>
            <li>Competitive pricing with no hidden fees</li>
            <li>Flexible rental periods (1-30 days)</li>
            <li>Professional customer service</li>
            <li>Local knowledge of {cityDisplayName} regulations</li>
            <li>Multiple dumpster sizes available</li>
          </ul>
        </div>

        {/* City-Specific Information */}
        {historicalInfo && (
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">About {cityDisplayName}</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              {historicalInfo}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Local Landmarks</h3>
                <p className="text-gray-600 text-sm">{landmarks}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Recent Projects</h3>
                <p className="text-gray-600 text-sm">{localProjects}</p>
              </div>
            </div>
          </div>
        )}

        <div className="bg-blue-50 p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{cityDisplayName} Service Areas</h2>
          <p className="text-gray-600 mb-4">We serve all of {cityDisplayName} and surrounding communities:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">{cityDisplayName} Areas:</h3>
              <ul className="space-y-1 text-gray-600">
                {neighborhoods ? (
                  neighborhoods.split(', ').map((neighborhood, index) => (
                    <li key={index}>• {neighborhood}</li>
                  ))
                ) : (
                  <>
                    <li>• {cityDisplayName} Central</li>
                    <li>• {cityDisplayName} East</li>
                    <li>• {cityDisplayName} West</li>
                    <li>• {cityDisplayName} North</li>
                    <li>• {cityDisplayName} South</li>
                  </>
                )}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Nearby Cities:</h3>
              <ul className="space-y-1 text-gray-600">
                {nearbyCities.map((city, index) => (
                  <li key={index}>• <a href={city.href} className="text-[#4e37a8] hover:underline">{city.name}</a></li>
                ))}
              </ul>
            </div>
          </div>
          {localBusinesses && (
            <div className="mt-6">
              <h3 className="font-semibold text-gray-900 mb-2">Local Partnerships:</h3>
              <p className="text-gray-600 text-sm">{localBusinesses}</p>
            </div>
          )}
        </div>
        <div className="bg-green-50 p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{cityDisplayName} Dumpster Services</h2>
          <p className="text-gray-600 mb-4">Explore our comprehensive dumpster rental services in {cityDisplayName}:</p>
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

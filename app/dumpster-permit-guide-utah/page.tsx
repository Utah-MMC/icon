import type { Metadata } from "next";
import FAQSchema from "../components/FAQSchema";

export const metadata: Metadata = {
  title: 'Dumpster Permit Guide Utah: City-by-City Requirements & Application Process | Icon Dumpsters',
  description: 'Complete dumpster permit guide for Utah cities. Learn permit requirements, costs, and application process for Salt Lake City, West Jordan, Sandy, Murray, and all Utah municipalities.',
  keywords: ['dumpster permit utah', 'dumpster permit salt lake city', 'dumpster permit west jordan', 'dumpster permit sandy', 'utah dumpster regulations', 'dumpster permit application'],
  alternates: { canonical: 'https://icondumpsters.com/dumpster-permit-guide-utah' },
  openGraph: {
    title: 'Dumpster Permit Guide Utah: City-by-City Requirements & Application Process',
    description: 'Complete dumpster permit guide for Utah cities. Learn permit requirements, costs, and application process for all Utah municipalities.',
    url: 'https://icondumpsters.com/dumpster-permit-guide-utah',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'Utah Dumpster Permit Guide' }],
    type: 'website'
  },
  robots: { index: true, follow: true }
};

const permitFAQs = [
  {
    question: "Do I need a permit to place a dumpster on the street in Utah?",
    answer: "Yes, in most Utah cities you need a permit to place a dumpster on public streets, sidewalks, or right-of-ways. However, if you place the dumpster on your private property (driveway, yard, private parking area), no permit is required. Always check with your specific city's public works department as requirements vary by municipality."
  },
  {
    question: "How much does a dumpster permit cost in Utah cities?",
    answer: "Dumpster permit costs in Utah typically range from $25-75 depending on the city and permit duration. Salt Lake City charges $50 for a 7-day permit, West Jordan charges $35 for 14 days, Sandy charges $40 for 10 days, and Murray charges $30 for 7 days. Most permits are valid for 7-14 days with extensions available for additional fees."
  },
  {
    question: "How do I apply for a dumpster permit in Utah?",
    answer: "Apply for dumpster permits through your city's public works department. Most Utah cities offer online applications, but some require in-person visits. You'll need to provide: property address, dumpster size, placement location, rental duration, and contact information. Processing typically takes 1-3 business days, though some cities offer same-day permits for an additional fee."
  },
  {
    question: "What are the requirements for dumpster placement in Utah?",
    answer: "Utah dumpster placement requirements include: minimum 3 feet from fire hydrants, 15 feet from intersections, 5 feet from driveways, proper safety barriers/reflectors, and compliance with ADA accessibility requirements. The dumpster must not block traffic, sidewalks, or emergency vehicle access. Some cities require specific safety equipment or insurance documentation."
  },
  {
    question: "Can I get a same-day dumpster permit in Utah?",
    answer: "Some Utah cities offer same-day or expedited dumpster permits for an additional fee ($10-25). Salt Lake City, West Jordan, and Sandy typically process permits within 24 hours. For urgent projects, contact your city's public works department directly. However, planning ahead and applying 2-3 days in advance is recommended to avoid delays and additional fees."
  }
];

const utahCities = [
  {
    name: "Salt Lake City",
    permitRequired: "Yes (on public property)",
    cost: "$50",
    duration: "7 days",
    processingTime: "1-2 business days",
    contact: "(801) 535-6000",
    website: "slc.gov",
    notes: "Requires safety barriers and reflectors"
  },
  {
    name: "West Jordan",
    permitRequired: "Yes (on public property)",
    cost: "$35",
    duration: "14 days",
    processingTime: "1-2 business days",
    contact: "(801) 569-5100",
    website: "westjordan.utah.gov",
    notes: "Online application available"
  },
  {
    name: "Sandy",
    permitRequired: "Yes (on public property)",
    cost: "$40",
    duration: "10 days",
    processingTime: "1-3 business days",
    contact: "(801) 568-7100",
    website: "sandy.utah.gov",
    notes: "Requires property owner signature"
  },
  {
    name: "Murray",
    permitRequired: "Yes (on public property)",
    cost: "$30",
    duration: "7 days",
    processingTime: "1-2 business days",
    contact: "(801) 264-2600",
    website: "murraycity.org",
    notes: "Same-day permits available"
  },
  {
    name: "Draper",
    permitRequired: "Yes (on public property)",
    cost: "$25",
    duration: "7 days",
    processingTime: "2-3 business days",
    contact: "(801) 576-6500",
    website: "draper.utah.gov",
    notes: "Requires insurance certificate"
  },
  {
    name: "Lehi",
    permitRequired: "Yes (on public property)",
    cost: "$35",
    duration: "14 days",
    processingTime: "1-2 business days",
    contact: "(801) 768-7100",
    website: "lehi.org",
    notes: "Online application preferred"
  },
  {
    name: "Orem",
    permitRequired: "Yes (on public property)",
    cost: "$40",
    duration: "10 days",
    processingTime: "1-3 business days",
    contact: "(801) 229-7000",
    website: "orem.org",
    notes: "Requires site inspection"
  },
  {
    name: "Provo",
    permitRequired: "Yes (on public property)",
    cost: "$45",
    duration: "7 days",
    processingTime: "1-2 business days",
    contact: "(801) 852-6000",
    website: "provo.org",
    notes: "Requires traffic control plan"
  }
];

export default function DumpsterPermitGuideUtah() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#4e37a8] to-purple-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Complete Dumpster Permit Guide for Utah Cities
            </h1>
            <p className="text-xl text-purple-100 max-w-4xl mx-auto leading-relaxed">
              Expert guide to dumpster permit requirements, costs, and application process for all Utah municipalities. Get the permits you need without delays or fines.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="flex items-center text-white/90">
                <svg className="w-5 h-5 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>City-by-City Guide</span>
              </div>
              <div className="flex items-center text-white/90">
                <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Up-to-Date 2024</span>
              </div>
              <div className="flex items-center text-white/90">
                <svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span>Expert Guidance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Reference */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Utah Dumpster Permit Quick Reference
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Essential information about dumpster permits across Utah's major cities. Costs, requirements, and contact information.
            </p>
          </div>

          {/* Permit Requirements Visual Guide */}
          <div className="mb-12 bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Permit Requirements Visual Guide</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-12 h-12 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Private Property</h4>
                <p className="text-gray-600">No permit required</p>
                <p className="text-sm text-gray-500 mt-2">Driveway, yard, private parking</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-12 h-12 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Public Property</h4>
                <p className="text-gray-600">Permit required</p>
                <p className="text-sm text-gray-500 mt-2">Street, sidewalk, public right-of-way</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {utahCities.map((city, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{city.name}</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Permit Required:</span>
                    <span className="text-sm font-semibold text-gray-900">{city.permitRequired}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Cost:</span>
                    <span className="text-sm font-semibold text-green-600">{city.cost}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Duration:</span>
                    <span className="text-sm font-semibold text-gray-900">{city.duration}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Processing:</span>
                    <span className="text-sm font-semibold text-blue-600">{city.processingTime}</span>
                  </div>
                  <div className="pt-3 border-t border-gray-100">
                    <p className="text-xs text-gray-500 mb-2">{city.notes}</p>
                    <div className="flex flex-col space-y-1">
                      <a href={`tel:${city.contact}`} className="text-sm text-[#4e37a8] hover:underline">
                        {city.contact}
                      </a>
                      <a href={`https://${city.website}`} target="_blank" rel="noopener noreferrer" className="text-sm text-[#4e37a8] hover:underline">
                        {city.website}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Permit Requirements */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              General Permit Requirements
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Standard requirements for dumpster permits across Utah cities. Always verify with your specific city.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Requirements */}
            <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What You Need</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">Property Information</h4>
                    <p className="text-gray-600 text-sm">Complete address, property owner name, and contact information</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">Dumpster Details</h4>
                    <p className="text-gray-600 text-sm">Size, rental company, placement location, and rental duration</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">Safety Equipment</h4>
                    <p className="text-gray-600 text-sm">Reflectors, safety barriers, and traffic control devices</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">Insurance Documentation</h4>
                    <p className="text-gray-600 text-sm">Proof of liability insurance (some cities require)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Placement Rules */}
            <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Placement Rules</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-red-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">Minimum Distances</h4>
                    <p className="text-gray-600 text-sm">3 feet from fire hydrants, 15 feet from intersections, 5 feet from driveways</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-red-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">Traffic Flow</h4>
                    <p className="text-gray-600 text-sm">Cannot block traffic lanes, sidewalks, or emergency vehicle access</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-red-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">ADA Compliance</h4>
                    <p className="text-gray-600 text-sm">Must maintain accessible pathways for pedestrians with disabilities</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-red-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">Safety Requirements</h4>
                    <p className="text-gray-600 text-sm">Reflectors, barriers, and proper lighting for nighttime visibility</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How to Apply for a Dumpster Permit
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Step-by-step guide to getting your dumpster permit approved quickly and efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#4e37a8] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Gather Information</h3>
              <p className="text-gray-600">Collect property details, dumpster specifications, and rental company information. Have your contact information ready.</p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#4e37a8] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Contact Your City</h3>
              <p className="text-gray-600">Call your city's public works department or visit their website. Most Utah cities offer online applications for convenience.</p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#4e37a8] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Submit Application</h3>
              <p className="text-gray-600">Complete the permit application with all required information. Pay the permit fee and any additional charges.</p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#4e37a8] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Receive Permit</h3>
              <p className="text-gray-600">Wait for processing (1-3 business days typically). Once approved, display the permit and follow all placement requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Dumpster Permit FAQ
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Expert answers to common questions about dumpster permits in Utah cities.
            </p>
          </div>

          <div className="space-y-6">
            {permitFAQs.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start">
                    <span className="bg-[#4e37a8] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
                      {index + 1}
                    </span>
                    {faq.question}
                  </h3>
                  <div className="ml-11">
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-[#4e37a8] to-purple-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Help with Your Dumpster Permit?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Icon Dumpsters can help you navigate the permit process and ensure compliance with all Utah city requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:801-918-6000" 
              className="bg-white text-[#4e37a8] px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call (801) 918-6000
            </a>
            <a 
              href="/#quote-form" 
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-[#4e37a8] transition-colors inline-flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Get Free Quote
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Schema for AI */}
      {/* Internal Links Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Related Resources
            </h2>
            <p className="text-xl text-gray-600">
              Explore more helpful resources for your dumpster rental needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
              <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  <a href="/utah-waste-management-regulations" className="text-[#4e37a8] hover:text-purple-700 transition-colors">
                    Utah Waste Management Regulations
                  </a>
                </h3>
              </div>
            
              <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  <a href="/dumpster-size-guide-utah" className="text-[#4e37a8] hover:text-purple-700 transition-colors">
                    Dumpster Size Guide Utah
                  </a>
                </h3>
              </div>
            
              <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  <a href="/construction-waste-management-2025" className="text-[#4e37a8] hover:text-purple-700 transition-colors">
                    Construction Waste Management 2025
                  </a>
                </h3>
              </div>
            
              <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  <a href="/local-pros" className="text-[#4e37a8] hover:text-purple-700 transition-colors">
                    Local Pros
                  </a>
                </h3>
              </div>
            
          </div>
        </div>
      </section>
    
            <FAQSchema faqs={permitFAQs} pageUrl="/dumpster-permit-guide-utah" />
    </div>
  );
}

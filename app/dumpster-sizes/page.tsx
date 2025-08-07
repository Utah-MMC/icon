import { Metadata } from "next";
import ImageWithFallback from "../components/ImageWithFallback";

export const metadata: Metadata = {
  title: "Dumpster Sizes & Dimensions Guide | Icon Dumpsters Utah",
  description: "Complete guide to dumpster sizes: 10, 15, 20, 30, and 40 yard roll-off dumpsters. View dimensions, weight limits, and pricing. Find the perfect size for your project. Call (801) 918-6000.",
  keywords: "dumpster sizes, 10 yard dumpster, 15 yard dumpster, 20 yard dumpster, 30 yard dumpster, 40 yard dumpster, roll off dumpster, rolloff dumpster, dumpster rental, dumpster rental near me, roll off dumpster dimensions, dumpster weight limits, Utah dumpster rental sizes",
  openGraph: {
    title: "Dumpster Sizes & Dimensions Guide | Icon Dumpsters Utah",
    description: "Complete guide to dumpster sizes: 10, 15, 20, 30, and 40 yard roll-off dumpsters. View dimensions, weight limits, and pricing.",
    url: 'https://icondumpsters.com/dumpster-sizes',
    images: [
      {
        url: '/images/dumpsterWithTruck.webp',
        width: 1200,
        height: 630,
        alt: 'Roll Off Dumpster Sizes and Dimensions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Dumpster Sizes & Dimensions Guide | Icon Dumpsters Utah",
    description: "Complete guide to dumpster sizes: 10, 15, 20, 30, and 40 yard roll-off dumpsters. View dimensions, weight limits, and pricing.",
    images: ['/images/dumpsterWithTruck.webp'],
  },
  alternates: {
    canonical: '/dumpster-sizes',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function DumpsterSizes() {
  return (
    <div className="min-h-screen">
      {/* Top Section - Dark Blue/Image Split */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
        {/* Left Half - Icon Dumpsters Purple Background */}
        <div className="bg-[#4e37a8] text-white p-8 lg:p-12 flex flex-col justify-center">
          <div className="max-w-lg">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Roll Off Dumpster Size Guide
            </h1>
            <p className="text-lg mb-8 leading-relaxed">
              Find the right dumpster size to streamline your cleanup, whether you're clearing out a garage, 
              renovating your home or managing a commercial construction site.
            </p>
            
            {/* Call-to-Action Buttons */}
            <div className="space-y-4">
              <a 
                href="#quote-form" 
                className="inline-flex items-center bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors font-medium"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
                Get Start Pricing Online
              </a>
              <a 
                href="tel:801-918-6000" 
                className="inline-flex items-center bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-600 transition-colors font-medium"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                (801) 918-6000
              </a>
            </div>
            
            {/* Breadcrumbs */}
            <div className="mt-8 text-sm text-purple-200">
              Home &gt; Dumpster Size &gt; Roll Off Dumpsters
            </div>
          </div>
        </div>
        
        {/* Right Half - Dumpster Image */}
        <div className="relative overflow-hidden">
          <ImageWithFallback 
            src="/images/dumpsterWithTruck.webp" 
            alt="Roll Off Dumpsters" 
            className="w-full h-full object-cover"
            fallbackSrc="/images/dumpsterWithTruck.webp"
          />
          {/* Floating Orange Shapes */}
          <div className="absolute top-10 right-10 w-16 h-16 bg-orange-500 transform rotate-12 opacity-80"></div>
          <div className="absolute top-32 left-8 w-12 h-12 bg-orange-400 transform -rotate-6 opacity-70"></div>
          <div className="absolute bottom-20 right-20 w-20 h-8 bg-orange-500 transform rotate-45 opacity-90"></div>
        </div>
      </div>

      {/* Middle Section - White Background with Table */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Roll Off Dumpster Sizes and Dimensions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Review the estimated dimensions and capacities of common roll off sizes to find the most 
              efficient and affordable fit for your project.
            </p>
          </div>
          
          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-purple-50">
                  <th className="border border-gray-300 px-6 py-4 text-left font-semibold text-gray-900">
                    Roll Off Size
                  </th>
                  <th className="border border-gray-300 px-6 py-4 text-left font-semibold text-gray-900">
                    Typical Dimensions
                  </th>
                  <th className="border border-gray-300 px-6 py-4 text-left font-semibold text-gray-900">
                    Typical Weight Limit
                  </th>
                  <th className="border border-gray-300 px-6 py-4 text-left font-semibold text-gray-900">
                    Maximum Loading Level
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-6 py-4">
                    <div className="flex items-center">
                      <img src="/images/dumpsterSmallBanner.jpeg" alt="10 Yard" className="w-12 h-12 object-cover rounded mr-3" />
                      <span className="font-medium">10 Yard</span>
                    </div>
                  </td>
                  <td className="border border-gray-300 px-6 py-4">12' x 8' x 4'</td>
                  <td className="border border-gray-300 px-6 py-4">2 tons</td>
                  <td className="border border-gray-300 px-6 py-4">Level with top</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-6 py-4">
                    <div className="flex items-center">
                      <img src="/images/dumpsters.jpeg" alt="15 Yard" className="w-12 h-12 object-cover rounded mr-3" />
                      <span className="font-medium">15 Yard</span>
                    </div>
                  </td>
                  <td className="border border-gray-300 px-6 py-4">12' x 8' x 6'</td>
                  <td className="border border-gray-300 px-6 py-4">3 tons</td>
                  <td className="border border-gray-300 px-6 py-4">Level with top</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-6 py-4">
                    <div className="flex items-center">
                      <img src="/images/dumpster500x500-1.jpeg" alt="20 Yard" className="w-12 h-12 object-cover rounded mr-3" />
                      <span className="font-medium">20 Yard</span>
                    </div>
                  </td>
                  <td className="border border-gray-300 px-6 py-4">22' x 8' x 6'</td>
                  <td className="border border-gray-300 px-6 py-4">4 tons</td>
                  <td className="border border-gray-300 px-6 py-4">Level with top</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-6 py-4">
                    <div className="flex items-center">
                      <img src="/images/dumpster5-500x500-1.jpeg" alt="30 Yard" className="w-12 h-12 object-cover rounded mr-3" />
                      <span className="font-medium">30 Yard</span>
                    </div>
                  </td>
                  <td className="border border-gray-300 px-6 py-4">22' x 8' x 8'</td>
                  <td className="border border-gray-300 px-6 py-4">6 tons</td>
                  <td className="border border-gray-300 px-6 py-4">Level with top</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-6 py-4">
                    <div className="flex items-center">
                      <img src="/images/dumpsterSmallBanner2.jpeg" alt="40 Yard" className="w-12 h-12 object-cover rounded mr-3" />
                      <span className="font-medium">40 Yard</span>
                    </div>
                  </td>
                  <td className="border border-gray-300 px-6 py-4">22' x 8' x 10'</td>
                  <td className="border border-gray-300 px-6 py-4">8 tons</td>
                  <td className="border border-gray-300 px-6 py-4">Level with top</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          {/* Additional Notes */}
          <div className="mt-8 text-sm text-gray-600 max-w-4xl mx-auto">
            <p>
              <strong>Note:</strong> Dimensions and weight limits may vary slightly by location and dumpster manufacturer. 
              Always confirm exact specifications with your local provider before loading. Overloading may result in 
              additional fees or refusal of pickup.
            </p>
          </div>
          
          {/* Call to Action */}
          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Ready to Rent a Dumpster?</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#quote-form" 
                className="inline-flex items-center bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors font-medium"
              >
                Order Online
              </a>
              <a 
                href="tel:801-918-6000" 
                className="inline-flex items-center bg-teal-500 text-white px-8 py-3 rounded-lg hover:bg-teal-600 transition-colors font-medium"
              >
                (801) 918-6000
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Light Gray Background with Features */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Icon Dumpsters
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* World-Class Customer Service */}
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#4e37a8]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">World-Class Customer Service</h3>
              <p className="text-gray-600">
                Our experienced team is here to help you every step of the way, from your first call to final pickup.
              </p>
            </div>
            
            {/* Prompt Delivery and Pickup */}
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#4e37a8]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1V8a1 1 0 00-1-1h-3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Prompt Delivery and Pickup</h3>
              <p className="text-gray-600">
                Prompt delivery and pickup ensures your project stays on schedule, keeping your site clean and efficient.
              </p>
            </div>
            
            {/* Multiple Jobsite Services for a Fair Price */}
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#4e37a8]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Multiple Jobsite Services for a Fair Price</h3>
              <p className="text-gray-600">
                Reliable service for a fair price. Comprehensive waste management solutions that fit your budget.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

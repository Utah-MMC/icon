'use client';

import ImageWithFallback from "../components/ImageWithFallback";
import PhoneModal from "../components/PhoneModal";
import { useState } from "react";

export default function Services() {
  const [isPhoneModalOpen, setIsPhoneModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Phone Modal */}
      <PhoneModal 
        isOpen={isPhoneModalOpen} 
        onClose={() => setIsPhoneModalOpen(false)} 
      />

      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-[#4e37a8] to-purple-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Professional Dumpster Rental Services in Utah
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Professional dumpster rental services in Utah with same-day delivery, competitive pricing, and reliable service.
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-white py-4 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-4">
              <li>
                <a href="/" className="text-gray-500 hover:text-[#4e37a8] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </li>
              <li className="text-[#4e37a8] font-medium">Services</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Introduction Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Dumpster Rental Services In Utah
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At Icon Dumpsters, our mission is simple: <strong>to provide a hassle-free, friendly dumpster rental service</strong> to homeowners and contractors alike.
              </p>
              <p className="text-lg text-gray-600">
                Our services include residential-friendly dumpster rentals, professional dumpster delivery and pickup, and a comprehensive service system to safeguard your property. With a variety of dumpster sizes and a dedication to exceptional customer service, our goal is to make your waste management process as straightforward and pleasant as possible. Whether you're renovating, moving, or just decluttering, we're here to help you find the perfect waste disposal solution.
              </p>
            </div>
            <div>
              <a href="/dumpster-sizes" className="block">
                              <ImageWithFallback 
                src="/images/dumpsterWithTruck.jpeg" 
                alt="Professional Dumpster Rental Services in Utah - Roll-off Dumpsters" 
                className="w-full h-80 object-cover rounded-lg shadow-lg hover:opacity-90 transition-opacity"
                fallbackSrc="/images/dumpsterWithTruck.webp"
              />
              </a>
            </div>
          </div>
        </div>

        {/* Residential Dumpster Rentals */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <a href="/dumpster-sizes" className="block">
                              <ImageWithFallback 
                src="/images/dumpster500x500-1.jpeg" 
                alt="Residential Dumpster Rental Services in Utah" 
                className="w-full h-80 object-cover rounded-lg shadow-lg hover:opacity-90 transition-opacity"
                fallbackSrc="/images/dumpster500x500-1.webp"
              />
              </a>
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Residential Dumpster Rentals
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Icon Dumpsters specializes in residential-friendly dumpster rentals, offering a seamless and efficient solution for waste management. Our service includes easy-to-navigate dumpster sizes, professional dumpster delivery and pickup by our courteous delivery experts. Tailored for both homeowners and contractors, our dumpsters are designed to fit your driveway perfectly, ensuring a perfect fit for any project.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                <strong>Ready to declutter or kickstart your renovation project?</strong> Learn more about our residential dumpster rental services and find the ideal size for your needs.
              </p>
              <a href="/dumpster-sizes" className="bg-[#4e37a8] text-white px-8 py-4 rounded-lg hover:bg-purple-700 transition-colors font-medium text-lg inline-block">
                LEARN MORE
              </a>
            </div>
          </div>
        </div>

        {/* Construction Dumpster Rentals */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Construction Dumpster Rentals
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Icon Dumpsters offers specialized construction dumpster rentals tailored for any project size, from residential remodels to large-scale construction sites.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our dumpsters are designed to handle all types of construction debris, providing a reliable and efficient waste management solution. With our professional delivery experts, we ensure a smooth and respectful service, minimizing the impact on your site. Perfect for contractors and DIY builders, our service simplifies debris removal, keeping your project on track.
              </p>
              <a href="/dumpster-sizes" className="bg-[#4e37a8] text-white px-8 py-4 rounded-lg hover:bg-purple-700 transition-colors font-medium text-lg inline-block">
                LEARN MORE
              </a>
            </div>
            <div>
              <a href="/dumpster-sizes" className="block">
                              <ImageWithFallback 
                src="/images/Construction-Rental-480x480.jpg" 
                alt="Construction Dumpster Rental Services in Utah" 
                className="w-full h-80 object-cover rounded-lg shadow-lg hover:opacity-90 transition-opacity"
                fallbackSrc="/images/Construction-Rental-480x480.jpg"
              />
              </a>
            </div>
          </div>
        </div>

        {/* Commercial Dumpster Rentals */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <a href="/dumpster-sizes" className="block">
                              <ImageWithFallback 
                src="/images/commercial.jpg" 
                alt="Commercial Dumpster Rental Services in Utah" 
                className="w-full h-80 object-cover rounded-lg shadow-lg hover:opacity-90 transition-opacity"
                fallbackSrc="/images/dumpster500x500-1.webp"
              />
              </a>
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Commercial Dumpster Rentals
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Looking to clear out clutter or take on a renovation project? Icon Dumpsters offers a hassle-free commercial dumpster rental service, perfectly suited for your business needs. Our dumpsters come in various sizes, ensuring a perfect fit for any project, big or small.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                With our simple process and dedicated support, we make dumpster rental easy and efficient. Experience the difference of a service focused on your convenience.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                <strong>Ready to get started?</strong> Learn more about our commercial dumpster rental services and find the ideal solution for your waste removal needs today.
              </p>
              <a href="/dumpster-sizes" className="bg-[#4e37a8] text-white px-8 py-4 rounded-lg hover:bg-purple-700 transition-colors font-medium text-lg inline-block">
                LEARN MORE
              </a>
            </div>
          </div>
        </div>

        {/* Specialized Dumpster Rentals */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Specialized Dumpster Rentals
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Tackling concrete removal or dealing with heavy debris? Icon Dumpsters is here to help manage your specialized waste efficiently. Our dumpsters are designed to accommodate all types of heavy materials, from concrete to dirt to construction debris.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Enjoy the ease of a dumpster rental service that handles the toughest jobs, ensuring your project stays on track and your site remains clean throughout the process.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                <strong>Don't let heavy debris slow you down!</strong> Discover how our specialized dumpster rental services can make your project a breeze.
              </p>
              <a href="/dumpster-sizes" className="bg-[#4e37a8] text-white px-8 py-4 rounded-lg hover:bg-purple-700 transition-colors font-medium text-lg inline-block">
                LEARN MORE
              </a>
            </div>
            <div>
              <a href="/dumpster-sizes" className="block">
                              <ImageWithFallback 
                src="/images/concrete.webp" 
                alt="Specialized Dumpster Rental Services in Utah" 
                className="w-full h-80 object-cover rounded-lg shadow-lg hover:opacity-90 transition-opacity"
                fallbackSrc="/images/Lawn-Mower-Square-480x480.jpg"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Dumpster Sizes Overview */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Dumpster Size
            </h2>
            <p className="text-lg text-gray-600">
              Find the perfect dumpster for your project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 text-center shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">15 Yard</h3>
              <p className="text-gray-600 mb-4">Ideal for medium projects</p>
              <p className="text-2xl font-bold text-[#4e37a8]">$270</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">20 Yard</h3>
              <p className="text-gray-600 mb-4">Great for large projects</p>
              <p className="text-2xl font-bold text-[#4e37a8]">$275</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">30 Yard</h3>
              <p className="text-gray-600 mb-4">For major projects</p>
              <p className="text-2xl font-bold text-[#4e37a8]">$330</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <a href="/dumpster-sizes" className="bg-[#4e37a8] text-white px-8 py-4 rounded-lg hover:bg-purple-700 transition-colors font-medium text-lg inline-block">
              VIEW ALL SIZES
            </a>
          </div>
        </div>

        {/* Why Choose Icon Dumpsters */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Icon Dumpsters?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From home cleanouts to commercial jobs and heavy debris, we help Salt Lake City get dumpsters in place fast—without stalling the work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#4e37a8] rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Same-Day & Emergency Deliveries</h3>
              </div>
              <p className="text-gray-600">
                If we have a dumpster available, we'll get it to you today. We move fast for emergency jobs and last-minute calls.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#4e37a8] rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Standard & Heavy-Duty Dumpsters</h3>
              </div>
              <p className="text-gray-600">
                Our dumpsters handle just about anything. Whether you're tossing junk from a home cleanout or loading up with concrete, dirt, or heavy debris.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#4e37a8] rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Direct Communication</h3>
              </div>
              <p className="text-gray-600">
                You get a direct line to the owner/operators—no third parties, no hold music. That one-on-one contact gives us the flexibility to work around your schedule.
              </p>
            </div>
          </div>
        </div>

        
        {/* CTA Section */}
        <div className="bg-[#4e37a8] rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need a Dumpster Soon? Let's Get It Scheduled.
          </h2>
          <p className="text-lg text-purple-100 mb-6">
            Call us at (801) 918-6000 or book online for fast, reliable dumpster rental service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setIsPhoneModalOpen(true)}
              className="bg-white text-[#4e37a8] px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium"
            >
              CALL THE PROS
            </button>
            <a href="#quote-form" className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium">
              GET A QUOTE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

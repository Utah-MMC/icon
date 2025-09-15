import type { Metadata } from 'next';
import PageHero from '../components/PageHero';
import PageTemplate from '../components/PageTemplate';
import Image from "next/image";
import ImageWithFallback from "../components/ImageWithFallback";
import QuoteForm from "../components/QuoteForm";
import TrustSection from "../components/TrustSection";
import ReviewsCarousel from "../components/ReviewsCarousel";
import BlogAuthor from "../components/BlogAuthor";

export const metadata: Metadata = {
  title: 'Estate Cleanout Services in Utah | Icon Dumpsters',
  description: 'Professional estate cleanout services for complete property cleanup, downsizing, and moving projects. Residential-friendly dumpster rentals throughout Utah. Call (801) 918-6000.',
  keywords: 'estate cleanout, property cleanup, downsizing dumpster rental, moving cleanout, Utah estate services',
  alternates: { canonical: '/estate-cleanout' },
  robots: { index: true, follow: true }
};

export default function EstateCleanout() {
  return (
    <PageTemplate>
      <PageHero
        title="Estate Cleanout Services"
        subtitle="Professional estate cleanout services for complete property cleanup, downsizing, and moving projects"
        primaryCtaText="Get Free Quote"
        primaryCtaLink="https://icondumpsters.com/#quote-form"
        secondaryCtaText="Call (801) 918-6000"
        secondaryCtaLink="tel:(801) 918-6000"
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Service Overview */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Complete Estate Cleanout Services in Utah
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            When you need to clear out a property completely, our estate cleanout services provide the perfect solution. Whether you're dealing with a loved one's estate, downsizing for a move, or preparing a property for sale, we make the process simple and stress-free.
          </p>
        </div>

        {/* Service Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
            <ImageWithFallback 
              src="/images/optimized/dumpsterSmallBanner5.jpg" 
              alt="Professional Estate Cleanout Services in Utah - Complete Property Cleanup and Waste Removal" 
              className="w-full h-full object-cover"
            fallbackSrc="/images/dumpsterSmallBanner5.webp"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Estate Cleanout Services
            </h1>
            <p className="text-xl sm:text-2xl mb-6 max-w-3xl mx-auto">
              Professional estate cleanout and property clearing services in Salt Lake County
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://icondumpsters.com/#quote-form" className="bg-gradient-to-r from-[#4e37a8] to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:from-purple-600 hover:to-[#4e37a8] transition-all duration-300 font-medium text-base sm:text-lg inline-block">
                Get Free Quote
              </a>
              <a href="tel:801-918-6000" className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-white hover:text-[#4e37a8] transition-all duration-300 font-medium text-base sm:text-lg inline-block">
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Key Benefits Section */}
      <section className="bg-gradient-to-r from-[#4e37a8] to-purple-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Choose Icon Dumpsters for Estate Cleanouts?
            </h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              We understand the emotional and logistical challenges of estate cleanouts and provide compassionate, efficient service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Over 10 Years of Experience</h3>
              <p className="text-purple-100">
                Trusted by hundreds of families across Salt Lake County for their estate cleanout needs
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Quick Turnaround</h3>
              <p className="text-purple-100">
                Fast, efficient service to help you move forward during difficult times
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Competitive Pricing</h3>
              <p className="text-purple-100">
                Fair, transparent pricing with no hidden fees or surprise charges
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Reliable Estate Cleanout Services in Salt Lake County
            </h2>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              If you are dealing with an inherited estate and need to manage the cleanout process, Icon Dumpsters offers comprehensive estate cleanout services specifically tailored for property clearing and waste removal. Our services are designed to provide you with the resources and support needed to move forward during a difficult time.
            </p>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              We understand the emotional and logistical challenges associated with managing an inherited estate and are here to assist you in finding the best course of action for waste disposal and property clearing. With competitive pricing, prompt delivery, and compassionate service, Icon Dumpsters is dedicated to providing efficient and reliable solutions for your estate cleanout needs.
            </p>

            {/* Author Section */}
            <BlogAuthor 
              publishDate="August 24, 2025"
              readTime="8 min read"
            />

            <div className="bg-gradient-to-r from-gray-50 to-purple-50 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-[#4e37a8] mb-4">What We Handle:</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#4e37a8] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Furniture and household items
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#4e37a8] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Appliances and electronics
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#4e37a8] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Clothing and personal items
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#4e37a8] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Books, documents, and paperwork
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#4e37a8] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Construction debris and renovation waste
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#4e37a8] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Yard waste and landscaping debris
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 border-l-4 border-[#4e37a8] p-6 rounded-r-lg mb-8">
              <h3 className="text-lg font-bold text-[#4e37a8] mb-2">Need Help Getting Started?</h3>
              <p className="text-gray-700 mb-4">
                Our experienced team can help you determine the right dumpster size and provide guidance on the cleanout process. We offer flexible rental periods and can accommodate both small and large estate cleanouts.
              </p>
              <a href="https://icondumpsters.com/#quote-form" className="inline-flex items-center text-[#4e37a8] font-semibold hover:text-purple-700 transition-colors">
                Get a free consultation →
              </a>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-xl p-8 mb-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#4e37a8] rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#4e37a8] mb-3">House Flipping & Property Preparation Services</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Looking to sell the property quickly? We can help you prepare the house for sale by removing all debris, cleaning up the property, and even assisting with minor renovations to increase the property's market value.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center text-sm text-gray-700">
                      <svg className="w-4 h-4 text-[#4e37a8] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Complete property cleanup and debris removal
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <svg className="w-4 h-4 text-[#4e37a8] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Yard and landscaping cleanup
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <svg className="w-4 h-4 text-[#4e37a8] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Interior and exterior preparation
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <svg className="w-4 h-4 text-[#4e37a8] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Construction waste removal
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    <strong>Fast turnaround times</strong> to help you get the property on the market quickly and maximize your sale price.
                  </p>
                  <a href="https://icondumpsters.com/sell-house" className="inline-flex items-center gap-2 bg-[#4e37a8] px-5 py-3 rounded-lg hover:bg-purple-700 transition-colors font-semibold shadow" style={{ color: '#ffffff' }}>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Get House Flipping Quote
                  </a>
                </div>
              </div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              For more information on our estate cleanout services or to schedule a consultation, call or text us today. We're here to help you through this challenging process with professionalism, compassion, and efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="quote-form" className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Get Your Estate Cleanout Quote</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Fill out the form below and we'll get back to you with a competitive quote for your estate cleanout needs.
            </p>
          </div>
          <QuoteForm />
        </div>
      </section>

        {/* Trust Section */}
        <TrustSection />

        {/* Reviews Section */}
        <ReviewsCarousel />
      </div>
    </PageTemplate>
  );
}

import Image from "next/image";
import QuoteForm from "./components/QuoteForm";
import ReviewsCarousel from "./components/ReviewsCarousel";
import CleanupSection from "./components/CleanupSection";
import TrustSection from "./components/TrustSection";
import QuickQuoteButton from "./components/QuickQuoteButton";
import ThreeStepProcess from "./components/ThreeStepProcess";
import FeesAndSurcharges from "./components/FeesAndSurcharges";
import TextQuoteWidget from "./components/TextQuoteWidget";
import AvailableTodayBadge from "./components/AvailableTodayBadge";
import { track } from "./components/analytics";
import AICitationSchema, { iconDumpstersAIData } from "./components/AICitationSchema";
import OptimizedImage from "./components/OptimizedImage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Icon Dumpsters - Professional Dumpster Rental Services in Utah',
  description: 'Professional dumpster rental services throughout Utah. Fast delivery, competitive pricing, and reliable waste management solutions for residential and commercial projects.',
  keywords: ['dumpster rental utah', 'utah dumpster rental', 'construction waste removal', 'residential dumpster rental', 'commercial dumpster rental'],
  alternates: { canonical: 'https://icondumpsters.com' },
  openGraph: {
    title: 'Icon Dumpsters - Professional Dumpster Rental Services in Utah',
    description: 'Professional dumpster rental services throughout Utah. Fast delivery, competitive pricing, and reliable waste management solutions.',
    url: 'https://icondumpsters.com',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'Icon Dumpsters - Utah Dumpster Rental Services' }],
    type: 'website'
  },
  robots: { index: true, follow: true }
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Note: Structured data is handled globally by the StructuredData component in layout.tsx */}
      {/* Hero Section */}
      <div className="relative w-full">
        {/* Background image with responsive design */}
        <div 
          className="relative min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[800px] xl:min-h-screen flex items-center justify-center overflow-hidden bg-[#4e37a8]"
        >
          <div className="absolute inset-0" style={{zIndex: 1}}>
            {/* Mobile-specific image */}
            <Image
              src="/images/ChatGPT Image Sep 18, 2025, 11_30_03 AM.png" 
              alt="Icon Dumpsters professional roll-off dumpster with truck - dumpster rental Utah, roll-off dumpster, dumpster rental near me"
              fill
              className="object-cover object-center sm:hidden"
              priority
              sizes="100vw"
            />
            {/* Desktop and Tablet image */}
            <Image
              src="/images/Gemini_Generated_Image_r7be0dr7be0dr7be.png" 
              alt="Icon Dumpsters professional roll-off dumpster with truck - dumpster rental Utah, roll-off dumpster, dumpster rental near me"
              fill
              className="hidden sm:block object-cover object-center"
              priority
              sizes="100vw"
            />
          </div>
          
          {/* Enhanced overlay for better text readability - optimized for mobile */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40 sm:from-black/60 sm:via-black/50 sm:to-black/70"></div>
          
          {/* Mobile Text Overlay - Top Left */}
          <div className="absolute top-4 left-4 sm:hidden z-20">
            <div className="text-left bg-black/60 backdrop-blur-sm rounded-lg p-3 border border-white/20 max-w-xs">
              <p className="text-white text-sm font-medium leading-relaxed">
                <span className="text-yellow-300 font-bold">500+ Happy Customers</span>
              </p>
              <p className="text-white text-xs mt-1">
                Same-day delivery • No hidden fees • 24/7 support
              </p>
              <div className="flex flex-col gap-1 mt-2 text-xs">
                <div className="flex items-center text-white/90">
                  <svg className="w-3 h-3 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span>4.9/5 Stars (127 Reviews)</span>
                </div>
                <div className="flex items-center text-white/90">
                  <svg className="w-3 h-3 text-green-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Licensed & Insured</span>
                </div>
                <div className="flex items-center text-white/90">
                  <svg className="w-3 h-3 text-blue-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <span>Same-Day Available</span>
                </div>
              </div>
            </div>
          </div>

          {/* TEXT US Call-to-Action - Top Right - Desktop Only */}
          <div className="hidden sm:block absolute top-4 right-4 z-20">
            <a 
              href="sms:+18019186000" 
              data-analytics-type="cta" 
              data-analytics-name="text_us_hero"
              className="bg-[#4e37a8] text-white px-4 py-2 rounded-lg hover:bg-[#3d2c85] transition-colors font-medium text-base shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2"
            >
              <span className="text-lg">📱</span>
              <div className="text-left">
                <div className="font-bold text-sm">TEXT US</div>
                <div className="text-sm">(801) 918-6000</div>
              </div>
            </a>
          </div>
          
          {/* Clickable overlay for the "GET AN INSTANT QUOTE" button in the image */}
          <div className="hidden sm:block absolute bottom-84 left-16 w-64 h-16 z-[99999] pointer-events-auto">
            <a 
              href="https://icondumpsters.com/#quote-form" 
              data-analytics-type="cta" 
              data-analytics-name="image_quote_button"
              className="block w-full h-full cursor-pointer"
              title="Get an instant quote"
            >
              {/* Invisible clickable area over the purple button */}
            </a>
          </div>

          {/* Desktop: Compact top-left overlay in sky area - positioned outside main content flow */}
          <div className="hidden sm:block absolute top-16 left-6 bg-black/70 backdrop-blur-sm rounded-xl p-4 max-w-sm border border-white/20 z-20">
            <h1 className="font-bold mb-3 leading-tight">
              <span className="text-white bg-[#4e37a8] px-2 py-1 rounded text-sm">Icon Dumpsters</span>
              <span className="text-white block mt-2 text-lg lg:text-xl">
                Utah's #1 Rated Dumpster Rental
              </span>
            </h1>
            <p className="text-sm text-white font-medium leading-relaxed mb-3">
              <span className="text-yellow-300 font-bold">500+ Happy Customers</span> • Same-day delivery
            </p>
            <div className="flex flex-col gap-1 text-xs">
              <div className="flex items-center text-white/90">
                <svg className="w-3 h-3 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>4.9/5 Stars (127 Reviews)</span>
              </div>
              <div className="flex items-center text-white/90">
                <svg className="w-3 h-3 text-green-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Licensed & Insured</span>
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-3">
              <a 
                href="tel:801-918-6000" 
                data-analytics-type="cta" 
                data-analytics-name="call_hero" 
                className="bg-white text-[#4e37a8] px-4 py-2 rounded-lg hover:bg-gray-100 transition-all duration-300 font-bold text-sm inline-block shadow-lg hover:shadow-xl transform hover:-translate-y-1 border border-white flex items-center justify-center"
              >
                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call (801) 918-6000
              </a>
              <a 
                href="https://icondumpsters.com/#quote-form" 
                data-analytics-type="cta" 
                data-analytics-name="quote_hero" 
                className="bg-[#4e37a8] text-white px-4 py-2 rounded-lg hover:bg-[#3d2c85] transition-all duration-300 font-bold text-sm inline-block shadow-lg hover:shadow-xl transform hover:-translate-y-1 border border-white flex items-center justify-center"
              >
                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Get Free Quote
              </a>
            </div>
          </div>

          {/* Hero Content - Overlaid on image - optimized for mobile */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 md:py-20">
            <div className="text-center">
            </div>
          </div>
        </div>
      </div>

      {/* Compact Urgency Banner */}
      <section className="bg-gradient-to-r from-[#4e37a8] to-purple-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-1 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span className="font-bold text-sm sm:text-base">Limited Availability Today!</span>
              </div>
              <div className="hidden sm:block text-purple-200">•</div>
              <div className="text-xs sm:text-sm">
                Only <span className="font-bold text-yellow-300">3 dumpsters</span> available for same-day delivery
              </div>
              <div className="hidden sm:block text-purple-200">•</div>
              <a 
                href="tel:801-918-6000" 
                className="bg-white text-[#4e37a8] px-3 py-1 rounded-md font-bold hover:bg-gray-100 transition-colors text-xs sm:text-sm"
              >
                Call Now: (801) 918-6000
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from real customers who chose Icon Dumpsters
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Excellent service! They delivered our 20-yard dumpster the same day we called. The driver was professional and the pricing was exactly what they quoted - no surprises."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-[#4e37a8] rounded-full flex items-center justify-center text-white font-bold mr-3">
                  M
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Mike R.</p>
                  <p className="text-sm text-gray-600">Salt Lake City</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-50 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Used them for our kitchen renovation. The 15-yard dumpster was perfect size and they picked it up right on schedule. Will definitely use again!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-[#4e37a8] rounded-full flex items-center justify-center text-white font-bold mr-3">
                  S
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Sarah L.</p>
                  <p className="text-sm text-gray-600">West Jordan</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gray-50 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Best dumpster rental company in Utah! Fair pricing, fast delivery, and great customer service. Highly recommend for any project."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-[#4e37a8] rounded-full flex items-center justify-center text-white font-bold mr-3">
                  D
                </div>
                <div>
                  <p className="font-semibold text-gray-900">David K.</p>
                  <p className="text-sm text-gray-600">Sandy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Icon Dumpsters Section */}
      <section className="bg-gradient-to-br from-[#4e37a8] to-purple-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Choose Icon Dumpsters?
            </h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              We're not just another dumpster rental company. Here's what makes us Utah's #1 choice:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Same-Day Delivery</h3>
              <p className="text-purple-100 leading-relaxed">
                Need a dumpster today? We deliver within 4 hours of your call. No waiting, no delays.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">No Hidden Fees</h3>
              <p className="text-purple-100 leading-relaxed">
                What you see is what you pay. No delivery fees, no pickup fees, no surprise charges.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">24/7 Support</h3>
              <p className="text-purple-100 leading-relaxed">
                Questions? Problems? We're here 24/7. Call, text, or email - we always answer.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Licensed & Insured</h3>
              <p className="text-purple-100 leading-relaxed">
                Fully licensed, bonded, and insured. Your property and project are protected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Guarantee Section moved to component below to avoid duplicates */}


      {/* Revamped Dumpster Rental Service Section */}
      <section className="relative bg-gradient-to-br from-gray-50 via-white to-purple-50 py-20 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full text-sm font-semibold text-purple-800 mb-6">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
              Professional Dumpster Rental Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 bg-clip-text text-transparent mb-6">
              Our Roll-off Dumpster Rental Sizes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Choose the perfect dumpster size for your project. All rentals include delivery, pickup, and landfill fees.
            </p>
          </div>

          {/* Dumpster Size Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {/* 15 Yard Dumpster */}
            <div className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600"></div>
              <div className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-xl">15</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">15 Yard Roll-off Dumpster</h3>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Dimensions:</strong> 16 feet x 7 feet x 4 feet</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Capacity:</strong> Holds 15 cubic yards</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Weight:</strong> 1.5 tons</span>
                  </div>
                </div>

                <a href="https://icondumpsters.com/#quote-form" className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg hover:from-purple-600 hover:to-blue-500 transition-all duration-300 font-semibold text-center block transform hover:scale-105">
                  Get Quick Quote
                </a>
                          </div>
                        </div>

            {/* 20 Yard Dumpster */}
            <div className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-blue-600"></div>
              <div className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-xl">20</span>
                      </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">20 Yard Roll-off Dumpster</h3>
                    </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Dimensions:</strong> 16 feet x 7 feet x 6 feet</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Capacity:</strong> Holds 20 cubic yards</span>
                        </div>
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                    <span><strong>Weight:</strong> 2 tons</span>
                          </div>
                        </div>
                
                <a href="https://icondumpsters.com/#quote-form" className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white py-3 px-6 rounded-lg hover:from-blue-600 hover:to-green-500 transition-all duration-300 font-semibold text-center block transform hover:scale-105">
                  Get Quick Quote
                </a>
                      </div>
                    </div>

            {/* 30 Yard Dumpster */}
            <div className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-600"></div>
              <div className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-xl">30</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">30 Yard Roll-off Dumpster</h3>
                        </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                    <span><strong>Dimensions:</strong> 22 feet x 7 feet x 6 feet</span>
                          </div>
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Capacity:</strong> Holds 30 cubic yards</span>
                        </div>
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Weight:</strong> 3 tons</span>
                  </div>
                </div>
                
                <a href="https://icondumpsters.com/#quote-form" className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-3 px-6 rounded-lg hover:from-pink-600 hover:to-purple-500 transition-all duration-300 font-semibold text-center block transform hover:scale-105">
                  Get Quick Quote
                </a>
                        </div>
                      </div>
                    </div>

          {/* Our Guarantee Section */}
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Guarantee</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're committed to providing the best dumpster rental experience in Utah
            </p>
                        </div>

          {/* Guarantee Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-8 text-center border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" />
                            </svg>
                          </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Competitive Pricing</h4>
              <p className="text-gray-600 leading-relaxed">
                We offer the most competitive rates in Salt Lake County with no hidden fees or surprise charges.
              </p>
                        </div>

            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-8 text-center border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                      </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">No Hidden Fees</h4>
              <p className="text-gray-600 leading-relaxed">
                What you see is what you pay. No delivery fees, pickup fees, or unexpected charges.
              </p>
                    </div>

            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-8 text-center border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                          </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Friendly, Live Help</h4>
              <p className="text-gray-600 leading-relaxed">
                Our team is available 7 days a week to answer questions and provide expert guidance.
              </p>
                        </div>
                      </div>

          {/* Statistics Section */}
          <div className="bg-gradient-to-r from-[#4e37a8] to-purple-700 rounded-2xl shadow-2xl p-8 mb-20">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Why Choose Icon Dumpsters?</h3>
              <p className="text-purple-100 text-lg">Trusted by hundreds of customers across Salt Lake County</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center group">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
                <div className="text-purple-100 font-medium">Happy Customers</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" />
                  </svg>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">24hr</div>
                <div className="text-purple-100 font-medium">Response Time</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">10-30</div>
                <div className="text-purple-100 font-medium">Yard Dumpsters</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">7 Days</div>
                <div className="text-purple-100 font-medium">Service Available</div>
              </div>
            </div>
          </div>

          
        </div>
      </section>

      {/* Cleanup Section */}
      <CleanupSection />

      {/* Three Step Process */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ThreeStepProcess />
      </div>

      {/* Fees & Surcharges */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <FeesAndSurcharges />
      </div>

      {/* Text Quote Widget */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <TextQuoteWidget />
      </div>




      {/* Our Services Section */}
      <div id="our-services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#4e37a8] mb-4">Dumpster Rental Services in Utah</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Professional waste management solutions for all your needs. From residential cleanouts to large construction projects. Icon Dumpsters provides reliable dumpster rental services throughout Utah with same-day delivery and competitive pricing.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          
          {/* General Residential Waste */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <a href="https://icondumpsters.com/services" className="block">
              <OptimizedImage src="/images/optimized/dumpsters.jpg" alt="Residential Dumpster Rental Services in Utah" width={400} height={200} className="w-full h-40 sm:h-48 object-cover hover:opacity-90 transition-opacity" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
            </a>
            <div className="p-4 sm:p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg sm:text-xl font-bold text-[#4e37a8]">Residential Dumpster Rental</h3>
                <AvailableTodayBadge />
              </div>
              <p className="text-sm sm:text-base text-gray-600 mb-4">Rent a roll-off dumpster to remove residential household wastes during cleanouts, moves, or renovations.</p>
              <a href="https://icondumpsters.com/services" className="text-[#4e37a8] font-semibold hover:text-purple-700 transition-colors text-sm sm:text-base">
                Read More →
              </a>
            </div>
          </div>

          {/* Construction Waste */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <a href="https://icondumpsters.com/services" className="block">
              <OptimizedImage src="/images/optimized/Construction-Rental-480x480.jpg" alt="Construction Dumpster Rental Services in Utah" width={400} height={200} className="w-full h-40 sm:h-48 object-cover hover:opacity-90 transition-opacity" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
            </a>
            <div className="p-4 sm:p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg sm:text-xl font-bold text-[#4e37a8]">Construction Dumpster Rental</h3>
                <AvailableTodayBadge />
              </div>
              <p className="text-sm sm:text-base text-gray-600 mb-4">Rent a roll-off dumpster to remove construction debris, drywall, lumber, and building materials.</p>
              <a href="https://icondumpsters.com/services" className="text-[#4e37a8] font-semibold hover:text-purple-700 transition-colors text-sm sm:text-base">
                Read More →
              </a>
            </div>
          </div>

          {/* Concrete Waste */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <a href="https://icondumpsters.com/services" className="block">
              <OptimizedImage src="/images/optimized/dumpster500x500-1.jpg" alt="Concrete Dumpster Rental Services in Utah" width={400} height={200} className="w-full h-40 sm:h-48 object-cover hover:opacity-90 transition-opacity" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
            </a>
            <div className="p-4 sm:p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg sm:text-xl font-bold text-[#4e37a8]">Concrete Dumpster Rental</h3>
                <AvailableTodayBadge />
              </div>
              <p className="text-sm sm:text-base text-gray-600 mb-4">Rent a roll-off dumpster to remove concrete, asphalt, bricks, and other heavy construction materials.</p>
              <a href="https://icondumpsters.com/services" className="text-[#4e37a8] font-semibold hover:text-purple-700 transition-colors text-sm sm:text-base">
                Read More →
              </a>
            </div>
          </div>

          {/* Roofing Waste */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <a href="https://icondumpsters.com/services" className="block">
              <OptimizedImage src="/images/optimized/dumpster500x500-2.jpg" alt="Roofing Dumpster Rental Services in Utah" width={400} height={200} className="w-full h-40 sm:h-48 object-cover hover:opacity-90 transition-opacity" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
            </a>
            <div className="p-4 sm:p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg sm:text-xl font-bold text-[#4e37a8]">Roofing Dumpster Rental</h3>
                <AvailableTodayBadge />
              </div>
              <p className="text-sm sm:text-base text-gray-600 mb-4">Rent a roll-off dumpster for roofing shingles, underlayment, and other roofing materials.</p>
              <a href="https://icondumpsters.com/services" className="text-[#4e37a8] font-semibold hover:text-purple-700 transition-colors text-sm sm:text-base">
                Read More →
              </a>
            </div>
          </div>

          {/* Yard Waste */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <a href="https://icondumpsters.com/services" className="block">
              <OptimizedImage src="/images/optimized/dumpsterSmallBanner2.jpg" alt="Yard Waste Dumpster Rental Services in Utah" width={400} height={200} className="w-full h-40 sm:h-48 object-cover hover:opacity-90 transition-opacity" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
            </a>
            <div className="p-4 sm:p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg sm:text-xl font-bold text-[#4e37a8]">Yard Waste Dumpster Rental</h3>
                <AvailableTodayBadge />
              </div>
              <p className="text-sm sm:text-base text-gray-600 mb-4">Rent a roll-off dumpster to remove yard waste, branches, leaves, and landscaping debris.</p>
              <a href="https://icondumpsters.com/services" className="text-[#4e37a8] font-semibold hover:text-purple-700 transition-colors text-sm sm:text-base">
                Read More →
              </a>
            </div>
          </div>

          {/* Recyclable Waste */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <a href="https://icondumpsters.com/services" className="block">
              <OptimizedImage src="/images/optimized/dumpster500x500-1.jpg" alt="Recyclable Waste Dumpster Rental Services in Utah" width={400} height={200} className="w-full h-40 sm:h-48 object-cover hover:opacity-90 transition-opacity" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
            </a>
            <div className="p-4 sm:p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg sm:text-xl font-bold text-[#4e37a8]">Recyclable Waste Dumpster Rental</h3>
                <AvailableTodayBadge />
              </div>
              <p className="text-sm sm:text-base text-gray-600 mb-4">Rent a roll-off dumpster to remove recyclable materials, cardboard, paper, and plastic waste.</p>
              <a href="https://icondumpsters.com/services" className="text-[#4e37a8] font-semibold hover:text-purple-700 transition-colors text-sm sm:text-base">
                Read More →
              </a>
            </div>
          </div>

        </div>
      </div>





      {/* Our Dumpster Rental Size Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-gray-800">Our Roll-off Dumpster</span>{" "}
              <span className="text-[#4e37a8]">Rental Sizes</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the perfect dumpster size for your project. All rentals include delivery and pickup. Landfill disposal is billed by weight at $55/ton "” no weight is included.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            
            {/* 15 Yard Dumpster */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-[#4e37a8] mb-4">15 Yard Roll-off Dumpster</h3>
              
              <div className="space-y-4">
                <div className="border-b border-gray-200 pb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[#4e37a8] font-semibold">Dimensions:</span>
                    <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700">16 feet x 7 feet x 4 feet</p>
                </div>
                
                <div className="border-b border-gray-200 pb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[#4e37a8] font-semibold">Capacity:</span>
                    <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Hold 15 cubic yards</p>
                </div>
                
                <div className="pb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[#4e37a8] font-semibold">Weight pricing:</span>
                    <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700">$55/ton (no weight included)</p>
                </div>
              </div>
              
              <QuickQuoteButton dumpsterSize="15 Yard" className="w-full py-3 font-semibold text-center block mt-6" />
            </div>

            {/* 20 Yard Dumpster */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-[#4e37a8] mb-4">20 Yard Roll-off Dumpster</h3>
              
              <div className="space-y-4">
                <div className="border-b border-gray-200 pb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[#4e37a8] font-semibold">Dimensions:</span>
                    <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700">16 feet x 7 feet x 6 feet</p>
                </div>
                
                <div className="border-b border-gray-200 pb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[#4e37a8] font-semibold">Capacity:</span>
                    <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Hold 20 cubic yards</p>
                </div>
                
                <div className="pb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[#4e37a8] font-semibold">Weight pricing:</span>
                    <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700">$55/ton (no weight included)</p>
                </div>
              </div>
              
              <QuickQuoteButton dumpsterSize="20 Yard" className="w-full py-3 font-semibold text-center block mt-6" />
            </div>

            {/* 30 Yard Dumpster */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-[#4e37a8] mb-4">30 Yard Roll-off Dumpster</h3>
              
              <div className="space-y-4">
                <div className="border-b border-gray-200 pb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[#4e37a8] font-semibold">Dimensions:</span>
                    <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700">22 feet x 7 feet x 6 feet</p>
                </div>
                
                <div className="border-b border-gray-200 pb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[#4e37a8] font-semibold">Capacity:</span>
                    <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Hold 30 cubic yards</p>
                </div>
                
                <div className="pb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[#4e37a8] font-semibold">Weight pricing:</span>
                    <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700">$55/ton (no weight included)</p>
                </div>
              </div>
              
              <QuickQuoteButton dumpsterSize="30 Yard" className="w-full py-3 font-semibold text-center block mt-6" />
            </div>
          </div>
        </div>
      </div>

      {/* Trust Section removed on home to avoid duplication */}

      {/* Call to Action - moved further down */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-xl p-8 text-center">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#4e37a8] to-purple-600 bg-clip-text text-transparent mb-4">Ready to Get Started?</h3>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">Get your instant quote today and experience the difference</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://icondumpsters.com/#quote-form" className="bg-gradient-to-r from-[#4e37a8] to-purple-600 text-white px-8 py-4 rounded-xl hover:from-purple-600 hover:to-[#4e37a8] transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  <svg className="w-5 h-5 inline mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Get Free Quote
                </a>
                <a href="tel:801-918-6000" className="border-2 border-[#4e37a8] text-[#4e37a8] px-8 py-4 rounded-xl hover:bg-[#4e37a8] hover:text-white transition-all duration-300 font-semibold text-lg">
                  <svg className="w-5 h-5 inline mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Text Us Section */}
      <section className="bg-gradient-to-r from-green-500 to-green-600 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <svg className="w-16 h-16 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
            </svg>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Prefer to Text?</h2>
            <p className="text-xl text-green-100 mb-6">
              Get instant quotes and schedule delivery via text message. We'll respond within 30 minutes!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://icondumpsters.com/#floating-text-button"
                className="bg-white text-green-600 px-8 py-4 rounded-xl hover:bg-green-50 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
                </svg>
                Text Us Now
              </a>
              <a 
                href="sms:+18019186000?body=Hi! I need a dumpster quote."
                className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-green-600 transition-all duration-300 font-semibold text-lg -mt-4"
              >
                <svg className="w-5 h-5 inline mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
                </svg>
                Text (801) 918-6000
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form Section (relocated lower) */}
      <section id="quote-form" className="bg-white py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Get Your Free Quote Today</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tell us a few details and we"™ll send a competitive quote.
            </p>
          </div>
          <QuoteForm />
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Dumpster Rental Service Areas in Utah</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Icon Dumpsters provides professional dumpster rental services throughout Utah. From Salt Lake City to Provo, we deliver reliable waste management solutions to homeowners and businesses.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
            <a href="/salt-lake-city" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-[#4e37a8]">Salt Lake City</h3>
            </a>
            <a href="/murray" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-[#4e37a8]">Murray</h3>
            </a>
            <a href="/sandy" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-[#4e37a8]">Sandy</h3>
            </a>
            <a href="/west-jordan" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-[#4e37a8]">West Jordan</h3>
            </a>
            <a href="/south-jordan" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-[#4e37a8]">South Jordan</h3>
            </a>
            <a href="/draper" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-[#4e37a8]">Draper</h3>
            </a>
            <a href="/lehi" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-[#4e37a8]">Lehi</h3>
            </a>
            <a href="/orem" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-[#4e37a8]">Orem</h3>
            </a>
            <a href="/provo" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-[#4e37a8]">Provo</h3>
            </a>
            <a href="/ogden" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-[#4e37a8]">Ogden</h3>
            </a>
            <a href="/layton" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-[#4e37a8]">Layton</h3>
            </a>
            <a href="/clearfield" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-[#4e37a8]">Clearfield</h3>
            </a>
            <a href="/roy" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-[#4e37a8]">Roy</h3>
            </a>
            <a href="/syracuse" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-[#4e37a8]">Syracuse</h3>
            </a>
            <a href="/kaysville" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-[#4e37a8]">Kaysville</h3>
            </a>
            <a href="/farmington" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-[#4e37a8]">Farmington</h3>
            </a>
            <a href="/centerville" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-[#4e37a8]">Centerville</h3>
            </a>
            <a href="/bountiful" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-[#4e37a8]">Bountiful</h3>
            </a>
            <a href="/north-salt-lake" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-[#4e37a8]">North Salt Lake</h3>
            </a>
            <a href="/woods-cross" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-[#4e37a8]">Woods Cross</h3>
            </a>
            <a href="/millcreek" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-[#4e37a8]">Millcreek</h3>
            </a>
            <a href="/holladay" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-[#4e37a8]">Holladay</h3>
            </a>
            <a href="/cottonwood-heights" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-[#4e37a8]">Cottonwood Heights</h3>
            </a>
            <a href="/midvale" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-[#4e37a8]">Midvale</h3>
            </a>
            <a href="/taylorsville" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-[#4e37a8]">Taylorsville</h3>
            </a>
            <a href="/kearns" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-[#4e37a8]">Kearns</h3>
            </a>
            <a href="/magna" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-[#4e37a8]">Magna</h3>
            </a>
            <a href="/south-salt-lake" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-[#4e37a8]">South Salt Lake</h3>
            </a>
            <a href="/sugar-house" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-[#4e37a8]">Sugar House</h3>
            </a>
            <a href="/downtown-salt-lake" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-[#4e37a8]">Downtown Salt Lake</h3>
            </a>
            <a href="/fairpark" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-[#4e37a8]">Fairpark</h3>
            </a>
            <a href="/poplar-grove" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-[#4e37a8]">Poplar Grove</h3>
            </a>
            <a href="/glendale" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-[#4e37a8]">Glendale</h3>
            </a>
            <a href="/riverton" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-[#4e37a8]">Riverton</h3>
            </a>
            <a href="/herriman" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-[#4e37a8]">Herriman</h3>
            </a>
            <a href="/saratoga-springs" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-[#4e37a8]">Saratoga Springs</h3>
            </a>
            <a href="/eagle-mountain" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-[#4e37a8]">Eagle Mountain</h3>
            </a>
            <a href="/pleasant-grove" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-[#4e37a8]">Pleasant Grove</h3>
            </a>
            <a href="/american-fork" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-[#4e37a8]">American Fork</h3>
            </a>
            <a href="/bluffdale" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-[#4e37a8]">Bluffdale</h3>
            </a>
            <a href="/park-city" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-[#4e37a8]">Park City</h3>
            </a>
            <a href="/tooele" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-[#4e37a8]">Tooele</h3>
            </a>
          </div>
          
          {/* Utility Pages Section */}
          <div className="mt-12 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Dumpster Rental Resources</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <a href="/transparent-pricing" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-[#4e37a8]">Transparent Pricing</h4>
              </a>
              <a href="/same-day-delivery" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-[#4e37a8]">Same-Day Delivery</h4>
              </a>
              <a href="/residential-dumpsters" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-[#4e37a8]">Residential Dumpsters</h4>
              </a>
              <a href="/construction-dumpsters" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-[#4e37a8]">Construction Dumpsters</h4>
              </a>
              <a href="/dumpster-sizes-1" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-[#4e37a8]">Dumpster Sizes Guide</h4>
              </a>
              <a href="/responsible-disposal" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-[#4e37a8]">Responsible Disposal</h4>
              </a>
              <a href="/local-pros" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-[#4e37a8]">Local Pros</h4>
              </a>
              <a href="/blog/home-renovation-waste-disposal-guide" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-[#4e37a8]">Renovation Guide</h4>
              </a>
            </div>
          </div>
          
          <div className="text-center">
            <a href="/services" className="inline-flex items-center px-6 py-3 bg-[#4e37a8] text-white rounded-lg hover:bg-purple-700 transition-colors font-medium">
              View All Services
              <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <ReviewsCarousel />

      {/* AI Citation Schema */}
      <AICitationSchema data={iconDumpstersAIData} />
    </div>
  );
}


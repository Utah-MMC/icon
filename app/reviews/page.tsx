'use client';

import Image from "next/image";
import ImageWithFallback from "../components/ImageWithFallback";
import QuoteForm from "../components/QuoteForm";
import TrustSection from "../components/TrustSection";

export default function Reviews() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative">
        <div className="relative h-64 sm:h-80 lg:h-96">
          <ImageWithFallback 
            src="/images/dumpsterSmallBanner5.jpeg" 
            alt="Customer Reviews and Testimonials for Icon Dumpsters - Utah's Trusted Dumpster Rental Service"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Customer Reviews
            </h1>
            <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto">
              See what our customers are saying about Icon Dumpsters
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://icondumpsters.com/#quote-form" 
                className="bg-[#4e37a8] hover:bg-purple-700 text-white px-8 py-3 rounded-xl font-semibold transition-colors duration-300"
              >
                Get Free Quote
              </a>
              <a 
                href="tel:385-340-7625" 
                className="bg-white hover:bg-gray-100 text-[#4e37a8] px-8 py-3 rounded-xl font-semibold transition-colors duration-300"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Google Reviews Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Google Reviews
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real reviews from real customers across the Wasatch Front
            </p>
          </div>

                     {/* Google Reviews Grid */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
             {/* Review Card 1 - Josh Lounsbury */}
             <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
               <div className="flex items-center mb-4">
                 <div className="flex text-yellow-400">
                   {[...Array(5)].map((_, i) => (
                     <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                     </svg>
                   ))}
                 </div>
                 <span className="ml-2 text-sm text-gray-500">a year ago</span>
               </div>
               <p className="text-gray-700 mb-4">
                 "They have great dumpsters!"
               </p>
               <div className="flex items-center">
                 <div className="w-10 h-10 bg-[#4e37a8] rounded-full flex items-center justify-center text-white font-semibold">
                   J
                 </div>
                 <div className="ml-3">
                   <p className="font-semibold text-gray-900">Josh Lounsbury</p>
                   <p className="text-sm text-gray-500">2 reviews</p>
                 </div>
               </div>
               {/* Owner Response */}
               <div className="mt-4 pl-4 border-l-2 border-[#4e37a8] bg-gray-50 p-3 rounded-r-lg">
                 <div className="flex items-center mb-2">
                   <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-semibold">
                     I
                   </div>
                   <div className="ml-2">
                     <p className="font-semibold text-gray-900 text-sm">Icon Dumpsters (Owner)</p>
                     <p className="text-xs text-gray-500">a week ago</p>
                   </div>
                 </div>
                 <p className="text-gray-700 text-sm">
                   "Thank you for your positive feedback! We're thrilled to hear that you are happy with our dumpster services. We strive to provide the best experience for our customers, and it's wonderful to know we're on the right track. If you need any assistance in the future, don't hesitate to reach out!"
                 </p>
               </div>
             </div>

             {/* Review Card 2 - Shahab Hajarian */}
             <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
               <div className="flex items-center mb-4">
                 <div className="flex text-yellow-400">
                   {[...Array(5)].map((_, i) => (
                     <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                     </svg>
                   ))}
                 </div>
                 <span className="ml-2 text-sm text-gray-500">3 weeks ago</span>
                 <span className="ml-2 bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded">NEW</span>
               </div>
               <p className="text-gray-700 mb-4">
                 "Great service and very professional!"
               </p>
               <div className="flex items-center">
                 <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-semibold">
                   S
                 </div>
                 <div className="ml-3">
                   <p className="font-semibold text-gray-900">Shahab Hajarian</p>
                   <p className="text-sm text-gray-500">11 reviews</p>
                 </div>
               </div>
               {/* Owner Response */}
               <div className="mt-4 pl-4 border-l-2 border-[#4e37a8] bg-gray-50 p-3 rounded-r-lg">
                 <div className="flex items-center mb-2">
                   <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-semibold">
                     I
                   </div>
                   <div className="ml-2">
                     <p className="font-semibold text-gray-900 text-sm">Icon Dumpsters (Owner)</p>
                     <p className="text-xs text-gray-500">a week ago</p>
                   </div>
                 </div>
                 <p className="text-gray-700 text-sm">
                   "Thank you for taking the time to leave us a 5-star rating! We're thrilled to hear that you had a great experience."
                 </p>
               </div>
             </div>

             {/* Review Card 3 - Sheida H. Maguire */}
             <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
               <div className="flex items-center mb-4">
                 <div className="flex text-yellow-400">
                   {[...Array(5)].map((_, i) => (
                     <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                     </svg>
                   ))}
                 </div>
                 <span className="ml-2 text-sm text-gray-500">a year ago</span>
               </div>
               <p className="text-gray-700 mb-4">
                 "They are fast, reliable and responsive. I am able to call and talk to someone right away and get my dumpster scheduled. I am a happy customer!"
               </p>
               <div className="flex items-center">
                 <div className="w-10 h-10 bg-[#4e37a8] rounded-full flex items-center justify-center text-white font-semibold">
                   S
                 </div>
                 <div className="ml-3">
                   <p className="font-semibold text-gray-900">Sheida H. Maguire</p>
                   <p className="text-sm text-gray-500">16 reviews</p>
                 </div>
               </div>
               {/* Owner Response */}
               <div className="mt-4 pl-4 border-l-2 border-[#4e37a8] bg-gray-50 p-3 rounded-r-lg">
                 <div className="flex items-center mb-2">
                   <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-semibold">
                     I
                   </div>
                   <div className="ml-2">
                     <p className="font-semibold text-gray-900 text-sm">Icon Dumpsters (Owner)</p>
                     <p className="text-xs text-gray-500">a week ago</p>
                   </div>
                 </div>
                 <p className="text-gray-700 text-sm">
                   "Thank you so much for sharing your wonderful experience! We're delighted to know that our team could make the process smooth and efficient for you. Your satisfaction means the world to us, and we're here anytime you need assistance. 😊"
                 </p>
               </div>
             </div>

             {/* Review Card 4 - Texana Sonnefeld */}
             <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
               <div className="flex items-center mb-4">
                 <div className="flex text-yellow-400">
                   {[...Array(5)].map((_, i) => (
                     <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                     </svg>
                   ))}
                 </div>
                 <span className="ml-2 text-sm text-gray-500">a year ago</span>
               </div>
               <p className="text-gray-700 mb-4">
                 "Icon's customer service is great! Couldn't have been more friendly and informative. If you need a dumpster at all - this is the place to call for sure."
               </p>
               <div className="flex items-center">
                 <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-semibold">
                   T
                 </div>
                 <div className="ml-3">
                   <p className="font-semibold text-gray-900">Texana Sonnefeld</p>
                   <p className="text-sm text-gray-500">4 reviews</p>
                 </div>
               </div>
             </div>

             {/* Review Card 5 - Dave Ostberg */}
             <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
               <div className="flex items-center mb-4">
                 <div className="flex text-yellow-400">
                   {[...Array(5)].map((_, i) => (
                     <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                     </svg>
                   ))}
                 </div>
                 <span className="ml-2 text-sm text-gray-500">a year ago</span>
               </div>
               <p className="text-gray-700 mb-4">
                 "Candace was amazing to deal with. Great delivery as promised. Will definitely use again! Thank you!"
               </p>
               <div className="flex items-center">
                 <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                   D
                 </div>
                 <div className="ml-3">
                   <p className="font-semibold text-gray-900">Dave Ostberg</p>
                   <p className="text-sm text-gray-500">1 review</p>
                 </div>
               </div>
               {/* Owner Response */}
               <div className="mt-4 pl-4 border-l-2 border-[#4e37a8] bg-gray-50 p-3 rounded-r-lg">
                 <div className="flex items-center mb-2">
                   <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-semibold">
                     I
                   </div>
                   <div className="ml-2">
                     <p className="font-semibold text-gray-900 text-sm">Icon Dumpsters (Owner)</p>
                     <p className="text-xs text-gray-500">a week ago</p>
                   </div>
                 </div>
                 <p className="text-gray-700 text-sm">
                   "Thank you so much for your kind words Dave! We're thrilled to hear that you had a great experience with Candace and that the delivery met your expectations. We look forward to serving you again in the future!"
                 </p>
               </div>
             </div>

             {/* Review Card 6 - Bruce Millgate */}
             <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
               <div className="flex items-center mb-4">
                 <div className="flex text-yellow-400">
                   {[...Array(5)].map((_, i) => (
                     <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                     </svg>
                   ))}
                 </div>
                 <span className="ml-2 text-sm text-gray-500">a year ago</span>
               </div>
               <p className="text-gray-700 mb-4">
                 "Awesome customer service and staff is amazing! Great prices and a service I'd use again!"
               </p>
               <div className="flex items-center">
                 <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-semibold">
                   B
                 </div>
                 <div className="ml-3">
                   <p className="font-semibold text-gray-900">Bruce Millgate</p>
                   <p className="text-sm text-gray-500">2 reviews</p>
                 </div>
               </div>
               {/* Owner Response */}
               <div className="mt-4 pl-4 border-l-2 border-[#4e37a8] bg-gray-50 p-3 rounded-r-lg">
                 <div className="flex items-center mb-2">
                   <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-semibold">
                     I
                   </div>
                   <div className="ml-2">
                     <p className="font-semibold text-gray-900 text-sm">Icon Dumpsters (Owner)</p>
                     <p className="text-xs text-gray-500">a week ago</p>
                   </div>
                 </div>
                 <p className="text-gray-700 text-sm">
                   "Thank you for your fantastic review! We're so happy that you had a great experience with our customer service and staff. We strive to offer the best prices and look forward to serving you again in the future!"
                 </p>
               </div>
             </div>
           </div>

          {/* Google Reviews CTA */}
          <div className="text-center">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Leave Us a Review
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                We value your feedback! If you've used our services, please take a moment to share your experience on Google Reviews.
              </p>
              <a 
                href="https://www.google.com/search?q=Icon+Dumpsters+Utah+reviews" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-[#4e37a8] hover:bg-purple-700 text-white px-8 py-3 rounded-xl font-semibold transition-colors duration-300"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Write a Google Review
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real testimonials from satisfied customers across Utah
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gradient-to-r from-[#4e37a8] to-purple-700 rounded-2xl p-8 text-white">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold">
                  J
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold">Jennifer Martinez</h3>
                  <p className="text-purple-100">Home Renovation Project</p>
                </div>
              </div>
              <blockquote className="text-lg leading-relaxed">
                "Icon Dumpsters made our home renovation project so much easier. They delivered the dumpster right when we needed it and picked it up promptly. The customer service was outstanding - they even helped us choose the right size for our project. Highly recommend!"
              </blockquote>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gradient-to-r from-[#4e37a8] to-purple-700 rounded-2xl p-8 text-white">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold">
                  T
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold">Thomas Anderson</h3>
                  <p className="text-purple-100">Estate Cleanout</p>
                </div>
              </div>
              <blockquote className="text-lg leading-relaxed">
                "We used Icon Dumpsters for an estate cleanout and they were incredibly professional and compassionate during a difficult time. They helped us get the property ready for sale quickly and efficiently. The pricing was fair and transparent."
              </blockquote>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gradient-to-r from-[#4e37a8] to-purple-700 rounded-2xl p-8 text-white">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold">
                  M
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold">Maria Rodriguez</h3>
                  <p className="text-purple-100">Commercial Project</p>
                </div>
              </div>
              <blockquote className="text-lg leading-relaxed">
                "As a contractor, I need reliable dumpster services for my projects. Icon Dumpsters has never let me down. They provide consistent, professional service and competitive pricing. My go-to choice for all dumpster rental needs."
              </blockquote>
            </div>

            {/* Testimonial 4 */}
            <div className="bg-gradient-to-r from-[#4e37a8] to-purple-700 rounded-2xl p-8 text-white">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold">
                  K
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold">Kevin Park</h3>
                  <p className="text-purple-100">Basement Cleanout</p>
                </div>
              </div>
              <blockquote className="text-lg leading-relaxed">
                "Fast, reliable, and professional. Icon Dumpsters helped us clean out our basement quickly. The dumpster was delivered on time and the whole process was smooth. Great value for the money!"
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Customers Choose Icon Dumpsters
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#4e37a8] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Same-day or next-day delivery available for most areas</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#4e37a8] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Reliable Service</h3>
              <p className="text-gray-600">Consistent, professional service you can count on</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#4e37a8] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fair Pricing</h3>
              <p className="text-gray-600">Competitive rates with no hidden fees or surprises</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="quote-form" className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Get Your Free Quote Today</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join our satisfied customers and get a competitive quote for your dumpster rental needs.
            </p>
          </div>
          <QuoteForm />
        </div>
      </section>

      {/* Trust Section */}
      <TrustSection />
    </div>
  );
}

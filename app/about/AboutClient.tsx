
import ImageWithFallback from '../components/ImageWithFallback';
import QuoteForm from '../components/QuoteForm';
import PageHero from '../components/PageHero';

export default function AboutClient() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <PageHero
        title="About Icon Dumpsters - Utah Dumpster Rental Services"
        subtitle="Icon Dumpsters was founded by a family with deep roots in pond service and landscaping. With years of hands-on experience and a commitment to exceptional service, we set out to make dumpster rentals more accessible, reliable, and affordable for homeowners and contractors throughout Utah."
        primaryCtaText="GET FREE QUOTE"
        primaryCtaLink="#quote-form"
        secondaryCtaText="Call (801) 918-6000"
        secondaryCtaLink="tel:8019186000"
      />

      {/* Who We Are Section */}
      <section className="bg-[#4e37a8] text-white py-16 sm:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">Who We Are</h2>
          
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 flex items-center justify-center">
              <ImageWithFallback 
                src="/Icon_Dumpsters_Final.png" 
                alt="Icon Dumpsters - Professional Dumpster Rental Services in Utah" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>

                     <div className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed">
                                                       <p>
                 Our story begins with the Maguire Family and <a href="https://utahwatergardens.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-200 underline font-semibold cursor-pointer transition-colors">UtahWaterGardens.com</a>, where we built a 
                 successful pond service business serving Utah homeowners and businesses. For years, we 
                 specialized in creating beautiful water features and maintaining ponds throughout the state, 
                 building a reputation for quality work and reliable service.
               </p>
             <p>
               As our pond service business grew, we found ourselves constantly frustrated with the 
               third-party dumpster rental companies we were using for our excavation and cleanup jobs. 
               Late deliveries, missed pickups, poor communication, and unreliable service were becoming 
               major headaches that were affecting our ability to serve our customers effectively.
             </p>
             <p>
               Instead of continuing to deal with these issues, we decided to take matters into our own 
               hands. We purchased our own dumpsters and started managing our own waste removal needs. 
               What started as a solution for our own business quickly became clear - there was a real 
               need for better dumpster service in Utah.
             </p>
             <p>
               We started small - with just one truck and one dumpster. But our commitment to reliable 
               service and honest business practices quickly resonated with Utah contractors and homeowners. 
               Today, we've grown to operate one truck with 44 dumpsters, serving communities throughout 
               the state with the same dedication that built our reputation.
             </p>
             <p>
               Our growth didn't stop there. We recently acquired TNT Dump, expanding our reach and 
               service capabilities even further. This acquisition represents our commitment to providing 
               even better service to more customers across Utah.
             </p>
             <p>
               Today, Icon Dumpsters is proud to serve homeowners, contractors, and businesses throughout 
               Utah with the same reliability and attention to detail that made <a href="https://utahwatergardens.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-200 underline font-semibold cursor-pointer transition-colors">UtahWaterGardens.com</a> successful. 
               We understand what it's like to depend on others for your business needs, and we're committed 
               to being the dumpster service you can count on.
             </p>
           </div>
        </div>
        
        {/* Curved transition */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-auto">
            <path d="M0,0 C400,120 800,120 1200,0 L1200,120 L0,120 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* What We Value Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">What We Value</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At Icon Dumpsters, our values shape how we do business and how we treat customers. 
              Here's what matters most to us:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Exceptional Customer Service */}
            <div className="bg-gray-50 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#4e37a8] rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Exceptional Customer Service</h3>
              <p className="text-gray-600 leading-relaxed">
                We believe every customer deserves attention, respect, and a hassle-free experience 
                from start to finish. Your satisfaction is our top priority.
              </p>
            </div>

            {/* Communication */}
            <div className="bg-gray-50 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#4e37a8] rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Communication</h3>
              <p className="text-gray-600 leading-relaxed">
                We keep things clear and simple. You'll always know what to expect, when to expect it, 
                and who to contact if you have questions.
              </p>
            </div>

            {/* Honesty */}
            <div className="bg-gray-50 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#4e37a8] rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Honesty</h3>
              <p className="text-gray-600 leading-relaxed">
                We believe in doing the right thing, being upfront about pricing, and standing behind 
                our word on every job. No hidden fees, no surprises.
              </p>
            </div>
          </div>
        </div>
      </section>

             {/* Call to Action Section */}
       <section className="bg-gray-100 py-16">
         <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
           <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
             Ready to Get Started?
           </h2>
           <p className="text-lg text-gray-600 mb-8">
             Experience the difference that honest, reliable dumpster service makes. 
             Get your free quote today.
           </p>
                       <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#quote-form" className="bg-[#4e37a8] hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center">
                Get Free Quote
              </a>
              <button className="border-2 border-[#4e37a8] text-[#4e37a8] hover:bg-[#4e37a8] hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center">
                Call (801) 918-6000
              </button>
            </div>
         </div>
       </section>

       {/* Quote Form Section */}
       <section id="quote-form" className="bg-white py-16">
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-8">
             <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
               Get Your Free Quote
             </h2>
             <p className="text-lg text-gray-600">
               Fill out the form below and we'll get back to you with a personalized quote for your project.
             </p>
           </div>
           <QuoteForm />
         </div>
       </section>
     </div>
   );
 }


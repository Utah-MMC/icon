import { Metadata } from "next";
import ImageWithFallback from "../components/ImageWithFallback";

export const metadata: Metadata = {
  title: "Dumpster Rental Blog - Tips, Guides & Industry Insights | Icon Dumpsters",
  description: "Expert dumpster rental blog with tips, guides, and industry insights. Learn about waste management, construction cleanup, dumpster sizes, and cost-saving strategies. Stay updated with the latest trends.",
  keywords: "dumpster rental blog, dumpster rental, dumpster rental near me, roll off dumpster, rolloff dumpster, waste management tips, construction cleanup guide, dumpster rental tips, waste disposal blog, Icon Dumpsters blog, Utah dumpster rental blog",
  openGraph: {
    title: "Dumpster Rental Blog - Tips, Guides & Industry Insights | Icon Dumpsters",
    description: "Expert dumpster rental blog with tips, guides, and industry insights. Learn about waste management, construction cleanup, dumpster sizes, and cost-saving strategies.",
    url: 'https://icondumpsters.com/blog',
    images: [
      {
        url: '/images/dumpsters.jpeg',
        width: 1200,
        height: 630,
        alt: 'Dumpster Rental Blog - Tips and Guides',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Dumpster Rental Blog - Tips, Guides & Industry Insights | Icon Dumpsters",
    description: "Expert dumpster rental blog with tips, guides, and industry insights. Learn about waste management, construction cleanup, dumpster sizes, and cost-saving strategies.",
    images: ['/images/dumpsters.jpeg'],
  },
  alternates: {
    canonical: '/blog',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Blog() {
  return (
    <div>
      {/* Blog Header */}
      <section className="bg-gradient-to-r from-[#4e37a8] to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Dumpster Rental Blog</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Expert insights, tips, and guides on waste management, dumpster rental, and construction cleanup. 
            Stay updated with the latest industry trends and best practices.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
                         <input 
               type="text" 
               placeholder="Search articles..." 
               className="w-full px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-400"
             />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#4e37a8] text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Featured Post */}
                         <article className="mb-12 border-b border-gray-200 pb-12">
                               <div className="bg-gray-100 rounded-lg h-80 mb-6 overflow-hidden">
                                     <ImageWithFallback src="/images/dumpsters.jpeg" alt="Dumpster Rental Services" className="w-full h-full object-cover" fallbackSrc="/images/dumpsters.webp" />
                </div>
              <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                                 <span className="bg-[#4e37a8] text-white px-3 py-1 rounded-full text-xs font-semibold">FEATURED</span>
                <span>8 min read</span>
                <span>•</span>
                <span>January 15, 2025</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Complete Guide to Dumpster Rental: Everything You Need to Know in 2025
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                A comprehensive guide to choosing the right dumpster size, understanding rental costs, 
                and maximizing efficiency for your construction or cleanup project. Learn the latest 
                industry standards and best practices for waste management.
              </p>
                             <a href="#" className="text-[#4e37a8] font-semibold hover:text-purple-700 transition-colors">
                 Read Full Article →
               </a>
            </article>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Blog Post 1 */}
                             <article className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                 <div className="bg-gray-100 h-48 overflow-hidden">
                                       <ImageWithFallback src="/images/dumpsterSmallBanner.jpeg" alt="Construction Waste Management" className="w-full h-full object-cover" fallbackSrc="/images/dumpsterSmallBanner.webp" />
                 </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
                    <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">CONSTRUCTION</span>
                    <span>6 min read</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Construction Waste Management: Best Practices for 2025
                  </h3>
                                     <p className="text-gray-600 mb-4 leading-relaxed">
                     Learn proven strategies for managing construction waste efficiently. From sorting 
                     materials to choosing the right dumpster size, discover how to minimize costs and 
                     environmental impact.
                   </p>
                   <a href="#" className="text-[#4e37a8] font-semibold hover:text-purple-700 transition-colors">
                     Read More →
                   </a>
                </div>
              </article>

              {/* Blog Post 2 */}
                             <article className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                 <div className="bg-gray-100 h-48 overflow-hidden">
                                       <ImageWithFallback src="/images/dumpsterSmallBanner2.jpeg" alt="Home Renovation Waste Disposal" className="w-full h-full object-cover" fallbackSrc="/images/dumpsterSmallBanner2.webp" />
                 </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
                    <span className="bg-[#4e37a8] text-white px-2 py-1 rounded-full text-xs font-semibold">RENOVATION</span>
                    <span>7 min read</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Home Renovation Waste Disposal: A Complete Guide
                  </h3>
                                     <p className="text-gray-600 mb-4 leading-relaxed">
                     Planning a home renovation? Learn how to properly dispose of renovation waste, 
                     choose the right dumpster size, and stay compliant with local regulations.
                   </p>
                   <a href="#" className="text-purple-600 font-semibold hover:text-purple-700 transition-colors">
                     Read More →
                   </a>
                </div>
              </article>

              {/* Blog Post 3 */}
                             <article className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                 <div className="bg-gray-100 h-48 overflow-hidden">
                                       <ImageWithFallback src="/images/dumpsterSmallBanner3.jpeg" alt="Dumpster Size Guide" className="w-full h-full object-cover" fallbackSrc="/images/dumpsterSmallBanner3.webp" />
                 </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
                    <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">GUIDE</span>
                    <span>10 min read</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Dumpster Size Guide: How to Choose the Right Size for Your Project
                  </h3>
                                     <p className="text-gray-600 mb-4 leading-relaxed">
                     Confused about which dumpster size to rent? Our comprehensive guide helps you 
                     calculate waste volume and choose the perfect size for your specific project needs.
                   </p>
                   <a href="#" className="text-purple-600 font-semibold hover:text-purple-700 transition-colors">
                     Read More →
                   </a>
                </div>
              </article>

              {/* Blog Post 4 */}
                             <article className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                 <div className="bg-gray-100 h-48 overflow-hidden">
                                       <ImageWithFallback src="/images/dumpsterSmallBanner4.jpeg" alt="Dumpster Rental Costs" className="w-full h-full object-cover" fallbackSrc="/images/dumpsterSmallBanner4.webp" />
                 </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
                    <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">COST</span>
                    <span>5 min read</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Dumpster Rental Costs: What to Expect in 2025
                  </h3>
                                     <p className="text-gray-600 mb-4 leading-relaxed">
                     Get a detailed breakdown of dumpster rental costs, including delivery fees, 
                     rental periods, and additional charges. Learn how to budget effectively for your project.
                   </p>
                   <a href="#" className="text-purple-600 font-semibold hover:text-purple-700 transition-colors">
                     Read More →
                   </a>
                </div>
              </article>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Categories */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
              <ul className="space-y-3">
                                 <li>
                   <a href="#" className="flex justify-between items-center text-gray-600 hover:text-purple-600 transition-colors">
                     <span>Construction Waste</span>
                     <span className="bg-purple-600 text-white px-2 py-1 rounded-full text-xs font-semibold">1</span>
                   </a>
                 </li>
                                 <li>
                   <a href="#" className="flex justify-between items-center text-gray-600 hover:text-purple-600 transition-colors">
                     <span>Home Renovation</span>
                     <span className="bg-purple-600 text-white px-2 py-1 rounded-full text-xs font-semibold">1</span>
                   </a>
                 </li>
                                 <li>
                   <a href="#" className="flex justify-between items-center text-gray-600 hover:text-purple-600 transition-colors">
                     <span>Dumpster Sizes</span>
                     <span className="bg-purple-600 text-white px-2 py-1 rounded-full text-xs font-semibold">1</span>
                   </a>
                 </li>
                                 <li>
                   <a href="#" className="flex justify-between items-center text-gray-600 hover:text-purple-600 transition-colors">
                     <span>Cost Guide</span>
                     <span className="bg-purple-600 text-white px-2 py-1 rounded-full text-xs font-semibold">1</span>
                   </a>
                 </li>
                                 <li>
                   <a href="#" className="flex justify-between items-center text-gray-600 hover:text-purple-600 transition-colors">
                     <span>Waste Management</span>
                     <span className="bg-purple-600 text-white px-2 py-1 rounded-full text-xs font-semibold">1</span>
                   </a>
                 </li>
              </ul>
            </div>

            {/* Recent Posts */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Posts</h3>
              <div className="space-y-4">
                                 <a href="#" className="flex gap-3 text-gray-600 hover:text-purple-600 transition-colors">
                   <div className="bg-gray-200 w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                                           <ImageWithFallback src="/images/dumpsterSmallBanner.jpeg" alt="Construction Waste Management" className="w-full h-full object-cover" fallbackSrc="/images/dumpsterSmallBanner.webp" />
                   </div>
                   <div>
                     <h4 className="font-semibold text-gray-900 text-sm leading-tight mb-1">
                       Construction Waste Management: Best Practices for 2025
                     </h4>
                     <p className="text-xs text-gray-500">6 min read</p>
                   </div>
                 </a>
                                 <a href="#" className="flex gap-3 text-gray-600 hover:text-purple-600 transition-colors">
                   <div className="bg-gray-200 w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                                           <ImageWithFallback src="/images/dumpsterSmallBanner2.jpeg" alt="Home Renovation Waste Disposal" className="w-full h-full object-cover" fallbackSrc="/images/dumpsterSmallBanner2.webp" />
                   </div>
                   <div>
                     <h4 className="font-semibold text-gray-900 text-sm leading-tight mb-1">
                       Home Renovation Waste Disposal: A Complete Guide
                     </h4>
                     <p className="text-xs text-gray-500">7 min read</p>
                   </div>
                 </a>
                                 <a href="#" className="flex gap-3 text-gray-600 hover:text-purple-600 transition-colors">
                   <div className="bg-gray-200 w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                     <ImageWithFallback src="/images/dumpsterSmallBanner3.jpeg" alt="Dumpster Size Guide" className="w-full h-full object-cover" fallbackSrc="/images/dumpsterSmallBanner3.webp" />
                   </div>
                   <div>
                     <h4 className="font-semibold text-gray-900 text-sm leading-tight mb-1">
                       Dumpster Size Guide: How to Choose the Right Size
                     </h4>
                     <p className="text-xs text-gray-500">10 min read</p>
                   </div>
                 </a>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gray-800 text-white rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
              <p className="text-gray-300 text-sm mb-4">
                Get the latest dumpster rental tips and industry insights delivered to your inbox.
              </p>
              <form className="space-y-3">
                                 <input 
                   type="email" 
                   placeholder="Your email address" 
                   className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-400"
                   required
                 />
                                 <button 
                   type="submit" 
                   className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors font-semibold"
                 >
                   Subscribe
                 </button>
              </form>
            </div>

            {/* Contact Info */}
                         <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Need a Dumpster?</h3>
              <p className="text-gray-600 text-sm mb-4">
                Get a free quote for your project. Our team is ready to help you choose the right dumpster size.
              </p>
              <div className="space-y-2 text-sm">
                                 <div className="flex items-center gap-2">
                   <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                     <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                   </svg>
                   <span className="text-gray-700">(555) 123-4567</span>
                 </div>
                 <div className="flex items-center gap-2">
                   <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                     <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                     <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                   </svg>
                   <span className="text-gray-700">info@icondumpsters.com</span>
                 </div>
              </div>
                             <a href="/#quote-form" className="w-full mt-4 bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors font-semibold inline-block text-center">
                 Get Free Quote
               </a>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

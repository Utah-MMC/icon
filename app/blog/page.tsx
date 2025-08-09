import { Metadata } from "next";
import ImageWithFallback from "../components/ImageWithFallback";
import Link from "next/link";

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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#4e37a8] via-purple-700 to-[#4e37a8] text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Dumpster Rental Blog
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 mb-8 leading-relaxed">
              Expert insights, tips, and guides on waste management, dumpster rental, and construction cleanup. 
              Stay updated with the latest industry trends and best practices.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-lg mx-auto relative">
              <input 
                type="text" 
                placeholder="Search articles..." 
                className="w-full px-6 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-4 focus:ring-purple-300 focus:ring-opacity-50 shadow-lg"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#4e37a8] text-white px-6 py-2 rounded-lg hover:bg-purple-800 transition-all duration-200 shadow-md">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-12">
          
          {/* Main Content Area */}
          <div className="xl:col-span-3">
            {/* Featured Post */}
            <article className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden mb-12 hover:shadow-xl transition-all duration-300">
              <div className="relative">
                <div className="h-96 overflow-hidden">
                  <ImageWithFallback 
                    src="/images/dumpsters.jpeg" 
                    alt="Complete Guide to Dumpster Rental" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                    fallbackSrc="/images/dumpsters.webp" 
                  />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-[#4e37a8] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    FEATURED
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold">
                    DUMPSTER RENTAL
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    8 min read
                  </span>
                  <span>•</span>
                  <span>January 15, 2025</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  Complete Guide to Dumpster Rental: Everything You Need to Know in 2025
                </h2>
                
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  A comprehensive guide to choosing the right dumpster size, understanding rental costs, 
                  and maximizing efficiency for your construction or cleanup project. Learn the latest 
                  industry standards and best practices for waste management.
                </p>
                
                <Link 
                  href="/complete-dumpster-rental-guide-2025" 
                  className="inline-flex items-center gap-2 bg-[#4e37a8] text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-all duration-200 font-semibold shadow-md hover:shadow-lg"
                >
                  Read Full Article
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Article 1 */}
              <article className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <div className="h-56">
                    <ImageWithFallback 
                      src="/images/dumpsterSmallBanner.jpeg" 
                      alt="Construction Waste Management" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      fallbackSrc="/images/dumpsterSmallBanner.webp" 
                    />
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      CONSTRUCTION
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3 text-sm text-gray-500">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    6 min read
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-[#4e37a8] transition-colors">
                    Construction Waste Management: Best Practices for 2025
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Learn proven strategies for managing construction waste efficiently. From sorting 
                    materials to choosing the right dumpster size, discover how to minimize costs and 
                    environmental impact.
                  </p>
                  
                  <Link 
                    href="/construction-waste-management-2025" 
                    className="inline-flex items-center gap-2 text-[#4e37a8] font-semibold hover:text-purple-700 transition-colors group-hover:gap-3"
                  >
                    Read More
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>

              {/* Article 2 */}
              <article className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <div className="h-56">
                    <ImageWithFallback 
                      src="/images/dumpsterSmallBanner2.jpeg" 
                      alt="Home Renovation Waste Disposal" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      fallbackSrc="/images/dumpsterSmallBanner2.webp" 
                    />
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="bg-[#4e37a8] text-white px-3 py-1 rounded-full text-xs font-semibold">
                      RENOVATION
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3 text-sm text-gray-500">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    7 min read
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-[#4e37a8] transition-colors">
                    Home Renovation Waste Disposal: A Complete Guide
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Planning a home renovation? Learn how to properly dispose of renovation waste, 
                    choose the right dumpster size, and stay compliant with local regulations.
                  </p>
                  
                  <Link 
                    href="/home-renovation-waste-disposal-guide" 
                    className="inline-flex items-center gap-2 text-[#4e37a8] font-semibold hover:text-purple-700 transition-colors group-hover:gap-3"
                  >
                    Read More
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>

              {/* Article 3 */}
              <article className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <div className="h-56">
                    <ImageWithFallback 
                      src="/images/dumpsterSmallBanner.jpeg" 
                      alt="Commercial Dumpster Rental" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      fallbackSrc="/images/dumpsterSmallBanner.webp" 
                    />
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      COMMERCIAL
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3 text-sm text-gray-500">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    7 min read
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-[#4e37a8] transition-colors">
                    Commercial Dumpster Rental: Business Solutions
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Optimize your business operations with professional commercial dumpster rental services. 
                    From retail stores to construction sites, discover tailored waste management solutions.
                  </p>
                  
                  <Link 
                    href="/blog/commercial-dumpster-rental-business-solutions" 
                    className="inline-flex items-center gap-2 text-[#4e37a8] font-semibold hover:text-purple-700 transition-colors group-hover:gap-3"
                  >
                    Read More
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>

              {/* Article 4 */}
              <article className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <div className="h-56">
                    <ImageWithFallback 
                      src="/images/dumpsterSmallBanner.jpeg" 
                      alt="Home Renovation Waste Disposal" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      fallbackSrc="/images/dumpsterSmallBanner.webp" 
                    />
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      RENOVATION
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3 text-sm text-gray-500">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    8 min read
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-[#4e37a8] transition-colors">
                    Home Renovation Waste Disposal: A Complete Guide
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Transform your home renovation project with proper waste disposal strategies. 
                    Learn how to manage waste efficiently while saving money and protecting the environment.
                  </p>
                  
                  <Link 
                    href="/blog/home-renovation-waste-disposal-guide" 
                    className="inline-flex items-center gap-2 text-[#4e37a8] font-semibold hover:text-purple-700 transition-colors group-hover:gap-3"
                  >
                    Read More
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="xl:col-span-1 space-y-8">
            {/* Categories */}
            <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <svg className="w-5 h-5 text-[#4e37a8]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1z" />
                </svg>
                Categories
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="flex justify-between items-center text-gray-700 hover:text-[#4e37a8] transition-colors py-2 px-3 rounded-lg hover:bg-purple-50">
                    <span className="font-medium">Construction Waste</span>
                    <span className="bg-[#4e37a8] text-white px-2 py-1 rounded-full text-xs font-semibold">1</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex justify-between items-center text-gray-700 hover:text-[#4e37a8] transition-colors py-2 px-3 rounded-lg hover:bg-purple-50">
                    <span className="font-medium">Home Renovation</span>
                    <span className="bg-[#4e37a8] text-white px-2 py-1 rounded-full text-xs font-semibold">2</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex justify-between items-center text-gray-700 hover:text-[#4e37a8] transition-colors py-2 px-3 rounded-lg hover:bg-purple-50">
                    <span className="font-medium">Commercial</span>
                    <span className="bg-[#4e37a8] text-white px-2 py-1 rounded-full text-xs font-semibold">1</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex justify-between items-center text-gray-700 hover:text-[#4e37a8] transition-colors py-2 px-3 rounded-lg hover:bg-purple-50">
                    <span className="font-medium">Waste Management</span>
                    <span className="bg-[#4e37a8] text-white px-2 py-1 rounded-full text-xs font-semibold">1</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Recent Posts */}
            <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <svg className="w-5 h-5 text-[#4e37a8]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                Recent Posts
              </h3>
              <div className="space-y-4">
                <Link href="/construction-waste-management-2025" className="flex gap-3 text-gray-700 hover:text-[#4e37a8] transition-colors group">
                  <div className="bg-gray-200 w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden group-hover:shadow-md transition-shadow">
                    <ImageWithFallback src="/images/dumpsterSmallBanner.jpeg" alt="Construction Waste Management" className="w-full h-full object-cover" fallbackSrc="/images/dumpsterSmallBanner.webp" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm leading-tight mb-1 group-hover:text-[#4e37a8] transition-colors">
                      Construction Waste Management: Best Practices for 2025
                    </h4>
                    <p className="text-xs text-gray-500">6 min read</p>
                  </div>
                </Link>
                
                <Link href="/home-renovation-waste-disposal-guide" className="flex gap-3 text-gray-700 hover:text-[#4e37a8] transition-colors group">
                  <div className="bg-gray-200 w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden group-hover:shadow-md transition-shadow">
                    <ImageWithFallback src="/images/dumpsterSmallBanner2.jpeg" alt="Home Renovation Waste Disposal" className="w-full h-full object-cover" fallbackSrc="/images/dumpsterSmallBanner2.webp" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm leading-tight mb-1 group-hover:text-[#4e37a8] transition-colors">
                      Home Renovation Waste Disposal: A Complete Guide
                    </h4>
                    <p className="text-xs text-gray-500">7 min read</p>
                  </div>
                </Link>
                
                <Link href="/commercial-dumpster-rental-business-solutions" className="flex gap-3 text-gray-700 hover:text-[#4e37a8] transition-colors group">
                  <div className="bg-gray-200 w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden group-hover:shadow-md transition-shadow">
                    <ImageWithFallback src="/images/dumpsterSmallBanner.jpeg" alt="Commercial Dumpster Rental" className="w-full h-full object-cover" fallbackSrc="/images/dumpsterSmallBanner.webp" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm leading-tight mb-1 group-hover:text-[#4e37a8] transition-colors">
                      Commercial Dumpster Rental: Business Solutions
                    </h4>
                    <p className="text-xs text-gray-500">7 min read</p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-br from-[#4e37a8] to-purple-700 text-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Stay Updated
              </h3>
              <p className="text-purple-100 text-sm mb-4 leading-relaxed">
                Get the latest dumpster rental tips and industry insights delivered to your inbox.
              </p>
              <form className="space-y-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-opacity-50"
                  required
                />
                <button 
                  type="submit" 
                  className="w-full bg-white text-[#4e37a8] py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold shadow-md"
                >
                  Subscribe
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-[#4e37a8]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Need a Dumpster?
              </h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                Get a free quote for your project. Our team is ready to help you choose the right dumpster size.
              </p>
              <div className="space-y-3 text-sm mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-[#4e37a8]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">(555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-[#4e37a8]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">info@icondumpsters.com</span>
                </div>
              </div>
              
              <Link 
                href="/#quote-form" 
                className="w-full bg-[#4e37a8] text-white py-3 rounded-lg hover:bg-purple-700 transition-colors font-semibold inline-block text-center shadow-md hover:shadow-lg"
              >
                Get Free Quote
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

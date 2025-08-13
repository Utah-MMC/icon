"use client";

import ImageWithFallback from "../components/ImageWithFallback";
import Link from "next/link";
import { useState, useEffect } from "react";
import NewsletterSubscription from "../components/NewsletterSubscription";

// Blog post data for search functionality
const blogPosts = [
  {
    id: "dumpster-rental-guide-2025",
    title: "Dumpster Rental Guide 2025: How to Choose the Right Size, Price, and Service for Your Project",
    excerpt: "Learn everything you need to know about dumpster rental in 2025 — from choosing the right size and understanding costs to avoiding hidden fees. Get expert tips to make your next cleanup easy and affordable.",
    category: "DUMPSTER RENTAL",
    readTime: "8 min read",
    image: "/images/dumpsters.jpeg",
    fallbackImage: "/images/dumpsters.webp",
    featured: true
  },
  {
    id: "construction-waste-management-2025",
    title: "Construction Waste Management 2025: Best Practices & Solutions",
    excerpt: "Discover effective construction waste management strategies, recycling techniques, and compliance requirements for 2025.",
    category: "CONSTRUCTION",
    readTime: "6 min read",
    image: "/images/dumpsterSmallBanner.jpeg",
    fallbackImage: "/images/dumpsterSmallBanner.webp"
  },
  {
    id: "home-renovation-waste-disposal-guide",
    title: "Home Renovation Waste Disposal: A Complete Guide",
    excerpt: "Learn how to properly dispose of renovation waste, choose the right dumpster size, and stay compliant with local regulations.",
    category: "HOME RENOVATION",
    readTime: "7 min read",
    image: "/images/dumpsterSmallBanner2.jpeg",
    fallbackImage: "/images/dumpsterSmallBanner2.webp"
  },
  {
    id: "commercial-dumpster-rental-business-solutions",
    title: "Commercial Dumpster Rental: Business Solutions",
    excerpt: "Explore commercial dumpster rental solutions for businesses, including multi-location services and waste management strategies.",
    category: "COMMERCIAL",
    readTime: "7 min read",
    image: "/images/dumpsterSmallBanner.jpeg",
    fallbackImage: "/images/dumpsterSmallBanner.webp"
  }
];

// Metadata is handled in layout.tsx for client components

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);

  // Search functionality
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredPosts(blogPosts);
    } else {
      const filtered = blogPosts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredPosts(filtered);
    }
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#4e37a8] via-purple-700 to-[#4e37a8] text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Icon Dumpsters Blog
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
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
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
            {/* Search Results Count */}
            {searchTerm && (
              <div className="mb-6">
                <p className="text-gray-600">
                  Found {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} for "{searchTerm}"
                </p>
              </div>
            )}

            {/* Featured Post */}
            {filteredPosts.find(post => post.featured) && (
              <article className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden mb-12 hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <div className="h-96 overflow-hidden relative">
                    <ImageWithFallback 
                      src={filteredPosts.find(post => post.featured)?.image || "/images/dumpsters.jpeg"} 
                      alt="Dumpster Rental Guide 2025 - Professional Utah Dumpster Rental Services for Construction and Cleanup Projects" 
                      className="hover:scale-105 transition-transform duration-500" 
                      fallbackSrc={filteredPosts.find(post => post.featured)?.fallbackImage || "/images/dumpsters.webp"}
                      fill={true}
                      priority={true}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
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
                      {filteredPosts.find(post => post.featured)?.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      {filteredPosts.find(post => post.featured)?.readTime}
                    </span>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                    {filteredPosts.find(post => post.featured)?.title}
                  </h2>
                  
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    {filteredPosts.find(post => post.featured)?.excerpt}
                  </p>
                  
                  <Link 
                    href={`/${filteredPosts.find(post => post.featured)?.id}`}
                    className="inline-flex items-center gap-2 bg-[#4e37a8] text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl"
                  >
                    Read Full Article
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            )}

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredPosts
                .filter(post => !post.featured)
                .map((post) => (
                  <article key={post.id} className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
                                         <div className="h-48 overflow-hidden relative">
                       <ImageWithFallback 
                         src={post.image} 
                         alt={post.title} 
                         className="hover:scale-105 transition-transform duration-500" 
                         fallbackSrc={post.fallbackImage}
                         fill={true}
                         sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                       />
                     </div>
                    
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold">
                          {post.category}
                        </span>
                        <span className="flex items-center gap-1 text-sm text-gray-500">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                          </svg>
                          {post.readTime}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <Link 
                        href={`/${post.id}`}
                        className="inline-flex items-center gap-2 text-[#4e37a8] hover:text-purple-700 font-semibold transition-colors"
                      >
                        Read More
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </article>
                ))}
            </div>

            {/* No Results Message */}
            {searchTerm && filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your search terms or browse all articles below.</p>
                <button 
                  onClick={() => setSearchTerm("")}
                  className="bg-[#4e37a8] text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-semibold"
                >
                  View All Articles
                </button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="xl:col-span-1 space-y-8">
            {/* Categories */}
            <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-[#4e37a8]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
                Categories
              </h3>
              <div className="space-y-2">
                {Array.from(new Set(blogPosts.map(post => post.category))).map((category) => (
                  <button
                    key={category}
                    onClick={() => setSearchTerm(category)}
                    className="block w-full text-left px-3 py-2 rounded-lg hover:bg-purple-50 hover:text-[#4e37a8] transition-colors text-sm"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Recent Posts */}
            <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-[#4e37a8]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                Recent Posts
              </h3>
              <div className="space-y-4">
                
                <Link href="/home-renovation-waste-disposal-guide" className="flex gap-3 text-gray-700 hover:text-[#4e37a8] transition-colors group">
                                     <div className="bg-gray-200 w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden group-hover:shadow-md transition-shadow relative">
                     <ImageWithFallback 
                       src="/images/dumpsterSmallBanner2.jpeg" 
                       alt="Home Renovation Waste Disposal Guide - Utah Dumpster Rental for Renovation Projects" 
                       className="object-cover" 
                       fallbackSrc="/images/dumpsterSmallBanner2.webp"
                       fill={true}
                       sizes="64px"
                     />
                   </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm leading-tight mb-1 group-hover:text-[#4e37a8] transition-colors">
                      Home Renovation Waste Disposal: A Complete Guide
                    </h4>
                    <p className="text-xs text-gray-500">7 min read</p>
                  </div>
                </Link>
                
                <Link href="/commercial-dumpster-rental-business-solutions" className="flex gap-3 text-gray-700 hover:text-[#4e37a8] transition-colors group">
                                     <div className="bg-gray-200 w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden group-hover:shadow-md transition-shadow relative">
                     <ImageWithFallback 
                       src="/images/dumpsterSmallBanner.jpeg" 
                       alt="Commercial Dumpster Rental Business Solutions - Professional Utah Dumpster Services" 
                       className="object-cover" 
                       fallbackSrc="/images/dumpsterSmallBanner.webp"
                       fill={true}
                       sizes="64px"
                     />
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
            <NewsletterSubscription />

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
                  <span className="text-gray-700 font-medium">(801) 918-6000</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#4e37a8]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">icondumpsters@gmail.com</span>
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

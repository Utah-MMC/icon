"use client";

import { useEffect, useMemo, useState, Suspense } from "react";
import ImageWithFallback from "../components/ImageWithFallback";
import Link from "next/link";
// import { track } from "../components/analytics";
import NewsletterSubscription from "../components/NewsletterSubscription";
import TextQuoteWidget from "../components/TextQuoteWidget";
import InternalLinks from "../components/InternalLinks";
import BlogSearch from "../components/BlogSearch";
import { useSearchParams } from "next/navigation";

// Blog post data for search functionality
const blogPosts = [
  {
    id: "demolition-dumpster-calculator",
    title: "Demolition Dumpster Calculator: Calculate Your Project Needs & Costs",
    excerpt: "Use our demolition dumpster calculator to estimate the right dumpster size, weight capacity, and rental costs for your demolition project. Get instant quotes for Utah demolition projects.",
    category: "DEMOLITION",
    readTime: "10 min read",
    image: "/images/dumpster500x500-1.jpeg",
    fallbackImage: "/images/dumpster500x500-1.webp",
    featured: true
  },
  {
    id: "dumpster-calculator-for-concrete",
    title: "Dumpster Calculator for Concrete: Estimate Concrete Disposal Costs",
    excerpt: "Use our concrete dumpster calculator to estimate the right dumpster size and costs for concrete disposal. Calculate concrete weight, volume, and rental costs for Utah projects.",
    category: "CONCRETE",
    readTime: "8 min read",
    image: "/images/concrete.webp",
    fallbackImage: "/images/concrete.jpg",
    featured: true
  },
  {
    id: "roofing-dumpster-calculator",
    title: "Roofing Dumpster Calculator: Calculate Roofing Waste Disposal Costs",
    excerpt: "Use our roofing dumpster calculator to estimate the right dumpster size and costs for roofing waste disposal. Calculate roofing material weight, volume, and rental costs for Utah projects.",
    category: "ROOFING",
    readTime: "9 min read",
    image: "/images/dumpsterSmallBanner4.jpeg",
    fallbackImage: "/images/dumpsterSmallBanner4.webp",
    featured: true
  },
  {
    id: "dumpster-volume-calculator",
    title: "Dumpster Volume Calculator: Calculate Dumpster Capacity & Dimensions",
    excerpt: "Use our dumpster volume calculator to determine the right dumpster size for your project. Calculate dumpster dimensions, capacity, and volume requirements for Utah projects.",
    category: "CALCULATOR",
    readTime: "7 min read",
    image: "/images/dumpster500x500-2.jpeg",
    fallbackImage: "/images/dumpster500x500-2.webp"
  },
  {
    id: "how-much-does-a-20-yard-dumpster-weight-empty",
    title: "How Much Does a 20 Yard Dumpster Weigh Empty? Complete Weight Guide",
    excerpt: "Learn how much a 20-yard dumpster weighs empty, its weight capacity, dimensions, and specifications. Get accurate weight information for 20-yard dumpster rentals in Utah.",
    category: "DUMPSTER SPECS",
    readTime: "6 min read",
    image: "/images/dumpster500x500-1.jpeg",
    fallbackImage: "/images/dumpster500x500-1.webp"
  },
  {
    id: "how-much-does-a-30-yard-dumpster-weight-empty",
    title: "How Much Does a 30 Yard Dumpster Weigh Empty? Complete Weight Guide",
    excerpt: "Learn how much a 30-yard dumpster weighs empty, its weight capacity, dimensions, and specifications. Get accurate weight information for 30-yard dumpster rentals in Utah.",
    category: "DUMPSTER SPECS",
    readTime: "6 min read",
    image: "/images/dumpster500x500-2.jpeg",
    fallbackImage: "/images/dumpster500x500-2.webp"
  },
  {
    id: "how-much-does-a-15-yard-dumpster-weight-empty",
    title: "How Much Does a 15 Yard Dumpster Weigh Empty? Complete Weight Guide",
    excerpt: "Learn how much a 15-yard dumpster weighs empty, its weight capacity, dimensions, and specifications. Get accurate weight information for 15-yard dumpster rentals in Utah.",
    category: "DUMPSTER SPECS",
    readTime: "6 min read",
    image: "/images/dumpster500x500-1.jpeg",
    fallbackImage: "/images/dumpster500x500-1.webp"
  },
  {
    id: "concrete-debris-calculator",
    title: "Concrete Debris Calculator: Calculate Concrete Waste & Disposal Costs",
    excerpt: "Use our concrete debris calculator to estimate concrete waste volume, weight, and disposal costs. Calculate concrete debris for demolition and construction projects in Utah.",
    category: "CONCRETE",
    readTime: "8 min read",
    image: "/images/concrete.webp",
    fallbackImage: "/images/concrete.jpg"
  },
  {
    id: "30-yard-dumpster-rental-calculator",
    title: "30 Yard Dumpster Rental Calculator: Calculate Costs & Capacity",
    excerpt: "Use our 30-yard dumpster rental calculator to estimate costs, capacity, and rental requirements. Calculate 30-yard dumpster rental costs for large projects in Utah.",
    category: "DUMPSTER RENTAL",
    readTime: "7 min read",
    image: "/images/dumpster500x500-2.jpeg",
    fallbackImage: "/images/dumpster500x500-2.webp"
  },
  {
    id: "home-renovation-waste-disposal-guide",
    title: "Home Renovation Waste Disposal: A Complete Guide",
    excerpt: "Learn how to properly dispose of renovation waste, choose the right dumpster size, and manage construction debris for your home renovation project in Utah.",
    category: "RENOVATION",
    readTime: "7 min read",
    image: "/images/dumpsterSmallBanner2.jpeg",
    fallbackImage: "/images/dumpsterSmallBanner2.webp"
  },
  {
    id: "commercial-dumpster-rental-business-solutions",
    title: "Commercial Dumpster Rental: Business Solutions",
    excerpt: "Professional dumpster rental solutions for businesses, construction companies, and commercial projects. Reliable waste management services across Utah.",
    category: "COMMERCIAL",
    readTime: "7 min read",
    image: "/images/dumpsterSmallBanner.jpeg",
    fallbackImage: "/images/dumpsterSmallBanner.webp"
  },
  {
    id: "estimate-right-dumpster-size-home-cleanout",
    title: "How to Estimate the Right Dumpster Size for a Home Cleanout Project (2025 Guide)",
    excerpt: "Struggling to pick the right dumpster size for your cleanout? This 2025 guide explains how to estimate dumpster sizes for home cleanout projects, covering costs, capacity, and tips to avoid overspending.",
    category: "GUIDES",
    readTime: "12 min read",
    image: "/images/blog/dumpster-size-estimation.jpg",
    fallbackImage: "/images/blog/dumpster-size-estimation.jpg",
    featured: true
  }
];

function BlogContent() {
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  // Get category from URL params
  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setSelectedCategory(category.toUpperCase());
    }
  }, [searchParams]);

  // Filter posts based on search term and category
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      try {
        // Safety checks for undefined values
        const title = post?.title || '';
        const excerpt = post?.excerpt || '';
        const category = post?.category || '';
        const safeSearchTerm = searchTerm || '';
        
        const matchesSearch = safeSearchTerm === "" || 
          title.toLowerCase().includes(safeSearchTerm.toLowerCase()) ||
          excerpt.toLowerCase().includes(safeSearchTerm.toLowerCase()) ||
          category.toLowerCase().includes(safeSearchTerm.toLowerCase());
        
        const matchesCategory = selectedCategory === "ALL" || category === selectedCategory;
        
        return matchesSearch && matchesCategory;
      } catch (error) {
        console.error('Error filtering blog post:', error, post);
        return false; // Skip posts that cause errors
      }
    });
  }, [searchTerm, selectedCategory]);

  // Get unique categories
  const categories = useMemo(() => {
    try {
      const cats = ["ALL", ...new Set(blogPosts.map(post => post?.category || '').filter(cat => cat))];
      return cats;
    } catch (error) {
      console.error('Error generating categories:', error);
      return ["ALL"];
    }
  }, []);

  // Track page view
  useEffect(() => {
    // Temporarily disabled track function to fix blog page
    // track('page_view', {
    //   page: 'blog',
    //   title: 'Icon Dumpsters Blog - Expert Waste Management Insights'
    // });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#4e37a8] to-purple-700 text-white py-16">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Icon Dumpsters Blog</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Expert insights, tips, and guides on waste management, dumpster rental, and construction cleanup.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Search and Filter */}
            <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 mb-8">
              <BlogSearch 
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
                categories={categories}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
              />
            </div>

            {/* Featured Posts */}
            {filteredPosts.filter(post => post.featured).length > 0 && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredPosts.filter(post => post.featured).map((post) => (
                    <article key={post.id} className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
                      <Link href={`/${post.id}`} className="block">
                        <div className="relative h-48 overflow-hidden">
                          <ImageWithFallback 
                            src={post.image} 
                            alt={post.title}
                            className="object-cover w-full h-full"
                            fallbackSrc={post.fallbackImage}
                            fill={true}
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                        <div className="p-6">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded">
                              {post.category}
                            </span>
                            <span className="text-gray-500 text-xs">{post.readTime}</span>
                          </div>
                          <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="text-gray-600 text-sm line-clamp-3">
                            {post.excerpt}
                          </p>
                        </div>
                      </Link>
                    </article>
                  ))}
                </div>
              </div>
            )}

            {/* All Posts */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {selectedCategory === "ALL" ? "All Articles" : `${selectedCategory} Articles`}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredPosts.map((post) => (
                  <article key={post.id} className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
                    <Link href={`/${post.id}`} className="block">
                      <div className="relative h-48 overflow-hidden">
                        <ImageWithFallback 
                          src={post.image} 
                          alt={post.title}
                          className="object-cover w-full h-full"
                          fallbackSrc={post.fallbackImage}
                          fill={true}
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded">
                            {post.category}
                          </span>
                          <span className="text-gray-500 text-xs">{post.readTime}</span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 text-sm line-clamp-3">
                          {post.excerpt}
                        </p>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>

              {filteredPosts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
                  <button 
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategory("ALL");
                    }}
                    className="mt-4 bg-[#4e37a8] text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Quick Quote Widget */}
            <TextQuoteWidget />

            {/* Related Articles */}
            <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Related Articles</h3>
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <InternalLinks />
      </div>
    </div>
  );
}

export default function BlogClient() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50" />}> 
      <BlogContent />
    </Suspense>
  );
}



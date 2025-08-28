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

/*
📝 ENHANCED BLOG POST TEMPLATE - Copy this structure for new posts:

{
  id: "your-post-url-slug",
  title: "Your SEO-Optimized Title Here (50-60 characters)",
  excerpt: "Compelling description with primary keyword naturally integrated. Should be 150-160 characters and include your main keyword.",
  category: "CATEGORY_NAME", // Choose from: DEMOLITION, CONCRETE, ROOFING, CALCULATOR, DUMPSTER SPECS, DUMPSTER RENTAL, RENOVATION, COMMERCIAL, GUIDES
  readTime: "X min read",
  image: "/images/your-image.jpg",
  fallbackImage: "/images/your-image.webp",
  featured: false, // Set to true for featured posts (shows in featured section)
  
  // NEW ENHANCED FIELDS:
  heroImage: "/images/hero-image.jpg", // Large hero image for post header
  heroImageAlt: "Descriptive alt text for hero image",
  bannerColor: "purple", // Choose from: purple, blue, green, orange, red
  highlightBoxes: [
    {
      title: "Key Takeaway 1",
      content: "Important point or tip",
      icon: "💡" // Emoji or icon
    },
    {
      title: "Key Takeaway 2", 
      content: "Another important point",
      icon: "⚡"
    }
  ],
  stats: [
    {
      label: "Average Cost",
      value: "$300-500",
      description: "Typical dumpster rental cost"
    },
    {
      label: "Delivery Time",
      value: "Same Day",
      description: "Available in most areas"
    }
  ],
  ctaButton: {
    text: "Get Free Quote",
    link: "/#quote-form",
    color: "green" // green, blue, purple, orange
  },
  
  // BLOG POST CONTENT IMAGES (4-5 images per post):
  contentImages: [
    {
      src: "/images/dumpster500x500-1.jpeg",
      alt: "Rolloff dumpster being delivered to construction site",
      caption: "Professional rolloff dumpster delivery service",
      position: "after-intro" // after-intro, after-section-1, after-section-2, etc.
    },
    {
      src: "/images/dumpster500x500-2.jpeg", 
      alt: "Different dumpster sizes comparison",
      caption: "Choose the right size for your project needs",
      position: "after-sizes"
    },
    {
      src: "/images/dumpsterSmallBanner.jpeg",
      alt: "Dumpster placement and site preparation",
      caption: "Proper site preparation ensures smooth delivery",
      position: "after-placement"
    },
    {
      src: "/images/dumpsterSmallBanner2.jpeg",
      alt: "Construction debris being loaded into dumpster",
      caption: "Efficient loading maximizes space utilization",
      position: "after-loading"
    },
    {
      src: "/images/dumpsterSmallBanner4.jpeg",
      alt: "Dumpster pickup and removal service",
      caption: "Timely pickup keeps your project on schedule",
      position: "after-pickup"
    }
  ]
}

🎯 SEO REQUIREMENTS:
- Title: 50-60 characters, include primary keyword
- Excerpt: 150-160 characters, compelling and keyword-rich
- Category: Use existing categories for consistency
- Images: Provide both .jpg and .webp versions
- Featured: Only set to true for high-value posts

📋 QUICK ADD INSTRUCTIONS:
1. Copy the template above
2. Replace all placeholder text with your content
3. Add to the blogPosts array below (keep featured posts at top)
4. Save and test

🎨 VISUAL ENHANCEMENTS:
- Hero images for better visual appeal
- Highlight boxes for key takeaways
- Statistics boxes for important data
- Color-coded banners and CTAs
- Professional styling throughout
*/

const blogPosts = [
  // FEATURED POSTS (keep at top)
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
    id: "estimate-right-dumpster-size-home-cleanout",
    title: "How to Estimate the Right Dumpster Size for a Home Cleanout Project (2025 Guide)",
    excerpt: "Struggling to pick the right dumpster size for your cleanout? This 2025 guide explains how to estimate dumpster sizes for home cleanout projects, covering costs, capacity, and tips to avoid overspending.",
    category: "GUIDES",
    readTime: "12 min read",
    image: "/images/blog/dumpster-size-estimation.jpg",
    fallbackImage: "/images/blog/dumpster-size-estimation.jpg",
    featured: true
  },

  // REGULAR POSTS (add new posts here)
  {
    id: "rolloff-dumpster-guide-2025",
    title: "Rolloff Dumpster Guide 2025: Sizes, Costs, Permits & Pro Tips",
    excerpt: "Complete guide to rolloff dumpster rental including sizes, pricing, permits, weight limits, and pro tips. Learn how to choose the right dumpster and avoid costly mistakes.",
    category: "GUIDES",
    readTime: "15 min read",
    image: "/images/dumpster500x500-1.jpeg",
    fallbackImage: "/images/dumpster500x500-1.webp",
    featured: true,
    heroImage: "/images/dumpster500x500-1.jpeg",
    heroImageAlt: "Rolloff Dumpster Guide 2025 - Complete Guide to Dumpster Rental",
    bannerColor: "purple",
    highlightBoxes: [
      {
        title: "Size Selection",
        content: "Choose the right dumpster size to avoid costly overage fees",
        icon: "📏"
      },
      {
        title: "Cost Savings",
        content: "Learn how to get the best rates and avoid hidden fees",
        icon: "💰"
      },
      {
        title: "Permit Requirements",
        content: "Understand local regulations and permit requirements",
        icon: "📋"
      }
    ],
    stats: [
      {
        label: "Average Cost",
        value: "$200-700",
        description: "Depending on size and location"
      },
      {
        label: "Delivery Time",
        value: "Same Day",
        description: "Available in most areas"
      },
      {
        label: "Rental Period",
        value: "7-14 Days",
        description: "Standard rental period"
      }
    ],
    ctaButton: {
      text: "Get Free Quote",
      link: "/#quote-form",
      color: "green"
    },
    contentImages: [
      {
        src: "/images/dumpster500x500-1.jpeg",
        alt: "Professional rolloff dumpster delivery service",
        caption: "Professional rolloff dumpster delivery service",
        position: "after-intro"
      },
      {
        src: "/images/dumpster500x500-2.jpeg",
        alt: "Different dumpster sizes comparison",
        caption: "Choose the right size for your project needs",
        position: "after-sizes"
      },
      {
        src: "/images/dumpsterSmallBanner.jpeg",
        alt: "Dumpster placement and site preparation",
        caption: "Proper site preparation ensures smooth delivery",
        position: "after-placement"
      },
      {
        src: "/images/dumpsterSmallBanner2.jpeg",
        alt: "Construction debris being loaded into dumpster",
        caption: "Efficient loading maximizes space utilization",
        position: "after-loading"
      },
      {
        src: "/images/dumpsterSmallBanner4.jpeg",
        alt: "Dumpster pickup and removal service",
        caption: "Timely pickup keeps your project on schedule",
        position: "after-pickup"
      }
    ]
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
    fallbackImage: "/images/dumpsterSmallBanner2.webp",
    heroImage: "/images/dumpsterSmallBanner2.jpeg",
    heroImageAlt: "Home Renovation Waste Disposal Guide - Utah Dumpster Rental",
    bannerColor: "orange",
    highlightBoxes: [
      {
        title: "Waste Planning",
        content: "Plan your waste disposal before starting renovation",
        icon: "📋"
      },
      {
        title: "Size Selection",
        content: "Choose the right dumpster size for your project",
        icon: "📏"
      }
    ],
    stats: [
      {
        label: "Typical Cost",
        value: "$300-600",
        description: "For renovation projects"
      },
      {
        label: "Delivery",
        value: "Same Day",
        description: "Available in Utah"
      }
    ],
    ctaButton: {
      text: "Get Renovation Quote",
      link: "/#quote-form",
      color: "orange"
    },
    contentImages: [
      {
        src: "/images/dumpsterSmallBanner2.jpeg",
        alt: "Home renovation waste disposal",
        caption: "Proper waste management for renovation projects",
        position: "after-intro"
      },
      {
        src: "/images/dumpster500x500-1.jpeg",
        alt: "Renovation debris in dumpster",
        caption: "Organized disposal of construction materials",
        position: "after-planning"
      },
      {
        src: "/images/dumpsterSmallBanner.jpeg",
        alt: "Renovation site with dumpster",
        caption: "Convenient on-site waste management",
        position: "after-process"
      },
      {
        src: "/images/dumpster500x500-2.jpeg",
        alt: "Renovation cleanup completion",
        caption: "Clean project completion with proper disposal",
        position: "after-completion"
      }
    ]
  },
  {
    id: "commercial-dumpster-rental-business-solutions",
    title: "Commercial Dumpster Rental: Business Solutions",
    excerpt: "Professional dumpster rental solutions for businesses, construction companies, and commercial projects. Reliable waste management services across Utah.",
    category: "COMMERCIAL",
    readTime: "7 min read",
    image: "/images/dumpsterSmallBanner.jpeg",
    fallbackImage: "/images/dumpsterSmallBanner.webp"
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
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Featured Articles</h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {filteredPosts.filter(post => post.featured).map((post) => (
                    <article key={post.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <Link href={`/${post.id}`} className="block">
                        {/* Hero Image */}
                        <div className="relative h-64 overflow-hidden">
                          <ImageWithFallback 
                            src={post.heroImage || post.image} 
                            alt={post.heroImageAlt || post.title}
                            className="object-cover w-full h-full"
                            fallbackSrc={post.fallbackImage}
                            fill={true}
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                          {/* Category Badge */}
                          <div className="absolute top-4 left-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg ${
                              post.bannerColor === 'purple' ? 'bg-purple-600' :
                              post.bannerColor === 'blue' ? 'bg-blue-600' :
                              post.bannerColor === 'green' ? 'bg-green-600' :
                              post.bannerColor === 'orange' ? 'bg-orange-600' :
                              post.bannerColor === 'red' ? 'bg-red-600' :
                              'bg-purple-600'
                            }`}>
                              {post.category}
                            </span>
                          </div>
                          {/* Read Time Badge */}
                          <div className="absolute top-4 right-4">
                            <span className="bg-black bg-opacity-50 text-white px-2 py-1 rounded-full text-xs font-medium">
                              {post.readTime}
                            </span>
                          </div>
                        </div>
                        
                        <div className="p-8">
                          {/* Title */}
                          <h3 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2 hover:text-purple-600 transition-colors">
                            {post.title}
                          </h3>
                          
                          {/* Excerpt */}
                          <p className="text-gray-600 text-sm line-clamp-3 mb-6 leading-relaxed">
                            {post.excerpt}
                          </p>
                          
                          {/* Highlight Boxes */}
                          {post.highlightBoxes && post.highlightBoxes.length > 0 && (
                            <div className="grid grid-cols-1 gap-3 mb-6">
                              {post.highlightBoxes.slice(0, 2).map((highlight, index) => (
                                <div key={index} className="bg-gray-50 rounded-lg p-3 border-l-4 border-purple-500">
                                  <div className="flex items-start gap-3">
                                    <span className="text-lg">{highlight.icon}</span>
                                    <div>
                                      <h4 className="font-semibold text-gray-900 text-sm">{highlight.title}</h4>
                                      <p className="text-gray-600 text-xs">{highlight.content}</p>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                          
                          {/* Stats */}
                          {post.stats && post.stats.length > 0 && (
                            <div className="grid grid-cols-2 gap-4 mb-6">
                              {post.stats.slice(0, 2).map((stat, index) => (
                                <div key={index} className="text-center">
                                  <div className="text-lg font-bold text-purple-600">{stat.value}</div>
                                  <div className="text-xs text-gray-500">{stat.label}</div>
                                </div>
                              ))}
                            </div>
                          )}
                          
                          {/* CTA Button */}
                          {post.ctaButton && (
                            <div className="flex justify-center">
                              <span className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-semibold text-white transition-colors ${
                                post.ctaButton.color === 'green' ? 'bg-green-500 hover:bg-green-600' :
                                post.ctaButton.color === 'blue' ? 'bg-blue-500 hover:bg-blue-600' :
                                post.ctaButton.color === 'purple' ? 'bg-purple-500 hover:bg-purple-600' :
                                post.ctaButton.color === 'orange' ? 'bg-orange-500 hover:bg-orange-600' :
                                'bg-green-500 hover:bg-green-600'
                              }`}>
                                {post.ctaButton.text}
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </span>
                            </div>
                          )}
                        </div>
                      </Link>
                    </article>
                  ))}
                </div>
              </div>
            )}

            {/* All Posts */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-6 h-6 bg-gradient-to-r from-gray-500 to-gray-600 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {selectedCategory === "ALL" ? "All Articles" : `${selectedCategory} Articles`}
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredPosts.map((post) => (
                  <article key={post.id} className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <Link href={`/${post.id}`} className="block">
                      <div className="relative h-56 overflow-hidden">
                        <ImageWithFallback 
                          src={post.image} 
                          alt={post.title}
                          className="object-cover w-full h-full"
                          fallbackSrc={post.fallbackImage}
                          fill={true}
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        {/* Category Badge */}
                        <div className="absolute top-3 left-3">
                          <span className={`px-2 py-1 rounded-full text-xs font-semibold text-white shadow-md ${
                            post.bannerColor === 'purple' ? 'bg-purple-600' :
                            post.bannerColor === 'blue' ? 'bg-blue-600' :
                            post.bannerColor === 'green' ? 'bg-green-600' :
                            post.bannerColor === 'orange' ? 'bg-orange-600' :
                            post.bannerColor === 'red' ? 'bg-red-600' :
                            'bg-purple-600'
                          }`}>
                            {post.category}
                          </span>
                        </div>
                        {/* Read Time Badge */}
                        <div className="absolute top-3 right-3">
                          <span className="bg-black bg-opacity-50 text-white px-2 py-1 rounded-full text-xs font-medium">
                            {post.readTime}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 hover:text-purple-600 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 text-sm line-clamp-3 mb-4 leading-relaxed">
                          {post.excerpt}
                        </p>
                        
                        {/* Quick Stats (if available) */}
                        {post.stats && post.stats.length > 0 && (
                          <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                            {post.stats.slice(0, 2).map((stat, index) => (
                              <div key={index} className="text-center">
                                <div className="text-sm font-bold text-purple-600">{stat.value}</div>
                                <div className="text-xs text-gray-500">{stat.label}</div>
                              </div>
                            ))}
                          </div>
                        )}
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




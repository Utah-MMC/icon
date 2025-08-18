import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://icondumpsters.com'
  
  // Define specific dates for better SEO
  const currentDate = new Date()
  const lastWeek = new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000)
  const lastMonth = new Date(currentDate.getTime() - 30 * 24 * 60 * 60 * 1000)
  const lastQuarter = new Date(currentDate.getTime() - 90 * 24 * 60 * 60 * 1000)
  
  return [
    // Homepage - Highest priority
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    // Main service pages - High priority
    {
      url: `${baseUrl}/dumpster-sizes`,
      lastModified: lastWeek,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: lastWeek,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: lastWeek,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // Quote form page - High priority for lead generation
    {
      url: `${baseUrl}/freequote`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // Local service pages - High priority for local SEO
    {
      url: `${baseUrl}/murray`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/midvale`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/sandy`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/west-jordan`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/south-jordan`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
         {
       url: `${baseUrl}/draper`,
       lastModified: currentDate,
       changeFrequency: 'weekly',
       priority: 0.9,
     },
     // Salt Lake City area pages - High priority for local SEO
     {
       url: `${baseUrl}/rose-park`,
       lastModified: currentDate,
       changeFrequency: 'weekly',
       priority: 0.9,
     },
     {
       url: `${baseUrl}/sugar-house`,
       lastModified: currentDate,
       changeFrequency: 'weekly',
       priority: 0.9,
     },
     {
       url: `${baseUrl}/glendale`,
       lastModified: currentDate,
       changeFrequency: 'weekly',
       priority: 0.9,
     },
     {
       url: `${baseUrl}/poplar-grove`,
       lastModified: currentDate,
       changeFrequency: 'weekly',
       priority: 0.9,
     },
     {
       url: `${baseUrl}/downtown-salt-lake`,
       lastModified: currentDate,
       changeFrequency: 'weekly',
       priority: 0.9,
     },
    {
      url: `${baseUrl}/utah-dumpster-rental`,
      lastModified: lastWeek,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/salt-lake-city-dumpster-rental`,
      lastModified: lastWeek,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/provo-dumpster-rental`,
      lastModified: lastWeek,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ogden-dumpster-rental`,
      lastModified: lastWeek,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // Blog main page - High priority for content
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.8,
    },
    // Blog Posts - High priority for content marketing
    {
      url: `${baseUrl}/complete-dumpster-rental-guide-2025`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/dumpster-rental-guide-2025`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/dumpster-rentals-near-me-2025`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/construction-waste-management-2025`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/home-renovation-waste-disposal-guide`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/commercial-dumpster-rental-business-solutions`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Calculator and Weight Blog Posts
    {
      url: `${baseUrl}/demolition-dumpster-calculator`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/dumpster-calculator-for-concrete`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/roofing-dumpster-calculator`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/dumpster-volume-calculator`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/how-much-does-a-20-yard-dumpster-weight-empty`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/how-much-does-a-30-yard-dumpster-weight-empty`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/how-much-does-a-15-yard-dumpster-weight-empty`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/concrete-debris-calculator`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/30-yard-dumpster-rental-calculator`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Local SEO Blog Posts
    {
      url: `${baseUrl}/murray-city-dumpster-rental`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/cheapest-dumpster-rental-salt-lake-city`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/murray-city-dumpster-program`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/salt-lake-county-dumpster-rental`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/dumpster-rental-west-valley`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/dumpster-rental-magna`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Contact and About pages - Medium priority
    {
      url: `${baseUrl}/contact`,
      lastModified: lastMonth,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: lastMonth,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // Legal pages - Lower priority but important for compliance
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: lastQuarter,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: lastQuarter,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    // Customer rating and review system - Medium priority
    {
      url: `${baseUrl}/rating`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.5,
    },
    // Admin dashboard - Lower priority (internal use)
    {
      url: `${baseUrl}/admin`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.2,
    },
    // Inventory management - Lower priority (internal use)
    {
      url: `${baseUrl}/inventory`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.2,
    },
    // Salt Lake County
    {
      url: `${baseUrl}/west-valley-city`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/taylorsville`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/kearns`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/magna`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/millcreek`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/holladay`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/cottonwood-heights`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/south-salt-lake`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/riverton`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/herriman`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/bluffdale`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // Davis County
    {
      url: `${baseUrl}/bountiful`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/north-salt-lake`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/centerville`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/farmington`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/layton`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/woods-cross`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/clearfield`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // Utah County
    {
      url: `${baseUrl}/lehi`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/american-fork`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pleasant-grove`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/eagle-mountain`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/saratoga-springs`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/orem`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/provo`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // Summit & Tooele
    {
      url: `${baseUrl}/park-city`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tooele`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // Additional Davis County cities
    {
      url: `${baseUrl}/syracuse`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/kaysville`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/roy`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ogden`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // Additional Salt Lake City area
    {
      url: `${baseUrl}/fairpark`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // Salt Lake City main page
    {
      url: `${baseUrl}/salt-lake-city`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // City Guide Pages - High priority for content marketing
    {
      url: `${baseUrl}/bluffdale-dumpster-rental-guide-2025`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/clearfield-dumpster-rental-guide-2025`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/downtown-salt-lake-dumpster-rental-guide-2025`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/fairpark-dumpster-rental-guide-2025`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/glendale-dumpster-rental-guide-2025`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/kaysville-dumpster-rental-guide-2025`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/midvale-dumpster-rental-guide-2025`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/murray-dumpster-rental-guide-2025`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ogden-dumpster-rental-guide-2025`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/park-city-dumpster-rental-guide-2025`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/poplar-grove-dumpster-rental-guide-2025`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/roy-dumpster-rental-guide-2025`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/salt-lake-city-dumpster-rental-guide-2025`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/sandy-dumpster-rental-guide-2025`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/saratoga-springs-dumpster-rental-guide-2025`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/south-jordan-dumpster-rental-guide-2025`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/sugar-house-dumpster-rental-guide-2025`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/syracuse-dumpster-rental-guide-2025`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tooel-dumpster-rental-guide-2025`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/west-jordan-dumpster-rental-guide-2025`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/woods-cross-dumpster-rental-guide-2025`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/american-fork-dumpster-rental-guide-2025`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/bountiful-dumpster-rental-guide-2025`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/centerville-dumpster-rental-guide-2025`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/cottonwood-heights-dumpster-rental-guide-2025`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/draper-dumpster-rental-guide-2025`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/eagle-mountain-dumpster-rental-guide-2025`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/farmington-dumpster-rental-guide-2025`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/herriman-dumpster-rental-guide-2025`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/holladay-dumpster-rental-guide-2025`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/kearns-dumpster-rental-guide-2025`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/layton-dumpster-rental-guide-2025`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/lehi-dumpster-rental-guide-2025`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/magna-dumpster-rental-guide-2025`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/millcreek-dumpster-rental-guide-2025`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/north-salt-lake-dumpster-rental-guide-2025`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/orem-dumpster-rental-guide-2025`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pleasant-grove-dumpster-rental-guide-2025`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/provo-dumpster-rental-guide-2025`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/riverton-dumpster-rental-guide-2025`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/south-salt-lake-dumpster-rental-guide-2025`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/taylorsville-dumpster-rental-guide-2025`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/west-valley-city-dumpster-rental-guide-2025`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}

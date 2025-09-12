const fs = require('fs');
const path = require('path');

// Sample data structure based on your SEO tool output
const targetDomains = [
  { domain: 'rankva.com', dr: 0, traffic: 0, intersect: 8, category: 'seo-tools' },
  { domain: 'junkspots.com', dr: 45, traffic: 1200, intersect: 8, category: 'waste-management' },
  { domain: 'rank-your.site', dr: 20, traffic: 500, intersect: 6, category: 'seo-services' },
  { domain: 'exlinko.net', dr: 0, traffic: 0, intersect: 5, category: 'link-building' },
  { domain: 'seoflx.net', dr: 15, traffic: 300, intersect: 7, category: 'seo-services' },
  { domain: 'wasterecyclingworkersweek.org', dr: 25, traffic: 800, intersect: 9, category: 'waste-industry' },
  { domain: 'websitescrawl.com', dr: 30, traffic: 1500, intersect: 6, category: 'web-services' },
  { domain: 'mmwatches.co.uk', dr: 10, traffic: 200, intersect: 2, category: 'unrelated' },
  { domain: 'bbb.org', dr: 93, traffic: 6500000, intersect: 5, category: 'business-directory' },
  { domain: 'slc.gov', dr: 60, traffic: 60285, intersect: 5, category: 'government' },
  { domain: 'thebestbacklinksavailable.click', dr: 5, traffic: 50, intersect: 4, category: 'link-building' },
  { domain: 'lockercpa.pl', dr: 8, traffic: 100, intersect: 1, category: 'unrelated' },
  { domain: 'findarentaldumpster.com', dr: 0, traffic: 0, intersect: 10, category: 'competitor' },
  { domain: 'dnb.com', dr: 85, traffic: 2000000, intersect: 6, category: 'business-directory' },
  { domain: 'freelistingusa.com', dr: 40, traffic: 5000, intersect: 7, category: 'business-directory' },
  { domain: 'yktsk.top', dr: 2, traffic: 10, intersect: 3, category: 'low-quality' },
  { domain: 'thebuildermarket.com', dr: 35, traffic: 2500, intersect: 8, category: 'construction' }
];

// Categorization rules
const categorizationRules = {
  'waste-management': {
    keywords: ['waste', 'recycling', 'dumpster', 'junk', 'disposal', 'garbage'],
    priority: 'high',
    approach: 'industry-partnership'
  },
  'construction': {
    keywords: ['construction', 'builder', 'contractor', 'renovation', 'demolition'],
    priority: 'high',
    approach: 'service-partnership'
  },
  'business-directory': {
    keywords: ['directory', 'listing', 'business', 'yellow', 'pages'],
    priority: 'medium',
    approach: 'listing-submission'
  },
  'government': {
    keywords: ['gov', 'government', 'municipal', 'city', 'county'],
    priority: 'high',
    approach: 'official-resource'
  },
  'seo-services': {
    keywords: ['seo', 'marketing', 'digital', 'agency'],
    priority: 'medium',
    approach: 'guest-content'
  },
  'waste-industry': {
    keywords: ['waste', 'recycling', 'environmental', 'sustainability'],
    priority: 'high',
    approach: 'industry-content'
  },
  'competitor': {
    keywords: ['dumpster', 'rental', 'waste'],
    priority: 'monitor',
    approach: 'competitive-analysis'
  },
  'unrelated': {
    keywords: [],
    priority: 'low',
    approach: 'skip'
  },
  'low-quality': {
    keywords: [],
    priority: 'skip',
    approach: 'avoid'
  }
};

// Link building strategies
const linkBuildingStrategies = {
  'industry-partnership': {
    tactics: [
      'Guest posting on waste management blogs',
      'Resource page link requests',
      'Industry directory submissions',
      'Partnership announcements',
      'Case study collaborations'
    ],
    templates: [
      'waste-industry-guest-post.md',
      'resource-page-request.md',
      'partnership-proposal.md'
    ]
  },
  'service-partnership': {
    tactics: [
      'Contractor referral programs',
      'Construction industry directories',
      'Trade association memberships',
      'Local business partnerships',
      'Service provider listings'
    ],
    templates: [
      'contractor-partnership.md',
      'trade-association-join.md',
      'local-business-network.md'
    ]
  },
  'listing-submission': {
    tactics: [
      'Business directory submissions',
      'Local SEO citations',
      'Industry-specific directories',
      'Chamber of Commerce listings',
      'Better Business Bureau registration'
    ],
    templates: [
      'directory-submission.md',
      'local-citation-request.md',
      'bbb-listing.md'
    ]
  },
  'official-resource': {
    tactics: [
      'Government resource pages',
      'Municipal waste management pages',
      'City contractor directories',
      'Permit and licensing pages',
      'Public works partnerships'
    ],
    templates: [
      'government-resource-request.md',
      'municipal-partnership.md',
      'public-works-collaboration.md'
    ]
  },
  'guest-content': {
    tactics: [
      'SEO blog guest posts',
      'Marketing resource contributions',
      'Industry expertise articles',
      'Tool and resource recommendations',
      'Expert roundup participation'
    ],
    templates: [
      'seo-guest-post-pitch.md',
      'expert-roundup-contribution.md',
      'resource-recommendation.md'
    ]
  },
  'industry-content': {
    tactics: [
      'Waste industry publications',
      'Environmental blog contributions',
      'Sustainability resource pages',
      'Industry report citations',
      'Trade publication articles'
    ],
    templates: [
      'waste-industry-article.md',
      'environmental-blog-post.md',
      'sustainability-resource.md'
    ]
  }
};

// Function to categorize domains
function categorizeDomains(domains) {
  return domains.map(domain => {
    const domainLower = domain.domain.toLowerCase();
    let category = 'unrelated';
    let confidence = 0;
    
    // Check against categorization rules
    Object.entries(categorizationRules).forEach(([cat, rules]) => {
      if (rules.keywords.some(keyword => domainLower.includes(keyword))) {
        category = cat;
        confidence = rules.keywords.filter(keyword => domainLower.includes(keyword)).length;
      }
    });
    
    return {
      ...domain,
      category,
      confidence,
      priority: categorizationRules[category]?.priority || 'low',
      approach: categorizationRules[category]?.approach || 'skip'
    };
  });
}

// Function to generate link building plan
function generateLinkBuildingPlan(categorizedDomains) {
  const plan = {
    highPriority: categorizedDomains.filter(d => d.priority === 'high'),
    mediumPriority: categorizedDomains.filter(d => d.priority === 'medium'),
    monitor: categorizedDomains.filter(d => d.priority === 'monitor'),
    skip: categorizedDomains.filter(d => d.priority === 'skip' || d.priority === 'low')
  };
  
  return plan;
}

// Function to create outreach templates
function createOutreachTemplates() {
  const templates = {
    'waste-industry-guest-post': `Subject: Expert Guest Post: Dumpster Rental Best Practices for [City] Businesses

Hi [Name],

I'm [Your Name] from Icon Dumpsters, and I've been following [Website] for its excellent coverage of waste management topics.

I'd love to contribute a guest post about "Dumpster Rental Best Practices for [City] Businesses" that would be valuable for your readers. The article would cover:

- How to choose the right dumpster size for different projects
- Local permit requirements and regulations
- Cost optimization strategies
- Environmental best practices

I can provide original content with local insights specific to [City] and Salt Lake County. Would this be of interest to your audience?

Best regards,
[Your Name]
Icon Dumpsters
[Phone] | [Email]`,

    'resource-page-request': `Subject: Resource Addition: Local Dumpster Rental Services for [City]

Hi [Name],

I noticed your excellent resource page on [Topic] and thought your readers might benefit from information about local dumpster rental services.

Icon Dumpsters serves [City] and the greater Salt Lake County area with:
- Same-day delivery and pickup
- 15-30 yard roll-off dumpsters
- Competitive pricing with no hidden fees
- Licensed and insured service

Would you consider adding us to your local service providers list? I can provide:
- Detailed service information
- Local contact details
- Customer testimonials
- Service area coverage map

Thank you for your consideration.

Best regards,
[Your Name]
Icon Dumpsters`,

    'contractor-partnership': `Subject: Partnership Opportunity: Dumpster Services for [City] Contractors

Hi [Name],

I'm reaching out from Icon Dumpsters about a potential partnership opportunity for contractors in [City].

We offer:
- Preferred contractor rates
- Flexible scheduling
- Multiple dumpster sizes (15-30 yards)
- Same-day service when possible

Many contractors find our services valuable for:
- Construction debris removal
- Renovation waste disposal
- Demolition projects
- Site cleanup

Would you be interested in discussing a partnership or referral program? I'd be happy to provide more details about our contractor benefits.

Best regards,
[Your Name]
Icon Dumpsters`
  };
  
  return templates;
}

// Main analysis function
function analyzeLinkBuildingTargets() {
  console.log('🔍 ANALYZING LINK BUILDING TARGETS');
  console.log('='.repeat(60));
  
  const categorizedDomains = categorizeDomains(targetDomains);
  const plan = generateLinkBuildingPlan(categorizedDomains);
  
  console.log('\n📊 CATEGORIZATION RESULTS:');
  console.log(`High Priority: ${plan.highPriority.length} domains`);
  console.log(`Medium Priority: ${plan.mediumPriority.length} domains`);
  console.log(`Monitor: ${plan.monitor.length} domains`);
  console.log(`Skip: ${plan.skip.length} domains`);
  
  console.log('\n🎯 HIGH PRIORITY TARGETS:');
  plan.highPriority.forEach(domain => {
    console.log(`  • ${domain.domain} (DR: ${domain.dr}, Traffic: ${domain.traffic.toLocaleString()}, Approach: ${domain.approach})`);
  });
  
  console.log('\n📋 RECOMMENDED ACTIONS:');
  Object.entries(linkBuildingStrategies).forEach(([approach, strategy]) => {
    const count = categorizedDomains.filter(d => d.approach === approach).length;
    if (count > 0) {
      console.log(`\n${approach.toUpperCase()} (${count} domains):`);
      strategy.tactics.forEach(tactic => console.log(`  • ${tactic}`));
    }
  });
  
  return { categorizedDomains, plan };
}

// Export functions
module.exports = {
  categorizeDomains,
  generateLinkBuildingPlan,
  createOutreachTemplates,
  analyzeLinkBuildingTargets
};

// Run analysis if called directly
if (require.main === module) {
  analyzeLinkBuildingTargets();
}

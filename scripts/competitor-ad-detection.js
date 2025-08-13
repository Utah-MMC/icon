// Competitor Ad Detection Script
// This script helps identify if competitors are running ads

const competitors = [
  {
    name: "Liberty Dumpster",
    website: "https://libertydumpster.com/",
    searchTerms: [
      "dumpster rental",
      "roll off dumpster",
      "dumpster rental near me",
      "construction dumpster",
      "waste management"
    ],
    locations: [
      "Salt Lake City",
      "Utah",
      "Salt Lake County",
      "Provo",
      "Orem",
      "West Valley City"
    ]
  },
  {
    name: "Waste Management",
    website: "https://www.wm.com/",
    searchTerms: [
      "dumpster rental",
      "waste management",
      "roll off dumpster"
    ],
    locations: ["Utah", "Salt Lake City"]
  },
  {
    name: "Republic Services",
    website: "https://www.republicservices.com/",
    searchTerms: [
      "dumpster rental",
      "waste services",
      "roll off dumpster"
    ],
    locations: ["Utah", "Salt Lake City"]
  }
];

// Ad Detection Checklist
const adDetectionChecklist = {
  googleAds: {
    method: "Search for competitors + 'dumpster rental'",
    indicators: [
      "Ad label next to search results",
      "Competitor appears in top 3-4 positions",
      "Sponsored links in search results"
    ],
    tools: [
      "Google Ads Transparency Center",
      "Manual Google searches",
      "SEMrush (paid tool)",
      "SpyFu (paid tool)"
    ]
  },
  
  facebookAds: {
    method: "Check Facebook Ad Library",
    indicators: [
      "Active ads in Ad Library",
      "Sponsored posts on their page",
      "Boosted content"
    ],
    tools: [
      "Facebook Ad Library",
      "Manual page inspection",
      "AdSpy (paid tool)"
    ]
  },
  
  displayAds: {
    method: "Visit competitor websites",
    indicators: [
      "Retargeting pixels",
      "Google Tag Manager",
      "Facebook Pixel",
      "Ad networks"
    ],
    tools: [
      "BuiltWith.com",
      "Wappalyzer browser extension",
      "Manual inspection"
    ]
  },
  
  localAds: {
    method: "Local search and directories",
    indicators: [
      "Google My Business ads",
      "Local directory listings",
      "Yellow Pages ads",
      "Local radio/TV mentions"
    ],
    tools: [
      "Google Maps",
      "Yelp",
      "Local business directories",
      "Local media monitoring"
    ]
  }
};

// Search Queries to Test
const searchQueries = [
  // General terms
  "dumpster rental",
  "roll off dumpster",
  "construction dumpster",
  "waste management",
  
  // Local terms
  "dumpster rental Salt Lake City",
  "dumpster rental Utah",
  "roll off dumpster Salt Lake County",
  "construction dumpster Utah",
  
  // Specific competitor terms
  "Liberty Dumpster",
  "Liberty Dumpster rental",
  "Waste Management dumpster",
  "Republic Services dumpster"
];

// Monitoring Schedule
const monitoringSchedule = {
  daily: [
    "Check Google search results for main keywords",
    "Monitor competitor social media for sponsored posts"
  ],
  weekly: [
    "Review Google Ads Transparency Center",
    "Check Facebook Ad Library",
    "Analyze competitor website changes"
  ],
  monthly: [
    "Comprehensive competitive analysis",
    "Review pricing changes",
    "Analyze new service offerings"
  ]
};

// Tools and Resources
const tools = {
  free: [
    "Google Ads Transparency Center",
    "Facebook Ad Library",
    "BuiltWith.com",
    "Wappalyzer browser extension",
    "Manual Google searches"
  ],
  paid: [
    "SEMrush - $119/month",
    "SpyFu - $39/month", 
    "AdSpy - $149/month",
    "Ahrefs - $99/month",
    "Moz Pro - $99/month"
  ]
};

console.log("Competitor Ad Detection Guide");
console.log("=============================");
console.log("\nCompetitors to Monitor:");
competitors.forEach(comp => {
  console.log(`- ${comp.name}: ${comp.website}`);
});

console.log("\nSearch Queries to Test:");
searchQueries.forEach(query => {
  console.log(`- "${query}"`);
});

console.log("\nFree Tools to Use:");
tools.free.forEach(tool => {
  console.log(`- ${tool}`);
});

console.log("\nPaid Tools (if budget allows):");
tools.paid.forEach(tool => {
  console.log(`- ${tool}`);
});

module.exports = {
  competitors,
  adDetectionChecklist,
  searchQueries,
  monitoringSchedule,
  tools
};

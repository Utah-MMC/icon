'use client';

import CityPageTemplate from './CityPageTemplate';

interface CityPageClientProps {
  cityName: string;
  cityDisplayName: string;
  nearbyCities: Array<{
    name: string;
    href: string;
  }>;
  historicalInfo?: string;
  landmarks?: string;
  localProjects?: string;
  neighborhoods?: string;
  localBusinesses?: string;
  showCalculator?: boolean;
}

export default function CityPageClient({ 
  cityName, 
  cityDisplayName, 
  nearbyCities,
  historicalInfo,
  landmarks,
  localProjects,
  neighborhoods,
  localBusinesses,
  showCalculator = false
}: CityPageClientProps) {
  const neighborhoodsArray = neighborhoods
    ? neighborhoods.split(',').map((n) => n.trim()).filter(Boolean)
    : [
        `${cityDisplayName} Central`,
        `${cityDisplayName} East`,
        `${cityDisplayName} West`,
        `${cityDisplayName} North`,
        `${cityDisplayName} South`,
      ];

  const nearbyLinks = nearbyCities.map((c) => ({ label: c.name, href: c.href }));

  // Default content sections for the city
  const contentSections = {
    overview: `Icon Dumpsters provides reliable dumpster rental services throughout ${cityDisplayName}, Utah. Whether you're tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.`,
    residentialServices: [
      "Home renovations and remodeling",
      "Basement cleanouts",
      "Garage organization",
      "Yard waste removal",
      "Estate cleanouts"
    ],
    commercialServices: [
      "Construction and demolition",
      "Office renovations",
      "Retail store cleanouts",
      "Industrial waste removal",
      "Event cleanup"
    ],
    whyChooseUs: `${cityDisplayName} residents and businesses trust Icon Dumpsters for reliable, affordable dumpster rental services. We've been serving the Salt Lake Valley for years, providing exceptional customer service and competitive pricing.`,
    dumpsterSizes: [
      {
        size: "15 Yard Dumpster",
        description: "Perfect for small to medium projects",
        useCases: ["Kitchen remodel", "Bathroom renovation", "Garage cleanout", "Small construction"]
      },
      {
        size: "20 Yard Dumpster",
        description: "Great for medium to large projects",
        useCases: ["Full home renovation", "Large construction", "Commercial projects", "Major cleanouts"]
      },
      {
        size: "30 Yard Dumpster",
        description: "For major projects and construction",
        useCases: ["Large construction", "Commercial demolition", "Major renovations", "Industrial projects"]
      }
    ],
    localInfo: historicalInfo || `${cityDisplayName} is a vibrant community in Utah with diverse residential and commercial areas. Our dumpster rental services support the city's growth and development projects.`,
    serviceAreas: `We serve all of ${cityDisplayName} and surrounding communities, including ${neighborhoodsArray.join(', ')}, ensuring convenient access to dumpster rental services throughout the area.`
  };

  // Default landmarks
  const landmarksArray = landmarks
    ? landmarks.split(',').map((l) => l.trim()).filter(Boolean).map(name => ({
        name,
        address: `${cityDisplayName}, UT`,
        description: `Landmark in ${cityDisplayName}`
      }))
    : [
        {
          name: `${cityDisplayName} City Hall`,
          address: `${cityDisplayName}, UT`,
          description: `Government building in ${cityDisplayName}`
        }
      ];

  // Default business districts
  const businessDistrictsArray = [
    {
      name: `${cityDisplayName} Central`,
      description: "Major retail and commercial area",
      link: "/"
    },
    {
      name: `${cityDisplayName} Business District`,
      description: "Mixed residential and commercial",
      link: "/"
    }
  ];

  return (
    <CityPageTemplate
      cityName={cityDisplayName}
      citySlug={cityName}
      state="UT"
      phoneNumber="(801) 918-6000"
      latitude="40.6916"
      longitude="-112.0011"
      landmarks={landmarksArray}
      businessDistricts={businessDistrictsArray}
      permitInfo={{
        cityName: cityDisplayName,
        phoneNumber: "(801) 535-6000",
        requirements: "Permits may be required for street placement. Contact the city for permit requirements."
      }}
      contentSections={contentSections}
    />
  );
}

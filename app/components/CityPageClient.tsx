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

  return (
    <CityPageTemplate
      city={`${cityDisplayName}, UT`}
      neighborhoods={neighborhoodsArray}
      nearbyLinks={nearbyLinks}
      heroImages={[
        { src: '/images/IMG_0350.jpg', fallback: '/images/dumpsterWithTruck.jpeg' },
        { src: '/images/dumpsterWithTruck.jpeg', fallback: '/images/dumpsters.webp' },
      ]}
      showCalculator={showCalculator}
    />
  );
}

import React from 'react';

interface LocalBusinessData {
  name: string;
  description: string;
  url: string;
  telephone: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo?: {
    latitude: number;
    longitude: number;
  };
  openingHours?: string[];
  priceRange?: string;
  image?: string;
  sameAs?: string[];
}

interface ServiceData {
  name: string;
  description: string;
  provider: {
    name: string;
    url: string;
  };
  areaServed: string[];
  serviceType: string;
  priceRange?: string;
}

interface FAQData {
  question: string;
  answer: string;
}

interface BreadcrumbData {
  name: string;
  url: string;
}

interface StructuredDataProps {
  type: 'localBusiness' | 'service' | 'faq' | 'breadcrumb' | 'article' | 'organization';
  data: any;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const generateStructuredData = () => {
    const baseUrl = 'https://icondumpsters.com';
    
    switch (type) {
      case 'localBusiness':
        const businessData: LocalBusinessData = data;
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: businessData.name,
          description: businessData.description,
          url: businessData.url,
          telephone: businessData.telephone,
          address: {
            '@type': 'PostalAddress',
            streetAddress: businessData.address.streetAddress,
            addressLocality: businessData.address.addressLocality,
            addressRegion: businessData.address.addressRegion,
            postalCode: businessData.address.postalCode,
            addressCountry: businessData.address.addressCountry,
          },
          ...(businessData.geo && {
            geo: {
              '@type': 'GeoCoordinates',
              latitude: businessData.geo.latitude,
              longitude: businessData.geo.longitude,
            },
          }),
          ...(businessData.openingHours && {
            openingHours: businessData.openingHours,
          }),
          ...(businessData.priceRange && {
            priceRange: businessData.priceRange,
          }),
          ...(businessData.image && {
            image: businessData.image,
          }),
          ...(businessData.sameAs && {
            sameAs: businessData.sameAs,
          }),
        };

      case 'service':
        const serviceData: ServiceData = data;
        return {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: serviceData.name,
          description: serviceData.description,
          provider: {
            '@type': 'LocalBusiness',
            name: serviceData.provider.name,
            url: serviceData.provider.url,
          },
          areaServed: serviceData.areaServed,
          serviceType: serviceData.serviceType,
          ...(serviceData.priceRange && {
            offers: {
              '@type': 'Offer',
              priceRange: serviceData.priceRange,
            },
          }),
        };

      case 'faq':
        const faqData: FAQData[] = data;
        return {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqData.map(faq => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        };

      case 'breadcrumb':
        const breadcrumbData: BreadcrumbData[] = data;
        return {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: breadcrumbData.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: `${baseUrl}${item.url}`,
          })),
        };

      case 'article':
        const articleData = data;
        return {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: articleData.headline,
          description: articleData.description,
          image: articleData.image,
          author: {
            '@type': 'Organization',
            name: articleData.author,
          },
          publisher: {
            '@type': 'Organization',
            name: 'Icon Dumpsters',
            logo: {
              '@type': 'ImageObject',
              url: `${baseUrl}/images/logo.png`,
            },
          },
          datePublished: articleData.datePublished,
          dateModified: articleData.dateModified,
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `${baseUrl}${articleData.url}`,
          },
        };

      case 'organization':
        return {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Icon Dumpsters',
          description: 'Professional dumpster rental services throughout Utah. Fast delivery, competitive pricing, and reliable waste management solutions.',
          url: baseUrl,
          logo: `${baseUrl}/images/logo.png`,
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+1-801-918-6000',
            contactType: 'customer service',
            areaServed: 'UT',
            availableLanguage: 'English',
          },
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Salt Lake City',
            addressRegion: 'UT',
            addressCountry: 'US',
          },
          sameAs: [
            'https://www.facebook.com/icondumpsters',
            'https://www.instagram.com/icondumpsters',
            'https://www.linkedin.com/company/icondumpsters',
          ],
        };

      default:
        return null;
    }
  };

  const structuredData = generateStructuredData();

  if (!structuredData) {
    return null;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2),
      }}
    />
  );
}

// Predefined structured data for common use cases
export const IconDumpstersBusinessData: LocalBusinessData = {
  name: 'Icon Dumpsters',
  description: 'Professional dumpster rental services throughout Utah. Fast delivery, competitive pricing, and reliable waste management solutions for residential and commercial projects.',
  url: 'https://icondumpsters.com',
  telephone: '+1-801-918-6000',
  address: {
    streetAddress: '123 Main Street',
    addressLocality: 'Salt Lake City',
    addressRegion: 'UT',
    postalCode: '84101',
    addressCountry: 'US',
  },
  geo: {
    latitude: 40.7608,
    longitude: -111.8910,
  },
  openingHours: [
    'Mo-Fr 07:00-18:00',
    'Sa 08:00-16:00',
  ],
  priceRange: '$$',
  image: 'https://icondumpsters.com/images/og-image.png',
  sameAs: [
    'https://www.facebook.com/icondumpsters',
    'https://www.instagram.com/icondumpsters',
    'https://www.linkedin.com/company/icondumpsters',
  ],
};

export const DumpsterRentalServiceData: ServiceData = {
  name: 'Dumpster Rental Services',
  description: 'Professional dumpster rental services for residential and commercial projects throughout Utah.',
  provider: {
    name: 'Icon Dumpsters',
    url: 'https://icondumpsters.com',
  },
  areaServed: [
    'Salt Lake City, UT',
    'West Valley City, UT',
    'Provo, UT',
    'West Jordan, UT',
    'Orem, UT',
    'Sandy, UT',
    'Ogden, UT',
    'St. George, UT',
  ],
  serviceType: 'Dumpster Rental',
  priceRange: '$200-$800',
};
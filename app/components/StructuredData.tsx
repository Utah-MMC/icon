export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://icondumpsters.com/#organization",
    "name": "Icon Dumpsters",
    "alternateName": "Icon Dumpster Rental",
    "description": "Professional dumpster rental services in Utah for construction, renovation, and waste management. Offering 15-30 yard roll-off dumpsters with reliable, affordable service.",
    "url": "https://icondumpsters.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://icondumpsters.com/images/Icon_Dumpsters_Final.png",
      "width": 1200,
      "height": 630
    },
    "image": "https://icondumpsters.com/images/Icon_Dumpsters_Final.png",
    "telephone": "+1-801-918-6000",
    "email": "info@icondumpsters.com",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "UT",
      "addressCountry": "US",
      "addressLocality": "Utah"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 40.7608,
      "longitude": -111.8910
    },
    "areaServed": {
      "@type": "State",
      "name": "Utah"
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 40.7608,
        "longitude": -111.8910
      },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Dumpster Rental Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "15 Yard Dumpster Rental",
            "description": "15 cubic yard roll-off dumpster for small to medium projects"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "20 Yard Dumpster Rental",
            "description": "20 cubic yard roll-off dumpster for medium projects"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "30 Yard Dumpster Rental",
            "description": "30 cubic yard roll-off dumpster for large projects"
          }
        }
      ]
    },
    "priceRange": "$$",
    "paymentAccepted": ["Cash", "Credit Card", "Check"],
    "currenciesAccepted": "USD",
    "openingHours": "Mo-Su 00:00-23:59",
    "sameAs": [
      "https://www.facebook.com/icondumpsters",
      "https://www.linkedin.com/company/icondumpsters"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "John Smith"
        },
        "reviewBody": "Excellent service! Fast delivery and pickup. Highly recommend Icon Dumpsters for any construction project."
      }
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://icondumpsters.com/#website",
    "url": "https://icondumpsters.com",
    "name": "Icon Dumpsters",
    "description": "Professional dumpster rental services in Utah. Get reliable, affordable roll-off dumpsters for construction, renovation, and waste management projects.",
    "publisher": {
      "@id": "https://icondumpsters.com/#organization"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://icondumpsters.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://icondumpsters.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://icondumpsters.com/blog"
      }
    ]
  };



  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  );
}

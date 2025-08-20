export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.icondumpsters.com/#organization",
    "name": "Icon Dumpsters",
    "alternateName": "Icon Dumpster Rental",
    "description": "Professional dumpster rental services in Utah for construction, renovation, and waste management. Offering 15-30 yard roll-off dumpsters with reliable, affordable service. Serving Salt Lake City, Sandy, Murray, West Jordan, and 40+ Utah cities.",
    "url": "https://www.icondumpsters.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.icondumpsters.com/images/Icon_Dumpsters_Final.png",
      "width": 1200,
      "height": 630
    },
    "image": "https://www.icondumpsters.com/images/Icon_Dumpsters_Final.png",
    "telephone": "+1-801-918-6000",
    "email": "icondumpsters@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "UT",
      "addressCountry": "US",
      "addressLocality": "Salt Lake City"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 40.7608,
      "longitude": -111.8910
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Salt Lake City"
      },
      {
        "@type": "City", 
        "name": "Sandy"
      },
      {
        "@type": "City",
        "name": "Murray"
      },
      {
        "@type": "City",
        "name": "West Jordan"
      },
      {
        "@type": "City",
        "name": "South Jordan"
      },
      {
        "@type": "City",
        "name": "Draper"
      },
      {
        "@type": "City",
        "name": "Riverton"
      },
      {
        "@type": "City",
        "name": "Herriman"
      },
      {
        "@type": "City",
        "name": "Taylorsville"
      },
      {
        "@type": "City",
        "name": "West Valley City"
      },
      {
        "@type": "State",
        "name": "Utah"
      }
    ],
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
            "description": "15 cubic yard roll-off dumpster for small to medium projects. Perfect for home renovations, garage cleanouts, and small construction projects.",
            "serviceType": "Dumpster Rental",
            "areaServed": {
              "@type": "State",
              "name": "Utah"
            }
          },
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "USD",
            "price": "299",
            "description": "Starting price for 15-yard dumpster rental"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "20 Yard Dumpster Rental",
            "description": "20 cubic yard roll-off dumpster for medium projects. Ideal for large renovations, construction debris, and commercial projects.",
            "serviceType": "Dumpster Rental",
            "areaServed": {
              "@type": "State",
              "name": "Utah"
            }
          },
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "USD",
            "price": "399",
            "description": "Starting price for 20-yard dumpster rental"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "30 Yard Dumpster Rental",
            "description": "30 cubic yard roll-off dumpster for large projects. Perfect for major construction, demolition projects, and large-scale cleanouts.",
            "serviceType": "Dumpster Rental",
            "areaServed": {
              "@type": "State",
              "name": "Utah"
            }
          },
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "USD",
            "price": "499",
            "description": "Starting price for 30-yard dumpster rental"
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
          "name": "Josh Lounsbury"
        },
        "reviewBody": "They have great dumpsters! Very professional service and fair pricing. Will definitely use again.",
        "datePublished": "2024-06-19"
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Bruce Millgate"
        },
        "reviewBody": "Awesome customer service and staff is amazing! Great prices and a service I'd use again!",
        "datePublished": "2024-06-18"
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Angi Howland"
        },
        "reviewBody": "Customer service was amazing I highly recommend this company! Professional and reliable.",
        "datePublished": "2024-06-18"
      }
    ],
    "foundingDate": "2020",
    "numberOfEmployees": "10-50",
    "knowsAbout": [
      "Dumpster Rental",
      "Waste Management",
      "Construction Debris Disposal",
      "Roll-off Dumpsters",
      "Utah Dumpster Services"
    ],
    "slogan": "Professional Dumpster Rental Services in Utah",
    "brand": {
      "@type": "Brand",
      "name": "Icon Dumpsters"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.icondumpsters.com/#website",
    "url": "https://www.icondumpsters.com",
    "name": "Icon Dumpsters",
    "description": "Professional dumpster rental services in Utah. Get reliable, affordable roll-off dumpsters for construction, renovation, and waste management projects. Serving Salt Lake City, Sandy, Murray, and 40+ Utah cities.",
    "publisher": {
      "@id": "https://www.icondumpsters.com/#organization"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.icondumpsters.com/search?q={search_term_string}"
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
        "item": "https://www.icondumpsters.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://www.icondumpsters.com/services"
      }
    ]
  };

  // Local Business FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What dumpster size do I need for my project?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "15-yard dumpsters are perfect for small renovations and garage cleanouts. 20-yard dumpsters work well for larger renovations and construction projects. 30-yard dumpsters are ideal for major construction and demolition projects. Call us at (801) 918-6000 for personalized recommendations."
        }
      },
      {
        "@type": "Question",
        "name": "How much does dumpster rental cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our dumpster rental prices start at $299 for 15-yard dumpsters, $399 for 20-yard dumpsters, and $499 for 30-yard dumpsters. Prices include delivery, pickup, and disposal fees. Contact us for a free quote specific to your project."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer same-day delivery?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer same-day delivery for most areas in Utah. We serve Salt Lake City, Sandy, Murray, West Jordan, and 40+ other cities. Call us early in the day to ensure same-day delivery availability."
        }
      },
      {
        "@type": "Question",
        "name": "What areas do you serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We serve the entire Salt Lake Valley including Salt Lake City, Sandy, Murray, West Jordan, South Jordan, Draper, Riverton, Herriman, Taylorsville, West Valley City, and many more Utah cities within a 50-mile radius."
        }
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </>
  );
}

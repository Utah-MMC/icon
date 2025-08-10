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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What dumpster sizes do you offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer three main dumpster sizes: 15-yard, 20-yard, and 30-yard roll-off dumpsters. The 15-yard is perfect for small projects like garage cleanouts, the 20-yard is ideal for medium renovations, and the 30-yard is best for large construction projects or major cleanouts."
        }
      },
      {
        "@type": "Question",
        "name": "How much does dumpster rental cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dumpster rental costs vary based on size, rental duration, and location. Our 15-yard dumpsters start around $300-400, 20-yard dumpsters around $400-500, and 30-yard dumpsters around $500-600. This typically includes delivery, pickup, and disposal fees."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly can you deliver a dumpster?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We typically offer same-day or next-day delivery for most areas in Utah. During peak season (spring and summer), we recommend booking 2-3 days in advance to ensure availability."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need a permit for a dumpster?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In most cases, no permit is needed if the dumpster is placed on private property (like your driveway). However, if you need to place the dumpster on a public street or sidewalk, you'll need a permit from your local city."
        }
      },
      {
        "@type": "Question",
        "name": "What areas do you serve in Utah?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We serve the entire Salt Lake Valley and surrounding areas including Salt Lake City, West Valley City, Sandy, West Jordan, Murray, Taylorsville, South Jordan, Riverton, Herriman, Draper, and many other Utah communities."
        }
      },
      {
        "@type": "Question",
        "name": "What types of waste can I put in the dumpster?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We accept most types of construction and household waste including wood, drywall, concrete, metal, furniture, appliances (without Freon), carpet, tile, roofing materials, and general household junk. We also accept yard waste and tree branches."
        }
      },
      {
        "@type": "Question",
        "name": "How do I book a dumpster?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Booking is easy! You can call us at (801) 918-6000, fill out our online quote form, or email us at icondumpsters@gmail.com. We'll ask about your project details, preferred delivery date, and location to provide you with an accurate quote."
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

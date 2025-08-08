export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Icon Dumpsters",
    "description": "Professional dumpster rental services in Utah for construction, renovation, and waste management. 15-30 yard dumpsters available.",
    "url": "https://icondumpsters.com",
    "telephone": "+1-801-918-6000",
    "email": "icondumpsters@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "UT",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "40.7608",
      "longitude": "-111.8910"
    },
    "openingHours": "Mo-Fr 08:00-18:00",
    "priceRange": "$$",
    "paymentAccepted": ["Cash", "Credit Card", "Check"],
    "currenciesAccepted": "USD",
    "areaServed": {
      "@type": "State",
      "name": "Utah"
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "40.7608",
        "longitude": "-111.8910"
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
            "description": "Ideal for medium-sized projects"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "20 Yard Dumpster Rental",
            "description": "Great for large projects and renovations"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "30 Yard Dumpster Rental",
            "description": "For major construction projects"
          }
        },

      ]
    },
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
        "reviewBody": "They have great dumpsters!"
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
        "reviewBody": "Awesome customer service and staff is amazing! Great prices and a service I'd use again!"
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
        "reviewBody": "Customer service was amazing I highly recommend this company !!!!!"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/icondumpsters"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

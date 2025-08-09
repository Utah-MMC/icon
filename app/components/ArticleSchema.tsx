interface ArticleSchemaProps {
  title: string;
  description: string;
  author: string;
  publishedDate: string;
  modifiedDate: string;
  imageUrl: string;
  articleUrl: string;
  category: string;
  readTime: string;
}

export default function ArticleSchema({
  title,
  description,
  author,
  publishedDate,
  modifiedDate,
  imageUrl,
  articleUrl,
  category,
  readTime
}: ArticleSchemaProps) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": articleUrl,
    "headline": title,
    "description": description,
    "image": {
      "@type": "ImageObject",
      "url": imageUrl,
      "width": 1200,
      "height": 630
    },
    "author": {
      "@type": "Organization",
      "name": author,
      "url": "https://icondumpsters.com"
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://icondumpsters.com/#organization",
      "name": "Icon Dumpsters",
      "logo": {
        "@type": "ImageObject",
        "url": "https://icondumpsters.com/images/Icon_Dumpsters_Final.png",
        "width": 1200,
        "height": 630
      }
    },
    "datePublished": publishedDate,
    "dateModified": modifiedDate,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": articleUrl
    },
    "articleSection": category,
    "keywords": [
      "dumpster rental",
      "roll-off dumpster",
      "waste management",
      "construction waste",
      "Utah dumpster rental",
      category.toLowerCase()
    ],
    "wordCount": Math.ceil(description.length / 5), // Rough estimate
    "timeRequired": readTime,
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "isPartOf": {
      "@type": "Blog",
      "@id": "https://icondumpsters.com/blog",
      "name": "Icon Dumpsters Blog",
      "description": "Expert insights, tips, and guides on waste management, dumpster rental, and construction cleanup."
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
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": title,
        "item": articleUrl
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
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

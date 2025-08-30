# City Page Template System Guide

## Overview

This template system provides a centralized way to manage all city pages with SEO-optimized content of 1500+ words. When you make changes to the template, they automatically apply to all city pages except blog posts and the main page.

## How It Works

### 1. Template Component (`CityPageTemplate.tsx`)
- Located at: `app/components/CityPageTemplate.tsx`
- Contains the complete page structure and layout
- Includes all SEO elements, content sections, and styling
- Generates metadata dynamically based on city data

### 2. City Data Configuration (`cityData.ts`)
- Located at: `app/config/cityData.ts`
- Contains all city-specific information
- Easy to add new cities or modify existing ones
- Centralized content management

### 3. Individual City Pages
- Each city page imports the template and city data
- Minimal code required per city
- Consistent structure across all pages

## Adding a New City

### Step 1: Add City Data
Add your new city to the `cityData` object in `app/config/cityData.ts`:

```typescript
'new-city': {
  cityName: 'New City',
  citySlug: 'new-city',
  state: 'UT',
  phoneNumber: '801-918-6000',
  latitude: '40.7608',
  longitude: '-111.8910',
  landmarks: [
    {
      name: 'City Hall',
      address: '123 Main St',
      url: 'https://www.newcity.gov/',
    },
    // Add more landmarks...
  ],
  businessDistricts: [
    {
      name: 'Downtown',
      description: 'Business district',
      link: '/dumpster-rental',
    },
    // Add more districts...
  ],
  permitInfo: {
    cityName: 'New City',
    phoneNumber: '801-555-1234',
    requirements: 'Contact New City for permit requirements and applications.',
  },
  contentSections: {
    overview: 'Icon Dumpsters provides reliable dumpster rental services throughout New City, Utah...',
    residentialServices: [
      'Home renovations and remodeling',
      'Basement cleanouts',
      // Add more services...
    ],
    commercialServices: [
      'Construction and demolition',
      'Office renovations',
      // Add more services...
    ],
    whyChooseUs: 'When you need reliable dumpster rental services in New City...',
    dumpsterSizes: [
      {
        size: '15 Yard',
        description: 'Perfect for small to medium projects',
        useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
      },
      // Add more sizes...
    ],
    localInfo: 'New City is home to several popular attractions...',
    serviceAreas: 'We provide dumpster rental services throughout New City...',
  },
},
```

### Step 2: Create City Page
Create a new file at `app/new-city/page.tsx`:

```typescript
import type { Metadata } from 'next';
import CityPageTemplate from '../components/CityPageTemplate';
import { getCityData } from '../config/cityData';

export const metadata: Metadata = {
  title: "New City Dumpster Rental - Professional Dumpster Services in New City, UT | (801) 918-6000",
  description: "Professional dumpster rental services in New City, Utah. Fast delivery, competitive pricing, and reliable waste management solutions. Call (801) 918-6000 for instant quotes.",
  keywords: "New City dumpster rental, dumpster rental New City UT, New City Utah dumpster, roll-off dumpster New City, construction dumpster New City, waste management New City",
  openGraph: {
    title: "New City Dumpster Rental - Professional Dumpster Services in New City, UT | (801) 918-6000",
    description: "Professional dumpster rental services in New City, Utah. Fast delivery, competitive pricing, and reliable waste management solutions.",
    url: 'https://icondumpsters.com/new-city',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'New City Dumpster Rental - Professional Dumpster Services in New City, UT',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "New City Dumpster Rental - Professional Dumpster Services in New City, UT | (801) 918-6000",
    description: "Professional dumpster rental services in New City, Utah. Fast delivery, competitive pricing, and reliable waste management solutions.",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/new-city',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'geo.region': 'US-UT',
    'geo.placename': 'New City, Utah',
    'geo.position': '40.7608;-111.8910',
    'ICBM': '40.7608, -111.8910',
  },
};

export default function NewCityPage() {
  const cityData = getCityData('new-city');
  
  if (!cityData) {
    return <div>City not found</div>;
  }

  return <CityPageTemplate {...cityData} />;
}
```

## Making Changes That Affect All Pages

### Template Changes
To modify the layout, styling, or structure of all city pages:

1. Edit `app/components/CityPageTemplate.tsx`
2. Changes automatically apply to all cities using the template
3. Test on one city page to verify changes

### Content Changes
To update content that applies to all cities:

1. Edit the `contentSections` in `app/config/cityData.ts`
2. Update the specific sections you want to change
3. Changes apply to all cities with that content

### Adding New Sections
To add a new content section to all pages:

1. Update the `CityData` interface in `cityData.ts`
2. Add the new section to the template component
3. Add the content for each city in the `cityData` object

## SEO Features

### Automatic SEO Elements
- Dynamic title and meta description generation
- Open Graph and Twitter Card support
- Canonical URLs
- Geographic meta tags
- Structured data support

### Content Optimization
- 1500+ words of unique content per page
- City-specific landmarks and attractions
- Local business information
- Internal linking structure
- FAQ sections for long-tail keywords

## Content Structure

Each city page includes:

1. **Hero Section** - City name, description, and CTAs
2. **Service Overview** - Residential and commercial services
3. **Why Choose Us** - Local benefits and features
4. **Dumpster Sizes** - Available sizes with use cases
5. **Local Information** - Landmarks and business districts
6. **Process Guide** - Step-by-step rental process
7. **FAQ Section** - Common questions and answers
8. **CTA Section** - Final call-to-action

## Best Practices

### Adding New Cities
1. Research local landmarks and attractions
2. Find accurate permit information
3. Include relevant business districts
4. Write unique content for each section
5. Use proper SEO keywords

### Content Updates
1. Keep content fresh and relevant
2. Update permit information regularly
3. Add new landmarks as they develop
4. Monitor local business changes
5. Update phone numbers and contact info

### SEO Maintenance
1. Regularly update meta descriptions
2. Monitor keyword performance
3. Add new internal links
4. Update local business information
5. Keep content length optimal (1500+ words)

## Troubleshooting

### Common Issues
1. **City not found error** - Check city slug in `cityData.ts`
2. **Missing content** - Verify all required fields are filled
3. **SEO issues** - Check metadata generation
4. **Styling problems** - Verify template component changes

### Testing
1. Test changes on a single city page first
2. Verify all links work correctly
3. Check mobile responsiveness
4. Validate SEO elements
5. Test form functionality

## File Structure

```
app/
├── components/
│   └── CityPageTemplate.tsx    # Main template component
├── config/
│   └── cityData.ts             # City data configuration
├── draper/
│   └── page.tsx                # Example city page
├── salt-lake-city/
│   └── page.tsx                # Example city page
└── [other-cities]/
    └── page.tsx                # Other city pages
```

## Benefits

1. **Consistency** - All pages follow the same structure
2. **Maintainability** - Changes in one place affect all pages
3. **SEO Optimization** - Built-in SEO best practices
4. **Scalability** - Easy to add new cities
5. **Content Management** - Centralized content control
6. **Performance** - Optimized for speed and user experience

This template system ensures all your city pages are SEO-optimized, content-rich, and easy to maintain while providing a consistent user experience across your entire site.

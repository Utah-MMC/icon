const fs = require('fs');
const path = require('path');

// Pages that need metadata
const pagesToUpdate = [
  {
    path: 'inventory',
    title: 'Dumpster Inventory Management - Track Your Fleet | Icon Dumpsters',
    description: 'Manage your dumpster fleet with our comprehensive inventory tracking system. Monitor rentals, utilization rates, and fleet status in real-time.',
    keywords: 'dumpster inventory management, fleet tracking, dumpster rental management, waste management system, Icon Dumpsters inventory'
  },
  {
    path: 'about',
    title: 'About Icon Dumpsters - Utah Dumpster Rental Services | Icon Dumpsters',
    description: 'Learn about Icon Dumpsters, a family-owned Utah dumpster rental company. From pond service to dumpster rentals, we serve Utah with reliability and integrity.',
    keywords: 'about Icon Dumpsters, Utah dumpster rental company, family-owned dumpster service, Utah dumpster rental history, Icon Dumpsters story'
  },
  {
    path: 'holladay',
    title: 'Holladay Dumpster Rental - Professional Services in Holladay, UT | Icon Dumpsters',
    description: 'Get reliable dumpster rental in Holladay, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.',
    keywords: 'Holladay dumpster rental, dumpster rental Holladay UT, Holladay Utah dumpster, roll-off dumpster Holladay, construction dumpster Holladay, waste management Holladay'
  },
  {
    path: 'rating',
    title: 'Rate Our Service - Icon Dumpsters Customer Feedback | Icon Dumpsters',
    description: 'Share your experience with Icon Dumpsters. Rate our dumpster rental service and help us continue providing excellent service to Utah customers.',
    keywords: 'Icon Dumpsters reviews, dumpster rental reviews, customer feedback, rate dumpster service, Utah dumpster rental reviews'
  }
];

function generateMetadata(pageData) {
  return `import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "${pageData.title}",
  description: "${pageData.description}",
  keywords: "${pageData.keywords}",
  openGraph: {
    title: "${pageData.title}",
    description: "${pageData.description}",
    url: 'https://icondumpsters.com/${pageData.path}',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/Icon_Dumpsters_Final.png',
        width: 1200,
        height: 630,
        alt: '${pageData.title}',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "${pageData.title}",
    description: "${pageData.description}",
    images: ['/images/Icon_Dumpsters_Final.png'],
  },
  alternates: {
    canonical: '/${pageData.path}',
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
};`;
}

function generateServerComponent(pageData) {
  const metadataBlock = generateMetadata(pageData);
  
  return `${metadataBlock}

import ${pageData.path.charAt(0).toUpperCase() + pageData.path.slice(1)}Client from './${pageData.path.charAt(0).toUpperCase() + pageData.path.slice(1)}Client';

export default function ${pageData.path.charAt(0).toUpperCase() + pageData.path.slice(1)}Page() {
  return <${pageData.path.charAt(0).toUpperCase() + pageData.path.slice(1)}Client />;
}`;
}

function createClientComponent(pageData) {
  const clientComponentPath = path.join(__dirname, '..', 'app', pageData.path, `${pageData.path.charAt(0).toUpperCase() + pageData.path.slice(1)}Client.tsx`);
  
  // Read the original page content
  const originalPagePath = path.join(__dirname, '..', 'app', pageData.path, 'page.tsx');
  const originalContent = fs.readFileSync(originalPagePath, 'utf8');
  
  // Remove the 'use client' directive and export default function line
  const lines = originalContent.split('\n');
  let clientContent = '';
  let skipNext = false;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    if (line.trim() === "'use client';" || line.trim() === '"use client";') {
      continue; // Skip the use client directive
    }
    
    if (line.trim().startsWith('export default function')) {
      // Replace with client component function
      const functionName = line.match(/function\s+(\w+)/)?.[1];
      if (functionName) {
        clientContent += `export default function ${functionName.replace('Page', 'Client')}() {\n`;
        skipNext = true;
        continue;
      }
    }
    
    if (skipNext && line.trim() === '{') {
      skipNext = false;
      continue;
    }
    
    clientContent += line + '\n';
  }
  
  // Write the client component
  fs.writeFileSync(clientComponentPath, clientContent);
  console.log(`Created client component for ${pageData.path}`);
}

function updatePage(pageData) {
  const filePath = path.join(__dirname, '..', 'app', pageData.path, 'page.tsx');
  
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return false;
  }
  
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Check if metadata already exists
  if (content.includes('export const metadata')) {
    console.log(`Metadata already exists for ${pageData.path}`);
    return false;
  }
  
  // Create client component first
  createClientComponent(pageData);
  
  // Generate server component with metadata
  const newContent = generateServerComponent(pageData);
  
  // Write the updated content back to the file
  fs.writeFileSync(filePath, newContent);
  console.log(`Converted ${pageData.path} to server component with metadata`);
  return true;
}

// Process all pages
console.log('Starting conversion of remaining pages to server components...');
let updatedCount = 0;

for (const pageData of pagesToUpdate) {
  try {
    if (updatePage(pageData)) {
      updatedCount++;
    }
  } catch (error) {
    console.error(`Error updating ${pageData.path}:`, error.message);
  }
}

console.log(`\nCompleted! Converted ${updatedCount} pages to server components with metadata.`);

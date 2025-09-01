import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Murray Dumpster Rental - Professional Dumpster Services in Murray, UT | (801-918-6000)',
  description: 'Professional dumpster rental services in Murray, UT. Fast delivery, competitive pricing, and reliable waste management solutions. Call 801-918-6000 for instant quotes.',
  keywords: 'Murray dumpster rental, dumpster rental Murray UT, Murray UT dumpster, roll-off dumpster Murray, construction dumpster Murray, waste management Murray',
  openGraph: {
    title: 'Murray Dumpster Rental - Professional Dumpster Services in Murray, UT | (801-918-6000)',
    description: 'Professional dumpster rental services in Murray, UT. Fast delivery, competitive pricing, and reliable waste management solutions.',
    url: 'https://icondumpsters.com/murray',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Murray Dumpster Rental - Professional Dumpster Services in Murray, UT',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Murray Dumpster Rental - Professional Dumpster Services in Murray, UT | (801-918-6000)',
    description: 'Professional dumpster rental services in Murray, UT. Fast delivery, competitive pricing, and reliable waste management solutions.',
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/murray',
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
    'geo.placename': 'Murray, UT',
    'geo.position': '40.7608;-111.8910',
    'ICBM': '40.7608, -111.8910',
  },
};

export default function MurrayDumpsterRental() {
  console.log('Murray page is rendering...');
  
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Murray Page Test</h1>
      
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <h2 className="text-2xl font-bold mb-4">Template Import Test</h2>
        <p className="text-lg mb-4">This page should show the CityPageTemplate content.</p>
        
        <div className="bg-blue-100 p-4 rounded">
          <h3 className="font-bold">Debug Info:</h3>
          <p>City: Murray, UT</p>
          <p>Phone: 801-918-6000</p>
          <p>Status: Testing template import</p>
        </div>
      </div>

      <div className="bg-yellow-100 p-4 rounded">
        <h3 className="font-bold">Next Steps:</h3>
        <p>1. Check browser console for any errors</p>
        <p>2. Verify the template is being imported</p>
        <p>3. Check if there are build errors</p>
      </div>
    </div>
  );
}
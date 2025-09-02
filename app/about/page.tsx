import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Icon Dumpsters - Utah's Trusted Waste Management Partner",
  description: "Learn about Icon Dumpsters, Utah's leading provider of professional dumpster rental services. Committed to excellence, sustainability, and customer satisfaction.",
  keywords: ['about icon dumpsters', 'utah waste management', 'dumpster rental company', 'professional waste services'],
  alternates: { canonical: '/about' },
  openGraph: {
    title: "About Icon Dumpsters - Utah's Trusted Waste Management Partner",
    description: "Learn about Icon Dumpsters, Utah's leading provider of professional dumpster rental services.",
    url: 'https://icondumpsters.com/about',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'About Icon Dumpsters - Utah Waste Management' }],
    type: 'website'
  },
  robots: { index: true, follow: true }
};

import AboutClient from './AboutClient';

export default function AboutPage() {
  return <AboutClient />;
}

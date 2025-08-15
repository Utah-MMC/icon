import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dumpster Rental Blog - Tips, Guides & Industry Insights | Icon Dumpsters",
  description: "Expert dumpster rental blog with tips, guides, and industry insights. Learn about waste management, construction cleanup, and dumpster rental best practices. Stay updated with the latest trends.",
  keywords: "dumpster rental blog, waste management tips, construction cleanup guide, dumpster rental insights, waste disposal blog, Icon Dumpsters blog",
  openGraph: {
    title: "Dumpster Rental Blog - Tips, Guides & Industry Insights | Icon Dumpsters",
    description: "Expert dumpster rental blog with tips, guides, and industry insights. Learn about waste management, construction cleanup, and dumpster rental best practices.",
    url: 'https://icondumpsters.com/blog',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/15-NEW-01.png',
        width: 1200,
        height: 630,
        alt: 'Icon Dumpsters Blog - Expert Insights on Dumpster Rental and Waste Management',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Dumpster Rental Blog - Tips, Guides & Industry Insights | Icon Dumpsters",
    description: "Expert dumpster rental blog with tips, guides, and industry insights. Learn about waste management, construction cleanup, and dumpster rental best practices.",
    images: ['/images/15-NEW-01.png'],
  },
  alternates: {
    canonical: '/blog',
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
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customer Reviews & Testimonials | Icon Dumpsters Utah",
  description: "Read real customer reviews and testimonials for Icon Dumpsters. See why Utah residents and businesses choose us for reliable dumpster rental services. Call (801) 918-6000.",
  keywords: "Icon Dumpsters reviews, dumpster rental reviews, Utah dumpster rental testimonials, customer reviews dumpster rental, Icon Dumpsters customer feedback",
  openGraph: {
    title: "Customer Reviews & Testimonials | Icon Dumpsters Utah",
    description: "Read real customer reviews and testimonials for Icon Dumpsters. See why Utah residents and businesses choose us for reliable dumpster rental services.",
    url: 'https://icondumpsters.com/reviews',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/Icon_Dumpsters_Final.png',
        width: 1200,
        height: 630,
        alt: 'Customer Reviews - Icon Dumpsters Utah',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Customer Reviews & Testimonials | Icon Dumpsters Utah",
    description: "Read real customer reviews and testimonials for Icon Dumpsters. See why Utah residents and businesses choose us for reliable dumpster rental services.",
    images: ['/images/Icon_Dumpsters_Final.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/reviews',
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

export default function ReviewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

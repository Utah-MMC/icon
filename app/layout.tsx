import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StructuredData, { IconDumpstersBusinessData } from "./components/StructuredData";
import GoogleAnalytics from "./components/GoogleAnalytics";
import CookieConsent from "./components/CookieConsent";
import KPITracking from "./components/KPITracking";
import CustomerRatingSystem from "./components/CustomerRatingSystem";
import EmailFollowUpSystem from "./components/EmailFollowUpSystem";
import CompetitiveKPITracking from "./components/CompetitiveKPITracking";
import EnhancedHeader from "./components/EnhancedHeader";
// removed direct track usage from server layout
import AnalyticsDelegator from "./components/AnalyticsDelegator";
import AnalyticsBoot from "./components/AnalyticsBoot";
import ChatWidget from "./components/ChatWidget";
import Footer from "./components/Footer";
import MobileNav from "./components/MobileNav";
import ConditionalCalculatorBanner from "./components/ConditionalCalculatorBanner";
import PromotionalBanner from "./components/PromotionalBanner";
import FacebookPixel from "./components/FacebookPixel";
import FloatingTextButton from "./components/FloatingTextButton";
import PageLoader from "./components/PageLoader";
import BrowserCompatibility from "./components/BrowserCompatibility";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Icon Dumpsters - Professional Dumpster Rental Services in Utah | (801) 918-6000",
  description: "Icon Dumpsters specializes in residential-friendly dumpster rentals, offering a seamless and efficient solution for waste management. Professional dumpster rental services in Utah for construction, renovation, and waste management. 15-30 yard roll-off dumpsters available. Call (801) 918-6000 for instant quotes.",
  keywords: "Icon Dumpsters, dumpster rental, roll-off dumpster, dumpster rental near me, Utah dumpster rental, dumpster rental Utah, construction dumpster, waste management, 15 yard dumpster, 20 yard dumpster, 30 yard dumpster, rolloff dumpster, Salt Lake City dumpster rental",
  authors: [{ name: "Icon Dumpsters" }],
  creator: "Icon Dumpsters",
  publisher: "Icon Dumpsters",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NODE_ENV === 'production' ? 'https://icondumpsters.com' : 'http://localhost:3000'),
  alternates: {
    canonical: 'https://icondumpsters.com',
  },
  openGraph: {
    title: "Icon Dumpsters - Professional Dumpster Rental Services in Utah | (801) 918-6000",
    description: "Icon Dumpsters specializes in residential-friendly dumpster rentals, offering a seamless and efficient solution for waste management. Professional dumpster rental services in Utah for construction, renovation, and waste management. 15-30 yard roll-off dumpsters available. Call (801) 918-6000 for instant quotes.",
    url: 'https://icondumpsters.com',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: 'https://icondumpsters.com/Icon_Dumpsters_Final.png',
        width: 1200,
        height: 630,
        alt: 'Icon Dumpsters - Professional Dumpster Rental Services in Utah',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Icon Dumpsters - Professional Dumpster Rental Services in Utah | (801) 918-6000",
    description: "Icon Dumpsters specializes in residential-friendly dumpster rentals, offering a seamless and efficient solution for waste management. Professional dumpster rental services in Utah for construction, renovation, and waste management. 15-30 yard roll-off dumpsters available. Call (801) 918-6000 for instant quotes.",
    images: ['https://icondumpsters.com/Icon_Dumpsters_Final.png'],
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
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'Business',
  classification: 'Dumpster Rental Services',
  other: {
    'geo.region': 'US-UT',
    'geo.placename': 'Salt Lake City',
    'geo.position': '40.7608;-111.8910',
    'ICBM': '40.7608, -111.8910',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Error handling for script loading
              window.addEventListener('error', function(e) {
                console.error('Script error:', e.error);
                // Don't let script errors break the page
                e.preventDefault();
              });
              
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);} 
              gtag('consent', 'default', {
                'analytics_storage': 'denied',
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'functionality_storage': 'granted',
                'security_storage': 'granted'
              });
            `,
          }}
        />
        <StructuredData type="organization" data={IconDumpstersBusinessData} />
        <script 
          src="https://www.google.com/recaptcha/api.js" 
          async 
          defer
        ></script>
        {/* Ahrefs Analytics */}
        <script 
          src="https://analytics.ahrefs.com/analytics.js" 
          data-key="ctDHetXbMmD8XDhk/vJMcQ" 
          async
        ></script>
        {/* Additional favicon links for better browser compatibility */}
        <link rel="icon" type="image/x-icon" href="https://icondumpsters.com/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="https://icondumpsters.com/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="https://icondumpsters.com/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="https://icondumpsters.com/apple-touch-icon.png" />
        <link rel="manifest" href="https://icondumpsters.com/manifest.json" />
        
        {/* Additional Open Graph tags for better Facebook compatibility */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:alt" content="Icon Dumpsters - Professional Dumpster Rental Services in Utah" />
      </head>
      <GoogleAnalytics />
      <FacebookPixel />
      <CookieConsent />
      <KPITracking />
      <CustomerRatingSystem />
      <EmailFollowUpSystem />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <BrowserCompatibility />
        <PageLoader />
        <CompetitiveKPITracking />
        <AnalyticsBoot />
        <AnalyticsDelegator />
        {/* Header */}
        <EnhancedHeader />

        {/* Mobile Navigation */}
        <MobileNav />

        {/* Main Content */}
        <main className="flex-1">
          {children}
        </main>

        {/* Promotional Banner */}
        <PromotionalBanner />

        {/* Chat Widget */}
        <ChatWidget />

        {/* Floating Text Button */}
        <FloatingTextButton />

        {/* Calculator Banner - Only on calculator-related pages */}
        <ConditionalCalculatorBanner />

        <Footer />
      </body>
    </html>
  );
}

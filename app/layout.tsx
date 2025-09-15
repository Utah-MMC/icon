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
    description: "Icon Dumpsters specializes in residential-friendly dumpster rentals, offering a seamless and efficient solution for waste management. Professional dumpster rental services in Utah for construction, renovation, and waste management. 15-30 yard roll-off dumpsters available.",
    url: 'https://icondumpsters.com',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Icon Dumpsters - Professional Dumpster Rental Services in Utah',
        type: 'image/png',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Icon Dumpsters - Professional Dumpster Rental Services in Utah | (801) 918-6000",
    description: "Icon Dumpsters specializes in residential-friendly dumpster rentals, offering a seamless and efficient solution for waste management. Professional dumpster rental services in Utah for construction, renovation, and waste management. 15-30 yard roll-off dumpsters available.",
    images: [
      {
        url: '/images/og-image.png',
        alt: 'Icon Dumpsters - Professional Dumpster Rental Services in Utah',
      },
    ],
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
    google: 'your-google-verification-code', // Replace with your actual Google Search Console verification code
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: [
      { rel: 'android-chrome-192x192', url: '/android-chrome-192x192.png' },
      { rel: 'android-chrome-512x512', url: '/android-chrome-512x512.png' },
      { rel: 'icon', url: '/favicon.ico', type: 'image/x-icon' },
      { rel: 'icon', url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { rel: 'icon', url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  other: {
    'geo.region': 'US-UT',
    'geo.placename': 'Utah',
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
        {/* Top Bar - Purple Theme */}
        <div className="bg-[#4e37a8] text-white py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <a 
                    href="mailto:icondumpsters@gmail.com" 
                    className="hover:text-purple-200 transition-colors cursor-pointer"
                    title="Email us at icondumpsters@gmail.com"
                  >
                    icondumpsters@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <a 
                    href="tel:(801) 918-6000" 
                    className="hover:text-purple-200 transition-colors cursor-pointer"
                    title="Call us at (801) 918-6000"
                  >
                    (801) 918-6000
                  </a>
                  <span className="ml-2 font-medium hidden sm:inline">24/7 Customer Support</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <a href="https://www.facebook.com/p/Icon-Dumpsters-61557014799828/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-200 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

              </div>
            </div>
          </div>
        </div>

        {/* Header/Navigation Bar - White */}
        <header className="bg-[#4e37a8] shadow-sm border-b border-purple-700 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16 relative">
              <div className="flex items-center">
                <a href="https://icondumpsters.com/" aria-label="Home" className="bg-white p-2 rounded-lg shadow-sm">
                  <img src="https://icondumpsters.com/Icon_Dumpsters_Final.png" alt="Icon Dumpsters - Professional Dumpster Rental Services in Utah" className="h-12 w-auto" />
                </a>
              </div>
              {/* Desktop/Nav */}
                              <nav className="hidden md:flex space-x-5">
                  {/* Services Dropdown */}
                  <div className="relative group">
                    <a href="https://icondumpsters.com/services" className="text-white hover:text-purple-200 transition-colors font-medium flex items-center">
                      SERVICES
                      <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top scale-95 group-hover:scale-100 z-50">
                      <div className="py-2">
                        <a href="https://icondumpsters.com/services" className="block px-4 py-3 text-gray-800 hover:bg-gray-50 transition-colors font-medium border-b border-gray-100">
                          <div className="font-semibold">All Services</div>
                          <div className="text-xs text-gray-500">Complete service overview</div>
                        </a>
                        <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide border-b border-gray-100">
                          Service Types
                        </div>
                        <a href="https://icondumpsters.com/services/residential-dumpster-rentals" className="block px-4 py-3 text-gray-800 hover:bg-gray-50 transition-colors font-medium border-b border-gray-100">
                          <div className="font-semibold">Residential Dumpster Rentals</div>
                          <div className="text-xs text-gray-500">Home projects & renovations</div>
                        </a>
                        <a href="https://icondumpsters.com/services/construction-dumpster-rentals" className="block px-4 py-3 text-gray-800 hover:bg-gray-50 transition-colors font-medium border-b border-gray-100">
                          <div className="font-semibold">Construction Dumpster Rentals</div>
                          <div className="text-xs text-gray-500">Construction & remodeling projects</div>
                        </a>
                        <a href="https://icondumpsters.com/services/garbage-junk-bin-rentals" className="block px-4 py-3 text-gray-800 hover:bg-gray-50 transition-colors font-medium border-b border-gray-100">
                          <div className="font-semibold">Garbage & Junk Bin Rentals</div>
                          <div className="text-xs text-gray-500">Clutter removal & cleanouts</div>
                        </a>
                        <a href="https://icondumpsters.com/services/yard-waste-debris-bin-rental" className="block px-4 py-3 text-gray-800 hover:bg-gray-50 transition-colors font-medium border-b border-gray-100">
                          <div className="font-semibold">Yard Waste & Debris Bin Rental</div>
                          <div className="text-xs text-gray-500">Landscaping & outdoor cleanup</div>
                        </a>
                        <a href="https://icondumpsters.com/services/downsizing-dumpster-rentals" className="block px-4 py-3 text-gray-800 hover:bg-gray-50 transition-colors font-medium border-b border-gray-100">
                          <div className="font-semibold">Downsizing Dumpster Rentals</div>
                          <div className="text-xs text-gray-500">Moving & decluttering projects</div>
                        </a>
                        <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide border-b border-gray-100">
                          Specialized Services
                        </div>
                        <a href="https://icondumpsters.com/estate-cleanout" className="block px-4 py-3 text-gray-800 hover:bg-gray-50 transition-colors font-medium border-b border-gray-100">
                          <div className="font-semibold">Estate Cleanout</div>
                          <div className="text-xs text-gray-500">Complete property cleanup</div>
                        </a>
                        <a href="https://icondumpsters.com/fees" className="block px-4 py-3 text-gray-800 hover:bg-gray-50 transition-colors font-medium">
                          <div className="font-semibold">Fees & Pricing</div>
                          <div className="text-xs text-gray-500">Transparent cost breakdown</div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <a href="https://icondumpsters.com/locations" className="text-white hover:text-purple-200 transition-colors font-medium">AREA</a>
                  <div className="relative group">
                    <a href="https://icondumpsters.com/dumpster-sizes" className="text-white hover:text-purple-200 transition-colors font-medium flex items-center">
                      SIZES
                      <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                    
                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-0 mt-2 w-[500px] bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top scale-95 group-hover:scale-100 z-50">
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Choose Your Dumpster Size</h3>
                        
                        {/* Specialized Dumpsters Section */}
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3 border-b border-gray-100 pb-2">Specialized Dumpsters</h4>
                          <div className="grid grid-cols-3 gap-3">
                            <a href="https://icondumpsters.com/dumpster-sizes#10-yard-dirt" className="group/item">
                              <div className="relative overflow-hidden rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                                <div className="w-full h-20 bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                                  <span className="text-white text-2xl">🏗️</span>
                                </div>
                                <div className="p-2">
                                  <h5 className="font-semibold text-gray-800 text-xs">10 Yard Dirt</h5>
                                  <p className="text-xs text-gray-600">Perfect for dirt & soil</p>
                                </div>
                              </div>
                            </a>
                            
                            <a href="https://icondumpsters.com/dumpster-sizes#10-yard-mixed" className="group/item">
                              <div className="relative overflow-hidden rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                                <div className="w-full h-20 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                                  <span className="text-white text-2xl">📦</span>
                                </div>
                                <div className="p-2">
                                  <h5 className="font-semibold text-gray-800 text-xs">10 Yard Mixed</h5>
                                  <p className="text-xs text-gray-600">Mixed heavy loads</p>
                                </div>
                              </div>
                            </a>
                            
                            <a href="https://icondumpsters.com/dumpster-sizes#12-yard-concrete" className="group/item">
                              <div className="relative overflow-hidden rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                                <div className="w-full h-20 bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
                                  <span className="text-white text-2xl">🧱</span>
                                </div>
                                <div className="p-2">
                                  <h5 className="font-semibold text-gray-800 text-xs">12 Yard Concrete</h5>
                                  <p className="text-xs text-gray-600">Perfect for concrete</p>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                        
                        {/* Standard Dumpsters Section */}
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3 border-b border-gray-100 pb-2">Standard Dumpsters</h4>
                          <div className="grid grid-cols-3 gap-3">
                            {/* 15 Yard Dumpster */}
                            <a href="https://icondumpsters.com/dumpster-sizes#15-yard" className="group/item">
                              <div className="relative overflow-hidden rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                                <img src="/images/IMG_0350.jpg" alt="15 Yard Roll-off Dumpster for Utah Dumpster Rental - Perfect for Small Projects" className="w-full h-20 object-contain bg-white" />
                                <div className="p-2">
                                  <h5 className="font-semibold text-gray-800 text-xs">15 Yard Dumpsters</h5>
                                  <p className="text-xs text-gray-600">Ideal for medium projects</p>
                                </div>
                              </div>
                            </a>
                            
                            {/* 20 Yard Dumpster */}
                            <a href="https://icondumpsters.com/dumpster-sizes#20-yard" className="group/item">
                              <div className="relative overflow-hidden rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                                <img src="/images/IMG_0336.jpg" alt="20 Yard Roll-off Dumpster for Utah Dumpster Rental - Ideal for Medium Projects" className="w-full h-20 object-contain bg-white" />
                                <div className="p-2">
                                  <h5 className="font-semibold text-gray-800 text-xs">20 Yard Dumpsters</h5>
                                  <p className="text-xs text-gray-600">Great for large projects</p>
                                </div>
                              </div>
                            </a>
                            
                            {/* 30 Yard Dumpster */}
                            <a href="https://icondumpsters.com/dumpster-sizes#30-yard" className="group/item">
                              <div className="relative overflow-hidden rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                                <img src="/images/dumpster5-500x500-1.jpeg" alt="30 Yard Roll-off Dumpster for Utah Dumpster Rental - Great for Large Projects" className="w-full h-20 object-contain bg-white" />
                                <div className="p-2">
                                  <h5 className="font-semibold text-gray-800 text-xs">30 Yard Dumpsters</h5>
                                  <p className="text-xs text-gray-600">For major projects</p>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                        
                        {/* Quick Links */}
                        <div className="mb-4 pt-4 border-t border-gray-200">
                          <div className="grid grid-cols-2 gap-3">
                            <a href="https://icondumpsters.com/dumpster-sizes" className="text-center py-2 px-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                              <div className="font-medium text-gray-800 text-sm">View All Sizes</div>
                              <div className="text-xs text-gray-500">Complete guide</div>
                            </a>
                            <a href="https://icondumpsters.com/dumpster-calculator" className="text-center py-2 px-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                              <div className="font-medium text-gray-800 text-sm">Size Calculator</div>
                              <div className="text-xs text-gray-500">Find your fit</div>
                            </a>
                          </div>
                        </div>
                        
                        {/* Call to Action */}
                        <div className="pt-4 border-t border-gray-200">
                          <a href="https://icondumpsters.com/#quote-form" className="block w-full bg-[#4e37a8] text-white text-center py-3 px-4 rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium">
                            Get Exact Pricing Online
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a href="https://icondumpsters.com/dumpster-calculator" className="text-white hover:text-purple-200 transition-colors font-bold flex items-center bg-purple-600 px-3 py-2 rounded-lg hover:bg-purple-500" aria-label="Calculator" title="Calculator">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                    </svg>
                    <span className="font-bold text-sm">CALCULATOR</span>
                  </a>

                  <a href="https://icondumpsters.com/frequent-buyers" className="hidden lg:inline text-white hover:text-purple-200 transition-colors font-medium">BUYERS</a>
                  <div className="relative group hidden lg:block">
                    <a href="https://icondumpsters.com/about" className="text-white hover:text-purple-200 transition-colors font-medium flex items-center">
                      ABOUT
                      <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                    
                    {/* About Dropdown Menu */}
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top scale-95 group-hover:scale-100 z-50">
                      <div className="py-2">
                        <a href="https://icondumpsters.com/about" className="block px-4 py-3 text-gray-800 hover:bg-gray-50 transition-colors font-medium">
                          About Us
                        </a>
                        <a href="https://icondumpsters.com/reviews" className="block px-4 py-3 text-gray-800 hover:bg-gray-50 transition-colors font-medium">
                          Reviews
                        </a>
                        <a href="https://icondumpsters.com/faq" className="block px-4 py-3 text-gray-800 hover:bg-gray-50 transition-colors font-medium">
                          FAQ
                        </a>
                        <a href="https://icondumpsters.com/contact" className="block px-4 py-3 text-gray-800 hover:bg-gray-50 transition-colors font-medium">
                          Contact
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* More menu for small/medium screens */}
                  <div className="relative group lg:hidden">
                    <button className="text-white hover:text-purple-200 transition-colors font-medium flex items-center">
                      MORE
                      <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                    <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top scale-95 group-hover:scale-100 z-50">
                      <div className="py-2">

                        <a href="https://icondumpsters.com/frequent-buyers" className="block px-4 py-3 text-gray-800 hover:bg-gray-50 transition-colors font-medium">Frequent Buyers</a>
                        <a href="https://icondumpsters.com/book" className="block px-4 py-3 text-gray-800 hover:bg-gray-50 transition-colors font-medium">Book Now</a>
                        <div className="border-t my-1"></div>
                        <a href="https://icondumpsters.com/about" className="block px-4 py-3 text-gray-800 hover:bg-gray-50 transition-colors font-medium">About Us</a>
                        <a href="https://icondumpsters.com/reviews" className="block px-4 py-3 text-gray-800 hover:bg-gray-50 transition-colors font-medium">Reviews</a>
                        <a href="https://icondumpsters.com/faq" className="block px-4 py-3 text-gray-800 hover:bg-gray-50 transition-colors font-medium">FAQ</a>
                        <a href="https://icondumpsters.com/contact" className="block px-4 py-3 text-gray-800 hover:bg-gray-50 transition-colors font-medium">Contact</a>
                      </div>
                    </div>
                  </div>
                </nav>
              {/* Mobile hamburger */}
              <MobileNav />
              <div className="hidden md:flex items-center space-x-3">
                {/* BOOK NOW Button - Positioned in the red circle area */}
                <a 
                  href="https://icondumpsters.com/book"
                  className="bg-white text-[#4e37a8] px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-bold text-sm border-2 border-[#4e37a8] shadow-md"
                >
                  BOOK NOW
                </a>
                
                <a href="https://icondumpsters.com/#quote-form" data-analytics-type="cta" data-analytics-name="header_quote" className="bg-white text-[#4e37a8] px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium flex items-center space-x-2">
                  <span>Get Quote</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1">
          {children}
        </main>

        {/* Promotional Banner - Added to all pages */}
        <PromotionalBanner />

        {/* Live Chat Widget */}
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


                        </a>

                        <a href="https://icondumpsters.com/services/garbage-junk-bin-rentals" className="block px-4 py-3 text-gray-800 hover:bg-gray-50 transition-colors font-medium border-b border-gray-100">

                          <div className="font-semibold">Garbage & Junk Bin Rentals</div>

                          <div className="text-xs text-gray-500">Clutter removal & cleanouts</div>

                        </a>

                        <a href="https://icondumpsters.com/services/yard-waste-debris-bin-rental" className="block px-4 py-3 text-gray-800 hover:bg-gray-50 transition-colors font-medium border-b border-gray-100">

                          <div className="font-semibold">Yard Waste & Debris Bin Rental</div>

                          <div className="text-xs text-gray-500">Landscaping & outdoor cleanup</div>

                        </a>

                        <a href="https://icondumpsters.com/services/downsizing-dumpster-rentals" className="block px-4 py-3 text-gray-800 hover:bg-gray-50 transition-colors font-medium border-b border-gray-100">

                          <div className="font-semibold">Downsizing Dumpster Rentals</div>

                          <div className="text-xs text-gray-500">Moving & decluttering projects</div>

                        </a>

                        <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide border-b border-gray-100">

                          Specialized Services

                        </div>

                        <a href="https://icondumpsters.com/estate-cleanout" className="block px-4 py-3 text-gray-800 hover:bg-gray-50 transition-colors font-medium border-b border-gray-100">

                          <div className="font-semibold">Estate Cleanout</div>

                          <div className="text-xs text-gray-500">Complete property cleanup</div>

                        </a>

                        <a href="https://icondumpsters.com/fees" className="block px-4 py-3 text-gray-800 hover:bg-gray-50 transition-colors font-medium">

                          <div className="font-semibold">Fees & Pricing</div>

                          <div className="text-xs text-gray-500">Transparent cost breakdown</div>

                        </a>

                      </div>

                    </div>

                  </div>

                  <a href="https://icondumpsters.com/locations" className="text-white hover:text-purple-200 transition-colors font-medium">AREA</a>

                  <div className="relative group">

                    <a href="https://icondumpsters.com/dumpster-sizes" className="text-white hover:text-purple-200 transition-colors font-medium flex items-center">

                      SIZES

                      <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">

                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />

                      </svg>

                    </a>

                    

                    {/* Dropdown Menu */}

                    <div className="absolute top-full left-0 mt-2 w-[500px] bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top scale-95 group-hover:scale-100 z-50">

                      <div className="p-6">

                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Choose Your Dumpster Size</h3>

                        

                        {/* Specialized Dumpsters Section */}

                        <div className="mb-6">

                          <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3 border-b border-gray-100 pb-2">Specialized Dumpsters</h4>

                          <div className="grid grid-cols-3 gap-3">

                            <a href="https://icondumpsters.com/dumpster-sizes#10-yard-dirt" className="group/item">

                              <div className="relative overflow-hidden rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">

                                <div className="w-full h-20 bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">

                                  <span className="text-white text-2xl">🏗️</span>

                                </div>

                                <div className="p-2">

                                  <h5 className="font-semibold text-gray-800 text-xs">10 Yard Dirt</h5>

                                  <p className="text-xs text-gray-600">Perfect for dirt & soil</p>

                                </div>

                              </div>

                            </a>

                            

                            <a href="https://icondumpsters.com/dumpster-sizes#10-yard-mixed" className="group/item">

                              <div className="relative overflow-hidden rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">

                                <div className="w-full h-20 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">

                                  <span className="text-white text-2xl">📦</span>

                                </div>

                                <div className="p-2">

                                  <h5 className="font-semibold text-gray-800 text-xs">10 Yard Mixed</h5>

                                  <p className="text-xs text-gray-600">Mixed heavy loads</p>

                                </div>

                              </div>

                            </a>

                            

                            <a href="https://icondumpsters.com/dumpster-sizes#12-yard-concrete" className="group/item">

                              <div className="relative overflow-hidden rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">

                                <div className="w-full h-20 bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">

                                  <span className="text-white text-2xl">🧱</span>

                                </div>

                                <div className="p-2">

                                  <h5 className="font-semibold text-gray-800 text-xs">12 Yard Concrete</h5>

                                  <p className="text-xs text-gray-600">Perfect for concrete</p>

                                </div>

                              </div>

                            </a>

                          </div>

                        </div>

                        

                        {/* Standard Dumpsters Section */}

                        <div className="mb-6">

                          <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3 border-b border-gray-100 pb-2">Standard Dumpsters</h4>

                          <div className="grid grid-cols-3 gap-3">

                            {/* 15 Yard Dumpster */}

                            <a href="https://icondumpsters.com/dumpster-sizes#15-yard" className="group/item">

                              <div className="relative overflow-hidden rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">

                                <img src="/images/IMG_0350.jpg" alt="15 Yard Roll-off Dumpster for Utah Dumpster Rental - Perfect for Small Projects" className="w-full h-20 object-contain bg-white" />

                                <div className="p-2">

                                  <h5 className="font-semibold text-gray-800 text-xs">15 Yard Dumpsters</h5>

                                  <p className="text-xs text-gray-600">Ideal for medium projects</p>

                                </div>

                              </div>

                            </a>

                            

                            {/* 20 Yard Dumpster */}

                            <a href="https://icondumpsters.com/dumpster-sizes#20-yard" className="group/item">

                              <div className="relative overflow-hidden rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">

                                <img src="/images/IMG_0336.jpg" alt="20 Yard Roll-off Dumpster for Utah Dumpster Rental - Ideal for Medium Projects" className="w-full h-20 object-contain bg-white" />

                                <div className="p-2">

                                  <h5 className="font-semibold text-gray-800 text-xs">20 Yard Dumpsters</h5>

                                  <p className="text-xs text-gray-600">Great for large projects</p>

                                </div>

                              </div>

                            </a>

                            

                            {/* 30 Yard Dumpster */}

                            <a href="https://icondumpsters.com/dumpster-sizes#30-yard" className="group/item">

                              <div className="relative overflow-hidden rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">

                                <img src="/images/dumpster5-500x500-1.jpeg" alt="30 Yard Roll-off Dumpster for Utah Dumpster Rental - Great for Large Projects" className="w-full h-20 object-contain bg-white" />

                                <div className="p-2">

                                  <h5 className="font-semibold text-gray-800 text-xs">30 Yard Dumpsters</h5>

                                  <p className="text-xs text-gray-600">For major projects</p>

                                </div>

                              </div>

                            </a>

                          </div>

                        </div>

                        

                        {/* Quick Links */}

                        <div className="mb-4 pt-4 border-t border-gray-200">

                          <div className="grid grid-cols-2 gap-3">

                            <a href="https://icondumpsters.com/dumpster-sizes" className="text-center py-2 px-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">

                              <div className="font-medium text-gray-800 text-sm">View All Sizes</div>

                              <div className="text-xs text-gray-500">Complete guide</div>

                            </a>

                            <a href="https://icondumpsters.com/dumpster-calculator" className="text-center py-2 px-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">

                              <div className="font-medium text-gray-800 text-sm">Size Calculator</div>

                              <div className="text-xs text-gray-500">Find your fit</div>

                            </a>

                          </div>

                        </div>

                        

                        {/* Call to Action */}

                        <div className="pt-4 border-t border-gray-200">

                          <a href="https://icondumpsters.com/#quote-form" className="block w-full bg-[#4e37a8] text-white text-center py-3 px-4 rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium">

                            Get Exact Pricing Online

                          </a>

                        </div>

                      </div>

                    </div>

                  </div>

                  <a href="https://icondumpsters.com/dumpster-calculator" className="text-white hover:text-purple-200 transition-colors font-bold flex items-center bg-purple-600 px-3 py-2 rounded-lg hover:bg-purple-500" aria-label="Calculator" title="Calculator">

                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">

                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />

                    </svg>

                    <span className="font-bold text-sm">CALCULATOR</span>

                  </a>



                  <a href="https://icondumpsters.com/frequent-buyers" className="hidden lg:inline text-white hover:text-purple-200 transition-colors font-medium">BUYERS</a>

                  <div className="relative group hidden lg:block">

                    <a href="https://icondumpsters.com/about" className="text-white hover:text-purple-200 transition-colors font-medium flex items-center">

                      ABOUT

                      <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">

                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />

                      </svg>

                    </a>

                    

                    {/* About Dropdown Menu */}

                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top scale-95 group-hover:scale-100 z-50">

                      <div className="py-2">

                        <a href="https://icondumpsters.com/about" className="block px-4 py-3 text-gray-800 hover:bg-gray-50 transition-colors font-medium">

                          About Us

                        </a>

                        <a href="https://icondumpsters.com/reviews" className="block px-4 py-3 text-gray-800 hover:bg-gray-50 transition-colors font-medium">

                          Reviews

                        </a>

                        <a href="https://icondumpsters.com/faq" className="block px-4 py-3 text-gray-800 hover:bg-gray-50 transition-colors font-medium">

                          FAQ

                        </a>

                        <a href="https://icondumpsters.com/contact" className="block px-4 py-3 text-gray-800 hover:bg-gray-50 transition-colors font-medium">

                          Contact

                        </a>

                      </div>

                    </div>

                  </div>

                  {/* More menu for small/medium screens */}

                  <div className="relative group lg:hidden">

                    <button className="text-white hover:text-purple-200 transition-colors font-medium flex items-center">

                      MORE

                      <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">

                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />

                      </svg>

                    </button>

                    <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top scale-95 group-hover:scale-100 z-50">

                      <div className="py-2">



                        <a href="https://icondumpsters.com/frequent-buyers" className="block px-4 py-3 text-gray-800 hover:bg-gray-50 transition-colors font-medium">Frequent Buyers</a>

                        <a href="https://icondumpsters.com/book" className="block px-4 py-3 text-gray-800 hover:bg-gray-50 transition-colors font-medium">Book Now</a>

                        <div className="border-t my-1"></div>

                        <a href="https://icondumpsters.com/about" className="block px-4 py-3 text-gray-800 hover:bg-gray-50 transition-colors font-medium">About Us</a>

                        <a href="https://icondumpsters.com/reviews" className="block px-4 py-3 text-gray-800 hover:bg-gray-50 transition-colors font-medium">Reviews</a>

                        <a href="https://icondumpsters.com/faq" className="block px-4 py-3 text-gray-800 hover:bg-gray-50 transition-colors font-medium">FAQ</a>

                        <a href="https://icondumpsters.com/contact" className="block px-4 py-3 text-gray-800 hover:bg-gray-50 transition-colors font-medium">Contact</a>

                      </div>

                    </div>

                  </div>

                </nav>

              {/* Mobile hamburger */}

              <MobileNav />

              <div className="hidden md:flex items-center space-x-3">

                {/* BOOK NOW Button - Positioned in the red circle area */}

                <a 

                  href="https://icondumpsters.com/book"

                  className="bg-white text-[#4e37a8] px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-bold text-sm border-2 border-[#4e37a8] shadow-md"

                >

                  BOOK NOW

                </a>

                

                <a href="https://icondumpsters.com/#quote-form" data-analytics-type="cta" data-analytics-name="header_quote" className="bg-white text-[#4e37a8] px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium flex items-center space-x-2">

                  <span>Get Quote</span>

                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">

                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />

                  </svg>

                </a>

              </div>

            </div>

          </div>

        </header>



        <main className="flex-1">

          {children}

        </main>



        {/* Promotional Banner - Added to all pages */}

        <PromotionalBanner />



        {/* Live Chat Widget */}

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



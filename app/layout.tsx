import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "./components/StructuredData";
import GoogleAnalytics from "./components/GoogleAnalytics";
import KPITracking from "./components/KPITracking";
import CustomerRatingSystem from "./components/CustomerRatingSystem";
import EmailFollowUpSystem from "./components/EmailFollowUpSystem";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Icon Dumpsters - Professional Dumpster Rental Services | Utah",
  description: "Professional dumpster rental services in Utah for construction, renovation, and waste management. 15-30 yard roll-off dumpsters available. Get reliable, affordable dumpster rentals from Icon Dumpsters. Call (801) 918-6000 for instant quotes.",
  keywords: "dumpster rental, roll-off dumpster, dumpster rental near me, Utah dumpster rental, dumpster rental Utah, construction dumpster, waste management, 15 yard dumpster, 20 yard dumpster, 30 yard dumpster, rolloff dumpster, Icon Dumpsters, Salt Lake City dumpster rental",
  authors: [{ name: "Icon Dumpsters" }],
  creator: "Icon Dumpsters",
  publisher: "Icon Dumpsters",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://icondumpsters.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Icon Dumpsters - Professional Dumpster Rental Services | Utah",
    description: "Professional dumpster rental services in Utah for construction, renovation, and waste management. 15-30 yard roll-off dumpsters available. Get reliable, affordable dumpster rentals.",
    url: 'https://icondumpsters.com',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/Icon_Dumpsters_Final.png',
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
    title: "Icon Dumpsters - Professional Dumpster Rental Services | Utah",
    description: "Professional dumpster rental services in Utah for construction, renovation, and waste management. 15-30 yard roll-off dumpsters available.",
    images: ['/images/Icon_Dumpsters_Final.png'],
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
        <StructuredData />
        <script src="https://www.google.com/recaptcha/api.js" async defer></script>
        {/* Additional favicon links for better browser compatibility */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <GoogleAnalytics />
      <KPITracking />
      <CustomerRatingSystem />
      <EmailFollowUpSystem />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
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
                  <span>icondumpsters@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span>(801) 918-6000</span>
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
            <div className="flex justify-between items-center h-20">
              <div className="flex items-center">
                                  <img src="/images/Icon_Dumpsters_Final.png" alt="Icon Dumpsters - Professional Dumpster Rental Services in Utah" className="h-12 w-auto" />
              </div>
                              <nav className="hidden md:flex space-x-8">
                  <a href="/" className="text-white hover:text-purple-200 transition-colors font-medium">HOME</a>
                  <a href="/services" className="text-white hover:text-purple-200 transition-colors font-medium">SERVICES</a>
                  <div className="relative group">
                    <a href="/dumpster-sizes" className="text-white hover:text-purple-200 transition-colors font-medium flex items-center">
                      DUMPSTER SIZES
                      <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                    
                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top scale-95 group-hover:scale-100 z-50">
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Choose Your Dumpster Size</h3>
                        <div className="grid grid-cols-2 gap-4">
                          {/* 15 Yard Dumpster */}
                          <div className="group/item">
                            <div className="relative overflow-hidden rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                              <img src="/images/dumpsters.jpeg" alt="15 Yard Roll-off Dumpster for Utah Dumpster Rental - Perfect for Small Projects" className="w-full h-24 object-cover" />
                              <div className="p-3">
                                <h4 className="font-semibold text-gray-800 text-sm">15 Yard Dumpsters</h4>
                                <p className="text-xs text-gray-600">Ideal for medium projects</p>
                              </div>
                            </div>
                          </div>
                          
                          {/* 20 Yard Dumpster */}
                          <div className="group/item">
                            <div className="relative overflow-hidden rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                              <img src="/images/dumpster500x500-1.jpeg" alt="20 Yard Roll-off Dumpster for Utah Dumpster Rental - Ideal for Medium Projects" className="w-full h-24 object-cover" />
                              <div className="p-3">
                                <h4 className="font-semibold text-gray-800 text-sm">20 Yard Dumpsters</h4>
                                <p className="text-xs text-gray-600">Great for large projects</p>
                              </div>
                            </div>
                          </div>
                          
                          {/* 30 Yard Dumpster */}
                          <div className="group/item">
                            <div className="relative overflow-hidden rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                              <img src="/images/dumpster5-500x500-1.jpeg" alt="30 Yard Roll-off Dumpster for Utah Dumpster Rental - Great for Large Projects" className="w-full h-24 object-cover" />
                              <div className="p-3">
                                <h4 className="font-semibold text-gray-800 text-sm">30 Yard Dumpsters</h4>
                                <p className="text-xs text-gray-600">For major projects</p>
                              </div>
                            </div>
                          </div>
                          
                          {/* View All Sizes */}
                          <div className="group/item">
                            <div className="relative overflow-hidden rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                              <img src="/images/dumpsterSmallBanner3.jpeg" alt="Complete Dumpster Size Guide for Utah Dumpster Rental Services" className="w-full h-24 object-cover" />
                              <div className="p-3">
                                <h4 className="font-semibold text-gray-800 text-sm">View All Dumpster Sizes</h4>
                                <p className="text-xs text-gray-600">See complete selection</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Call to Action */}
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <a href="#quote-form" className="block w-full bg-[#4e37a8] text-white text-center py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium">
                            Get Exact Pricing Online
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a href="/blog" className="text-white hover:text-purple-200 transition-colors font-medium">BLOG</a>
                  <a href="/faq" className="text-white hover:text-purple-200 transition-colors font-medium">FAQ</a>
                  <a href="/about" className="text-white hover:text-purple-200 transition-colors font-medium">ABOUT</a>
                  <a href="/contact" className="text-white hover:text-purple-200 transition-colors font-medium">CONTACT</a>
                </nav>
              <div className="flex items-center">
                <a href="#quote-form" className="bg-white text-[#4e37a8] px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium flex items-center space-x-2">
                  <span>Get A Quote</span>
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

        {/* Footer - Purple Theme */}
        <footer className="bg-[#4e37a8] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                                  <div className="flex items-center space-x-3 mb-4">
                    <img src="/images/Icon_Dumpsters_Final.png" alt="Icon Dumpsters - Professional Dumpster Rental Services in Utah" className="h-10 w-auto" />
                    <div>
                      <h3 className="text-lg font-semibold">ICON DUMPSTERS</h3>
                      <p className="text-sm text-gray-400">PROFESSIONAL DUMPSTER RENTAL SERVICES</p>
                    </div>
                  </div>
                <p className="text-gray-400 mb-4">
                  Professional dumpster rental services for construction, renovation, and waste management. 
                  Serving local communities with reliable, affordable solutions and exceptional customer service.
                </p>
                <div className="flex space-x-4">
                  <a href="https://www.facebook.com/p/Icon-Dumpsters-61557014799828/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">Services</h4>
                <ul className="space-y-2">
                  <li><a href="/services" className="text-gray-400 hover:text-white transition-colors">Dumpster Rental</a></li>
                  <li><a href="/services" className="text-gray-400 hover:text-white transition-colors">Waste Management</a></li>
                  <li><a href="/services" className="text-gray-400 hover:text-white transition-colors">Construction Cleanup</a></li>
                  <li><a href="/services" className="text-gray-400 hover:text-white transition-colors">Residential Services</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">Support</h4>
                <ul className="space-y-2">
                  <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
                  <li><a href="/faq" className="text-gray-400 hover:text-white transition-colors">FAQs</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Service Areas</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Get Quote</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700">
              <div className="flex flex-col sm:flex-row justify-between items-center text-gray-400 text-sm">
                <p>
                  © 2025 Icon Dumpsters. All rights reserved. | (801) 918-6000
                </p>
                <div className="flex space-x-4 mt-2 sm:mt-0">
                  <a href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                  <a href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

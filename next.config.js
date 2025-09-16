/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize for large numbers of static pages
  experimental: {
    // Enable optimizations for static generation
    optimizePackageImports: ['@next/font', 'lucide-react'],
  },

  // Turbopack configuration (replaces deprecated experimental.turbo)
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },

  // Optimize images with advanced formats and lazy loading
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' blob: data: https://www.googletagmanager.com https://www.google-analytics.com https://www.google.com https://www.gstatic.com https://analytics.ahrefs.com https://googleads.g.doubleclick.net https://www.googleadservices.com; script-src-elem 'self' 'unsafe-inline' blob: data: https://www.googletagmanager.com https://www.google-analytics.com https://www.google.com https://www.gstatic.com https://analytics.ahrefs.com https://googleads.g.doubleclick.net https://www.googleadservices.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'icondumpsters.com',
        port: '',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'www.icondumpsters.com',
        port: '',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'icondumpsters-gpuw1okyv-scrapesalads-projects.vercel.app',
        port: '',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/**',
      }
    ],
  },

  // Webpack optimizations for large builds
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // Production optimizations
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
            priority: 10,
            enforce: true,
          },
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'all',
            enforce: true,
            priority: 5,
          },
          // Separate large libraries
          react: {
            test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
            name: 'react',
            chunks: 'all',
            priority: 20,
          },
        },
      };

      // Enable tree shaking
      config.optimization.usedExports = true;
      config.optimization.sideEffects = false;
    }

    // Optimize bundle size
    config.optimization.minimize = true;
    
    // Add bundle analyzer in production
    if (!dev && process.env.ANALYZE === 'true') {
      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          openAnalyzer: false,
          reportFilename: 'bundle-analysis.html',
        })
      );
    }

    // Optimize SVG handling
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    
    return config;
  },

  // Static generation optimizations
  generateBuildId: async () => {
    return 'build-' + Date.now();
  },

  // Compress static assets
  compress: true,

  // Optimize static generation
  staticPageGenerationTimeout: 120,
  
  // Increase memory limit for large builds
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },



  // Optimize output
  output: 'standalone',

  // Enable modern JavaScript features
  transpilePackages: ['canvas'],

  // Performance monitoring
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },

  // Redirects for broken links and domain migration
  async redirects() {
    return [
      // CRITICAL: Redirect all www traffic to non-www (301 permanent redirect)
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.icondumpsters.com',
          },
        ],
        destination: 'https://icondumpsters.com/:path*',
        permanent: true,
      },
      // Redirect common broken links to correct pages
      {
        source: '/Link',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/complete',
        destination: '/complete-dumpster-rental-guide-2025',
        permanent: true,
      },
      {
        source: '/tooel',
        destination: '/tooele',
        permanent: true,
      },
      {
        source: '/construction-waste-management',
        destination: '/complete-dumpster-rental-guide-2025',
        permanent: true,
      },
      {
        source: '/commercial-dumpster-rental',
        destination: '/services/commercial-dumpster-rentals',
        permanent: true,
      },
      {
        source: '/how-to-choose-dumpster-size',
        destination: '/dumpster-sizes',
        permanent: true,
      },
      // Redirect city guide pages that might be missing
      {
        source: '/rose-park-dumpster-rental-guide-2025',
        destination: '/rose-park',
        permanent: true,
      },
      // Redirect service pages to main services page
      {
        source: '/services/residential-dumpster-rentals',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/services/commercial-dumpster-rentals',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/services/construction-dumpster-rentals',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/utah-dumpster-rental-locations',
        destination: '/locations',
        permanent: true
      },
      {
        source: '/cities/west-bountiful/dumpster-rental',
        destination: '/bountiful',
        permanent: true
      },
      {
        source: '/cities/downtown-salt-lake/dumpster-rental',
        destination: '/downtown-salt-lake',
        permanent: true
      },
      {
        source: '/cities/granger/dumpster-rental',
        destination: '/west-valley-city',
        permanent: true
      },
      {
        source: '/cities/bluffdale/dumpster-rental',
        destination: '/bluffdale',
        permanent: true
      },
      {
        source: '/30-yard-dumpster-rental-White%20City-ut',
        destination: '/30-yard-dumpster-rental-white-city-ut',
        permanent: true
      },
      {
        source: '/30-yard-dumpster-rental-West%20Jordan-ut',
        destination: '/30-yard-dumpster-rental-west-jordan-ut',
        permanent: true
      },
      {
        source: '/30-yard-dumpster-rental-West%20Valley%20City-ut',
        destination: '/30-yard-dumpster-rental-west-valley-city-ut',
        permanent: true
      },
      {
        source: '/30-yard-dumpster-rental-South%20Salt%20Lake-ut',
        destination: '/30-yard-dumpster-rental-south-salt-lake-ut',
        permanent: true
      },
      {
        source: '/30-yard-dumpster-rental-Cottonwood%20Heights-ut',
        destination: '/30-yard-dumpster-rental-cottonwood-heights-ut',
        permanent: true
      },
      {
        source: '/30-yard-dumpster-rental-Emigration%20Canyon-ut',
        destination: '/30-yard-dumpster-rental-emigration-canyon-ut',
        permanent: true
      },
      {
        source: '/30-yard-dumpster-rental-Salt%20Lake%20City-ut',
        destination: '/30-yard-dumpster-rental-salt-lake-city-ut',
        permanent: true
      },
      {
        source: '/roll-off-dumpster-rental-West%20Valley%20City',
        destination: '/roll-off-dumpster-rental-west-valley-city',
        permanent: true
      },
      {
        source: '/roll-off-dumpster-rental-South%20Salt%20Lake',
        destination: '/roll-off-dumpster-rental-south-salt-lake',
        permanent: true
      },
      {
        source: '/roll-off-dumpster-rental-West%20Jordan',
        destination: '/roll-off-dumpster-rental-west-jordan',
        permanent: true
      },
      {
        source: '/roll-off-dumpster-rental-Salt%20Lake%20City',
        destination: '/roll-off-dumpster-rental-salt-lake-city',
        permanent: true
      },
      {
        source: '/roll-off-dumpster-rental-Cottonwood%20Heights',
        destination: '/roll-off-dumpster-rental-cottonwood-heights',
        permanent: true
      },
      {
        source: '/roll-off-dumpster-rental-South%20Jordan',
        destination: '/roll-off-dumpster-rental-south-jordan',
        permanent: true
      },
      {
        source: '/roll-off-dumpster-rental-Emigration%20Canyon',
        destination: '/roll-off-dumpster-rental-emigration-canyon',
        permanent: true
      },
      {
        source: '/roll-off-dumpster-rental-White%20City',
        destination: '/roll-off-dumpster-rental-white-city',
        permanent: true
      },
      {
        source: '/rolloff-dumpster-rental-White%20City-ut',
        destination: '/rolloff-dumpster-rental-white-city-ut',
        permanent: true
      },
      {
        source: '/rolloff-dumpster-rental-South%20Salt%20Lake-ut',
        destination: '/rolloff-dumpster-rental-south-salt-lake-ut',
        permanent: true
      },
      {
        source: '/rolloff-dumpster-rental-Emigration%20Canyon-ut',
        destination: '/rolloff-dumpster-rental-emigration-canyon-ut',
        permanent: true
      },
      {
        source: '/rolloff-dumpster-rental-West%20Jordan-ut',
        destination: '/rolloff-dumpster-rental-west-jordan-ut',
        permanent: true
      },
      {
        source: '/rolloff-dumpster-rental-Salt%20Lake%20City-ut',
        destination: '/rolloff-dumpster-rental-salt-lake-city-ut',
        permanent: true
      },
      {
        source: '/rolloff-dumpster-rental-Cottonwood%20Heights-ut',
        destination: '/rolloff-dumpster-rental-cottonwood-heights-ut',
        permanent: true
      },
      {
        source: '/rolloff-dumpster-rental-West%20Valley%20City-ut',
        destination: '/rolloff-dumpster-rental-west-valley-city-ut',
        permanent: true
      },
      {
        source: '/rolloff-dumpster-rental-South%20Jordan-ut',
        destination: '/rolloff-dumpster-rental-south-jordan-ut',
        permanent: true
      },
      {
        source: '/dumpster-rental-near-me-South%20Salt%20Lake-ut',
        destination: '/dumpster-rental-near-me-south-salt-lake-ut',
        permanent: true
      },
      {
        source: '/dumpster-rental-near-me-West%20Valley%20City-ut',
        destination: '/dumpster-rental-near-me-west-valley-city-ut',
        permanent: true
      },
      {
        source: '/dumpster-rental-near-me-Emigration%20Canyon-ut',
        destination: '/dumpster-rental-near-me-emigration-canyon-ut',
        permanent: true
      },
      {
        source: '/dumpster-rental-near-me-Cottonwood%20Heights-ut',
        destination: '/dumpster-rental-near-me-cottonwood-heights-ut',
        permanent: true
      },
      {
        source: '/dumpster-rental-near-me-West%20Jordan-ut',
        destination: '/dumpster-rental-near-me-west-jordan-ut',
        permanent: true
      },
      {
        source: '/dumpster-rental-near-me-White%20City-ut',
        destination: '/dumpster-rental-near-me-white-city-ut',
        permanent: true
      },
      {
        source: '/dumpster-rental-near-me-Salt%20Lake%20City-ut',
        destination: '/dumpster-rental-near-me-salt-lake-city-ut',
        permanent: true
      },
      {
        source: '/granger',
        destination: '/west-valley-city',
        permanent: true
      },
      {
        source: '/emigration-canyon',
        destination: '/roll-off-dumpster-rental-emigration-canyon',
        permanent: true
      },
      {
        source: '/brighton',
        destination: '/roll-off-dumpster-rental-brighton',
        permanent: true
      },
      {
        source: '/copperton',
        destination: '/roll-off-dumpster-rental-copperton',
        permanent: true
      },
      {
        source: '/white-city',
        destination: '/roll-off-dumpster-rental-white-city',
        permanent: true
      },
      {
        source: '/alta',
        destination: '/roll-off-dumpster-rental-alta',
        permanent: true
      },
      {
        source: '/west-bountiful',
        destination: '/bountiful',
        permanent: true
      },
      {
        source: '/rose-park-dumpster-rental-guide-2025',
        destination: '/rose-park',
        permanent: true
      },
      {
        source: '/springville-dumpster-rental-guide-2025',
        destination: '/springville',
        permanent: true
      },
      {
        source: '/lindon-dumpster-rental-guide-2025',
        destination: '/lindon',
        permanent: true
      },
      {
        source: '/spanish-fork-dumpster-rental-guide-2025',
        destination: '/spanish-fork',
        permanent: true
      },
      {
        source: '/terms-of-service/',
        destination: '/terms-of-service',
        permanent: true
      },
      {
        source: '/privacy-policy/',
        destination: '/privacy-policy',
        permanent: true
      },
      {
        source: '/contact/',
        destination: '/contact',
        permanent: true
      },
      {
        source: '/dumpster-rental-sandy-utah',
        destination: '/sandy',
        permanent: true
      },
      {
        source: '/salt-lake-county-dumpster-program',
        destination: '/salt-lake-county-dumpster-rental',
        permanent: true
      },
      {
        source: '/admin-dashboard',
        destination: '/admin',
        permanent: true
      },
      {
        source: '/commercial-dumpster-rental-business-solutions-dumpster-rental-guide-2025',
        destination: '/commercial-dumpster-rental-business-solutions',
        permanent: true
      }
    ];
  },

  // Headers for performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), payment=()'
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' blob: data: https://www.googletagmanager.com https://www.google-analytics.com https://www.google.com https://www.gstatic.com https://analytics.ahrefs.com https://googleads.g.doubleclick.net https://www.googleadservices.com; script-src-elem 'self' 'unsafe-inline' blob: data: https://www.googletagmanager.com https://www.google-analytics.com https://www.google.com https://www.gstatic.com https://analytics.ahrefs.com https://googleads.g.doubleclick.net https://www.googleadservices.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: blob: https:; font-src 'self' data: https://fonts.gstatic.com; connect-src 'self' https: https://www.google-analytics.com https://www.google.com https://analytics.ahrefs.com https://googleads.g.doubleclick.net https://www.googleadservices.com; frame-src 'self' https://www.googletagmanager.com https://www.google.com https://www.googleadservices.com; object-src 'none'; base-uri 'self';"
          }
        ],
      },
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ],
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ],
      },
      {
        source: '/fonts/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ],
      }
    ];
  },
};

module.exports = nextConfig;

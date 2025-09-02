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

  // Optimize images
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
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
          },
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'all',
            enforce: true,
          },
        },
      };
    }

    // Optimize bundle size
    config.optimization.minimize = true;
    
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
};

module.exports = nextConfig;

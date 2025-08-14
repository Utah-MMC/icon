import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Minimal configuration to avoid build issues
  experimental: {
    missingSuspenseWithCSRError: false,
  },
}

export default nextConfig

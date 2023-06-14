const withMDX = require('@next/mdx')()

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverActions: true,
  },

}

// Merge MDX config with Next.js config
module.exports = withMDX(nextConfig)

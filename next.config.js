const withMDX = require('@next/mdx')()

/** @type {import('next').NextConfig} */
const nextConfig = {

}

// Merge MDX config with Next.js config
module.exports = withMDX(nextConfig)

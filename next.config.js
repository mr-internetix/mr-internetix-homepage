/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
        pathname: '/kv6tcjdna/**',
      },
      {
        protocol : 'https',
        hostname : 'github-readme-stats.vercel.app',
        pathname:'**'
      }
    ],
  },
}

module.exports = nextConfig

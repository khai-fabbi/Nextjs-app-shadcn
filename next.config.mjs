/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['src'],
    // ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  //config domain images
  images: {
    domains: ['images.unsplash.com'],
  },
  swcMinify: true,
}

export default nextConfig

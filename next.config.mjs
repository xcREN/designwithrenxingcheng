/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Disable Next.js dev indicators/devtools overlay in development
  // This prevents the devtools indicator element from being injected.
  devIndicators: false,
}

export default nextConfig

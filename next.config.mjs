/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'dist',
  images: {
        unoptimized: true
  },
  reactStrictMode: true,
  serverExternalPackages: ['@react-pdf/renderer'],
  experimental: {
    // Keep any other experimental flags you might have here
  }
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'dist',
  images: {
        unoptimized: true
  },
  reactStrictMode: true,
  experimental: {
    // …
    serverComponentsExternalPackages: ['@react-pdf/renderer'],
  }
};

export default nextConfig;

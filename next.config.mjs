/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
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

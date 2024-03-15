/** @type {import('next').NextConfig} */
const nextConfig = {
  output:  'export',
  basePath:  '/portfolio',
  reactStrictMode:  true,
  experimental: {
    // …
    serverComponentsExternalPackages: ['@react-pdf/renderer'],
  }
};

export default nextConfig;

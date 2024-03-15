/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/portfolio",
  reactStrictMode: true,
  experimental: {
    // …
    serverComponentsExternalPackages: ['@react-pdf/renderer'],
  }
};

export default nextConfig;

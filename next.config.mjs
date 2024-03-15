/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  experimental: {
    // …
    serverComponentsExternalPackages: ['@react-pdf/renderer'],
  }
};

export default nextConfig;

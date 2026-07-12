/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: "standalone",
  experimental: {
    serverActions: {
      bodySizeLimit: "5mb",
    },
  },
  webpack(config) {
    // ❗ Prevent large .next/cache folder
    config.cache = false;

    // ❗ Avoid unnecessary Node polyfills in browser bundle
    config.resolve.fallback = {
      fs: false,
      net: false,
      tls: false,
    };

    return config;
  },
};

export default nextConfig;

const { withPlaiceholder } = require("@plaiceholder/next");

/** @type {import('next').NextConfig} */
const nextConfig = withPlaiceholder({
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["images.ctfassets.net"],
  },
});

module.exports = nextConfig;

/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ['julien.infura-ipfs.io'],
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;

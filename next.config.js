/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  env: {
    GHOST_URL: process.env.GHOST_URL,
    GHOST_KEY: process.env.GHOST_KEY,
    GHOST_VERSION: process.env.GHOST_VERSION,
  },
};

module.exports = nextConfig;

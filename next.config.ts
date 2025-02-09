/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, 
  swcMinify: true, 
  images: {
    domains: ["cdn.sanity.io"], 
  },
  experimental: {
    appDir: true, 
  },
  env: {
    SANITY_PROJECT_ID: "your-project-id", 
  },
};

module.exports = nextConfig; 

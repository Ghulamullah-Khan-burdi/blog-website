/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, 
  images: {
    domains: ["cdn.sanity.io"], 
  },
  
  env: {
    SANITY_PROJECT_ID: "your-project-id", 
  },
};

module.exports = nextConfig; 

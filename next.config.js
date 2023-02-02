/** @type {import('next').NextConfig} */
const configs = require("./configs.json");

const nextConfig = {
  reactStrictMode: false,
  images: {
    loader: "default",
    domains: [
      "https://admin.mits.group",
      "mits-images.sgp1.digitaloceanspaces.com",
    ],
  },
};

module.exports = nextConfig;

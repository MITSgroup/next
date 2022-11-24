/** @type {import('next').NextConfig} */
const configs = require("./configs.json");

const nextConfig = {
  reactStrictMode: false,
  images: {
    loader: "default",
    domains: [
      "mits-cbd3l.ondigitalocean.app",
      "mits.sgp1.digitaloceanspaces.com",
    ],
  },
};

module.exports = nextConfig;

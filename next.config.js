/** @type {import('next').NextConfig} */
const configs = require("./configs.json");

const nextConfig = {
  reactStrictMode: false,
  images: {
    loader: "default",
    domains: ["localhost"],
  },
};

module.exports = nextConfig;

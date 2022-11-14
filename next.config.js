/** @type {import('next').NextConfig} */
const configs = require("./configs.json");

const nextConfig = {
  reactStrictMode: false,
  images: {
    loader: "default",
    domains: ["localhost", "127.0.0.1"],
  },
};

module.exports = nextConfig;

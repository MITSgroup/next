/** @type {import('next').NextConfig} */
const configs = require("./configs.json");
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  i18n,
  reactStrictMode: true,
  images: {
    loader: "default",
    domains: [
      "https://admin.mits.group",
      "mits-images.sgp1.digitaloceanspaces.com",
      "sgp1.digitaloceanspaces.com"
    ],
  },

  i18n: {
    locales: ["en", "ru"],
    defaultLocale: "en",
  }
};

module.exports = nextConfig;

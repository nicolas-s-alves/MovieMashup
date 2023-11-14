/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');

const nextConfig = {
  ...withPWA({
    dest: 'public',
    register: true,
  }),
  images: {
    domains: ['image.tmdb.org'],
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');

const nextConfig = {
  ...withPWA({
    dest: 'public',
    register: true,
    sw: 'service-worker.js',
  }),
  images: {
    domains: ['image.tmdb.org'],
  },
};

module.exports = nextConfig;

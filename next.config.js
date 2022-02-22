/** @type {import('next').NextConfig} */
module.exports = withPWA({
  experimental: {
    runtime: 'nodejs',
    serverComponents: true,
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    fontLoaders: [
      { loader: '@next/font/google', options: { subsets: ['regular'] } }
    ],
    serverComponentsExternalPackages: ['tailwindcss']
  }
};

module.exports = nextConfig;

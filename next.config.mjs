/** @type {import('next').NextConfig} */
const nextConfig = {
  /* Configure Next.js 14 features */
  images: {
    domains: ['images.unsplash.com'], // Add any image domains you need to use
    formats: ['image/avif', 'image/webp'],
  },
  // Enable new App Router features
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3000'],
    },
  },
  // Don't need this with Tailwind CSS
  // transpilePackages: ['lucide-react'],
  sassOptions: {
    includePaths: ['.'],
  },
};

export default nextConfig; 
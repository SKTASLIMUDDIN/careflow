/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow running at root / or /careflow via environment variable
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  reactStrictMode: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;

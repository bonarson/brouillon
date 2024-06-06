/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,

    images: {
        domains: ['drive.google.com'],
      },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // swcMinify: true,
  images: {
    domains: ["www.inbody.co.kr"],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `https://:path*`,
      },
    ];
  },
};

module.exports = nextConfig;

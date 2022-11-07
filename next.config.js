/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["www.gravatar.com", "localhost", "static.toss.im"],
  },
};

module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://inbody-board.vercel.app/:path*",
      },
    ];
  },
};

module.exports = nextConfig;

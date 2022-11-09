/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["www.inbody.co.kr"],
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: "/v1/:path*",
  //       destination: "https://api.notion.com/:path*",
  //     },
  //   ];
  // },
};

module.exports = nextConfig;

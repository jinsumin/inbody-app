/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // swcMinify: true,
  images: {
    domains: ["www.inbody.co.kr"],
  },
};

// module.exports = {
//   async rewrites() {
//     return [
//       {
//         source: "/api/:path*",
//         destination: "https://inbody-board.vercel.app/:path*",
//       },
//     ];
//   },
// };

module.exports = nextConfig;

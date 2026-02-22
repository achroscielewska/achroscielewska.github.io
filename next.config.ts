import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   output: 'export',
//   images: {
//     unoptimized: true,
//   },
//   basePath: '/my-profile',
//   assetPrefix: '/my-profile/',
//   trailingSlash: true,
// };

const nextConfig: NextConfig = {
  experimental: {
    authInterrupts: true,
  },
};

export default nextConfig;

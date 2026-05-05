import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "https://kingdom-stack-backend.onrender.com/:path*",
        // destination: "http:///localhost:3000/:path*",
      },
    ];
  },
  images: {
    domains: ["images.unsplash.com"],
  },
};

export default nextConfig;

// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */

// };
// // destination: "https://task-manager-api-s94k.onrender.com/:path*",

// export default nextConfig;

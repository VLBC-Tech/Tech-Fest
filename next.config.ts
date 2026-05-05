import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "https://tech-fest-backend-1.onrender.com/:path*",
      },
    ];
  },
  images: {
    domains: ["images.unsplash.com"],
  },
};

export default nextConfig;

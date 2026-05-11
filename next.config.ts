import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", 
  basePath: "/Venice-By-Boat",
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ['127.0.0.1:3000', 'localhost:3000'], 
};

export default nextConfig;
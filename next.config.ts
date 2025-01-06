import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'lh3.googleusercontent.com', // For Google
      'platform-lookaside.fbsbx.com', // For Facebook
      'graph.facebook.com', // Also for Facebook
    ],
  },
};

export default nextConfig;

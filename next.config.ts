import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/#about',
        permanent: false,
      },
      {
        source: '/mission',
        destination: '/#about',
        permanent: false,
      },
      {
        source: '/company',
        destination: '/#about',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;

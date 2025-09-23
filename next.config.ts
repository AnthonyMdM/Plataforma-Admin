import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/perfil",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

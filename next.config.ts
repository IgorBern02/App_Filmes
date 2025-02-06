import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export", // Habilita a exportação estática
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        port: '',
        pathname: '/**', // Allows all paths under this hostname
      },
    ],
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    reactStrictMode : false,
    images : {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'api.risloo.ir',
                port: '',
            },
        ],
    }
};

export default nextConfig;

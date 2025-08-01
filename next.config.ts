import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '4566', // Localstack S3
        pathname: '/likebutter-bucket/**',
      },
    ],
  },
};

if (process.env.NODE_ENV === 'development') {
  nextConfig.rewrites = async () => {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:8080/:path*', // Local backend server
      },
    ];
  };
}

export default nextConfig;


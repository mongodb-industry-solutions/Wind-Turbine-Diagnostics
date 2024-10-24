import dotenv from 'dotenv';
import { join } from 'path';

// Load environment variables from the root .env file
dotenv.config({ path: join(process.cwd(), '../.env') });


/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => {
    return [
      {
        source: '/embed-audio/:path*',
        destination: process.env.NEXT_PUBLIC_ENV === 'local-compose'
          ? 'http://api:8000/embed-audio/:path*'
          : 'http://localhost:8000/embed-audio/:path*',
      },
    ];
  },
};

export default nextConfig;

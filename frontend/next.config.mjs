import dotenv from 'dotenv';
import { join } from 'path';

// Load environment variables from the root .env file
dotenv.config({ path: join(process.cwd(), '../.env') });

<<<<<<< Updated upstream

/** @type {import('next').NextConfig} */
const nextConfig = {
=======
/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    MONGODB_URI: process.env.MONGODB_URI, // Add this line to make the environment variable accessible at build time
  },
>>>>>>> Stashed changes
  rewrites: async () => {
    return [
      {
        source: '/embed-audio/:path*',
<<<<<<< Updated upstream
        destination: process.env.NEXT_PUBLIC_ENV === 'local-compose'
          ? 'http://api:8000/embed-audio/:path*'
=======
        destination: process.env.NEXT_PUBLIC_ENV == 'local' ?
          'http://api:8000/embed-audio/:path*'
>>>>>>> Stashed changes
          : 'http://localhost:8000/embed-audio/:path*',
      },
    ];
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SQUARE_APPLICATION_ID: process.env.SQUARE_APPLICATION_ID,
    SQUARE_ACCESS_TOKEN: process.env.SQUARE_ACCESS_TOKEN,
    SQUARE_LOCATION_ID: process.env.SQUARE_LOCATION_ID,
    SQUARE_ENVIRONMENT: process.env.SQUARE_ENVIRONMENT,
    DATABASE_URL: process.env.DATABASE_URL,
    API_URL: process.env.API_URL,
  },
};

export default nextConfig;

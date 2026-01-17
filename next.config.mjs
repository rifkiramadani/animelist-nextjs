/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "cdn.myanimelist.net", //hostname for placeholder image
      }
    ]
  }
};

export default nextConfig;

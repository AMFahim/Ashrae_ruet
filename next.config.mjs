/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'img.daisyui.com',
          },
          {
            protocol: 'https',
            hostname: 'www.facebook.com',
          },
          {
            protocol: 'https',
            hostname: 'i.ibb.co',
          },
          {
            protocol: 'https',
            hostname: 'flowbite.com',
          },
          {
            protocol: 'https',
            hostname: 'flowbite.s3.amazonaws.com',
          },
        ],
      },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.pexels.com", "th.bing.com"], // Add the allowed external domain
  },
  async redirects() {
    return [
      {
        source: "/((?!).*)",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;

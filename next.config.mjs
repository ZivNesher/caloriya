const nextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: ["192.168.1.84"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "world.openfoodfacts.org",
      },
    ],
  },
};

export default nextConfig;

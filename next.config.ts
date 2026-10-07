import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.1.*"],
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "images.pexels.com" },
      { protocol: "https", hostname: "www.freemockupworld.com" },
    ],
  },
};

if (process.env.NODE_ENV !== "production") {
  initOpenNextCloudflareForDev();
}

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);

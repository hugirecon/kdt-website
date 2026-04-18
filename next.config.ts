import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.trycloudflare.com",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "9000",
      },
    ],
  },
  async rewrites() {
    return [
      // Markdown mirrors for AI crawlers (llmstxt.org spec)
      // /about.md → /markdown/about.md, etc.
      { source: "/index.md", destination: "/markdown/index.md" },
      { source: "/about.md", destination: "/markdown/about.md" },
      { source: "/services.md", destination: "/markdown/services.md" },
      { source: "/careers.md", destination: "/markdown/careers.md" },
      { source: "/training.md", destination: "/markdown/training.md" },
      { source: "/contact.md", destination: "/markdown/contact.md" },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*.md",
        headers: [
          { key: "Content-Type", value: "text/markdown; charset=utf-8" },
          { key: "Cache-Control", value: "public, max-age=3600, s-maxage=3600" },
          { key: "X-Robots-Tag", value: "index, follow" },
        ],
      },
    ];
  },
};

export default nextConfig;

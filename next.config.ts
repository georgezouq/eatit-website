import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    silenceDeprecations: ['legacy-js-api', 'import'],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "index, follow",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/blog-v2",
        destination: "/blogs",
        permanent: true,
      },
      {
        source: "/blog-details",
        destination: "/blogs",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

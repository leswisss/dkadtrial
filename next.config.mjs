/** @type {import('next').NextConfig} */
const nextConfig = {};

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/fr/projets",
        destination: "/fr/projects",
        locale: false,
      },
      {
        source: "/fr/galerie",
        destination: "/fr/gallery",
        locale: false,
      },
      {
        source: "/fr/a-propos",
        destination: "/fr/about",
        locale: false,
      },
      {
        source: "/fr/projets/:project",
        destination: "/fr/projects/:project",
        locale: false,
      },
    ];
  },
};

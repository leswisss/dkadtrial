/** @type {import('next').NextConfig} */
const nextConfig = {
}

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
 
export default {
  i18n: {
    locales: ['fr', 'en', 'de'],
    defaultLocale: 'en',
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
      },
    ],
  },
  async rewrites() {
    return [
      {
        // does not handle locales automatically since locale: false is set
        source: '/fr/projets',
        destination: '/nl/projects',
        locale: false,
      }
    ]
  },
}
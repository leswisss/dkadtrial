/** @type {import('next').NextConfig} */
const nextConfig = {
}

import path from 'path';

 
export default {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['res.cloudinary.com']
  }
}
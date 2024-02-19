/** @type {import('next').NextConfig} */
const nextConfig = {
}

import { join } from 'path'
 
module.exports = {
  sassOptions: {
    includePaths: [join(__dirname, 'styles')],
  },
  images: {
    domains: ['res.cloudinary.com']
  }
}


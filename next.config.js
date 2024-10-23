/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",  
  distDir: "dist",
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    domains: ["images.ctfassets.net"],
  },
}

module.exports = nextConfig
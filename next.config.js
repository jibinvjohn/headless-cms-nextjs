/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/headless-cms-nextjs",
  output: "export",  
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["images.ctfassets.net"],
  },
}

module.exports = nextConfig
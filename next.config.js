/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
  },
  basePath : "/weafy",
  assetPrefix : "/weafy"
}

module.exports = nextConfig

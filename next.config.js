/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  // reactCompiler: true,
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.openmoviedb.com",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "kinopoiskapiunofficial.tech",
      },
      {
        protocol: "https",
        hostname: "st.kp.yandex.net",
      },
      {
        protocol: "https",
        hostname: "avatars.mds.yandex.net",
      },
    ],
  },
}

module.exports = nextConfig

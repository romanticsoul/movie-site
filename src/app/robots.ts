import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  const venv = process.env.VERCEL_ENV
  const vurl = process.env.VERCEL_URL
  const url = venv === "development" ? `http://${vurl}` : `https://${vurl}`

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${url}/sitemap.xml`,
  }
}

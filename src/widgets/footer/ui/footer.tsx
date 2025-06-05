export function Footer() {
  return (
    <footer>
      <div className="container h-16 border-x bg-background">
        {process.env.VERCEL_URL}, {process.env.VERCEL_ENV}
      </div>
    </footer>
  )
}

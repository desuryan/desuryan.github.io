interface FooterProps {
  name: string
  lastUpdated: string
}

export function Footer({ name, lastUpdated }: FooterProps) {
  return (
    <footer className="site-footer">
      <p>
        © {new Date().getFullYear()} {name}. Last updated {lastUpdated}.
      </p>
    </footer>
  )
}

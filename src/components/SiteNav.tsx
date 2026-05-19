const navItems = [
  { id: 'summary', label: 'Summary' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
] as const

export function SiteNav() {
  return (
    <nav className="site-nav" aria-label="Page sections">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <ul className="nav-list">
        {navItems.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

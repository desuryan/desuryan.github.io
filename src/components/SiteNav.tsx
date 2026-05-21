const navItems = [
  { id: 'summary', label: 'Summary' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
] as const

interface SiteNavProps {
  theme: 'dark' | 'light'
  onToggleTheme: () => void
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.7 15.6a8.7 8.7 0 0 1-12.3-12 8.9 8.9 0 1 0 12.3 12Z" />
    </svg>
  )
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2.2M12 19.8V22M4.9 4.9l1.6 1.6M17.5 17.5l1.6 1.6M2 12h2.2M19.8 12H22M4.9 19.1l1.6-1.6M17.5 6.5l1.6-1.6" />
    </svg>
  )
}

export function SiteNav({ theme, onToggleTheme }: SiteNavProps) {
  const nextTheme = theme === 'dark' ? 'light' : 'dark'

  return (
    <nav className="site-nav" aria-label="Page sections">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="nav-row">
        <ul className="nav-list">
          {navItems.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`}>{item.label}</a>
            </li>
          ))}
        </ul>
        <button
          className="theme-toggle"
          type="button"
          aria-label={`Switch to ${nextTheme} mode`}
          title={`Switch to ${nextTheme} mode`}
          onClick={onToggleTheme}
        >
          {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </button>
      </div>
    </nav>
  )
}

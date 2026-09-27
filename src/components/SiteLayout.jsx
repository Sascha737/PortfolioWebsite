import { useEffect, useState } from 'react'
import { NavLink, Outlet, useNavigate, useSearchParams } from 'react-router-dom'

const navigation = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
]

function Header() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const [query, setQuery] = useState(searchParams.get('search') ?? '')

  useEffect(() => {
    setQuery(searchParams.get('search') ?? '')
  }, [searchParams])

  function handleSearch(event) {
    event.preventDefault()
    const search = query.trim()
    navigate(search ? `/projects?search=${encodeURIComponent(search)}` : '/projects')
  }

  return (
    <header className="site-header">
      <NavLink className="wordmark" to="/" aria-label="Sascha Edney, home">
        <span className="wordmark-mark">SE</span>
        <span>Sascha Edney</span>
      </NavLink>
      <nav className="primary-nav" aria-label="Main navigation">
        {navigation.map(({ label, to }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) => (isActive ? 'nav-link is-active' : 'nav-link')}
          >
            {label}
          </NavLink>
        ))}
      </nav>
      <form className="site-search" role="search" onSubmit={handleSearch}>
        <label className="visually-hidden" htmlFor="site-search-input">
          Search projects
        </label>
        <input
          id="site-search-input"
          type="search"
          placeholder="Find a project"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button type="submit" aria-label="Search projects">
          Search
        </button>
      </form>
    </header>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <p>Designed and built by Sascha Edney</p>
      <a href="https://github.com/Sascha737" target="_blank" rel="noreferrer">
        GitHub <span aria-hidden="true">↗</span>
      </a>
      <p className="footer-year">© {new Date().getFullYear()}</p>
    </footer>
  )
}

export default function SiteLayout() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Header />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
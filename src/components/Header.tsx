'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/journal', label: 'Journal' },
]

export default function Header() {
  const path = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [dark, setDark] = useState(true)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <>
      <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
        <div className="hdr-inner">
          <Link href="/" className="logo">
            <span className="logo-word">Sandlip-Oasis</span>
            <span className="logo-tag">Global Creative Collective</span>
          </Link>

          <nav className="hdr-nav" aria-label="Main">
            <ul>
              {links.map(l => (
                <li key={l.href}>
                  <Link href={l.href} className={path === l.href ? 'active' : ''}>{l.label}</Link>
                </li>
              ))}
              <li><Link href="/contact" className="nav-cta">Start a Project</Link></li>
            </ul>
          </nav>

          <div className="hdr-right">
            <div className="cont-dots" aria-label="Three studios">
              <span className="cont-dot dot-eu" title="Amsterdam" />
              <span className="cont-dot dot-us" title="New York" />
              <span className="cont-dot dot-af" title="Lagos" />
            </div>
            <button className="theme-pill" onClick={() => setDark(d => !d)} aria-label="Toggle theme">
              <span aria-hidden="true">{dark ? '☀' : '☽'}</span>
              <span>{dark ? 'Light' : 'Dark'}</span>
            </button>
            <button
              className={`burger${open ? ' open' : ''}`}
              onClick={() => setOpen(o => !o)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      <nav className={`mob-nav${open ? ' open' : ''}`} aria-label="Mobile">
        {links.map(l => (
          <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</Link>
        ))}
        <Link href="/contact" onClick={() => setOpen(false)}>Start a Project →</Link>
      </nav>
    </>
  )
}

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'About',      href: '#about'      },
  { label: 'Schedule',   href: '#schedule'   },
  { label: 'Categories', href: '#categories' },
  { label: 'Events',     href: '#events'     },
  { label: 'Prizes',     href: '#prizes'     },
  { label: 'Contact',    href: '#contact'    },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const [active, setActive]     = useState('')

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    const ids = links.map(l => l.href.slice(1))
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) }),
      { rootMargin: '-40% 0px -55% 0px' }
    )
    ids.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el) })
    return () => obs.disconnect()
  }, [])

  return (
    <motion.header
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] as const }}
      style={{
        position: 'fixed', top: '1.25rem', left: 0, right: 0, zIndex: 100,
        pointerEvents: 'none',
        display: 'flex', justifyContent: 'center', alignItems: 'center',
        padding: '0 1rem',
      }}
    >
      {/* Desktop Floating Pill Navbar Container */}
      <nav
        style={{
          pointerEvents: 'auto',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: 'rgba(12, 8, 5, 0.92)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 176, 32, 0.22)',
          borderRadius: 999,
          padding: '0.4rem 0.5rem 0.4rem 1.4rem',
          boxShadow: scrolled
            ? '0 8px 32px rgba(0, 0, 0, 0.85), 0 0 20px rgba(255, 92, 26, 0.15)'
            : '0 4px 24px rgba(0, 0, 0, 0.65)',
          transition: 'all 0.3s ease',
        }}
      >
        {/* Desktop links - centered pill navigation */}
        <ul className="hidden md:flex" style={{ listStyle: 'none', gap: '0.35rem', alignItems: 'center', margin: 0, padding: 0 }}>
          {links.map(l => {
            const isActive = active === l.href.slice(1)
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  style={{
                    display: 'block',
                    padding: '0.42rem 0.95rem',
                    borderRadius: 999,
                    textDecoration: 'none',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    letterSpacing: '0.09em',
                    textTransform: 'uppercase',
                    fontFamily: 'Rajdhani, sans-serif',
                    color: isActive ? 'var(--amber)' : 'rgba(240,230,211,0.68)',
                    background: isActive ? 'rgba(255,176,32,0.12)' : 'transparent',
                    boxShadow: isActive ? 'inset 0 0 12px rgba(255,176,32,0.15)' : 'none',
                    transition: 'all 0.22s ease',
                  }}
                  onMouseEnter={e => {
                    if (!isActive) {
                      e.currentTarget.style.color = 'var(--ivory)'
                      e.currentTarget.style.background = 'rgba(255,176,32,0.08)'
                    }
                  }}
                  onMouseLeave={e => {
                    if (!isActive) {
                      e.currentTarget.style.color = 'rgba(240,230,211,0.68)'
                      e.currentTarget.style.background = 'transparent'
                    }
                  }}
                >
                  {l.label}
                </a>
              </li>
            )
          })}

          <li>
            <a
              href="#register"
              className="btn-fire"
              style={{
                marginLeft: '0.6rem',
                padding: '0.45rem 1.35rem',
                fontSize: '0.75rem',
                borderRadius: 999,
              }}
            >
              Register
            </a>
          </li>
        </ul>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden" style={{ alignItems: 'center', justifyContent: 'space-between', width: '100%', gap: '1rem', paddingRight: '0.5rem' }}>
          <span className="font-orbitron text-amber" style={{ fontSize: '0.85rem', fontWeight: 900, letterSpacing: '0.12em', paddingLeft: '0.5rem' }}>
            AVIONIX
          </span>
          <button
            id="nav-menu-toggle"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(o => !o)}
            style={{
              background: 'rgba(255,176,32,0.1)',
              border: '1px solid rgba(255,176,32,0.25)',
              borderRadius: '50%',
              width: 36, height: 36,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', color: 'var(--amber)',
            }}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            style={{
              pointerEvents: 'auto',
              position: 'absolute',
              top: '4.2rem',
              width: 'calc(100% - 2rem)',
              maxWidth: 360,
              background: 'rgba(12, 8, 5, 0.96)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 176, 32, 0.25)',
              borderRadius: 16,
              padding: '1.25rem',
              boxShadow: '0 12px 40px rgba(0, 0, 0, 0.9)',
              textAlign: 'center',
            }}
          >
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              {[...links].map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    style={{
                      display: 'block',
                      padding: '0.75rem 0',
                      borderRadius: 8,
                      textDecoration: 'none',
                      color: active === l.href.slice(1) ? 'var(--amber)' : 'rgba(240,230,211,0.8)',
                      background: active === l.href.slice(1) ? 'rgba(255,176,32,0.1)' : 'transparent',
                      fontSize: '0.9rem',
                      fontFamily: 'Rajdhani, sans-serif',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
              <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: links.length * 0.04 + 0.08 }}>
                <a href="#register" onClick={() => setOpen(false)} className="btn-fire" style={{ display: 'block', textAlign: 'center', marginTop: '0.75rem', borderRadius: 999 }}>
                  Register Now
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

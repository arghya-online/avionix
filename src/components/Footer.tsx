import { motion } from 'framer-motion'
import iemLogo from '../assets/iem.png'
import uemLogo from '../assets/uem.png'
import saeLogo from '../assets/sae.png'
import ieiLogo from '../assets/iei.png'

const REGISTER_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLScoOc5Yos6qmM3dPvMnp9D8_MEKqFcWBgXEOR76Ht_2DJgj1Q/viewform'

export default function Footer() {
  return (
    <footer className="bg-pattern-grid" style={{
      position: 'relative',
      background: 'var(--void)',
      borderTop: '1px solid rgba(255,176,32,0.1)',
      padding: '3.5rem 1.5rem 2rem',
      overflow: 'hidden',
    }}>
      {/* Top fire glow */}
      <div aria-hidden="true" style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: '50%', height: 1,
        background: 'linear-gradient(to right, transparent, rgba(255,92,26,0.5), rgba(255,176,32,0.5), rgba(255,92,26,0.5), transparent)',
      }} />

      {/* Grain */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0, opacity: 0.025,
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        backgroundSize: '180px 180px',
        mixBlendMode: 'overlay',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Main row */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap',
          gap: '2.5rem', marginBottom: '3rem',
        }}>
          {/* Brand block */}
          <div style={{ maxWidth: 360 }}>
            <div className="font-orbitron" style={{
              fontSize: '1.6rem', fontWeight: 900, letterSpacing: '0.14em',
              color: 'var(--amber)',
              textShadow: '0 0 24px rgba(255,176,32,0.45)',
              marginBottom: '0.6rem',
            }}>
              AVIONIX
            </div>
            <p className="font-rajdhani" style={{
              fontSize: '0.88rem', color: 'var(--ash)', lineHeight: 1.8,
              letterSpacing: '0.03em',
            }}>
              Organized by Dept. of Mechanical Engineering, IEM Kolkata<br />
              <span style={{ fontSize: '0.8rem', color: 'rgba(240,230,211,0.6)' }}>
                28th August Onwards · IEM Salt Lake, Kolkata
              </span>
            </p>

            {/* Fire rule */}
            <div style={{
              marginTop: '1.25rem',
              height: 1,
              width: 120,
              background: 'linear-gradient(to right, var(--fire), transparent)',
              opacity: 0.5,
            }} />
          </div>

          {/* Quick nav */}
          <nav aria-label="Footer navigation">
            <p className="font-rajdhani" style={{
              fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.22em',
              textTransform: 'uppercase', color: 'var(--ash)',
              marginBottom: '1rem',
            }}>
              Navigation
            </p>
            <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem 2rem' }}>
              {[
                ['About', '#about'],
                ['Events', '#events'],
                ['Schedule', '#schedule'],
                ['Register', '#register'],
                ['Categories', '#categories'],
                ['Contact', '#contact'],
              ].map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    style={{
                      textDecoration: 'none',
                      fontSize: '0.82rem',
                      color: 'var(--ash)',
                      fontFamily: 'Rajdhani, sans-serif',
                      fontWeight: 600,
                      letterSpacing: '0.05em',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.color = 'var(--amber)' }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'var(--ash)' }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Register CTA */}
          <div>
            <p className="font-rajdhani" style={{
              fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.22em',
              textTransform: 'uppercase', color: 'var(--ash)', marginBottom: '1rem',
            }}>
              Join Now
            </p>
            <motion.a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="btn-fire"
              style={{ display: 'inline-flex', fontSize: '0.78rem', padding: '0.7rem 1.5rem' }}
            >
              Register Now →
            </motion.a>
          </div>
        </div>

        {/* Bottom divider */}
        <div style={{
          height: 1,
          background: 'linear-gradient(to right, transparent, rgba(255,176,32,0.18), transparent)',
          marginBottom: '1.5rem',
        }} />

        {/* Bottom row */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: '1rem',
        }}>
          {/* Org badges */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center' }}>
            {[
              { src: uemLogo, alt: 'UEM' },
              { src: saeLogo, alt: 'SAE' },
              { src: ieiLogo, alt: 'IEI' },
              { src: iemLogo, alt: 'IEM' },
            ].map(org => (
              <div
                key={org.alt}
                style={{
                  height: 32,
                  padding: '4px 10px',
                  borderRadius: 6,
                  background: 'rgba(255, 255, 255, 0.9)',
                  border: '1px solid rgba(255, 176, 32, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img src={org.src} alt={org.alt} style={{ height: '100%', objectFit: 'contain', transform: 'scale(1.35)' }} />
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.35rem' }}>
            <p className="font-hud" style={{
              fontSize: '0.65rem', color: 'rgba(240,230,211,0.3)',
              letterSpacing: '0.06em',
            }}>
              © 2025 AVIONIX. ALL RIGHTS RESERVED.
            </p>
            <a
              href="https://github.com/arghya-online"
              target="_blank"
              rel="noopener noreferrer"
              className="font-hud"
              style={{
                fontSize: '0.65rem',
                color: 'var(--amber)',
                textDecoration: 'none',
                letterSpacing: '0.06em',
                opacity: 0.8,
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.opacity = '1' }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '0.8' }}
            >
              Meet the Developer →
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

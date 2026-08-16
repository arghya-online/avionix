import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

const contacts = [
  { event: 'Endurance Race',  name: 'Chayan Giri Goswami',  phone: '+91 97488 20191', raw: '+919748820191', accent: '#FF5C1A' },
  { event: 'Hover & Deliver', name: 'Devapriya Chatterjee', phone: '+91 81590 86538', raw: '+918159086538', accent: '#FFB020' },
  { event: 'Gravity Grid',    name: 'Koushambi Banerjee',   phone: '+91 90075 36225', raw: '+919007536225', accent: '#FF8C42' },
  { event: 'Drone Shots',     name: 'Tiyasa Sahana',        phone: '+91 94764 34349', raw: '+919476434349', accent: '#38BDF8' },
]

export default function Contact() {
  return (
    <section className="section-pad bg-pattern-dots" style={{ background: 'var(--abyss)', position: 'relative' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 1.5rem' }}>

        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
          className="stamp" style={{ marginBottom: '1.25rem' }}
        >
          Points of Contact
        </motion.div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
            className="font-orbitron"
            style={{ fontSize: 'clamp(1.8rem, 4.5vw, 3rem)', fontWeight: 900, letterSpacing: '0.03em', color: 'var(--ivory)' }}
          >
            Get in <span className="text-fire">Touch</span>
          </motion.h2>
          <motion.p
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}
            style={{ fontSize: '0.85rem', color: 'var(--ash)', maxWidth: 340, lineHeight: 1.6 }}
          >
            Reach out for event-specific questions on rules or eligibility.
          </motion.p>
        </div>

        <div
          className="contact-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '1rem',
          }}
        >
          {contacts.map((c, i) => (
            <motion.div
              key={c.name}
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i + 3}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="panel bg-pattern-hud"
              style={{ padding: '1.4rem', overflow: 'hidden' }}
            >
              {/* Top accent strip */}
              <div style={{ height: 2, background: `linear-gradient(to right, ${c.accent}, transparent)`, margin: '-1.4rem -1.4rem 1.1rem' }} />

              {/* Event badge */}
              <div style={{
                display: 'inline-flex', marginBottom: '0.75rem',
                padding: '0.18rem 0.55rem', borderRadius: 4,
                background: `${c.accent}12`, border: `1px solid ${c.accent}28`,
                fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.1em',
                textTransform: 'uppercase', color: c.accent, fontFamily: 'Rajdhani, sans-serif',
              }}>
                {c.event}
              </div>

              <p className="font-rajdhani" style={{
                fontSize: '1rem', fontWeight: 700,
                color: 'var(--ivory)', marginBottom: '1rem', lineHeight: 1.3,
              }}>
                {c.name}
              </p>

              <a
                href={`tel:${c.raw}`}
                aria-label={`Call ${c.name}`}
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                  padding: '0.55rem 0.8rem', borderRadius: 6,
                  textDecoration: 'none',
                  background: `${c.accent}0C`, border: `1px solid ${c.accent}25`,
                  color: c.accent, fontSize: '0.78rem', fontWeight: 600,
                  fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.03em',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = `${c.accent}1C` }}
                onMouseLeave={e => { e.currentTarget.style.background = `${c.accent}0C` }}
              >
                <Phone size={12} />
                {c.phone}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { CheckCircle, XCircle } from 'lucide-react'
import beginnerImg from '../assets/beginner-drone.png'
import advancedImg from '../assets/advanced-drone.png'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.14, duration: 0.72, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

const categories = [
  {
    id: 'beginner',
    label: 'Beginner',
    accent: '#FFB020',
    img: beginnerImg,
    imgAlt: 'A beginner quadrotor drone',
    description: 'Drones without camera and without payload pick-and-drop mechanism.',
    criteria: [
      { text: 'No camera required', allowed: false },
      { text: 'No payload mechanism', allowed: false },
    ],
    events: ['Technical Inspection', 'Innovation & Business Presentation', 'Endurance Race'],
    fee: { school: '₹199', college: '₹399' },
  },
  {
    id: 'advanced',
    label: 'Advanced',
    accent: '#FF5C1A',
    img: advancedImg,
    imgAlt: 'An advanced drone with camera and payload gripper',
    description: 'Drones with camera OR payload pick-and-drop mechanism.',
    criteria: [
      { text: 'Camera OR payload system', allowed: true },
      { text: 'Pick-and-drop mechanism', allowed: true },
    ],
    events: ['Technical Inspection', 'Innovation & Business Presentation', 'Endurance Race', 'Hover & Deliver'],
    fee: { school: '₹199', college: '₹399' },
    featured: true,
  },
]

export default function Categories() {
  return (
    <section className="section-pad bg-pattern-hud" style={{ background: 'var(--deep)', position: 'relative' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 1.5rem' }}>

        {/* Label + heading */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
          className="stamp" style={{ marginBottom: '1.25rem' }}
        >
          Team Categories
        </motion.div>

        <motion.h2
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
          className="font-orbitron"
          style={{
            fontSize: 'clamp(1.8rem, 4.5vw, 3rem)', fontWeight: 900,
            letterSpacing: '0.03em', color: 'var(--ivory)',
            marginBottom: '0.75rem',
          }}
        >
          Choose Your <span className="text-fire">Category</span>
        </motion.h2>

        <motion.p
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}
          style={{ fontSize: '0.92rem', color: 'var(--ash)', marginBottom: '2.5rem', maxWidth: 520, lineHeight: 1.7 }}
        >
          Winners are decided on total accumulated score across all mandatory events.
          Both categories share the same entry fees.
        </motion.p>

        {/* Category cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.5rem',
        }}>
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i + 3}
              whileHover={{ y: -6, transition: { duration: 0.22 } }}
              className="panel"
              style={{
                overflow: 'hidden',
                boxShadow: cat.featured
                  ? `0 0 40px ${cat.accent}15, var(--card-shadow)`
                  : 'var(--card-shadow)',
              }}
            >
              {/* Top color strip */}
              <div style={{ height: 3, background: `linear-gradient(to right, ${cat.accent}, transparent 70%)` }} />

              {/* Drone image */}
              <div style={{ position: 'relative', height: 180, overflow: 'hidden', background: 'var(--raised)' }}>
                <img
                  src={cat.img}
                  alt={cat.imgAlt}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: `linear-gradient(to bottom, transparent 50%, rgba(26,16,8,0.95) 100%)`,
                }} />
                {/* Category badge overlay */}
                {cat.featured && (
                  <div style={{
                    position: 'absolute', top: '0.75rem', right: '0.75rem',
                    background: `${cat.accent}20`, border: `1px solid ${cat.accent}50`,
                    borderRadius: 4, padding: '0.2rem 0.6rem',
                    fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.15em',
                    color: cat.accent, textTransform: 'uppercase', fontFamily: 'Rajdhani, sans-serif',
                  }}>
                    Pro Tier
                  </div>
                )}
              </div>

              {/* Content */}
              <div style={{ padding: '1.5rem' }}>
                <h3 className="font-orbitron" style={{
                  fontSize: '1.3rem', fontWeight: 900, letterSpacing: '0.08em',
                  color: cat.accent, marginBottom: '0.6rem',
                }}>
                  {cat.label}
                </h3>

                <p style={{ fontSize: '0.85rem', color: 'var(--smoke)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                  {cat.description}
                </p>

                {/* Criteria */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.25rem' }}>
                  {cat.criteria.map(c => (
                    <div key={c.text} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                      {c.allowed
                        ? <CheckCircle size={14} color={cat.accent} style={{ flexShrink: 0 }} />
                        : <XCircle size={14} color="rgba(240,230,211,0.22)" style={{ flexShrink: 0 }} />}
                      <span style={{
                        fontSize: '0.82rem',
                        color: c.allowed ? 'rgba(240,230,211,0.9)' : 'rgba(240,230,211,0.38)',
                      }}>
                        {c.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Divider */}
                <div style={{ height: 1, background: `rgba(255,176,32,0.12)`, marginBottom: '1rem' }} />

                {/* Events list */}
                <p className="font-rajdhani" style={{
                  fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.16em',
                  textTransform: 'uppercase', color: cat.accent, marginBottom: '0.6rem',
                }}>
                  Included Events
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  {cat.events.map((ev) => (
                    <div key={ev} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <div style={{ width: 4, height: 4, borderRadius: '50%', background: cat.accent, flexShrink: 0 }} />
                      <span style={{ fontSize: '0.82rem', color: 'rgba(240,230,211,0.7)' }}>{ev}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Add-on note */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={5}
          className="panel bg-pattern-cross"
          style={{ marginTop: '1.25rem', padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}
        >
          <div className="font-rajdhani" style={{
            fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase',
            color: 'var(--ember)', background: 'rgba(255,140,66,0.1)', border: '1px solid rgba(255,140,66,0.2)',
            borderRadius: 4, padding: '0.2rem 0.7rem', flexShrink: 0,
          }}>
            Open to All
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--smoke)' }}>
            <strong style={{ color: 'var(--ivory)' }}>Gravity Grid</strong> and{' '}
            <strong style={{ color: 'var(--ivory)' }}>Drone Shots</strong> - add-on events available to every participant.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

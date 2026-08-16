import { motion } from 'framer-motion'
import workshopImg from '../assets/drone-workshop.png'
import iemLogo from '../assets/iem.png'
import uemLogo from '../assets/uem.png'
import ieiLogo from '../assets/iei.png'
import saeLogo from '../assets/sae.png'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.75, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

const orgs = [
  {
    name: 'University of Engineering & Management',
    sub: 'UEM Group',
    logo: uemLogo,
    color: '#38BDF8',
  },
  {
    name: 'SAE IEM Collegiate Club',
    sub: 'Society of Automotive Engineers',
    logo: saeLogo,
    color: '#FFB020',
  },
  {
    name: 'IEI–IEM (ME) Student Chapter',
    sub: 'The Institution of Engineers (India)',
    logo: ieiLogo,
    color: '#FF8C42',
  },
  {
    name: 'Department of Mechanical Engineering',
    sub: 'IEM Kolkata',
    logo: iemLogo,
    color: '#FF5C1A',
  }
]

export default function About() {
  return (
    <section className="section-pad bg-pattern-dots" style={{ background: 'var(--abyss)', position: 'relative' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 1.5rem' }}>

        {/* Label */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
          className="stamp" style={{ marginBottom: '1.25rem' }}
        >
          About the Event
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
          className="font-orbitron"
          style={{
            fontSize: 'clamp(1.8rem, 4.5vw, 3rem)', fontWeight: 900,
            letterSpacing: '0.03em', color: 'var(--ivory)',
            marginBottom: '1.25rem', maxWidth: 640,
          }}
        >
          Engineering Meets<br />
          <span className="text-fire">The Sky</span>
        </motion.h2>

        <motion.p
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}
          style={{
            fontSize: '1.05rem', lineHeight: 1.85,
            color: 'var(--smoke)', maxWidth: 640, marginBottom: '3rem',
          }}
        >
          AVIONIX is a student drone competition combining technical inspection,
          business presentation, and high-octane racing. Teams design, build, and
          fly their own drones across multiple events testing engineering precision,
          creative thinking, and piloting skill - two days of innovation in Kolkata.
        </motion.p>

        {/* Workshop image banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: 'relative', borderRadius: 12, overflow: 'hidden',
            marginBottom: '3rem',
            height: 'clamp(200px, 35vw, 420px)',
            border: '1px solid rgba(255,176,32,0.15)',
          }}
        >
          <img
            src={workshopImg}
            alt="Students assembling a drone in a workshop"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
          {/* Warm overlay */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to right, rgba(7,5,3,0.6) 0%, rgba(7,5,3,0.1) 50%, rgba(7,5,3,0.4) 100%)',
          }} />
          {/* Stat pills over image */}
          <div style={{
            position: 'absolute', bottom: '1.5rem', left: '1.5rem',
            display: 'flex', gap: '0.75rem', flexWrap: 'wrap',
          }}>
            {[
              { val: '6', label: 'Events' },
              { val: '2', label: 'Days' },
              { val: '5', label: 'Max Team Size' },
            ].map(stat => (
              <div key={stat.label} style={{
                background: 'rgba(7,5,3,0.75)',
                border: '1px solid rgba(255,176,32,0.25)',
                borderRadius: 8, padding: '0.5rem 1rem',
                display: 'flex', alignItems: 'baseline', gap: '0.45rem',
                backdropFilter: 'blur(12px)',
              }}>
                <span className="font-orbitron" style={{ fontSize: '1.4rem', fontWeight: 900, color: 'var(--amber)', lineHeight: 1 }}>
                  {stat.val}
                </span>
                <span style={{ fontSize: '0.72rem', color: 'var(--smoke)', letterSpacing: '0.06em' }}>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Section subtitle for Organisers */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={3}
          style={{ marginBottom: '1.25rem' }}
        >
          <p className="font-rajdhani" style={{ fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--amber)' }}>
            Organized By Dept. of Mechanical Engineering, IEM Kolkata
          </p>
        </motion.div>

        {/* Organiser cards with actual uploaded logos */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.25rem',
        }}>
          {orgs.map((org, i) => (
            <motion.div
              key={org.name}
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i + 4}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="panel bg-pattern-stripes"
              style={{ padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1.1rem' }}
            >
              {/* Logo Container */}
              <div style={{
                width: 54, height: 54, borderRadius: 10, flexShrink: 0,
                background: 'rgba(255, 255, 255, 0.95)',
                border: `1px solid ${org.color}50`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                padding: '6px',
                boxShadow: `0 0 16px ${org.color}25`,
              }}>
                <img
                  src={org.logo}
                  alt={`${org.name} logo`}
                  style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block', transform: 'scale(1.35)' }}
                />
              </div>

              <div>
                <p style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--ivory)', lineHeight: 1.3, marginBottom: '0.2rem' }}>
                  {org.name}
                </p>
                <p className="font-hud" style={{ fontSize: '0.68rem', color: 'var(--ash)', letterSpacing: '0.04em' }}>
                  {org.sub}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

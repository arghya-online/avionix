import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRegistration } from '../hooks/useRegistration'
import { ArrowDown, MapPin, Calendar } from 'lucide-react'
import heroDroneImg from '../assets/hero-drone.png'
import iemLogo from '../assets/iem.png'
import uemLogo from '../assets/uem.png'
import ieiLogo from '../assets/iei.png'
import saeLogo from '../assets/sae.png'

/* Warm light streak */
function Streak({ top, delay, duration, width, color, opacity }: {
  top: string; delay: number; duration: number; width: string; color: string; opacity: number
}) {
  return (
    <div aria-hidden="true" style={{
      position: 'absolute', top, left: '-15%',
      width, height: 2,
      background: `linear-gradient(90deg, transparent, ${color}, #FFE228, transparent)`,
      opacity,
      animation: `streak-warm ${duration}s ${delay}s ease-in-out infinite`,
      borderRadius: 999,
      filter: 'blur(0.8px)',
    }} />
  )
}

/* Ember particle */
function Ember({ left, delay, size }: { left: string; delay: number; size: number }) {
  return (
    <div aria-hidden="true" style={{
      position: 'absolute',
      bottom: '15%',
      left,
      width: size,
      height: size,
      borderRadius: '50%',
      background: `radial-gradient(circle, #FFE228 0%, #FF5C1A 60%, transparent 100%)`,
      animation: `ember-drift ${3 + Math.random() * 3}s ${delay}s ease-in infinite`,
      filter: 'blur(0.5px)',
    }} />
  )
}

/* Chromatic wordmark letters */
const letters = 'AVIONIX'.split('')

const letterVariants = {
  hidden:  { opacity: 0, y: 50, filter: 'blur(12px)', skewX: 5 },
  visible: (i: number) => ({
    opacity: 1, y: 0, filter: 'blur(0px)', skewX: 0,
    transition: { delay: 0.4 + i * 0.09, duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

const orgLogos = [
  { src: uemLogo, alt: 'UEM' },
  { src: saeLogo, alt: 'SAE' },
  { src: ieiLogo, alt: 'IEI' },
  { src: iemLogo, alt: 'IEM' },
]

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] })
  const bgY      = useTransform(scrollYProgress, [0, 1], ['0%', '28%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '14%'])
  const opacity  = useTransform(scrollYProgress, [0, 0.65], [1, 0])

  const reg = useRegistration()

  return (
    <section
      ref={containerRef}
      aria-labelledby="hero-title"
      style={{ position: 'relative', minHeight: '100svh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}
    >
      {/* ── Background layer ──────────────────────────────────────── */}
      <motion.div aria-hidden="true" style={{ y: bgY, position: 'absolute', inset: 0 }}>
        {/* Warm base gradient */}
        <div style={{
          position: 'absolute', inset: 0,
          background: `
            radial-gradient(ellipse 70% 60% at 65% 35%, rgba(255,92,26,0.18) 0%, transparent 60%),
            radial-gradient(ellipse 50% 50% at 15% 65%, rgba(255,176,32,0.10) 0%, transparent 55%),
            radial-gradient(ellipse 40% 40% at 85% 80%, rgba(232,57,42,0.08) 0%, transparent 50%),
            linear-gradient(170deg, #040200 0%, #060402 35%, #0C0805 65%, #060402 100%)
          `,
        }} />

        {/* Hero image */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${heroDroneImg})`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          mixBlendMode: 'luminosity',
          opacity: 0.3,
        }} />

        {/* Film grain pseudo-overlay via SVG */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.045,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='250'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='250' height='250' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: '180px 180px',
          mixBlendMode: 'overlay',
        }} />

        {/* Amber warm grid */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,176,32,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,176,32,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }} />

        {/* Vignette */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at center, transparent 35%, rgba(4,2,0,0.75) 100%)',
        }} />

        {/* Bottom fade */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '35%',
          background: 'linear-gradient(to bottom, transparent, #060402)',
        }} />

        {/* Diagonal bottom cut */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '100px',
          background: 'linear-gradient(to bottom right, transparent 49%, #060402 51%)',
        }} />
      </motion.div>

      {/* ── Light streaks ─────────────────────────────────────────── */}
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        <Streak top="18%" delay={0}   duration={4.2} width="60vw" color="#FFB020" opacity={0.65} />
        <Streak top="32%" delay={1.4} duration={5.8} width="75vw" color="#FF5C1A" opacity={0.45} />
        <Streak top="52%" delay={0.8} duration={4.8} width="45vw" color="#FFE228" opacity={0.35} />
        <Streak top="70%" delay={2.5} duration={6.5} width="55vw" color="#FF8C42" opacity={0.25} />
        <Streak top="12%" delay={3.2} duration={5.2} width="35vw" color="#FFB020" opacity={0.2} />
      </div>

      {/* ── Ember particles ───────────────────────────────────────── */}
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        {[
          { left: '15%', delay: 0,   size: 3 },
          { left: '28%', delay: 1.2, size: 2 },
          { left: '42%', delay: 0.5, size: 4 },
          { left: '58%', delay: 2.0, size: 2 },
          { left: '72%', delay: 0.8, size: 3 },
          { left: '85%', delay: 1.7, size: 2 },
          { left: '35%', delay: 3.0, size: 2 },
          { left: '65%', delay: 2.5, size: 3 },
        ].map((e, i) => <Ember key={i} {...e} />)}
      </div>

      {/* ── Scanline ──────────────────────────────────────────────── */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', left: 0, right: 0, height: '2px',
          background: 'linear-gradient(to right, transparent 0%, rgba(255,176,32,0.06) 30%, rgba(255,176,32,0.06) 70%, transparent 100%)',
          animation: 'scan-amber 8s linear infinite',
          top: 0,
        }} />
      </div>

      {/* ── Hero content ──────────────────────────────────────────── */}
      <motion.div
        style={{ y: contentY, opacity, position: 'relative', zIndex: 2, textAlign: 'center', padding: '6.5rem 1rem 3rem', width: '100%' }}
      >
        {/* Prominent Institutional Logos Row: IEM, UEM, IEI, SAE */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 'clamp(0.6rem, 2.5vw, 1.25rem)',
            marginBottom: '1.25rem',
          }}
        >
          {orgLogos.map((item) => (
            <div
              key={item.alt}
              style={{
                height: 'clamp(36px, 7vw, 46px)',
                padding: '5px clamp(12px, 2.5vw, 20px)',
                borderRadius: 8,
                background: 'rgba(255, 255, 255, 0.95)',
                border: '1px solid rgba(255, 176, 32, 0.3)',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.5), 0 0 12px rgba(255, 176, 32, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'transform 0.2s ease',
              }}
            >
              <img src={item.src} alt={`${item.alt} logo`} style={{ height: '100%', objectFit: 'contain', display: 'block', transform: 'scale(1.35)' }} />
            </div>
          ))}
        </motion.div>

        {/* Eyebrow pill */}
        <motion.div
          initial={{ opacity: 0, y: 18, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.25, duration: 0.7 }}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
            marginBottom: '1.75rem',
            padding: '0.4rem 1.1rem',
            background: 'rgba(255,176,32,0.08)',
            border: '1px solid rgba(255,176,32,0.28)',
            borderRadius: 999,
            fontSize: '0.68rem',
            fontWeight: 700,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--amber)',
            fontFamily: 'Rajdhani, sans-serif',
          }}
        >
          <span style={{
            width: 6, height: 6, borderRadius: '50%',
            background: 'var(--fire)',
            animation: 'fire-pulse 2s infinite',
            boxShadow: '0 0 8px rgba(255,92,26,0.8)',
          }} />
          Organized by Dept. of Mechanical Engineering, IEM Kolkata
        </motion.div>

        {/* AVIONIX wordmark - chromatic */}
        <h1
          id="hero-title"
          className="font-orbitron"
          style={{
            display: 'flex', justifyContent: 'center', flexWrap: 'nowrap',
            gap: '0.02em', marginBottom: '0.5rem',
          }}
        >
          {letters.map((ch, i) => (
            <motion.span
              key={i}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={letterVariants}
              className="chromatic"
              style={{
                fontSize: 'clamp(1.6rem, 10.5vw, 9rem)',
                fontWeight: 900,
                lineHeight: 1,
                letterSpacing: '0.06em',
                color: '#FFFFFF',
                display: 'inline-block',
              }}
            >
              {ch}
            </motion.span>
          ))}
        </h1>

        {/* Thin amber rule under wordmark */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
          style={{
            width: 'min(420px, 80vw)', height: 1, margin: '0.75rem auto 1.25rem',
            background: 'linear-gradient(to right, transparent, var(--fire), var(--amber), var(--fire), transparent)',
          }}
        />

        {/* Sub-header: STUDENT DRONE COMPETITION */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.8 }}
          className="font-orbitron"
          style={{
            fontSize: 'clamp(0.85rem, 2.2vw, 1.35rem)',
            fontWeight: 800,
            letterSpacing: '0.28em',
            color: 'var(--amber)',
            textTransform: 'uppercase',
            marginBottom: '0.4rem',
            textShadow: '0 0 16px rgba(255,176,32,0.4)',
          }}
        >
          Student Drone Competition
        </motion.p>

        {/* Sub-tagline */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.15, duration: 0.8 }}
          className="font-rajdhani"
          style={{
            fontSize: 'clamp(0.95rem, 2.4vw, 1.25rem)',
            fontWeight: 500,
            letterSpacing: '0.18em',
            color: 'rgba(240,230,211,0.65)',
            textTransform: 'uppercase',
            marginBottom: '2.5rem',
          }}
        >
          Where Engineering Takes Flight
        </motion.p>

        {/* Meta info chips */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.25, duration: 0.7 }}
          style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem', marginBottom: '3rem' }}
        >
          {[
            { icon: <Calendar size={14} />, text: '28th August Onwards' },
            { icon: <MapPin size={14} />, text: 'IEM Salt Lake, Kolkata' },
          ].map(({ icon, text }) => (
            <div key={text} className="panel" style={{
              display: 'flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.5rem 1.1rem',
              fontSize: '0.82rem', fontWeight: 500,
              color: 'rgba(240,230,211,0.8)',
              borderRadius: 999,
              background: 'rgba(26,16,8,0.85)',
            }}>
              <span style={{ color: 'var(--amber)' }}>{icon}</span>
              {text}
            </div>
          ))}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.45, duration: 0.75 }}
          style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}
        >
          <motion.button
            id="hero-register-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => reg.mutate({ category: null, timestamp: new Date().toISOString() })}
            disabled={reg.isPending}
            className="btn-fire animate-fire-pulse"
            style={{ cursor: reg.isPending ? 'wait' : 'pointer', minWidth: 190 }}
          >
            {reg.isPending ? 'Opening…' : reg.isSuccess ? '✓ Form Opened' : 'Register Now'}
          </motion.button>

          <motion.a
            href="#about"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="btn-ghost"
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
          >
            Explore Events <ArrowDown size={15} />
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.4, duration: 1 }}
          style={{ marginTop: '4.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}
        >
          <span className="font-hud" style={{ fontSize: '0.58rem', letterSpacing: '0.22em', color: 'rgba(240,230,211,0.25)', textTransform: 'uppercase' }}>
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 9, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            style={{ width: 1, height: 44, background: 'linear-gradient(to bottom, rgba(255,176,32,0.65), transparent)' }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

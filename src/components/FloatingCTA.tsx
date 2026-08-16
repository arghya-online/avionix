import { useRef } from 'react'
import { motion, useSpring } from 'framer-motion'
import { useRegistration } from '../hooks/useRegistration'

export default function FloatingCTA() {
  const reg = useRegistration()
  const x = useSpring(0, { stiffness: 180, damping: 18 })
  const y = useSpring(0, { stiffness: 180, damping: 18 })
  const btnRef = useRef<HTMLButtonElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - rect.left - rect.width / 2) * 0.3)
    y.set((e.clientY - rect.top - rect.height / 2) * 0.3)
  }

  return (
    <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 200 }}>
      {/* Outer glow ring */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: -10, borderRadius: '50%',
        border: '1.5px solid rgba(255,92,26,0.4)',
        animation: 'ping-fire 2.8s ease-in-out infinite',
        opacity: 0,
        pointerEvents: 'none',
      }} />
      {/* Inner ring */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: -4, borderRadius: '50%',
        border: '1px solid rgba(255,176,32,0.25)',
        pointerEvents: 'none',
      }} />

      <motion.button
        ref={btnRef}
        id="floating-register-btn"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => { x.set(0); y.set(0) }}
        onClick={() => reg.mutate({ category: null, timestamp: new Date().toISOString() })}
        disabled={reg.isPending}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.92 }}
        aria-label="Register for AVIONIX"
        title="Register for AVIONIX"
        className="animate-fire-pulse"
        style={{
          x, y,
          width: 66, height: 66,
          borderRadius: '50%',
          border: 'none',
          cursor: reg.isPending ? 'wait' : 'pointer',
          background: reg.isSuccess
            ? 'linear-gradient(135deg, #FFB020, #FF5C1A)'
            : 'linear-gradient(135deg, #FF5C1A 0%, #FFB020 100%)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          gap: 2,
          boxShadow: '0 0 28px rgba(255,92,26,0.55), 0 6px 24px rgba(0,0,0,0.6)',
        }}
      >
        {reg.isPending ? (
          <div style={{
            width: 20, height: 20, borderRadius: '50%',
            border: '2px solid rgba(12,8,5,0.3)',
            borderTop: '2px solid #0C0805',
            animation: 'spin-slow 0.7s linear infinite',
          }} />
        ) : reg.isSuccess ? (
          <span style={{ fontSize: '1.3rem' }}>✓</span>
        ) : (
          <>
            <span style={{
              fontFamily: 'Orbitron, sans-serif',
              fontSize: '0.46rem', fontWeight: 900,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              color: '#0C0805', lineHeight: 1,
            }}>
              JOIN
            </span>
            <span style={{
              fontFamily: 'Orbitron, sans-serif',
              fontSize: '0.4rem', fontWeight: 700,
              letterSpacing: '0.08em', textTransform: 'uppercase',
              color: 'rgba(12,8,5,0.65)',
            }}>
              Now
            </span>
          </>
        )}
      </motion.button>
    </div>
  )
}

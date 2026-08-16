import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Users, GraduationCap, School } from 'lucide-react'
import { useRegistration } from '../hooks/useRegistration'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.72, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

const schoolReqs = [
  'A teacher must accompany students',
  'School uniform is mandatory',
  'School ID card required',
  'Maximum 5 members per team',
]

const collegeReqs = [
  'Valid College ID card required',
  'Open to UG/PG engineering students',
  'Inter-college teams permitted',
  'Maximum 5 members per team',
]

type Category = 'school' | 'college'

export default function Registration() {
  const [selected, setSelected] = useState<Category | null>(null)
  const reg = useRegistration()

  return (
    <section className="section-pad bg-pattern-grid" style={{ position: 'relative', overflow: 'hidden', background: 'var(--abyss)' }}>

      {/* Bottom amber glow */}
      <div aria-hidden="true" style={{
        position: 'absolute', bottom: '-10%', left: '50%', transform: 'translateX(-50%)',
        width: '70%', height: '50%',
        background: 'radial-gradient(ellipse at bottom, rgba(255,92,26,0.1) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 1.5rem' }}>

        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
          className="stamp" style={{ marginBottom: '1.25rem' }}
        >
          Registration
        </motion.div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '1rem' }}>
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
            className="font-orbitron"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', fontWeight: 900, letterSpacing: '0.03em', color: 'var(--ivory)' }}
          >
            Register Your <span className="text-amber">Team</span>
          </motion.h2>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <Users size={15} color="var(--amber)" />
            <span style={{ fontSize: '0.85rem', color: 'var(--smoke)' }}>
              Up to <strong style={{ color: 'var(--ivory)' }}>5 members</strong> per team
            </span>
          </motion.div>
        </div>

        {/* Select hint */}
        <motion.p
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}
          style={{ fontSize: '0.78rem', color: 'var(--ash)', marginBottom: '2.5rem' }}
        >
          Select your category, then click Register Now.
        </motion.p>

        {/* Fee cards - aligned equal height grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          alignItems: 'stretch',
          marginBottom: '2.5rem',
        }}>

          {/* School Card */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={3}
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <button
              id="reg-school-btn"
              className="bg-pattern-hud"
              onClick={() => setSelected('school')}
              style={{
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                width: '100%',
                borderRadius: 8,
                background: selected === 'school'
                  ? 'linear-gradient(145deg, #221509 0%, #2C1B0B 100%)'
                  : 'var(--card-bg)',
                border: selected === 'school'
                  ? '1.5px solid var(--amber)'
                  : '1px solid var(--card-border)',
                boxShadow: selected === 'school'
                  ? '0 0 32px rgba(255,176,32,0.2), var(--card-shadow)'
                  : 'var(--card-shadow)',
                padding: '1.75rem',
                transition: 'all 0.25s ease',
                position: 'relative',
                overflow: 'hidden',
                textAlign: 'left',
                color: 'inherit',
              }}
            >
              {/* Top strip */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                background: selected === 'school'
                  ? 'linear-gradient(to right, var(--amber), var(--ember))'
                  : 'transparent',
                transition: 'all 0.25s',
              }} />

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <div style={{
                  width: 42, height: 42, borderRadius: 6,
                  background: 'rgba(255,176,32,0.1)', border: '1px solid rgba(255,176,32,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <School size={18} color="var(--amber)" />
                </div>
                <span className="font-rajdhani" style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--ivory)', letterSpacing: '0.04em' }}>
                  School Students
                </span>
                {selected === 'school' && (
                  <div style={{ marginLeft: 'auto' }}>
                    <Check size={18} color="var(--amber)" />
                  </div>
                )}
              </div>

              <div className="font-orbitron" style={{ fontSize: '2.8rem', fontWeight: 900, color: 'var(--amber)', lineHeight: 1, marginBottom: '0.2rem' }}>
                ₹199
              </div>
              <div className="font-hud" style={{ fontSize: '0.68rem', color: 'var(--ash)', marginBottom: '1.5rem', letterSpacing: '0.08em' }}>
                PER TEAM
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginTop: 'auto' }}>
                {schoolReqs.map(r => (
                  <div key={r} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.55rem' }}>
                    <Check size={13} color="var(--amber)" style={{ flexShrink: 0, marginTop: 3 }} />
                    <span style={{ fontSize: '0.82rem', color: 'var(--smoke)', lineHeight: 1.5 }}>{r}</span>
                  </div>
                ))}
              </div>
            </button>
          </motion.div>

          {/* College Card */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={4}
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <button
              id="reg-college-btn"
              className="bg-pattern-hud"
              onClick={() => setSelected('college')}
              style={{
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                width: '100%',
                borderRadius: 8,
                background: selected === 'college'
                  ? 'linear-gradient(145deg, #221509 0%, #2C1B0B 100%)'
                  : 'var(--card-bg)',
                border: selected === 'college'
                  ? '1.5px solid var(--fire)'
                  : '1px solid var(--card-border)',
                boxShadow: selected === 'college'
                  ? '0 0 32px rgba(255,92,26,0.2), var(--card-shadow)'
                  : 'var(--card-shadow)',
                padding: '1.75rem',
                transition: 'all 0.25s ease',
                position: 'relative',
                overflow: 'hidden',
                textAlign: 'left',
                color: 'inherit',
              }}
            >
              {/* Top strip */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                background: selected === 'college'
                  ? 'linear-gradient(to right, var(--fire), var(--ember))'
                  : 'transparent',
                transition: 'all 0.25s',
              }} />

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <div style={{
                  width: 42, height: 42, borderRadius: 6,
                  background: 'rgba(255,92,26,0.1)', border: '1px solid rgba(255,92,26,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <GraduationCap size={18} color="var(--fire)" />
                </div>
                <span className="font-rajdhani" style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--ivory)', letterSpacing: '0.04em' }}>
                  College Students
                </span>
                {selected === 'college' && (
                  <div style={{ marginLeft: 'auto' }}>
                    <Check size={18} color="var(--fire)" />
                  </div>
                )}
              </div>

              <div className="font-orbitron" style={{ fontSize: '2.8rem', fontWeight: 900, color: 'var(--fire)', lineHeight: 1, marginBottom: '0.2rem' }}>
                ₹399
              </div>
              <div className="font-hud" style={{ fontSize: '0.68rem', color: 'var(--ash)', marginBottom: '1.5rem', letterSpacing: '0.08em' }}>
                PER TEAM
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginTop: 'auto' }}>
                {collegeReqs.map(r => (
                  <div key={r} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.55rem' }}>
                    <Check size={13} color="var(--fire)" style={{ flexShrink: 0, marginTop: 3 }} />
                    <span style={{ fontSize: '0.82rem', color: 'var(--smoke)', lineHeight: 1.5 }}>{r}</span>
                  </div>
                ))}
              </div>
            </button>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={5}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}
        >
          <motion.button
            id="reg-submit-btn"
            whileHover={{ scale: 1.04, boxShadow: '0 0 60px rgba(255,92,26,0.75), 0 4px 32px rgba(0,0,0,0.5)' }}
            whileTap={{ scale: 0.97 }}
            disabled={reg.isPending}
            onClick={() => reg.mutate({ category: selected, timestamp: new Date().toISOString() })}
            className="btn-fire"
            style={{
              cursor: reg.isPending ? 'wait' : 'pointer',
              minWidth: 280,
              padding: '1.1rem 2.8rem',
              fontSize: '0.88rem',
            }}
          >
            {reg.isPending ? 'Opening Form…' : reg.isSuccess ? '✓ Google Form Opened' : 'Register Now'}
          </motion.button>

          {reg.isError && (
            <p style={{ fontSize: '0.78rem', color: 'var(--crimson)' }}>
              Something went wrong. Please try again.
            </p>
          )}

          <p className="font-hud" style={{ fontSize: '0.65rem', color: 'var(--ash)', letterSpacing: '0.08em', textAlign: 'center' }}>
            REGISTRATION VIA GOOGLE FORMS · OPENS IN NEW TAB
          </p>
        </motion.div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { Trophy, Award, Medal, Crown } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.72, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

const positions = [
  {
    rank: '2nd',
    num: '02',
    icon: <Medal size={20} color="#CBD5E1" />,
    height: 110,
    color: '#94A3B8',
    glow: 'rgba(148, 163, 184, 0.3)',
    label: '1st Runner-Up',
    perk: 'Cash Prize + Certificate',
    order: 0,
  },
  {
    rank: '1st',
    num: '01',
    icon: <Crown size={24} color="#FFE228" />,
    height: 145,
    color: '#FFB020',
    glow: 'rgba(255, 176, 32, 0.5)',
    label: 'Champion',
    perk: 'Trophy + Cash + Certificate',
    order: 1,
    champion: true,
  },
  {
    rank: '3rd',
    num: '03',
    icon: <Award size={20} color="#F59E0B" />,
    height: 90,
    color: '#CD7F32',
    glow: 'rgba(205, 127, 50, 0.3)',
    label: '2nd Runner-Up',
    perk: 'Cash Prize + Certificate',
    order: 2,
  },
]

const cats = [
  { id: 'beginner', label: 'Beginner Category', accent: '#FFB020', tag: 'Cat 01' },
  { id: 'advanced', label: 'Advanced Category', accent: '#FF5C1A', tag: 'Cat 02' },
]

export default function Prizes() {
  return (
    <section className="section-pad bg-pattern-cross" style={{ background: 'var(--deep)', position: 'relative' }}>
      <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 1.5rem' }}>

        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
          className="stamp" style={{ marginBottom: '1.25rem' }}
        >
          Prizes & Awards
        </motion.div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
            className="font-orbitron"
            style={{ fontSize: 'clamp(1.8rem, 4.5vw, 3rem)', fontWeight: 900, letterSpacing: '0.03em', color: 'var(--ivory)' }}
          >
            Cash <span className="text-amber">Prizes</span>
          </motion.h2>
          <motion.p
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}
            style={{ fontSize: '0.85rem', color: 'var(--ash)', maxWidth: 360, lineHeight: 1.6 }}
          >
            Awarded to top 3 teams in both categories. Official certificates & trophies provided.
          </motion.p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {cats.map((cat, ci) => (
            <motion.div
              key={cat.id}
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={ci + 3}
              whileHover={{ y: -6, transition: { duration: 0.22 } }}
              className="panel bg-pattern-grid"
              style={{ overflow: 'hidden', paddingBottom: '1.5rem' }}
            >
              {/* Top Accent Strip */}
              <div style={{ height: 3, background: `linear-gradient(to right, ${cat.accent}, transparent 80%)` }} />

              <div style={{ padding: '1.5rem 1.5rem 0' }}>
                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <div style={{
                      width: 36, height: 36, borderRadius: 8,
                      background: `${cat.accent}18`, border: `1px solid ${cat.accent}40`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <Trophy size={18} color={cat.accent} />
                    </div>
                    <div>
                      <h3 className="font-orbitron" style={{
                        fontSize: '0.95rem', fontWeight: 900, letterSpacing: '0.08em',
                        color: 'var(--ivory)', textTransform: 'uppercase',
                      }}>
                        {cat.label}
                      </h3>
                      <span className="font-hud" style={{ fontSize: '0.62rem', color: 'var(--ash)', letterSpacing: '0.06em' }}>
                        PODIUM STANDINGS
                      </span>
                    </div>
                  </div>
                  <span className="font-hud" style={{
                    fontSize: '0.6rem', color: cat.accent, background: `${cat.accent}12`,
                    border: `1px solid ${cat.accent}30`, borderRadius: 4, padding: '0.2rem 0.6rem',
                    letterSpacing: '0.1em',
                  }}>
                    {cat.tag}
                  </span>
                </div>

                {/* Futuristic Podium */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                  gap: '0.85rem',
                  minHeight: 220,
                  padding: '1rem 0.5rem 0',
                }}>
                  {positions.map(pos => (
                    <motion.div
                      key={pos.rank}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: ci * 0.15 + pos.order * 0.12 + 0.4, duration: 0.65 }}
                      style={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        position: 'relative',
                      }}
                    >
                      {/* Floating Badge Header */}
                      <motion.div
                        animate={pos.champion ? { y: [0, -5, 0] } : {}}
                        transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          marginBottom: '0.6rem',
                          zIndex: 2,
                        }}
                      >
                        {/* Emblem circle */}
                        <div style={{
                          width: pos.champion ? 48 : 38,
                          height: pos.champion ? 48 : 38,
                          borderRadius: '50%',
                          background: `radial-gradient(circle, ${pos.color}25 0%, #0F0A06 100%)`,
                          border: `1.5px solid ${pos.color}`,
                          boxShadow: `0 0 18px ${pos.glow}`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                          {pos.icon}
                        </div>
                      </motion.div>

                      {/* Pillar Structure */}
                      <div style={{
                        width: '100%',
                        height: pos.height,
                        borderRadius: '6px 6px 0 0',
                        background: `linear-gradient(to bottom, ${pos.color}22 0%, rgba(15,10,6,0.9) 100%)`,
                        border: `1px solid ${pos.color}45`,
                        borderBottom: 'none',
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        paddingTop: '0.6rem',
                        boxShadow: `inset 0 1px 0 ${pos.color}60, 0 0 20px ${pos.color}15`,
                        overflow: 'hidden',
                      }}>
                        {/* Top Laser Strip */}
                        <div style={{
                          position: 'absolute', top: 0, left: 0, right: 0, height: 2,
                          background: pos.color,
                          boxShadow: `0 0 8px ${pos.color}`,
                        }} />

                        {/* Large Etched Rank Watermark */}
                        <span className="font-orbitron" aria-hidden="true" style={{
                          fontSize: pos.champion ? '2.8rem' : '2.2rem',
                          fontWeight: 900,
                          color: `${pos.color}20`,
                          lineHeight: 1,
                          userSelect: 'none',
                          marginTop: '0.2rem',
                        }}>
                          {pos.num}
                        </span>

                        {/* Rank Pill inside pillar */}
                        <div className="font-orbitron" style={{
                          position: 'absolute',
                          bottom: '0.5rem',
                          fontSize: '0.72rem',
                          fontWeight: 900,
                          color: pos.color,
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                        }}>
                          {pos.rank}
                        </div>
                      </div>

                      {/* Below Pillar Label */}
                      <div style={{ textAlign: 'center', marginTop: '0.6rem' }}>
                        <div className="font-rajdhani" style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--ivory)', lineHeight: 1.2 }}>
                          {pos.label}
                        </div>
                        <div className="font-hud" style={{ fontSize: '0.58rem', color: 'var(--ash)', marginTop: '0.15rem' }}>
                          CASH PRIZE
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Divider Line */}
                <div style={{ height: 1, background: `linear-gradient(to right, transparent, ${cat.accent}30, transparent)`, marginTop: '1.25rem' }} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

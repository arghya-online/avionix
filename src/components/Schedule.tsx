import { motion } from 'framer-motion'
import { Clock, Info } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.72, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

const schedule = [
  {
    day: 'Day 01', date: '28th August', weekday: 'Thursday',
    time: '4:30 PM onwards', title: 'Inauguration and Tech Talk',
    accent: '#FF5C1A', num: '01',
  },
  {
    day: 'Day 02', date: '29th August', weekday: 'Friday',
    time: '9:00 AM onwards', title: 'Competition Events',
    accent: '#FFB020', num: '02',
  },
]

export default function Schedule() {
  return (
    <section className="section-pad bg-pattern-grid" style={{ background: 'var(--deep)', position: 'relative' }}>
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 1.5rem' }}>

        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
          className="stamp" style={{ marginBottom: '1.25rem' }}
        >
          Schedule
        </motion.div>

        <motion.h2
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
          className="font-orbitron"
          style={{
            fontSize: 'clamp(1.8rem, 4.5vw, 3rem)', fontWeight: 900,
            letterSpacing: '0.03em', color: 'var(--ivory)', marginBottom: '2.5rem',
          }}
        >
          Event <span className="text-amber">Timeline</span>
        </motion.h2>

        {/* Timeline */}
        <div style={{ position: 'relative', paddingLeft: 'clamp(2.5rem, 8vw, 3.5rem)' }}>

          {/* Vertical line */}
          <div aria-hidden="true" style={{
            position: 'absolute', left: 17, top: 10, bottom: 56,
            width: 1,
            background: 'linear-gradient(to bottom, var(--fire), var(--amber), rgba(255,176,32,0.1))',
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {schedule.map((day, di) => (
              <motion.div
                key={day.day}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={di + 2}
                style={{ position: 'relative' }}
              >
                {/* Node dot */}
                <div style={{
                  position: 'absolute', left: -42, top: '50%', transform: 'translateY(-50%)',
                  width: 36, height: 36, borderRadius: 8,
                  background: `${day.accent}18`,
                  border: `1px solid ${day.accent}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <span className="font-orbitron" style={{ fontSize: '0.6rem', fontWeight: 900, color: day.accent }}>
                    {day.num}
                  </span>
                </div>

                {/* Card */}
                <div
                  className="panel schedule-card bg-pattern-hud"
                  style={{ padding: '1.25rem 1.5rem' }}
                >
                  {/* Top strip */}
                  <div style={{ height: 2, background: `linear-gradient(to right, ${day.accent}, transparent)`, margin: '-1.25rem -1.5rem 1rem' }} />

                  {/* Date row */}
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.65rem', marginBottom: '0.6rem', flexWrap: 'wrap' }}>
                    <span className="font-orbitron" style={{
                      fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em',
                      color: day.accent, textTransform: 'uppercase',
                    }}>
                      {day.day}
                    </span>
                    <span className="font-rajdhani" style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--ivory)' }}>
                      {day.date}
                    </span>
                    <span style={{ fontSize: '0.78rem', color: 'var(--ash)' }}>{day.weekday}</span>
                  </div>

                  {/* Time + event */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
                    <Clock size={13} color={day.accent} style={{ flexShrink: 0 }} />
                    <span className="font-hud" style={{ fontSize: '0.73rem', color: day.accent, letterSpacing: '0.05em', flexShrink: 0 }}>
                      {day.time}
                    </span>
                    <span style={{ fontSize: '0.88rem', color: 'rgba(240,230,211,0.8)' }}>
                      {day.title}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Extension note */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={4}
              className="panel"
              style={{ padding: '0.9rem 1.25rem', display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}
            >
              <Info size={14} color="var(--amber)" style={{ flexShrink: 0, marginTop: 2 }} />
              <p style={{ fontSize: '0.82rem', color: 'var(--smoke)', lineHeight: 1.7 }}>
                Competition may extend to{' '}
                <strong style={{ color: 'var(--ivory)' }}>30th August</strong>{' '}
                depending on number of registrations and event timing.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

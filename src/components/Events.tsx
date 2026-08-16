import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Shield, Presentation, Zap, Package, Grid3x3, Camera } from 'lucide-react'
import enduranceImg from '../assets/endurance-race.png'
import hoverImg from '../assets/hover-deliver.png'
import gravityImg from '../assets/gravity-grid.png'
import workshopImg from '../assets/drone-workshop.png'
import venueImg from '../assets/venue.png'
import droneShotImg from '../assets/drone-shot-aerial.png'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

interface ScoreRow { label: string; marks: number | string; bold?: boolean }

interface Event {
  id: string; num: string; icon: React.ReactNode
  title: string; tag: string; tagColor: string; accent: string
  summary: string; imgFile: string; imgAlt: string
  scores?: ScoreRow[]; extraInfo?: string
}

const events: Event[] = [
  {
    id: 'inspection', num: '01', icon: <Shield size={18} />,
    title: 'Technical Inspection', tag: 'Both', tagColor: '#FFB020', accent: '#FFB020',
    summary: 'Drone weight must be under 2 kg. Diagonal motor-shaft to motor-shaft near 650 mm. All components inspected by officials.',
    imgFile: venueImg,
    imgAlt: 'Technical inspection area',
    scores: [
      { label: 'Weight of the Drone', marks: 10 },
      { label: 'Dimension of the Drone', marks: 10 },
      { label: 'Components of the Drone', marks: 10 },
      { label: 'Total', marks: 30, bold: true },
    ],
  },
  {
    id: 'presentation', num: '02', icon: <Presentation size={18} />,
    title: 'Innovation & Business Presentation', tag: 'Both', tagColor: '#FFB020', accent: '#FF8C42',
    summary: 'Present your drone covering problem statement, technical specs, system architecture, business model, market analysis, and future scope.',
    imgFile: workshopImg,
    imgAlt: 'Business presentation',
    scores: [
      { label: 'Problem Identification & Solution Relevance', marks: 5 },
      { label: 'Innovation & Creativity', marks: 10 },
      { label: 'Technical Design & Engineering Feasibility', marks: 15 },
      { label: 'Practical Implementation & Feasibility', marks: 10 },
      { label: 'Business Model & Commercial Viability', marks: 10 },
      { label: 'Market Potential & Scalability', marks: 10 },
      { label: 'Presentation Quality & Communication', marks: 5 },
      { label: 'Response to Judges\' Questions (Q&A)', marks: 5 },
      { label: 'Total', marks: 70, bold: true },
    ],
  },
  {
    id: 'endurance', num: '03', icon: <Zap size={18} />,
    title: 'Endurance Race', tag: 'Both', tagColor: '#FFB020', accent: '#FF5C1A',
    summary: '7-obstacle course. Complete the course then fly back over every obstacle to the start. Time is the tiebreaker.',
    imgFile: enduranceImg,
    imgAlt: 'Drone obstacle race course',
    scores: [
      { label: '7 Obstacles (10 marks each)', marks: 70 },
      { label: 'Return Back to Starting Point', marks: 30 },
      { label: 'Total', marks: 100, bold: true },
    ],
  },
  {
    id: 'hover', num: '04', icon: <Package size={18} />,
    title: 'Hover & Deliver', tag: 'Advanced', tagColor: '#FF5C1A', accent: '#FF5C1A',
    summary: 'Carry a payload from point A to B. Judged on weight-to-payload ratio, distance from drop location, and flight stability.',
    imgFile: hoverImg,
    imgAlt: 'Drone carrying payload',
    extraInfo: 'Judged on: weight-to-payload ratio · distance from drop zone · flight stability',
  },
  {
    id: 'gravity', num: '05', icon: <Grid3x3 size={18} />,
    title: 'Gravity Grid', tag: 'Open', tagColor: '#FF8C42', accent: '#FFE228',
    summary: 'Guide a ball through a horizontally inclined maze board using only your drone\'s thrust. Fastest team to hole the ball wins.',
    imgFile: gravityImg,
    imgAlt: 'Illuminated maze board',
    extraInfo: 'No physical contact with the board. Pure throttle control. First to finish wins.',
  },
  {
    id: 'shots', num: '06', icon: <Camera size={18} />,
    title: 'Drone Shots', tag: 'Open', tagColor: '#FF8C42', accent: '#38BDF8',
    summary: 'Submit photos taken exclusively from a drone. Best photo wins - judged on composition, clarity, and artistic impact.',
    imgFile: droneShotImg,
    imgAlt: 'Aerial drone photography',
    extraInfo: 'Submit your single best aerial photograph taken from a drone.',
  },
]

function ScoreTable({ rows, accent }: { rows: ScoreRow[]; accent: string }) {
  return (
    <div style={{ marginTop: '0.75rem', borderRadius: 6, overflow: 'hidden', border: '1px solid rgba(255,176,32,0.1)' }}>
      {rows.map((row, i) => (
        <div key={i} style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '0.6rem 0.9rem',
          background: row.bold ? `${accent}0F` : i % 2 === 0 ? 'rgba(255,176,32,0.02)' : 'transparent',
          borderTop: i > 0 ? '1px solid rgba(255,176,32,0.06)' : 'none',
        }}>
          <span style={{ fontSize: '0.78rem', color: row.bold ? 'var(--ivory)' : 'var(--smoke)', fontWeight: row.bold ? 700 : 400 }}>
            {row.label}
          </span>
          <span className="font-hud" style={{
            fontSize: row.bold ? '0.95rem' : '0.8rem', fontWeight: row.bold ? 700 : 500,
            color: row.bold ? accent : 'rgba(240,230,211,0.7)', letterSpacing: '0.04em',
          }}>
            {row.marks}
          </span>
        </div>
      ))}
    </div>
  )
}

function EventCard({ ev, index }: { ev: Event; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={index}
      layout
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      <motion.div layout className="panel" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%' }}>

        {/* Top color strip */}
        <div style={{ height: 3, background: `linear-gradient(to right, ${ev.accent}, transparent 70%)` }} />

        {/* Image Header */}
        <div 
          style={{
            height: 140, position: 'relative', overflow: 'hidden',
            background: 'var(--raised)',
            flexShrink: 0,
          }}
        >
          <img
            src={ev.imgFile}
            alt={ev.imgAlt}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />

          {/* Gradient overlay */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to bottom, rgba(12,8,5,0.15) 0%, rgba(12,8,5,0.75) 100%)',
          }} />

          {/* Icon + Tag */}
          <div style={{ position: 'absolute', bottom: '0.6rem', left: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{
              width: 32, height: 32, borderRadius: 6, flexShrink: 0,
              background: `${ev.accent}20`, border: `1px solid ${ev.accent}40`,
              display: 'flex', alignItems: 'center', justifyContent: 'center', color: ev.accent,
            }}>
              {ev.icon}
            </div>
            <span className="font-hud" style={{ fontSize: '0.6rem', color: `${ev.tagColor}90`, letterSpacing: '0.1em' }}>
              {ev.tag}
            </span>
          </div>

          {/* Watermark number */}
          <div className="font-orbitron" aria-hidden="true" style={{
            position: 'absolute', bottom: '0.25rem', right: '0.75rem',
            fontSize: '2.4rem', fontWeight: 900, color: `${ev.accent}15`, lineHeight: 1, userSelect: 'none',
          }}>
            {ev.num}
          </div>
        </div>

        {/* Text content */}
        <div style={{ padding: '1rem 1.1rem 0', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          <h3 className="font-rajdhani" style={{
            fontSize: '1.05rem', fontWeight: 700, color: 'var(--ivory)',
            marginBottom: '0.4rem', letterSpacing: '0.02em', lineHeight: 1.3,
          }}>
            {ev.title}
          </h3>
          <p style={{ fontSize: '0.82rem', color: 'var(--smoke)', lineHeight: 1.65, marginBottom: '0.75rem' }}>
            {ev.summary}
          </p>
        </div>

        {/* Expand button - pushed to bottom baseline */}
        <button
          id={`event-expand-${ev.id}`}
          aria-expanded={open}
          onClick={() => setOpen(o => !o)}
          style={{
            display: 'flex', alignItems: 'center', gap: '0.4rem',
            width: '100%', padding: '0.75rem 1.1rem',
            background: 'none', border: 'none', cursor: 'pointer',
            borderTop: '1px solid rgba(255,176,32,0.07)', marginTop: 'auto',
            color: ev.accent, fontSize: '0.68rem', fontWeight: 700,
            letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'Rajdhani, sans-serif',
            transition: 'background 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = `${ev.accent}0A` }}
          onMouseLeave={e => { e.currentTarget.style.background = 'none' }}
        >
          <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.28 }}>
            <ChevronDown size={13} />
          </motion.span>
          {open ? 'Collapse' : 'Rules & Scoring'}
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="detail"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              style={{ overflow: 'hidden' }}
            >
              <div style={{ padding: '0 1.1rem 1.1rem' }}>
                {ev.extraInfo && (
                  <p style={{
                    fontSize: '0.78rem', color: `${ev.accent}CC`,
                    background: `${ev.accent}0C`, borderRadius: 6,
                    padding: '0.55rem 0.85rem', marginBottom: '0.6rem',
                    border: `1px solid ${ev.accent}18`,
                    fontFamily: 'JetBrains Mono, monospace', lineHeight: 1.65,
                  }}>
                    {ev.extraInfo}
                  </p>
                )}
                {ev.scores && <ScoreTable rows={ev.scores} accent={ev.accent} />}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}

export default function Events() {
  return (
    <section className="section-pad bg-pattern-dots" style={{ background: 'var(--abyss)', position: 'relative' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 1.5rem' }}>

        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
          className="stamp" style={{ marginBottom: '1.25rem' }}
        >
          Events
        </motion.div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '0.75rem' }}>
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
            className="font-orbitron"
            style={{ fontSize: 'clamp(1.8rem, 4.5vw, 3rem)', fontWeight: 900, letterSpacing: '0.03em', color: 'var(--ivory)' }}
          >
            All <span className="text-fire">Events</span>
          </motion.h2>
          <motion.p
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}
            style={{ fontSize: '0.82rem', color: 'var(--ash)', lineHeight: 1.6 }}
          >
            Tap any card to reveal rules & scoring.
          </motion.p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1.25rem',
          alignItems: 'stretch',
        }}>
          {events.map((ev, i) => <EventCard key={ev.id} ev={ev} index={i + 3} />)}
        </div>
      </div>
    </section>
  )
}

import { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { Rocket, Star, Volleyball, Boba } from './DoodleElements'
import PageMarker from './PageMarker'

const experiences = [
  {
    company: 'Scotiabank',
    role: 'Data Science Intern',
    location: 'Toronto, ON',
    period: 'Jan 2026 — Present',
    color: '#4a90d9',
    bullets: [
      'Automated model performance monitoring (KPI tracking, confusion matrices, accuracy reporting), cutting manual Excel reporting from 2–3 hours to under 5 minutes.',
      'Built a mortgage pricing simulation with a configurable Pyomo optimization model (profit, volume & RoRWA constraints) to find margin-maximizing rate strategies across 100,000+ customers.',
      'Created a mortgage-renewal sensitivity model using K-Means to segment ~20,000 monthly customers into VH/H/M/L tiers, enabling personalized rate offers to improve retention.',
    ],
    tags: ['Python', 'Pyomo', 'K-Means', 'scikit-learn'],
  },
  {
    company: 'AgSights',
    role: 'Machine Learning Engineer',
    location: 'Elora, ON',
    period: 'Nov 2025 — Jan 2026',
    color: '#6bc47a',
    bullets: [
      'Built a voice-to-database pipeline with Whisper (ASR) + spaCy for entity extraction, achieving 91% entity accuracy and cutting manual data entry ~60% in field trials.',
    ],
    tags: ['Whisper', 'spaCy', 'NLP', 'Python'],
  },
  {
    company: 'Lyyvora',
    role: 'Machine Learning Engineer',
    location: 'Remote',
    period: 'May 2026 — Present',
    color: '#f0a86f',
    bullets: [
      'Built a web scraper aggregating 3,000+ podcast outreach candidates and an LLM pipeline (Groq) that auto-generates and sends personalized marketing emails, eliminating manual outreach drafting entirely.',
    ],
    tags: ['Python', 'Groq', 'LLM', 'Web Scraping'],
  },
]

/* Variants so each card's internals cascade in once the row scrolls into view. */
const cardVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.08 } },
}
const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] } },
}

function ExperienceCard({ exp }) {
  return (
    <div className="relative" style={{ marginBottom: '52px' }}>
      {/* Timeline node — lights up as it scrolls into view */}
      <motion.div
        initial={{ scale: 0, boxShadow: `0 0 0 0px ${exp.color}00` }}
        whileInView={{
          scale: 1,
          boxShadow: [`0 0 0 0px ${exp.color}66`, `0 0 0 10px ${exp.color}00`],
        }}
        viewport={{ once: true, margin: '-45% 0px -45% 0px' }}
        transition={{ duration: 0.6, ease: 'backOut' }}
        className="absolute"
        style={{
          left: '20px',
          top: '16px',
          width: '20px',
          height: '20px',
          marginLeft: '-10px',
          borderRadius: '50%',
          background: '#fafaf7',
          border: `3px solid ${exp.color}`,
          zIndex: 2,
        }}
      >
        <span style={{ position: 'absolute', inset: '3px', borderRadius: '50%', background: exp.color }} />
      </motion.div>

      {/* Card */}
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-90px' }}
        whileHover={{ rotate: 0, y: -5, transition: { duration: 0.2 } }}
        className="relative"
        style={{
          marginLeft: '56px',
          rotate: -0.6,
          background: '#ffffff',
          border: '2px dashed #a8c4e0',
          borderRadius: '6px',
          boxShadow: `4px 5px 0 ${exp.color}22`,
          padding: '24px 26px 22px',
          borderLeft: `5px solid ${exp.color}`,
        }}
      >
        {/* Tape */}
        <div className="tape-strip" style={{ left: '24%', transform: 'translateX(-50%) rotate(-2deg)' }} />

        {/* Connector notch pointing back at the timeline */}
        <span
          aria-hidden="true"
          style={{
            position: 'absolute',
            left: '-9px',
            top: '18px',
            width: '14px',
            height: '14px',
            background: '#ffffff',
            borderLeft: '2px dashed #a8c4e0',
            borderBottom: '2px dashed #a8c4e0',
            transform: 'rotate(45deg)',
          }}
        />

        <motion.div variants={fadeUp} className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 mb-1">
          <h3 className="font-caveat font-bold" style={{ fontSize: '28px', color: '#1a1a2e', lineHeight: 1.1 }}>
            {exp.role}
          </h3>
          <span
            className="font-caveat font-semibold text-sm px-3 py-0.5 rounded-full whitespace-nowrap"
            style={{ backgroundColor: `${exp.color}18`, color: exp.color, border: `1.5px dashed ${exp.color}66` }}
          >
            {exp.period}
          </span>
        </motion.div>

        <motion.p variants={fadeUp} className="font-caveat font-bold mb-4" style={{ fontSize: '19px', color: exp.color }}>
          {exp.company} <span style={{ color: '#718096', fontWeight: 400 }}>· {exp.location}</span>
        </motion.p>

        <ul className="space-y-2 mb-4">
          {exp.bullets.map((b, i) => (
            <motion.li
              key={i}
              variants={fadeUp}
              className="flex gap-2 text-sm leading-relaxed"
              style={{ color: '#4a5568', fontFamily: "'Nunito', sans-serif", lineHeight: 1.6 }}
            >
              <span style={{ color: exp.color, flexShrink: 0 }}>✦</span>
              <span>{b}</span>
            </motion.li>
          ))}
        </ul>

        <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
          {exp.tags.map((t) => (
            <span
              key={t}
              className="text-xs font-semibold px-2 py-0.5 rounded-full"
              style={{
                backgroundColor: `${exp.color}14`,
                color: exp.color,
                border: `1px solid ${exp.color}40`,
                fontFamily: "'Nunito', sans-serif",
              }}
            >
              {t}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

function ExperienceSection() {
  const trackRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start 0.8', 'end 0.6'],
  })
  const progress = useSpring(scrollYProgress, { stiffness: 80, damping: 24, restDelta: 0.001 })
  // Leading "ink" marker that glides down the timeline as you scroll.
  const markerTop = useTransform(progress, [0, 1], ['0%', '100%'])
  const markerOpacity = useTransform(progress, [0, 0.04, 0.96, 1], [0, 1, 1, 0])

  return (
    <section id="experience" className="py-20 relative overflow-hidden" style={{ paddingLeft: 'var(--gutter)' }}>
      <PageMarker number={2} label="experience" color="#4a90d9" />
      {/* Decorative doodles */}
      <div className="absolute pointer-events-none" style={{ top: '6%', right: '5%' }}>
        <Rocket />
      </div>
      <div className="absolute pointer-events-none" style={{ top: '45%', left: '3%' }}>
        <Boba size={36} />
      </div>
      <div className="absolute pointer-events-none" style={{ bottom: '10%', right: '4%' }}>
        <Volleyball size={42} />
      </div>
      <Star style={{ position: 'absolute', top: '10%', left: '7%' }} size={16} color="#f0a86f" />
      <Star style={{ position: 'absolute', bottom: '12%', right: '9%' }} size={20} />

      <div className="max-w-3xl mx-auto px-6">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="font-caveat font-bold inline-block" style={{ fontSize: 'clamp(40px, 6vw, 60px)', color: '#1a1a2e' }}>
            <span className="highlight-underline">Where I&apos;ve Worked</span>
          </h2>
          <p
            className="mt-4 text-base md:text-lg max-w-xl mx-auto"
            style={{ color: '#4a5568', fontFamily: "'Nunito', sans-serif" }}
          >
            Internships and roles building ML systems and data products
          </p>
        </motion.div>

        {/* Timeline */}
        <div ref={trackRef} className="relative">
          {/* Static dotted track */}
          <div
            aria-hidden="true"
            className="absolute"
            style={{ left: '20px', top: '16px', bottom: '16px', width: '0', borderLeft: '2px dashed #c8d6e8' }}
          />
          {/* Scroll-drawn progress line */}
          <motion.div
            aria-hidden="true"
            className="absolute"
            style={{
              left: '19px',
              top: '16px',
              bottom: '16px',
              width: '3px',
              borderRadius: '3px',
              background: 'linear-gradient(#4a90d9, #6bc47a, #f0a86f)',
              transformOrigin: 'top',
              scaleY: progress,
            }}
          />
          {/* Travelling ink marker at the leading edge of the drawn line */}
          <motion.div
            aria-hidden="true"
            className="absolute"
            style={{
              left: '20px',
              top: markerTop,
              opacity: markerOpacity,
              marginLeft: '-7px',
              marginTop: '8px',
              width: '14px',
              height: '14px',
              borderRadius: '50%',
              background: '#4a90d9',
              boxShadow: '0 0 0 5px rgba(74,144,217,0.18), 0 0 12px rgba(74,144,217,0.5)',
              zIndex: 3,
            }}
          />

          {experiences.map((exp) => (
            <ExperienceCard key={exp.company} exp={exp} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection

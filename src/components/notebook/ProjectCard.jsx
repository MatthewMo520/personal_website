import { useState } from 'react'
import { motion } from 'framer-motion'

const techColors = {
  'Python': '#4a90d9',
  'Scikit-learn': '#f0a86f',
  'NLTK': '#6bc47a',
  'Pandas': '#f5c842',
  'TF-IDF': '#f09696',
  'Matplotlib': '#4a90d9',
  'React': '#4a90d9',
  'Flask': '#6bc47a',
  'Selenium': '#f0a86f',
  'BeautifulSoup': '#f5c842',
  'Streamlit': '#f09696',
  'Plotly': '#4a90d9',
  'MongoDB': '#6bc47a',
  'Express': '#f0a86f',
  'YOLOv8': '#f5c842',
  'Tailwind CSS': '#4a90d9',
  'SQLAlchemy': '#f0a86f',
}

const rotations = [-1.5, 0, 1.5, -1, 1]

const tapeVariants = [
  { left: '28%', transform: 'translateX(-50%) rotate(-2deg)' },
  { left: '52%', transform: 'translateX(-50%) rotate(0.5deg)' },
  { left: '68%', transform: 'translateX(-50%) rotate(2.5deg)' },
  { left: '38%', transform: 'translateX(-50%) rotate(-1.5deg)' },
  { left: '60%', transform: 'translateX(-50%) rotate(1.5deg)' },
]

const faceBase = {
  position: 'absolute',
  inset: 0,
  backfaceVisibility: 'hidden',
  WebkitBackfaceVisibility: 'hidden',
  background: 'var(--card)',
  border: '2px dashed var(--line)',
  borderRadius: '6px',
  overflow: 'hidden',
}

function TechBadge({ tech }) {
  const c = techColors[tech] || '#4a90d9'
  return (
    <span
      className="text-xs font-semibold px-2 py-0.5 rounded-full flex items-center gap-1"
      style={{ backgroundColor: `${c}18`, color: c, border: `1px solid ${c}40`, fontFamily: "'Nunito', sans-serif" }}
    >
      <span className="inline-block rounded-full" style={{ width: '6px', height: '6px', backgroundColor: c, flexShrink: 0 }} />
      {tech}
    </span>
  )
}

function ProjectCard({ project, index }) {
  const [flipped, setFlipped] = useState(false)
  const rotation = rotations[index % rotations.length]
  const tape = tapeVariants[index % tapeVariants.length]

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -8, transition: { duration: 0.25 } }}
      onClick={() => setFlipped((f) => !f)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          setFlipped((f) => !f)
        }
      }}
      role="button"
      tabIndex={0}
      aria-pressed={flipped}
      aria-label={`${project.title} — click to ${flipped ? 'see photo' : 'read details'}`}
      className="cursor-pointer"
      style={{ rotate: rotation, position: 'relative', height: '430px', perspective: '1500px' }}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 26 }}
        style={{ position: 'relative', width: '100%', height: '100%', transformStyle: 'preserve-3d' }}
      >
        {/* ---------- FRONT ---------- */}
        <div style={{ ...faceBase, paddingTop: '20px' }}>
          <div className="tape-strip" style={tape} />

          {/* Polaroid photo */}
          <div style={{ padding: '14px 14px 4px' }}>
            <div
              style={{
                background: '#ffffff',
                padding: '7px 7px 12px',
                border: '1px solid #e6e1d8',
                borderRadius: '3px',
                boxShadow: '0 2px 8px rgba(26,26,46,0.12)',
                transform: 'rotate(-1deg)',
              }}
            >
              <div className="overflow-hidden" style={{ borderRadius: '2px', background: '#f0ede6' }}>
                <img src={project.image} alt={project.title} loading="lazy" className="w-full h-40 object-cover" style={{ display: 'block' }} />
              </div>
              <p className="font-caveat font-bold text-center mt-2" style={{ fontSize: '15px', color: 'var(--body)', lineHeight: 1 }}>
                {project.category}
              </p>
            </div>
          </div>

          <div className="px-5 pt-1">
            <h3 className="font-caveat font-bold mb-1" style={{ fontSize: '22px', color: 'var(--ink)', lineHeight: 1.2 }}>
              {project.title}
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--body)', fontFamily: "'Nunito', sans-serif", lineHeight: 1.55 }}>
              {project.description.length > 96 ? project.description.slice(0, 96) + '…' : project.description}
            </p>
          </div>

          {/* flip hint */}
          <div
            className="absolute font-caveat font-bold flex items-center gap-1"
            style={{ bottom: '12px', right: '16px', color: '#4a90d9', fontSize: '15px' }}
          >
            flip ↻
          </div>

          {project.featured && (
            <div
              className="absolute top-3 right-3 font-caveat font-bold text-xs px-2 py-1 rounded"
              style={{ backgroundColor: '#f5c842', color: 'var(--ink)', transform: 'rotate(2deg)' }}
            >
              ★ Featured
            </div>
          )}
        </div>

        {/* ---------- BACK ---------- */}
        <div
          style={{
            ...faceBase,
            transform: 'rotateY(180deg)',
            background: 'var(--card)',
            borderColor: '#e0c9a0',
            display: 'flex',
            flexDirection: 'column',
            padding: '22px 20px 16px',
          }}
        >
          <div className="tape-strip" style={{ left: '50%', transform: 'translateX(-50%) rotate(-1deg)', background: 'rgba(224,201,160,0.6)' }} />

          <h3 className="font-caveat font-bold mb-1" style={{ fontSize: '24px', color: 'var(--ink)', lineHeight: 1.1 }}>
            {project.title}
          </h3>
          {project.impact && (
            <p className="font-caveat font-bold mb-2" style={{ fontSize: '15px', color: '#f0a86f' }}>
              ★ {project.impact}
            </p>
          )}

          <p
            className="text-sm leading-relaxed mb-3"
            style={{ color: 'var(--body)', fontFamily: "'Nunito', sans-serif", lineHeight: 1.55, overflowY: 'auto', flex: '1 1 auto', minHeight: 0 }}
          >
            {project.detailedDescription || project.description}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.tech.map((t) => <TechBadge key={t} tech={t} />)}
          </div>

          {/* dashed rule */}
          <div className="mb-2" style={{ height: '1px', background: 'repeating-linear-gradient(90deg, #e0c9a0 0 5px, transparent 5px 10px)' }} />

          <div className="flex flex-wrap gap-4 items-center" onClick={(e) => e.stopPropagation()}>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="font-caveat font-bold text-base" style={{ color: '#4a90d9' }}>
              GitHub →
            </a>
            {project.liveLink && (
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="font-caveat font-bold text-base" style={{ color: '#6bc47a' }}>
                Live Demo →
              </a>
            )}
            {project.devpost && (
              <a href={project.devpost} target="_blank" rel="noopener noreferrer" className="font-caveat font-bold text-base" style={{ color: '#f0a86f' }}>
                Devpost →
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default ProjectCard

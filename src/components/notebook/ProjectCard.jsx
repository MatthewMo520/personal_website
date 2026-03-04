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

function ProjectCard({ project, index, onClick }) {
  const rotation = rotations[index % rotations.length]
  const tape = tapeVariants[index % tapeVariants.length]

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{
        y: -8,
        rotate: 0,
        boxShadow: '6px 12px 40px rgba(74, 144, 217, 0.18)',
        transition: { duration: 0.25 }
      }}
      onClick={() => onClick(project)}
      className="sketch-card cursor-pointer"
      style={{
        rotate: rotation,
        position: 'relative',
        paddingTop: '20px',
        background: '#ffffff',
        border: '2px dashed #a8c4e0',
        borderRadius: '6px',
      }}
      role="button"
      tabIndex={0}
      onKeyDown={e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onClick(project)
        }
      }}
    >
      {/* Tape strip — varied position per card */}
      <div className="tape-strip" style={tape} />

      {/* Project image */}
      <div className="overflow-hidden" style={{ borderRadius: '3px 3px 0 0', margin: '0' }}>
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-44 object-cover"
          style={{ borderBottom: '2px dashed #a8c4e0' }}
        />
      </div>

      {/* Card content */}
      <div className="p-5">
        {/* Title */}
        <h3
          className="font-caveat font-bold mb-2"
          style={{ fontSize: '22px', color: '#1a1a2e', lineHeight: 1.2 }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p
          className="text-sm mb-4 leading-relaxed"
          style={{ color: '#4a5568', fontFamily: "'Nunito', sans-serif", lineHeight: 1.6 }}
        >
          {project.description.length > 120
            ? project.description.slice(0, 120) + '…'
            : project.description}
        </p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.slice(0, 5).map((tech, i) => (
            <span
              key={i}
              className="text-xs font-semibold px-2 py-0.5 rounded-full flex items-center gap-1"
              style={{
                backgroundColor: `${techColors[tech] || '#4a90d9'}18`,
                color: techColors[tech] || '#4a90d9',
                border: `1px solid ${techColors[tech] || '#4a90d9'}40`,
                fontFamily: "'Nunito', sans-serif"
              }}
            >
              <span
                className="inline-block rounded-full"
                style={{
                  width: '6px',
                  height: '6px',
                  backgroundColor: techColors[tech] || '#4a90d9',
                  flexShrink: 0
                }}
              />
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-4 text-sm font-semibold items-center">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={e => e.stopPropagation()}
            className="font-caveat text-base transition-colors duration-200 flex items-center gap-1"
            style={{ color: '#4a90d9' }}
            onMouseEnter={e => { e.currentTarget.style.color = '#1a1a2e' }}
            onMouseLeave={e => { e.currentTarget.style.color = '#4a90d9' }}
          >
            View on GitHub →
          </a>
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
              className="font-caveat text-base transition-colors duration-200"
              style={{ color: '#6bc47a' }}
              onMouseEnter={e => { e.currentTarget.style.color = '#1a1a2e' }}
              onMouseLeave={e => { e.currentTarget.style.color = '#6bc47a' }}
            >
              Live Demo →
            </a>
          )}
          {project.devpost && (
            <a
              href={project.devpost}
              target="_blank"
              rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
              className="font-caveat text-base transition-colors duration-200"
              style={{ color: '#f0a86f' }}
              onMouseEnter={e => { e.currentTarget.style.color = '#1a1a2e' }}
              onMouseLeave={e => { e.currentTarget.style.color = '#f0a86f' }}
            >
              Devpost →
            </a>
          )}
        </div>

        {/* Featured badge */}
        {project.featured && (
          <div
            className="absolute top-3 right-3 font-caveat font-bold text-xs px-2 py-1 rounded"
            style={{
              backgroundColor: '#f5c842',
              color: '#1a1a2e',
              transform: 'rotate(2deg)'
            }}
          >
            ★ Featured
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default ProjectCard

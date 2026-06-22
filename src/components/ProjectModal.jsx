import { useEffect } from 'react'

const headingStyle = {
  color: '#4a90d9',
  fontFamily: "'Caveat', cursive",
  fontWeight: 700,
}

const bodyStyle = { color: '#4a5568', fontFamily: "'Nunito', sans-serif" }

function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden'

      // Close on Escape key
      const handleEscape = (e) => {
        if (e.key === 'Escape') {
          onClose()
        }
      }
      document.addEventListener('keydown', handleEscape)

      return () => {
        document.body.style.overflow = 'unset'
        document.removeEventListener('keydown', handleEscape)
      }
    }
  }, [isOpen, onClose])

  if (!isOpen || !project) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn"
      style={{ backgroundColor: 'rgba(26, 26, 46, 0.55)', backdropFilter: 'blur(4px)' }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        style={{
          backgroundColor: '#fafaf7',
          border: '2px dashed #a8c4e0',
          borderRadius: '8px',
          boxShadow: '6px 8px 0 rgba(26,26,46,0.18)',
          animation: 'scaleIn 0.3s ease-out',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
          style={{
            backgroundColor: '#ffffff',
            color: '#1a1a2e',
            border: '2px solid #1a1a2e',
            boxShadow: '2px 2px 0 #1a1a2e',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#4a90d9'
            e.currentTarget.style.color = '#ffffff'
            e.currentTarget.style.transform = 'rotate(90deg)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#ffffff'
            e.currentTarget.style.color = '#1a1a2e'
            e.currentTarget.style.transform = 'rotate(0deg)'
          }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Project Image */}
        {project.image && (
          <div className="relative h-64 md:h-80 overflow-hidden" style={{ borderRadius: '6px 6px 0 0' }}>
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, rgba(250, 250, 247, 0.9), transparent 55%)' }}
            ></div>
            {project.featured && (
              <div
                className="absolute top-4 left-4 px-4 py-1 rounded-full font-caveat text-lg font-semibold"
                style={{
                  backgroundColor: '#4a90d9',
                  color: '#ffffff',
                  boxShadow: '2px 3px 0 #1a1a2e',
                }}
              >
                ★ Featured
              </div>
            )}
          </div>
        )}

        {/* Content */}
        <div className="p-8">
          {/* Title and Category */}
          <div className="mb-6">
            <h2
              id="modal-title"
              className="font-caveat font-bold mb-2"
              style={{ fontSize: 'clamp(36px, 6vw, 52px)', color: '#1a1a2e', lineHeight: 1.05 }}
            >
              {project.title}
            </h2>
            <div className="flex items-center gap-3 flex-wrap">
              <span
                className="font-caveat text-base font-semibold px-3 py-0.5 rounded-full"
                style={{
                  backgroundColor: 'rgba(74,144,217,0.12)',
                  color: '#4a90d9',
                  border: '1.5px dashed #4a90d9',
                }}
              >
                {project.category}
              </span>
              {project.completionDate && (
                <span className="text-sm" style={bodyStyle}>
                  {project.completionDate}
                </span>
              )}
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-2xl mb-2" style={headingStyle}>
              Overview
            </h3>
            <p className="leading-relaxed" style={bodyStyle}>
              {project.detailedDescription || project.description}
            </p>
          </div>

          {/* Metrics/Impact */}
          {(project.impact || project.teamSize || project.duration) && (
            <div className="mb-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                ['Impact', project.impact, '#f0a86f'],
                ['Team Size', project.teamSize, '#6bc47a'],
                ['Duration', project.duration, '#4a90d9'],
              ].filter(([, v]) => v).map(([label, value, color]) => (
                <div
                  key={label}
                  className="p-4"
                  style={{ backgroundColor: '#ffffff', border: '2px dashed #a8c4e0', borderRadius: '5px' }}
                >
                  <div className="font-caveat text-base font-bold mb-1" style={{ color }}>{label}</div>
                  <div className="text-sm" style={{ color: '#1a1a2e', fontFamily: "'Nunito', sans-serif" }}>{value}</div>
                </div>
              ))}
            </div>
          )}

          {/* Technologies */}
          <div className="mb-6">
            <h3 className="text-2xl mb-3" style={headingStyle}>
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-1.5 rounded-full text-sm font-semibold"
                  style={{
                    backgroundColor: 'rgba(74,144,217,0.08)',
                    border: '1.5px dashed #a8c4e0',
                    color: '#4a5568',
                    fontFamily: "'Nunito', sans-serif",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Features/Challenges/Learnings */}
          {(project.features || project.challenges || project.learnings) && (
            <div className="mb-6 space-y-5">
              {project.features && (
                <div>
                  <h3 className="text-2xl mb-2" style={headingStyle}>
                    Key Features
                  </h3>
                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span style={{ color: '#f0a86f' }}>★</span>
                        <span style={bodyStyle}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {project.challenges && (
                <div>
                  <h3 className="text-2xl mb-2" style={headingStyle}>
                    Challenges
                  </h3>
                  <p style={bodyStyle}>{project.challenges}</p>
                </div>
              )}
              {project.learnings && (
                <div>
                  <h3 className="text-2xl mb-2" style={headingStyle}>
                    Key Learnings
                  </h3>
                  <p style={bodyStyle}>{project.learnings}</p>
                </div>
              )}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-6" style={{ borderTop: '2px dashed #a8c4e0' }}>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View project on GitHub"
              className="flex items-center gap-2 px-6 py-3 rounded-md font-caveat text-lg font-bold transition-all duration-200"
              style={{
                border: '2px solid #1a1a2e',
                color: '#1a1a2e',
                backgroundColor: 'transparent',
                boxShadow: '3px 4px 0 #1a1a2e',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(26,26,46,0.07)'
                e.currentTarget.style.transform = 'translate(-2px, -2px)'
                e.currentTarget.style.boxShadow = '5px 6px 0 #1a1a2e'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'
                e.currentTarget.style.transform = 'translate(0, 0)'
                e.currentTarget.style.boxShadow = '3px 4px 0 #1a1a2e'
              }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"></path>
              </svg>
              View on GitHub
            </a>
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View live demo"
                className="flex items-center gap-2 px-6 py-3 rounded-md font-caveat text-lg font-bold transition-all duration-200"
                style={{
                  backgroundColor: '#4a90d9',
                  color: '#ffffff',
                  boxShadow: '3px 4px 0 #1a1a2e',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translate(-2px, -2px)'
                  e.currentTarget.style.boxShadow = '5px 6px 0 #1a1a2e'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translate(0, 0)'
                  e.currentTarget.style.boxShadow = '3px 4px 0 #1a1a2e'
                }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Live Demo
              </a>
            )}
            {project.devpost && (
              <a
                href={project.devpost}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View on Devpost"
                className="flex items-center gap-2 px-6 py-3 rounded-md font-caveat text-lg font-bold transition-all duration-200"
                style={{
                  backgroundColor: '#6bc47a',
                  color: '#ffffff',
                  boxShadow: '3px 4px 0 #1a1a2e',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translate(-2px, -2px)'
                  e.currentTarget.style.boxShadow = '5px 6px 0 #1a1a2e'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translate(0, 0)'
                  e.currentTarget.style.boxShadow = '3px 4px 0 #1a1a2e'
                }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
                </svg>
                Devpost
              </a>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scaleIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  )
}

export default ProjectModal

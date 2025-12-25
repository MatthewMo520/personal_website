import { useEffect } from 'react'

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
      style={{ backgroundColor: 'rgba(10, 25, 41, 0.95)' }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-lg border animate-scaleIn"
        style={{
          backgroundColor: '#0A1929',
          borderColor: '#D4A574',
          animation: 'scaleIn 0.3s ease-out'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
          style={{
            backgroundColor: '#2B3F5C',
            color: '#E5E7EB'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#D4A574'
            e.currentTarget.style.color = '#0A1929'
            e.currentTarget.style.transform = 'rotate(90deg)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#2B3F5C'
            e.currentTarget.style.color = '#E5E7EB'
            e.currentTarget.style.transform = 'rotate(0deg)'
          }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Project Image */}
        {project.image && (
          <div className="relative h-64 md:h-80 overflow-hidden rounded-t-lg">
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to top, rgba(10, 25, 41, 0.8), transparent)'
              }}
            ></div>
            {project.featured && (
              <div
                className="absolute top-4 left-4 px-4 py-2 rounded-md text-sm font-semibold"
                style={{
                  backgroundColor: '#D4A574',
                  color: '#0A1929'
                }}
              >
                Featured
              </div>
            )}
          </div>
        )}

        {/* Content */}
        <div className="p-8">
          {/* Title and Category */}
          <div className="mb-6">
            <h2 id="modal-title" className="text-3xl md:text-4xl font-bold text-white mb-2">
              {project.title}
            </h2>
            <div className="flex items-center gap-3">
              <span
                className="px-3 py-1 rounded text-sm font-semibold"
                style={{
                  backgroundColor: '#2B3F5C',
                  color: '#D4A574'
                }}
              >
                {project.category}
              </span>
              {project.completionDate && (
                <span className="text-sm" style={{ color: '#9CA3AF' }}>
                  {project.completionDate}
                </span>
              )}
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3" style={{ color: '#D4A574' }}>
              Overview
            </h3>
            <p className="leading-relaxed" style={{ color: '#E5E7EB' }}>
              {project.detailedDescription || project.description}
            </p>
          </div>

          {/* Metrics/Impact */}
          {(project.impact || project.teamSize || project.duration) && (
            <div className="mb-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.impact && (
                <div
                  className="p-4 rounded-lg"
                  style={{ backgroundColor: '#1A2942', border: '1px solid #2B3F5C' }}
                >
                  <div className="text-xs mb-1" style={{ color: '#9CA3AF' }}>IMPACT</div>
                  <div className="text-sm text-white">{project.impact}</div>
                </div>
              )}
              {project.teamSize && (
                <div
                  className="p-4 rounded-lg"
                  style={{ backgroundColor: '#1A2942', border: '1px solid #2B3F5C' }}
                >
                  <div className="text-xs mb-1" style={{ color: '#9CA3AF' }}>TEAM SIZE</div>
                  <div className="text-sm text-white">{project.teamSize}</div>
                </div>
              )}
              {project.duration && (
                <div
                  className="p-4 rounded-lg"
                  style={{ backgroundColor: '#1A2942', border: '1px solid #2B3F5C' }}
                >
                  <div className="text-xs mb-1" style={{ color: '#9CA3AF' }}>DURATION</div>
                  <div className="text-sm text-white">{project.duration}</div>
                </div>
              )}
            </div>
          )}

          {/* Technologies */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3" style={{ color: '#D4A574' }}>
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-lg text-sm font-medium border"
                  style={{
                    backgroundColor: '#2B3F5C',
                    borderColor: '#5B8FB9',
                    color: '#FFFFFF'
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Features/Challenges/Learnings */}
          {(project.features || project.challenges || project.learnings) && (
            <div className="mb-6 space-y-4">
              {project.features && (
                <div>
                  <h3 className="text-xl font-semibold mb-3" style={{ color: '#D4A574' }}>
                    Key Features
                  </h3>
                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-lg" style={{ color: '#D4A574' }}>•</span>
                        <span style={{ color: '#E5E7EB' }}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {project.challenges && (
                <div>
                  <h3 className="text-xl font-semibold mb-3" style={{ color: '#D4A574' }}>
                    Challenges
                  </h3>
                  <p style={{ color: '#E5E7EB' }}>{project.challenges}</p>
                </div>
              )}
              {project.learnings && (
                <div>
                  <h3 className="text-xl font-semibold mb-3" style={{ color: '#D4A574' }}>
                    Key Learnings
                  </h3>
                  <p style={{ color: '#E5E7EB' }}>{project.learnings}</p>
                </div>
              )}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-6 border-t" style={{ borderColor: '#2B3F5C' }}>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View project on GitHub"
              className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300"
              style={{
                backgroundColor: '#2B3F5C',
                color: '#FFFFFF'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#5B8FB9'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#2B3F5C'
                e.currentTarget.style.transform = 'translateY(0)'
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
                className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300"
                style={{
                  backgroundColor: '#D4A574',
                  color: '#0A1929'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#E8B87E'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#D4A574'
                  e.currentTarget.style.transform = 'translateY(0)'
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
                className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300"
                style={{
                  backgroundColor: '#3A6B5B',
                  color: '#FFFFFF'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#557F6F'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#3A6B5B'
                  e.currentTarget.style.transform = 'translateY(0)'
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

      <style jsx>{`
        @keyframes scaleIn {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}

export default ProjectModal

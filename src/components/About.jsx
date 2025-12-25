import { useScrollAnimation } from '../hooks/useScrollAnimation'

function SkillBadge({ skill, index }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15, triggerOnce: false })

  const getProficiencyStyle = (level) => {
    switch (level) {
      case 'Advanced':
        return {
          borderColor: '#D4A574',
          borderWidth: '2px'
        }
      case 'Intermediate':
        return {
          borderLeft: '4px solid #D4A574',
          borderTop: '1px solid #5B8FB9',
          borderRight: '1px solid #5B8FB9',
          borderBottom: '1px solid #5B8FB9'
        }
      case 'Beginner':
        return {
          borderColor: '#5B8FB9',
          borderWidth: '1px'
        }
      default:
        return {
          borderColor: '#5B8FB9',
          borderWidth: '1px'
        }
    }
  }

  return (
    <div
      ref={ref}
      className={`px-4 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 cursor-pointer relative group ${isVisible ? 'scroll-visible' : 'scroll-hidden'}`}
      style={{
        backgroundColor: '#2B3F5C',
        ...getProficiencyStyle(skill.level)
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 4px 15px rgba(212, 165, 116, 0.2)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      <div className="text-white font-medium text-sm">{skill.name}</div>
      <div className="text-xs mt-1" style={{ color: '#6BA3C4' }}>{skill.category}</div>

      {/* Proficiency Tooltip */}
      <div
        className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1.5 rounded text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
        style={{
          backgroundColor: '#0A1929',
          color: '#D4A574',
          border: '1px solid #D4A574'
        }}
      >
        {skill.level}
        <div
          className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0"
          style={{
            borderLeft: '4px solid transparent',
            borderRight: '4px solid transparent',
            borderTop: '4px solid #D4A574'
          }}
        ></div>
      </div>
    </div>
  )
}

function About() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15, triggerOnce: false })

  const skills = [
    { name: 'Python', category: 'Language', level: 'Advanced' },
    { name: 'Java', category: 'Language', level: 'Intermediate' },
    { name: 'JavaScript', category: 'Language', level: 'Advanced' },
    { name: 'C/C++', category: 'Language', level: 'Intermediate' },
    { name: 'SQL', category: 'Database', level: 'Intermediate' },
    { name: 'React', category: 'Framework', level: 'Advanced' },
    { name: 'Flask', category: 'Framework', level: 'Advanced' },
    { name: 'Node.js', category: 'Runtime', level: 'Intermediate' },
    { name: 'Pandas', category: 'Library', level: 'Advanced' },
    { name: 'NumPy', category: 'Library', level: 'Advanced' },
    { name: 'Git', category: 'Tool', level: 'Advanced' },
    { name: 'Excel/VBA', category: 'Tool', level: 'Intermediate' }
  ]

  return (
    <section className="py-20 relative" style={{ backgroundColor: '#1A2942' }}>
      {/* Subtle decorative shapes */}
      <div className="absolute top-10 left-10 w-32 h-32 rounded-full opacity-[0.03]" style={{ backgroundColor: '#2B3F5C' }}></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 opacity-[0.03]" style={{ backgroundColor: '#3D5470', borderRadius: '30%' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            About Me
          </h2>
          <div className="w-20 h-1 mx-auto" style={{ backgroundColor: '#D4A574' }}></div>
        </div>

        <div ref={ref} className={`max-w-6xl mx-auto ${isVisible ? 'scroll-visible' : 'scroll-hidden'}`}>
          {/* Education Section - Full Width */}
          <div className="mb-16">
            <h3
              className="text-2xl md:text-3xl font-semibold mb-6 text-center"
              style={{ color: '#D4A574' }}
            >
              Education
            </h3>
            <div
              className="max-w-4xl mx-auto rounded-lg border p-8"
              style={{
                backgroundColor: '#0A1929',
                borderColor: '#2B3F5C'
              }}
            >
              <div className="flex items-start gap-6 mb-6">
                <div
                  className="w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    background: 'linear-gradient(135deg, #D4A574 0%, #E8B87E 100%)'
                  }}
                >
                  <svg className="w-8 h-8" style={{ color: '#0A1929' }} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-white mb-2" style={{ color: '#D4A574' }}>
                    University of Waterloo
                  </h4>
                  <p className="text-lg text-white mb-1">Bachelor of Science in Data Science</p>
                  <p className="text-sm" style={{ color: '#9CA3AF' }}>Sept 2024 - Apr 2028 (Expected)</p>
                </div>
              </div>

              <div className="mb-6">
                <h5 className="text-sm font-semibold mb-3" style={{ color: '#D4A574' }}>
                  RELEVANT COURSEWORK
                </h5>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    'Machine Learning',
                    'Data Structures & Algorithms',
                    'Statistical Analysis',
                    'Database Systems',
                    'Software Engineering',
                    'Linear Algebra'
                  ].map((course, idx) => (
                    <div
                      key={idx}
                      className="px-3 py-2 rounded text-sm text-white text-center"
                      style={{
                        backgroundColor: '#2B3F5C',
                        border: '1px solid #5B8FB9'
                      }}
                    >
                      {course}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h5 className="text-sm font-semibold mb-3" style={{ color: '#D4A574' }}>
                  ACHIEVEMENTS
                </h5>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-xl" style={{ color: '#D4A574' }}>•</span>
                    <span className="text-white">Best Beginner Hack - GeeseHacks 2024</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-xl" style={{ color: '#D4A574' }}>•</span>
                    <span className="text-white">Dean's Honours List</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Bio Section */}
            <div>
              <h3
                className="text-2xl md:text-3xl font-semibold mb-6"
                style={{ color: '#D4A574' }}
              >
                Background
              </h3>
              <div className="space-y-4 leading-relaxed text-base md:text-lg" style={{ color: '#E5E7EB' }}>
                <p>
                  I'm a Data Science student at the University of Waterloo with a strong foundation in
                  programming, data analysis, and full-stack development. I specialize in building
                  web applications and developing data-driven solutions to real-world problems.
                </p>
                <p>
                  My experience spans web development, financial analysis, and automation. I've worked
                  on projects ranging from real-time stock analysis dashboards to computer vision safety
                  systems, winning Best Beginner Hack at GeeseHacks 2024 with LinkedIt.
                </p>
                <p>
                  I combine technical skills with analytical thinking to create practical, scalable
                  solutions. Whether it's streamlining financial processes through Excel automation
                  or building interactive data visualizations, I focus on delivering measurable results.
                </p>
              </div>
            </div>

            {/* Skills Section */}
            <div>
              <h3
                className="text-2xl md:text-3xl font-semibold mb-6"
                style={{ color: '#D4A574' }}
              >
                Technical Skills
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {skills.map((skill, index) => (
                  <SkillBadge key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
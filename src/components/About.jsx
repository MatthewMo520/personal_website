import { useState, useEffect } from 'react'
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

function StatCard({ number, suffix, label, description, delay }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15, triggerOnce: false })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) {
      setCount(0)
      return
    }

    const duration = 2000 // 2 seconds
    const steps = 60
    const increment = number / steps
    const stepDuration = duration / steps

    let currentStep = 0
    const timer = setInterval(() => {
      currentStep++
      if (currentStep <= steps) {
        setCount(Math.min(currentStep * increment, number))
      } else {
        clearInterval(timer)
        setCount(number)
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [isVisible, number])

  return (
    <div
      ref={ref}
      className={`p-6 rounded-lg border transition-all duration-300 cursor-default text-center ${
        isVisible ? 'scroll-visible' : 'scroll-hidden'
      }`}
      style={{
        backgroundColor: '#0A1929',
        borderColor: '#2B3F5C',
        transitionDelay: `${delay}s`
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = '#D4A574'
        e.currentTarget.style.transform = 'translateY(-4px)'
        e.currentTarget.style.boxShadow = '0 8px 25px rgba(212, 165, 116, 0.2)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = '#2B3F5C'
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Large animated number */}
      <div className="text-5xl md:text-6xl font-black mb-2" style={{ color: '#D4A574' }}>
        {Math.floor(count)}{suffix}
      </div>

      {/* Label */}
      <div className="text-lg font-semibold mb-2 text-white">
        {label}
      </div>

      {/* Description */}
      <div className="text-sm" style={{ color: '#9CA3AF' }}>
        {description}
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
                    'Data Structures (CS136)',
                    'Logic & Computation (CS245)',
                    'OOP & Software Dev (CS246)',
                    'Linear Algebra (MATH136/235)',
                    'Calculus (MATH137/138/237)',
                    'Probability (STAT230)'
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
                </ul>
              </div>
            </div>
          </div>

          {/* Animated Statistics Section */}
          <div className={`mb-16 ${isVisible ? 'scroll-visible' : 'scroll-hidden'}`}>
            <h3
              className="text-2xl md:text-3xl font-semibold mb-6 text-center"
              style={{ color: '#D4A574' }}
            >
              Key Achievements
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <StatCard
                number={7}
                suffix=""
                label="Projects"
                description="Full-Stack Web & ML"
                delay={0}
              />
              <StatCard
                number={12}
                suffix="+"
                label="Skills"
                description="Languages & Frameworks"
                delay={0.1}
              />
              <StatCard
                number={88.74}
                suffix="%"
                label="Accuracy"
                description="Movie Sentiment Analysis"
                delay={0.2}
              />
              <StatCard
                number={1}
                suffix=""
                label="Hackathon Win"
                description="Best Beginner Hack 2024"
                delay={0.3}
              />
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
                  I'm studying Data Science at Waterloo and I like building stuff that solves real problems.
                  Most of my projects involve either scraping/analyzing data or building web apps - sometimes both.
                </p>
                <p>
                  Right now I'm working at Scotiabank on pricing models, and before that I built a voice AI system
                  for farmers at AgSights. I also won Best Beginner Hack at GeeseHacks 2024 with LinkedIt, which
                  automates finding sponsors on LinkedIn. Other projects include a stock dashboard, flight price
                  tracker, and ML models for sentiment analysis and churn prediction.
                </p>
                <p>
                  When I'm not coding, I'm either swimming (former lifeguard/instructor) or managing my stock
                  portfolio (which is actually beating the market right now). I'm always down to work on
                  interesting projects, especially if they involve Python, React, or making boring tasks automated.
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
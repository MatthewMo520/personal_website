import { useState, useEffect } from 'react'

function Hero() {
  const [showScrollIndicator, setShowScrollIndicator] = useState(false)
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  const roles = ['Data Scientist', 'Full-Stack Developer', 'ML Engineer']

  useEffect(() => {
    const timer = setTimeout(() => setShowScrollIndicator(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const currentRole = roles[currentRoleIndex]
    const typingSpeed = isDeleting ? 50 : 100
    const pauseTime = isDeleting ? 500 : 2000

    const timeout = setTimeout(() => {
      if (!isDeleting && displayedText === currentRole) {
        setTimeout(() => setIsDeleting(true), pauseTime)
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false)
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
      } else if (isDeleting) {
        setDisplayedText(currentRole.substring(0, displayedText.length - 1))
      } else {
        setDisplayedText(currentRole.substring(0, displayedText.length + 1))
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [displayedText, isDeleting, currentRoleIndex, roles])

  const handleScroll = (targetId) => {
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: 'transparent' }}
    >
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Name */}
          <h1
            className="text-7xl md:text-8xl font-black text-white mb-6 tracking-tight"
            style={{
              animation: 'fadeInUp 0.8s ease-out',
              textShadow: '0 4px 20px rgba(0, 0, 0, 0.6)'
            }}
          >
            Matthew Mo
          </h1>

          {/* Accent line - centered */}
          <div className="flex justify-center mb-6">
            <div
              className="h-1 bg-gradient-to-r from-transparent via-[#4e86d0] to-transparent"
              style={{
                animation: 'growWidth 1.2s ease-out 0.3s both',
                maxWidth: '300px',
                width: '100%'
              }}
            ></div>
          </div>

          {/* Role with typing animation */}
          <div
            className="text-2xl md:text-3xl font-semibold mb-4 h-10 flex items-center justify-center"
            style={{
              color: '#4e86d0',
              letterSpacing: '0.05em',
              animation: 'fadeInUp 0.8s ease-out 0.4s both'
            }}
          >
            {displayedText}
            <span
              className="inline-block w-0.5 h-7 ml-1 animate-pulse"
              style={{ backgroundColor: '#4e86d0' }}
            ></span>
          </div>

          {/* Description */}
          <p
            className="text-lg md:text-xl mb-12 max-w-2xl leading-relaxed"
            style={{
              color: '#B0BDD0',
              animation: 'fadeInUp 0.8s ease-out 0.6s both'
            }}
          >
            University of Waterloo • Building web scrapers, stock dashboards, and ML models that actually do stuff
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            style={{ animation: 'fadeInUp 0.8s ease-out 0.8s both' }}
          >
            {/* Primary CTA */}
            <button
              onClick={() => handleScroll('projects')}
              aria-label="View my work and projects"
              className="px-8 py-4 rounded-lg font-semibold min-w-[180px] transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              style={{
                backgroundColor: '#4e86d0',
                color: '#ffffff',
                boxShadow: '0 4px 20px rgba(78, 134, 208, 0.35)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#3d74bc'
                e.currentTarget.style.boxShadow = '0 6px 25px rgba(78, 134, 208, 0.5)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#4e86d0'
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(78, 134, 208, 0.35)'
              }}
            >
              View Projects
            </button>

            {/* Resume */}
            <a
              href="/Resume_Matthew_Mo.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download my resume"
              className="px-8 py-4 rounded-lg font-semibold min-w-[180px] text-center transition-all duration-300 transform hover:scale-105"
              style={{
                border: '2px solid rgba(210, 230, 255, 0.3)',
                color: '#FFFFFF',
                backgroundColor: 'transparent'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#4e86d0'
                e.currentTarget.style.backgroundColor = 'rgba(78, 134, 208, 0.1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(210, 230, 255, 0.3)'
                e.currentTarget.style.backgroundColor = 'transparent'
              }}
            >
              Resume
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/MatthewMo520"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my GitHub"
              className="px-8 py-4 rounded-lg font-semibold min-w-[180px] text-center transition-all duration-300 transform hover:scale-105"
              style={{
                border: '2px solid rgba(210, 230, 255, 0.3)',
                color: '#FFFFFF',
                backgroundColor: 'transparent'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#5B8FB9'
                e.currentTarget.style.backgroundColor = 'rgba(91, 143, 185, 0.1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(210, 230, 255, 0.3)'
                e.currentTarget.style.backgroundColor = 'transparent'
              }}
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      {showScrollIndicator && (
        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
          style={{
            animation: 'fadeInUp 0.5s ease-out, bounce 2s ease-in-out infinite',
            color: '#4e86d0'
          }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      )}
    </section>
  )
}

export default Hero

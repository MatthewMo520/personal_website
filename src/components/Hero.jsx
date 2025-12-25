import { useState, useEffect } from 'react'
import AnimatedBackground from './AnimatedBackground'

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
        // Pause at full text, then start deleting
        setTimeout(() => setIsDeleting(true), pauseTime)
      } else if (isDeleting && displayedText === '') {
        // Move to next role
        setIsDeleting(false)
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
      } else if (isDeleting) {
        // Delete character
        setDisplayedText(currentRole.substring(0, displayedText.length - 1))
      } else {
        // Add character
        setDisplayedText(currentRole.substring(0, displayedText.length + 1))
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [displayedText, isDeleting, currentRoleIndex, roles])

  const handleScroll = (targetId) => {
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#0A1929' }}>
      <AnimatedBackground />

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Name - Bold and impactful */}
          <h1
            className="text-7xl md:text-8xl font-black text-white mb-6 tracking-tight"
            style={{
              animation: 'fadeInUp 0.8s ease-out',
              textShadow: '0 4px 20px rgba(0, 0, 0, 0.5)'
            }}
          >
            Matthew Mo
          </h1>

          {/* Gold accent line */}
          <div className="flex justify-center mb-6">
            <div
              className="h-1 bg-gradient-to-r from-transparent via-[#D4A574] to-transparent"
              style={{
                animation: 'growWidth 1.2s ease-out 0.3s both',
                maxWidth: '300px',
                width: '100%'
              }}
            ></div>
          </div>

          {/* Role/Title with Typing Animation */}
          <div
            className="text-2xl md:text-3xl font-semibold mb-4 h-10 flex items-center justify-center"
            style={{
              color: '#D4A574',
              letterSpacing: '0.05em',
              animation: 'fadeInUp 0.8s ease-out 0.4s both'
            }}
          >
            {displayedText}
            <span className="inline-block w-0.5 h-7 ml-1 animate-pulse" style={{ backgroundColor: '#D4A574' }}></span>
          </div>

          {/* Description - Light gray, refined */}
          <p
            className="text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed"
            style={{
              color: '#E5E7EB',
              animation: 'fadeInUp 0.8s ease-out 0.6s both'
            }}
          >
            University of Waterloo • Building data-driven web applications and financial analysis tools
          </p>

          {/* CTA system - 2 CTAs on mobile, 3 on desktop */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            style={{
              animation: 'fadeInUp 0.8s ease-out 0.8s both'
            }}
          >
            {/* Primary CTA - Gold background */}
            <button
              onClick={() => handleScroll('projects')}
              aria-label="View my work and projects"
              className="px-8 py-4 rounded-lg font-semibold min-w-[200px] transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              style={{
                backgroundColor: '#D4A574',
                color: '#0A1929',
                boxShadow: '0 4px 15px rgba(212, 165, 116, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#C09560'
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(212, 165, 116, 0.4)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#D4A574'
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(212, 165, 116, 0.3)'
              }}
            >
              View My Work
            </button>

            {/* Secondary CTA - Contact */}
            <button
              onClick={() => handleScroll('contact')}
              aria-label="Get in touch with me"
              className="px-8 py-4 rounded-lg font-semibold min-w-[200px] transition-all duration-300 transform hover:scale-105"
              style={{
                border: '2px solid #5B8FB9',
                color: '#FFFFFF',
                backgroundColor: 'transparent'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#5B8FB9'
                e.currentTarget.style.borderColor = '#5B8FB9'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'
                e.currentTarget.style.borderColor = '#5B8FB9'
              }}
            >
              Let's Connect
            </button>

            {/* Tertiary CTA - Resume (hidden on mobile) */}
            <a
              href="/Resume_Matthew_Mo.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download my resume"
              onClick={() => {
                // Track resume download
                console.log('Resume downloaded')
              }}
              className="hidden sm:flex px-8 py-4 rounded-lg font-semibold min-w-[200px] text-center items-center justify-center transition-all duration-300 transform hover:scale-105"
              style={{
                backgroundColor: '#2B3F5C',
                color: '#FFFFFF'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#3D5470'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#2B3F5C'
              }}
            >
              Resume →
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator - appears after delay */}
      {showScrollIndicator && (
        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
          style={{
            animation: 'fadeInUp 0.5s ease-out, bounce 2s ease-in-out infinite',
            color: '#D4A574'
          }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      )}
    </section>
  )
}

export default Hero
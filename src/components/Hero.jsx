import { useState, useEffect } from 'react'
import AnimatedBackground from './AnimatedBackground'

function Hero() {
  const [showScrollIndicator, setShowScrollIndicator] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowScrollIndicator(true), 2000)
    return () => clearTimeout(timer)
  }, [])

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

          {/* Role/Title - Gold color with spacing */}
          <p
            className="text-2xl md:text-3xl font-semibold mb-4"
            style={{
              color: '#D4A574',
              letterSpacing: '0.05em',
              animation: 'fadeInUp 0.8s ease-out 0.4s both'
            }}
          >
            Data Science Student | Full-Stack Developer
          </p>

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

          {/* Three-tier CTA system */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            style={{
              animation: 'fadeInUp 0.8s ease-out 0.8s both'
            }}
          >
            {/* Primary CTA - Gold background */}
            <button
              onClick={() => handleScroll('projects')}
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
              View Work
            </button>

            {/* Secondary CTA - Navy border */}
            <a
              href="/Resume_Matthew_Mo.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-lg font-semibold min-w-[200px] text-center transition-all duration-300 transform hover:scale-105"
              style={{
                border: '2px solid #2B3F5C',
                color: '#FFFFFF',
                backgroundColor: 'transparent'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#5B8FB9'
                e.currentTarget.style.borderColor = '#5B8FB9'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'
                e.currentTarget.style.borderColor = '#2B3F5C'
              }}
            >
              Resume →
            </a>

            {/* Tertiary CTA - Steel blue background */}
            <button
              onClick={() => handleScroll('contact')}
              className="px-8 py-4 rounded-lg font-semibold min-w-[200px] transition-all duration-300 transform hover:scale-105"
              style={{
                backgroundColor: '#5B8FB9',
                color: '#FFFFFF'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#4A7A9F'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#5B8FB9'
              }}
            >
              Get in Touch
            </button>
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
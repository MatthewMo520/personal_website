import { useState, useEffect } from 'react'
import mLogo from '../assets/m-logo.svg'

function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'portfolio', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScroll = (e, targetId) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'portfolio', label: 'Investments' },
    { id: 'contact', label: 'Contact' }
  ]

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 shadow-lg backdrop-blur-md"
      style={{
        backgroundColor: 'rgba(10, 25, 41, 0.95)',
        borderBottom: '1px solid #2B3F5C'
      }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo and Name */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <img
              src={mLogo}
              alt="M Logo"
              className="w-8 h-8 transition-transform duration-300 group-hover:scale-110"
              style={{
                filter: 'brightness(0) saturate(100%) invert(100%)'
              }}
            />
            <span
              className="text-xl font-semibold text-white"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Matthew Mo
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleScroll(e, link.id)}
                className="cursor-pointer text-sm font-medium transition-all duration-300 relative"
                style={{
                  color: activeSection === link.id ? '#D4A574' : '#E5E7EB'
                }}
                onMouseEnter={(e) => {
                  if (activeSection !== link.id) {
                    e.currentTarget.style.color = '#D4A574'
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== link.id) {
                    e.currentTarget.style.color = '#E5E7EB'
                  }
                }}
              >
                {link.label}
                {activeSection === link.id && (
                  <span
                    className="absolute -bottom-1 left-0 right-0 h-0.5"
                    style={{ backgroundColor: '#D4A574' }}
                  ></span>
                )}
              </a>
            ))}
            <a
              href="/Resume_Matthew_Mo.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-md text-sm font-semibold transition-all duration-300 transform hover:scale-105"
              style={{
                backgroundColor: '#D4A574',
                color: '#0A1929'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#C09560'
                e.currentTarget.style.transform = 'scale(1.05) translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#D4A574'
                e.currentTarget.style.transform = 'scale(1)'
              }}
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 transition-colors duration-300"
            style={{ color: '#E5E7EB' }}
            aria-label="Toggle menu"
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#D4A574'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#E5E7EB'
            }}
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            className="md:hidden mt-4 pb-4"
            style={{
              borderTop: '1px solid #2B3F5C',
              animation: 'fadeInUp 0.3s ease-out'
            }}
          >
            <div className="flex flex-col space-y-3 pt-4">
              {navLinks.map(link => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleScroll(e, link.id)}
                  className="cursor-pointer text-sm font-medium py-2 transition-colors duration-300"
                  style={{
                    color: activeSection === link.id ? '#D4A574' : '#E5E7EB'
                  }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/Resume_Matthew_Mo.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-md text-sm font-semibold text-center transition-colors duration-300"
                style={{
                  backgroundColor: '#D4A574',
                  color: '#0A1929'
                }}
              >
                Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
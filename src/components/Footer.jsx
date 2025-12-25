import { Link } from 'react-router-dom'

function Footer() {
  const handleScroll = (e, targetId) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <footer className="py-12 px-6" style={{ backgroundColor: '#0A1929' }}>
      <div className="container mx-auto">
        {/* Gold Divider */}
        <div className="w-full h-px mb-12" style={{ backgroundColor: '#D4A574' }}></div>

        {/* Main Footer Content - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto mb-12">
          {/* Quick Links Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: '#D4A574' }}>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'experience', label: 'Experience' },
                { id: 'projects', label: 'Projects' },
                { id: 'contact', label: 'Contact' }
              ].map(link => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleScroll(e, link.id)}
                    className="text-sm transition-colors duration-300 hover:underline"
                    style={{ color: '#E5E7EB' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#D4A574'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#E5E7EB'
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: '#D4A574' }}>
              Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/Resume_Matthew_Mo.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm transition-colors duration-300 hover:underline flex items-center gap-2"
                  style={{ color: '#E5E7EB' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#D4A574'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#E5E7EB'
                  }}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
                  </svg>
                  Resume
                </a>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="text-sm transition-colors duration-300 hover:underline flex items-center gap-2"
                  style={{ color: '#E5E7EB' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#D4A574'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#E5E7EB'
                  }}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                    <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                  </svg>
                  Investments
                </Link>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={(e) => handleScroll(e, 'projects')}
                  className="text-sm transition-colors duration-300 hover:underline flex items-center gap-2"
                  style={{ color: '#E5E7EB' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#D4A574'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#E5E7EB'
                  }}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                  </svg>
                  All Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: '#D4A574' }}>
              Connect
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://github.com/MatthewMo520"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm transition-all duration-300 hover:underline flex items-center gap-2"
                  style={{ color: '#E5E7EB' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#D4A574'
                    e.currentTarget.style.transform = 'translateX(4px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#E5E7EB'
                    e.currentTarget.style.transform = 'translateX(0)'
                  }}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                  </svg>
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/matthew-mo520/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm transition-all duration-300 hover:underline flex items-center gap-2"
                  style={{ color: '#E5E7EB' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#D4A574'
                    e.currentTarget.style.transform = 'translateX(4px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#E5E7EB'
                    e.currentTarget.style.transform = 'translateX(0)'
                  }}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                  </svg>
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="mailto:mzmo@uwaterloo.ca"
                  className="text-sm transition-all duration-300 hover:underline flex items-center gap-2"
                  style={{ color: '#E5E7EB' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#D4A574'
                    e.currentTarget.style.transform = 'translateX(4px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#E5E7EB'
                    e.currentTarget.style.transform = 'translateX(0)'
                  }}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t pt-8" style={{ borderColor: '#2B3F5C' }}>
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-sm text-center md:text-left" style={{ color: '#9CA3AF' }}>
              <p>
                © {new Date().getFullYear()} Matthew Mo • Built with{' '}
                <span style={{ color: '#D4A574' }}>React</span> &{' '}
                <span style={{ color: '#D4A574' }}>Vite</span>
              </p>
            </div>

            {/* Back to Top Button */}
            <button
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
                })
              }}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
              style={{
                backgroundColor: '#2B3F5C',
                color: '#E5E7EB'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#D4A574'
                e.currentTarget.style.color = '#0A1929'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#2B3F5C'
                e.currentTarget.style.color = '#E5E7EB'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
              aria-label="Scroll back to top"
            >
              Back to Top
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

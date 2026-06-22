import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

function NotebookNav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('home')

  // Scroll-spy: highlight the link for whichever section is centered in view.
  useEffect(() => {
    const sections = links
      .map(({ href }) => document.getElementById(href.replace('#', '')))
      .filter(Boolean)
    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 1] }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id.replace('#', ''))
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setMenuOpen(false)
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-40"
      style={{
        backgroundColor: 'rgba(250, 250, 247, 0.92)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(74, 144, 217, 0.15)',
        paddingLeft: 'var(--gutter)' // offset for spiral binding
      }}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo('#home')}
          className="font-caveat text-2xl font-bold"
          style={{ color: '#1a1a2e', letterSpacing: '-0.02em' }}
        >
          MM
          <span style={{ color: '#4a90d9' }}>.</span>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(({ label, href }) => {
            const isActive = active === href.replace('#', '')
            return (
              <button
                key={label}
                onClick={() => scrollTo(href)}
                className="text-[15px] font-bold relative group transition-colors duration-200"
                style={{ color: isActive ? '#4a90d9' : '#1a1a2e', fontFamily: "'Nunito', sans-serif" }}
              >
                {label}
                <span
                  className="absolute left-0 group-hover:w-full transition-all duration-300"
                  style={{ backgroundColor: '#f5c842', height: '3px', bottom: '-3px', width: isActive ? '100%' : '0' }}
                />
              </button>
            )
          })}

          <a
            href="mailto:mzmo@uwaterloo.ca"
            className="text-sm font-bold px-5 py-2 rounded-md transition-all duration-200"
            style={{
              backgroundColor: '#4a90d9',
              color: '#ffffff',
              boxShadow: '2px 3px 0 #1a1a2e',
              fontFamily: "'Nunito', sans-serif"
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translate(-1px, -1px)'
              e.currentTarget.style.boxShadow = '3px 4px 0 #1a1a2e'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translate(0, 0)'
              e.currentTarget.style.boxShadow = '2px 3px 0 #1a1a2e'
            }}
          >
            Get in Touch →
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{ color: '#1a1a2e' }}
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden border-t px-6 py-4 flex flex-col gap-4"
          style={{ backgroundColor: '#fafaf7', borderColor: 'rgba(74,144,217,0.15)' }}
        >
          {links.map(({ label, href }) => (
            <button
              key={label}
              onClick={() => scrollTo(href)}
              className="font-bold text-left"
              style={{ color: '#1a1a2e', fontFamily: "'Nunito', sans-serif" }}
            >
              {label}
            </button>
          ))}
          <a
            href="mailto:mzmo@uwaterloo.ca"
            className="font-bold"
            style={{ color: '#4a90d9', fontFamily: "'Nunito', sans-serif" }}
          >
            Get in Touch →
          </a>
        </motion.div>
      )}
    </motion.nav>
  )
}

export default NotebookNav

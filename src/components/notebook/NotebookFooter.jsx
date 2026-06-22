const quickLinks = [
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
]

function NotebookFooter() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <footer
      className="py-10 text-center"
      style={{
        paddingLeft: 'var(--gutter)',
        borderTop: '2px dashed rgba(74,144,217,0.2)',
        backgroundColor: 'rgba(240, 237, 230, 0.4)',
      }}
    >
      {/* Quick links */}
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-5">
        {quickLinks.map(({ label, id }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className="font-caveat text-base font-semibold transition-colors duration-200"
            style={{ color: '#4a5568' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#4a90d9' }}
            onMouseLeave={(e) => { e.currentTarget.style.color = '#4a5568' }}
          >
            {label}
          </button>
        ))}
        <button
          onClick={() => scrollTo('home')}
          className="font-caveat text-base font-semibold transition-colors duration-200"
          style={{ color: '#4a5568' }}
          onMouseEnter={(e) => { e.currentTarget.style.color = '#4a90d9' }}
          onMouseLeave={(e) => { e.currentTarget.style.color = '#4a5568' }}
        >
          ↑ Back to top
        </button>
      </div>

      <p className="font-caveat text-lg" style={{ color: '#6b7280' }}>
        © 2026 Matthew Mo. All rights reserved.
      </p>
      <p className="text-xs mt-1" style={{ color: '#857f76', fontFamily: "'Nunito', sans-serif" }}>
        Built with React + Vite ·{' '}
        <span style={{ color: '#f5c842' }}>✦</span>{' '}
        Handcrafted with care
      </p>
    </footer>
  )
}

export default NotebookFooter

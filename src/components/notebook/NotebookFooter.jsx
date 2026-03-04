function NotebookFooter() {
  return (
    <footer
      className="py-8 text-center"
      style={{
        paddingLeft: '56px',
        borderTop: '2px dashed rgba(74,144,217,0.2)',
        backgroundColor: 'rgba(240, 237, 230, 0.4)'
      }}
    >
      <p
        className="font-caveat text-lg"
        style={{ color: '#9ca3af' }}
      >
        © 2026 Matthew Mo. All rights reserved.
      </p>
      <p
        className="text-xs mt-1"
        style={{ color: '#c0bbb4', fontFamily: "'Nunito', sans-serif" }}
      >
        Built with React + Vite ·{' '}
        <span style={{ color: '#f5c842' }}>✦</span>{' '}
        Handcrafted with care
      </p>
    </footer>
  )
}

export default NotebookFooter

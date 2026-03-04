function WatercolorBlobs() {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden'
      }}
      aria-hidden="true"
    >
      {/* Soft blue — top right */}
      <svg
        style={{ position: 'absolute', top: '-8%', right: '-8%', width: '42vw', maxWidth: '520px', opacity: 0.045 }}
        viewBox="0 0 400 360"
      >
        <ellipse cx="200" cy="185" rx="185" ry="165" fill="#4a90d9" />
        <ellipse cx="225" cy="165" rx="145" ry="125" fill="#7ab3e8" />
      </svg>

      {/* Soft yellow — bottom left */}
      <svg
        style={{ position: 'absolute', bottom: '-6%', left: '4%', width: '36vw', maxWidth: '440px', opacity: 0.045 }}
        viewBox="0 0 400 360"
      >
        <ellipse cx="200" cy="185" rx="175" ry="158" fill="#f5c842" />
        <ellipse cx="185" cy="200" rx="135" ry="118" fill="#ffe57a" />
      </svg>

      {/* Soft orange — mid right */}
      <svg
        style={{ position: 'absolute', top: '38%', right: '-4%', width: '26vw', maxWidth: '320px', opacity: 0.04 }}
        viewBox="0 0 300 280"
      >
        <ellipse cx="150" cy="140" rx="140" ry="125" fill="#f0a86f" />
      </svg>
    </div>
  )
}

export default WatercolorBlobs

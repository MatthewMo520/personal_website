import { useEffect, useRef } from 'react'

/**
 * Leaves a short, fading ink stroke that follows the cursor — like drawing
 * on the page with a pen. Only active for fine pointers (mouse), and never
 * when the user prefers reduced motion. Purely decorative; pointer-events off.
 */
function InkCursor() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduce) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let raf
    let last = null

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = window.innerWidth + 'px'
      canvas.style.height = window.innerHeight + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()

    const onMove = (e) => {
      const p = { x: e.clientX, y: e.clientY }
      if (last) {
        ctx.strokeStyle = 'rgba(74, 144, 217, 0.5)'
        ctx.lineWidth = 2.2
        ctx.lineCap = 'round'
        ctx.lineJoin = 'round'
        ctx.beginPath()
        ctx.moveTo(last.x, last.y)
        ctx.lineTo(p.x, p.y)
        ctx.stroke()
      }
      last = p
    }
    const onLeave = () => { last = null }

    // Gradually erase the stroke so it trails and fades.
    const fade = () => {
      ctx.globalCompositeOperation = 'destination-out'
      ctx.fillStyle = 'rgba(0, 0, 0, 0.09)'
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)
      ctx.globalCompositeOperation = 'source-over'
      raf = requestAnimationFrame(fade)
    }
    raf = requestAnimationFrame(fade)

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseout', onLeave)
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseout', onLeave)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{ position: 'fixed', inset: 0, zIndex: 55, pointerEvents: 'none' }}
    />
  )
}

export default InkCursor

import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring, useTransform, useVelocity } from 'framer-motion'

/**
 * A paper airplane that flies down the page as you scroll, banking with
 * scroll velocity and leaving a dashed contrail. Pure decoration.
 */
function FlyingPaperPlane() {
  const [enabled, setEnabled] = useState(true)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const small = window.matchMedia('(max-width: 640px)')
    const update = () => setEnabled(!mq.matches && !small.matches)
    update()
    mq.addEventListener?.('change', update)
    small.addEventListener?.('change', update)
    return () => {
      mq.removeEventListener?.('change', update)
      small.removeEventListener?.('change', update)
    }
  }, [])

  const { scrollYProgress } = useScroll()
  const smooth = useSpring(scrollYProgress, { stiffness: 55, damping: 18, restDelta: 0.0001 })

  // Vertical travel down the right margin as the page scrolls.
  const top = useTransform(smooth, [0, 1], ['13vh', '85vh'])
  // The dashed contrail "draws" itself behind the plane as it descends.
  const trailHeight = useTransform(smooth, [0, 1], ['0vh', '72vh'])
  // Gentle horizontal sway so it reads as flight, not an elevator.
  const x = useTransform(smooth, [0, 0.25, 0.5, 0.75, 1], [0, -18, 14, -10, 0])

  // Bank the plane based on how fast (and which way) you're scrolling.
  const velocity = useVelocity(smooth)
  const bankRaw = useTransform(velocity, [-1.5, 0, 1.5], [-35, 0, 40])
  const bank = useSpring(bankRaw, { stiffness: 150, damping: 16 })

  if (!enabled) return null

  return (
    <>
      {/* Dashed flight path the plane leaves behind */}
      <motion.div
        aria-hidden="true"
        style={{
          position: 'fixed',
          right: 'max(40px, calc(3vw + 21px))',
          top: '13vh',
          width: '2px',
          height: trailHeight,
          zIndex: 29,
          pointerEvents: 'none',
          background:
            'repeating-linear-gradient(to bottom, rgba(74,144,217,0.4) 0 5px, transparent 5px 11px)',
        }}
      />

      <motion.div
        aria-hidden="true"
        style={{
          position: 'fixed',
          right: 'max(18px, 3vw)',
          top,
          x,
          zIndex: 30,
          pointerEvents: 'none',
          willChange: 'transform, top',
        }}
      >
        <motion.div style={{ rotate: bank }}>
          <svg width="46" height="42" viewBox="0 0 64 56" fill="none" style={{ overflow: 'visible' }}>
            {/* plane body */}
            <path d="M4 28 L60 4 L44 52 L28 34 L4 28Z" fill="#ffffff" stroke="#4a90d9" strokeWidth="1.8" strokeLinejoin="round" />
            <path d="M28 34 L36 28 L60 4" stroke="#4a90d9" strokeWidth="1.5" strokeDasharray="3 2" />
            <path d="M28 34 L32 48 L44 52" stroke="#a8c4e0" strokeWidth="1.2" />
          </svg>
        </motion.div>
      </motion.div>
    </>
  )
}

export default FlyingPaperPlane

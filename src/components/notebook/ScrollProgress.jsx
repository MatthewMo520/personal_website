import { motion, useScroll, useSpring } from 'framer-motion'

/* Ink-line scroll progress bar pinned to the top of the page. */
function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })

  return (
    <motion.div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '4px',
        transformOrigin: '0%',
        scaleX,
        background: 'linear-gradient(90deg, #4a90d9, #7ab3e8)',
        boxShadow: '0 1px 3px rgba(74,144,217,0.4)',
        zIndex: 60,
      }}
    />
  )
}

export default ScrollProgress

import { motion } from 'framer-motion'

/**
 * A handwritten margin note with a little hand-drawn arrow that draws itself
 * in as it scrolls into view. Decorative — hidden on small screens.
 *
 * arrow: 'left' | 'right' | 'down' — direction the arrow points.
 */
function Annotation({ children, color = '#e07a5f', rotate = -4, arrow = 'left', style }) {
  const arrowPaths = {
    left: 'M44 8 C 28 10, 14 14, 4 22 M4 22 L13 19 M4 22 L9 14',
    right: 'M4 8 C 20 10, 34 14, 44 22 M44 22 L35 19 M44 22 L39 14',
    down: 'M8 4 C 10 18, 16 30, 26 40 M26 40 L18 36 M26 40 L30 32',
  }
  return (
    <motion.div
      aria-hidden="true"
      className="absolute hide-mobile"
      style={{ rotate, color, ...style }}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <span className="font-caveat font-bold" style={{ fontSize: '20px', lineHeight: 1.1, display: 'block' }}>
        {children}
      </span>
      <svg width="48" height="46" viewBox="0 0 48 46" fill="none" style={{ display: 'block', margin: '2px 0 0 6px' }}>
        <motion.path
          d={arrowPaths[arrow]}
          stroke={color}
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeInOut' }}
        />
      </svg>
    </motion.div>
  )
}

export default Annotation

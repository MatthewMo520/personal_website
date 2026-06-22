import { motion } from 'framer-motion'

/* Little notebook page tab that hangs from the top margin of a section. */
function PageMarker({ number, label, color = '#4a90d9' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 0.75, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="absolute hide-mobile"
      style={{ top: 0, right: '6%', color }}
      aria-hidden="true"
    >
      <span className="page-marker">
        <span style={{ fontWeight: 800 }}>p.{String(number).padStart(2, '0')}</span>
        <span style={{ opacity: 0.7 }}>· {label}</span>
      </span>
    </motion.div>
  )
}

export default PageMarker

import { motion } from 'framer-motion'

const float = {
  animate: {
    y: [0, -10, 0],
    rotate: [0, 3, -2, 0],
    transition: { duration: 5, repeat: Infinity, ease: 'easeInOut' }
  }
}

const floatSlow = {
  animate: {
    y: [0, -14, 0],
    rotate: [0, -4, 3, 0],
    transition: { duration: 7, repeat: Infinity, ease: 'easeInOut' }
  }
}

const wiggle = {
  animate: {
    rotate: [-3, 3, -3],
    transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' }
  }
}

/* Atom doodle */
function Atom({ style }) {
  return (
    <motion.svg
      width="64" height="64" viewBox="0 0 64 64" fill="none"
      style={{ opacity: 0.55, ...style }}
      {...float}
    >
      <ellipse cx="32" cy="32" rx="24" ry="10" stroke="#4a90d9" strokeWidth="2" strokeDasharray="3 2" fill="none" />
      <ellipse cx="32" cy="32" rx="24" ry="10" stroke="#4a90d9" strokeWidth="2" strokeDasharray="3 2" fill="none" transform="rotate(60 32 32)" />
      <ellipse cx="32" cy="32" rx="24" ry="10" stroke="#4a90d9" strokeWidth="2" strokeDasharray="3 2" fill="none" transform="rotate(-60 32 32)" />
      <circle cx="32" cy="32" r="4" fill="#f5c842" />
    </motion.svg>
  )
}

/* Rocket doodle */
function Rocket({ style }) {
  return (
    <motion.svg
      width="52" height="72" viewBox="0 0 52 72" fill="none"
      style={{ opacity: 0.5, ...style }}
      {...floatSlow}
    >
      <path d="M26 4 C26 4 36 16 36 32 L26 42 L16 32 C16 16 26 4 26 4Z"
        fill="#f0a86f" stroke="#1a1a2e" strokeWidth="1.5" />
      <circle cx="26" cy="24" r="5" fill="white" stroke="#4a90d9" strokeWidth="1.5" />
      <path d="M16 32 L10 40 L16 38Z" fill="#f5c842" stroke="#1a1a2e" strokeWidth="1" />
      <path d="M36 32 L42 40 L36 38Z" fill="#f5c842" stroke="#1a1a2e" strokeWidth="1" />
      <path d="M22 42 L20 54 L26 50 L32 54 L30 42Z" fill="#e8e8e8" stroke="#aaa" strokeWidth="1" />
      <path d="M22 54 Q24 60 26 62 Q28 60 30 54" stroke="#f0a86f" strokeWidth="2" fill="none" />
    </motion.svg>
  )
}

/* Lightbulb doodle */
function Lightbulb({ style }) {
  return (
    <motion.svg
      width="46" height="64" viewBox="0 0 46 64" fill="none"
      style={{ opacity: 0.5, ...style }}
      {...wiggle}
    >
      <path d="M23 4 C12 4 5 13 5 22 C5 29 9 35 15 38 L15 46 L31 46 L31 38 C37 35 41 29 41 22 C41 13 34 4 23 4Z"
        fill="#fff9d0" stroke="#1a1a2e" strokeWidth="1.5" />
      <path d="M15 46 L31 46 L31 50 L15 50Z" fill="#e0e0e0" stroke="#aaa" strokeWidth="1" />
      <path d="M17 50 L17 54 L29 54 L29 50" fill="#e0e0e0" stroke="#aaa" strokeWidth="1" />
      <path d="M23 10 L23 16 M17 14 L20 18 M29 14 L26 18" stroke="#f5c842" strokeWidth="2" strokeLinecap="round" />
      <line x1="19" y1="54" x2="27" y2="54" stroke="#888" strokeWidth="2" strokeLinecap="round" />
    </motion.svg>
  )
}

/* Star doodle */
function Star({ style, size = 24, color = '#f5c842' }) {
  return (
    <motion.svg
      width={size} height={size} viewBox="0 0 24 24" fill="none"
      style={{ opacity: 0.65, ...style }}
      animate={{ rotate: [0, 15, -10, 0], scale: [1, 1.1, 1] }}
      transition={{ duration: 4 + Math.random() * 2, repeat: Infinity, ease: 'easeInOut' }}
    >
      <path d="M12 2L14.5 9H22L16 13.5L18.5 20.5L12 16L5.5 20.5L8 13.5L2 9H9.5L12 2Z"
        fill={color} stroke="#1a1a2e" strokeWidth="1" />
    </motion.svg>
  )
}

/* Bar chart doodle */
function BarChart({ style }) {
  return (
    <motion.svg
      width="60" height="50" viewBox="0 0 60 50" fill="none"
      style={{ opacity: 0.45, ...style }}
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
    >
      <rect x="4" y="30" width="10" height="18" rx="2" fill="#4a90d9" opacity="0.7" />
      <rect x="18" y="18" width="10" height="30" rx="2" fill="#f5c842" opacity="0.8" />
      <rect x="32" y="8" width="10" height="40" rx="2" fill="#f0a86f" opacity="0.8" />
      <rect x="46" y="22" width="10" height="26" rx="2" fill="#6bc47a" opacity="0.7" />
      <line x1="2" y1="48" x2="58" y2="48" stroke="#1a1a2e" strokeWidth="1.5" />
    </motion.svg>
  )
}

/* Paper plane doodle */
function PaperPlane({ style }) {
  return (
    <motion.svg
      width="64" height="56" viewBox="0 0 64 56" fill="none"
      style={{ opacity: 0.5, ...style }}
      animate={{ x: [0, 8, -4, 0], y: [0, -8, 4, 0], rotate: [0, 5, -3, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
    >
      <path d="M4 28 L60 4 L44 52 L28 34 L4 28Z" fill="white" stroke="#4a90d9" strokeWidth="1.5" />
      <path d="M28 34 L36 28 L60 4" stroke="#4a90d9" strokeWidth="1.5" strokeDasharray="3 2" />
      <path d="M28 34 L32 48 L44 52" stroke="#aaa" strokeWidth="1" />
    </motion.svg>
  )
}

/* Gear doodle */
function Gear({ style, size = 52 }) {
  return (
    <motion.svg
      width={size} height={size} viewBox="0 0 52 52" fill="none"
      style={{ opacity: 0.4, ...style }}
      animate={{ rotate: [0, 360] }}
      transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
    >
      <path d="M26 8 L28 4 L30 8 L34 6 L34 10 L38 10 L36 14 L40 16 L37 19 L40 23 L36 23 L36 27 L40 27 L37 31 L40 35 L36 35 L36 39 L38 43 L34 43 L34 47 L30 45 L28 49 L26 45 L22 47 L22 43 L18 43 L16 39 L18 35 L14 35 L17 31 L14 27 L18 27 L18 23 L14 23 L17 19 L14 16 L18 14 L16 10 L20 10 L20 6 L24 8 L26 8Z"
        fill="#e0e0e0" stroke="#aaa" strokeWidth="1" />
      <circle cx="26" cy="26" r="8" fill="white" stroke="#888" strokeWidth="1.5" />
    </motion.svg>
  )
}

/* Scatter plot trend line */
function ScatterPlot({ style }) {
  return (
    <motion.svg
      width="70" height="55" viewBox="0 0 70 55" fill="none"
      style={{ opacity: 0.45, ...style }}
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
    >
      <line x1="4" y1="50" x2="66" y2="50" stroke="#aaa" strokeWidth="1.5" />
      <line x1="4" y1="50" x2="4" y2="6" stroke="#aaa" strokeWidth="1.5" />
      {/* dots */}
      <circle cx="12" cy="42" r="3" fill="#4a90d9" opacity="0.7" />
      <circle cx="20" cy="36" r="3" fill="#f5c842" opacity="0.8" />
      <circle cx="30" cy="30" r="3" fill="#4a90d9" opacity="0.7" />
      <circle cx="38" cy="22" r="3" fill="#f0a86f" opacity="0.8" />
      <circle cx="48" cy="18" r="3" fill="#4a90d9" opacity="0.7" />
      <circle cx="58" cy="12" r="3" fill="#f5c842" opacity="0.8" />
      {/* trend line */}
      <line x1="8" y1="46" x2="62" y2="8" stroke="#f0a86f" strokeWidth="1.5" strokeDasharray="4 2" />
    </motion.svg>
  )
}

/* Cloud doodle */
function Cloud({ style }) {
  return (
    <motion.svg
      width="72" height="40" viewBox="0 0 72 40" fill="none"
      style={{ opacity: 0.35, ...style }}
      animate={{ x: [0, 8, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
    >
      <path d="M14 32 C14 32 6 32 6 24 C6 17 13 14 19 16 C20 10 26 6 34 8 C42 10 46 17 44 22 C48 21 54 23 54 28 C54 32 50 34 46 34 L14 34Z"
        fill="white" stroke="#c0d4ec" strokeWidth="1.5" />
    </motion.svg>
  )
}

/* Arrow doodle */
function Arrow({ style }) {
  return (
    <motion.svg
      width="56" height="28" viewBox="0 0 56 28" fill="none"
      style={{ opacity: 0.4, ...style }}
      animate={{ x: [0, 5, 0] }}
      transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
    >
      <path d="M4 14 Q20 6 36 14 Q20 22 4 14Z" fill="none" stroke="#4a90d9" strokeWidth="1.5" />
      <path d="M36 14 L52 14 M46 8 L52 14 L46 20" stroke="#4a90d9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </motion.svg>
  )
}

/* Pencil doodle */
function Pencil({ style }) {
  return (
    <motion.svg
      width="20" height="64" viewBox="0 0 20 64" fill="none"
      style={{ opacity: 0.45, ...style }}
      animate={{ rotate: [-3, 3, -3] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
    >
      <rect x="4" y="4" width="12" height="46" rx="2" fill="#f5c842" stroke="#1a1a2e" strokeWidth="1" />
      <path d="M4 50 L10 60 L16 50Z" fill="#f0d090" stroke="#1a1a2e" strokeWidth="1" />
      <path d="M8 60 L10 64 L12 60Z" fill="#f0a86f" />
      <rect x="4" y="4" width="12" height="8" rx="2" fill="#e0e0e0" stroke="#1a1a2e" strokeWidth="1" />
    </motion.svg>
  )
}

/* ---- Personal hobby doodles ---- */

/* Badminton shuttlecock */
function Shuttlecock({ style, size = 50 }) {
  return (
    <motion.svg
      width={size} height={size * 1.15} viewBox="0 0 48 56" fill="none"
      style={{ opacity: 0.5, ...style }}
      {...floatSlow}
    >
      <path d="M16 40 L6 10 Q24 2 42 10 L32 40 Z" fill="white" stroke="#1a1a2e" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M20 40 L14 10 M24 41 L24 6 M28 40 L34 10" stroke="#4a90d9" strokeWidth="1" />
      <path d="M13 24 Q24 20 35 24" stroke="#1a1a2e" strokeWidth="1" fill="none" strokeDasharray="2 2" />
      <path d="M16 40 Q24 52 32 40 Z" fill="#f0a86f" stroke="#1a1a2e" strokeWidth="1.5" strokeLinejoin="round" />
    </motion.svg>
  )
}

/* Volleyball — based on Tabler's ball-volleyball icon (24x24) */
function Volleyball({ style, size = 54 }) {
  return (
    <motion.svg
      width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="#1a1a2e" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
      style={{ opacity: 0.5, ...style }}
      {...float}
    >
      <circle cx="12" cy="12" r="9" fill="white" />
      <path d="M12 12a8 8 0 0 0 8 4" />
      <path d="M7.5 13.5a12 12 0 0 0 8.5 6.5" />
      <path d="M12 12a8 8 0 0 0 -7.464 4.928" />
      <path d="M12.951 7.353a12 12 0 0 0 -9.88 4.111" />
      <path d="M12 12a8 8 0 0 0 -.536 -8.928" />
      <path d="M15.549 15.147a12 12 0 0 0 1.38 -10.611" />
    </motion.svg>
  )
}

/* Ultimate frisbee disc */
function Frisbee({ style, size = 60 }) {
  return (
    <motion.svg
      width={size} height={size * 0.6} viewBox="0 0 64 38" fill="none"
      style={{ opacity: 0.5, ...style }}
      animate={{ y: [0, -6, 0], rotate: [0, 4, -3, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
    >
      <path d="M4 17 Q4 23 6 25 Q32 35 58 25 Q60 23 60 17" fill="#5ab06a" stroke="#1a1a2e" strokeWidth="1.5" strokeLinejoin="round" />
      <ellipse cx="32" cy="16" rx="28" ry="11" fill="#6bc47a" stroke="#1a1a2e" strokeWidth="1.5" />
      <ellipse cx="32" cy="14" rx="19" ry="6.5" fill="none" stroke="#ffffff" strokeWidth="1.5" opacity="0.6" />
    </motion.svg>
  )
}

/* Swimming goggles */
function Goggles({ style, size = 58 }) {
  return (
    <motion.svg
      width={size} height={size * 0.55} viewBox="0 0 60 32" fill="none"
      style={{ opacity: 0.5, ...style }}
      {...wiggle}
    >
      {/* straps */}
      <path d="M10 16 L1 12 M54 16 L63 12" stroke="#1a1a2e" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      {/* lenses */}
      <ellipse cx="20" cy="16" rx="10" ry="8.5" fill="#7ab3e8" stroke="#1a1a2e" strokeWidth="1.6" opacity="0.85" />
      <ellipse cx="44" cy="16" rx="10" ry="8.5" fill="#7ab3e8" stroke="#1a1a2e" strokeWidth="1.6" opacity="0.85" />
      {/* nose bridge */}
      <path d="M30 16 Q32 20 34 16" stroke="#1a1a2e" strokeWidth="1.6" fill="none" />
      {/* shine */}
      <ellipse cx="16" cy="12" rx="2.5" ry="1.6" fill="white" opacity="0.75" />
      <ellipse cx="40" cy="12" rx="2.5" ry="1.6" fill="white" opacity="0.75" />
    </motion.svg>
  )
}

/* Coffee cup (cafés) */
function Coffee({ style, size = 50 }) {
  return (
    <motion.svg
      width={size} height={size * 1.1} viewBox="0 0 52 56" fill="none"
      style={{ opacity: 0.5, ...style }}
      {...float}
    >
      <path d="M20 6 Q24 11 20 15 M29 4 Q33 9 29 13" stroke="#c0c0c0" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M12 22 L40 22 L36 48 L16 48 Z" fill="white" stroke="#1a1a2e" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M14 26 L38 26 L37 31 L15 31 Z" fill="#f0a86f" />
      <path d="M40 26 Q50 28 46 38 Q44 42 37 41" fill="none" stroke="#1a1a2e" strokeWidth="1.5" />
      <path d="M8 50 L44 50" stroke="#1a1a2e" strokeWidth="2" strokeLinecap="round" />
    </motion.svg>
  )
}

/* Boba / bubble tea (food) */
function Boba({ style, size = 40 }) {
  return (
    <motion.svg
      width={size} height={size * 1.4} viewBox="0 0 40 56" fill="none"
      style={{ opacity: 0.5, ...style }}
      {...floatSlow}
    >
      <path d="M22 2 L26 18" stroke="#f09696" strokeWidth="3" strokeLinecap="round" />
      <path d="M8 12 L32 12 L30 16 L10 16 Z" fill="#7ab3e8" stroke="#1a1a2e" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M10 16 L30 16 L27 52 L13 52 Z" fill="white" stroke="#1a1a2e" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M12 38 L28 38 L27 52 L13 52 Z" fill="#f5c842" opacity="0.45" />
      <circle cx="16" cy="48" r="2" fill="#1a1a2e" />
      <circle cx="21" cy="50" r="2" fill="#1a1a2e" />
      <circle cx="25" cy="48" r="2" fill="#1a1a2e" />
      <circle cx="19" cy="45" r="2" fill="#1a1a2e" />
      <circle cx="24" cy="44" r="2" fill="#1a1a2e" />
    </motion.svg>
  )
}

export {
  Atom, Rocket, Lightbulb, Star, BarChart, PaperPlane, Gear, ScatterPlot, Cloud, Arrow, Pencil,
  Shuttlecock, Volleyball, Frisbee, Goggles, Coffee, Boba,
}

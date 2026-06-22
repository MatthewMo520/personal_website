import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

/* Day (notebook) <-> night (chalkboard) toggle. Persists to localStorage
   and flips the data-theme attribute the CSS color tokens hang off of. */
function ThemeToggle() {
  const [theme, setTheme] = useState('paper')

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const initial = saved === 'chalk' ? 'chalk' : 'paper'
    setTheme(initial)
    document.documentElement.dataset.theme = initial
  }, [])

  const toggle = () => {
    const next = theme === 'chalk' ? 'paper' : 'chalk'
    setTheme(next)
    document.documentElement.dataset.theme = next
    localStorage.setItem('theme', next)
  }

  const isNight = theme === 'chalk'

  return (
    <motion.button
      onClick={toggle}
      whileHover={{ y: -2, rotate: isNight ? -8 : 8 }}
      whileTap={{ scale: 0.9 }}
      aria-label={isNight ? 'Switch to paper (day) theme' : 'Switch to chalkboard (night) theme'}
      title={isNight ? 'Day mode' : 'Night mode'}
      className="flex items-center justify-center rounded-full"
      style={{
        width: '40px',
        height: '40px',
        background: 'var(--card)',
        border: '2px dashed var(--line)',
        boxShadow: '2px 3px 0 var(--line)',
        color: isNight ? '#f5c842' : '#4a90d9',
        flexShrink: 0,
      }}
    >
      {isNight ? (
        // moon
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      ) : (
        // sun
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
      )}
    </motion.button>
  )
}

export default ThemeToggle

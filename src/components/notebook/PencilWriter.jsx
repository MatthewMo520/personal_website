import { useEffect, useRef, useState } from 'react'
import { motion, useAnimationControls } from 'framer-motion'

const DEFAULT_WORDS = ['badminton', 'volleyball', 'ultimate frisbee', 'swimming', 'good food', 'cozy cafés']

/* Themed pencil drawn diagonally — graphite tip at lower-left, eraser upper-right. */
function PencilIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none"
      style={{ width: '1.6em', height: '1.6em', display: 'block', overflow: 'visible' }}>
      <path d="M10 54 L19.9 52.58 L11.42 44.1 Z" fill="#f0d090" stroke="#1a1a2e" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M10 54 L15 53.3 L11.6 49.9 Z" fill="#1a1a2e" />
      <path d="M19.9 52.58 L45.34 27.14 L36.86 18.66 L11.42 44.1 Z" fill="#f5c842" stroke="#1a1a2e" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M45.34 27.14 L49.59 22.89 L41.11 14.41 L36.86 18.66 Z" fill="#d9d9d9" stroke="#1a1a2e" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M49.59 22.89 L53.84 18.64 L45.36 10.16 L41.11 14.41 Z" fill="#f09696" stroke="#1a1a2e" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  )
}

/* Themed eraser block that sweeps across during the erase phase. */
function EraserIcon() {
  return (
    <svg viewBox="0 0 40 30" fill="none"
      style={{ width: '1.5em', height: '1.5em', display: 'block' }}>
      <path d="M6 14 L12 8 L34 8 L28 14 Z" fill="#f7b3b3" stroke="#1a1a2e" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M28 14 L34 8 L34 18 L28 24 Z" fill="#d98a8a" stroke="#1a1a2e" strokeWidth="1.5" strokeLinejoin="round" />
      <rect x="6" y="14" width="22" height="10" fill="#f09696" stroke="#1a1a2e" strokeWidth="1.5" />
      <rect x="6" y="17.5" width="22" height="3.5" fill="#4a90d9" />
    </svg>
  )
}

/**
 * Notebook rotating text: a pencil writes a word character-by-character,
 * then it gets scribbled out and erased before the next word appears.
 * Measurement-free, so it's robust across fonts/sizes.
 */
function PencilWriter({ words = DEFAULT_WORDS, color = '#4a90d9' }) {
  const [typed, setTyped] = useState('')
  const [showPencil, setShowPencil] = useState(true)
  const [showEraser, setShowEraser] = useState(false)

  const wrapCtrl = useAnimationControls()
  const scratchCtrl = useAnimationControls()
  const eraserCtrl = useAnimationControls()
  const cancelledRef = useRef(false)

  useEffect(() => {
    // Respect reduced-motion: just show the first word, no looping.
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      setTyped(words[0])
      setShowPencil(false)
      return
    }

    cancelledRef.current = false
    const wait = (ms) => new Promise((r) => setTimeout(r, ms))
    let idx = 0

    async function run() {
      while (!cancelledRef.current) {
        const word = words[idx]

        // reset
        setShowPencil(true)
        setShowEraser(false)
        wrapCtrl.set({ opacity: 1 })
        scratchCtrl.set({ clipPath: 'inset(0 100% 0 0)' })

        // write, char by char
        for (let i = 0; i <= word.length; i++) {
          if (cancelledRef.current) return
          setTyped(word.slice(0, i))
          await wait(75)
        }
        await wait(900)
        if (cancelledRef.current) return

        // scribble out (clip reveal, left to right)
        setShowPencil(false)
        await scratchCtrl.start({ clipPath: 'inset(0 0% 0 0)', transition: { duration: 0.5, ease: 'easeInOut' } })
        await wait(280)
        if (cancelledRef.current) return

        // erase
        setShowEraser(true)
        await Promise.all([
          eraserCtrl.start({ left: ['0%', '100%'], opacity: [0, 1, 1, 0], transition: { duration: 0.6, ease: 'easeInOut' } }),
          wrapCtrl.start({ opacity: 0, transition: { duration: 0.55, ease: 'easeIn' } }),
        ])
        setShowEraser(false)
        setTyped('')
        await wait(150)
        idx = (idx + 1) % words.length
      }
    }

    run()
    return () => {
      cancelledRef.current = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [words])

  return (
    <span style={{ position: 'relative', display: 'inline-block', whiteSpace: 'nowrap', minHeight: '1em' }}>
      <motion.span animate={wrapCtrl} style={{ position: 'relative', display: 'inline-block' }}>
        <span style={{ color }}>{typed || '​'}</span>

        {/* scribble-out stroke — revealed cleanly left-to-right via clip */}
        <motion.svg
          width="100%" height="22" viewBox="0 0 100 22" preserveAspectRatio="none" aria-hidden="true"
          initial={{ clipPath: 'inset(0 100% 0 0)' }} animate={scratchCtrl}
          style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', overflow: 'visible' }}
        >
          <path
            d="M-3 14 C 18 4, 40 18, 62 8 C 82 2, 96 13, 103 9 C 96 15, 80 6, 60 15 C 40 20, 18 9, -3 15"
            stroke={color} strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke"
          />
        </motion.svg>

        {/* pencil rides the writing cursor (right edge of text) */}
        {showPencil && (
          <span aria-hidden="true" style={{ position: 'absolute', left: '100%', bottom: '-0.5em', pointerEvents: 'none' }}>
            <PencilIcon />
          </span>
        )}

        {/* eraser sweeps across during erase */}
        {showEraser && (
          <motion.span
            aria-hidden="true" animate={eraserCtrl} initial={{ left: '0%', opacity: 0 }}
            style={{ position: 'absolute', bottom: '-0.45em', pointerEvents: 'none' }}
          >
            <EraserIcon />
          </motion.span>
        )}
      </motion.span>
    </span>
  )
}

export default PencilWriter

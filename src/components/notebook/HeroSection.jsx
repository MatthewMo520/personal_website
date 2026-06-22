import { motion, useAnimation, useScroll, useTransform } from 'framer-motion'
import { useEffect } from 'react'
import { Atom, Rocket, Lightbulb, Star, ScatterPlot, BarChart, Cloud, Shuttlecock, Volleyball, Frisbee, Goggles, Coffee, Boba } from './DoodleElements'
import PencilWriter from './PencilWriter'

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } }
}

function HeroSection() {
  const scribbleControls = useAnimation()

  // Parallax: doodles drift up and fade slightly as you scroll past the hero.
  const { scrollY } = useScroll()
  const doodleY = useTransform(scrollY, [0, 700], [0, -130])
  const doodleOpacity = useTransform(scrollY, [0, 500], [1, 0.3])

  useEffect(() => {
    const timer = setTimeout(() => {
      scribbleControls.start({ pathLength: 1, opacity: 1, transition: { duration: 1.1, ease: 'easeInOut' } })
    }, 700)
    return () => clearTimeout(timer)
  }, [scribbleControls])

  const handleScroll = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ paddingLeft: 'var(--gutter)' }} // account for spiral binding
    >
      {/* Decorative doodles */}
      <motion.div
        className="absolute inset-0 pointer-events-none overflow-hidden hide-mobile"
        style={{ y: doodleY, opacity: doodleOpacity }}
      >
        {/* Top left */}
        <div className="absolute" style={{ top: '10%', left: '6%' }}>
          <Atom />
        </div>
        {/* Top right */}
        <div className="absolute" style={{ top: '8%', right: '4%' }}>
          <Rocket />
        </div>
        {/* Left mid */}
        <div className="absolute" style={{ top: '38%', left: '3%' }}>
          <BarChart />
        </div>
        {/* Right mid */}
        <div className="absolute" style={{ top: '42%', right: '6%' }}>
          <ScatterPlot />
        </div>
        {/* Bottom left */}
        <div className="absolute" style={{ bottom: '12%', left: '8%' }}>
          <Cloud />
        </div>
        {/* Near title */}
        <div className="absolute" style={{ top: '30%', right: '16%' }}>
          <Lightbulb />
        </div>

        {/* Personal hobby doodles */}
        <div className="absolute" style={{ top: '22%', left: '13%' }}>
          <Shuttlecock />
        </div>
        <div className="absolute" style={{ top: '60%', right: '9%' }}>
          <Volleyball />
        </div>
        <div className="absolute" style={{ bottom: '20%', right: '20%' }}>
          <Frisbee />
        </div>
        <div className="absolute" style={{ bottom: '14%', left: '16%' }}>
          <Coffee />
        </div>
        <div className="absolute" style={{ top: '46%', left: '8%' }}>
          <Boba />
        </div>
        <div className="absolute" style={{ top: '14%', right: '22%' }}>
          <Goggles />
        </div>
        {/* Stars scattered */}
        <Star style={{ position: 'absolute', top: '20%', left: '22%' }} size={18} />
        <Star style={{ position: 'absolute', top: '15%', right: '28%' }} size={14} color="#f0a86f" />
        <Star style={{ position: 'absolute', bottom: '25%', right: '14%' }} size={22} />
        <Star style={{ position: 'absolute', bottom: '18%', left: '28%' }} size={16} color="#4a90d9" />
        <Star style={{ position: 'absolute', top: '52%', left: '14%' }} size={12} color="#f0a86f" />
      </motion.div>

      {/* Hero content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center max-w-3xl mx-auto px-6 py-16"
      >
        {/* Small label */}
        <motion.div variants={item} className="mb-4">
          <span
            className="font-caveat text-lg font-semibold px-4 py-1 rounded-full"
            style={{
              backgroundColor: 'rgba(74,144,217,0.12)',
              color: '#4a90d9',
              border: '1.5px dashed #4a90d9'
            }}
          >
            ✦ portfolio 2026
          </span>
        </motion.div>

        {/* Main name */}
        <motion.h1
          variants={item}
          className="font-caveat font-bold leading-none mb-4"
          style={{
            fontSize: 'clamp(72px, 12vw, 110px)',
            color: '#1a1a2e',
            letterSpacing: '-0.02em'
          }}
        >
          Matthew Mo
        </motion.h1>

        {/* Scribble underline */}
        <motion.div variants={item} className="flex justify-center mb-2 -mt-2">
          <svg width="340" height="18" viewBox="0 0 340 18" style={{ display: 'block', maxWidth: '90%' }}>
            <motion.path
              d="M 4 12 C 35 5, 70 16, 105 10 C 140 4, 170 15, 200 9 C 230 3, 260 14, 295 8 C 315 4, 328 13, 336 10"
              stroke="#4a90d9"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={scribbleControls}
            />
          </svg>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={item}
          className="font-caveat font-semibold mb-6"
          style={{
            fontSize: 'clamp(20px, 3vw, 28px)',
            color: '#4a90d9',
            letterSpacing: '0.01em'
          }}
        >
          ★ I&apos;m a{' '}
          <PencilWriter
            color="#4a90d9"
            words={[
              'Data Scientist',
              'ML Engineer',
              'Full-Stack Dev',
              'Problem Solver',
            ]}
          />
        </motion.p>

        {/* Description */}
        <motion.p
          variants={item}
          className="text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed"
          style={{ color: '#4a5568', fontFamily: "'Nunito', sans-serif" }}
        >
          University of Waterloo · Building ML systems, predictive models, and data-driven products.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          {/* Primary */}
          <motion.button
            whileHover={{ x: -2, y: -2, boxShadow: '5px 6px 0 #1a1a2e' }}
            whileTap={{ x: 1, y: 1, boxShadow: '1px 2px 0 #1a1a2e' }}
            onClick={() => handleScroll('projects')}
            className="font-caveat text-lg font-bold px-8 py-3 rounded-md"
            style={{
              backgroundColor: '#4a90d9',
              color: '#ffffff',
              boxShadow: '3px 4px 0 #1a1a2e',
              minWidth: '170px'
            }}
          >
            View Projects
          </motion.button>

          {/* Resume */}
          <motion.a
            whileHover={{ x: -2, y: -2, boxShadow: '5px 6px 0 #1a1a2e' }}
            whileTap={{ x: 1, y: 1, boxShadow: '1px 2px 0 #1a1a2e' }}
            href="/Resume_Matthew_Mo_Fall26.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-caveat text-lg font-bold px-8 py-3 rounded-md transition-all duration-200"
            style={{
              border: '2px solid #1a1a2e',
              color: '#1a1a2e',
              backgroundColor: 'transparent',
              boxShadow: '3px 4px 0 #1a1a2e',
              minWidth: '170px',
              textAlign: 'center'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = 'rgba(74,144,217,0.1)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = 'transparent'
            }}
          >
            Resume
          </motion.a>

          {/* GitHub */}
          <motion.a
            whileHover={{ x: -2, y: -2, boxShadow: '5px 6px 0 #1a1a2e' }}
            whileTap={{ x: 1, y: 1, boxShadow: '1px 2px 0 #1a1a2e' }}
            href="https://github.com/MatthewMo520"
            target="_blank"
            rel="noopener noreferrer"
            className="font-caveat text-lg font-bold px-8 py-3 rounded-md transition-all duration-200 flex items-center gap-2 justify-center"
            style={{
              border: '2px solid #1a1a2e',
              color: '#1a1a2e',
              backgroundColor: 'transparent',
              boxShadow: '3px 4px 0 #1a1a2e',
              minWidth: '170px',
              textAlign: 'center'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = 'rgba(26,26,46,0.07)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = 'transparent'
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </motion.a>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          variants={item}
          className="mt-14 flex justify-center"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="flex flex-col items-center gap-1" style={{ color: '#718096' }}>
            <span className="font-caveat text-sm">scroll down</span>
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SpiralBinding from '../components/notebook/SpiralBinding'
import { Star } from '../components/notebook/DoodleElements'

function NotFound() {
  return (
    <div className="min-h-screen notebook-bg flex items-center justify-center relative overflow-hidden">
      <SpiralBinding />

      <Star style={{ position: 'absolute', top: '18%', left: '20%' }} size={20} color="#f0a86f" />
      <Star style={{ position: 'absolute', bottom: '20%', right: '18%' }} size={24} />

      <motion.main
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="text-center px-6 py-20 relative z-10"
        style={{ paddingLeft: 'var(--gutter)' }}
      >
        <h1
          className="font-caveat font-bold leading-none mb-2"
          style={{ fontSize: 'clamp(110px, 22vw, 200px)', color: 'var(--ink)', letterSpacing: '-0.02em' }}
        >
          404
        </h1>

        <h2 className="font-caveat font-bold mb-3" style={{ fontSize: 'clamp(28px, 5vw, 44px)', color: '#4a90d9' }}>
          <span className="highlight-underline">This page got erased</span>
        </h2>

        <p
          className="text-base md:text-lg mb-10 max-w-md mx-auto leading-relaxed"
          style={{ color: 'var(--body)', fontFamily: "'Nunito', sans-serif" }}
        >
          Looks like this page isn&apos;t in the notebook. Let&apos;s flip back to a page that is.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <motion.div whileHover={{ x: -2, y: -2 }} whileTap={{ x: 1, y: 1 }}>
            <Link
              to="/"
              className="inline-block font-caveat text-lg font-bold px-8 py-3 rounded-md"
              style={{ backgroundColor: '#4a90d9', color: '#ffffff', boxShadow: '3px 4px 0 #1a1a2e', minWidth: '180px' }}
            >
              ← Back to Home
            </Link>
          </motion.div>

          <motion.div whileHover={{ x: -2, y: -2 }} whileTap={{ x: 1, y: 1 }}>
            <Link
              to="/#projects"
              className="inline-block font-caveat text-lg font-bold px-8 py-3 rounded-md"
              style={{
                border: '2px solid #1a1a2e',
                color: 'var(--ink)',
                backgroundColor: 'transparent',
                boxShadow: '3px 4px 0 #1a1a2e',
                minWidth: '180px',
                textAlign: 'center',
              }}
            >
              View Projects →
            </Link>
          </motion.div>
        </div>
      </motion.main>
    </div>
  )
}

export default NotFound

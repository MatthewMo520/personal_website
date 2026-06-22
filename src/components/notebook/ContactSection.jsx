import { motion } from 'framer-motion'
import { PaperPlane, Gear, Star, Boba, Goggles } from './DoodleElements'
import PageMarker from './PageMarker'

function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden"
      style={{ paddingLeft: 'var(--gutter)', backgroundColor: 'rgba(245,200,66,0.05)' }}
    >
      <PageMarker number={4} label="contact" color="#b8860b" />
      {/* Doodles */}
      <div className="absolute pointer-events-none" style={{ top: '10%', left: '6%' }}>
        <PaperPlane />
      </div>
      <div className="absolute pointer-events-none" style={{ bottom: '15%', right: '5%' }}>
        <Gear size={60} />
      </div>
      <div className="absolute pointer-events-none" style={{ top: '20%', right: '8%' }}>
        <Gear size={36} style={{ animationDuration: '8s' }} />
      </div>
      <div className="absolute pointer-events-none" style={{ bottom: '12%', left: '7%' }}>
        <Boba size={36} />
      </div>
      <div className="absolute pointer-events-none" style={{ top: '14%', right: '24%' }}>
        <Goggles size={48} />
      </div>
      <Star style={{ position: 'absolute', top: '12%', right: '22%' }} size={18} />
      <Star style={{ position: 'absolute', bottom: '20%', left: '12%' }} size={14} color="#f0a86f" />
      <Star style={{ position: 'absolute', top: '50%', left: '5%' }} size={12} color="#4a90d9" />

      <div className="max-w-xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Section tag */}
          <div className="mb-6">
            <span
              className="font-caveat text-base font-semibold px-3 py-1 rounded-full"
              style={{
                backgroundColor: 'rgba(245,200,66,0.2)',
                color: '#b8860b',
                border: '1.5px dashed #f5c842'
              }}
            >
              ✉ let's talk
            </span>
          </div>

          {/* Heading */}
          <h2
            className="font-caveat font-bold mb-4"
            style={{ fontSize: 'clamp(48px, 8vw, 80px)', color: '#1a1a2e', lineHeight: 1.1 }}
          >
            Get In Touch
          </h2>

          {/* Subtitle */}
          <p
            className="text-base md:text-lg mb-10 leading-relaxed"
            style={{ color: '#4a5568', fontFamily: "'Nunito', sans-serif" }}
          >
            Have a project in mind? Want to collaborate or just say hi?
            <br />
            I'd love to hear from you!
          </p>

          {/* CTA */}
          <motion.a
            whileHover={{ x: -2, y: -2, boxShadow: '6px 7px 0 #1a1a2e' }}
            whileTap={{ x: 1, y: 1, boxShadow: '2px 3px 0 #1a1a2e' }}
            href="mailto:mzmo@uwaterloo.ca"
            className="font-caveat text-xl font-bold inline-block px-10 py-4 rounded-md mb-10"
            style={{
              backgroundColor: '#4a90d9',
              color: '#ffffff',
              boxShadow: '4px 5px 0 #1a1a2e'
            }}
          >
            Contact Me →
          </motion.a>

          {/* Divider */}
          <div className="flex items-center gap-3 my-8">
            <div className="flex-1 h-px" style={{ background: 'repeating-linear-gradient(90deg, #a8c4e0 0 4px, transparent 4px 8px)' }} />
            <span className="font-caveat text-sm" style={{ color: '#6b7280' }}>or find me on</span>
            <div className="flex-1 h-px" style={{ background: 'repeating-linear-gradient(90deg, #a8c4e0 0 4px, transparent 4px 8px)' }} />
          </div>

          {/* Social icons */}
          <div className="flex justify-center gap-6">
            {/* LinkedIn */}
            <motion.a
              whileHover={{ scale: 1.15, y: -3 }}
              href="https://www.linkedin.com/in/matthew-mo520/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200"
              style={{
                backgroundColor: '#ffffff',
                border: '2px solid #a8c4e0',
                boxShadow: '2px 3px 0 #a8c4e0',
                color: '#4a90d9'
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </motion.a>

            {/* GitHub */}
            <motion.a
              whileHover={{ scale: 1.15, y: -3 }}
              href="https://github.com/MatthewMo520"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200"
              style={{
                backgroundColor: '#ffffff',
                border: '2px solid #a8c4e0',
                boxShadow: '2px 3px 0 #a8c4e0',
                color: '#1a1a2e'
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </motion.a>

            {/* Email */}
            <motion.a
              whileHover={{ scale: 1.15, y: -3 }}
              href="mailto:mzmo@uwaterloo.ca"
              aria-label="Email"
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200"
              style={{
                backgroundColor: '#ffffff',
                border: '2px solid #a8c4e0',
                boxShadow: '2px 3px 0 #a8c4e0',
                color: '#f0a86f'
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection

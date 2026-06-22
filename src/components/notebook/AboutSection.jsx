import { motion } from 'framer-motion'
import { Lightbulb, Star, Shuttlecock, Coffee } from './DoodleElements'
import PageMarker from './PageMarker'

const skillSets = [
  {
    category: 'Languages',
    color: '#4a90d9',
    bg: 'rgba(74,144,217,0.12)',
    border: 'rgba(74,144,217,0.3)',
    skills: ['Python', 'SQL', 'SAS', 'C/C++', 'Java','JavaScript']
  },
  {
    category: 'ML / Data',
    color: '#f0a86f',
    bg: 'rgba(240,168,111,0.12)',
    border: 'rgba(240,168,111,0.3)',
    skills: ['Scikit-learn', 'Pandas', 'NumPy', 'PySpark', 'XGBoost']
  },
  {
    category: 'Web Dev',
    color: '#6bc47a',
    bg: 'rgba(107,196,122,0.12)',
    border: 'rgba(107,196,122,0.3)',
    skills: ['React', 'Flask', 'Node.js', 'Express', 'Tailwind CSS']
  },
  {
    category: 'Tools',
    color: '#b8860b',
    bg: 'rgba(245,200,66,0.15)',
    border: 'rgba(245,200,66,0.4)',
    skills: ['Git', 'MongoDB', 'SQLAlchemy', 'Jupyter']
  }
]

const stickyRotations = [-1.5, 1, -0.5, 1.5]

function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 relative overflow-hidden"
      style={{ paddingLeft: 'var(--gutter)', backgroundColor: 'rgba(107,196,122,0.045)' }}
    >
      <PageMarker number={1} label="about" color="#6bc47a" />
      {/* Decorative doodles */}
      <div className="absolute pointer-events-none" style={{ top: '8%', right: '4%' }}>
        <Lightbulb />
      </div>
      <div className="absolute pointer-events-none" style={{ bottom: '10%', left: '4%' }}>
        <Coffee size={44} />
      </div>
      <div className="absolute pointer-events-none" style={{ top: '40%', right: '3%' }}>
        <Shuttlecock size={44} />
      </div>
      <Star style={{ position: 'absolute', top: '12%', left: '8%' }} size={16} color="#f5c842" />
      <Star style={{ position: 'absolute', bottom: '15%', right: '10%' }} size={18} />

      <div className="max-w-5xl mx-auto px-6">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2
            className="font-caveat font-bold inline-block"
            style={{ fontSize: 'clamp(40px, 6vw, 60px)', color: '#1a1a2e' }}
          >
            <span className="highlight-underline">About Me</span>
          </h2>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left — About text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div
              className="relative p-8"
              style={{
                background: '#ffffff',
                border: '2px dashed #a8c4e0',
                borderRadius: '6px',
                boxShadow: '4px 5px 0 rgba(74,144,217,0.12)',
                paddingTop: '28px'
              }}
            >
              {/* Tape */}
              <div className="tape-strip" style={{ left: '35%', transform: 'translateX(-50%) rotate(-1.5deg)' }} />

              <p
                className="text-base leading-relaxed mb-4"
                style={{ color: '#4a5568', fontFamily: "'Nunito', sans-serif" }}
              >
                Hey! I'm <strong style={{ color: '#1a1a2e' }}>Matthew Mo</strong>, a second-year student at the{' '}
                <strong style={{ color: '#4a90d9' }}>University of Waterloo</strong> studying Data Science.
              </p>
              <p
                className="text-base leading-relaxed mb-4"
                style={{ color: '#4a5568', fontFamily: "'Nunito', sans-serif" }}
              >
                I'm passionate about <strong style={{ color: '#1a1a2e' }}>machine learning</strong> and{' '}
                <strong style={{ color: '#1a1a2e' }}>data analysis</strong> — building models that turn raw data
                into meaningful insights, and web apps that bring those insights to life.
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ color: '#4a5568', fontFamily: "'Nunito', sans-serif" }}
              >
                When I'm not training models or debugging APIs, you'll find me at hackathons (we won{' '}
                <strong style={{ color: '#f0a86f' }}>GeeseHacks 2024</strong>!), experimenting with new
                frameworks, or exploring the intersection of AI and real-world problems.
              </p>

              {/* Quick facts */}
              <div className="mt-6 flex flex-wrap gap-3">
                {['📍 Toronto, ON / Waterloo, ON', '🎓 Data Science @ UWaterloo', '🏆 Hackathon Winner', '🤖 ML Enthusiast'].map((fact) => (
                  <span
                    key={fact}
                    className="font-caveat text-sm font-semibold px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: 'rgba(74,144,217,0.08)',
                      color: '#4a5568',
                      border: '1.5px dashed #a8c4e0'
                    }}
                  >
                    {fact}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Skills sticky notes */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="grid grid-cols-2 gap-5"
          >
            {skillSets.map((set, si) => (
              <motion.div
                key={set.category}
                initial={{ opacity: 0, y: 20, rotate: stickyRotations[si] }}
                whileInView={{ opacity: 1, y: 0, rotate: stickyRotations[si] }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: si * 0.1 }}
                whileHover={{ rotate: 0, y: -4, transition: { duration: 0.2 } }}
                className="relative p-4"
                style={{
                  background: set.bg,
                  border: `2px solid ${set.border}`,
                  borderRadius: '4px',
                  boxShadow: `3px 4px 0 ${set.border}`,
                  paddingTop: '26px'
                }}
              >
                {/* Mini tape */}
                <div
                  style={{
                    position: 'absolute',
                    top: '-9px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '36px',
                    height: '16px',
                    background: 'rgba(245,200,66,0.5)',
                    borderRadius: '2px'
                  }}
                />
                <p
                  className="font-caveat font-bold mb-2 text-sm"
                  style={{ color: set.color }}
                >
                  {set.category}
                </p>
                <div className="flex flex-col gap-1">
                  {set.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs"
                      style={{ color: '#4a5568', fontFamily: "'Nunito', sans-serif" }}
                    >
                      · {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

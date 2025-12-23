function About() {
  const skills = [
    { name: 'Python', category: 'Language' },
    { name: 'Java', category: 'Language' },
    { name: 'JavaScript', category: 'Language' },
    { name: 'C/C++', category: 'Language' },
    { name: 'SQL', category: 'Database' },
    { name: 'React', category: 'Framework' },
    { name: 'Flask', category: 'Framework' },
    { name: 'Node.js', category: 'Runtime' },
    { name: 'Pandas', category: 'Library' },
    { name: 'NumPy', category: 'Library' },
    { name: 'Git', category: 'Tool' },
    { name: 'Excel/VBA', category: 'Tool' }
  ]

  return (
    <section className="py-20 relative" style={{ backgroundColor: '#1A2942' }}>
      {/* Subtle decorative shapes */}
      <div className="absolute top-10 left-10 w-32 h-32 rounded-full opacity-[0.03]" style={{ backgroundColor: '#2B3F5C' }}></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 opacity-[0.03]" style={{ backgroundColor: '#3D5470', borderRadius: '30%' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            About Me
          </h2>
          <div className="w-20 h-1 mx-auto" style={{ backgroundColor: '#D4A574' }}></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Bio Section */}
            <div>
              <h3
                className="text-2xl md:text-3xl font-semibold mb-6"
                style={{ color: '#D4A574' }}
              >
                Background
              </h3>
              <div className="space-y-4 leading-relaxed text-base md:text-lg" style={{ color: '#E5E7EB' }}>
                <p>
                  I'm a Data Science student at the University of Waterloo with a strong foundation in
                  programming, data analysis, and full-stack development. I specialize in building
                  web applications and developing data-driven solutions to real-world problems.
                </p>
                <p>
                  My experience spans web development, financial analysis, and automation. I've worked
                  on projects ranging from real-time stock analysis dashboards to computer vision safety
                  systems, winning Best Beginner Hack at GeeseHacks 2024 with LinkedIt.
                </p>
                <p>
                  I combine technical skills with analytical thinking to create practical, scalable
                  solutions. Whether it's streamlining financial processes through Excel automation
                  or building interactive data visualizations, I focus on delivering measurable results.
                </p>
              </div>
            </div>

            {/* Skills Section */}
            <div>
              <h3
                className="text-2xl md:text-3xl font-semibold mb-6"
                style={{ color: '#D4A574' }}
              >
                Technical Skills
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="px-4 py-3 rounded-lg border transition-all duration-300 transform hover:scale-105 cursor-pointer"
                    style={{
                      backgroundColor: '#2B3F5C',
                      borderColor: '#5B8FB9'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#D4A574'
                      e.currentTarget.style.boxShadow = '0 4px 15px rgba(212, 165, 116, 0.2)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#5B8FB9'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  >
                    <div className="text-white font-medium text-sm">{skill.name}</div>
                    <div className="text-xs mt-1" style={{ color: '#6BA3C4' }}>{skill.category}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
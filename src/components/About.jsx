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
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Bio Section */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">
                Background
              </h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I'm a Data Science student at the University of Waterloo with a strong foundation in
                  programming, data analysis, and machine learning. I specialize in building full-stack
                  applications and developing data-driven solutions to complex problems.
                </p>
                <p>
                  My experience spans multiple domains including web development, financial analysis,
                  and machine learning. I've worked on projects ranging from real-time stock analysis
                  dashboards to AI-powered health monitoring systems.
                </p>
                <p>
                  I combine technical expertise with analytical thinking to create practical,
                  scalable solutions. Whether it's developing web applications or analyzing market
                  trends, I focus on delivering measurable results.
                </p>
              </div>
            </div>

            {/* Skills Section */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">
                Technical Skills
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="bg-gray-700 px-4 py-3 rounded-lg border border-gray-600 hover:border-blue-600 transition-colors"
                  >
                    <div className="text-white font-medium text-sm">{skill.name}</div>
                    <div className="text-gray-400 text-xs mt-1">{skill.category}</div>
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
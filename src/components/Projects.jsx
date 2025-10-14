function Projects() {
  const projects = [
    {
      title: "Stock Analysis Dashboard",
      description: "Interactive web application for real-time stock analysis and visualization. Features comprehensive stock data, technical indicators, moving averages, and dynamic charting capabilities.",
      tech: ["Python", "Streamlit", "Pandas", "Plotly"],
      image: "/images/Stock_Dashboard.png",
      link: "https://github.com/MatthewMo520/stock-dashboard",
      liveLink: "https://stock-dashboard-matthew-mo.streamlit.app/",
      featured: true
    },
    {
      title: "LinkedIt",
      description: "Winner of Geesehacks 2024 Best Beginner Hack. Streamlines finding and contacting LinkedIn sponsors by automating profile searches and email extraction.",
      tech: ["React", "Flask", "Selenium", "Tailwind CSS"],
      image: "/images/LinkedIt.png",
      link: "https://github.com/MatthewMo520/LinkedIt",
      devpost: "https://devpost.com/software/linkedit",
      featured: true
    },
    {
      title: "AgeWell",
      description: "Integrated suite of tools designed to improve day-to-day safety and independence for people living with Alzheimer's disease while giving caregivers actionable, real-time information.",
      tech: ["React", "Express", "YOLOv8", "MongoDB"],
      image: "/images/agewell.png",
      link: "https://github.com/MatthewMo520/Terrahacks2025",
      devpost: "https://devpost.com/software/elderlyassist"
    },
    {
      title: "TaskFlow",
      description: "Comprehensive task management application designed to streamline productivity and collaboration with intuitive workflow management.",
      tech: ["Flask", "SQLAlchemy", "Python", "Jinja2"],
      image: "/images/taskflow.png",
      link: "https://github.com/MatthewMo520/TaskFlow",
      liveLink: "https://taskflow.matthew-mo.com/"
    }
  ]

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A selection of my recent work in web development, data analysis, and automation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg border border-gray-700 overflow-hidden hover:border-gray-600 transition-colors"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                {project.featured && (
                  <div className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-md text-xs font-semibold">
                    Featured
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-800 text-gray-300 px-3 py-1 rounded-md text-xs border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3 text-sm">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
                  >
                    GitHub →
                  </a>
                  {project.devpost && (
                    <a
                      href={project.devpost}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-400 hover:text-green-300 font-medium transition-colors"
                    >
                      Devpost →
                    </a>
                  )}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 font-medium transition-colors"
                    >
                      Live Demo →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
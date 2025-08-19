function Projects() {
  const projects = [
    {
      title: "LinkedIt",
      description: "🎉 Winner of Geesehacks 2024 Best Beginner Hack! Making LinkedIn connections easier - one link at a time. Streamlines finding and contacting sponsors by automating profile searches and email extraction.",
      tech: ["React", "Flask", "Selenium", "Tailwind CSS", "Axios"],
      image: "/src/assets/LinkedIt.png",
      link: "https://github.com/MatthewMo520/LinkedIt",
      devpost: "https://devpost.com/software/linkedit"
    },
    {
      title: "AgeWell",
      description: "TerraHack project - An integrated suite of tools designed to improve day-to-day safety and independence for people living with Alzheimer's disease while giving caregivers actionable, real-time information.",
      tech: ["React", "Express", "YOLOv8", "MediaPipe", "MongoDB", "Twilio", "Leaflet"],
      image: "/src/assets/agewell.png",
      link: "https://github.com/MatthewMo520/Terrahacks2025",
      devpost: "https://devpost.com/software/elderlyassist?ref_content=user-portfolio&ref_feature=in_progress"
    },
    {
      title: "TaskFlow",
      description: "A comprehensive task management application designed to streamline productivity and collaboration with intuitive workflow management.",
      tech: ["Flask", "SQLAlchemy", "Flask-SCSS", "Python", "Jinja2"],
      image: "/src/assets/taskflow.png",
      link: "https://github.com/MatthewMo520/TaskFlow",
      liveLink: "https://taskflow.matthew-mo.com/"
    },
    {
      title: "Coded Games",
      description: "Browser-based versions of classic games built with React. Features Tetris, Minesweeper, and Solitaire with responsive design and smooth animations.",
      tech: ["React", "Vite", "Tailwind CSS", "JavaScript"],
      image: "https://images.unsplash.com/photo-1556438064-2d7646166914?w=500&h=300&fit=crop",
      link: "https://github.com/MatthewMo520/coded-games"
    }
  ]

  return (
    <section className="relative py-20 md:py-32 bg-gray-900 transition-all duration-700">
      {/* Smooth transition from previous section */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-gray-800 via-gray-850 to-gray-900"></div>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-850"></div>
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
      {/* Smooth transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-800 via-gray-850 to-gray-900"></div>
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-100 mb-4 transform transition-all duration-700 hover:scale-105">My Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-4 transition-all duration-500">
            Here are some of the projects I've worked on recently
          </p>
          <p className="text-gray-500 text-sm">← Scroll to see more →</p>
        </div>
        
        <div className="overflow-x-auto pb-6 scrollbar-hide">
          <div className="flex gap-8 w-max">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden hover:border-gray-600 hover:scale-105 transition-all duration-500 w-80 flex-shrink-0">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-100 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-gray-700 text-blue-400 px-3 py-1 rounded-full text-sm border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a 
                      href={project.link}
                      className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-300"
                    >
                      GitHub →
                    </a>
                    {project.devpost && (
                      <a 
                        href={project.devpost}
                        className="text-green-400 hover:text-green-300 font-medium transition-colors duration-300"
                      >
                        Devpost →
                      </a>
                    )}
                    {project.liveLink && (
                      <a 
                        href={project.liveLink}
                        className="text-purple-400 hover:text-purple-300 font-medium transition-colors duration-300"
                      >
                        Live App →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
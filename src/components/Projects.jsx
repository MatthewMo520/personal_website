function Projects() {
  const projects = [
    {
      title: "Movie Sentiment Analysis",
      description: "NLP project analyzing 50,000 IMDB movie reviews to predict positive or negative sentiment. Achieved 88.74% accuracy using Logistic Regression with TF-IDF vectorization, processing and extracting 5,000 key features from review text.",
      tech: ["Python", "Scikit-learn", "NLTK", "Pandas", "TF-IDF"],
      image: "/images/Movie-Sentiment-Analysis.png",
      link: "https://github.com/MatthewMo520/movie-sentiment-analysis",
      featured: true
    },
    {
      title: "Customer Churn Prediction",
      description: "Machine learning project that predicts which telecom customers are likely to leave using classification algorithms. Achieved 78.54% accuracy with Random Forest, analyzing 7,032 customer records to identify key churn predictors.",
      tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
      image: "/images/Customer_churn_project.png",
      link: "https://github.com/MatthewMo520/customer_churn_project",
      featured: true
    },
    {
      title: "Flight Price Tracker",
      description: "Web application that searches and compares flight prices from Kayak.com. Helps users find the cheapest flights by displaying results in an organized table with booking options.",
      tech: ["React", "Flask", "Selenium", "BeautifulSoup", "Python"],
      image: "/images/flight-price-tracker.png",
      link: "https://github.com/MatthewMo520/Flight-Price-Tracker",
      featured: true
    },
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
      tech: ["Flask", "SQLAlchemy", "Python"],
      image: "/images/taskflow.png",
      link: "https://github.com/MatthewMo520/TaskFlow",
      liveLink: "https://taskflow.matthew-mo.com/"
    }
  ]

  return (
    <section className="py-20" style={{ backgroundColor: '#1A2942' }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Projects
          </h2>
          <div className="w-20 h-1 mx-auto mb-4" style={{ backgroundColor: '#D4A574' }}></div>
          <p className="max-w-2xl mx-auto text-base md:text-lg" style={{ color: '#E5E7EB' }}>
            A selection of my recent work in web development, data analysis, and automation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-lg border overflow-hidden transition-all duration-300"
              style={{
                backgroundColor: '#0A1929',
                borderColor: '#2B3F5C'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#D4A574'
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(212, 165, 116, 0.15)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#2B3F5C'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-300"
                  style={{ backgroundColor: '#0A1929' }}
                ></div>
                {project.featured && (
                  <div
                    className="absolute top-3 right-3 px-3 py-1 rounded-md text-xs font-semibold"
                    style={{
                      backgroundColor: '#D4A574',
                      color: '#0A1929'
                    }}
                  >
                    Featured
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p
                  className="mb-4 text-sm md:text-base leading-relaxed"
                  style={{ color: '#E5E7EB' }}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 rounded-md text-xs border transition-all duration-300"
                      style={{
                        backgroundColor: '#2B3F5C',
                        borderColor: '#5B8FB9',
                        color: '#FFFFFF'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = '#D4A574'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = '#5B8FB9'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3 text-sm font-medium">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors duration-300"
                    style={{ color: '#5B8FB9' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#89B4D4'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#5B8FB9'
                    }}
                  >
                    GitHub →
                  </a>
                  {project.devpost && (
                    <a
                      href={project.devpost}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors duration-300"
                      style={{ color: '#3A6B5B' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#557F6F'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#3A6B5B'
                      }}
                    >
                      Devpost →
                    </a>
                  )}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors duration-300"
                      style={{ color: '#D4A574' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#E8B87E'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#D4A574'
                      }}
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
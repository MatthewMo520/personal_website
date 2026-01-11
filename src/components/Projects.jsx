import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import ProjectModal from './ProjectModal'

function ProjectCard({ project, index, onClick }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15, triggerOnce: false })

  return (
    <div
      ref={ref}
      onClick={onClick}
      className={`rounded-lg border overflow-hidden transition-all duration-300 cursor-pointer ${isVisible ? 'scroll-visible' : 'scroll-hidden'}`}
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
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onClick()
        }
      }}
      aria-label={`View details for ${project.title}`}
    >
      <div className="relative group">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
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
  )
}

function Projects() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15, triggerOnce: false })
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedProject(null), 300)
  }

  const projects = [
    {
      title: "Movie Sentiment Analysis",
      description: "NLP project analyzing 50,000 IMDB movie reviews to predict positive or negative sentiment. Achieved 88.74% accuracy using Logistic Regression with TF-IDF vectorization, processing and extracting 5,000 key features from review text.",
      detailedDescription: "Developed a comprehensive sentiment analysis system that processes and analyzes 50,000 IMDB movie reviews to classify them as positive or negative. The project implements advanced NLP techniques including text preprocessing, tokenization, and TF-IDF vectorization. Through rigorous model comparison and evaluation, achieved optimal performance with Logistic Regression, demonstrating the effectiveness of traditional ML approaches for text classification tasks.",
      tech: ["Python", "Scikit-learn", "NLTK", "Pandas", "TF-IDF"],
      image: "/images/Movie-Sentiment-Analysis.png",
      link: "https://github.com/MatthewMo520/movie-sentiment-analysis",
      category: "Machine Learning",
      impact: "88.74% accuracy with Logistic Regression",
      teamSize: "Solo Project",
      duration: "2 weeks",
      completionDate: "December 2024",
      features: [
        "Text preprocessing and cleaning with NLTK",
        "TF-IDF vectorization with 5,000 key features",
        "Multiple model comparison (Logistic Regression, SVM, Random Forest)",
        "Comprehensive model evaluation and performance metrics",
        "Handling of imbalanced dataset challenges"
      ],
      challenges: "Managing large dataset size and addressing class imbalance while maintaining model generalization.",
      learnings: "Gained deep understanding of NLP preprocessing pipelines, TF-IDF feature extraction, and the importance of proper model evaluation in text classification.",
      featured: true
    },
    {
      title: "Customer Churn Prediction",
      description: "Machine learning project that predicts which telecom customers are likely to leave using classification algorithms. Achieved 78.54% accuracy with Random Forest, analyzing 7,032 customer records to identify key churn predictors.",
      tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
      image: "/images/Customer_churn_project.png",
      link: "https://github.com/MatthewMo520/customer_churn_project",
      category: "Machine Learning",
      featured: true
    },
    {
      title: "Flight Price Tracker",
      description: "Web application that searches and compares flight prices from Kayak.com. Helps users find the cheapest flights by displaying results in an organized table with booking options.",
      tech: ["React", "Flask", "Selenium", "BeautifulSoup", "Python"],
      image: "/images/flight-price-tracker.png",
      link: "https://github.com/MatthewMo520/Flight-Price-Tracker",
      category: "Web Development",
      featured: true
    },
    {
      title: "Stock Analysis Dashboard",
      description: "Interactive web application for real-time stock analysis and visualization. Features comprehensive stock data, technical indicators, moving averages, and dynamic charting capabilities.",
      tech: ["Python", "Streamlit", "Pandas", "Plotly"],
      image: "/images/Stock_Dashboard.png",
      link: "https://github.com/MatthewMo520/stock-dashboard",
      liveLink: "https://stock-dashboard-matthew-mo.streamlit.app/",
      category: "Data Science",
      featured: true
    },
    {
      title: "LinkedIt",
      description: "Winner of Geesehacks 2024 Best Beginner Hack. Streamlines finding and contacting LinkedIn sponsors by automating profile searches and email extraction.",
      detailedDescription: "Award-winning web application that revolutionizes the hackathon sponsorship outreach process. LinkedIt automates the time-consuming task of finding and contacting potential sponsors on LinkedIn by intelligently scraping profiles and extracting contact information. The tool significantly reduces the manual effort required for sponsor outreach, allowing hackathon organizers to focus on creating great events.",
      tech: ["React", "Flask", "Selenium", "Tailwind CSS"],
      image: "/images/LinkedIt.png",
      link: "https://github.com/MatthewMo520/LinkedIt",
      devpost: "https://devpost.com/software/linkedit",
      category: "Web Development",
      impact: "Winner of GeeseHacks 2024 Best Beginner Hack",
      teamSize: "Team of 4",
      duration: "24 hours",
      completionDate: "November 2024",
      features: [
        "Automated LinkedIn profile search and scraping",
        "Email extraction and validation",
        "Modern, responsive React interface",
        "Flask backend for web scraping orchestration",
        "Selenium-based automation for reliable data extraction"
      ],
      challenges: "Handling LinkedIn's dynamic content loading and implementing robust error handling for web scraping operations.",
      learnings: "Mastered web scraping techniques, Selenium automation, and learned the importance of user-friendly interfaces for technical tools.",
      featured: true
    },
    {
      title: "AgeWell",
      description: "Integrated suite of tools designed to improve day-to-day safety and independence for people living with Alzheimer's disease while giving caregivers actionable, real-time information.",
      tech: ["React", "Express", "YOLOv8", "MongoDB"],
      image: "/images/agewell.png",
      link: "https://github.com/MatthewMo520/Terrahacks2025",
      devpost: "https://devpost.com/software/elderlyassist",
      category: "Web Development"
    },
    {
      title: "TaskFlow",
      description: "Comprehensive task management application designed to streamline productivity and collaboration with intuitive workflow management.",
      tech: ["Flask", "SQLAlchemy", "Python"],
      image: "/images/taskflow.png",
      link: "https://github.com/MatthewMo520/TaskFlow",
      liveLink: "https://taskflow.matthew-mo.com/",
      category: "Web Development"
    }
  ]

  const categories = ['All', 'Web Development', 'Data Science', 'Machine Learning']

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory
    const matchesSearch = searchQuery === '' ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tech.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  return (
    <section className="py-20" style={{ backgroundColor: '#1A2942' }}>
      <div className="container mx-auto px-6">
        <div ref={ref} className={`text-center mb-16 ${isVisible ? 'scroll-visible' : 'scroll-hidden'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Projects
          </h2>
          <div className="w-20 h-1 mx-auto mb-4" style={{ backgroundColor: '#D4A574' }}></div>
          <p className="max-w-2xl mx-auto text-base md:text-lg" style={{ color: '#E5E7EB' }}>
            Hackathon projects, ML experiments, and web apps I've built to solve problems or just for fun
          </p>
        </div>

        {/* Filter and Search Section */}
        <div className="max-w-6xl mx-auto mb-12">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative max-w-md mx-auto">
              <input
                type="text"
                placeholder="Search projects or technologies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search projects"
                className="w-full px-4 py-3 pl-12 rounded-lg text-white transition-all duration-300 focus:outline-none"
                style={{
                  backgroundColor: '#0A1929',
                  border: '2px solid #2B3F5C'
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = '#D4A574'
                  e.currentTarget.style.boxShadow = '0 0 0 3px rgba(212, 165, 116, 0.1)'
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = '#2B3F5C'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              />
              <svg
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5"
                style={{ color: '#9CA3AF' }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 transition-colors duration-300"
                  style={{ color: '#9CA3AF' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#D4A574'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#9CA3AF'
                  }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className="px-6 py-2.5 rounded-lg font-medium transition-all duration-300 border-2"
                style={{
                  backgroundColor: selectedCategory === category ? '#D4A574' : '#2B3F5C',
                  borderColor: selectedCategory === category ? '#D4A574' : '#2B3F5C',
                  color: selectedCategory === category ? '#0A1929' : '#FFFFFF'
                }}
                onMouseEnter={(e) => {
                  if (selectedCategory !== category) {
                    e.currentTarget.style.borderColor = '#D4A574'
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedCategory !== category) {
                    e.currentTarget.style.borderColor = '#2B3F5C'
                  }
                }}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Results Count */}
          <div className="text-center">
            <p className="text-sm" style={{ color: '#9CA3AF' }}>
              Showing {filteredProjects.length} of {projects.length} projects
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                index={index}
                onClick={() => handleOpenModal(project)}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <div className="text-4xl mb-4" style={{ color: '#9CA3AF' }}>🔍</div>
              <h3 className="text-xl font-semibold text-white mb-2">No projects found</h3>
              <p style={{ color: '#9CA3AF' }}>
                Try adjusting your filters or search query
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  )
}

export default Projects
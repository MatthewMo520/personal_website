import { useState } from 'react'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
import ProjectModal from '../ProjectModal'
import { BarChart, Star } from './DoodleElements'

const projects = [
  {
    title: "Movie Sentiment Analysis",
    description: "NLP project analyzing 50,000 IMDB movie reviews to predict positive or negative sentiment. Achieved 88.74% accuracy using Logistic Regression with TF-IDF vectorization, processing and extracting 5,000 key features from review text.",
    detailedDescription: "Developed a comprehensive sentiment analysis system that processes and analyzes 50,000 IMDB movie reviews to classify them as positive or negative. The project implements advanced NLP techniques including text preprocessing, tokenization, and TF-IDF vectorization. Through rigorous model comparison and evaluation, achieved optimal performance with Logistic Regression.",
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
    ],
    challenges: "Managing large dataset size and addressing class imbalance while maintaining model generalization.",
    learnings: "Gained deep understanding of NLP preprocessing pipelines, TF-IDF feature extraction, and the importance of proper model evaluation.",
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
    detailedDescription: "Award-winning web application that revolutionizes the hackathon sponsorship outreach process. LinkedIt automates the time-consuming task of finding and contacting potential sponsors on LinkedIn by intelligently scraping profiles and extracting contact information.",
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

function ProjectsSection() {
  const [showAll, setShowAll] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const displayedProjects = showAll ? projects : projects.slice(0, 3)

  const handleOpenModal = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  return (
    <section
      id="projects"
      className="py-20 relative overflow-hidden"
      style={{ paddingLeft: '56px' }}
    >
      {/* Decorative doodles */}
      <div className="absolute pointer-events-none" style={{ top: '5%', right: '3%' }}>
        <BarChart />
      </div>
      <Star style={{ position: 'absolute', top: '8%', left: '8%' }} size={16} />
      <Star style={{ position: 'absolute', bottom: '10%', right: '8%' }} size={20} color="#f0a86f" />

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
            <span className="highlight-underline">Featured Projects</span>
          </h2>
          <p
            className="mt-4 text-base md:text-lg max-w-xl mx-auto"
            style={{ color: '#4a5568', fontFamily: "'Nunito', sans-serif" }}
          >
            Hackathon wins, ML experiments, and web apps I've built to solve real problems
          </p>
        </motion.div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              onClick={handleOpenModal}
            />
          ))}
        </div>

        {/* View all / collapse button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ x: -2, y: -2, boxShadow: '5px 6px 0 #1a1a2e' }}
            whileTap={{ x: 1, y: 1, boxShadow: '1px 2px 0 #1a1a2e' }}
            onClick={() => setShowAll(!showAll)}
            className="font-caveat text-lg font-bold px-8 py-3 rounded-md transition-all duration-200"
            style={{
              border: '2px solid #1a1a2e',
              color: '#1a1a2e',
              backgroundColor: 'transparent',
              boxShadow: '3px 4px 0 #1a1a2e'
            }}
          >
            {showAll ? '← Show Less' : 'View All Projects →'}
          </motion.button>
        </motion.div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  )
}

export default ProjectsSection

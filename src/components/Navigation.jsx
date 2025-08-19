import mLogo from '../assets/m-logo.svg'

function Navigation() {
  const handleScroll = (e, targetId) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-700/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img 
              src={mLogo} 
              alt="M Logo" 
              className="w-8 h-8 transition-transform duration-300 hover:scale-110"
            />
            <span className="text-xl font-bold text-gray-100">
              Matthew Mo
            </span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a 
              href="#home" 
              onClick={(e) => handleScroll(e, 'home')}
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300 cursor-pointer"
            >
              Home
            </a>
            <a 
              href="#about" 
              onClick={(e) => handleScroll(e, 'about')}
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300 cursor-pointer"
            >
              About
            </a>
            <a 
              href="#experience" 
              onClick={(e) => handleScroll(e, 'experience')}
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300 cursor-pointer"
            >
              Experience
            </a>
            <a 
              href="#projects" 
              onClick={(e) => handleScroll(e, 'projects')}
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300 cursor-pointer"
            >
              Projects
            </a>
            <a 
              href="#portfolio" 
              onClick={(e) => handleScroll(e, 'portfolio')}
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300 cursor-pointer"
            >
              Investments
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleScroll(e, 'contact')}
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300 cursor-pointer"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
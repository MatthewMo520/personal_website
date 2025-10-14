import backgroundImage from '../assets/backgroundimage.png'

function Hero() {
  const handleScroll = (targetId) => {
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gray-900">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800"></div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Matthew Mo
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Data Science Student | Full-Stack Developer
          </p>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            University of Waterloo • Building data-driven web applications and financial analysis tools
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => handleScroll('projects')}
              className="px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium min-w-[180px]"
            >
              View Projects
            </button>
            <a
              href="/Resume_Matthew_Mo.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition-colors font-medium min-w-[180px] text-center"
            >
              Download Resume
            </a>
            <button
              onClick={() => handleScroll('contact')}
              className="px-8 py-3 border border-gray-600 text-gray-300 rounded-md hover:border-gray-500 hover:text-white transition-colors font-medium min-w-[180px]"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
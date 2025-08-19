function Contact() {
  return (
    <section className="relative py-20 md:py-32 bg-gray-800 text-white transition-all duration-700">
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-gray-800/0 to-gray-800"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-750 to-gray-800"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-100 mb-4 transform transition-all duration-700 hover:scale-105">Get In Touch</h2>
          <p className="text-gray-400 max-w-2xl mx-auto transition-all duration-500">
            I'm always open to discussing new opportunities and interesting projects
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16">
          <div className="transform transition-all duration-700 hover:translate-x-2">
            <h3 className="text-2xl font-semibold text-gray-200 mb-8">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center group">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4 transition-all duration-300 group-hover:scale-110">
                  <span className="text-sm">📧</span>
                </div>
                <span className="text-gray-300 transition-colors duration-300 group-hover:text-blue-400">mzmo@uwaterloo.ca</span>
              </div>
              <div className="flex items-center group">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4 transition-all duration-300 group-hover:scale-110">
                  <span className="text-sm">📱</span>
                </div>
                <span className="text-gray-300 transition-colors duration-300 group-hover:text-blue-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center group">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4 transition-all duration-300 group-hover:scale-110">
                  <span className="text-sm">📍</span>
                </div>
                <span className="text-gray-300 transition-colors duration-300 group-hover:text-blue-400">Your City, Country</span>
              </div>
            </div>
            
            <div className="mt-12">
              <h4 className="text-lg font-semibold text-gray-200 mb-6">Follow Me</h4>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/matthew-mo520/" target="_blank" rel="noopener noreferrer" className="bg-gray-700 border border-gray-600 p-4 rounded-xl hover:bg-gray-600 hover:border-blue-500 transform transition-all duration-300 hover:scale-105">
                  LinkedIn
                </a>
                <a href="https://github.com/MatthewMo520" target="_blank" rel="noopener noreferrer" className="bg-gray-700 border border-gray-600 p-4 rounded-xl hover:bg-gray-600 hover:border-blue-500 transform transition-all duration-300 hover:scale-105">
                  GitHub
                </a>
              </div>
            </div>
          </div>
          
          <div className="transform transition-all duration-700 hover:translate-x-2">
            <h3 className="text-2xl font-semibold text-gray-200 mb-8">Send Message</h3>
            <form className="space-y-6">
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name"
                  className="w-full px-4 py-4 bg-gray-700 border border-gray-600 rounded-xl focus:outline-none focus:border-blue-500 text-gray-300 transition-all duration-300 focus:scale-105"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Your Email"
                  className="w-full px-4 py-4 bg-gray-700 border border-gray-600 rounded-xl focus:outline-none focus:border-blue-500 text-gray-300 transition-all duration-300 focus:scale-105"
                />
              </div>
              <div>
                <textarea 
                  placeholder="Your Message"
                  rows="5"
                  className="w-full px-4 py-4 bg-gray-700 border border-gray-600 rounded-xl focus:outline-none focus:border-blue-500 text-gray-300 transition-all duration-300 focus:scale-105"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-blue-600 py-4 rounded-xl font-semibold hover:bg-blue-700 transform transition-all duration-300 hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
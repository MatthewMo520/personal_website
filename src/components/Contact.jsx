function Contact() {
  return (
    <section className="relative py-20 md:py-32 bg-gray-800 text-white transition-all duration-700">
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-gray-800/0 to-gray-800"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-750 to-gray-800"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-100 mb-4">Contact</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Let's connect
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-700 rounded-xl border border-gray-600 p-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold text-gray-100 mb-6">Get in touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <span className="text-gray-400 w-16">Email</span>
                    <span className="text-gray-200">mzmo@uwaterloo.ca</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-400 w-16">Phone</span>
                    <span className="text-gray-200">437-982-6562</span>
                  </div>
                </div>
                
                <div className="mt-8">
                  <div className="flex flex-wrap gap-3">
                    <a 
                      href="/Resume_Matthew_Mo.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white text-sm transition-colors"
                    >
                      Resume
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/matthew-mo520/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-gray-600 hover:bg-gray-500 px-4 py-2 rounded-lg text-gray-200 text-sm transition-colors"
                    >
                      LinkedIn
                    </a>
                    <a 
                      href="https://github.com/MatthewMo520" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-gray-600 hover:bg-gray-500 px-4 py-2 rounded-lg text-gray-200 text-sm transition-colors"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-100 mb-6">Send a message</h3>
                <form className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Name"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-gray-300"
                  />
                  <input 
                    type="email" 
                    placeholder="Email"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-gray-300"
                  />
                  <textarea 
                    placeholder="Message"
                    rows="4"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-gray-300"
                  ></textarea>
                  <button 
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-medium text-white transition-colors"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
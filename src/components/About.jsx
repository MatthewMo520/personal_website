function About() {
  return (
    <section className="relative py-20 md:py-32 bg-gray-800 transition-all duration-700">
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-gray-800/0 to-gray-800"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-800 to-gray-750"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-gray-700/10 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-800 via-gray-820 to-gray-800"></div>
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">About Me</h2>
          <p className="text-gray-400 max-w-2xl mx-auto px-4">
            Data Science student at University of Waterloo with passion for technology and innovation
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-200 mb-6">
              My Story
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed transition-colors duration-300 hover:text-gray-300">
              I'm a Data Science student at the University of Waterloo with a strong foundation in 
              programming, data analysis, and machine learning. I have experience in full-stack 
              development and enjoy building innovative solutions to real-world problems.
            </p>
            <p className="text-gray-400 mb-6 leading-relaxed transition-colors duration-300 hover:text-gray-300">
              My technical expertise spans multiple programming languages and frameworks, with 
              particular strength in Python, Java, and web technologies. I'm passionate about 
              leveraging data to drive insights and create meaningful applications.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-200 mb-6 md:mb-8">Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {['Python', 'Java', 'Javascript', 'C', 'C++', 'HTML/CSS', 'SQL', 'Excel VBA'].map((skill, index) => (
                <div 
                  key={skill} 
                  className="bg-gray-700 px-4 py-3 rounded-xl text-center border border-gray-600 transform transition-all duration-500 hover:scale-105 hover:border-blue-500 hover:bg-gray-600"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="text-gray-300 font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
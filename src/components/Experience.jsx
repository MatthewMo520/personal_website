import { useState, useEffect, useRef } from 'react'

function Experience() {
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef(null)
  const itemRefs = useRef([])

  const experiences = [
    {
      title: "Accounting Associate",
      company: "Stratos Solutions Inc. - Collaborating with Anderson Global",
      period: "May 2025 - Aug 2025",
      description: "Worked alongside senior staff on accounting and tax consulting projects, analyzed client accounting data and prepared in-depth tax research reports. Conducted tax and invoice overpayment recovery analysis using data-driven models for major corporations such as Boeing and PW&C, contributing to recovering over $1M in tax credits.",
      technologies: ["Microsoft Excel", "VBA", "Financial Analysis", "Tax Research"]
    },
    {
      title: "Computer Science Tutor",
      company: "Students Supports Students",
      period: "Sept 2022 - June 2024",
      description: "Taught basic and foundational computer science concepts to a class of 8-14 children (ages 10-12) in weekly sessions, fostering early tech skills and problem-solving abilities through engaging, age-appropriate activities.",
      technologies: ["Teaching", "Computer Science", "Problem Solving", "Communication"]
    },
    {
      title: "Lifeguard and Swim Instructor",
      company: "City of Toronto",
      period: "Dec 2022 - Present",
      description: "Guided swimmers of all ages and skill levels toward achieving their goals, from building foundational skills to refining advanced techniques. Provided a safe and welcoming environment, maintaining vigilance in and around the water to ensure participant safety. Addressed patron concerns professionally, enhancing customer satisfaction through respectful communication and problem resolution.",
      technologies: ["Leadership", "Safety Management", "Customer Service", "Instruction"]
    }
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const containerTop = containerRef.current.offsetTop
      const containerHeight = containerRef.current.offsetHeight
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight

      // Check if we're in the experience section
      if (scrollY + windowHeight / 2 >= containerTop && 
          scrollY <= containerTop + containerHeight) {
        
        // Calculate which experience should be active based on scroll position
        const relativeScroll = scrollY - containerTop + windowHeight / 2
        const sectionHeight = containerHeight / experiences.length
        const newActiveIndex = Math.min(
          Math.max(0, Math.floor(relativeScroll / sectionHeight)),
          experiences.length - 1
        )
        
        setActiveIndex(newActiveIndex)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Call once to set initial state

    return () => window.removeEventListener('scroll', handleScroll)
  }, [experiences.length])

  return (
    <section ref={containerRef} className="relative py-20 md:py-32 bg-gray-800 transition-all duration-700">
      {/* Smooth transition from previous section */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-gray-800/0 to-gray-800"></div>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-800 to-gray-750"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-gray-700/10 to-transparent"></div>
      {/* Smooth transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-800 via-gray-820 to-gray-800"></div>
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-100 mb-4 transform transition-all duration-700 hover:scale-105">Experience</h2>
          <p className="text-gray-400 max-w-2xl mx-auto transition-all duration-500">
            My professional journey and key experiences
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-500"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => {
                const isActive = index === activeIndex
                const scale = isActive ? 'scale-110' : 'scale-95'
                const opacity = isActive ? 'opacity-100' : 'opacity-70'
                
                return (
                  <div 
                    key={index} 
                    ref={el => itemRefs.current[index] = el}
                    className={`relative flex items-start group transition-all duration-700 ${scale} ${opacity}`}
                  >
                    {/* Timeline dot */}
                    <div className={`absolute left-6 w-4 h-4 rounded-full border-4 border-gray-800 transition-all duration-500 ${
                      isActive ? 'bg-blue-400 w-6 h-6 left-5' : 'bg-blue-500'
                    }`}></div>
                    
                    {/* Content */}
                    <div className={`ml-20 transform transition-all duration-700 ${
                      isActive ? 'translate-x-4' : 'translate-x-0'
                    }`}>
                      <div className={`bg-gray-700 p-6 rounded-xl border transition-all duration-500 ${
                        isActive 
                          ? 'border-blue-400 shadow-xl shadow-blue-500/20 bg-gray-650' 
                          : 'border-gray-600'
                      }`}>
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                          <div>
                            <h3 className={`text-xl font-semibold mb-1 transition-colors duration-300 ${
                              isActive ? 'text-white text-2xl' : 'text-gray-100'
                            }`}>{exp.title}</h3>
                            <h4 className={`text-lg font-medium transition-colors duration-300 ${
                              isActive ? 'text-blue-300' : 'text-blue-400'
                            }`}>{exp.company}</h4>
                          </div>
                          <span className={`text-sm md:text-base mt-1 md:mt-0 transition-colors duration-300 ${
                            isActive ? 'text-gray-300' : 'text-gray-400'
                          }`}>{exp.period}</span>
                        </div>
                        
                        <p className={`mb-4 leading-relaxed transition-colors duration-300 ${
                          isActive ? 'text-gray-200' : 'text-gray-300'
                        }`}>
                          {exp.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span 
                              key={techIndex}
                              className={`px-3 py-1 rounded-full text-sm border transition-all duration-300 ${
                                isActive 
                                  ? 'bg-blue-600 text-white border-blue-500' 
                                  : 'bg-gray-600 text-blue-400 border-gray-500'
                              }`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
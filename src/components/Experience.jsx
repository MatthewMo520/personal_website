import { useScrollAnimation } from '../hooks/useScrollAnimation'

function ExperienceCard({ exp, index }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15, triggerOnce: false })

  return (
    <div ref={ref} className={`relative ${isVisible ? 'scroll-visible' : 'scroll-hidden'}`}>
      {/* Timeline dot - Gold */}
      <div
        className="hidden md:block absolute left-6 top-6 w-4 h-4 rounded-full border-4"
        style={{
          backgroundColor: '#D4A574',
          borderColor: '#0A1929'
        }}
      ></div>

      <div className="md:ml-20">
        <div
          className="p-6 rounded-lg border transition-all duration-300 cursor-pointer"
          style={{
            backgroundColor: '#1A2942',
            borderColor: '#2B3F5C'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = '#D4A574'
            e.currentTarget.style.transform = 'translateY(-4px)'
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(212, 165, 116, 0.15)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = '#2B3F5C'
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = 'none'
          }}
        >
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-1">
                {exp.title}
              </h3>
              <h4
                className="text-lg md:text-xl font-medium"
                style={{ color: '#D4A574' }}
              >
                {exp.company}
              </h4>
            </div>
            <span
              className="text-sm mt-2 sm:mt-0"
              style={{ color: '#9CA3AF' }}
            >
              {exp.period}
            </span>
          </div>

          <p
            className="mb-4 leading-relaxed text-base md:text-lg"
            style={{ color: '#E5E7EB' }}
          >
            {exp.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {exp.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-3 py-1 rounded-md text-sm text-white"
                style={{
                  backgroundColor: '#5B8FB9'
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function Experience() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15, triggerOnce: false })

  const experiences = [
    {
      title: "Accounting Associate",
      company: "Stratos Solutions Inc.",
      period: "May 2024 - Aug 2024",
      description: "Worked alongside senior staff on accounting and tax consulting projects. Analyzed client accounting data and prepared in-depth tax research reports. Conducted tax and invoice overpayment recovery analysis using data-driven models for major corporations such as Boeing and PwC, contributing to recovering over $1M in tax credits.",
      technologies: ["Excel", "VBA", "Financial Analysis", "Tax Research"]
    },
    {
      title: "Computer Science Tutor",
      company: "Students Supports Students",
      period: "Sept 2022 - June 2024",
      description: "Taught foundational computer science concepts to classes of 8-14 children (ages 10-12) in weekly sessions. Developed engaging, age-appropriate curriculum to foster early technical skills and problem-solving abilities.",
      technologies: ["Teaching", "Computer Science", "Curriculum Development", "Communication"]
    },
    {
      title: "Lifeguard & Swim Instructor",
      company: "City of Toronto",
      period: "Dec 2022 - May 2024",
      description: "Guided swimmers of all ages and skill levels toward achieving their goals. Maintained a safe environment through vigilant supervision and professional patron interaction, enhancing customer satisfaction through effective communication and problem resolution.",
      technologies: ["Leadership", "Safety Management", "Customer Service", "Training"]
    }
  ]

  return (
    <section className="py-20" style={{ backgroundColor: '#0A1929' }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Experience
          </h2>
          <div className="w-20 h-1 mx-auto" style={{ backgroundColor: '#D4A574' }}></div>
        </div>

        <div ref={ref} className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line with gradient at connection points */}
            <div
              className={`hidden md:block absolute left-8 top-0 bottom-0 w-0.5 ${isVisible ? 'scroll-visible' : 'scroll-hidden'}`}
              style={{
                background: `linear-gradient(to bottom,
                  #D4A574 0%,
                  #2B3F5C 10%,
                  #2B3F5C 30%,
                  #D4A574 33%,
                  #2B3F5C 36%,
                  #2B3F5C 63%,
                  #D4A574 66%,
                  #2B3F5C 69%,
                  #2B3F5C 90%,
                  #D4A574 100%
                )`
              }}
            ></div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <ExperienceCard key={index} exp={exp} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
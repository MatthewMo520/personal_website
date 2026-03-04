import { useScrollAnimation } from '../hooks/useScrollAnimation'

function ExperienceCard({ exp, index }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15, triggerOnce: false })

  return (
    <div ref={ref} className={`relative ${isVisible ? 'scroll-visible' : 'scroll-hidden'}`}>
      {/* Timeline dot - Gold */}
      <div
        className="hidden md:block absolute left-6 top-6 w-4 h-4 rounded-full border-4"
        style={{
          backgroundColor: '#4e86d0',
          borderColor: '#060d1b'
        }}
      ></div>

      <div className="md:ml-20">
        <div
          className="p-6 rounded-lg border transition-all duration-300 cursor-pointer"
          style={{
            backgroundColor: '#0a1628',
            borderColor: '#162640'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = '#4e86d0'
            e.currentTarget.style.transform = 'translateY(-4px)'
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(78, 134, 208, 0.15)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = '#162640'
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
                style={{ color: '#4e86d0' }}
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
      title: "Data Science Intern",
      company: "Scotiabank",
      period: "Jan 2026 - Present",
      description: "Working on pricing models for mortgage products and analyzing customer price sensitivity. Also building automated monitoring systems to track how well the models are performing.",
      technologies: ["Python", "Machine Learning", "Data Science", "Product Analytics"]
    },
    {
      title: "ML Engineer",
      company: "AgSights",
      period: "Nov 2025 - Jan 2026",
      description: "Built an AI voice system that lets farmers call in to update their farm records instead of typing everything manually. The system uses speech-to-text and ML to figure out what data goes where in Microsoft Dynamics.",
      technologies: ["Python", "ML", "Speech-to-Text", "Microsoft Dynamics", "NLP"]
    },
    {
      title: "Accounting Associate",
      company: "Stratos Solutions Inc.",
      period: "May 2025 - Aug 2025",
      description: "Analyzed tax and invoice data for big companies like Boeing and PW&C to find overpayments they could recover. Built Excel/VBA tools that turned 3-hour tasks into 10-minute ones. Helped recover over $1M in tax credits.",
      technologies: ["Excel", "VBA", "Financial Analysis", "Tax Research"]
    },
    {
      title: "Computer Science Tutor",
      company: "Students Supports Students",
      period: "Sept 2022 - June 2024",
      description: "Taught computer science basics to kids aged 10-12 in weekly classes. Created lesson plans that made programming concepts fun and accessible for beginners.",
      technologies: ["Teaching", "Computer Science", "Curriculum Development", "Communication"]
    },
    {
      title: "Lifeguard & Swim Instructor",
      company: "City of Toronto",
      period: "Dec 2022 - May 2025",
      description: "Taught swimming lessons and kept the pool safe. Worked with people of all ages and skill levels, from kids learning to float to adults training for competitions.",
      technologies: ["Leadership", "Safety Management", "Customer Service", "Training"]
    }
  ]

  return (
    <section className="py-20" style={{ backgroundColor: 'transparent' }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Experience
          </h2>
          <div className="w-20 h-1 mx-auto" style={{ backgroundColor: '#4e86d0' }}></div>
        </div>

        <div ref={ref} className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line with gradient at connection points */}
            <div
              className={`hidden md:block absolute left-8 top-0 bottom-0 w-0.5 ${isVisible ? 'scroll-visible' : 'scroll-hidden'}`}
              style={{
                background: `linear-gradient(to bottom,
                  #4e86d0 0%,
                  #162640 5%,
                  #162640 18%,
                  #4e86d0 20%,
                  #162640 22%,
                  #162640 38%,
                  #4e86d0 40%,
                  #162640 42%,
                  #162640 58%,
                  #4e86d0 60%,
                  #162640 62%,
                  #162640 78%,
                  #4e86d0 80%,
                  #162640 82%,
                  #162640 95%,
                  #4e86d0 100%
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
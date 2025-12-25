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
      title: "Data Science Intern",
      company: "Scotiabank",
      period: "Jan 2026 - April 2026",
      description: "Building pricing and product recommendation models to enhance customer experience and optimize financial product offerings.",
      technologies: ["Python", "Machine Learning", "Data Science", "Product Analytics"]
    },
    {
      title: "ML Engineer",
      company: "AgSights",
      period: "Nov 2025 - Present",
      description: "Developing an AI-powered voice-enabled system integrated with Microsoft Dynamics to automate farm record entry through phone-based data collection. Building speech-to-text pipeline with ML-based data extraction to parse farmer voice inputs and map structured information to appropriate database columns.",
      technologies: ["Python", "ML", "Speech-to-Text", "Microsoft Dynamics", "NLP"]
    },
    {
      title: "Accounting Associate",
      company: "Stratos Solutions Inc.",
      period: "May 2025 - Aug 2025",
      description: "Conducted tax and invoice overpayment recovery analysis using data-driven models, prepared detailed financial reports and cost analysis for major corporations such as Boeing and PW&C that contributed to recovering over $1M in tax credits while ensuring compliance with contractual requirements. Leveraged Microsoft Office Suite, including advanced Excel functions and VBA, to streamline financial analysis and reporting, reducing tasks that typically took 3 hours to just 10 minutes for client deliverables.",
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
      period: "Dec 2022 - May 2025",
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
                  #2B3F5C 5%,
                  #2B3F5C 18%,
                  #D4A574 20%,
                  #2B3F5C 22%,
                  #2B3F5C 38%,
                  #D4A574 40%,
                  #2B3F5C 42%,
                  #2B3F5C 58%,
                  #D4A574 60%,
                  #2B3F5C 62%,
                  #2B3F5C 78%,
                  #D4A574 80%,
                  #2B3F5C 82%,
                  #2B3F5C 95%,
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
function Experience() {
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
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Experience</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gray-700"></div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-6 top-6 w-4 h-4 rounded-full bg-blue-600 border-4 border-gray-900"></div>

                  <div className="md:ml-20">
                    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-1">
                            {exp.title}
                          </h3>
                          <h4 className="text-lg text-blue-400 font-medium">
                            {exp.company}
                          </h4>
                        </div>
                        <span className="text-sm text-gray-400 mt-2 sm:mt-0">
                          {exp.period}
                        </span>
                      </div>

                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gray-700 text-gray-300 rounded-md text-sm border border-gray-600"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
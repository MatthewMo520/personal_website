import { useScrollAnimation } from '../hooks/useScrollAnimation'

function ContactInfoCard({ icon, label, value }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15, triggerOnce: false })

  return (
    <div ref={ref} className={`flex items-center gap-4 ${isVisible ? 'scroll-visible' : 'scroll-hidden'}`}>
      <div
        className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
        style={{
          background: 'linear-gradient(135deg, #D4A574 0%, #E8B87E 100%)'
        }}
      >
        {icon}
      </div>
      <div>
        <div className="text-sm" style={{ color: '#9CA3AF' }}>{label}</div>
        <div className="text-white">{value}</div>
      </div>
    </div>
  )
}

function ConnectLink({ href, icon, label, stagger }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15, triggerOnce: false })

  return (
    <a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-4 p-3 rounded-lg transition-all duration-300 border ${isVisible ? 'scroll-visible' : 'scroll-hidden'}`}
      style={{
        backgroundColor: '#2B3F5C',
        borderColor: '#5B8FB9'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = '#D4A574'
        e.currentTarget.style.transform = 'translateX(4px)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = '#5B8FB9'
        e.currentTarget.style.transform = 'translateX(0)'
      }}
    >
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center"
        style={{ backgroundColor: '#D4A574' }}
      >
        {icon}
      </div>
      <span className="text-white font-medium">{label}</span>
    </a>
  )
}

function Contact() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15, triggerOnce: false })

  return (
    <section className="py-20" style={{ backgroundColor: '#1A2942' }}>
      <div className="container mx-auto px-6">
        <div ref={ref} className={`text-center mb-16 ${isVisible ? 'scroll-visible' : 'scroll-hidden'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Get In Touch
          </h2>
          <div className="w-20 h-1 mx-auto mb-4" style={{ backgroundColor: '#D4A574' }}></div>
          <p className="max-w-2xl mx-auto text-base md:text-lg" style={{ color: '#E5E7EB' }}>
            I'm always open to discussing new opportunities, projects, or collaborations
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div>
              <h3
                className={`text-2xl md:text-3xl font-semibold mb-6 ${isVisible ? 'scroll-visible' : 'scroll-hidden'}`}
                style={{ color: '#D4A574' }}
              >
                Contact Information
              </h3>
              <div className="space-y-4 mb-8">
                <ContactInfoCard
                  icon={
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                  }
                  label="Email"
                  value="mzmo@uwaterloo.ca"
                />
                <ContactInfoCard
                  icon={
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                    </svg>
                  }
                  label="Phone"
                  value="437-982-6562"
                />
              </div>

              <h3
                className={`text-2xl md:text-3xl font-semibold mb-6 ${isVisible ? 'scroll-visible' : 'scroll-hidden'}`}
                style={{ color: '#D4A574' }}
              >
                Connect
              </h3>
              <div className="space-y-3">
                <ConnectLink
                  href="/Resume_Matthew_Mo.pdf"
                  icon={
                    <svg className="w-5 h-5" style={{ color: '#0A1929' }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd"></path>
                    </svg>
                  }
                  label="View Resume"
                />
                <ConnectLink
                  href="https://www.linkedin.com/in/matthew-mo520/"
                  icon={
                    <svg className="w-5 h-5" style={{ color: '#0A1929' }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"></path>
                    </svg>
                  }
                  label="LinkedIn"
                />
                <ConnectLink
                  href="https://github.com/MatthewMo520"
                  icon={
                    <svg className="w-5 h-5" style={{ color: '#0A1929' }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"></path>
                    </svg>
                  }
                  label="GitHub"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3
                className={`text-2xl md:text-3xl font-semibold mb-6 ${isVisible ? 'scroll-visible' : 'scroll-hidden'}`}
                style={{ color: '#D4A574' }}
              >
                Send a Message
              </h3>
              <form
                action="https://formspree.io/f/xjkodnpk"
                method="POST"
                className={`space-y-4 ${isVisible ? 'scroll-visible' : 'scroll-hidden'}`}
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                    style={{ color: '#D4A574' }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg text-white transition-all duration-300"
                    style={{
                      backgroundColor: '#0A1929',
                      border: '1px solid #2B3F5C'
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#D4A574'
                      e.currentTarget.style.boxShadow = '0 0 0 2px rgba(212, 165, 116, 0.2)'
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = '#2B3F5C'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                    style={{ color: '#D4A574' }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg text-white transition-all duration-300"
                    style={{
                      backgroundColor: '#0A1929',
                      border: '1px solid #2B3F5C'
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#D4A574'
                      e.currentTarget.style.boxShadow = '0 0 0 2px rgba(212, 165, 116, 0.2)'
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = '#2B3F5C'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                    style={{ color: '#D4A574' }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    className="w-full px-4 py-3 rounded-lg text-white resize-none transition-all duration-300"
                    style={{
                      backgroundColor: '#0A1929',
                      border: '1px solid #2B3F5C'
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#D4A574'
                      e.currentTarget.style.boxShadow = '0 0 0 2px rgba(212, 165, 116, 0.2)'
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = '#2B3F5C'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg font-medium transition-all duration-300 transform"
                  style={{
                    backgroundColor: '#D4A574',
                    color: '#0A1929'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#C09560'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(212, 165, 116, 0.3)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#D4A574'
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
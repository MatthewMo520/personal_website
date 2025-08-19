import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gray-900 scroll-smooth overflow-x-hidden">
      <Navigation />
      
      <div id="home" className="overflow-x-hidden">
        <Hero />
      </div>
      
      <div id="about" className="overflow-x-hidden">
        <About />
      </div>
      
      <div id="experience" className="overflow-x-hidden">
        <Experience />
      </div>
      
      <div id="projects" className="overflow-x-hidden">
        <Projects />
      </div>
      
      <div id="portfolio" className="overflow-x-hidden">
        <Portfolio />
      </div>
      
      <div id="contact" className="overflow-x-hidden">
        <Contact />
      </div>
    </div>
  )
}

export default App

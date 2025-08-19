import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gray-900 scroll-smooth">
      <Navigation />
      
      <div id="home">
        <Hero />
      </div>
      
      <div id="about">
        <About />
      </div>
      
      <div id="experience">
        <Experience />
      </div>
      
      <div id="projects">
        <Projects />
      </div>
      
      <div id="portfolio">
        <Portfolio />
      </div>
      
      <div id="contact">
        <Contact />
      </div>
    </div>
  )
}

export default App

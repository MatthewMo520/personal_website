import NotebookNav from '../components/notebook/NotebookNav'
import SpiralBinding from '../components/notebook/SpiralBinding'
import HeroSection from '../components/notebook/HeroSection'
import ProjectsSection from '../components/notebook/ProjectsSection'
import ContactSection from '../components/notebook/ContactSection'
import NotebookFooter from '../components/notebook/NotebookFooter'

function HomePage() {
  return (
    <div
      className="min-h-screen notebook-bg"
      style={{ position: 'relative' }}
    >
      {/* Fixed spiral binding on left */}
      <SpiralBinding />

      {/* Fixed top nav */}
      <NotebookNav />

      {/* Page content */}
      <main id="main-content" style={{ paddingTop: '64px' }}>
        <HeroSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <NotebookFooter />
    </div>
  )
}

export default HomePage

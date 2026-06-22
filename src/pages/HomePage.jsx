import NotebookNav from '../components/notebook/NotebookNav'
import SpiralBinding from '../components/notebook/SpiralBinding'
import ScrollProgress from '../components/notebook/ScrollProgress'
import FlyingPaperPlane from '../components/notebook/FlyingPaperPlane'
import HeroSection from '../components/notebook/HeroSection'
import AboutSection from '../components/notebook/AboutSection'
import ExperienceSection from '../components/notebook/ExperienceSection'
import ProjectsSection from '../components/notebook/ProjectsSection'
import ContactSection from '../components/notebook/ContactSection'
import NotebookFooter from '../components/notebook/NotebookFooter'
function WavyDivider() {
  return (
    <div style={{ paddingLeft: 'var(--gutter)', overflow: 'hidden' }} aria-hidden="true">
      <svg
        width="100%"
        height="28"
        viewBox="0 0 900 28"
        preserveAspectRatio="none"
        style={{ display: 'block' }}
      >
        <path
          d="M 0 14 C 75 5, 150 22, 225 14 C 300 6, 375 22, 450 14 C 525 6, 600 22, 675 14 C 750 6, 825 20, 900 14"
          stroke="rgba(74, 144, 217, 0.18)"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}

function HomePage() {
  return (
    <div
      className="min-h-screen notebook-bg"
      style={{ position: 'relative' }}
    >
      {/* Scroll progress bar */}
      <ScrollProgress />

      {/* Paper airplane that flies down the page as you scroll */}
      <FlyingPaperPlane />

      {/* Fixed spiral binding on left */}
      <SpiralBinding />

      {/* Fixed top nav */}
      <NotebookNav />

      {/* Page content */}
      <main id="main-content" style={{ paddingTop: '64px', position: 'relative', zIndex: 1 }}>
        <HeroSection />
        <WavyDivider />
        <AboutSection />
        <WavyDivider />
        <ExperienceSection />
        <WavyDivider />
        <ProjectsSection />
        <WavyDivider />
        <ContactSection />
      </main>

      <NotebookFooter />
    </div>
  )
}

export default HomePage

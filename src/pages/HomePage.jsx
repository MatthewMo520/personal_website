import NotebookNav from '../components/notebook/NotebookNav'
import SpiralBinding from '../components/notebook/SpiralBinding'
import ScrollProgress from '../components/notebook/ScrollProgress'
import FlyingPaperPlane from '../components/notebook/FlyingPaperPlane'
import InkCursor from '../components/notebook/InkCursor'
import HeroSection from '../components/notebook/HeroSection'
import AboutSection from '../components/notebook/AboutSection'
import ExperienceSection from '../components/notebook/ExperienceSection'
import ProjectsSection from '../components/notebook/ProjectsSection'
import ContactSection from '../components/notebook/ContactSection'
import NotebookFooter from '../components/notebook/NotebookFooter'
/* Torn-paper edge between sections — reads like flipping to a new page. */
function TornDivider() {
  return (
    <div style={{ paddingLeft: 'var(--gutter)', position: 'relative', lineHeight: 0 }} aria-hidden="true">
      <svg width="100%" height="22" viewBox="0 0 1200 22" preserveAspectRatio="none" style={{ display: 'block' }}>
        <path
          d="M0 0 L1200 0 L1200 9 L1176 14 L1150 7 L1120 16 L1092 8 L1060 15 L1030 6 L1000 14 L968 8 L940 16 L908 7 L878 15 L846 9 L816 17 L784 8 L754 14 L722 7 L692 16 L660 9 L630 15 L598 7 L568 16 L536 8 L506 14 L474 7 L444 16 L412 9 L382 14 L350 7 L320 16 L288 8 L258 15 L226 7 L196 16 L164 9 L134 14 L102 7 L72 16 L40 8 L12 14 L0 9 Z"
          fill="#ffffff"
          opacity="0.55"
        />
        <path
          d="M0 9 L12 14 L40 8 L72 16 L102 7 L134 14 L164 9 L196 16 L226 7 L258 15 L288 8 L320 16 L350 7 L382 14 L412 9 L444 16 L474 7 L506 14 L536 8 L568 16 L598 7 L630 15 L660 9 L692 16 L722 7 L754 14 L784 8 L816 17 L846 9 L878 15 L908 7 L940 16 L968 8 L1000 14 L1030 6 L1060 15 L1092 8 L1120 16 L1150 7 L1176 14 L1200 9"
          fill="none"
          stroke="rgba(74,144,217,0.22)"
          strokeWidth="1.5"
          strokeLinejoin="round"
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

      {/* Pen ink-trail that follows the cursor */}
      <InkCursor />

      {/* Fixed spiral binding on left */}
      <SpiralBinding />

      {/* Fixed top nav */}
      <NotebookNav />

      {/* Page content */}
      <main id="main-content" style={{ paddingTop: '64px', position: 'relative', zIndex: 1 }}>
        <HeroSection />
        <TornDivider />
        <AboutSection />
        <TornDivider />
        <ExperienceSection />
        <TornDivider />
        <ProjectsSection />
        <TornDivider />
        <ContactSection />
      </main>

      <NotebookFooter />
    </div>
  )
}

export default HomePage

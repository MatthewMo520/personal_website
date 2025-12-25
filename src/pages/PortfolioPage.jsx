import Portfolio from '../components/Portfolio'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

function PortfolioPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0A1929' }}>
      <Navigation />
      <main id="main-content">
        <Portfolio />
      </main>
      <Footer />
    </div>
  )
}

export default PortfolioPage

import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

function NotFound() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0A1929' }}>
      <Navigation />

      <main className="flex items-center justify-center min-h-[calc(100vh-200px)]">
        <div className="container mx-auto px-6 py-20 text-center">
          {/* Large 404 */}
          <h1
            className="text-9xl md:text-[200px] font-black mb-4 tracking-tight"
            style={{
              color: '#D4A574',
              textShadow: '0 4px 20px rgba(212, 165, 116, 0.3)',
              animation: 'fadeInUp 0.6s ease-out'
            }}
          >
            404
          </h1>

          {/* Error message */}
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ animation: 'fadeInUp 0.6s ease-out 0.1s both' }}
          >
            Page Not Found
          </h2>

          <p
            className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed"
            style={{
              color: '#E5E7EB',
              animation: 'fadeInUp 0.6s ease-out 0.2s both'
            }}
          >
            The page you're looking for doesn't exist or has been moved.
          </p>

          {/* Navigation buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            style={{ animation: 'fadeInUp 0.6s ease-out 0.3s both' }}
          >
            {/* Primary CTA - Back to Home */}
            <Link
              to="/"
              className="px-8 py-4 rounded-lg font-semibold min-w-[200px] transition-all duration-300 transform hover:scale-105"
              style={{
                backgroundColor: '#D4A574',
                color: '#0A1929',
                boxShadow: '0 4px 15px rgba(212, 165, 116, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#C09560'
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(212, 165, 116, 0.4)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#D4A574'
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(212, 165, 116, 0.3)'
              }}
            >
              ← Back to Home
            </Link>

            {/* Secondary CTA - View Projects */}
            <Link
              to="/#projects"
              className="px-8 py-4 rounded-lg font-semibold min-w-[200px] transition-all duration-300 transform hover:scale-105"
              style={{
                border: '2px solid #5B8FB9',
                color: '#FFFFFF',
                backgroundColor: 'transparent'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#5B8FB9'
                e.currentTarget.style.borderColor = '#5B8FB9'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'
                e.currentTarget.style.borderColor = '#5B8FB9'
              }}
            >
              View Projects →
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default NotFound

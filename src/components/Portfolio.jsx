import { useState, useEffect } from 'react'
import portfolioConfig from '../data/portfolio.json'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

function Portfolio() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15, triggerOnce: false })
  const [portfolioData, setPortfolioData] = useState([])
  const [totalValue, setTotalValue] = useState(0)
  const [totalChange, setTotalChange] = useState(0)
  const [loading, setLoading] = useState(true)
  const [showStocks, setShowStocks] = useState(false)
  const [usdToCadRate, setUsdToCadRate] = useState(1.35)

  const holdings = portfolioConfig.holdings

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD')
        if (response.ok) {
          const data = await response.json()
          setUsdToCadRate(data.rates.CAD || 1.35)
        }
      } catch (error) {
        console.log('Failed to fetch exchange rate, using fallback:', error)
      }
    }

    const fetchStockData = async () => {
      setLoading(true)
      try {
        const updatedHoldings = await Promise.all(
          holdings.map(async (holding) => {
            try {
              let currentPrice, dailyChange, dailyChangePercent;
              
              try {
                const response = await fetch(
                  `https://api.allorigins.win/raw?url=${encodeURIComponent(`https://query1.finance.yahoo.com/v8/finance/chart/${holding.symbol}?interval=1d&range=1d`)}`
                )
                
                if (response.ok) {
                  const data = await response.json()
                  const result = data.chart.result[0]
                  const meta = result.meta
                  
                  currentPrice = meta.regularMarketPrice || meta.previousClose
                  const previousClose = meta.previousClose
                  dailyChange = currentPrice - previousClose
                  dailyChangePercent = (dailyChange / previousClose) * 100
                } else {
                  throw new Error('Yahoo API failed')
                }
              } catch (error) {
                console.log('Yahoo Finance API unavailable')
                throw new Error('Unable to fetch real market data')
              }
              
              currentPrice = Number(currentPrice) || Number(holding.purchasePrice) || 0
              dailyChange = Number(dailyChange) || 0
              dailyChangePercent = Number(dailyChangePercent) || 0
              
              const shares = Number(holding.shares) || 0
              const purchasePrice = Number(holding.purchasePrice) || 0
              
              const totalValue = currentPrice * shares
              const dailyChangeAmount = dailyChange * shares
              
              return {
                ...holding,
                currentPrice,
                dailyChange,
                dailyChangePercent,
                totalValue,
                dailyChangeAmount,
                currency: holding.currency || 'USD'
              }
            } catch (error) {
              console.error(`Error fetching data for ${holding.symbol}:`, error)
              return {
                ...holding,
                currentPrice: null,
                dailyChange: null,
                dailyChangePercent: null,
                totalValue: null,
                dailyChangeAmount: null,
                currency: holding.currency || 'USD',
                dataUnavailable: true
              }
            }
          })
        )
        
        const availableHoldings = updatedHoldings.filter(stock => !stock.dataUnavailable && stock.shares > 0)
        
        if (availableHoldings.length === 0) {
          setPortfolioData([])
          setTotalValue(null)
          setTotalChange(null)
          setLoading(false)
          return
        }
        
        const portfolioValue = availableHoldings.reduce((sum, stock) => {
          const value = Number(stock.totalValue) || 0
          const cadValue = stock.currency === 'USD' ? value * usdToCadRate : value
          return sum + cadValue
        }, 0)
        
        const portfolioDailyChange = availableHoldings.reduce((sum, stock) => {
          const dailyChange = Number(stock.dailyChangeAmount) || 0
          const cadDailyChange = stock.currency === 'USD' ? dailyChange * usdToCadRate : dailyChange
          return sum + cadDailyChange
        }, 0)
        
        const holdingsWithPercentage = availableHoldings.map(stock => ({
          ...stock,
          portfolioPercentage: portfolioValue > 0 ? ((stock.currency === 'USD' ? stock.totalValue * usdToCadRate : stock.totalValue) / portfolioValue) * 100 : 0
        }))
        
        setPortfolioData(holdingsWithPercentage)
        setTotalValue(Number(portfolioValue) || 0)
        setTotalChange(Number(portfolioDailyChange) || 0)
        
      } catch (error) {
        console.error('Error fetching portfolio data:', error)
        setPortfolioData([])
        setTotalValue(null)
        setTotalChange(null)
      } finally {
        setLoading(false)
      }
    }

    fetchExchangeRate()
    fetchStockData()
    
    const interval = setInterval(() => {
      fetchExchangeRate()
      fetchStockData()
    }, 30000)
    return () => clearInterval(interval)
  }, [])

  const formatCurrency = (amount, currency = 'USD') => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency
    }).format(amount)
  }

  const formatPercent = (percent) => {
    const num = Number(percent)
    if (isNaN(num) || !isFinite(num)) return '0.00%'
    return `${num > 0 ? '+' : ''}${num.toFixed(2)}%`
  }

  return (
    <section className="py-20" style={{ backgroundColor: '#0A1929' }}>
      <div className="container mx-auto px-6">
        <div ref={ref} className={`text-center mb-16 ${isVisible ? 'scroll-visible' : 'scroll-hidden'}`}>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Investment Portfolio
          </h1>
          <div className="w-20 h-1 mx-auto mb-4" style={{ backgroundColor: '#D4A574' }}></div>
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className={`w-2 h-2 rounded-full ${portfolioData.length > 0 ? 'bg-green-500' : 'bg-red-500'}`}></div>
            <span className="text-sm" style={{ color: '#9CA3AF' }}>
              {portfolioData.length > 0 ? 'Live Market Data' : 'Data Unavailable'}
            </span>
          </div>
          <p className="max-w-2xl mx-auto text-base md:text-lg" style={{ color: '#E5E7EB' }}>
            Real-time tracking of my investment holdings
          </p>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div
              className="inline-block animate-spin rounded-full h-12 w-12 border-b-2"
              style={{ borderColor: '#D4A574' }}
              aria-hidden="true"
            ></div>
            <p className="mt-4" style={{ color: '#9CA3AF' }} aria-live="polite" aria-atomic="true">
              Loading portfolio data...
            </p>
          </div>
        ) : portfolioData.length === 0 ? (
          <div className="max-w-md mx-auto">
            <div
              className="rounded-lg border p-8 text-center"
              role="alert"
              aria-live="assertive"
              style={{
                backgroundColor: '#1A2942',
                borderColor: '#2B3F5C'
              }}
            >
              <div className="text-4xl mb-4" aria-hidden="true">⚠️</div>
              <h3 className="text-xl font-semibold text-white mb-2">Market Data Unavailable</h3>
              <p className="mb-4" style={{ color: '#9CA3AF' }}>
                Unable to fetch real-time market data. Please try again later.
              </p>
              <button
                onClick={() => window.location.reload()}
                aria-label="Retry loading portfolio data"
                className="px-6 py-2 rounded-md text-white font-medium transition-all duration-300"
                style={{ backgroundColor: '#D4A574', color: '#0A1929' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#C09560'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#D4A574'
                }}
              >
                Retry
              </button>
            </div>
          </div>
        ) : (
          <>
            <div
              className={`rounded-lg border p-6 mb-8 max-w-4xl mx-auto ${isVisible ? 'scroll-visible' : 'scroll-hidden'}`}
              style={{
                backgroundColor: '#1A2942',
                borderColor: '#D4A574'
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                <div>
                  <h3 className="text-sm mb-2" style={{ color: '#D4A574' }}>Total Value</h3>
                  <p className="text-2xl font-bold text-white">{formatCurrency(totalValue, 'CAD')}</p>
                </div>
                <div>
                  <h3 className="text-sm mb-2" style={{ color: '#D4A574' }}>Daily Change</h3>
                  <p className={`text-2xl font-bold ${totalChange >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {formatCurrency(totalChange, 'CAD')}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm mb-2" style={{ color: '#D4A574' }}>Performance</h3>
                  <p className={`text-2xl font-bold ${totalChange >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {formatPercent(totalValue > 0 ? (totalChange / (totalValue - totalChange)) * 100 : 0)}
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mb-8">
              <button
                onClick={() => setShowStocks(!showStocks)}
                className="inline-flex items-center gap-3 border rounded-lg px-6 py-3 transition-all duration-300"
                style={{
                  backgroundColor: showStocks ? '#D4A574' : '#2B3F5C',
                  borderColor: showStocks ? '#D4A574' : '#2B3F5C',
                  color: showStocks ? '#0A1929' : '#FFFFFF'
                }}
                onMouseEnter={(e) => {
                  if (!showStocks) {
                    e.currentTarget.style.borderColor = '#D4A574'
                  }
                }}
                onMouseLeave={(e) => {
                  if (!showStocks) {
                    e.currentTarget.style.borderColor = '#2B3F5C'
                  }
                }}
              >
                <svg
                  className={`w-5 h-5 transition-transform ${showStocks ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <span className="font-medium">
                  {showStocks ? 'Hide Holdings' : 'View Holdings'}
                </span>
                <span
                  className="px-2 py-1 rounded text-xs font-semibold text-white"
                  style={{ backgroundColor: '#5B8FB9' }}
                >
                  {portfolioData.length}
                </span>
              </button>
            </div>

            {showStocks && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {portfolioData.map((stock) => (
                  <div
                    key={stock.symbol}
                    className="rounded-lg border p-6 transition-all duration-300 cursor-pointer"
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
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-white">{stock.symbol}</h3>
                        <p className="text-sm" style={{ color: '#9CA3AF' }}>{stock.name}</p>
                        <p
                          className="text-xs mt-1"
                          style={{ color: '#5B8FB9' }}
                        >
                          {stock.portfolioPercentage.toFixed(1)}% of portfolio
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-white">{formatCurrency(stock.currentPrice, stock.currency)}</p>
                        <span className="text-xs font-semibold" style={{ color: '#9CA3AF' }}>{stock.currency}</span>
                      </div>
                    </div>

                    <div className="space-y-2 text-sm border-t pt-4" style={{ borderColor: '#2B3F5C' }}>
                      <div className="flex justify-between">
                        <span style={{ color: '#9CA3AF' }}>Shares</span>
                        <span style={{ color: '#E5E7EB' }}>{stock.shares}</span>
                      </div>
                      <div className="flex justify-between">
                        <span style={{ color: '#9CA3AF' }}>Total Value</span>
                        <span style={{ color: '#E5E7EB' }}>{formatCurrency(stock.totalValue, stock.currency)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span style={{ color: '#9CA3AF' }}>Daily Change</span>
                        <span className={stock.dailyChangeAmount >= 0 ? 'text-green-400' : 'text-red-400'}>
                          {formatCurrency(stock.dailyChangeAmount, stock.currency)} ({formatPercent(stock.dailyChangePercent)})
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-8 text-center">
              <p className="text-sm" style={{ color: '#9CA3AF' }}>Updates every 30 seconds</p>
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default Portfolio
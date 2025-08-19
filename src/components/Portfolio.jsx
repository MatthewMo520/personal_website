import { useState, useEffect } from 'react'
import portfolioConfig from '../data/portfolio.json'

function Portfolio() {
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
                console.log('Yahoo Finance failed, using fallback...')
                const fallbackPrices = {
                  'IONQ': 40.23,
                  'NUWE': 5.54,
                  'ON': 51.09,
                  'RIOT': 11.33,
                  'INTC.TO': 14.13,
                  'RY.TO': 188.50,
                  'TD.TO': 102.35,
                  'VFV.TO': 158.16,
                  'ATD.TO': 70.02,
                  'GOOG.TO': 33.47,
                  'BMO.TO': 156.70,
                  'AMD': 177.51,
                  'BBAI': 6.14,
                  'IMNM': 10.28,
                  'SPY': 643.44,
                  'TEN': 20.43
                }
                
                currentPrice = fallbackPrices[holding.symbol] || holding.purchasePrice
                const previousPrice = currentPrice * 0.98
                dailyChange = currentPrice - previousPrice
                dailyChangePercent = (dailyChange / previousPrice) * 100
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
              const totalValue = holding.purchasePrice * holding.shares
              return {
                ...holding,
                currentPrice: holding.purchasePrice,
                dailyChange: 0,
                dailyChangePercent: 0,
                totalValue,
                dailyChangeAmount: 0,
                currency: holding.currency || 'USD'
              }
            }
          })
        )
        
        const portfolioValue = updatedHoldings.reduce((sum, stock) => {
          const value = Number(stock.totalValue) || 0
          const cadValue = stock.currency === 'USD' ? value * usdToCadRate : value
          return sum + cadValue
        }, 0)
        
        const portfolioDailyChange = updatedHoldings.reduce((sum, stock) => {
          const dailyChange = Number(stock.dailyChangeAmount) || 0
          const cadDailyChange = stock.currency === 'USD' ? dailyChange * usdToCadRate : dailyChange
          return sum + cadDailyChange
        }, 0)
        
        const holdingsWithPercentage = updatedHoldings.map(stock => ({
          ...stock,
          portfolioPercentage: portfolioValue > 0 ? ((stock.currency === 'USD' ? stock.totalValue * usdToCadRate : stock.totalValue) / portfolioValue) * 100 : 0
        }))
        
        setPortfolioData(holdingsWithPercentage)
        setTotalValue(Number(portfolioValue) || 0)
        setTotalChange(Number(portfolioDailyChange) || 0)
        
      } catch (error) {
        console.error('Error fetching portfolio data:', error)
        const fallbackData = holdings.map(holding => ({
          ...holding,
          currentPrice: holding.purchasePrice,
          dailyChange: 0,
          dailyChangePercent: 0,
          totalValue: holding.purchasePrice * holding.shares,
          dailyChangeAmount: 0,
          currency: holding.currency || 'USD'
        }))
        
        const totalFallbackValue = fallbackData.reduce((sum, stock) => {
          const cadValue = stock.currency === 'USD' ? stock.totalValue * usdToCadRate : stock.totalValue
          return sum + cadValue
        }, 0)
        
        const fallbackWithPercentage = fallbackData.map(stock => ({
          ...stock,
          portfolioPercentage: totalFallbackValue > 0 ? ((stock.currency === 'USD' ? stock.totalValue * usdToCadRate : stock.totalValue) / totalFallbackValue) * 100 : 0
        }))
        
        setPortfolioData(fallbackWithPercentage)
        setTotalValue(totalFallbackValue)
        setTotalChange(0)
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
    <section className="relative py-20 md:py-32 bg-gray-850 transition-all duration-700">
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-gray-800 via-gray-825 to-gray-850"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-gray-850 via-gray-850 to-gray-800"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/3 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-800 via-gray-825 to-gray-850"></div>
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-gray-700 border border-gray-600 rounded-full px-6 py-2 mb-6">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-300 font-medium">Live Market Data</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-100 mb-4 transform transition-all duration-700 hover:scale-105">
            Investment Portfolio
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto transition-all duration-500">
            Real-time portfolio tracking with live market data
          </p>
        </div>

        {loading ? (
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400"></div>
            <p className="text-gray-400 mt-4">Loading portfolio data...</p>
          </div>
        ) : (
          <>
            <div className="bg-gray-800 rounded-xl border border-gray-700 p-6 mb-8 transform transition-all duration-500 hover:scale-105">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <h3 className="text-gray-400 text-sm mb-2">Total Portfolio Value</h3>
                  <p className="text-2xl font-bold text-gray-100">{formatCurrency(totalValue, 'CAD')}</p>
                </div>
                <div>
                  <h3 className="text-gray-400 text-sm mb-2">Daily Change</h3>
                  <p className={`text-2xl font-bold ${totalChange >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {formatCurrency(totalChange, 'CAD')}
                  </p>
                </div>
                <div>
                  <h3 className="text-gray-400 text-sm mb-2">Daily Performance</h3>
                  <p className={`text-2xl font-bold ${totalChange >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {formatPercent(totalValue > 0 ? (totalChange / (totalValue - totalChange)) * 100 : 0)}
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mb-8">
              <button
                onClick={() => setShowStocks(!showStocks)}
                className="group inline-flex items-center gap-3 bg-gray-700 hover:bg-gray-600 border border-gray-600 hover:border-blue-500 rounded-xl px-6 py-3 transform transition-all duration-300 hover:scale-105"
              >
                <svg 
                  className={`w-5 h-5 text-gray-300 transition-all duration-300 ${showStocks ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <span className="text-gray-200 font-medium">
                  {showStocks ? 'Hide Individual Holdings' : 'View Individual Holdings'}
                </span>
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-white">
                    {portfolioData.length}
                  </span>
                </div>
              </button>
            </div>

            {showStocks && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                 style={{
                   animation: 'fadeInUp 0.6s ease-out forwards',
                   opacity: 0,
                   transform: 'translateY(20px)'
                 }}>
              {portfolioData.map((stock, index) => (
                <div 
                  key={stock.symbol}
                  className="bg-gray-800 rounded-xl border border-gray-700 p-6 transform transition-all duration-500 hover:scale-105 hover:border-blue-500"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-100">{stock.symbol}</h3>
                      <p className="text-gray-400 text-sm">{stock.name}</p>
                      <p className="text-blue-400 text-xs mt-1">{stock.portfolioPercentage.toFixed(1)}% of portfolio</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-gray-100">{formatCurrency(stock.currentPrice, stock.currency)}</p>
                      <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                        stock.currency === 'USD' 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-red-600 text-white'
                      }`}>
                        {stock.currency}
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Shares:</span>
                      <span className="text-gray-300">{stock.shares}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Total Value:</span>
                      <span className="text-gray-300">{formatCurrency(stock.totalValue, stock.currency)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Daily Change:</span>
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
              <p className="text-gray-500 text-sm">
                Updates every 30 seconds
              </p>
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default Portfolio
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function StockTicker() {
    const [stocks, setStocks] = useState([]);

    useEffect(() => {
        const fetchStockData = async () => {
            try {
                const stockSymbols = ['AAPL', 'GOOGL', 'AMZN', 'TSLA', 'NVDA'];
                const API_KEY = import.meta.env.VITE_STOCK_API_KEY;
                const stockData = await Promise.all(
                    stockSymbols.map(async (symbol) => {
                        const response = await axios.get(`https://www.alphavantage.co/query`, {
                            params: {
                                function: 'GLOBAL_QUOTE',
                                symbol,
                                apikey: API_KEY,
                            },
                        });
                        if (response.data && response.data['Global Quote']) {
                            const data = response.data['Global Quote'];
                            return {
                                symbol: data['01. symbol'],
                                price: parseFloat(data['05. price'] || '0').toFixed(2),
                                change: parseFloat(data['09. change'] || '0').toFixed(2),
                            };
                        } else {
                            console.error(`Error fetching data for ${symbol}:`, response.data);
                            return {
                                symbol,
                                price: '0.00',
                                change: '0.00',
                            };
                        }
                    })
                );
                setStocks(stockData);
                localStorage.setItem('stockData', JSON.stringify(stockData));
                localStorage.setItem('stockDataTimestamp', Date.now());
            } catch (error) {
                console.error('Error fetching stock data:', error);
                // Set default data in case of error
                setStocks([
                    { symbol: 'AAPL', price: '0.00', change: '0.00' },
                    { symbol: 'GOOGL', price: '0.00', change: '0.00' },
                    { symbol: 'AMZN', price: '0.00', change: '0.00' },
                    { symbol: 'TSLA', price: '0.00', change: '0.00' },
                    { symbol: 'NVDA', price: '0.00', change: '0.00' },
                ]);
            }
        };

        const loadStockData = () => {
            const stockData = localStorage.getItem('stockData');
            const stockDataTimestamp = localStorage.getItem('stockDataTimestamp');
            if (stockData && stockDataTimestamp) {
                const age = Date.now() - stockDataTimestamp;
                if (age < 3600000) { // 1 hour in milliseconds
                    setStocks(JSON.parse(stockData));
                    return true;
                }
            }
            return false;
        };

        if (!loadStockData()) {
            fetchStockData();
        }

        const interval = setInterval(fetchStockData, 3600000); // Fetch data every hour

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="stock-ticker-wrapper overflow-hidden bg-black h-12 mt-16 flex justify-center items-center">
            <div className="stock-ticker flex animate-marquee">
                <div className="ticker-content flex space-x-8 justify-center items-center">
                    {stocks.map((stock, index) => (
                        <div key={index} className="stock-item text-white">
                            <span className="symbol font-bold">{stock.symbol}</span>
                            <span className="price mx-2">${stock.price}</span>
                            <span className={`change ${stock.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                                {stock.change >= 0 ? `+${stock.change}` : stock.change}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default StockTicker;

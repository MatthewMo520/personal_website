import React, { useState, useEffect } from 'react';
import axios from 'axios';

function StockTicker() {
    const [stocks, setStocks] = useState([]);

    useEffect(() => {
        const fetchStockData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/stocks');
                setStocks(response.data);
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

        fetchStockData();
        const interval = setInterval(fetchStockData, 3600000); // Fetch data every minute

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

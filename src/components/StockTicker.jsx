import React, { useState, useEffect } from 'react';
import axios from 'axios';

const stockSymbols = ['AAPL', 'GOOGL', 'AMZN', 'TSLA', 'NVDA'];
const API_KEY = 'QTZHX19WPRAP39DH';
//'X86N96MX0ECYGIXT';

//

function StockTicker() {
    const [stocks, setStocks] = useState([]);

    useEffect(() => {
        const fetchStockData = async () => {
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
                            price: parseFloat(data['05. price'] || 0).toFixed(2),
                            change: parseFloat(data['09. change'] || 0).toFixed(2),
                        };
                    } else {
                        console.error(`Error fetching data for ${symbol}:`, response.data);
                        return {
                            symbol,
                            price: 'N/A',
                            change: 'N/A',
                        };
                    }
                })
            );
            setStocks(stockData);
        };

        fetchStockData();
        const interval = setInterval(fetchStockData, 60000); // Fetch data every minute

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
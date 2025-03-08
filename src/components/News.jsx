import React, { useState, useEffect } from 'react';
import axios from 'axios';

function News() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get('https://newsapi.org/v2/top-headlines', {
                    params: {
                        category: 'business',
                        apiKey: 'c0bca591aab94f3ca71c8cc2cdf0a40c',
                        pageSize: 3,
                        sortBy: 'publishedAt',
                    },
                });
                setNews(response.data.articles);
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        };

        fetchNews();
    }, []);

    return (
        <div className="news-section p-8 bg-white">
            {news.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {news.map((article, index) => (
                        <div key={index} className="news-article bg-white p-6 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            {article.urlToImage && (
                                <img src={article.urlToImage} alt={article.title} className="w-full h-48 object-cover mb-4 rounded-t-lg" />
                            )}
                            <h3 className="text-xl font-bold mb-2 text-gray-800">{article.title}</h3>
                            <p className="text-gray-600 mb-4">{article.description}</p>
                            <a href={article.url} target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:from-blue-700 hover:to-purple-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                                Read more
                            </a>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-gray-600 text-center">Loading news...</p>
            )}
        </div>
    );
}

export default News;
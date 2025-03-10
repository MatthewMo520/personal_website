import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

function News() {
    const [news, setNews] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get('https://gnews.io/api/v4/top-headlines', {
                    params: {
                        category: 'business',
                        token: import.meta.env.VITE_GNEWS_API_KEY,
                        max: 6,
                        lang: 'en',
                    },
                });
                setNews(response.data.articles);
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        };

        fetchNews();
    }, []);

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + news.length) % news.length);
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % news.length);
    };

    const displayedNews = [
        news[currentIndex],
        news[(currentIndex + 1) % news.length],
        news[(currentIndex + 2) % news.length],
    ];

    return (
        <div className="news-section p-8 bg-white relative">
            {news.length > 0 ? (
                <div className="flex items-center justify-center">
                    <button onClick={handlePrevClick} className="absolute left-0 transform -translate-y-1/2 top-1/2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-md hover:from-blue-700 hover:to-purple-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                        <FaArrowLeft />
                    </button>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
                        {displayedNews.map((article, index) => (
                            <div key={index} className="news-article bg-white p-6 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                                {article.image && (
                                    <img src={article.image} alt={article.title} className="w-full h-48 object-cover mb-4 rounded-t-lg" />
                                )}
                                <h3 className="text-xl font-bold mb-2 text-gray-800">{article.title}</h3>
                                <p className="text-gray-600 mb-4">{article.description}</p>
                                <a href={article.url} target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:from-blue-700 hover:to-purple-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                                    Read more
                                </a>
                            </div>
                        ))}
                    </div>
                    <button onClick={handleNextClick} className="absolute right-0 transform -translate-y-1/2 top-1/2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-md hover:from-blue-700 hover:to-purple-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                        <FaArrowRight />
                    </button>
                </div>
            ) : (
                <p className="text-gray-600 text-center">Loading news...</p>
            )}
        </div>
    );
}

export default News;
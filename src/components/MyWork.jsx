import React from 'react';

function MyWork() {
    return (
        <div id="portfolio" className="my-work-section p-8 bg-white rounded-lg shadow-md">
            <h2 className="text-3xl text-gray-800 mb-4 font-semibold">My Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="work bg-gray-100 p-4 rounded-lg shadow-md h-80 flex flex-col justify-between group relative overflow-hidden" style={{ backgroundImage: 'url(/assets/linkedit.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className="text-content absolute inset-0 bg-white p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-full group-hover:translate-y-0">
                        <h3 className="text-xl font-bold mb-2 text-gray-800">LinkedIt</h3>
                        <p className="text-gray-600 mb-4">LinkedIt streamlines finding LinkedIn profiles and emails. Users input search terms to get profiles with contact details, saving time.</p>
                        <a href="#" className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:from-blue-700 hover:to-purple-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                            <i className="fa-solid fa-arrow-up-right-from-square" style={{ color: '#B197FC' }}></i>
                        </a>
                    </div>
                </div>
                <div className="work bg-gray-100 p-4 rounded-lg shadow-md h-80 flex flex-col justify-between group relative overflow-hidden" style={{ backgroundImage: 'url(/assets/excel_monte_carlo.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className="text-content absolute inset-0 bg-white p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-full group-hover:translate-y-0">
                        <h3 className="text-xl font-bold mb-2 text-gray-800">Excel Monte Carlo Investing Simulation</h3>
                        <p className="text-gray-600 mb-4">Analyzing the possible outcomes of a certain investment using a simulation with thousands of iterations.</p>
                        <a href="#" className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:from-blue-700 hover:to-purple-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                            <i className="fa-solid fa-arrow-up-right-from-square" style={{ color: '#B197FC' }}></i>
                        </a>
                    </div>
                </div>
                <div className="work bg-gray-100 p-4 rounded-lg shadow-md h-80 flex flex-col justify-between group relative overflow-hidden" style={{ backgroundImage: 'url(/assets/taskflow.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className="text-content absolute inset-0 bg-white p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-full group-hover:translate-y-0">
                        <h3 className="text-xl font-bold mb-2 text-gray-800">TaskFlow</h3>
                        <p className="text-gray-600 mb-4">Task manager app which records things needed to be done with the date added. App comes with a feature to edit and update the tasks.</p>
                        <a href="https://taskflow.matthew-mo.com" className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:from-blue-700 hover:to-purple-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                            <i className="fa-solid fa-arrow-up-right-from-square" style={{ color: '#B197FC' }}></i>
                        </a>
                    </div>
                </div>
            </div>
            <a href="#" className="inline-block mt-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:from-blue-700 hover:to-purple-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                See more
            </a>
        </div>
    );
}

export default MyWork;

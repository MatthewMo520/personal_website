import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './components/NavBar';
import { Element } from 'react-scroll';
import TypingAnimation from './components/TypingAnimation';
import StockTicker from './components/StockTicker';
import News from './components/News'; 
import ContactMe from './components/ContactMe';

function App() {
  return (
    <div className="app flex flex-col justify-center min-h-screen bg-gray-100">
      <Navbar />
      <div className="z-10 relative">
        <StockTicker />
      </div>
      <Element name="home">
        <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 mb-8 shadow-lg">
          <h1 className="text-4xl mb-4 font-bold">
            <TypingAnimation
              texts={[
                "Hey there, I'm Matthew Mo",
                "A first year student from The University of Waterloo"
              ]}
              speed={100}
              delay={2000}
            />
          </h1>
        </header>
      </Element>
      <main className="px-8">
        <Element name="about-me" className="mb-8">
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-3xl text-gray-800 mb-4 font-semibold">About Me</h2>
            <p className="text-gray-600">I am a passionate stock market enthusiast with years of experience in trading and investment strategies. I love sharing my knowledge and helping others achieve their financial goals.</p>
          </section>
        </Element>
        <Element name="market" className="mb-8">
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-3xl text-gray-800 mb-4 font-semibold">Market Overview</h2>
            <p className="text-gray-600">The stock market is a complex system where shares of publicly-held companies are issued, bought, and sold. It is a crucial component of a free-market economy, providing companies with access to capital in exchange for giving investors a slice of ownership.</p>
          </section>
        </Element>
        <Element name="portfolio" className="mb-8">
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-3xl text-gray-800 mb-4 font-semibold">Your Portfolio</h2>
            <p className="text-gray-600">Your portfolio consists of a collection of investments, including stocks, bonds, mutual funds, and other assets. Diversifying your portfolio can help manage risk and improve potential returns.</p>
          </section>
        </Element>
        <Element name="news" className="mb-8">
          <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl text-gray-800 mb-4 font-semibold">Latest News</h2>
          <p className="text-gray-600 mb-6">Stay informed with the latest news and analysis on the stock market. From market trends to economic indicators, our news section provides valuable insights to help you make informed investment decisions.</p>
            <News /> 
          </section>
        </Element>
        <Element name="contact-me" className="mb-8">
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-3xl text-gray-800 mb-4 font-semibold">Contact Me</h2>
            <ContactMe/>
          </section>
        </Element>
      </main>
    </div>
  );
}

export default App;

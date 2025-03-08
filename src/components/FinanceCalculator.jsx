import React from 'react';
import Navbar from './NavBar';

function FinanceCalculator() {
  return (
    <div className="app flex flex-col justify-center min-h-screen bg-gray-100">
      <Navbar />
      <main className="px-8 py-16">
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl text-gray-800 mb-4 font-semibold">Finance Calculator</h2>
          <p className="text-gray-600">This is the Finance Calculator page. Here you can add your finance calculator functionality.</p>
        </section>
      </main>
    </div>
  );
}

export default FinanceCalculator;
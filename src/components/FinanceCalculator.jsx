import React, { useState } from 'react';
import Navbar from './NavBar';

function FinanceCalculator() {
    const [principal, setPrincipal] = useState('');
    const [rate, setRate] = useState('');
    const [time, setTime] = useState('');
    const [interestType, setInterestType] = useState('simple');
    const [result, setResult] = useState(null);
    const [calculateComponent, setCalculateComponent] = useState('interest');
    const [calculatorType, setCalculatorType] = useState('interest');
    const [strikePrice, setStrikePrice] = useState('');
    const [callPremium, setCallPremium] = useState('');
    const [putPremium, setPutPremium] = useState('');
    const [stockPrice, setStockPrice] = useState('');
    const [straddleResult, setStraddleResult] = useState(null);
    const [faceValue, setFaceValue] = useState('');
    const [couponRate, setCouponRate] = useState('');
    const [yearsToMaturity, setYearsToMaturity] = useState('');
    const [actualRate, setActualRate] = useState('');
    const [bondResult, setBondResult] = useState(null);

    const calculate = (e) => {
        e.preventDefault();
        let calculatedValue;

        if (calculatorType === 'interest') {
            const p = parseFloat(principal);
            const r = parseFloat(rate);
            const t = parseFloat(time);
            const i = parseFloat(result);

            if (calculateComponent === 'interest') {
                if (interestType === 'simple') {
                    calculatedValue = (p * r * t) / 100;
                } else {
                    calculatedValue = p * Math.pow((1 + r / 100), t) - p;
                }
                setResult(calculatedValue);
            } else if (calculateComponent === 'principal') {
                if (interestType === 'simple') {
                    calculatedValue = (i * 100) / (r * t);
                } else {
                    calculatedValue = i / (Math.pow((1 + r / 100), t) - 1);
                }
                setPrincipal(calculatedValue);
            } else if (calculateComponent === 'rate') {
                if (interestType === 'simple') {
                    calculatedValue = (i * 100) / (p * t);
                } else {
                    calculatedValue = (Math.pow((i / p + 1), 1 / t) - 1) * 100;
                }
                setRate(calculatedValue);
            } else if (calculateComponent === 'time') {
                if (interestType === 'simple') {
                    calculatedValue = (i * 100) / (p * r);
                } else {
                    calculatedValue = Math.log(i / p + 1) / Math.log(1 + r / 100);
                }
                setTime(calculatedValue);
            }
        } else if (calculatorType === 'straddle') {
            const k = parseFloat(strikePrice);
            const c = parseFloat(callPremium);
            const p = parseFloat(putPremium);
            const s = parseFloat(stockPrice);

            calculatedValue = Math.max(s - k, 0) + Math.max(k - s, 0) - (c + p);
            setStraddleResult(calculatedValue);
        } else if (calculatorType === 'bond') {
            const fv = parseFloat(faceValue);
            const cr = parseFloat(couponRate) / 100;
            const ytm = parseFloat(yearsToMaturity);
            const ar = parseFloat(actualRate) / 100;

            const couponPayment = fv * cr;
            const pvCoupons = couponPayment * (1 - Math.pow(1 + ar, -ytm)) / ar;
            const pvFaceValue = fv / Math.pow(1 + ar, ytm);

            calculatedValue = pvCoupons + pvFaceValue;
            setBondResult(calculatedValue);
        }
    };

    return (
        <div className="app flex flex-col justify-center min-h-screen bg-gray-100">
            <Navbar />
            <main className="px-8 py-16">
                <section className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto">
                    <h2 className="text-3xl text-gray-800 mb-4 font-semibold">Calculator</h2>
                    <p className="text-gray-600 mb-6">Choose a calculator type.</p>
                    <div className="mb-4">
                        <label className="block text-gray-700">Calculator Type:</label>
                        <select
                            value={calculatorType}
                            onChange={(e) => setCalculatorType(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded mt-1"
                            required
                        >
                            <option value="interest">Interest Calculator</option>
                            <option value="straddle">Straddle Calculator</option>
                            <option value="bond">Bond Calculator</option>
                        </select>
                    </div>
                    {calculatorType === 'interest' && (
                        <form onSubmit={calculate} className="space-y-4">
                            <div>
                                <label className="block text-gray-700">Calculate:</label>
                                <select
                                    value={calculateComponent}
                                    onChange={(e) => setCalculateComponent(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded mt-1"
                                    required
                                >
                                    <option value="interest">Interest</option>
                                    <option value="principal">Principal</option>
                                    <option value="rate">Rate</option>
                                    <option value="time">Time</option>
                                </select>
                            </div>
                            {calculateComponent !== 'interest' && (
                                <div>
                                    <label className="block text-gray-700">Interest Amount ($):</label>
                                    <input
                                        type="number"
                                        value={result}
                                        onChange={(e) => setResult(e.target.value)}
                                        className="w-full p-2 border border-gray-300 rounded mt-1"
                                        required
                                    />
                                </div>
                            )}
                            {calculateComponent !== 'principal' && (
                                <div>
                                    <label className="block text-gray-700">Principal Amount ($):</label>
                                    <input
                                        type="number"
                                        value={principal}
                                        onChange={(e) => setPrincipal(e.target.value)}
                                        className="w-full p-2 border border-gray-300 rounded mt-1"
                                        required
                                    />
                                </div>
                            )}
                            {calculateComponent !== 'rate' && (
                                <div>
                                    <label className="block text-gray-700">Annual Interest Rate (%):</label>
                                    <input
                                        type="number"
                                        value={rate}
                                        onChange={(e) => setRate(e.target.value)}
                                        className="w-full p-2 border border-gray-300 rounded mt-1"
                                        required
                                    />
                                </div>
                            )}
                            {calculateComponent !== 'time' && (
                                <div>
                                    <label className="block text-gray-700">Time (years):</label>
                                    <input
                                        type="number"
                                        value={time}
                                        onChange={(e) => setTime(e.target.value)}
                                        className="w-full p-2 border border-gray-300 rounded mt-1"
                                        required
                                    />
                                </div>
                            )}
                            <div>
                                <label className="block text-gray-700">Interest Type:</label>
                                <select
                                    value={interestType}
                                    onChange={(e) => setInterestType(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded mt-1"
                                    required
                                >
                                    <option value="simple">Simple Interest</option>
                                    <option value="compound">Compound Interest</option>
                                </select>
                            </div>
                            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded mt-4">Calculate</button>
                        </form>
                    )}
                    {calculatorType === 'straddle' && (
                        <form onSubmit={calculate} className="space-y-4">
                            <div>
                                <label className="block text-gray-700">Strike Price ($):</label>
                                <input
                                    type="number"
                                    value={strikePrice}
                                    onChange={(e) => setStrikePrice(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded mt-1"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">Call Premium ($):</label>
                                <input
                                    type="number"
                                    value={callPremium}
                                    onChange={(e) => setCallPremium(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded mt-1"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">Put Premium ($):</label>
                                <input
                                    type="number"
                                    value={putPremium}
                                    onChange={(e) => setPutPremium(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded mt-1"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">Stock Price ($):</label>
                                <input
                                    type="number"
                                    value={stockPrice}
                                    onChange={(e) => setStockPrice(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded mt-1"
                                    required
                                />
                            </div>
                            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded mt-4">Calculate</button>
                        </form>
                    )}
                    {calculatorType === 'bond' && (
                        <form onSubmit={calculate} className="space-y-4">
                            <div>
                                <label className="block text-gray-700">Face Value ($):</label>
                                <input
                                    type="number"
                                    value={faceValue}
                                    onChange={(e) => setFaceValue(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded mt-1"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">Coupon Rate (%):</label>
                                <input
                                    type="number"
                                    value={couponRate}
                                    onChange={(e) => setCouponRate(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded mt-1"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">Years to Maturity:</label>
                                <input
                                    type="number"
                                    value={yearsToMaturity}
                                    onChange={(e) => setYearsToMaturity(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded mt-1"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">Actual Rate (%):</label>
                                <input
                                    type="number"
                                    value={actualRate}
                                    onChange={(e) => setActualRate(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded mt-1"
                                    required
                                />
                            </div>
                            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded mt-4">Calculate</button>
                        </form>
                    )}
                    {result !== null && calculatorType === 'interest' && calculateComponent === 'interest' && (
                        <div className="mt-6 p-4 bg-green-100 text-green-800 rounded">
                            <h3 className="text-xl font-semibold">Calculated Interest:</h3>
                            <p>${result.toFixed(2)}</p>
                        </div>
                    )}
                    {principal !== '' && calculatorType === 'interest' && calculateComponent === 'principal' && (
                        <div className="mt-6 p-4 bg-green-100 text-green-800 rounded">
                            <h3 className="text-xl font-semibold">Calculated Principal:</h3>
                            <p>${principal ? parseFloat(principal).toFixed(2) : '0.00'}</p>
                        </div>
                    )}
                    {rate !== '' && calculatorType === 'interest' && calculateComponent === 'rate' && (
                        <div className="mt-6 p-4 bg-green-100 text-green-800 rounded">
                            <h3 className="text-xl font-semibold">Calculated Rate:</h3>
                            <p>{rate ? parseFloat(rate).toFixed(2) : '0.00'}%</p>
                        </div>
                    )}
                    {time !== '' && calculatorType === 'interest' && calculateComponent === 'time' && (
                        <div className="mt-6 p-4 bg-green-100 text-green-800 rounded">
                            <h3 className="text-xl font-semibold">Calculated Time:</h3>
                            <p>{time ? parseFloat(time).toFixed(2) : '0.00'} years</p>
                        </div>
                    )}
                    {straddleResult !== null && calculatorType === 'straddle' && (
                        <div className="mt-6 p-4 bg-green-100 text-green-800 rounded">
                            <h3 className="text-xl font-semibold">Straddle Profit/Loss:</h3>
                            <p>${straddleResult.toFixed(2)}</p>
                        </div>
                    )}
                    {bondResult !== null && calculatorType === 'bond' && (
                        <div className="mt-6 p-4 bg-green-100 text-green-800 rounded">
                            <h3 className="text-xl font-semibold">Bond Value:</h3>
                            <p>${bondResult.toFixed(2)}</p>
                        </div>
                    )}
                </section>
            </main>
        </div>
    );
}

export default FinanceCalculator;
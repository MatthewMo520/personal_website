import express from 'express';
import mongoose from 'mongoose';
import axios from 'axios';
import cors from 'cors';

const app = express();
const PORT = 5000;
const API_KEY = 'QTZHX19WPRAP39DH';
const stockSymbols = ['AAPL', 'GOOGL', 'AMZN', 'TSLA', 'NVDA'];

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/stockData', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const stockSchema = new mongoose.Schema({
  symbol: String,
  price: String,
  change: String,
  lastUpdated: Date,
});

const Stock = mongoose.model('Stock', stockSchema);

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
          price: parseFloat(data['05. price'] || '0').toFixed(2),
          change: parseFloat(data['09. change'] || '0').toFixed(2),
          lastUpdated: new Date(),
        };
      } else {
        console.error(`Error fetching data for ${symbol}:`, response.data);
        return {
          symbol,
          price: '0',
          change: '0',
          lastUpdated: new Date(),
        };
      }
    })
  );

  await Stock.deleteMany({});
  await Stock.insertMany(stockData);
};

app.get('/stocks', async (req, res) => {
  const stocks = await Stock.find({});
  res.json(stocks);
});

setInterval(fetchStockData, 3600000); // Fetch data every 60 minutes
fetchStockData(); // Initial fetch

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
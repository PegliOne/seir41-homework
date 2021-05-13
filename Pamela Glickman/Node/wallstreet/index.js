const express = require('express')
const app = express();
const ejs = require('ejs');

const axios = require('axios');
const APIKEY = '2AQT1W7TYFOJQLB5';
const port = 8000;

const server = express(); // returns a server object
server.set('view-engine', ejs); // see docs.
server.use(express.static('public')); // see docs.

app.get('/', (req, res) => {
  res.render('search.ejs');
});

app.get('/results', (req,res) => {
  // Get the stock being requested
  const stock = req.query.stock
  // Get yesterday's date (the data appears to be a day behind)
  let date = new Date()
  date.setDate(date.getDate() - 1)
  // Converted date into a YYYY-MM-DD string to match API
  const dateString = date.toISOString().substring(0, 10);
  axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stock}&apikey=2AQT1W7TYFOJQLB5`).then((response) => {
    // Finds the price the stock closed at
    const price = Number(response.data["Time Series (Daily)"][`${dateString}`]["4. close"])
    // Render the page
    res.render('results.ejs', { stock: stock, price: price.toFixed(2) });
  })
})

app.listen(port, () => {
  console.log(`Stocks app listening on port ${port}!`);
});

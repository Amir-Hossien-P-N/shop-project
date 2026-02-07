const express = require('express');
const cors = require('cors');

const app = express();


app.use(cors());
app.use(express.json());


app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/categories', require('./routes/categoryRoutes'));
app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/comments', require('./routes/commentRoutes'));
app.use('/api/orders', require('./routes/orderRoutes'));


app.get('/', (req, res) => {
  res.send(`
    <h2>Backend is running!</h2>
    <p>Use the /api routes to test:</p>
    <ul>
      <li>/api/auth</li>
      <li>/api/categories</li>
      <li>/api/products</li>
      <li>/api/comments</li>
      <li>/api/orders</li>
    </ul>
  `);
});

module.exports = app;

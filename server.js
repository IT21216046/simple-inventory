const express = require('express');
require('dotenv').config();

const app = express();
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/products', (req, res) => {
  res.json([
    { id: 1, name: 'Camera', price: 400 },
    { id: 2, name: 'Tripod', price: 100 }
  ]);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Inventory Service running on port ${PORT}`);
});

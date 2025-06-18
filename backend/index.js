const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const products = require('./products');

const app = express();
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

app.get('/api/products', (req, res) => {
  res.json(products.getAll());
});

app.post('/api/products', (req, res) => {
  const { name, price, image } = req.body;
  if (!name || !price || !image) {
    return res.status(400).json({ error: 'Missing fields' });
  }
  const newProduct = products.add({ name, price, image });
  res.status(201).json(newProduct);
});

app.delete('/api/products/:id', (req, res) => {
  const deleted = products.remove(req.params.id);
  if (!deleted) {
    return res.status(404).json({ error: 'Product not found' });
  }
  res.json({ deleted });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

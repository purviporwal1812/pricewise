// index.js
require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
const mongoURI = "mongodb+srv://purviporwal1812:finalpassword@cluster0.7ytmd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Mongoose Product Model
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  link: { type: String, required: true },
  priceLimit: { type: Number, required: true },
});

const Product = mongoose.model('Product', productSchema);

// Routes
app.post('/products', async (req, res) => {
  const { name, link, priceLimit } = req.body;
  const newProduct = new Product({ name, link, priceLimit });

  try {
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/compare', async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products.map(product => ({
      productName: product.name,
      store: 'Example Store', // Replace with actual store data
      price: product.priceLimit,
    })));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = () => {
  const [productName, setProductName] = useState('');
  const [productLink, setProductLink] = useState('');
  const [priceLimit, setPriceLimit] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProduct = { name: productName, link: productLink, priceLimit };
    try {
      await axios.post('https://pricewise-nk95.onrender.com/products', newProduct);
      alert('Product added successfully!');
      // Clear input fields after submission
      setProductName('');
      setProductLink('');
      setPriceLimit('');
    } catch (error) {
      console.error(error);
      alert('Failed to add product.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Product</h2>
      <input
        type="text"
        placeholder="Product Name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Product Link"
        value={productLink}
        onChange={(e) => setProductLink(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Price Limit"
        value={priceLimit}
        onChange={(e) => setPriceLimit(e.target.value)}
        required
      />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProduct;

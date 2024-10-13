// App.jsx
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <h1>Price Wise</h1>
      <nav>
        <Link to="/">Add Product</Link>
        <Link to="/products">Product List</Link>
        <Link to="/compare">Price Comparison</Link>
      </nav>
      <Outlet /> {/* This will render the matched child route */}
    </div>
  );
};

export default App;

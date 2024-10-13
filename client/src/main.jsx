// main.jsx
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import PriceComparison from './components/PriceComparison';
import './index.css'; // Your global styles

// Create a router instance
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true, // This means this will render on the '/' route
        element: <AddProduct />,
      },
      {
        path: 'products',
        element: <ProductList />,
      },
      {
        path: 'compare',
        element: <PriceComparison />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
   
  <RouterProvider router={router} />
  </StrictMode>
);

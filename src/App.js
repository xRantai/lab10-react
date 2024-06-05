import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails'; 

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        setProducts(response.data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductList products={products}/>,
  },
  {
    path: "details/:id",
    element: <ProductDetails products={products}/>,
  },
  ]);

  return (
      <div className="App">
        <RouterProvider router={router}/>
      </div>
  );
}

export default App;

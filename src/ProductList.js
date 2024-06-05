import React, { useState } from 'react';
import ProductItem from './ProductItem';
import './App.css';

const ProductList = ({ products }) => {
  const [filter, setFilter] = useState('');

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="ProductList">
      <h1>List of products</h1>
      <label>
        Filter by product title:
        <input 
          type="text" 
          value={filter} 
          onChange={handleFilterChange} 
        />
      </label>
      <ul>
        {products
          .filter(product => 
            product.title.toLowerCase().includes(filter.toLowerCase())
          )
          .map(product => (
            <ProductItem
              key={product.id}
              id={product.id}
              title={product.title}
              brand={product.brand}
            />
          ))
        }
      </ul>
    </div>
  );
};

export default ProductList;

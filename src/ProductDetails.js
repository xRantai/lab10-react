import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ProductDetail = ({ products }) => {
  const { id } = useParams();

  const filteredProducts = products.filter(product => product.id === parseInt(id));

  if (filteredProducts.length === 0) {
    return null;
  }

  const product = filteredProducts[0];

  return (
    <div>
      <h1>{product.title}</h1>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Brand:</strong> {product.brand}</p>
      <p><strong>Description:</strong> {product.description}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <img src={product.thumbnail} alt={product.title} />
      <br />
      <Link to="/">Back to product list</Link>
    </div>
  );
};

export default ProductDetail;

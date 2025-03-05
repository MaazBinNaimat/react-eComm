import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Products = () => {
  // State for storing products data
  const [products, setProducts] = useState([]);

  // Fetch data from API when component mounts
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        
      });
  }, []);

  

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="card bg-base-100 w-96 shadow-sm">
            <figure>
              <img src={product.image} alt={product.title} className="w-full h-64 object-cover " />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{product.title}</h2>
              <h2>Price: ${product.price}</h2>
              <p>{product.description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;

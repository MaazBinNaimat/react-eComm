import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Products from '../pages/Products';

const ProductsFetcher = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);  // Adding error state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setData(response.data);
      } catch (err) {
        console.log(err);
        setError('Error fetching data');  // Set error state
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {error ? (
        <div>{error}</div>  // Display error message if there's an issue
      ) : (
        <Products products={data} />
      )}
    </>
  );
};

export default ProductsFetcher;

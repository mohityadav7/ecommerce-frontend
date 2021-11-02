import React, { useEffect, useState } from 'react';
import Loader from './Loader';
import ProductCard from './ProductCard';

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const getProductData = async () => {
    try {
      const apiResponse = await fetch('https://fakestoreapi.com/products');
      const responseData: Product[] = await apiResponse.json();
      setProducts(responseData);
    } catch (err) {
      console.log(err);
      setProducts([]);
    }
  };

  useEffect(() => {
    getProductData();
    return () => {
      setProducts([]);
    };
  }, []);

  if (products.length === 0) return <Loader />;

  return (
    <div className="container">
      <div className="row gy-3 pt-3">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;

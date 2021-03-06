import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Product } from './Home';
import Loader from './Loader';

const ProductDetails = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<boolean>(false);
  const [product, setProduct] = useState<Product>();
  const { id } = useParams<{ id: string }>();

  const getProductData = async (pId: number) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${pId}`);
      const productData: Product = await response.json();
      setIsLoaded(true);
      setProduct(productData);
    } catch (e) {
      setIsLoaded(false);
      setError(true);
    }
  };

  useEffect(() => {
    getProductData(parseInt(id, 10));
    return () => {};
  }, []);

  if (isLoaded && product) {
    const { image, title, price, description } = product;
    return (
      <div className="product-details">
        <img src={image} alt="product" />
        <div className="product-title">{title}</div>
        <div className="product-price">${price}</div>
        <div className="product-description">{description}</div>
      </div>
    );
  }
  if (error) return <div>Some error occurred.</div>;
  return <Loader />;
};

export default ProductDetails;

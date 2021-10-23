import React from 'react';
import { useHistory } from 'react-router-dom';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

const ProductCard = (props: { product: Product }) => {
  const history = useHistory();
  const { product } = props;
  const {
    id,
    image,
    title,
    price,
    description,
  }: {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
  } = product;

  return (
    <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-3">
      <div
        className="card product-card"
        onClick={() => history.push(`/products/${id}`)}
      >
        <img className="card-img-top p-3" src={image} alt="product" />
        <div className="card-body">
          <h5 className="card-title">
            {title} - <span className="text-success">${price}</span>
          </h5>
          <p className="card-text">
            {description.length > 100
              ? `${description.substr(0, 100)}...`
              : description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

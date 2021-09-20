import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Loader from './Loader';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

interface State {
  isLoaded: boolean;
  product?: Product;
  error: boolean;
}

export default class ProductDetails extends React.Component<
  RouteComponentProps<{ id: string }>,
  State
> {
  constructor(props: RouteComponentProps<{ id: string }>) {
    super(props);
    this.state = {
      isLoaded: false,
      error: false,
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    this.getProductData(parseInt(id, 10));
  }

  async getProductData(id: number) {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const productData: Product = await response.json();
      this.setState({
        isLoaded: true,
        product: productData,
      });
    } catch (e) {
      this.setState({
        isLoaded: false,
        error: true,
      });
    }
  }

  render() {
    const { isLoaded, product, error } = this.state;

    if (isLoaded && product) {
      const { image, title, price, description, id } = product;
      return (
        <div className="product-details" key={id}>
          <img src={image} alt="product" />
          <div className="product-title">{title}</div>
          <div className="product-price">${price}</div>
          <div className="product-description">{description}</div>
        </div>
      );
    }
    if (error) return <div>Some error occurred.</div>;
    return <Loader />;
  }
}

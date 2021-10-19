import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Loader from './Loader';

interface ResponseData {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

interface Props {}

interface State {
  response: ResponseData[];
}

export default class Home extends React.Component<
  RouteComponentProps<Props>,
  State
> {
  constructor(props: RouteComponentProps<Props>) {
    super(props);
    this.state = {
      response: [],
    };
  }

  componentDidMount() {
    this.getProductData();
  }

  getProductData = async () => {
    const apiResponse = await fetch('https://fakestoreapi.com/products');
    const responseData = await apiResponse.json();
    this.setState({
      response: responseData,
    });
  };

  render() {
    const { response } = this.state;
    const { history } = this.props;
    if (response.length === 0) return <Loader />;
    return (
      <div>
        <div className="product-list">
          {response.map((data) => (
            <div className="product-card-container" key={data.id}>
              <div
                className="product-card"
                onClick={() => history.push(`/products/${data.id}`)}
              >
                <img src={data.image} alt="product" />
                <div className="product-title">{data.title}</div>
                <div className="product-price">${data.price}</div>
                <div className="product-description">
                  {data.description.length > 100
                    ? `${data.description.substr(0, 100)}...`
                    : data.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

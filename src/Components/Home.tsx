import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Loader from './Loader';

interface ResponseData {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

const Home = () => {
  const [response, setResponse] = useState<ResponseData[]>([]);
  const history = useHistory();

  const getProductData = async () => {
    const apiResponse = await fetch('https://fakestoreapi.com/products');
    const responseData: ResponseData[] = await apiResponse.json();
    setResponse(responseData);
  };

  useEffect(() => {
    getProductData();
    return () => {};
  }, []);

  if (response.length === 0) return <Loader />;

  return (
    <div>
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
    </div>
  );
};

export default Home;

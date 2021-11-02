import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import reducer from './reducers';
import { getCookie } from './utils';
import { loginSuccess, logoutSuccess } from './actions';

const store = createStore(reducer);

const token = getCookie('token');
if (token) {
  try {
    const response = fetch(
      `${process.env.REACT_APP_API_URL}/api/v1/users/authenticateUser`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${token}`,
        },
      }
    );
    response.then((res) => {
      const dataPromise = res.json();
      dataPromise.then((data) => {
        if (data.authenticated) {
          store.dispatch(loginSuccess(data));
        } else {
          store.dispatch(logoutSuccess());
        }
      });
    });
  } catch (err) {
    console.log(err);
  }
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

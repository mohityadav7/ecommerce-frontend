import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Contact from './Components/Contact';
import Home from './Components/Home';
import About from './Components/About';
import Header from './Components/Header';
import ProductDetails from './Components/ProductDetails';

const App = () => (
  <>
    <Header />
    <Switch>
      <Route component={Home} path="/" exact />
      <Route component={Contact} path="/contact" exact />
      <Route component={About} path="/about" exact />
      <Route component={ProductDetails} path="/products/:id" exact />
      {/* <Route component={} */}
    </Switch>
  </>
);

export default App;

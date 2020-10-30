import React from 'react';
// router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// pages
import About from './pages/About';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Error from './pages/Error';
import Home from './pages/Home';
import Login from './pages/Login';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';

//components
export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/checkout">
          <Checkout />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
        <Route
          exact
          path="/products/:id"
          children={<ProductDetails></ProductDetails>}
        ></Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

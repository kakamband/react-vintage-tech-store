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
const App = () => {
  return <h1>hello from app component</h1>;
};

export default App;

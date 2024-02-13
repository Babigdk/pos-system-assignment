import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import Checkout from './components/Checkout';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/cart" component={ShoppingCart} />
          <Route path="/checkout" component={Checkout} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

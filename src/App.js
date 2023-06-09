import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductsList from './pages/ProductsList';
import Cart from './pages/Cart';
import ProductPage from './pages/ProductPage';
import Checkout from './pages/Checkout';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ ProductsList } />
        <Route
          path="/item/:id"
          render={ (props) => (
            <ProductPage { ...props } />
          ) }
        />
        <Route exact path="/shoppingcart" component={ Cart } />
        <Route path="/checkout" component={ Checkout } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

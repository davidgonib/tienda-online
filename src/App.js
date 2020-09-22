import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomeScreen from './screens/HomeScreen';
import ProductsScreen from './screens/ProductsScreen';
import OrdersScreen from './screens/OrdersScreen';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <header>
           <Navigation /> 
        </header>
        <main>
            <Route path="/" component={HomeScreen} exact />
            <Route path="/products" component={ProductsScreen} />
            <Route path="/orders" component={OrdersScreen} />
        </main>
        <footer className="footer fixed-bottom bg-dark text-white text-center p-3">Footer</footer>
      </BrowserRouter>
    );
  }
}

export default App;

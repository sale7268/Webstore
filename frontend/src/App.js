import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import CartPage from './screens/CartPage';
import HomePage from './screens/HomePage';
import ProductPage from './screens/ProductPage';
import {useSelector} from 'react-redux';

function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
            <div>
                <Link className="brand" to="/">   
                  Big noodles   
                </Link>
            </div>
            <div>
            <Link to="/cart">
              Cart
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            <Link to="/signin">Sign In</Link>
            </div>
        </header>
        <main>
          <Route path="/cart/:id?" component={CartPage}></Route>
          <Route path="/product/:id" component={ProductPage}></Route>
          <Route path="/" component={HomePage} exact></Route>
        </main>
        <footer className="row center">
            Project Shopping Websit Programming 2020. Legends <br/>
            Disclaimer: All of this information is ficticious <br/>
            All right reserved <br/>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

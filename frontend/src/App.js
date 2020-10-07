import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './screens/HomePage';
import ProductPage from './screens/ProductPage';

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
            <div>
                <a className="brand" href="/">
                  Webstore for Legends
                </a>
            </div>
            <div>
                <a href="/cart">Cart</a> &nbsp;
                <a href="/signin">Sign In</a>
            </div>
        </header>
        <main>
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

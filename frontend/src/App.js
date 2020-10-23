import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import CartPage from './screens/CartPage';
import HomePage from './screens/HomePage';
import ProductPage from './screens/ProductPage';
import {useDispatch, useSelector} from 'react-redux';
import SigninPage from './screens/SigninPage';
import { signout } from './actions/userActions';
import PrivateRoute from './components/PrivateRoute';
import RegisterPage from './screens/RegisterPage';
import ShippingAddressPage from './screens/ShippingAddressPage';
import PaymentMethodPage from './screens/PaymentMethodPage';
import PlaceOrderPage from './screens/PlaceOrderPage';
import OrderPage from './screens/OrderPage';
import OrderHistoryPage from './screens/OrderHistoryPage';
import ProfilePage from './screens/ProfilePage';
import AdminRoute from './components/AdminRoute';
//import Product from './components/Product';
import ProductListScreen from './screens/ProductListScreen';
import ProductEditScreen from './screens/ProductEditScreen';

function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  }
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
            {userInfo ? (
                <div className="dropdown">
                  <Link to="#">
                    {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                  </Link>
                  <ul className="dropdown-content">
                  <li>
                    <Link to="/profile">User Profile</Link>
                  </li>
                  <li>
                    <Link to="/orderhistory">Order History</Link>
                  </li>
                    <Link to="#signout" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </ul>
                </div>
              ) : (
                <Link to="/signin">Sign In</Link>
              )
            }
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <Link to="#admin">
                  Admin<i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/productlist">Products</Link>
                  </li>
                  <li>
                    <Link to="/orderlist">Orders</Link>
                  </li>
                  <li>
                    <Link to="/userlist">Users</Link>
                  </li>
                </ul>
              </div>
            )}
            </div>
        </header>
        <main>
          <Route path="/cart/:id?" component={CartPage}></Route>
          <Route path="/product/:id" component={ProductPage} exact></Route>
          <Route path="/product/:id/edit" component={ProductEditScreen} exact></Route>
          <Route path="/signin" component={SigninPage}></Route>
          <Route path="/register" component={RegisterPage}></Route>
          <Route path="/shipping" component={ShippingAddressPage}></Route>
          <Route path="/payment" component={PaymentMethodPage}></Route>
          <Route path="/placeorder" component={PlaceOrderPage}></Route>
          <Route path="/order/:id" component={OrderPage}></Route>
          <Route path="/orderhistory" component={OrderHistoryPage}></Route>
          <PrivateRoute
            path="/profile"
            component={ProfilePage}
          ></PrivateRoute>
          <AdminRoute 
            path="/productlist" 
            component={ProductListScreen}
          ></AdminRoute>
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

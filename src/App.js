import "./App.css";
import React, { useEffect } from "react";
import Header from "./modules/header/Header";
import Home from "./components/home/HomePage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Checkout from "./components/checkout/Checkout";
import Login from "./modules/login/Login";
import { auth } from "./firebase";
import { StateProvider, useStateValue } from "./utils/StateProvider";
import Payment from "./components/checkout/payment/Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Orders from "./components/orders/Orders";

const promise = loadStripe("pk_test_RsDaeNakjSsXJA84Jh3nNmgo00ibf8cbgH");

const App = () => {
  const [{ user }, dispatch] = useStateValue();

  const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
      // Show the component only when the user is logged in
      // Otherwise, redirect the user to /signin page
      <Route
        {...rest}
        render={(props) =>
          user ? <Component {...props} /> : <Redirect to="/" />
        }
      />
    );
  };

  useEffect(() => {
    //listens for auth changed
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({ type: "SET_USER", user: authUser });
      } else {
        dispatch({ type: "SET_USER", user: null });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <PrivateRoute component={Orders} path="/orders" exact />

          {/* <Route path="/orders">
            <Header />
            <Orders />
          </Route> */}
          <Route path="/login">
            <Login />
            {/* <Login /> */}
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/">
            <Header />

            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;

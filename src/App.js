import "./App.css";
import React, { useEffect } from "react";
import Header from "./modules/header/Header";
import Home from "./components/home/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./components/checkout/Checkout";
import Login from "./modules/login/Login";
import { auth } from "./firebase";
import { StateProvider, useStateValue } from "./utils/StateProvider";

const App = () => {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    //listens for auth changed
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({ type: "SET_USER", user: authUser });

        console.log("logged in");
      } else {
        dispatch({ type: "SET_USER", user: null });

        console.log("logged  out");
      }
    });
  }, []);

  console.log(user?.email);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
            {/* <Login /> */}
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

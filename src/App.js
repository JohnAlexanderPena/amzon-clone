import "./App.css";
import Header from "./modules/header/Header";
import Home from "./components/home/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./components/checkout/Checkout";
import Login from "./modules/login/Login";

const App = () => {
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

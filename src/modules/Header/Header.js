import React from "react";
import "./Header.css";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import { useStateValue } from "../../utils/StateProvider";

const Header = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo"
        />
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__option_line1">Hello, Guest</span>
          <span className="header__option_line2">Sign In</span>
        </div>
        <div className="header__option">
          {" "}
          <span className="header__option_line1">Returns </span>
          <span className="header__option_line2"> Orders</span>
        </div>
        <div className="header__option">
          {" "}
          <span className="header__option_line1">Your </span>
          <span className="header__option_line2"> Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__basketOption">
            <ShoppingBasketIcon />
            <span className="header__option_line2 header_basketCount">
              {basket?.length}{" "}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;

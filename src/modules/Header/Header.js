import React, { useState } from "react";
import "./Header.css";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import { useStateValue } from "../../utils/StateProvider";
import { auth } from "../../firebase";

const Header = () => {
  const [{ basket, user, searchTerm }, dispatch] = useStateValue();

  const handleUserLogin = () => {
    if (user) {
      auth.signOut();
    }
  };

  const [keyword, setKeyword] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setKeyword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "SET_SEARCH_TERM", searchTerm: keyword });
  };

  console.log(searchTerm);
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo"
        />
      </Link>
      <form onSubmit={handleSubmit} className="header__search">
        <input
          onChange={(e) => handleSearch(e)}
          className="header__searchInput"
          type="text"
        />
        <SearchIcon onClick={handleSubmit} className="header__searchIcon" />
      </form>

      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleUserLogin} className="header__option">
            <span className="header__option_line1">
              Hello, {user ? user?.email : "guest"}
            </span>
            <span className="header__option_line2">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/orders">
          <div className="header__option">
            {" "}
            <span className="header__option_line1">Returns </span>
            <span className="header__option_line2"> Orders</span>
          </div>
        </Link>
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

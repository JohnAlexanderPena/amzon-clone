import React from "react";
import "./HomePage.css";
import Product from "./products/Product";

const HomePage = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://tbcdn.talentbrew.com/company/3413/v3_0/img/amazondelivers-social-share.jpg"
          alt="amazon splash"
        />
        <div className="home__row">
          <Product />
          <Product />
          <Product />
        </div>
        <div className="home__row">
          <Product />
          <Product />
        </div>
        <div className="home__row">
          <Product />
        </div>
        {/* <ProductRows /> */}
        {/* <ProductRows /> */}
      </div>
    </div>
  );
};

export default HomePage;

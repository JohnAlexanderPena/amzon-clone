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
          <Product
            title="G Shock Gold"
            price="$109.99"
            image="https://2.bp.blogspot.com/-7oDCwTF13s4/U0wl-MiR1ZI/AAAAAAAAAiQ/qHEVwThkCaI/s1600/%2310+Men's+Black+G-Shock+Digital+Anti-Magnetic+Gold+Tone+Analog+[Watch]+Casio+B0058W9128.jpg"
            rating={5}
          />
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

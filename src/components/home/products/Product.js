import React from "react";
import "./Product.css";

const Product = () => {
  return (
    <div className="product">
      <div className="product__info">
        <p>G-Shock</p>
        <p className="product__price">
          <small>$</small>
          <strong>109.99</strong>
        </p>
        <div className="product__rating">
          <p>⭐</p>
          <p>⭐</p>
          <p>⭐</p>
          <p>⭐</p>
          <p>⭐</p>
        </div>
      </div>
      <img
        src="https://2.bp.blogspot.com/-7oDCwTF13s4/U0wl-MiR1ZI/AAAAAAAAAiQ/qHEVwThkCaI/s1600/%2310+Men's+Black+G-Shock+Digital+Anti-Magnetic+Gold+Tone+Analog+[Watch]+Casio+B0058W9128.jpg"
        alt="watch"
      />
      <button onClick={() => console.log("clicked")}>Add to Basket</button>
    </div>
  );
};

export default Product;

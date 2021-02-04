/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "../../../utils/StateProvider";

const CheckoutProduct = ({ id, image, title, price, rating, hideButton }) => {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="product image" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>
            $<strong>{price}</strong>
          </small>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        {!hideButton ? (
          <button
            className="checkoutProduct__button"
            onClick={removeFromBasket}
          >
            Remove from Basket
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default CheckoutProduct;

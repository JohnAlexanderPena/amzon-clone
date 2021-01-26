import React from "react";
import CurrencyFormat from "react-currency-format";
import "./Checkout.css";
import { useStateValue } from "../../utils/StateProvider";
import { getBasketTotal } from "../../redux/reducer";

const Subtotal = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <div>
        <>
          <p>
            Subtotal ({basket.length} items):{" "}
            <strong>${Math.ceil(getBasketTotal(basket) * 100) / 100}</strong>
          </p>
          <small className="subtotal__gift">
            <input type="checkbox" />
            This order contains a gift
          </small>
        </>
      </div>
      <button className="subtotal__button">Proceed To Checkout</button>
    </div>
  );
};

export default Subtotal;

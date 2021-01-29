import React from "react";
import CurrencyFormat from "react-currency-format";
import "../Checkout.css";
import { useStateValue } from "../../../utils/StateProvider";
import { useHistory } from "react-router-dom";
import { getBasketTotal } from "../../../redux/reducer";

const Subtotal = () => {
  const [{ basket }, dispatch] = useStateValue();
  const history = useHistory();

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
      <button
        onClick={(e) => history.push("/payment")}
        className="subtotal__button"
      >
        Proceed To Checkout
      </button>
    </div>
  );
};

export default Subtotal;

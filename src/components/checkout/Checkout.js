import React from "react";
import "./Checkout.css";
import Subtotal from "../checkout/Subtotal/Subtotal";
import CheckoutProduct from "./CheckoutProduct/CheckoutProduct";
import { useStateValue } from "../../utils/StateProvider";

const Checkout = () => {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__leftside">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div>
          <h2 className="checkout__title">Your Shopping basket.</h2>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              price={item.price}
              image={item.image}
              rating={item.rating}
              title={item.title}
            />
          ))}
        </div>
      </div>

      <div className="checkout__rightside">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;

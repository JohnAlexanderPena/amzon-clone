import React, { useState, useEffect } from "react";
import { useStateValue } from "../../../utils/StateProvider";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import { Link, useHistory } from "react-router-dom";
import "./Payment.css";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { getBasketTotal } from "../../../redux/reducer";
import axios from "axios";
import { db } from "../../../firebase";
import API from "../../../utils/API";

const Payment = () => {
  const [{ basket, user }] = useStateValue();
  const history = useHistory();

  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [clientSecret, setClientSecret] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        console.log(paymentIntent);
        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setSucceeded(true);
        setError(null);
        setProcessing(false);
        history.push("/orders");
      });
  };

  const handleStripeChange = (e) => {
    //If field is empty set disabled
    setDisabled(e.empty);

    //If there is an error, show error
    setError(e.error ? e.error.message : "");
  };

  useEffect(() => {
    const getClientSecret = async () => {
      //   const response = await API.post({
      //     // method: "post",

      //     // url: `${process.env.REACT_APP_BACKEND_HOST}/payments/create?total=${
      //     //   getBasketTotal(basket) * 100
      //     // }`,
      //     url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      //   })

      try {
        const response = await API.post(
          `/payments/create?total=${getBasketTotal(basket) * 100}`
        );

        setClientSecret(response.data.clientSecret);
      } catch (e) {
        console.log("axios failed: ", e);
      }
    };

    getClientSecret();
  }, [basket]);

  console.log("Secret: >>>>>>>>>>>  ", clientSecret);
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (
          <Link to="/checkout">
            {basket?.length} {basket.length > 1 ? "items" : "item"}
          </Link>
          )
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 ABC Lane</p>
            <p>New York, New York, 10001</p>
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
              />
            ))}
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>

          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleStripeChange} />
              <div className="payment__price_container">
                <p className="checkoutProduct__price">
                  <small>
                    <strong>Order Total: $</strong>
                    <strong>{getBasketTotal(basket)}</strong>
                  </small>
                </p>
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;

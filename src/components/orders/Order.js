import React from "react";
import "./Orders.css";
import moment from "moment";
import CheckoutProduct from "../checkout/CheckoutProduct/CheckoutProduct";

const Order = ({ order }) => {
  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
      <small className="order__id">{order.id}</small>
      {order.data.basket.map((order) => (
        <CheckoutProduct
          id={order.id}
          title={order.title}
          image={order.image}
          price={order.price}
          rating={order.rating}
        />
      ))}
    </div>
  );
};

export default Order;

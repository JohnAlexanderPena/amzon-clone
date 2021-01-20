import React from "react";
import CurrencyFormat from "react-currency-format";
import "./Checkout.css";

const Subtotal = () => {
  return (
    <div className="subtotal">
      <>
        <p>
          Subtotal (0 items): <strong>0</strong>
        </p>
        <small className="subtotal__gift">
          <input type="checkbox" />
          This order contains a gift
        </small>
      </>
      <CurrencyFormat
        // renderText={
        //   <>
        //     <p>
        //       Subtotal (0 items): <strong>0</strong>
        //     </p>
        //     <small className="subtotal__gift">
        //       <input type="checkbox" />
        //       This order contains a gift
        //     </small>
        //   </>
        // }
        decimalScale={2}
        value={0}
        displayText={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
};

export default Subtotal;

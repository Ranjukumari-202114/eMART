import React, { useState } from "react";
import "./CheckOut.css";
import axios from "axios";
// import { useContext } from "react";
// import ShippingAddress from "./ShippingAddress/ShippingAddress";

// import { user_context }  from '../../../App';

function CheckOut(props) {
  const paymentHandler = () => {
    const paymentData = {
      total_amount: 5000,
    };

    axios.get("http://www.localhost:5000/api/getkey").then((response1) => {
      console.log(response1.data);

      axios
        .post("http://localhost:5000/payment/checkout", paymentData)
        .then((response) => {
          console.log(response.data);

          const options = {
            key: response1.data.key,
            amount: response.data.order.amount,
            currency: "INR",
            name: "My name is Gupta",
            description: " RazorPay implementation",
            order_id: response.data.order.id,
            callback_url: "http://localhost:5000/payment/paymentVerification",
            prefill: {
              name: "Ranju Kumari",
              email: "Ranjukumar@gmail.com",
              contact: "9876543212",
            },
            notes: {
              address: "Razorpay Corporate Office",
            },
            theme: {
              color: "#121212",
            },
          };
          const razor = new window.Razorpay(options);
          razor.open();
        })
        .catch((err) => console.log(err));
    });

    // console.log(window)
  };
  return (
    <>
      <div className="CheckOut">
        <div className="Total_section">
          <div className="about_price">
            <p className="price_detail">PRICE DETAILS</p>
            <div className="total_amount">
              <p>Total Price</p>
              <p>₹4647</p>
            </div>
            <div className="total_amount">
              <p>Delivery Charges</p>
              <p>Free</p>
            </div>
            <div className="Total_Amount">
              <p>Total Amount</p>
              <p>₹3999</p>
            </div>
            {/* onClick={()=> checkoutHandler()} */}
            <button
              className="checkout"
              onClick={() => {
                console.log("  ");
                props.openShippingPage(true);
              }}
            >
              {props.individualShippingAddress ? (
                <div onClick={() => paymentHandler()}>Payment</div>
              ) : (
                <div>CHECKOUT</div>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckOut;

import React, { useState } from "react";
import "./CartCard.css";
import { SlPlus } from "react-icons/sl";
import { SlMinus } from "react-icons/sl";
import { useEffect } from "react";
import axios from "axios";

function CartCard(props) {
  const [count, setCount] = useState(props.quantity);

  const handleIncrement = () => {
    axios
      .post(`${process.env.REACT_APP_BASE_URL}/cart/`, {
        user_id: props.user_id,
        product_id: props.product_id,
        quantity: 1,
      })
      .then((res) => {
        console.log("this is the cart card", res.data);
        setCount(count);
        props.handleCart();
      })
      .catch((err) => console.log(err));
  };

  const handleDecrement = () => {
    axios
      .post(`${process.env.REACT_APP_BASE_URL}/cart/`, {
        user_id: props.user_id,
        product_id: props.product_id,
        quantity: -1,
      })
      .then((res) => {
        console.log("this is the cart card", res.data);
        setCount(count);
        props.handleCart();
      })
      .catch((err) => console.log(err));
  };

  const deleteProduct = () => {
    axios
      .post(`${process.env.REACT_APP_BASE_URL}/cart/remove`, {
        user_id: props.user_id,
        product_id: props.product_id,
      })
      .then((res) => {
        props.handleCart();
        console.log("the cart product is succefully deleted");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="Total_cart_section">
        <div className="cart_part">
        <div className="CartCard">
            <div className="img">
              <img src={props.imageUrl} />
            </div>
            <div className="img_dec">
              <p className="title">{props.title}</p>
              <div className="Price">
                 <p className="discounted_price">₹1299</p> 
                 ₹{props.price}
                <p className="discounted_rate"> 70% off</p>
              </div>
              {/* <p>{props.Category}</p> */}
              <p className="Quantity">Quantity: {props.quantity}</p>
              {/* <p>{props.user_id}</p> */}
              {/* <p>{props.product_id}</p> */}
              <p className="Total">
                Total price: ₹{props.price * props.quantity}
              </p>
              <div></div>
            </div>
          </div>
          {
            props.individualShippingAddress?"":<div className="CartCard_down">
            <div className="counting">
              <button
                onClick={() => {
                  handleDecrement();
                  setCount(count - 1);
                  console.log("decrement");
                  console.log(count);
                }}
                className="counting_btn"
                disabled={props.quantity === 1}
              >
                <SlMinus />
              </button>
              <p className="quantity">{props.quantity}</p>
              <button
                onClick={() => {
                  handleIncrement();
                  setCount(count + 1);
                  console.log("increament");
                  console.log(count);
                }}
                className="counting_btn"
              >
                <SlPlus />
              </button>
            </div>
            <div className="remove_btn">
              <button onClick={deleteProduct}>REMOVE</button>
            </div>
          </div>
          }
          
         

          
        </div>
        
      </div>
    </>
  );
}

export default CartCard;

import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import axios from "axios";
import { useContext } from "react";
import "./Cart.css";
import CartCard from "./CartCard/CartCard";

import { user_context } from "../../App";
import { useEffect } from "react";
import CheckOut from "./CheckOut/CheckOut";
import ShippingAddress from "./CheckOut/ShippingAddress/ShippingAddress";

function Cart() {
  const [isOpen, setIsOpen] = useState(false);
  const [individualShippingAddress,setindividualShippingAddress] = useState("")
  const [addressId, setAddressId] = useState("")
  const { data } = useContext(user_context);
  const [cartData, setCartData] = useState([]);
  //  console.log("this is the data that is in the cart component",data)

  const handleCart = () => {
    if (data) {
      axios
        .get(`${process.env.REACT_APP_BASE_URL}/cart/${data._id}`)
        .then((res) => {
          // console.log("this is the cart responce data",res.data)
          setCartData(res.data);
          // console.log(res.data[0].cart_detail_info[0])
        })
        .catch((err) => console.log(err));
    }
  };
  useEffect(() => {
    handleCart();
  }, [data]);


  useEffect(() =>{
    (async () => {
      if (addressId){
        const response  =  await axios.get(`${process.env.REACT_APP_BASE_URL}/shipping/individual/${addressId}`)
        setindividualShippingAddress(response.data)
       console.log("this is the individual  address data that is receive from the server",response.data)
      }
   })()
 }, [addressId])

//  console.log(addressId)

  return (
    <>
      {/* <Navbar /> */}

      {isOpen ? (
        <div className="shipp_address">
          <ShippingAddress setAddressId={setAddressId}  openCart={setIsOpen} user_id={data._id} />
        </div>
      ) : (
        <div className="cart_hole_container">
            {
              individualShippingAddress?<div className="individual_shipping_address">
                <p className="individual_shipping_address_detail">{individualShippingAddress.FirstName}   {individualShippingAddress.LastName}</p>
                <p className="individual_shipping_address_detail">{individualShippingAddress.Address} , {individualShippingAddress.City} , {individualShippingAddress.PostalCode} ,{individualShippingAddress.State}</p>
                <p className="individual_shipping_address_detail">Phone Number</p>
                <p className="individual_shipping_address_detail">{individualShippingAddress.PhoneNumber}</p>
            </div>:null
            }
            
        <div className="cart_container">
             
          <div className="Cart" style={{ minHeight: "80vh" }}>
            {cartData?.map((el) => {
              {
                /* console.log("this is cart",cartData) */
              }
              {
                /* console.log("this is the el",el) */
              }
              {
                /* return <img  src={el.cart_detail_info[0].imageUrl}/>; */
              }
              return (
                <CartCard  
                  individualShippingAddress={individualShippingAddress}              
                  handleCart={handleCart}
                  imageUrl={el.cart_detail_info[0]?.imageUrl}
                  title={el.cart_detail_info[0]?.title}
                  price={el.cart_detail_info[0]?.price}
                  quantity={el.Quantity}
                  user_id={el.userId}
                  product_id={el.productId}
                />
              );
            })}
          </div>
          <div className="checkout_section">
            <CheckOut individualShippingAddress={individualShippingAddress} openShippingPage={setIsOpen} />
          </div>
        </div>
        </div>
      )}

      {/* <Footer /> */}
    </>
  );
}

export default Cart;

import React from "react";
import "./ShippingDetail.css";
import { useEffect } from "react";
import axios from "axios";

function ShippingDetail(props) {
  return (
    <div className="ShippingDetail">
      
      <div className="shipping_Add">
        <p>Name:{props.firstName}</p>
        <p>Address:{props.address} </p>
        <p>Phone Number:{props.phoneNumber}</p>
      </div>
      <div className="ShippingDetail_button">
        <button onClick={()=>{
          props.cartOpen(false)
          props.setAddressId(props.id)
        }}>Deliver here</button>
      </div>
      <div className="button_line"></div>
      
    </div>
  );
}

export default ShippingDetail;

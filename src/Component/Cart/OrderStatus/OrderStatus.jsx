import React from "react";
import "./OrderStatus.css";
import { HiCheckCircle } from "react-icons/hi";

function OrderStatus() {
    const status = ['placed','confirmed','shipped','delivered']
  return (
    <div className="OrderStatus">
      <p className="order_state">ORDER STATUS</p>

      <div className="OrderStatus_top">
        <div className={`OrderStatus_state ${status.includes('placed')?'active':''}`}>
          <HiCheckCircle />
          <p className="order_status">Placed</p>
        </div>
        <div className={`OrderStatus_state ${status.includes('confirmed')?'active':''}`}>
          <HiCheckCircle />
          <p className="order_status">Confirmed</p>
        </div>
        <div className={`OrderStatus_state ${status.includes('shipped')?'active':''}`}>
          <HiCheckCircle />
          <p className="order_status">Shipped</p>
        </div>
        <div className={`OrderStatus_state ${status.includes('delivered')?'active':''}`}>
          <HiCheckCircle />
          <p className="order_status">Delivered</p>
        </div>
      </div>
      <div className="OrderStatus_main">
        <div className="OrderStatus_main_left">
          <img src="" />
          <p>sjdbsjdhwuew</p>
          <p>hjdgbjhewjk</p>
        </div>
        <div className="OrderStatus_main_rigth">
          <p>Full name</p>
          <p>Full name</p>
          <p>Full name</p>
          <p>Full name</p>
          <p>Full name</p>
        </div>
      </div>
    </div>
  );
}

export default OrderStatus;

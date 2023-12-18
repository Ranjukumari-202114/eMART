import React, { useEffect } from "react";
import "./S3Card.css";
import { Link } from "react-router-dom";
import { useContext} from "react";
import axios from "axios";
import { AiOutlineStar } from "react-icons/ai";
import { FaStar } from "react-icons/fa6"

import { user_context } from "../../../App";
import Rating from "../../Rating/Rating";


function S3Card(props) {


  const {data} = useContext(user_context);


  const clickCart = ()=>{
    // console.log("this is the user id",user_id)
    // console.log("this is the data pass from app",data)
     
    const res = axios.post("http://localhost:5000/cart/",{
      user_id : data._id,
      productid:props.id,
      quantity:1
    } ) 
    .then((response)=>{
      console.log("this is the information of the cart",response.data)

    })
    .catch(err => console.log(err));
    
  }
  return (
    <>
      <div className="S3Card">
        <Link to={`/product/${props.id}`}>
          <div className="S3Card_img">
            <img src={props.imageUrl} />
            <div className="img_cart" onClick={clickCart}>
              <svg 
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                id="cart_icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
            </div>
          </div>
          <div className="S3Card_content">
            <h3>{props.title}</h3>
            <p className="product_detail">{props.Category}</p>
            <p className="price">${props.price}</p>
            {/* <p className="Rating">{props.Rating}</p> */}
              <Rating num={props.Rating} />
          </div>
        </Link>
      </div>
    </>
  );
}

export default S3Card;

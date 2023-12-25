import React, { useContext } from "react";
import './ProductInformation.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";


function ProductInformation(props) {

   
   const navigate = useNavigate();

   const addToCart=()=>{
      axios
      .post(`${process.env.REACT_APP_BASE_URL}/cart/`, {
           
           user_id: props.user_id,
           product_id: props.product_id,
           quantity:1,

      })
      .then((res) => {
        console.log("this is the cart card", res.data);
        
      })
      .catch((err) => console.log(err));
  };
   


    return ( 
        <div className="ProductInformation_detail">
            <img src={props.imageUrl}/>
            <div className="ProductInformation_Context">
               <p>{props.title}</p>
               <p>{props.Category}</p>
               <p className="ProductInformation_Context1">{props.title}</p>
               <p className="ProductInformation_Context2"><span>{props.price}</span> + Free Shipping</p>
               <div className="ProductInformation_Context3">
                  <p>{props.product_description}</p>
                  
               </div>
               <button
                   onClick={()=>{
                     addToCart()
                     navigate("/cart")
                  }}>ADD TO CART</button>
            </div>
        </div>
     );
}

export default ProductInformation;
import React from "react";
import './ProductDetail.css';


function ProductDetail(props) {
    return ( 
       
      <>
      <div className="ProductDetail">
       <div className="ProductDetail_main"> 
          <div className='ProductDetail_img'>
            <img src={props.imageUrl}/>
          </div>
           <div className='ProductDetail_content'>
              <h3>{props.title}</h3>
              <p className='ProductDetail_detail'>{props.Category}</p>
              <p className='ProductDetail_price'> {props.price}</p>
              <p>{props.Rating}</p>
           </div>
        </div>
      </div>
       
      </>
        
     );
}

export default ProductDetail;
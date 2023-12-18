import React from "react";
import './ProductDescription.css';

function ProductDescription(props) {
    return (
     <>
        <div className="ProductDescription_main">
           <p className="ProductDescription_heading">Product description</p> 
           <p className="ProductDescription_desc">{props.Long_description}</p> 
           <p className="ProductDescription_last">{props.Short_description}</p>

            
        </div>
        <div className="ProductDescription_part2">
           <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-about-02.jpg"/>
           <div className="ProductDescription_part2Down">
             <div className="ProductDescription_part2Down1">
                <h3>Ut enim ad minim</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,<br></br> 
                sed do eiusmod tempor incididunt.</p>
             </div>
             <div className="ProductDescription_part2Down1">
                <h3>Quis nostrud</h3>
                <p>Sed do eiusmod tempor incididunt ut labore.</p>
             </div>
             <div className="ProductDescription_part2Down1" >
                <h3>Duis aute irure</h3>
                <p>Dolor sit amet, consectetur adipisicing elit, sed do<br></br>
                 eiusmod tempor incididunt ut labore.</p>
             </div>
             
             
             
              
           </div>
            
        </div>

     </> 
        
     );
}

export default ProductDescription;
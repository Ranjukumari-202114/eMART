import React from "react";
import './Rating.css';
import { AiOutlineStar } from "react-icons/ai";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";



function Rating(props) {
    return ( 
        <div className="Rating">
            {
                [...Array(props.num)].map(()=>{
                    return  <p className="star"><FaStar /></p>
                })
            }
            {
                [...Array(10-props.num)].map(()=>{
                    return  <p className="star"><AiOutlineStar /></p>
                })

            }
            
           
            
            {/* <p className="star"><FaStarHalfAlt /></p> */}
            
        </div>
     );
}

export default Rating;
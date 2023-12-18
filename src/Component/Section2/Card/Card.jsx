import React from "react";
import './Card.css';

function Card(props) {
    return ( 
        <div className="Card">
          <img src={props.imageUrl} />
         <div className="card_cont">
           <p className="card_cont1">{props.title}</p>
           <p className="card_cont2">{props.Description}</p>
           <button>SHOP NOW</button>

         </div> 
          
        </div>
     );
}

export default Card;
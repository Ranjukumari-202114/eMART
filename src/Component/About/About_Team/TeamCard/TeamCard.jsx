import React from "react";
import "./TeamCard.css"

function TeamCard(props) {
    return ( 
        <div className="TeamCard">
           <div className="TeamCard_info">
             <img src={props.imageUrl}/>
             <div>
               <p className="name">{props.name}</p>
               <p className="position">{props.position}</p>
             </div>
           </div>
        </div>
     );
}

export default TeamCard;
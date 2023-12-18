import React from "react";
import './ContactCard.css';

function ContactCard(props) {
    return (
        <div className="ContactCard">
           <div className="ContactCard_card">
            <p className="ContactCardHeading">{props.heading}</p>
            <p>{props.title}</p>
            <p className="ContactCardContact">{props.contact}</p>
           </div>
        </div>
      );
}

export default ContactCard;
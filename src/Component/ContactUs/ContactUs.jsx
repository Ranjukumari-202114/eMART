import React from "react";
import './ContactUs.css'
import Help_Contact from "./Help_Contact/Help_Contact";

function ContactUs() {
    return ( 
       <>
        <div className="ContactUs">
          <div className="about_contact">
            <p>Contact Us</p>
          </div>
        </div>
        <div>
          <Help_Contact/>
        </div>
       </>

     );
}

export default ContactUs;
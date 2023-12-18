import React from "react";
import "./Help_Contact.css";
import ContactCard from "./ContactCard/ContactCard";
import ContactForm from "./ContactForm/ContactForm";

function Help_Contact() {
  return (
    <div className="Help_Contact">
      <div className="Help_Contact1">
        <div className="contact">
          <p className="contact1">Have any queries?</p>
          <p className="contact2">We're here to help.​</p>
          <div className="thin_line"></div>
        </div>
        <div className="contact_card">
          <ContactCard
            heading="Sales"
            title="Vestibulum ante ipsum primis in faucibus orci luctus."
            contact="Pandit@gmail.com"
          />
          <ContactCard
            heading="Complaints"
            title="Vestibulum ante ipsum primis in faucibus orci luctus."
            contact="Ranju@gmail.com"
          />
          <ContactCard
            heading="Returns"
            title="Vestibulum ante ipsum primis in faucibus orci luctus."
            contact="Gunjan@gmail.com"
          />
          <ContactCard
            heading="Marketing"
            title="Vestibulum ante ipsum primis in faucibus orci luctus."
            contact="Gupta@gmail.com"
          />
        </div>
      </div>
      <div className="form_contact">
          <ContactForm/>
      </div>
    </div>
  );
}

export default Help_Contact;

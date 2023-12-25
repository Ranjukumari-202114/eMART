import React, { useState } from "react";
import "./ContactForm.css";
import axios from "axios";
// import { resetForm } from 'path-to-resetForm-module';

function ContactForm() {


  const [formData,setFormData]=useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

      
  const handleSubmit = (e) => {
    e.preventDefault();
      // console.log(formData)

     const contact_detail = {
      name:formData.name,
      email:formData.email,
      subject:formData.subject,
      message:formData.message

     } 
     axios.post(`${process.env.REACT_APP_BASE_URL}/contact/form`, contact_detail)
    .then((response) => {
        console.log(response.data) 
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        })
        // resetForm()      
    })

    .catch(err => console.log(err,"message not sent"));
    
  };

  return (
    <div className="ContactForm">
      <div className="ContactForm_left">
        <p className="ContactForm_left1">Don't be a stranger!</p>
        <p className="ContactForm_left2">You tell us. We listen.</p>
        <div className="ContactForm_left3">
          <p>
            Cras elementum finibus lacus nec lacinia. Quisque non convallis
            nisl, eu
          </p>
          <p>
            condimentum sem. Proin dignissim libero lacus, ut eleifend magna
          </p>
          <p>vehicula et. Nam mattis est sed tellus.</p>
        </div>
      </div>
      <div className="ContactForm_right">
        <form onSubmit={handleSubmit}>
         
            <input
              type="text"
              name="name"
              placeholder="NAME"
              value={formData.name}
              onChange={handleInputChange}
            />
          
          <br />
          
            <input
              type="text"
              name="subject"
              placeholder="SUBJECT"
              value={formData.subject}
              onChange={handleInputChange}
            />
         
          <br />
          
            
            <input
              type="email"
              name="email"
              placeholder="EMAIL"
              value={formData.email}
              onChange={handleInputChange}
            />
          
          
          
          <br />
          
            <textarea
              name="message"
              placeholder="MESSAGE"
              value={formData.message}
              onChange={handleInputChange}
            />
          
          <br />
          <button className="contact_btn" type="submit" >SEND MESSAGE</button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;

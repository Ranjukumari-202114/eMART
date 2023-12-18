import React from "react";
import './Login.css'
import email_icon from '../../Asserts/mail.png'
import password_icon from '../../Asserts/padlock.png'
import { useState } from 'react';
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";


function Login() {
   
  const Navigate = useNavigate('')
  const [Email,SetEmail] = useState('');
  const [Password,SetPassword] = useState('');



  const handleSubmit =(event)=>
  {
    event.preventDefault()
    // console.log(Name, Email,Password)

    const userData = {
      
      user_email:Email,
      user_password:Password,
      
    };

    axios.post("http://localhost:5000/user/login", userData)
    
    .then((response) => {
      const { jwt } = response.data;
      localStorage.setItem('token', jwt);
      
      
      // console.log(response.data)

      if(response.status == 404)
      {
          alert("user not found with email")
      }

      if(response.status == 401)
      {
        alert("Invalid password....")
      }
      if(response.status == 200)
      {
        Navigate("/");
        alert("you have successfully login")
      }
       
    })
    .catch(err => console.log(err));

  };
    return ( 
      <>
      <form onSubmit={handleSubmit}>
      <div className="container">
       <div className="header">
        <div className="text" >Login</div>
        <div className="underline"></div>
       </div>
       <div className="Inputs">   
        <div className="Input">
          <img src={email_icon}  alt=""/>
          <input type="Email"
           placeholder='Email'
           required
           value={Email}
           onChange={(event) => SetEmail(event.target.value)}
           />
        </div>
        <div className="Input">
          <img src={password_icon}  alt=""/>
          <input type="Password" 
          placeholder='Password'
          required
          value={Password}
          onChange={(event) => SetPassword(event.target.value)}
          />
        </div>
      </div>
      <div className="Submit_contailer">
        <button className="submit">Login</button>
      </div>
      
    </div>
      </form>
      
      </>
        
     );
}

export default Login;
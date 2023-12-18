import React, { useState } from "react";
import './SignUp.css'
import user_icon  from '../../Asserts/user.png'
import email_icon from '../../Asserts/mail.png'
import password_icon from '../../Asserts/padlock.png'
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

function SignUp() {

  const Navigate = useNavigate('')
  const [Name,SetName] = useState('');
  const [Email,SetEmail] = useState('');
  const [Password,SetPassword] = useState('');


  const handleSubmit =(event)=>
  {
    event.preventDefault()
    // console.log(Name, Email,Password)

    const userData = {
      user_name:Name,
      user_email:Email,
      user_password:Password,
    };

    axios.post("http://localhost:5000/user/signup", userData)
    .then((response) => {
      
      if(response.status == 400)
      {
          alert("User already exist with this email")
      }

      if(response.status == 500)
      {
        alert("Unknown error occurred")
      }
    
      if(response.status == 200)
      {
        alert("login success....")
        const { jwt } = response.data;
        localStorage.setItem('token', jwt);
        Navigate("/");

      }  
       
    })
    .catch(err => console.log(err));

  };

  


    return ( 
     <>
     <form onSubmit={handleSubmit}>
     <div className="container">
      <div className="header">
        <div className="text">SignUp</div>
        <div className="underline"></div>
      </div>
    
      <div className="Inputs">
        <div className="Input">
          <img src={user_icon} alt=""/>
          <input type="text" 
          placeholder='Name'
          value={Name}
          required
          onChange={(event) => SetName(event.target.value)}/>
        </div>
        
        <div className="Input">
          <img src={email_icon}  alt=""/>
          <input type="Email"
           placeholder='Email'
           value={Email}
           required
           onChange={(event) => SetEmail(event.target.value)}/>
        </div>

        <div className="Input">
          <img src={password_icon}  alt=""/>
          <input type="Password"
           placeholder='Password'
           value={Password}
           required
          onChange={(event) => SetPassword(event.target.value)}
          />
        </div>

      </div>
      
      
      <div className="Submit_contailer">
        <button className="submit" >Sign Up</button>
      </div>
      
    </div>
     </form>
      
     </>
    
     );
}

export default SignUp;
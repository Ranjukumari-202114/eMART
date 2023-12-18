import React, { useState } from 'react'
import './loginSignup.css'
import user_icon from '../Asserts/user.png'
import email_icon from '../Asserts/mail.png'
import password_icon from '../Asserts/padlock.png'


const LoginSignup = () => {

  const [action, setAction] =useState("Login")
  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="Inputs">
        {action==="Login"?<div></div>:<div className="Input">
          <img src={user_icon} alt=""/>
          <input type="text" placeholder='Name'/>
        </div>}
        
        <div className="Input">
          <img src={email_icon}  alt=""/>
          <input type="Email" placeholder='Email'/>
        </div>
        <div className="Input">
          <img src={password_icon}  alt=""/>
          <input type="Password" placeholder='Password'/>
        </div>

      </div>
      {action=="Sign Up"?<div></div>:<div className="forgot_password">Lost Password<span>Click here!</span></div>}
      
      <div className="Submit_contailer">
         <div className={action == "Login"? "submit gray":"submit" } onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
         <div className={action == "Sign Up"? "submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>

      </div>
      
    </div>
  )
}

export default LoginSignup

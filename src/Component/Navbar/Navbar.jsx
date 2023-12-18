import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useContext} from "react";

import { user_context } from "../../App";
import axios from "axios";

function Navbar() {
  const { data: userData ,setData} = useContext(user_context);
  // const [AllData,setAllData] = useState([]);
  // const [records,setRecords] = useState(AllData);

  const handlelogout = ()=>{
    localStorage.removeItem('token');
    setData(null)
  }

  // useEffect(async()=>{
  //   const res = await axios.get('http://localhost:5000/')
  //   setAllData(res.data)
  // })

  // const handleFilter = (event)=>{
  //   setRecords.filter()
  // }

  return (
    <div className="Navbar">
      <div className="logo">
        <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/logo1-free-img-140x47.png" />
      </div>

      <div className="Menu">
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/search/products">PRODUCTS</Link>
          </li>
          <li>
            <Link to="/search/Women">WOMEN</Link>
          </li>
          <li>
            <Link to="/search/Men">MEN</Link>
          </li>
        </ul>
      </div>
      <div className="search_section">
          <input
            type="text"
            placeholder="Search Products here..."
            // value={searchTerm}
            // onChange={handleFilter}
          />
      </div>

      <div className="Navbar_right">
       <ul>
          <Link to="/about">ABOUT</Link>
          <Link to="/contact">CONTACT US</Link>
       </ul>
      {userData == null?<> <Link to="/SignUp">SIGN UP</Link>
        <Link to="/Login">LOGIN</Link></>:<div className="Navbar_cart">
        <Link to="/cart"><svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="cart"
         >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg></Link>
        
        <button onClick={handlelogout}>Logout</button>
        </div>}
        
        
      </div>
    </div>
  );
}

export default Navbar;

import React from "react";
import './NavHome.css'
import Section2 from "../Section2/Section2";
import Section3 from "../Section3/Section3";
import Section4 from "../Section4/Section4";
// import Footer from "../Footer/Footer";





function NavHome() {
   return ( 
      <>
      <div className="NavHome"> 
          <div className="NavHome_content">
             <p className="nav_content1">Raining Offers For<br></br> Hot Summer!</p>
             <p className="nav_content2">25% Off On All Products</p>
             <div className="btn"> 
                <button className="button1">SHOP NOW</button>
                <button className="button2">FIND MORE</button>
             </div>
          </div>
      </div>
      <Section2/>
      <Section3/>
      <Section4/>
      {/* <Footer/> */}

      </>

      
    );
}

export default NavHome ;
import React from "react";
import './About.css';
import Navbar from "../Navbar/Navbar";
import About_Us from "./About_Us/About_Us";
import About_Team from "./About_Team/About_Team";
import FollowUs from "./FollowUs/FollowUs";

function About() {
    return ( 
        <>
          {/* <Navbar/> */}
          <div className="About">
            <div className="About_us">
              <p className="aboutus">About Us</p>
            </div>
         </div>
         <div>
            <About_Us/>
            <About_Team/>
         </div>
         <div >
            <FollowUs/>
         </div>
        </>
        
     );
}

export default About;
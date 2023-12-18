import React from "react";
import "./FollowUs.css";
import { FaWhatsapp } from "react-icons/fa";
// import { CiYoutube } from "react-icons/ci";
// import { CiLinkedin } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function FollowUs() {
  return (
    <div className="FollowUs">
      <div className="Follow_us">
       <p className="Follow_us1">Follow Us</p>
        <div>
          
          <p>
            Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris
            vitae erat consequat auctor eu in elit.
          </p>
          <p>
            Class aptent taciti sociosqu ad litora torquent per conubia nostra.
          </p>
        </div>
      </div>
      <div className="Follow_icon">
        <div className="whatsapp_icon">
          <FaWhatsapp />
          <p>Whatsapp</p>
        </div>
        <div className="youtube_icon">
          <IoLogoYoutube />
          <p>YouTube</p>
        </div>
        <div className="twitter_icon">
          <FaTwitter />
          <p>Twitter</p>
        </div>
        <div className="instagram_icon">
          <FaInstagram />
          <p>Instagram</p>
        </div>

        <div className="linkdin_icon">
          {/* <CiLinkedin /> */}
          <FaLinkedin />
          <p>LinkedIn</p>
        </div>
      </div>
    </div>
  );
}

export default FollowUs;

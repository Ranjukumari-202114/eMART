import React from "react";
import "./Footer.css";

import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import { AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGithub } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";

function Footer() {
  return (
    <>
      <div className="footer_top">
        <p>
          SALE UP TO 70% OFF FOR ALL CLOTHES & FASHION ITEMS, ON ALL BRANDS.
        </p>
      </div>
      <div className="footer_main">
        <div className="footer">
          <div className="footer_left">
            <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/logo@2x-free-img-120x40.png" />
            <h3>The best look anytime, anywhere.</h3>
          </div>
          <div className="footer_right1">
            <h2>For Her</h2>
            <ul>
              <li>Women Jeans</li>
              <li>Tops and Shirts</li>
              <li>Women Jackets</li>
              <li>Heels and Flats</li>
              <li>Women Accessories</li>
            </ul>
          </div>
          <div className="footer_right2">
            <h2>For Him</h2>
            <ul>
              <li>Men Jeans</li>
              <li>Men Shirts</li>
              <li>Men Shoes</li>
              <li>Men Accessories</li>
              <li>Men Jackets</li>
            </ul>
          </div>
          <div className="Subscribe">
            <h2>Subscribe</h2>
            <input placeholder="Your email address.." />
            <button className="Subscribe_btn">SUBSCRIBE</button>
          </div>
        </div>
      </div>

      <div className="footer_down_part">
        <div className="footer_down">
          <div className="footer_down1">
            <p>Copyright © 2023 Ranju. Powered by Gupta.</p>
          </div>
          <div className="footer_down2">
            <AiOutlineInstagram  />
            <FaLinkedin  />
            <BiLogoGithub  />
            <BsFacebook  />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

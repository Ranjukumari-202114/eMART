import React from "react";
import "./About_Us.css";

function About_Us() {
  return (
    <div className="About_Us">
      <div className="about_container_about">
        <div className="about_container">
        <div className="about_container_context">
          <div className="boder"></div>
          <div className="about_container_context1">
            <p>Who We Are</p>
          </div>
          <div className="about_container_context2">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec</p>
            <p>ullamcorper mattis, pulvinar dapibus leo. Nam nec tellus a odio tincidunt auctor</p>
            <p>a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit.</p>
          </div>
        </div>
        </div>
        <div className="about_container_img">
          <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/slide-image-free-img.jpg"/>
        </div>
      </div>
    </div>
  );
}

export default About_Us;

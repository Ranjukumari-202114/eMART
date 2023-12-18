import React from "react";
import "./SideBarCard.css";

function SideBarCard(props) {
  return (
    <div className="SideBarCard_main">
      <div className="SideBarCard">
        <div className="SideBarCard_img">
          <img src={props.imageUrl} />
        </div>
        <div className="SideBarCard_content">
          <p id="title">{props.title}</p>
          <p id="title">{props.Category}</p>
        </div>
      </div>
    </div>
  );
}

export default SideBarCard;

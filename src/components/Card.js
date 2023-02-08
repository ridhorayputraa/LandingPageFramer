import React from "react";
import {
  IoMailOutline,
  IoChevronForward,
  IoApps,
  IoNotifications,
  IoPieChart,
  IoNewspaper,
  IoCard,
  IoColorFill,
} from "react-icons/io5";
import { IconContext } from "react-icons";

function Card() {
  return (
    <div className="service_container">
      <div className="title_wrapper">
        <span className="service_title">Our Services</span>
        <h2>
          Save Time Managing Social Media <br />
          For Your Business
        </h2>
      </div>
      <div className="service_card">
        <div className="card">
          <span className="service_icon" style={{}}></span>
        </div>
      </div>
    </div>
  );
}

export default Card;

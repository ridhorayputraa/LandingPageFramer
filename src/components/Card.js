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
    </div>
  );
}

export default Card;

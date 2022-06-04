import React from "react";
import "./Rightbar.css";
import Gift from "../images/gift.png";
import Ad1 from "../images/reactjs.svg";
import Ad2 from "../images/dsa.jpg";

function Rightbar() {
  return (
    <div className="rightbar">
      <div className="bday-container">
        <img src={Gift} alt="" />
        <span>
          <b>aarav</b> and <b>3 other friends</b> have a birthday today.
        </span>
      </div>
      <div className="adContainer">
        <img className="ad-img" src={Ad1} alt="" />
        <img className="ad-img" src={Ad2} alt="" />
      </div>
    </div>
  );
}

export default Rightbar;

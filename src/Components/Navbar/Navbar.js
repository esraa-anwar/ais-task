import React from "react";
import "./styles.scss";
import { FiSettings } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import img1 from "../../img/img1.png";
import img2 from "../../img/img2.png";
const Navbar = () => {
  return (
    <navbar className="navbar">
      <navbar className="navbar-content">
        <div className="search-content">
          <FiSettings className="icon" />
          <div className="search">
            <BiSearch className="search-icon" />
            <input placeholder="استعلام عن حالة مواليد او وفاة" />
          </div>
        </div>
        <div className="logo-container">
          <p>الرئيسية</p> 
          <img src={img2} />
          <div style={{width: "3px", height: "50px", display: "inline-block",backgroundColor:"#e6edf9"}}/>
          <img src={img1} />
        </div>
      </navbar>
    </navbar>
  );
};

export default Navbar;

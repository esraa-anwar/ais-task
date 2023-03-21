import React from "react";
import "./styles.scss";
import {BsArrowClockwise } from "react-icons/bs"
const Card = ({ name, number }) => {
  return (
    <div className="card-container">
    <div className="card">
      <div className="card-content">
        <div className="content">
          <p className="number">400</p>
          <p className="name">طلبات تعديل مقدمة</p>
        </div>
        <BsArrowClockwise className="circle2"/>

      </div>
    </div>   <div className="card">
      <div className="card-content">
        <div className="content">
          <p className="number">20</p>
          <p className="name">عدد الوفيات المدخلين</p>
        </div>
      
        <div className="circle"></div>      </div>
    </div>   <div className="card">
      <div className="card-content">
        <div className="content">
          <p className="number">10,918</p>
          <p className="name">عدد المواليد المدخلين</p>
        </div>
        <div className="circle3"></div>
      </div>
    </div>
    </div>
  );
};

export default Card;

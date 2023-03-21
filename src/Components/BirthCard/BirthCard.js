import React from "react";
import "./styles.scss";
import  {ReactComponent as Icon1}  from "../../img/female.svg";
import  {ReactComponent as Icon2}  from "../../img/male.svg";
import img2 from "../../img/female.svg";
const BirthCard = ({ name, male, female }) => {
  return (
    <div className="birth-card">
      <div className="birth-card-content">
        <p>{name}</p>
        <div className="female">
          <p>ذكور</p>
          <Icon1 height="125" width="100"  className="svg-img1"/>

          <p className="number">{male}</p>
        </div>
        <div className="male">
          <p>اناث</p>
          <Icon2  height="125" width="100" className="svg-img2"/>

          <p className="number">{female}</p>
        </div>
      </div>
    </div>
  );
};

export default BirthCard;

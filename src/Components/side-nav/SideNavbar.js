import React, { useState } from "react";
import "./style.scss";
import { IoChevronUpSharp } from "react-icons/io5";
const SideNavbar = () => {
  const [isActive, setIsActive] = useState(true);

  return (
    <div className="SideNavbar">
      <div className="SideNavbar-content">
        <div className="Accordion" onClick={() => setIsActive(!isActive)}>
          <IoChevronUpSharp />
          <div className="Accordion-content">
            <div className="circle"></div>
            <p>المواليد</p>
          </div>
        </div>
        {isActive && (
          <>
            <p>تسجيل واقعة ميلاد</p>
            <p>سجيل ساقط قيد ميلاد</p>
            <p>تسجيل ميلاد (معثور عليه)</p>
            <p>تسجيل ميلاد (ساقط قيد معثور (عليه)</p>
            <p>استعلام - تعديل واقعة الميلاد</p>
            <p>طلب تعديل واقعة ميلاد</p>
            <hr />
          </>
        )}
      </div>
    </div>
  );
};

export default SideNavbar;

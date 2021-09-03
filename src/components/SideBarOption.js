import React from "react";
import "./SideBarOption.css";

function SidebarOption({ active, text, Icon }) {
  return (
    <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
      <h3>{text}</h3>
    </div>
  );
}

export default SidebarOption;
import React from "react";
import './Tasks.css'
import SidebarOption from "./SideBarOption.js";
const Tasks = () => {
  return <div className ='tasklist'>
    Tasks<br/>
    <div className='tasks'>
    <SidebarOption text="Explore" />
    <SidebarOption text="Refresh" />
    </div>
    </div>
};

export default Tasks;

import React from "react";
import "../styles/Sidebar.css"
import sidebaritems from "../staticData/sidebaritems.js";
import today from "../images/today.svg"
import time from "../images/time.svg"
import pomo from "../images/pomo.svg"
import reports from "../images/reports.svg"
import settings from "../images/settings.svg"
import icon from "../images/icon.svg"


function Sidebar() {

    const icons = [today, time, pomo, reports]

    return (
        <div className="sidebar">
            {/* <div>
                <img src={icon} className="sidebar-icon" />
            </div> */}
            <div className="upper-sidebar">
                <ul className="sidebar-items">
                    {sidebaritems.map((item, index) => {
                        return (
                            <li className="sidebar-item">
                                <img src={icons[index]} />
                                <p><span>{item.name}</span></p>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="lower-sidebar">
                <ul className="sidebar-items">
                    <li className="sidebar-item">
                        <img src={settings} />
                        <p><span>Settings</span></p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;
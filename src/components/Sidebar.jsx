import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Sidebar.css"
import sidebaritems from "../staticData/sidebaritems.js";
import today from "../images/today.svg"
import time from "../images/time.svg"
import pomo from "../images/pomo.svg"
import reports from "../images/reports.svg"
import settings from "../images/settings.svg"
import lock_open from "../images/lock-open.svg"
import lock_close from "../images/lock-close.svg"


function Sidebar() {

    const navigate = useNavigate()

    const icons = [today, time, pomo, reports]
    const navlinks = ["", "/track", "/pomo", "/reports"]

    const [expandable, setExpandable] = useState(false)
    const [lock, setLock] = useState(false)

    return (
        <div className={`sidebar ${expandable ? "expandable" : ""}`}
        >
            <div className="upper-sidebar">
                <ul className="sidebar-items">
                    {sidebaritems.map((item, index) => {
                        return (
                            <li
                                className="sidebar-item"
                                onClick={() => {navigate(navlinks[index])}}
                            >
                                <img src={icons[index]} />
                                <p><span>{item.name}</span></p>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="lower-sidebar">
                <ul className="sidebar-items">
                    <li
                    className="sidebar-item"
                    onClick={() => {navigate("/settings")}}
                    >
                        <img src={settings} />
                        <p><span>Settings</span></p>
                    </li>
                    <li className="sidebar-item">
                        <img src={
                            (lock == false) ? lock_close : lock_open
                        } onClick={() => {
                            setExpandable(!expandable)
                            setLock(!lock)
                        }
                        } />
                        <p onClick={() => {
                            setExpandable(!expandable)
                            setLock(!lock)
                        }
                        }><span>Lock Dashboard</span></p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;

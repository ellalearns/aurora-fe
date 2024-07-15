import React from "react";
import "../styles/Header.css";
import icon from "../images/icon.svg";
import user from "../images/user.svg";


function Header() {

    return (
        <div className="header-nav-div">
            <nav className="header-nav">
                <img src={icon} className="header-icon" id="aurora-icon" />
                <h3 className="target">70%</h3>
                <img src={user} className="header-icon" id="aurora-user" />
            </nav>
        </div>
    )
}

export default Header

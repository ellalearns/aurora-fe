import React from "react";
import "../styles/Task.css"
import start from "../images/start.svg"
import pomo from "../images/pomo.svg"
import plus from "../images/plus.svg"
import done from "../images/done.svg"


function Task() {

    return (
        <div className="task-card">
            <div className="title-major">
                <div className="title-div">
                <h3>More Aurora Tasks today</h3>
                </div>
                <p><span>major</span></p>
            </div>
            <div className="task-icons">
                <img src={start} className="task-icon"/>
                <img src={plus} className="task-icon"/>
                <img src={pomo} className="task-icon"/>
                <img src={done} className="task-icon"/>
            </div>
            <h5>01:34:22</h5>
        </div>
    )
}

export default Task

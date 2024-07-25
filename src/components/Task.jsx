import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Task.css"
import start from "../images/start.svg"
import pomo from "../images/pomo.svg"
import plus from "../images/plus.svg"
import done from "../images/done.svg"


function Task({ task }) {

    const navigate = useNavigate()

    return (
        <div className="task-card">
            <div className="title-major">
                <div className="title-div">
                    <h3>{task.title}</h3>
                </div>
                {task.is_major === true && <p><span>major</span></p>}
            </div>
            <div className="task-icons">
                <img
                    src={start}
                    className="task-icon"
                    onClick={() => {
                        navigate("/track", {
                            state: { task: task }
                        })
                    }}
                />
                <img src={plus} className="task-icon" />
                <img src={pomo} className="task-icon" />
                <img src={done} className="task-icon" />
            </div>
            <h5>01:34:22</h5>
        </div>
    )
}

export default Task

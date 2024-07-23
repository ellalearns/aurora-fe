import React from "react";
import start from "../images/start.svg"
import stop from "../images/stop.svg"
import pause from "../images/pause.svg"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"
import "../styles/Pomodoro.css"


function Pomodoro() {

    const percentage = 50
    const countdown = `60:60:60`

    return (
        <div className="main-contain">
            <div className="top-major">
                <p>major</p>
            </div>
            <div className="task-title">
                <h3>Task Title Here</h3>
            </div>
            <div className="pomo">
                <CircularProgressbar
                    value={percentage}
                    text={countdown}
                    styles={buildStyles({
                        pathColor: `#964b4b`,
                        textColor: `#964b4b`,
                        textSize: `16px`
                    })}
                />
            </div>
            <div className="action-icons">
                <img src={start} />
                <img src={stop} />
                <img src={pause} />
            </div>
        </div>
    )
}


export default Pomodoro


import React from "react";
import Lottie from "react-lottie";
import hourglass from "../images/hourglass.json"
import start from "../images/start.svg"
import stop from "../images/stop.svg"
import pause from "../images/pause.svg"
import "../styles/TrackTime.css"


function HourGlass () {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: hourglass,
        rendererSettings: {
            preserveAspectRation: "xMidYMid slice"
        }
    }

    return (
        <Lottie options={defaultOptions} height={600} width={600} />
    )
}



function TrackTime () {

    return (
        <div className="main-contain">
            <div className="top-major">
                <p>major</p>
            </div>
            <div className="task-title">
                <h3>Task Title Here</h3>
            </div>
            <div className="hourglass">
                <HourGlass />
            </div>
            <div className="time-tracked">
                <h3>time tracked</h3>
            </div>
            <div className="action-icons">
                <img src={start} />
                <img src={stop} />
                <img src={pause} />
            </div>
        </div>
    )
}

export default TrackTime

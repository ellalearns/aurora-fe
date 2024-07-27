import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "react-query";
import markTaskDone from "../api/markTaskDone";
import "../styles/Task.css"
import start from "../images/start.svg"
import pomo from "../images/pomo.svg"
import plus from "../images/plus.svg"
import done from "../images/done.svg"


function Task({ task }) {

    const navigate = useNavigate()
    const queryClient = useQueryClient()

    const [isDone, setIsDone] = useState(false)

    const trackedTime = task.time_entries
    let totalSeconds = 0

    let [hours, minutes, seconds] = [0, 0, 0]

    if (trackedTime[0]) {
        trackedTime[0].tracked_time.map((entry) => {
            const timeArray = entry.split(" - ")
            const [startTime, stopTime] = [new Date(timeArray[0]), new Date(timeArray[1])]
            totalSeconds += Math.floor(Math.abs(stopTime - startTime) / 1000)
        })
        seconds = totalSeconds % 60
        minutes = Math.floor(totalSeconds / 60)
        if (minutes > 59) {
            hours = Math.floor(minutes / 60)
            minutes = minutes % 60
        }
    }

    const onDone = async () => {
        const payload = {
            "id": task["id"]
        }
        try {
            const data = await markTaskDone(payload)
            console.log(data)
        } catch (error) {
            return
        }
        queryClient.invalidateQueries("user_target")
        setIsDone(true)
    }

    return (
        <div className="task-card"
            style={{
                visibility: isDone ? "hidden" : "visible",
                pointerEvents: isDone ? "none" : null
            }}
            onClick={() => { }}>
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
                <img
                    src={done}
                    className="task-icon"
                    onClick={() => { onDone() }}
                />
            </div>
            <h5>{`${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`}</h5>
        </div>
    )
}

export default Task

import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Lottie from "react-lottie";
import hourglass from "../images/new_hourglass.json"
import frozenHourglass from "../images/hourglass.png"
import start from "../images/start.svg"
import stop from "../images/stop.svg"
import pause from "../images/pause.svg"
import startFaded from "../images/start_faded.svg"
import stopFaded from "../images/stop_faded.svg"
import pauseFaded from "../images/pause_faded.svg"
import "../styles/TrackTime.css"

import startTask from "../api/startTask";
import stopTask from "../api/stopTask";


function HourGlass({ hourglassRef }) {
    const defaultOptions = {
        autoplay: false,
        loop: true,
        animationData: hourglass,
        rendererSettings: {
            preserveAspectRation: "xMidYMid slice"
        }
    }

    return (
        <Lottie options={defaultOptions} height={600} width={600} ref={hourglassRef} />
    )
}


function TrackTime() {

    const navigate = useNavigate()
    
    const location = useLocation()
    const { task = {} } = location.state || {}

    const [taskTitle, setTaskTitle] = useState(
        task && task.title ? task.title : ""
    )

    const hourglassRef = useRef(null)
    const [paused, setPaused] = useState(false)

    const [disableStart, setDisableStart] = useState(
        task && taskTitle ? false : true
    )
    const [disableStop, setDisableStop] = useState(true)
    const [disablePause, setDisablePause] = useState(true)

    const [secondsTracked, setSecondsTracked] = useState(0)
    const [minutesTracked, setMinutesTracked] = useState(0)
    const [hoursTracked, setHoursTracked] = useState(0)

    const [tracking, setTracking] = useState(false)

    const [clockStart, setClockStart] = useState(null)
    const [clockStop, setClockStop] = useState(null)

    const [taskId, setTaskId] = useState("")

    const [titleValue, setTitleValue] = useState("")
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            if (titleValue == "") {
                return
            }
            setTaskTitle(titleValue)
            setDisableStart(false)
        }
    }


    useEffect(() => {
        let interval;
        if (tracking === true) {
            interval = setInterval(() => {
                setSecondsTracked(prevSeconds => {
                    let newSeconds = prevSeconds + 1
                    if (newSeconds >= 60) {
                        setMinutesTracked(prevMinutes => {
                            let newMinutes = prevMinutes + 1
                            if (newMinutes >= 60) {
                                setHoursTracked(prevHours => prevHours + 1)
                                newMinutes = 0
                            }
                            return newMinutes
                        })
                        newSeconds = 0
                    }
                    return newSeconds
                })
            }, 1000)
        }

        return () => clearInterval(interval)

    }, [tracking])

    const startTimer = (newStart) => {
        setPaused(false)
        if (hourglassRef.current) {
            hourglassRef.current.play()
        }

        setTracking(true)
        setClockStart(newStart)

        setDisableStart(true)
        setDisableStop(false)
    }

    function stopTimer(newStop) {
        setPaused(true)
        if (hourglassRef.current) {
            hourglassRef.current.stop()
        }

        setTracking(false)
        setClockStop(newStop)

        setDisableStart(false)
        setDisableStop(true)
    }

    const onStart = async () => {

        let task_id = ""
        let payload = {}

        const newStart = new Date()
        const serverStart = newStart.toISOString()

        startTimer(newStart)

        if (task === undefined || Object.keys(task).length === 0) {
            task_id = ""
            payload = {
                "title": taskTitle,
                "started_at": serverStart
            }
        } else {
            task_id = task["id"]
            payload = {
                "id": task_id,
                "started_at": newStart
            }
        }

        try {
            const data = await startTask(payload)
            setTaskId(data["id"])
        } catch (error) {
            return
        }
    }

    const onStop = async () => {

        let payload = {}

        const newStop = new Date()

        stopTimer(newStop)

        payload = {
            "id": taskId,
            "stopped_at": newStop
        }

        try {
            const data = await stopTask(payload)
        } catch (error) {
            return
        }

        navigate("/")
    }



    return (
        <div className="main-contain">
            <div className="top-major">
                {task.is_major === true && <p>major</p>}
            </div>
            <div className="task-title">
                {taskTitle ? <h3>{`${taskTitle}`}</h3>
                 : 
                 <input 
                 placeholder="Task Title Here"
                 className="newTask"
                 onChange={(e) => setTitleValue(e.target.value)}
                 onKeyDown={handleKeyDown}
                />}
            </div>
            <div className="hourglass">
                {
                    (paused === false) ?
                        <div style={{ pointerEvents: "none" }}>
                            <HourGlass hourglassRef={hourglassRef} />
                        </div>
                        :
                        <img src={frozenHourglass} />
                }
            </div>
            <div className="time-tracked">
                <h3>{`${String(hoursTracked).padStart(2, "0")}:${String(minutesTracked).padStart(2, "0")}:${String(secondsTracked).padStart(2, "0")}`}</h3>
            </div>
            <div className="action-icons">
                <img
                    src={(disableStart == false) ? start : startFaded}
                    alt="start icon"
                    onClick={disableStart == false ? onStart : null}
                />
                <img
                    src={(disableStop == false) ? stop : stopFaded}
                    alt="stop icon"
                    onClick={disableStop == false ? onStop : null}
                />
                <img
                    src={(disablePause == false) ? pause : pauseFaded}
                    alt="pause icon"
                />
            </div>
        </div>
    )
}

export default TrackTime

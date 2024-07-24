import React, { useEffect, useRef, useState } from "react";
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

import createTask from "../api/createTask";


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


function TrackTime({ task = {} }) {

    const hourglassRef = useRef(null)
    const [paused, setPaused] = useState(false)

    const [disableStart, setDisableStart] = useState(false)
    const [disableStop, setDisableStop] = useState(true)
    const [disablePause, setDisablePause] = useState(true)

    const [secondsTracked, setSecondsTracked] = useState(0)
    const [minutesTracked, setMinutesTracked] = useState(0)
    const [hoursTracked, setHoursTracked] = useState(0)

    const [tracking, setTracking] = useState(false)

    const [clockStart, setClockStart] = useState(null)
    const [clockStop, setClockStop] = useState(null)

    let stopTime = new Date()

    let task_id = ""
    let payload = {}

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

    function stopTimer() {
        setPaused(true)
        if (hourglassRef.current) {
            hourglassRef.current.stop()
        }

        setTracking(false)
        setClockStop(new Date())

        setDisableStart(false)
        setDisableStop(true)
    }

    const onStart = async () => {

        const newStart = new Date()

        startTimer(newStart)

        if (Object.keys(task).length === 0) {
            task_id = ""
            payload = {
                "started_at": newStart
            }
        } else {
            task_id = task["id"]
            payload = {
                "id": task_id,
                "started_at": newStart
            }
        }

        try {
            const data = await createTask(payload)
            console.log(data)
        } catch (error) {
            return
        }
    }

    

    return (
        <div className="main-contain">
            <div className="top-major">
                <p>major</p>
            </div>
            <div className="task-title">
                <h3>Task Title Here</h3>
            </div>
            <div className="hourglass">
                {
                    (paused === false) ?
                        <div style={{pointerEvents: "none"}}>
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
                    onClick={disableStop == false ? stopTimer : null}
                />
                <img
                    src={(disablePause == false) ? pause : pauseFaded}
                    alt="pause icon"
                    onClick={() => {

                    }}
                />
            </div>
        </div>
    )
}

export default TrackTime

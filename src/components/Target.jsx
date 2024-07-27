import React from "react";
import "../styles/Header.css";
import "../styles/Target.css"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"
import getTarget from "../api/getTarget";
import { useQuery } from "react-query";


function Target() {

    const target = 70
    let value = 0
    let text = "0"

    const { isLoading, isError, data } = useQuery({
        queryKey: "user_target",
        queryFn: getTarget,
        refetchOnMount: true
    })

    if (isLoading || isError || !data) {
        value = 0
        text = "0"
    }

    if (data) {
        value = Math.floor((data.tasks_done / data.tasks_total) * 100)
        if (isNaN(value)) {
            value = 0
        }
        text = value.toString()
    }

    const handleColor = () => {
        if (value >= target) {
            return "#61d345"
        }
        return "#964b4b"
    }

    return (
        <div className="target">
            <CircularProgressbar
                    value={value}
                    text={text}
                    styles={buildStyles({
                        pathColor: handleColor(),
                        textColor: handleColor(),
                        textSize: `16px`
                    })}
                />
        </div>
    )
}

export default Target

import React from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import aToast from "../staticData/toasterStyle"
import getWelcome from "../api/getWelcome"
import getUserDetails from "../api/getUserDetails";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Task from "../components/Task";
import Footer from "../components/Footer";
import "../styles/App.css"


function Today() {

    const navigate = useNavigate()

    const { isLoading, isError, error, data } = useQuery({
        queryKey: "user_today",
        queryFn: getUserDetails
    })

    if (isLoading) {
        return
    }

    if (isError) {
        if (error.response === undefined)
        {
            return (
                <div>
                    <h4>server error. try later.</h4>
                </div>
            )
        }

        if (error.response.status === 401)
        {
            navigate("/signin")
        }
    }

    if (!data) {
        return
    }

    return (
        <div>
            <Header />
            <div className="main-container">
                <Sidebar />
                <div className="main-content">
                    {
                        (data.user.tasks.length > 0) ? data.user.tasks.map((task, index) => {
                            return <Task task={task} />
                        }) : <h3 id="greeting">Hey, {data.user.username}, add new tasks for today :) </h3>
                    }
                    <div className="footer">
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Today

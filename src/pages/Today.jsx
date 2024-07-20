import React from "react";
import { useQuery } from "react-query";
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

    // const { isLoading, isError, error, data } = useQuery({
    //     queryKey: "welcome",
    //     queryFn: getWelcome
    // })

    // if (isLoading) {
    //     return <div>loading...</div>
    // }

    // if (isError) {
    //     return <div>Error, {error.message}</div>
    // }

    // const greeting = <p>{data.greeting}</p>

    const { isLoading, isError, error, data } = useQuery({
        queryKey: "user_today",
        queryFn: getUserDetails
    })

    if (isLoading) {
        return
    }

    if (isError) {
        toast.error(error.message)
    }

    return (
        <div>
            <Header />
            <div className="main-container">
                <Sidebar />
                <div className="main-content">
                    {/* <Task />
                    <Task />
                    <Task /> */}
                    {
                        // data ? data.tasks.map((task) => {
                        //     return <Task />
                        // }) : <></>
                        (data.user.tasks.count > 0) ? data.user.tasks.map((task, index) => {
                            <Task />
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

import React from "react";
import { useQuery } from "react-query";
import { toast, Toaster } from "react-hot-toast";
import aToast from "../staticData/toasterStyle"
import getWelcome from "../api/getWelcome"
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

    return (
        <div>
            <Header />
            <div className="main-container">
                <Sidebar />
                <div className="main-content">
                    <Task />
                    <Task />
                    <Task />
                    <div className="footer">
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Today

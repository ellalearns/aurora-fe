import React from "react";
import { useQuery } from "react-query";
import getWelcome from "./api/getWelcome"
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Task from "./components/Task";
import "./styles/App.css"


function App() {

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
            {/* <p>first steps</p> */}
            {/* {greeting} */}
            <Header />
            <div className="main-container">
                <Sidebar />
                <div className="main-content">
                    <Task />
                    <Task />
                    <Task />
                </div>
            </div>

        </div>
    )
}

export default App

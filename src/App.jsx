import React from "react";
import { Route, Routes } from "react-router-dom";
import Today from "./pages/Today";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import TrackTime from "./pages/TrackTime";
import Pomodoro from "./pages/Pomodoro";
import "./styles/App.css"


function App() {
    return (
        <Routes>
            <Route path="/" element={<Today />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="track" element={<TrackTime />} />
            <Route path="pomo" element={<Pomodoro />} />
        </Routes>
    )
}

export default App

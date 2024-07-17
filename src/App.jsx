import React from "react";
import { Route, Routes } from "react-router-dom";
import Today from "./pages/Today";
// import "./styles/App.css"


function App() {
    return (
        <Routes>
            <Route path="/" element={<Today />} />
        </Routes>
    )
}

export default App

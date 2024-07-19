import { useState } from "react";
import React from "react";
import plus from "../images/plus.svg"
import "../styles/Footer.css"
import Modal from "./Modal";


function Footer() {

    const [isOpen, setIsOpen] = useState(false)

    const showModal = ({ children, mainButtonText }) => {
        return (
            <Modal
                setIsOpen={setIsOpen}
                mainButtonText={mainButtonText}
                children={children}
            />
        )
    }

    const newTask = () => {
        return (
            <div className="modal-item">
                <h3 className="modal-title">Create a new Task</h3>
                <div className="modal-body">
                    <input placeholder="task name" id="input"></input>
                    <textarea maxLength="250" placeholder="optional task descripton" id="desc"></textarea>
                    <div id="check">
                        <input type="checkbox" name="major" id="checkbox"></input>
                        <label for="major">major</label>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="footer-nav">
            <img
                src={plus}
                onClick={() => { setIsOpen(true) }}
            />
            {isOpen && showModal({
                mainButtonText: "Add New Task",
                children: newTask()
            })}
        </div>
    )
};

export default Footer;


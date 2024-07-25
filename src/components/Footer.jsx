import { useEffect, useState } from "react";
import React from "react";
import { useQueryClient } from "react-query";
import createTask from "../api/createTask";
import plus from "../images/plus.svg"
import "../styles/Footer.css"
import Modal from "./Modal";


function Footer() {

    const queryClient = useQueryClient()

    const [isOpen, setIsOpen] = useState(false)

    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [isMajor, setIsMajor] = useState(false)

    const createTaskFn = async ({ title, desc, isMajor}) => {
        const payload = {
            "title": title,
            "description": desc,
            "is_major": isMajor
        }
        try {
            const data = await createTask(payload)
            queryClient.invalidateQueries("user_today")
            setIsMajor(false)
            setIsOpen(false)
            return data
        } catch (error) {
            return
        }
    }

    const showModal = ({ children, mainButtonText, mainButtonFn }) => {
        return (
            <Modal
                setIsOpen={setIsOpen}
                mainButtonText={mainButtonText}
                children={children}
                mainButtonFn={mainButtonFn}
            />
        )
    }

    const newTask = () => {
        return (
            <div className="modal-item">
                <h3 className="modal-title">Create a new Task</h3>
                <div className="modal-body">
                    <input
                        placeholder="task name"
                        required
                        id="input"
                        onChange={(e) => {setTitle(e.target.value)}}
                    >
                    </input>
                    <textarea
                        maxLength="250"
                        placeholder="optional task descripton"
                        id="desc"
                        onChange={(e) => {setDesc(e.target.value)}}
                        >
                    </textarea>
                    <div id="check">
                        <input
                            type="checkbox"
                            name="major"
                            id="checkbox"
                            onChange={() => {setIsMajor(!isMajor)}}
                            >
                        </input>
                        <label for="major">
                            major
                        </label>
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
                children: newTask(),
                mainButtonFn: () => {createTaskFn({
                    title: title,
                    desc: desc,
                    isMajor: isMajor
                })}
            })}
        </div>
    )
};

export default Footer;


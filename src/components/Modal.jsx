import React from "react";
import ReactDOM from "react-dom";
import "../styles/Modal.css";


function Modal({ setIsOpen, mainButtonText, children, mainButtonFn }) {

    return ReactDOM.createPortal(
        <div className="modal-container">
            <div className="modal">
                <div className="middle-modal">
                    {children}
                </div>
                <div className="bottom-modal">
                    <button
                        id="cancel-modal-button"
                        className="button-modal"
                        onClick={() => { setIsOpen(false) }}
                    >Cancel
                    </button>
                    <button
                        id="main-modal-button"
                        className="button-modal"
                        onClick={mainButtonFn}
                    >
                        {mainButtonText}
                    </button>
                </div>
            </div>
        </div>,
        document.getElementById("portal")
    )
}

export default Modal;


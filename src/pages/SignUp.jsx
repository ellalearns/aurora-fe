import React from "react";
import { Link } from "react-router-dom";
import "../styles/SignUp.css"
import icon from "../images/icon.svg"


function SignUp() {

    return (
        <div id="signup-container">
            <img src={icon} />
            <h1 id="name-h">AURORA</h1>
            <form>
            <div id="input-div">
                <h4 id="input-h">Make a new Aurora account</h4>
                <input type="text" id="username" required placeholder="new_username" className="input" />
                <input type="email" id="email" required placeholder="your email here" className="input" />
                <input type="password" id="password" required placeholder="new password" className="input" />
                <input type="password" minLength="8" id="repeatPassword" required placeholder="repeat password" className="input" />
            </div>
            <div id="button-div">
                <button>New Aurora</button>
                <p>have an account? <span><Link to="/signin">sign in</Link></span></p>
            </div>
            </form>
        </div>
    )
}


export default SignUp;

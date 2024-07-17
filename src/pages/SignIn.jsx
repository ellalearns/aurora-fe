import React from "react";
import "../styles/SignIn.css"
import icon from "../images/icon.svg"


function SignIn() {

    return (
        <div id="signin-container">
            <img src={icon} />
            <h1 id="name-h">AURORA</h1>
            <form>
            <div id="input-div">
                <h4 id="input-h">Sign into your Aurora account</h4>
                <input type="email" id="email" required placeholder="email" className="input" />
                <input type="password" id="password" required placeholder="password" className="input" />
            </div>
            <div id="button-div">
                <button>Run Aurora</button>
                <p>no account? <span><a href="">sign up</a></span></p>
            </div>
            </form>
        </div>
    )
}


export default SignIn;

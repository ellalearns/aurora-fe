import React from "react";
import { Link , useNavigate } from "react-router-dom";
import { useState } from "react";
import signIn from "../api/signIn";
import "../styles/SignIn.css"
import icon from "../images/icon.svg"


function SignIn() {

    const navigate = useNavigate()

    const [user, setUser] = useState({})
    const [again, setAgain] = useState(false)
    const [againText, setAgainText] = useState("incorrect details!")

    const onSubmit = async (e) => {

        e.preventDefault();
        const payload = { ...user }

        try 
        {
            const data = await signIn(payload)
            console.log(data)
        } catch (error) {
            if (error.response.status === 400) {
                console.log(error.response.data)
                setAgainText("incorrect details!")
            }
            else {
                console.log("a problem somewhere")
                setAgainText("error! not your fault. try later :)")
            }
            setAgain(true)
            return
        }

        if (document.cookie.indexOf("csrf_access_token")) {
            setAgain(false)
            navigate("/");
        }
        
    }


    return (
        <div id="signin-container">
            <img src={icon} />
            <h1 id="name-h">AURORA</h1>
            <form onSubmit={onSubmit}>
                <div id="input-div">
                    <h4 id="input-h">Sign into your Aurora account</h4>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        required placeholder="email"
                        className="input"
                        onChange={(e) => setUser({
                            ...user,
                            email: e.target.value
                        })}
                    />
                    <input
                        type="password"
                        name="password"
                        id="password"
                        required placeholder="password"
                        className="input"
                        onChange={(e) => setUser({
                            ...user,
                            password: e.target.value
                        })}
                    />
                    {again && <span id="incorrect-details">{againText}</span>}
                </div>
                <div id="button-div">
                    <button>
                        Run Aurora
                    </button>
                    <p>no account? <span><Link to="/signup">sign up</Link></span></p>
                </div>
            </form>
        </div>
    )
}


export default SignIn;

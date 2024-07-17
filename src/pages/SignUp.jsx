import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import signUp from "../api/signup";
import "../styles/SignUp.css"
import icon from "../images/icon.svg"


function SignUp() {

    const navigate = useNavigate()

    const [user, setUser] = useState({})
    const [again, setAgain] = useState(false)
    const [againText, setAgainText] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (user.password !== user.repeat_password) {
            setAgainText("passwords don't match :)")
            setAgain(true)
            return
        }
        setAgain(false)

        const payload = { ...user }

        try {
            const data = await signUp(payload)
            console.log(data)
        }
        catch (error) {
            if (error.response === undefined) {
                setAgainText("server problem. try later.")
                setAgain(true)
            }
            else if (error.response.status === 400) {
                console.log(error.response.data)
                setAgainText("email already exists")
                setAgain(true)
            } else {
                setAgainText("server problem. try later.")
                setAgain(true)
            }
            return
        }

        if (document.cookie.indexOf("csrf_access_token")) {
            navigate("/")
        }
    }


    return (
        <div id="signup-container">
            <img src={icon} />
            <h1 id="name-h">AURORA</h1>
            <form onSubmit={handleSubmit}>
                <div id="input-div">
                    <h4 id="input-h">Make a new Aurora account</h4>
                    <input
                        type="text"
                        id="username"
                        required
                        placeholder="new_username"
                        className="input"
                        onChange={(e) => setUser({
                            ...user,
                            username: e.target.value
                        })}
                    />
                    <input
                        type="email"
                        id="email"
                        required
                        placeholder="your email here"
                        className="input"
                        onChange={(e) => setUser({
                            ...user,
                            email: e.target.value
                        })}
                    />
                    <input
                        type="password"
                        id="password"
                        required
                        placeholder="new password"
                        className="input"
                        onChange={(e) => setUser({
                            ...user,
                            password: e.target.value
                        })}
                    />
                    <input
                        type="password"
                        minLength="8"
                        id="repeatPassword"
                        required
                        placeholder="repeat password"
                        className="input"
                        onChange={(e) => setUser({
                            ...user,
                            repeat_password: e.target.value
                        })}
                    />
                    {again && <span id="retype-passwords">{againText}</span>}
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

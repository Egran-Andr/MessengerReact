import React from "react"
import Add from "../img/addAvatar.png"

const LoginPage = () => {

    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Chat</span>
                <span className="tittle">Login</span>
                <form>
                    <input type="email" placeholder="Email"></input>
                    <input type="password" placeholder="Password"></input>
                    <button>Sign in</button>
                </form>
                <p>Dont have an account? Register </p>
            </div>
        </div>
    )
}
export default LoginPage

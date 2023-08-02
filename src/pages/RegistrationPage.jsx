import React from "react"
import Add from "../img/addAvatar.png"

const RegistrationPage = () => {

    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Chat</span>
                <span className="tittle">Register</span>
                <form>
                    <input type="text" placeholder="display name"></input>
                    <input type="email" placeholder="Email"></input>
                    <input type="password" placeholder="Password"></input>
                    <input type="file" id="file" style={{ display: "none" }}></input>
                    <label htmlFor="file">
                        <img src={Add} alt=""></img>
                        <span>Add avatar</span>
                    </label>
                    <button>Sign up</button>
                </form>
                <p>Already have an account? Login </p>
            </div>
        </div>
    )
}
export default RegistrationPage


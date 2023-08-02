import React from "react"
import Add from "../img/addAvatar.png"
import {createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useState } from "react";
const RegistrationPage = () => {
    const [err, setErr] = useState(false);
    const handleSubmit = async (e) => {

        e.preventDefault();
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];

        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);
        }
        catch (err) {
            setErr(true);
        }


    }
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Chat</span>
                <span className="tittle">Register</span>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="display name"></input>
                    <input type="email" placeholder="Email"></input>
                    <input type="password" placeholder="Password"></input>
                    <input type="file" id="file" style={{ display: "none" }}></input>
                    <label htmlFor="file">
                        <img src={Add} alt=""></img>
                        <span>Add avatar</span>
                    </label>
                    <button>Sign up</button>
                    {err && <span>Something went wrong</span>}
                </form>
                <p>Already have an account? Login </p>
            </div>
        </div>
    )
}
export default RegistrationPage


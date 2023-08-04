import React from 'react';
import { signOut } from "firebase/auth";
import { auth} from'../firebase'
const Navbar = () => { 
    return (
        <div className="navbar">
            <span className="logo">Chat</span>
            <div className="user">
                <img src="" alt=""></img>
                <span>AccountName</span>
                <button onClick={() => signOut(auth)}>logout</button>
            </div>

        </div>
    )
}
export default Navbar

import React from "react"
import { useState, getStorage } from "react";
import Add from "../img/addAvatar.png"
import {createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 
import { useNavigate, Link } from "react-router-dom";
import  nouser   from "../img/nouser.jpg"

const RegistrationPage = () => {
    const [err, setErr] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = async (e) => {

        e.preventDefault();
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];


        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);

            const storageRef = ref(storage, displayName);
            if (file !== undefined) {
                const uploadTask = uploadBytesResumable(storageRef, file);
                uploadTask.on(
                    'state_changed',
                    (snapshot) => {
                    },
                    (error) => {
                        console.log('Error upload file', error)
                        setErr(true);
                    },
                    () => {
                        // Upload completed successfully, now we can get the download URL
                        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                            await updateProfile(res.user, {
                                displayName,
                                photoURL: downloadURL
                            });
                            await setDoc(doc(db, "users", res.user.uid), {
                                uid: res.user.uid,
                                displayName,
                                email,
                                photoURL: downloadURL,
                            });

                            await setDoc(doc(db, "userChats", res.user.uid), {});


                        });

                    }
                );
            }
            else {
                const uploadTask = uploadBytesResumable(storageRef, nouser);
                uploadTask.on(
                    'state_changed',
                    (snapshot) => {
                    },
                    (error) => {
                        console.log('Error upload file', error)
                        setErr(true);
                    },
                    () => {
                        // Upload completed successfully, now we can get the download URL
                        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                            await updateProfile(res.user, {
                                displayName,
                                photoURL: downloadURL
                            });
                            await setDoc(doc(db, "users", res.user.uid), {
                                uid: res.user.uid,
                                displayName,
                                email,
                                photoURL: downloadURL,
                            });

                            await setDoc(doc(db, "userChats", res.user.uid), {});


                        });

                    }
                );
            }
                
          
            // Listen for state changes, errors, and completion of the upload.
            navigate("/login")

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
                    <input type="file" id="file" accept='.jpg,.jpeg,.png' style={{ display: "none" }}></input>
                    <label htmlFor="file">
                        <img src={Add} alt=""></img>
                        <span>Add avatar</span>
                    </label>
                    <button>Sign up</button>
                    {err && <span>Something went wrong</span>}
                </form>
                <p>Already have an account? <Link to="/login">Login</Link> </p>
            </div>
        </div>
    )
}
export default RegistrationPage


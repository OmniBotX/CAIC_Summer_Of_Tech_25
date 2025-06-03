import React from "react";
import './LoginSignup.css'

// Importing the icons from react-icons
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

// Assign the icons to custom variables
const user_icon = FaUser;
const email_icon = FaEnvelope;
const password_icon = FaLock;





const LoginSignup = () => {


    return (

        <div className="container">
            <div className="header">
                <div className="text">Signup</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src={user_icon} alt="" />
                    <input type="username" placeholder="Username" />

                </div>

            </div>
            <div className="inputs">
                <div className="input">
                    <img src={email_icon} alt="" />
                    <input type="email" placeholder="Email" />

                </div>

            </div>
            <div className="inputs">
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder="Password" />

                </div>

            </div>
            <div className="forgot-password">Lost Password <span>Click Here !</span></div>

            <div className="submit-container">
                <div className="submit">Sign Up</div>
                <div className="submit">Login</div>

            </div>
        </div>

    );




}














export default LoginSignup;
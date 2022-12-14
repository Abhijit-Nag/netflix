import { ArrowDropDown, Language } from "@material-ui/icons";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.scss";
const Register = () => {
    const [clicked, setClicked] = useState(false);
    // const [text, setText] =useState("English");
    const handlClick=()=>{
        setClicked(true);
        console.log(clicked);
    }
    return (
        <div className="register">
            <div className="top">
                {/* <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png" alt="" /> */}
                <div className="logo">JMedia+</div>
                <div className="wrapper">
                    <div className="select" onClick={handlClick}>
                        <Language />
                        <select>English 
                        <option>English</option>
                        <option value="Hindi">Hindi</option></select>
                        {/* {clicked && (
                            <div className="options">
                                <span onClick={setClicked(false)}>English</span>
                                <span onClick={setClicked(false)}>Hindi</span>
                            </div>
                        )} */}

                        {/* <ArrowDropDown /> */}
                    </div>
                    <button className="loginButton"><Link className="link" to="/login" > Sign In</Link></button>
                </div>

            </div>
            <div className="container">
                <h1>Unlimited movies, TV shows, and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <p>
                    Ready to watch? Enter your email to create or restart your membership.
                </p>
                <div className="input">
                    <input type="email" placeholder="Email address" />
                    <button className="registerButton">Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Register
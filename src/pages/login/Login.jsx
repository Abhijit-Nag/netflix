import { Language } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import "./login.scss"

const Login = () => {
  return (
    <div className='login'>
        <div className="topbar">

        <h1 className="logo">JMedia+</h1>
        </div>
        {/* making cards */}
        <div className="card">
            <div className="title">Sign In</div>
            <input type="text" placeholder='Email or Phone number'/>
            <input type="password" placeholder='Password' />
            <Link className='link' to="/home"><button className="submit"> Sign In</button></Link>
            <div className="help">
                <div className="wrapper">
                <input type="checkbox" autoComplete='true'/>
            <span>Remember me</span>
                </div>
            <span>Need help ?</span>
            </div>
            <div className="bottom">
                <div className="first">
                    <h2>New to JMedia?</h2>
                    <span><Link className='link' to="/"> Sign up now.</Link></span>
                </div>
                <div className="second">
                    <h3>This page is protected by Google reCAPTCHA to ensure you're not a bot.</h3>
                    <span>Learn more.</span>
                </div>
            </div>
        </div>
        
        <div className="footer">
        <h1>Questions? Call 000-800-919-1694</h1>
            <div className="info">
                <ul className="left">
                    <li>FAQ</li>
                    <li>Cookies Preferences</li>
                    
                </ul>

                <ul id='second'>
                    <li>Help Centre</li>
                    <li>Corporation Information</li>
                </ul>

                <ul id='third'>
                    <li>Terms of Use</li>
                </ul>
                <ul className="right">
                    <li>Privacy</li>
                </ul>
            </div>

            <div className="select" >
                <Language />
                <select>English
                    <option>English</option>
                    <option value="Hindi">Hindi</option></select>
                
            </div>

            <div className="bottomLine">
            <h2>JMedia+</h2>
            <h3>All Rights Reserved ® JMedia Corporation</h3>
            </div>
            
        </div>
    </div>
  )
}

export default Login
import React, { useState } from 'react'

import './LoginPopUp.css'
import { assets } from '../../assets/assets'

const LoginPopUp = ({setShowLogin}) => {

    const [currState, setCurrState] = useState("Login")

    return (
        <div className='login-popup'>
            <form action="" className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img onClick={()=>setShowLogin(false)}  src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-inputs">
                    {currState==="Login"?<></> : <input type="text"placeholder='Your name' required/>}
                    <input type="email" placeholder='Your email' required />
                    <input type="password" placeholder='Your password' required />
                </div>
                <button>{currState==="Sign Up"?"create accout":"login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox"  required/>
                    <p>terms</p>
                </div>
                {currState==="Login" 
                ?<p>Create a new account ? <span onClick={()=>setCurrState("Sign Up")}>click here</span></p>
                :<p>already have an account? <span onClick={()=>setCurrState("Login")}>Login here</span> </p>
                }
            </form>
        </div>
    )
}

export default LoginPopUp

import "./style.scss";

import React from 'react'

function Login() {
  return (
    <div id="login">
        <div className="container">
        <div className="form">
            <div className="inputs_div">
                <label>Username</label>
               <input placeholder="Enter username" className="input"/>
            </div>

            <div className="inputs_div">
                <label>Password</label>
               <input type="password" placeholder="Enter password" className="input"/>
            </div>


            <button className="submit">Daxil ol</button>
        </div>
        </div>
    </div>
  )
}

export default Login
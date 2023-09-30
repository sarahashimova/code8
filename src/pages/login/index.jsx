import "./style.scss";

import React from 'react'

function Login() {
    return (
        <div id="login" style={{background : "url('/images/login.svg')", backgroundRepeat : "no-repeat", backgroundPosition : "bottom right", backgroundSize : "63%"}}>
            <div className="container">
                <form className="form" autoComplete="off">
                    <div className="inputs_div mt">
                        <input placeholder="Username" className="input" autoComplete="off" />
                    </div>

                    <div className="inputs_div">
                        <input type="password" placeholder="Password" className="input" autoComplete="off" />
                    </div>

                    <button className="submit">Daxil ol</button>
                </form>
            </div>
        </div>
    )
}

export default Login
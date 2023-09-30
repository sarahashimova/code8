import "./style.scss";


import React, { useState } from 'react';

function Login() {

  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

    return (
        <div id="login" style={{background : "url('/images/login.svg')", backgroundRepeat : "no-repeat", backgroundPosition : "bottom right", backgroundSize : "63%"}}>
            <div className="container">
                <form className="form" autoComplete="off">
                    <div className="inputs_div mt">
                        <input placeholder="Username" className="input" autoComplete="off" />
                    </div>

                    <div className="inputs_div">
                        <input placeholder="Password" className="input" autoComplete="off" 
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}/>     
                            
                        <i className={`fa ${showPassword ? 'fa-eye-slash' : 'fa-eye'} password-toggle-icon`} onClick={togglePasswordVisibility}/>
                    </div>

                    <button className="submit">Daxil ol</button>
                </form>
            </div>
        </div>
    )
}

export default Login
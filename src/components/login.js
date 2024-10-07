import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './login.css'; 

const Login = () => {

    const navigate = useNavigate(); 

    const handleBack = () => {
        navigate('/'); 
    };
    
    const handleRegister = () => {
        navigate('/signup'); 
    };

    return (
        <div className="login-page">
            <div className="login-box">
                <button className="back-btn" onClick={handleBack}>Back</button>
               {/* <button className="reg-btn" onClick={handleRegister}>Register</button>*/} 
                <img src="logo.png" alt="MSU-IIT NMPC Logo" className="logolog"/>
                <h2 className="loginh2">MSU-IIT National Multi-Purpose Cooperative</h2>
                <p>Your Gateway to Financial Possibilities.</p>
                <form>
                    <label  className="labels">Username</label>
                    <input type="text" placeholder="Username or Email..." />
                    <label className="labelp">Password</label>
                    <input type="password" placeholder="**************" />
                    <div className="options">
                        <div className="remember-me">
                            <input type="checkbox" id="remember" />
                            <label htmlFor="remember">Remember me</label>
                        </div>
                        <a href="#" className="forgot">Forgot Password?</a>
                    </div>
                    <button className="login-btn">Login</button>
                </form>
                
                <button className="register-btn">Register</button>
                
            </div>
        </div>
    );
};

export default Login;

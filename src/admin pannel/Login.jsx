import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import email from "/email.png"
import Lock from "/Lock.png"
import './Login.css';


function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [showpopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');

    

    const handleLogin = () => {
        const user = JSON.parse(localStorage.getItem('username'));
        if (user && user.username === username && user.password === password) {
            setTimeout(() => {
                navigate('/admin/dashboard');
            }, 1000);
        }
    }
   

  
    return(
        <>
            <div className="login">
                <div className="login-container">
                    <img className="im1" src="/rk-logo.webp"/>
                <h1>Admin Panel</h1>
                <h5>RK Cargo Packers & Movers</h5>
                <div className="input-box"> 
                    <img src={email} alt="User" className="icon" />
                    <input type="text" required value={username} onChange={(e) => setUsername(e.target.value)} />
                    <label>Email</label>
                </div>
                <div className="input-box">
                    <img src={Lock} alt="User" className="icon" />
                    <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                    <label>Password</label>
                </div>
                <div className="login-btn-container">
                    <button className="login-btn" onClick={handleLogin}>
                        Sign In
                    </button>
                </div>
                </div>
            </div>

             {showpopup && (
        <div className="l-popup">
            <div className="l-popup-content">
                <p>{popupMessage}</p>
            </div>
        </div>
         )}

        </>
    );
}

export default Login;
import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'// Use navigate is use to get to the home page after successful login

const LandingLogin = () => {

    const { username, password, isLoggedIn, login, logout} = useAuth();
    const [incorrectLogin , setIncorrectLogin] = useState(false);
    const navigate = useNavigate();

    const [enteredUsername, setEnteredUsername] = useState("");//previously i was using direct DOM manipulation to get the values of username and password which is not a good practice in React. So i have replaced it with useState hooks to store the values of username and password and then use them in the handleLogin function.
    const [enteredPassword, setEnteredPassword] = useState("");

    const handleLogin = () => {
        if (
            enteredUsername === username &&
            enteredPassword === password
        ) {
            login();
            alert("Login successful!");
            setIncorrectLogin(false);
            navigate("/home");
        } 
        
        else {
            logout();
            setIncorrectLogin(true);    
            alert("Incorrect username or password. Please try again.");
        }
    };

    return (
        <>
            <div className={`flex flex-col bg-gray-300 items-center justify-center h-screen gap-10 ${isLoggedIn ? "hidden" : "block"}`}>
                <img src="/landingbg.png" alt="Login Background" className="fixed w-full h-full object-cover opacity-80" />
                <div className='bg-white rounded-lg relative p-10 w-[400px] text-center hover:shadow-2xl transition-shadow duration-300 z-10'>
                    <div className="flex justify-center gap-4">
                        <div className = "flex flex-col gap-4">
                            <h1 className="text-4xl text-slate-900 font-bold">
                                EduDash
                            </h1>
                            <h2 className = "text-md text-slate-700 mb-4">
                                Please login to access the dashboard.
                            </h2>
                        </div>
                        <button
                            className="text-slate-900 absolute top-[10px] right-[10px] text-lg hover:text-red-700 transition"
                            onClick={() => {
                                setEnteredUsername("");
                                setEnteredPassword("");
                            }}
                        >
                            clear
                        </button>

                    </div>

                    <input
                        type="text"
                        placeholder="Enter username"
                        value={enteredUsername}
                        onChange={(e) => setEnteredUsername(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <input
                        type="password"
                        placeholder="Enter password"
                        value={enteredPassword}
                        onChange={(e) => setEnteredPassword(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded mb-8 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <div className={`text-md absolute bottom-[86px] right-[40px] text-gray-400 hover:text-blue-500 ${incorrectLogin ? 'block' : 'hidden'}`}>
                        Forgot Password?
                    </div>

                    <button
                        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition hover:scale-[110%] font-semibold"
                        onClick={handleLogin}
                    >
                        Login
                    </button>

                </div>

            </div>
        </>
    )
}

export default LandingLogin
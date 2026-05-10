import React from "react";
import { useState } from "react";
import { X } from "lucide-react";

const LoginPage = () => {
  const [isloggedin, setIsLoggedIn] = useState(false);
  const [loginCardActive, setLoginCardActive] = useState(false);
  const [incorrectLogin, setIncorrectLogin] = useState(false);
  const password = "123"; // Replace with your desired password
  const username = "Manan"; // Replace with your desired username
  const handleLogin = (enteredPassword, enteredUsername) => {
    if (enteredUsername === username && enteredPassword === password) {
      setIsLoggedIn(true);
      setLoginCardActive(false);
      alert("Login successful!");
    } else {
      setIsLoggedIn(false);
      setIncorrectLogin(true);
      alert("Incorrect username or password. Please try again.");
    }
  };

  return (
    <>
      <div className = {`fixed inset-0 bg-white backdrop-blur-sm bg-opacity-50 flex items-center justify-center transition-opacity duration-300 z-50 ${loginCardActive ? 'block' : 'hidden'}`} >
          <div className = {`bg-white rounded-lg shadow-lg relative p-6 w-80 text-center`}>
              <div className = "flex justify-center gap-4"> 
                <h1 className = "text-2xl text-slate-900 mb-6 font-bold">
                  Welcome
                </h1>
                <button className = "text-slate-900 absolute top-[10px] right-[10px] text-3xl hover:text-red-700 transition" onClick={() => {setLoginCardActive(false); setIncorrectLogin(false); document.getElementById("passwordInput").value = ""; document.getElementById("usernameInput").value = ""}}>
                    <X />
                </button>
              </div>
              <input type="text" placeholder="Enter username" className = "w-full px-4 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500" id="usernameInput"/>
              <input type="password" placeholder="Enter password" className = "w-full px-4 py-2 border border-gray-300 rounded mb-8 focus:outline-none focus:ring-2 focus:ring-blue-500" id="passwordInput"/>
              <div className = {`text-md absolute bottom-[70px] right-[20px] text-gray-400 ${incorrectLogin ? 'block' : 'hidden'}`}>
                Forgot Password?
              </div>
              <button className = "w-full bg-emerald-500 text-white py-2 rounded hover:bg-emerald-400 transition hover:scale-[110%] font-semibold" onClick={() => handleLogin(document.getElementById("passwordInput").value, document.getElementById("usernameInput").value)}>
                Login
              </button>
          </div>
      </div>
    </>
  );
};

export default LoginPage;

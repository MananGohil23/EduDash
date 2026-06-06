import React, {useState} from "react";

import { useNavigate, Link, Navigate } from "react-router-dom";

import { registerUser } from "../../services/authService";

import { useAuth } from "../../context/AuthContext";

import landingBG from "../../assets/landingbg.png"

import { useUser } from "../../context/UserContext";


const Register = () => {

    const [studentID, setStudentID] = useState("");
    const [collegeName, setCollegeName] = useState("");

    const { setUser } = useUser();

    const navigate = useNavigate();

    const { login , isLoggedIn } = useAuth();

    const [enteredUsername, setEnteredUsername] =
        useState("");

    const [enteredPassword, setEnteredPassword] =
        useState("");
    
    

    const handleRegister = async () => {

        try {

            const data = await registerUser({
                username: enteredUsername,
                password: enteredPassword,
                studentID: studentID,
                collegeName: collegeName
            });

            login(data.token);

            setUser({
                username: data.username,
                studentID: data.studentID,
                collegeName: data.collegeName
            });

            navigate("/home");

        } catch (err) {

            console.log(err);

            alert("Registration failed");
        }
    };

    if(isLoggedIn) {
       return <Navigate to="/home" />;
    }

    return (

        <div className="h-screen flex justify-center items-center">
            <img src = {landingBG} alt="Login Background" className="fixed w-full h-full object-cover opacity-80 -z-10" />
            <div className="bg-white w-[400px] relative p-10 rounded-lg shadow-xl">
                <div className = "flex flex-col gap-4 justify-center items-center">
                    <h1 className="text-4xl font-bold text-slate-900">
                        EduDash
                    </h1>
                    <h2 className = "text-md text-slate-600 mb-4">
                        Please register to access the dashboard.
                    </h2>
                </div>
                <button
                    className="text-slate-900 absolute top-[10px] right-[10px] text-lg hover:text-red-700 transition"
                    onClick={() => {
                        setEnteredUsername("");
                        setEnteredPassword("");
                        setStudentID("");
                        setCollegeName("");
                    }}
                >
                    clear
                </button>
                <input
                    type="text"
                    placeholder="Enter username"
                    value={enteredUsername}
                    onChange={(e) =>
                        setEnteredUsername(e.target.value)
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                    type="password"
                    placeholder="Enter password"
                    value={enteredPassword}
                    onChange={(e) =>
                        setEnteredPassword(e.target.value)
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    placeholder="Enter Student ID"
                    value={studentID}
                    onChange={(e) =>
                        setStudentID(e.target.value)
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    placeholder="Enter College Name"
                    value={collegeName}
                    onChange={(e) =>
                        setCollegeName(e.target.value)
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <button
                    onClick={handleRegister}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded transition-all duration-300 hover:scale-[110%]"
                >
                    Register
                </button>

                <p className="text-gray-600 text-center mt-6">

                    Already have an account?

                    <Link
                        to="/login"
                        className="text-blue-400 ml-2 hover:underline"
                    >
                        Login
                    </Link>

                </p>
            </div>
        </div>
    );
};

export default Register;
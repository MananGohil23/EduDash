import React from 'react';
import Marquee from 'react-fast-marquee';
import attendance from "../../assets/attendance.jpg";
import startLearning from "../../assets/startLearning.jpg";
import assignments from "../../assets/assignments.jpg";
import { useUser } from '../../context/UserContext';

const Home = () => {
    const { user } = useUser();
    return (
        <>
            <div className = "bg-gradient-to-r from-slate-900 to-blue-800 pt-[60px] min-h-screen">
                <h1 className = "w-full flex justify-center items-center text-4xl p-6 font-bold text-white">
                   Hello {user?.username || "User"}, Welcome to EduDash.   
                </h1>
                <div className = "flex text-white font-bold justify-center items-center text-2xl">
                    Latest Announcements
                </div>
                <Marquee speed = {100} className="mb-8 z-15">
                    <div className = "rounded-lg text-white text-xl font-bold p-3">
                        <div className = "flex text-black font-medium justify-between gap-4">
                            <div className = "bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg shadow-md p-2 mt-2">
                                Midterm exams will be held from 15th to 20th October. Please check the schedule and prepare accordingly.
                            </div>
                            <div className = "bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg shadow-md p-2 mt-2">
                                Assignment 3 deadline extended to next week.
                            </div>
                            <div className = "bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg shadow-md p-2 mt-2">
                                New lecture on Data Structures uploaded.
                            </div>
                        </div>
                    </div>
                </Marquee>
                <div className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-4">
                    <div className = "bg-gradient-to-r from-blue-500 to-blue-700 ring-1 ring-blue-400 rounded-lg shadow-blue-500 shadow-2xl p-6 transition hover:scale-105">
                        <h2 className = "text-3xl text-white mb-2 font-bold">
                            Check your Attendance
                        </h2>
                        <div>
                            <a href = "/Attendance">
                                <img src = {attendance} alt = "Attendance" className = "w-full h-[290px] object-cover rounded-md mb-2"/>
                            </a>
                            <p className = "text-white font-medium p-1 text-lg">
                                Check your attendance records and stay updated on your attendance status. View detailed reports and ensure you meet the attendance requirements for your courses.
                            </p>
                        </div>
                    </div>
                    <div className = "bg-gradient-to-r from-orange-500 to-orange-700 -translate-y-[15px] ring-1 ring-orange-400 rounded-lg shadow-orange-500 shadow-2xl p-6 transition hover:scale-105">
                        <h2 className = "text-3xl mb-2 font-bold">
                            Start Learning 
                        </h2>
                        <div>
                            <a href = "/learning/Lectures">
                                <img src = {startLearning} alt = "Start Learning" className = "w-full h-[290px] object-cover rounded-md mb-2"/>
                            </a>
                            <p className = "font-medium p-1 text-lg">
                                Personalised Video lectures and learning materials tailored to your courses. Access high-quality educational content to enhance your understanding and excel in your studies.
                            </p>
                        </div>
                    </div>
                    <div className = "bg-gradient-to-r from-blue-500 to-blue-700 ring-1 ring-blue-400 rounded-lg shadow-blue-500 shadow-2xl p-6 transition hover:scale-105">
                        <h2 className = "text-3xl text-white mb-2 font-bold">
                            Assignments
                        </h2>
                        <div>
                            <a href = "/learning/Assignments">
                                <img src = {assignments} alt = "Assignments" className = "w-full h-[290px] object-cover rounded-md mb-2"/>
                            </a>
                            <p className = "text-white font-medium p-1 text-lg">
                                Stay on top of your assignments and deadlines. View upcoming assignments, submit your work, and track your progress to ensure you never miss an important task.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
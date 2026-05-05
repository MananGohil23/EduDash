import React from 'react';
import Marquee from 'react-fast-marquee';
const Home = () => {
    return (
        <>
            <div className = "bg-gray-100 min-h-screen">
                <h1 className = "w-full flex justify-center items-center text-4xl p-6 font-bold text-slate-800">
                    Welcome to the Student Dashboard.   
                </h1>
                <Marquee speed = {100} className="mb-4 z-15">
                    <div className = "bg-white rounded-lg text-xl font-bold shadow-lg p-4 mr-4">
                        Recent Announcements:
                        <div className = "flex font-medium justify-between gap-4">
                            <div className = "bg-gray-300 rounded-lg shadow-md p-2 mt-2">
                                Midterm exams will be held from 15th to 20th October. Please check the schedule and prepare accordingly.
                            </div>
                            <div className = "bg-gray-300 rounded-lg shadow-md p-2 mt-2">
                                Assignment 3 deadline extended to next week.
                            </div>
                            <div className = "bg-gray-300 rounded-lg shadow-md p-2 mt-2">
                                New lecture on Data Structures uploaded.
                            </div>
                        </div>
                    </div>
                </Marquee>
                <div className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-4">
                    <div className = "bg-white rounded-lg shadow-lg p-6 transition hover:scale-105">
                        <h2 className = "text-3xl mb-2 font-bold">
                            Check your Attendance
                        </h2>
                        <div>
                            <a href = "/Attendance">
                                <img src = "/attendance.jpg" alt = "Attendance" className = "w-full h-[290px] object-cover rounded-md mb-2"/>
                            </a>
                            <p className = "text-gray-700 p-1 text-lg">
                                Check your attendance records and stay updated on your attendance status. View detailed reports and ensure you meet the attendance requirements for your courses.
                            </p>
                        </div>
                    </div>
                    <div className = "bg-white rounded-lg shadow-lg p-6 transition hover:scale-105">
                        <h2 className = "text-3xl mb-2 font-bold">
                            Start Learning 
                        </h2>
                        <div>
                            <a href = "/learning/Lectures">
                                <img src = "/startLearning.jpg" alt = "Start Learning" className = "w-full h-[290px] object-cover rounded-md mb-2"/>
                            </a>
                            <p className = "text-gray-700 p-1 text-lg">
                                Personalised Video lectures and learning materials tailored to your courses. Access high-quality educational content to enhance your understanding and excel in your studies.
                            </p>
                        </div>
                    </div>
                    <div className = "bg-white rounded-lg shadow-lg p-6 transition hover:scale-105">
                        <h2 className = "text-3xl mb-2 font-bold">
                            Assignments
                        </h2>
                        <div>
                            <a href = "/learning/Assignments">
                                <img src = "/assignments.jpg" alt = "Assignments" className = "w-full h-[290px] object-cover rounded-md mb-2"/>
                            </a>
                            <p className = "text-gray-700 p-1 text-lg">
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
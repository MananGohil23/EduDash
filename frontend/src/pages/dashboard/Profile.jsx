import React from 'react'
import profilePic from '../../assets/profile_pic.jpg'
import { useAttendance } from '../../context/AttendanceContext';
import { useUser } from '../../context/UserContext';

const Profile = () => {
    const { attendanceData } = useAttendance();
    const { user } = useUser();
    const hasData = Object.keys(attendanceData).length > 0;
    const overall = Object.values(attendanceData).reduce(
        (acc, subject) => {
            acc.present += subject.present;
            acc.absent += subject.absent;
            acc.total += subject.total;
            return acc;
        },
        {
            present: 0,
            absent: 0,
            total: 0
        }
    );

    overall.percentage =
    overall.total > 0
        ? ((overall.present / overall.total) * 100).toFixed(2)
        : 0;

    return (
        <>
        <div className = "bg-gradient-to-r from-slate-900 to-blue-800 min-h-screen pt-[60px]">
            <div className = "flex gap-10 p-10">
                <img src={profilePic} alt="Profile" className="w-[400px] h-[400px] rounded-full mb-4 border-[6px] border-blue-500" />
                <div>
                    <h1 className="text-4xl text-white font-bold mb-2">{user || "Manan Gohil"}</h1>  
                    <p className="text-lg text-gray-400 mb-4">Computer Science Student at Dwarkadas J. Sanghvi College of Engineering</p>
                    {hasData && (
                        <div className="bg-gradient-to-r from-blue-500 to-blue-700 ring-1 ring-blue-400 text-white p-4 rounded-lg shadow-lg shadow-blue-500">
                            <h2 className="text-2xl font-bold mb-2">Attendance Summary</h2>
                        <div className= {overall.percentage <= 75 ? "col-span-full bg-gradient-to-r from-orange-500 to-orange-700 ring-1 ring-orange-400 shadow-lg shadow-orange-500 p-4 rounded-lg " : "col-span-full bg-gradient-to-b from-emerald-500 to-emerald-600 ring-1 ring-emerald-400 text-white p-6 rounded-xl shadow-lg shadow-blue-500 mb-6"}>

                                <h2 className="text-3xl font-bold">
                                    Overall Attendance
                                </h2>

                                <p className="text-5xl font-bold text-green-300 mt-4">
                                    {overall.percentage}%
                                </p>

                                <div className="flex gap-10 mt-6 text-lg">
                                    <div>
                                        <p className = "font-bold">Present:</p>
                                        <p>{overall.present}</p>
                                    </div>
                                    <div>
                                        <p className = "font-bold">Absent:</p>
                                        <p>{overall.absent}</p>
                                    </div>
                                    <div>
                                        <p className = "font-bold">Total:</p>
                                        <p>{overall.total}</p>
                                    </div>

                                    {overall.percentage <= 75 && (
                                        <p className="text-red-500 font-bold text-xl">
                                            Warning: Attendance below 75%!
                                        </p>
                                    )}

                                    {overall.percentage > 75 && (
                                        <p className="text-green-300 font-bold text-xl">
                                            Good job! Attendance is above 75%.
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    )};
                </div>
            </div>
        </div>
        </>
    );
};

export default Profile;
import React from 'react'
import profilePic from '../../assets/profile_pic.jpg'
import { useAttendance } from '../../context/AttendanceContext';
import { useUser } from '../../context/UserContext';

const Profile = () => {
    const { attendanceData } = useAttendance();
    const { user } = useUser();

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
                    <p className="text-xl text-white font-semibold">
                        Overall Attendance: {overall.percentage}%
                    </p>
                </div>
            </div>
        </div>
        </>
    );
};

export default Profile;
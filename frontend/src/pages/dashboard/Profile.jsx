import React from 'react'
import profilePic from '../../assets/profile_pic.jpg'
const Profile = () => {
    return (
        <>
        <div className = "bg-gradient-to-r from-slate-900 to-blue-800 min-h-screen pt-[60px]">
            <div className = "flex gap-10 p-10">
                <img src={profilePic} alt="Profile" className="w-[400px] h-[400px] rounded-full mb-4 border-[6px] border-blue-500" />
                <div>
                    <h1 className="text-4xl text-white font-bold mb-2">Manan Gohil</h1>  
                    <p className="text-lg text-gray-400 mb-4">Computer Science Student at Dwarkadas J. Sanghvi College of Engineering</p>
                </div>
            </div>
        </div>
        </>
    );
};

export default Profile;
import React from 'react'
const Profile = () => {
    return (
        <>
        <div className = "bg-gray-200 min-h-screen">
            <div className = "flex gap-10 p-10">
                <img src="/profile_pic.jpg" alt="Profile" className="w-[400px] h-[400px] rounded-full mb-4 border-[6px] border-slate-900" />
                <div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">Manan Gohil</h1>  
                    <p className="text-lg text-gray-700 mb-4">Computer Science Student at Dwarkadas J. Sanghvi College of Engineering</p>
                </div>
            </div>
        </div>
        </>
    );
};

export default Profile;
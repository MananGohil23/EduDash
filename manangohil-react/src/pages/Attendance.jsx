import React from 'react'
const Attendance = () => {
    return (
        <>
        <div className = "bg-gray-100 h-screen">
            <div className = "flex flex-col justify-center items-center">
                    <h1 className = "text-3xl font-bold text-center pt-10">Check your Attendance.</h1>
                    <div className = "flex bg-gray-200 justify-center items-center border-[4px] border-dashed border-slate-900 h-[400px]  w-[1200px] rounded-lg mt-10 mx-20 p-10 "> 
                        <p className = "text-xl">Drag and drop your attendance sheet here or click to upload.</p>
                    </div>
                    <button className = "transition bg-slate-900 text-white text-xl px-4 py-4 rounded-lg mt-5 hover:bg-red-500 hover:scale-[110%] hover:-translate-y-[5px]">Calculate Attendance</button>
                </div>
            </div>
        </>
    );
};

export default Attendance;
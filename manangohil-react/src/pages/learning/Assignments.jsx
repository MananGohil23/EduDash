import React from 'react'
const Assignments = () => {
    return (
        <>
        <div className = "bg-gray-100 h-full flex flex-col justify-center items-center">
            <div className = "flex items-center justify-center gap-4 bg-white w-full shadow-lg rounded-lg p-2">
                <button className = "transition text-Slate-700 text-xl px-4 py-3 shadow-lg rounded-lg hover:bg-red-600 hover:scale-[110%] hover:-translate-y-[5px]">Forthcoming</button>
                <button className = "transition text-Slate-700 text-xl px-4 py-3 shadow-lg rounded-lg hover:bg-red-600 hover:scale-[110%] hover:-translate-y-[5px]">Submitted</button>
                <button className = "transition text-Slate-700 text-xl px-4 py-3 shadow-lg rounded-lg hover:bg-red-600 hover:scale-[110%] hover:-translate-y-[5px]">Past Due</button>

            </div>
        </div>
        </>
    );
};

export default Assignments;
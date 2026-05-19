import React from 'react'
import { useState } from 'react';
const Assignments = () => {
    const [selectedSection, setSelectedSection] = useState('null');
    const [sectionBtnActive, setSectionBtnActive] = useState(null);
    return (
        <>
        <div className = "bg-gradient-to-t from-slate-900 to-blue-800 h-full flex flex-col pt-[68px] justify-center items-center">
            <div className = "flex items-center justify-center gap-4 w-full shadow-lg rounded-lg p-2">
                <button className = {`transition text-white text-2xl px-4 py-3 shadow-lg rounded-lg ${sectionBtnActive === 1 ? 'bg-slate-900 text-white' : "hover:scale-[110%] hover:-translate-y-[5px] hover:bg-blue-600"}`} onClick={() => {
                    setSelectedSection('forthcoming');
                    setSectionBtnActive(1);
                }}>Forthcoming</button>
                <button className = {`transition text-white text-2xl px-4 py-3 shadow-lg rounded-lg ${sectionBtnActive === 2 ? 'bg-slate-900 text-white' : "hover:scale-[110%] hover:-translate-y-[5px] hover:bg-blue-600"}`} onClick={() => {
                    setSelectedSection('submitted');
                    setSectionBtnActive(2);
                }}>Submitted</button>
                <button className = {`transition text-white text-2xl px-4 py-3 shadow-lg rounded-lg ${sectionBtnActive === 3 ? 'bg-slate-900 text-white' : "hover:scale-[110%] hover:-translate-y-[5px] hover:bg-blue-600"}`} onClick={() => {
                    setSelectedSection('pastDue');
                    setSectionBtnActive(3);
                }}>Past Due</button>
            </div>
            <div className = "flex justify-start gap-4 h-screen w-full shadow-lg rounded-lg p-2">
                {selectedSection === 'forthcoming' && (
                    <div>
                        <h2 className = "text-3xl text-white font-bold p-4">Forthcoming Assignments</h2>
                        <p className = "text-gray-400 text-lg p-2">These assignments are coming up soon.</p>
                    </div>
                )}
                {selectedSection === 'submitted' && (
                    <div>
                        <h2 className = "text-3xl text-white font-bold p-4">Submitted Assignments</h2>
                        <p className = "text-gray-400 text-lg p-2">These assignments have been submitted.</p>
                    </div>
                )}
                {selectedSection === 'pastDue' && (
                    <div>
                        <h2 className = "text-3xl text-white font-bold p-4">Past Due Assignments</h2>
                        <p className = "text-gray-400 text-lg p-2">These assignments are past their due date.</p>
                    </div>
                )}
            </div>
        </div>
        </>
    );
};

export default Assignments;
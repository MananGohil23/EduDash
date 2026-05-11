import React from 'react'
import { useState } from 'react';
const Assignments = () => {
    const [selectedSection, setSelectedSection] = useState('null');
    const [sectionBtnActive, setSectionBtnActive] = useState(null);
    return (
        <>
        <div className = "bg-gray-100 h-full flex flex-col justify-center items-center">
            <div className = "flex items-center justify-center gap-4 bg-white w-full shadow-lg rounded-lg p-2">
                <button className = {`transition text-Slate-700 text-xl px-4 py-3 shadow-lg rounded-lg hover:bg-gray-300 ${sectionBtnActive === 1 ? 'bg-slate-900 text-white' : "hover:scale-[110%] hover:-translate-y-[5px]"}`} onClick={() => {
                    setSelectedSection('forthcoming');
                    setSectionBtnActive(1);
                }}>Forthcoming</button>
                <button className = {`transition text-Slate-700 text-xl px-4 py-3 shadow-lg rounded-lg hover:bg-gray-300 ${sectionBtnActive === 2 ? 'bg-slate-900 text-white' : "hover:scale-[110%] hover:-translate-y-[5px]"}`} onClick={() => {
                    setSelectedSection('submitted');
                    setSectionBtnActive(2);
                }}>Submitted</button>
                <button className = {`transition text-Slate-700 text-xl px-4 py-3 shadow-lg rounded-lg hover:bg-gray-300 ${sectionBtnActive === 3 ? 'bg-slate-900 text-white' : "hover:scale-[110%] hover:-translate-y-[5px]"}`} onClick={() => {
                    setSelectedSection('pastDue');
                    setSectionBtnActive(3);
                }}>Past Due</button>
            </div>
            <div className = "flex justify-start gap-4 h-screen w-full shadow-lg rounded-lg p-2">
                {selectedSection === 'forthcoming' && (
                    <div>
                        <h2 className = "text-3xl font-bold p-4">Forthcoming Assignments</h2>
                        <p className = "text-gray-600 text-lg p-2">These assignments are coming up soon.</p>
                    </div>
                )}
                {selectedSection === 'submitted' && (
                    <div>
                        <h2 className = "text-3xl font-bold p-4">Submitted Assignments</h2>
                        <p className = "text-gray-600 text-lg p-2">These assignments have been submitted.</p>
                    </div>
                )}
                {selectedSection === 'pastDue' && (
                    <div>
                        <h2 className = "text-3xl font-bold p-4">Past Due Assignments</h2>
                        <p className = "text-gray-600 text-lg p-2">These assignments are past their due date.</p>
                    </div>
                )}
            </div>
        </div>
        </>
    );
};

export default Assignments;
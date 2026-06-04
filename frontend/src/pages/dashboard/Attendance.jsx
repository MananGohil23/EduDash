import React, { useRef, useState } from 'react';
import axios from 'axios';
import { useAttendance } from '../../context/AttendanceContext';


const Attendance = () => {
    const { attendanceData, setAttendanceData } = useAttendance();

    const fileInputRef = useRef(null);

    const [file, setFile] = useState(null);

    const [dragActive, setDragActive] = useState(false);

    const subjects = Object.entries(attendanceData).filter(([subject]) => subject !== "").sort((a, b) => b[1].percentage - a[1].percentage);

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

    const handleUpload = async () => {

        console.log("Uploading file:");

        const formData = new FormData();

        formData.append("attendanceFile", file);

        const res = await axios.post("http://localhost:5000/api/attendance/upload", formData);

        setAttendanceData(res.data);

    }

    const handleFile = (selectedFile) => {
        if (selectedFile && selectedFile.type === "application/pdf") {
            setFile(selectedFile);
        } else {
            alert("Please upload a PDF file.");
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setDragActive(false);

        const droppedFile = e.dataTransfer.files[0];
        handleFile(droppedFile);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setDragActive(true);
    };

    const handleDragLeave = () => {
        setDragActive(false);
    };

    return (
        <>
            <div className="bg-gradient-to-b from-slate-900 to-blue-800 pt-[60px] min-h-screen">
                <div className="flex flex-col justify-center items-center">

                    <h1 className="text-3xl text-white font-bold text-center pt-10">
                        Check your Attendance.
                    </h1>
                    <input
                        type="file"
                        accept=".pdf"
                        ref={fileInputRef}
                        className="hidden"
                        onChange={(e) => handleFile(e.target.files[0])}
                    />
                    <div
                        onClick={() => fileInputRef.current.click()}
                        onDrop={handleDrop}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        className={`
                            flex flex-col justify-center items-center
                            border-[4px] border-dashed rounded-lg
                            h-[400px] w-[1200px]
                            mt-10 mx-20 p-10 cursor-pointer
                            transition-all duration-300
                            ${dragActive
                                ? "bg-gradient-to-r from-blue-400 to-blue-600 border-blue-600"
                                : "bg-gradient-to-r from-blue-400 to-blue-500 border-blue-600"}
                        `}
                    >

                        <div className="text-xl flex flex-col justify-center items-center font-semibold">
                            Drag and drop your attendance sheet here
                            or click to upload.
                            <div className="text-sm max-w-[400px] text-gray-300 mt-2 italic">
                                Note: Only PDF files are accepted. Upload only the Detailed Attendance Sheet provided by your institution for accurate results.
                            </div>
                        </div>

                        {file && (
                            <p className="mt-4 font-semibold">
                                Uploaded: {file.name}
                            </p>
                        )}

                    </div>

                    <button className="transition bg-gradient-to-r from-blue-400 to-blue-600 text-white text-xl px-4 py-4 rounded-lg mt-5 hover:scale-[110%] hover:-translate-y-[5px]" onClick={handleUpload}>
                        Calculate Attendance
                    </button>
                        
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {hasData && (
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
                        )}

                        {hasData && subjects.map(
                            ([subject, data]) => (

                                <div
                                    key={subject}
                                    className= {data.percentage <= 75 ? "bg-gradient-to-r from-orange-500 to-orange-700 ring-1 ring-red-400 shadow-lg shadow-orange-500 p-4 rounded-lg " : "bg-gradient-to-r from-emerald-400 to-emerald-600 ring-1 ring-blue-400 text-white p-4 rounded-lg shadow-lg shadow-blue-500"}
                                >

                                    <h2 className="text-xl font-bold">
                                        {subject}
                                    </h2>

                                    <p>Present: {data.present}</p>

                                    <p>Absent: {data.absent}</p>

                                    <p>Total: {data.total}</p>

                                    <p>Attendance: {data.percentage}%</p>
                                </div>
                            )
                        )}

                    </div>
                </div>
            </div>
        </>
    );
};

export default Attendance;
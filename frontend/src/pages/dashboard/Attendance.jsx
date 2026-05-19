import React, { useRef, useState } from 'react';

const Attendance = () => {

    const fileInputRef = useRef(null);
    const [file, setFile] = useState(null);
    const [dragActive, setDragActive] = useState(false);

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
            <div className="bg-gradient-to-b from-slate-900 to-blue-800 pt-[60px] h-screen">
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
                                : "bg-gradient-to-r from-emerald-400 to-green-500 border-green-600"}
                        `}
                    >

                        <p className="text-xl">
                            Drag and drop your attendance sheet here
                            or click to upload.
                        </p>

                        {file && (
                            <p className="mt-4 text-green-600 font-semibold">
                                Uploaded: {file.name}
                            </p>
                        )}

                    </div>

                    <button className="transition bg-gradient-to-r from-blue-400 to-blue-600 text-white text-xl px-4 py-4 rounded-lg mt-5 hover:scale-[110%] hover:-translate-y-[5px]">
                        Calculate Attendance
                    </button>

                </div>
            </div>
        </>
    );
};

export default Attendance;
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

    const subjects = Object.entries(attendanceData).filter(([subject]) => subject !== "");

    overall.percentage =
    overall.total > 0
            ? ((overall.present / overall.total) * 100).toFixed(2)
            : 0;

        const subjectStats = Object.entries(attendanceData).map(([name, data]) => ({
        name,
        percentage:
            data.total > 0
                ? ((data.present / data.total) * 100).toFixed(2)
                : 0,
    }));

    const bestSubject =
        subjectStats.length > 0
            ? subjectStats.reduce((a, b) =>
                Number(a.percentage) > Number(b.percentage) ? a : b
            )
            : null;

    const worstSubject =
        subjectStats.length > 0
            ? subjectStats.reduce((a, b) =>
                Number(a.percentage) < Number(b.percentage) ? a : b
            )
            : null;

    console.log(user);

    return (
        <>
        <div className = "bg-gradient-to-r from-slate-900 flex p-6 to-blue-800 min-h-screen pt-[60px]">
            <div className = "flex flex-col gap-10 p-10">
                <img src={profilePic} alt="Profile" className="w-[300px] h-[300px] rounded-full border-[6px] border-blue-500" />
                    <h1 className="text-4xl text-white font-bold ">{user?.username || "Manan Gohil"}</h1>  
                    <div className="text-gray-300 space-y-2">
                        <p>
                            <span className="font-bold text-white">
                                Student ID:
                            </span>{" "}
                            {user?.studentID || "1234567890"}
                        </p>
                        <p>
                            <span className="font-bold text-white">
                                College:
                            </span>{" "}
                            {user?.collegeName || "Dwarkadas J. Sanghvi College of Engineering"}
                        </p>
                    </div>
            </div>
                {!hasData && (
                    <div className = "col-span-full bg-gradient-to-r h-[300px] from-blue-500 to-blue-700 ring-1 ring-blue-400 mt-10 text-white p-4 rounded-lg shadow-lg shadow-blue-500">
                        <h2 className="text-3xl font-bold">
                            No Attendance Data Available
                        </h2>
                        <p className="mt-2 text-xl font-medium">
                            Please upload your attendance data in the "Upload Attendance" section to see your attendance summary and insights.
                        </p>
                    </div>
                )}
                {hasData && (
                    <div>
                        <div className="bg-gradient-to-r from-blue-500 to-blue-700 ring-1 mt-10 ring-blue-400 text-white p-4 rounded-lg shadow-lg shadow-blue-500">
                            <h2 className="text-2xl font-bold mb-2">Attendance Summary</h2>  
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                                <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 rounded-xl shadow-lg">
                                    <h3 className="text-xl font-bold text-white">
                                        Overall Attendance
                                    </h3>

                                    <p className="text-4xl font-bold text-green-300 mt-2">
                                        {overall.percentage}%
                                    </p>
                                </div>

                                <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-6 rounded-xl shadow-lg">
                                    <h3 className="text-xl font-bold text-white">
                                        Best Subject
                                    </h3>

                                    <p className="text-2xl font-bold text-green-300 mt-2">
                                        {bestSubject?.name}
                                    </p>

                                    <p className="text-lg text-white">
                                        {bestSubject?.percentage}%
                                    </p>
                                </div>

                                <div className="bg-gradient-to-r from-red-600 to-red-800 p-6 rounded-xl shadow-lg">
                                    <h3 className="text-xl font-bold text-white">
                                        Needs Improvement
                                    </h3>

                                    <p className="text-2xl font-bold text-yellow-300 mt-2">
                                        {worstSubject?.name}
                                    </p>

                                    <p className="text-lg text-white">
                                        {worstSubject?.percentage}%
                                    </p>
                                </div>
                            </div>
                        </div> 
                        <div className="bg-slate-900 mt-8 p-6 rounded-xl shadow-lg">
                            <h2 className="text-3xl text-white font-bold mb-6">
                                Subject-wise Attendance
                            </h2>

                            <div className="space-y-6">
                                {subjects.map(([subject, data]) => {
                                    const percentage =
                                        data.total > 0
                                            ? ((data.present / data.total) * 100).toFixed(2)
                                            : 0;

                                    return (
                                        <div key={subject}>
                                            <div className="flex justify-between text-white mb-2">
                                                <span>{subject}</span>
                                                <span>{percentage}%</span>
                                            </div>

                                            <div className="w-full bg-gray-700 rounded-full h-4">
                                                <div
                                                    className={`h-4 rounded-full ${
                                                        percentage >= 75
                                                            ? "bg-green-500"
                                                            : "bg-red-500"
                                                    }`}
                                                    style={{ width: `${percentage}%` }}
                                                />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>  
                    </div>
                )};
            </div>
        </>
    );
};

export default Profile;
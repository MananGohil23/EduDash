import {createContext, useContext,  useState} from "react";

const AttendanceContext = createContext();

export const AttendanceProvider = ({children}) => {
    const [attendanceData, setAttendanceDataState] = useState(() => {
        const stored = sessionStorage.getItem("attendanceData");
        return stored ? JSON.parse(stored) : {};
    });

    const setAttendanceData = (data) => {
        setAttendanceDataState(data);

        sessionStorage.setItem(
            "attendanceData",
            JSON.stringify(data)
        );
    };

    return (
        <AttendanceContext.Provider value={{attendanceData, setAttendanceData}}>
            {children}
        </AttendanceContext.Provider>
    );
}

export const useAttendance = () => 
    useContext(AttendanceContext);

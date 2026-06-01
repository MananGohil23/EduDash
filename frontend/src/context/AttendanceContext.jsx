import {createContext, useContext,  useState} from "react";

const AttendanceContext = createContext();

export const AttendanceProvider = ({children}) => {
    const [attendanceData, setAttendanceData] = useState({});

    return (
        <AttendanceContext.Provider value={{attendanceData, setAttendanceData}}>
            {children}
        </AttendanceContext.Provider>
    );
}

export const useAttendance = () => 
    useContext(AttendanceContext);

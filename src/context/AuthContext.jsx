import { createContext , useContext, useEffect, useState } from "react";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn , setIsLoggedIn] = useState(false);
    const username = "Manan";
    const password = "123";

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token) {
            setIsLoggedIn(true);
        }
    }, [])

    const login = () => {
        localStorage.setItem("token", "fake-jwt-token");
        setIsLoggedIn(true);
    };

    const logout = () => {
        localStorage.removeItem("token");
        setIsLoggedIn(false);
    };

return (
    <AuthContext.Provider value = {{username , password , isLoggedIn , login , logout}}>
        {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
}
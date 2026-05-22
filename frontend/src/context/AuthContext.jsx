import { createContext , useContext, useEffect, useState } from "react";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn , setIsLoggedIn] = useState(false);

    useEffect(() => {//useEffect is used to check if the user is already logged in or not when the component reloads. It checks for the presence of a token in localStorage and sets the isLoggedIn state accordingly.
        const token = localStorage.getItem("token");

        if (token) {
            setIsLoggedIn(true);
        }
    }, [])

    const login = (token) => {
        localStorage.setItem("token", token);
        setIsLoggedIn(true);
    };

    const logout = () => {
        localStorage.removeItem("token");
        setIsLoggedIn(false);
    };

return (
    <AuthContext.Provider value = {{isLoggedIn , login , logout}}>
        {children}
    </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
}
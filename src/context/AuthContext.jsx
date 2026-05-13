import { createContext , useContext, useState } from "react";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn , setIsLoggedIn] = useState(false);
    const username = "Manan";
    const password = "123";

    const login = () => {
        setIsLoggedIn(true);
    };

    const logout = () => {
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
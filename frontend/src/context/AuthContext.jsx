import { createContext , useContext, useEffect, useState } from "react";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn , setIsLoggedIn] = useState(false);
    const username = "Manan";
    const password = "123";

    useEffect(() => {//useEffect is used to check if the user is already logged in or not when the component reloads. It checks for the presence of a token in localStorage and sets the isLoggedIn state accordingly.
        const token = localStorage.getItem("token");

        if (token) {//is always true rn beacuse of turthy value but in real world application it will check for the validity of the token and then set the isLoggedIn state accordingly.
            setIsLoggedIn(true);
        }
    }, [])

    const login = (token) => {
        localStorage.setItem("token", token);//storing a truthy value in localStorage
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
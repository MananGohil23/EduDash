import { createContext, useContext,  useState } from "react";

const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [user, setUser] = useState(
        JSON.parse(sessionStorage.getItem("user")) || null
    );

    const saveUser = (userData) => {
        setUser(userData);
        sessionStorage.setItem(
            "user",
            JSON.stringify(userData)
        );
    };

    return (
        <UserContext.Provider value={{ user, setUser: saveUser}}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => 
    useContext(UserContext);
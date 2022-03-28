import { createContext, useState, useContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("@ProWorking:user")) || {}
    );
    
    
    const handleUser = (userInfo) => {
        setUser({ ...userInfo });
        localStorage.setItem("@ProWorking:user", JSON.stringify(userInfo));
    };

    return (
        <UserContext.Provider value={{ user, handleUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);

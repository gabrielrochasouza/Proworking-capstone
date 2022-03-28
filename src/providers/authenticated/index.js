import { createContext, useState, useContext } from "react";

const AuthenticatedContext = createContext();

export const AuthenticatedProvider = ({ children }) => {
    const [authenticated, setAuthenticated] = useState(
        localStorage.getItem("@ProWorking:user") ? true : false
    );

  return (
    <AuthenticatedContext.Provider value={{ authenticated, setAuthenticated }}>
      {children}
    </AuthenticatedContext.Provider>
  );
};

export const useAuthenticated = () => useContext(AuthenticatedContext);

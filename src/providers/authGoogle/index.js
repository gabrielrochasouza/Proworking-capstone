import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export function AuthContextProvider(props) {
  const [user, setUser] = useState({});
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export const useAuthGoogle = () => useContext(AuthContext);

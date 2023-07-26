import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [accessToken, setAccessToken] = useState(null);

    let localToken;
    useEffect(() => {
        localToken = window.localStorage.getItem("accessToken");
        setAccessToken(localToken);
    }, [])

    const logout = () => {
        window.localStorage.removeItem("accessToken");
    }

    const authValues = {
        accessToken,
        logout
    }

    return (
        <AuthContext.Provider value={authValues}>{children}</AuthContext.Provider>
      );
};

export { AuthContext, AuthProvider };
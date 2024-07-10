import { createContext, useState, useContext,useEffect } from "react";
import nookies from "nookies";
import { getCookie,setCookie } from "cookies-next";
export const UserContext = createContext(null);
export default function userContext({ children }) {
  const [user, setUser] = useState({
    name: "snjadasjnd",
  });
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function useAuth() {
    useEffect(() => {
     if(getCookie("token"))setIsAuthenticated(true)
     else setIsAuthenticated(false)
    }, [getCookie("token")])
    

    return { isAuthenticated };
  }
  useAuth()
  const value = {
    user,
    setUser,
    // useAuth,
    isAuthenticated,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserContextProvider");
  }
  return context;
};
export { useUserContext };

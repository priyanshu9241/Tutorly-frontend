import { createContext, useState, useContext } from "react";
export const UserContext = createContext(null);
export default function userContext({ children }) {
const [user, setUser] = useState({
  name:"snjadasjnd"
});
const value = {
  user,
  setUser,
};
return <UserContext.Provider value={value}>{children}</UserContext.Provider>;}

const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserContextProvider");
  }
  return context;
};
export { useUserContext };
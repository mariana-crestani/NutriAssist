import { createContext } from "react";

import useLocalStorage from "../hooks/useLocalStorage";
import api from "../services/api";

const UserContext = createContext();
export default UserContext;

export function UserProvider({ children }) {
  const [userData, setUserData] = useLocalStorage("userData", {});
  api.defaults.headers.common["Authorization"] = `Bearer ${userData.token}`;

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
}

import { createContext, useState } from "react";
import Dashboard from "./Dashboard";
import Login from "./Login";

export const UserContext = createContext();

function UserProvider() {
  const [user, setUser] = useState(null);

  const login = (username, password) => {
    if (username === "Admin" && password === "1234") {
      setUser(username);
      return true;
    } else if (username === "Ruchi" && password === "5678") {
      setUser(username);
      return true;
    }

    return false;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {user ? <Dashboard /> : <Login />}
    </UserContext.Provider>
  );
}

export default UserProvider;

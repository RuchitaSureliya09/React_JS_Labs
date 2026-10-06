import { useContext } from "react";
import { UserContext } from "./UserContext";
import Login from "./Login";

function Dashboard() {
  const { user, logout } = useContext(UserContext);

  return (
    <div className="container mt-5">
      {user ? (
        <div className="text-center">
          <h1>Welcome, {user}!</h1>

          <p>You are successfully logged in.</p>

          <button className="btn btn-danger" onClick={logout}>
            Logout
          </button>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default Dashboard;

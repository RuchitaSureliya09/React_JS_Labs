import React, { useState } from "react";
import Dashboard from "./Dashboard";
import Login from "./Login";

// Create an app using ReactJS with login functionality and use the current user state throughout the
// application using property drilling.

export default function AppComponent() {
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogout = () => {
    setCurrentUser(null);
  };

  return (
    <>
      {currentUser ? (
        <Dashboard currentUser={currentUser} handleLogout={handleLogout} />
      ) : (
        <Login setCurrentUser={setCurrentUser} />
      )}
    </>
  );
}

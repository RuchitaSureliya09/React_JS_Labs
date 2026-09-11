import React from "react";
import Profile from "./Profile";

export default function Dashboard({ currentUser, handleLogout }) {
  return (
    <>
      <h1>Dashboard</h1>
      <br />
      <br />
      <Profile currentUser={currentUser} handleLogout={handleLogout} />
    </>
  );
}

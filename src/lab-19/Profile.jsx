import React from "react";

export default function Profile({ currentUser, handleLogout }) {
  return (
    <>
      <h1>Profile</h1>

      <h3>UserName : {currentUser}</h3>
      <br />
      <button className="btn btn-warning" onClick={handleLogout}>
        LogOut
      </button>
    </>
  );
}

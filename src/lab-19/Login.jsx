import React, { useState } from "react";

export default function Login({ setCurrentUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username == "Admin" && password == "123") {
      setCurrentUser(username);
      alert("Login successfuly.");
    } else {
      alert("Invalid username or password !");
    }
  };

  return (
    <>
      <div className="container">
        <form action="" onSubmit={handleSubmit}>
          <div className="row m-5">
            <h1 className="mb-5">Login</h1>
            <div className="col-6">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="col">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-info ">
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

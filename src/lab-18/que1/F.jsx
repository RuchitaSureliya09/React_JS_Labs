import React from "react";

export default function F(props) {
  return (
    <>
      <h1>Component F</h1>
      
      <label htmlFor="name" className="h2 my-3">
        Name : {props.name}
      </label>
    </>
  );
}

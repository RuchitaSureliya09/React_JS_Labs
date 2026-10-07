import React from "react";
import C from "../que2/C";

export default function B(props) {
  return (
    <>
      <h1>Component B</h1>

      <button
        className="btn btn-primary my-3 mx-4"
        onClick={() => {
          props.setName(props.txt);
        }}
      >
        Click
      </button>

      <C name={props.name} />
    </>
  );
}

import React from "react";
import D from "../que2/D";

function C(props) {
  return (
    <>
      <h1>Component C</h1>

      <D name={props.name} />
    </>
  );
}

export default C;

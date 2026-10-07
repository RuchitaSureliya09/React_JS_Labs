import React, { useState } from "react";
import B from "../que2/B";

// 2. Create a react application with following components.
// - create a component named "F" which print one state value named "name" from "App"
// Component.
// - create component named "E" which contains "F" component.
// - create component named "D" which contains "E" component.
// - create component named "C" which contains "D" component.
// - create component named "B" which contains "C" component with button and when button is
// clicked set the state value named "name" from "App" component with the value of textbox from
// component "A".
// - create component named "A" which contains "B" component and a textbox.
// - "App" component should contains "A" component. (B)

export default function A(props) {
  const [txt, setTxt] = useState("");

  return (
    <>
      <h1>Component A</h1>

      <div className="row mt-4">
        <div className="col-3">
          <input
            type="text"
            className="ms-3 form-control"
            value={txt}
            onChange={(e) => {
              setTxt(e.target.value);
            }}
          />
        </div>
      </div>

      <br />

      <B name={props.name} setName={props.setName} txt={txt} />
    </>
  );
}

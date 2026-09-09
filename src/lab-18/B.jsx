import React, { useState } from 'react'
import C from './C';

export default function B(props) {
    const [txt, setTxt] = useState("");
  return (
    <>
        <h1>Component B</h1>

        <div className="row mt-5">
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
      <button
        className="btn btn-primary ms-3 me-3 mb-5"
        onClick={() => {
          props.setName(txt);
        }}
      >
        Click
      </button>
      
      <C name={props.name}/>
    </>
  )
}

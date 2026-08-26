import React, { useState } from "react";

// 1. Demonstrate useState hook in ReactJS. (A)

export default function A1() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [txt, setTxt] = useState("");

  return (
    <>
      <h1 className="mt-5 ms-5">Count = {count}</h1>
      <br />
      <button
        className="btn btn-info ms-3 me-3"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
      <button
        className="btn btn-secondary me-3"
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease
      </button>
      <button
        className="btn btn-warning me-3"
        onClick={() => {
          setCount(0);
        }}
      >
        Reset
      </button>
      <br />
      <br />

      <div className="row mt-5">
        <div className="col-3">
          <label htmlFor="name" className="ms-5 h2">
            Name : {name}
          </label>
          <br />
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
        className="btn btn-primary ms-3 me-3"
        onClick={() => {
          setName(txt);
        }}
      >
        Update
      </button>
    </>
  );
}

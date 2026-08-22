import React from "react";

// 1. Demonstrate the use of map method in ReactJS to display array. (A)

function A1() {
  const arr = ["R", "U", "C", "H", "I", "T", "A"];

  return (
    <>
      <ul>
        {arr.map((ch, index) => (
          <li key={index}>{ch}</li>
        ))}
      </ul>
    </>
  );
}

export default A1;

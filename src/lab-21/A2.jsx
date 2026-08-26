import React, { useEffect, useState } from "react";

// 2. Demonstrate useEffect hook in ReactJS (A)

export default function A2() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
    }, 1000);
  }, [count]);
  
  return (
    <>
      <h1 className="m-5">Count = {count}</h1>
    </>
  );
}

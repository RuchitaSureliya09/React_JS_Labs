import React from 'react'

// 3. WAP in ReactJS to display the element if it has attribute called isDisplay to be true (using conditional rendering) (A)

function A3() {
    const islogin = true;
  return (
    <>
      {islogin && <h1>Login Successful.</h1>}
      {!islogin && <h1>Login Not Successful.</h1>}
    </>
  )
}

export default A3;

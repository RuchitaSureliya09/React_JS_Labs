import React from 'react'

// 2. Demonstrate the Event Handling in ReactJS. (A)

function A2() {
  return (
    <>
      <button onClick={()=>{
        console.log("Shut Up !")
        console.log("Button Clicked")
      }}>Click Here</button>
    </>
  )
}


export default A2

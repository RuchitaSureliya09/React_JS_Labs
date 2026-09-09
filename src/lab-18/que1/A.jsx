import React from 'react'
import B from './B'

// 1. Create a react application with following components.
// - create a component named "F" which print one state value named "name" from "App" Component.
// - create component named "E" which contains "F" component.
// - create component named "D" which contains "E" component.
// - create component named "C" which contains "D" component.
// - create component named "B" which contains "C" component with textbox and a button and when
//   button is clicked set the state value named "name" from "App" component.
// - create component named "A" which contains "B" component.
// - "App" component should contains "A" component. (A)

export default function A(props) {
  return (
    <>
        <h1>Component A</h1>

        <B name={props.name} setName={props.setName}/>
    </>
  )
}

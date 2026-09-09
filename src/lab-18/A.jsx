import React from 'react'
import B from './B'

export default function A(props) {
  return (
    <>
        <h1>Component A</h1>

        <B name={props.name} setName={props.setName}/>
    </>
  )
}

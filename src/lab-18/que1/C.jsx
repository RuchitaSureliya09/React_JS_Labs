import React from 'react'
import D from '../que1/D'

export default function C(props) {
  return (
    <>
      <h1>Component C</h1>
      
      <D name={props.name}/>
    </>
  )
}

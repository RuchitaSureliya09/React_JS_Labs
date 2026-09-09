import React from 'react'
import E from './E'

export default function D(props) {
  return (
    <>
      <h1>Component D</h1>
      
      <E name={props.name}/>
    </>
  )
}

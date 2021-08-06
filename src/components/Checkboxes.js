import React, {useState, useEffect } from 'react'

export default function Checkboxes() {
  const [boxState, setBoxState] = useState()

  const Checkboxes = () => {
    const elements = boxes.map( boxData => {
      <div>
        <label
          htmlFor={boxData.id}
          key={boxData.label}
          >{boxData.label}
        </label>
        <input
          id={}
          type="checkbox" 
        />
      </div>
    })
  }
  const boxes = [
    { label: "code", id: "code"},
    { label: "ui", id: "ui"},
    { label: "art", id: "art"}
  ]

  return (
    <Checkboxes>
      
    </div>
  )
}




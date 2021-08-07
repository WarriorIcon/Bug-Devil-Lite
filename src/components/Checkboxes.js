import React, {useState, useEffect } from 'react'

export default function Checkboxes() {
  const [boxState, setBoxState] = useState({ code: true })

  useEffect( () => console.log(boxState), [boxState])

  function handleCheckboxes(boxId) {
    setBoxState((prevState) => ({
      ...prevState,
      [boxId]: !prevState[boxId]
    }))
  }

  return ( 
    <div>
      {boxes.map((boxData) => {
        <div>
          <label
            htmlFor={boxData.id}
            key={boxData.label}
            >{boxData.label}
          </label>
          <input
            id={boxData.id}
            type="checkbox"
            checked={boxState.boxId}
            onChange={() => handleCheckboxes(boxData.id)}  
          />
        </div> }
      )}
    </div>
  )
}
  const boxes = [
    { label: "code", id: "code"},
    { label: "ui", id: "ui"},
    { label: "art", id: "art"}
  ]










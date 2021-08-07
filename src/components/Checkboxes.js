import React, {useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';

export default function Checkboxes({ boxes }) {
  const [boxState, setBoxState] = useState({  })

  useEffect( () => console.log(boxState), [boxState])

  function handleCheckboxes(boxId) {
    setBoxState((prevState) => ({
      ...prevState,
      [boxId]: !prevState[boxId]
    }))
  }

  return ( 
    <div className="bug-edit__tags-list">
        {boxes.map((boxData) => {
        return (
            <label
              htmlFor={boxData.id}    
              >{boxData.label}
                <input
                id={boxData.id}
                key={boxData.key}
                type="checkbox"
                className="bug-edit__checkbox"
                value={boxData.label}
                checked={boxState[boxData.isChecked]}
                onChange={() => handleCheckboxes(boxData.id)}  
              />
            </label>
          )
        }
      )}
  </div>
  )
}











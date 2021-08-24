import React, {useState, useEffect, useContext } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { BugContext } from './App'

export default function Checkboxes({ boxes, selectedBug }) {
  const [boxState, setBoxState] = useState({ selectedBug })

  const { handleBugEdit, handleBugSelect} = useContext(BugContext)

  useEffect( () => console.log(boxState), [boxState])
  useEffect( () => console.log(selectedBug), [boxState])

  function handleCheckboxes(boxId) {
    setBoxState((prevState) => ({
      ...prevState,
      [boxId]: !prevState[boxId]
    })) 
    // handleEdit({selectedBug.tags[boxId]: boxState[boxId]})   
  }
  
  function handleEdit(changes) {
    /*Grab the selected bug id and the add the changes to it using spread*/
    handleBugEdit(selectedBug.id, { ...selectedBug, ...changes } )
  }

function handleTags() {
  console.log(boxState)
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
                value={boxData.label} // checked needs to check the state to know true or false
                checked={selectedBug.tags[boxData.id]}
                onChange={() => handleCheckboxes(boxData.id)}  
              />
            </label>
          )
        }
      )}
  </div>
  )
}











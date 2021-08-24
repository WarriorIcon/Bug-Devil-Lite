import React, { useContext } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { BugContext } from './App'
import Checkboxes from './Checkboxes'


export default function BugEdit( { selectedBug }) { // I tried setting test to selectedBug.tags 
  const { handleBugEdit, handleBugSelect, handleChange} = useContext(BugContext)

  function handleEdit(changes) {
    /*Grab the selected bug id and the add the changes to it using spread*/
    handleBugEdit(selectedBug.id, { ...selectedBug, ...changes } )
  }

  function handleTagsChange(id, tag) {
    //duplicate the old tags object so we can mutate it and then setState to it
    const newTags = [...selectedBug.tags]
    // const index = newTags.findIndex(t => t.id === id)
    // newTags[index] = tag;
    console.log(newTags)
    // handleEdit({ tags: newTags })
  }

  const boxes = [
    { label: "Code", id: "code", key: uuidv4(), isChecked: false},
    { label: "UI", id: "ui", key: uuidv4(), isChecked: false} ,
    { label: "Art", id: "art", key: uuidv4(), isChecked: false}
  ]

  return (
    <div className="bug-edit">
      <div className="bug-edit__details-grid">
        <label 
          htmlFor="title"
          className="bug-edit__label">
          Title
        </label>
        <input 
          type="text" 
          name="title" 
          id="title"
          onChange={ e => handleEdit({title: e.target.value})}
          value={selectedBug.title}
          placeholder="Enter issue title"
          className="bug-edit__input"/>
        <label
          htmlFor="priority"
          className="bug-edit__label"
          >Priority
        </label>
        <select
          name="priority"
          className="bug-edit__select"
          id="priority"
          onChange={ e => handleEdit({priority: e.target.value})}
          type="select"
          value={selectedBug.priority}
          > 
          <option value="Urgent">Urgent</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <label
          className="bug-edit__label"
          htmlFor="description"
          >Description
        </label>
        <textarea
          name="description"
          id="description"
          placeholder="Text area where you can write about the bug"
          value={selectedBug.description}
          onChange={ e => handleEdit({description: e.target.value})}
        />
        <label
          className="bug-edit__label"
          htmlFor="media"
          >Media:
        </label>
        <input
          id="media"
          type="file"
        />
        <label
          className="bug-edit__label"
          htmlFor="type"
          >Issue Type:
        </label>
        <select
          name="type"
          className="bug-edit__select"
          id="type"
          type="select"
          value={selectedBug.type}
          onChange={ e => handleEdit({type: e.target.value})}
          > 
            <option value="Bug">Bug</option>
            <option value="Request">Request</option>
        </select>
        <label
          className="bug-edit__label"
          htmlFor="tags"
          >Tags:
        </label>
      <Checkboxes 
        boxes={boxes}
        selectedBug={selectedBug}
        
      />
    </div>
      
        
  </div>
  
  )
}

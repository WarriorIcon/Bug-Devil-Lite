import React, { useContext } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { BugContext } from './App'


export default function BugEdit( { selectedBug }) {
  const { handleBugEdit, handleBugSelect} = useContext(BugContext)

  function handleEdit(changes) {
    /*Grab the selected bug id and the add the changes to it using spread*/
    handleBugEdit(selectedBug.id, { ...selectedBug, ...changes } )
  }

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

      <div className="bug-edit__tags-list">
        <label htmlFor="code" >
          <input type="checkbox" name="code" id="code" value="code" className="bug-edit__checkbox"/>
          Code
        </label>
        <label htmlFor="ui" >
          <input type="checkbox" name="ui" id="ui" value="ui" className="bug-edit__checkbox"/>
          UI
        </label>
        <label htmlFor="art">
          <input type="checkbox" name="art" id="art" value="art" className="bug-edit__checkbox"/>
          Art
        </label>
      </div> 
    </div>
      
        
  </div>
  
  )
}

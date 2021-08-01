import React from 'react'

export default function BugEdit() {
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
          value=''
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
          type="select"
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
          value="Text area where you can write about the bug"
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

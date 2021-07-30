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
        <select
          name="tags"
          className="bug-edit__select"
          id="tags"
          type="select"
          > 
            <option value="Code">Code</option>
            <option value="UI">UI</option>
            <option value="Art">Art</option>
        </select>
      <div className="bug-edit__tags">
        <label htmlFor="tags" className="bug-edit__checkbox"> Tags:
          <span>Code</span>
          <input type="checkbox" id="Code" name="Code"value="Code"/>
          <span>UI</span>
          <input type="checkbox" id="UI" name="UI"value="UI"/>
          <span>Art</span>
          <input type="checkbox" id="Art" name="Art"value="Art"/>
        </label>  
      </div>
        {/* //compare */}
        <label htmlfor="cars">Choose a car:</label>
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
        <label htmlFor="vehicle1"> I have a bike</label>
        <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
        <label htmlFor="vehicle2"> I have a car</label>
        <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
        <label htmlFor="vehicle3"> I have a boat</label>   
    </div>

      
        
    </div>
  
  )
}

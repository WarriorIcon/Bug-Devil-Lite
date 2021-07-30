import React from 'react'
import Bug from './Bug'

export default function BugList({ bugs }) {
  return (
  <div className="bug-list">
      <div >
        {bugs.map(bug => (
        <Bug key={bug.id} {...bug}/>
        ))}
      </div>
      <div className="bug-list__add-bug-btn-container">
        <button
          className="btn"
          
          >Add New Bug</button>
      </div>    
  </div>
  )
}
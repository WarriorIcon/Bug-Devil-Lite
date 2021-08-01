import React, { useContext } from 'react'
import Bug from './Bug'
import { BugContext } from './App'

export default function BugList({ bugs }) {
  const { handleBugAdd } = useContext(BugContext)
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
          onClick={handleBugAdd}
          >Add New Bug</button>
      </div>    
  </div>
  )
}
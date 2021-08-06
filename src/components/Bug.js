import React, { useContext } from 'react'
import { BugContext } from './App'

export default function Bug(props) {
  const {handleBugDelete, handleBugSelect} = useContext(BugContext)
  const {
    id,
    priority,
    title,
    description,
    media,
    type,
    tags,
    author
  } = props;

  return (
    <div className="bug">
      <div className="bug__header">
        <p className="bug__type">Issue Type: {type}</p>
        <h3 className="bug__title">{title}</h3>
        <p>Priority Level:<span className="bug__priority">{priority}</span></p>
        <div>
          <button 
            className="btn"
            onClick={() => handleBugSelect(id)}
            >Edit
          </button>

          <button 
            className="btn"
            onClick={() => handleBugDelete(id)}
            >Resolve</button>
        </div>
      </div>
      <h4>Instructions:</h4>      
      <p className="bug__description">{description}</p>
      <div className="bug__media">{media}</div>
      <div className="bug__tags">Tags: {`${tags}`}</div>
      <div className="bug__author">Author: {author}</div>
 
    </div>
  )
}

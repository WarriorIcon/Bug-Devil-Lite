import React, { useContext } from 'react'

export default function Bug(props) {
  const {
    priority,
    title,
    description,
    media,
    type,
    tags
  } = props;
  return (
    <div className="bug">
      <div className="bug__header">
        <p className="bug__type">Issue Type: {type}</p>
        <h3 className="bug__title">{title}</h3>
        <p>Priority Level:<span className="bug__priority">{priority}</span></p>
        <div>
          <button className="btn">Edit</button>
          <button className="btn">Resolve</button>
        </div>
      </div>
      <h4>Instructions:</h4>      
      <p className="bug__description">{description}</p>
      <div className="bug__media">{media}</div>
      <div className="bug__tags">Tags: {`${tags}`}</div>
 
    </div>
  )
}

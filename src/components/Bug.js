import React from 'react'

export default function Bug(props) {
  const {
    id,
    priority,
    title,
    description,
    media,
    tags
  } = props;
  return (
    <div className="bug">
      <div className="bug__header">
        <h3 className="bug__title">{title}</h3>
        <p>{priority}</p>
      </div>      
      <p className="bug__description">{description}</p>
      <div className="bug__media">{media}</div>
 
    </div>
  )
}

import React from 'react'
import Bug from './Bug'

export default function BugList({bugs}) {
  return (
    <div class="bug-list">
      {bugs.map(bug => (
      <Bug key={bug.id} {...bug}/>
      ))}
  </div>
  )
}
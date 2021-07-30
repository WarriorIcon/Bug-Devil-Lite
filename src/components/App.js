import React from 'react'
import BugList from './BugList'


function App() {
  return (
    <>
      <BugList bugs={sampleBugs}/>
    </>
  )
}

const sampleBugs = [
  {
    id: 1,
    priority: 'High',
    title: 'Game breaking resolution error',
    description: 'When you go to the main menu, the resolution is messed up. Steps to reproduce: 1. Enter the Wisp Farm. \n2. Press the back button. \n3. Observe that the game resolution has changed dramatically.',
    media: 'url',
    tags: [
      'UI', 'Graphics', 'Main Menu'
    ]
  },

  {
    id: 2,
    priority: 'Medium',
    title: 'Unexpected extra speed boost from shield power up',
    description: 'Sometimes when picking up the shield power-up you will gain a burst of speed. This is unintended effect. Steps to reproduce: 1. Obtain the shield power up in runner mode. \n2. Observe whether or not you gained an unexpected burst of speed.',
    media: 'url',
    tags: [
      'Code', 'Runner Mode'
    ]
  }
]

export default App;

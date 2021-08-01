import React, { useState } from 'react'
import BugList from './BugList'
import BugEdit from './BugEdit'
import { v4 as uuidv4 } from 'uuid';

export const BugContext = React.createContext()


function App() {
  const [bugs, setBugs] = useState(sampleBugs)

  const bugContextValue = {
    handleBugAdd,
  }

  function handleBugAdd() {
    const newBug = {
      id: uuidv4(),
      priority: 'High',
      title: 'New',
      description: 'It Works',
      media: '',
      type: '',
      author: '',
      tags: []
    }
    setBugs([...bugs, newBug])
  }
  return (
    <BugContext.Provider value={bugContextValue}>
      <BugList bugs={sampleBugs}/>
      <BugEdit />
    </BugContext.Provider>
  )
}

const sampleBugs = [
  {
    id: uuidv4(),
    priority: 'High',
    title: 'Game breaking resolution error',
    description: 'When you go to the main menu, the resolution is messed up. Steps to reproduce:\n 1. Enter the Wisp Farm. \n2. Press the back button. \n3. Observe that the game resolution has changed dramatically.',
    media: 'url',
    type: "Bug",
    author: 'Scott',
    tags: [
      'UI', 'Graphics', 'Main Menu'
    ]
  },

  {
    id: uuidv4(),
    priority: 'Medium',
    title: 'Unexpected extra speed boost from shield power up',
    description: 'Sometimes when picking up the shield power-up you will gain a burst of speed. This is unintended effect. Steps to reproduce: \n1. Obtain the shield power up in runner mode. \n2. Observe whether or not you gained an unexpected burst of speed.',
    media: 'url',
    type: 'Bug',
    author: 'Scott',
    tags: [
      'Code', 'Runner Mode'
    ]
  },

  {
    id: uuidv4(),
    priority: 'Low',
    title: 'Just testing out a really long title for a really long bug which honestly should not be this long, like yikes this is a run on sentence, like whoa, why is this title so very long, holy cow.',
    description: 'Read the title, whoa.',
    media: 'url',
    type: 'Request',
    author: 'Scott',
    tags: [
      'QA Tester', 'Hire New Ones'
    ]
  }
]

export default App;

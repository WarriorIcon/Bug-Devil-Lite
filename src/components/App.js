import React, { useState, useEffect } from 'react'
import BugList from './BugList'
import BugEdit from './BugEdit'
import { v4 as uuidv4 } from 'uuid';

export const BugContext = React.createContext()
const LOCAL_STORAGE_KEY = 'bugDevilLite.bugs'

function App() {
  const [bugs, setBugs] = useState(sampleBugs)
  const [selectedBugId, setSelectedBugId] = useState()
  const selectedBug = bugs.find(bug => bug.id === selectedBugId )

  const bugContextValue = {
    handleBugAdd,
    handleBugDelete,
    handleBugSelect,
    handleBugEdit
  }

  useEffect(() => {
    const bugsJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (bugsJSON !== null) setBugs(JSON.parse(bugsJSON))
  },[])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(bugs))
  },[bugs])

  
  function handleBugSelect(id) {
    setSelectedBugId(id)
  }
  
  function handleBugDelete(id) {
    setBugs(bugs.filter(bug => bug.id !== id))
  }

  function handleBugAdd() {
    const newBug = {
      id: uuidv4(),
      priority: 'High',
      title: 'New',
      description: 'It Works',
      media: '',
      type: 'Something',
      author: '',
      tags: {        
        code: true,
        ui: false,
        art: false
      }
    
  }
    setBugs([...bugs, newBug])
  }

  function handleBugEdit(id, bug) {
    /* take the id of the bug we want to change and the new bug we want to replace the old one with
     essentially, just mutate our array to the new inputs*/
     const newBugs = [...bugs]
     const index = bugs.findIndex( b => b.id === id)
     newBugs[index] = bug
     setBugs(newBugs)
  }

  return (
    <BugContext.Provider value={bugContextValue}>
      <BugList bugs={bugs}/>
      {selectedBug && <BugEdit selectedBug={selectedBug}/> }
    </BugContext.Provider>
  )
}

const sampleBugs = [
  {
    id: uuidv4(),
    priority: 'High',
    title: 'Game breaking resolution error',
    description: 'When you go to the main menu, the resolution is messed up. Steps to reproduce:\n1. Enter the Wisp Farm. \n2. Press the back button. \n3. Observe that the game resolution has changed dramatically.',
    media: 'url',
    type: "Bug",
    author: 'Scott',
    tags: {        
      code: true,
      ui: false,
      art: false
    }
  },

  {
    id: uuidv4(),
    priority: 'Medium',
    title: 'Unexpected extra speed boost from shield power up',
    description: 'Sometimes when picking up the shield power-up you will gain a burst of speed. This is unintended effect. Steps to reproduce: \n1. Obtain the shield power up in runner mode. \n2. Observe whether or not you gained an unexpected burst of speed.',
    media: 'url',
    type: 'Bug',
    author: 'Scott',
    tags: {        
      code: true,
      ui: true,
      art: false
    }
  },

  {
    id: uuidv4(),
    priority: 'Low',
    title: 'Just testing out a really long title for a really long bug which honestly should not be this long, like yikes this is a run on sentence, like whoa, why is this title so very long, holy cow.',
    description: 'Read the title, whoa.',
    media: 'url',
    type: 'Request',
    author: 'Scott',
    tags: {        
      code: false,
      ui: false,
      art: false
    }
  }
]

export default App;

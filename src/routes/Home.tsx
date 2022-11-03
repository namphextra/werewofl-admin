import React, { ReactElement } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@blueprintjs/core'

function App(): ReactElement {
  const navigate = useNavigate()
  return (
    <div className="App">
      <Button onClick={() => navigate('/setup')}>Start a new game</Button>
    </div>
  )
}

export default App

import React, { ReactElement } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'carbon-components-react'

function App (): ReactElement {
  const navigate = useNavigate()
  return (
    <div className="App">
      <Button onClick={() => navigate('/setup')}>Start a new game</Button>
    </div>
  )
}

export default App

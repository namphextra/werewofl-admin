import React, { ReactElement } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'carbon-components-react'

function OnGame(): ReactElement {
  const navigate = useNavigate()
  return (
    <div className="App">
      <Button onClick={() => navigate('/setup')}>Play the game</Button>
    </div>
  )
}

export default OnGame

import React, { ReactElement } from 'react'
import { Button } from 'carbon-components-react'

function App (): ReactElement {
  return (
    <div className="App">
      Testing
      <Button>Start a new game</Button>
      <div>Nested</div>
    </div>
  )
}

export default App

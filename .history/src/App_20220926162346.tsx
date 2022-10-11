import React, { ReactElement } from 'react'
import { Button } from '@carbon/react'

function App (): ReactElement {
  return (
    <div className="App">
      Testing
      <Button>Start</Button>
      <div>Nested</div>
    </div>
  )
}

export default App

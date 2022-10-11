import React, { ReactElement } from 'react'
import { Button } from '@types/carbon-components-react'

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

import React, { ReactElement } from 'react'
import { Button, TextInput } from 'carbon-components-react'

function App (): ReactElement {
  return (
    <div className="App">
      <TextInput id='addPlayer' labelText=''/>
      <Button>Add player</Button>
    </div>
  )
}

export default App

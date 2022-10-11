import React, { ReactElement } from 'react'
import { Button, Grid, Column } from 'carbon-components-react'

function App (): ReactElement {
  return (
    <div className="App">
      <Grid>
        <Column sm={{ span: 4, offset: 8 }}>
          <Button>Start a new game</Button>
        </Column>
      </Grid>
    </div>
  )
}

export default App

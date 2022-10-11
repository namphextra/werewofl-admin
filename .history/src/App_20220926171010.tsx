import React, { ReactElement } from 'react'
import { Button, Grid, Column } from 'carbon-components-react'

function App (): ReactElement {
  return (
    <div className="App">
          <Grid>
      <Column lg={4}>
        <Button>Start a new game</Button>
</Column>
    </Grid>
    </div>
  )
}

export default App

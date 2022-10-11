import React, { ReactElement } from 'react'
import { Button, TextInput } from 'carbon-components-react'
import { useAppSelector, useAppDispatch } from 'store/hooks'

function App (): ReactElement {
  const dispatch = useAppDispatch()
  const players = useAppSelector(state => state.players)
  return (
    <>
      <div className="p4">
        <TextInput id='addPlayer' labelText=''/>
        <Button className='mt4'>Add player</Button>
      </div>
    </>
  )
}

export default App

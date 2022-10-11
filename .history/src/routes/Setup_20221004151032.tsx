import React, { ReactElement } from 'react'
import { Button, TextInput } from 'carbon-components-react'
import { useAppSelector, useAppDispatch } from '@store/hooks'
import { addPlayer } from '@store/slices/players'

function App (): ReactElement {
  const dispatch = useAppDispatch()
  const players = useAppSelector(state => state.players)
  return (
    <>
      <div className="p4">
        <TextInput id='addPlayer' labelText=''/>
        <Button className='mt4' onClick={() => dispatch(addPlayer())}>Add player</Button>
      </div>
      {players}
    </>
  )
}

export default App

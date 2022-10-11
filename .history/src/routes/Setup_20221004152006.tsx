import React, { ReactElement, useState } from 'react'
import { Button, TextInput } from 'carbon-components-react'
import { useAppSelector, useAppDispatch } from '@store/hooks'
import { addPlayer } from '@store/slices/players'

function App (): ReactElement {
  const dispatch = useAppDispatch()
  const players = useAppSelector(state => state.players)
  const [player, setPlayer] = useState('')
  return (
    <>
      <div className="p4">
        <TextInput id='addPlayer' labelText='' value={player} onChange={(e) => {
          console.log(1111, e)
          setPlayer(e)
        }}/>
        <Button className='mt4' onClick={() => dispatch(addPlayer())}>Add player</Button>
      </div>
      {players}
    </>
  )
}

export default App

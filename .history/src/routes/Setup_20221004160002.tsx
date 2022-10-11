import React, { ReactElement, useState } from 'react'
import { Button, TextInput } from 'carbon-components-react'
import { useAppSelector, useAppDispatch } from '@store/hooks'
import { addPlayer } from '@store/slices/players'

function App (): ReactElement {
  const dispatch = useAppDispatch()
  const players = useAppSelector(state => state.player.players)
  const [player, setPlayer] = useState('')

  const onAddPlayer = () => {
    dispatch(addPlayer(player))
    setPlayer('')
  }
  return (
    <>
      <div className="p4">
        <TextInput id='addPlayer' labelText='' value={player} onChange={(e) => setPlayer(e.target.value)}/>
        <Button className='mt4' onClick={() => onAddPlayer()}>Add player</Button>
      </div>
      {players.map((p, i) => (
        <div key={i}>{p}</div>
      ))}
    </>
  )
}

export default App

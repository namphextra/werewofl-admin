import React, { KeyboardEvent, KeyboardEventHandler, ReactElement, useState } from 'react'
import { Button, TextInput, OrderedList, ListItem } from 'carbon-components-react'
import { TrashCan } from '@carbon/icons-react'
import { useAppSelector, useAppDispatch } from '@store/hooks'
import { addPlayer } from '@store/slices/players'

function App (): ReactElement {
  const dispatch = useAppDispatch()
  const players = useAppSelector(state => state.player.players)
  const [player, setPlayer] = useState('')

  const onAddPlayer = (): void => {
    dispatch(addPlayer(player))
    setPlayer('')
  }

  const handleKeyDown = (e: KeyboardEvent): void => {
    if (e.key === 'Enter') {
      onAddPlayer()
    }
  }

  return (
    <>
      <div className="p4">
        <TextInput id='addPlayer' labelText='' value={player} onChange={(e) => setPlayer(e.target.value)} onKeyDown={handleKeyDown}/>
        <Button className='mt4' onClick={() => onAddPlayer()}>Add player</Button>
        <OrderedList className='mt5 pl5' native={true}>
          {players.map((p, i) => (
            <ListItem key={i}>{p.name} <TrashCan/></ListItem>
          ))}
        </OrderedList>
      </div>
    </>
  )
}

export default App

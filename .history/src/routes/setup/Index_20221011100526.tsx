import React, { KeyboardEvent, ReactElement, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Button,
  TextInput,
  OrderedList,
  ListItem,
  InlineNotification,
} from 'carbon-components-react'

import { TrashCan } from '@carbon/icons-react'
import { useAppSelector, useAppDispatch } from '@store/hooks'

import { addPlayer, removePlayer } from '@store/slices/players'

function Setup(): ReactElement {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const players = useAppSelector((state) => state.player.players)
  const [player, setPlayer] = useState('')
  const [showNoti, setshowNoti] = useState(false)

  const onAddPlayer = (): void => {
    if (player === '') {
      setshowNoti(true)
      return
    }
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
      {showNoti && (
        <InlineNotification title="Empty player name" kind="error" />
      )}
      <div className="p4">
        <TextInput
          id="addPlayer"
          labelText=""
          value={player}
          onChange={(e) => setPlayer(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <div className="actions__container">
          <Button
            className="mt4 mr4"
            onClick={() => onAddPlayer()}
            kind="tertiary"
          >
            Add player
          </Button>
          <Button className="mt4" onClick={() => navigate('/assignPlayer')}>
            Assign charactor to player
          </Button>
        </div>
        <OrderedList className="mt5 pl6">
          {players.map((p, i) => (
            <ListItem key={i} className="d-flex mb3 align-items-center">
              {p.name}{' '}
              <TrashCan
                className="ml3"
                size={16}
                onClick={() => dispatch(removePlayer(i))}
              />
            </ListItem>
          ))}
        </OrderedList>
      </div>
    </>
  )
}

export default Setup

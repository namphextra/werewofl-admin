import React, { KeyboardEvent, ReactElement, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, InputGroup, Icon } from '@blueprintjs/core'
import { TrashCan } from '@carbon/icons-react'
import { useAppSelector, useAppDispatch } from '@store/hooks'
import { addPlayer, removePlayer, fetchPlayers } from '@store/slices/players'
import { db } from '../../indexedServer/index'

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
    db.addPlayer(player)
    dispatch(addPlayer(player))
    dispatch(fetchPlayers())
    setPlayer('')
  }

  const onRemovePlayer = (id: number): void => {
    db.removePlayer(id)
    dispatch(removePlayer(id))
    dispatch(fetchPlayers())
  }

  const handleKeyDown = (e: KeyboardEvent): void => {
    if (e.key === 'Enter') {
      onAddPlayer()
    }
  }

  const init = async () => {
    dispatch(fetchPlayers())
  }

  useEffect(() => {
    init()
  }, [])

  return (
    <>
      <div className="p4">
        <InputGroup
          id="addPlayer"
          value={player}
          onChange={(e) => setPlayer(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        {showNoti && <div className="text-red-500">Empty player name</div>}
        <div className="actions__container mb-4">
          <Button
            className="mt-4 mr-4"
            onClick={() => onAddPlayer()}
            intent="primary"
          >
            Add player
          </Button>
          <Button className="mt-4" onClick={() => navigate('selectRoles')}>
            Go to Select roles
          </Button>
        </div>
        {players.map((p) => (
          <div key={p.id} className="d-flex mb-3 align-items-center">
            {p.name}{' '}
            <Icon
              icon="trash"
              className="ml3"
              onClick={() => onRemovePlayer(p.id || 0)}
            />
          </div>
        ))}
      </div>
    </>
  )
}

export default Setup

import React, { ReactElement, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Select2 } from '@blueprintjs/select'
import { Button } from '@blueprintjs/core'
import { fetchPlayers, assignCharactor } from '@store/slices/players'
import { useAppSelector, useAppDispatch } from '@store/hooks'
import { CharactorState } from '@store/slices/charactor'

function AssignPlayer(): ReactElement {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const selectedCharactors = useAppSelector(
    (state) => state.charactor.selectedCharactors,
  )
  const players = useAppSelector((state) => state.player.players)
  const onSelectCharactorForPlayer = (item: CharactorState, index: number) => {
    console.log(123123, item)

    dispatch(assignCharactor({ charactor: item.title, index }))
  }

  useEffect(() => {
    dispatch(fetchPlayers())
  }, [])

  return (
    <>
      Assign Players
      <div className="p4">
        {players.map((p, i) => (
          <div key={i}>
            {p.name}
            <Select2
              items={selectedCharactors}
              itemRenderer={(item) => (
                <li onClick={() => onSelectCharactorForPlayer(item, i)}>
                  {item.title}
                </li>
              )}
              onItemSelect={(item) => onSelectCharactorForPlayer(item, i)}
            >
              <Button>{p.charactor || 'Select charactor'}</Button>
            </Select2>
          </div>
        ))}
        <Button
          intent="primary"
          className="mt-6"
          onClick={() => navigate('/play')}
        >
          Play the game
        </Button>
      </div>
    </>
  )
}

export default AssignPlayer

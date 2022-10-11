import React, { ReactElement } from 'react'

import { OrderedList, ListItem } from 'carbon-components-react'

import { TrashCan } from '@carbon/icons-react'
import { useAppSelector, useAppDispatch } from '@store/hooks'

import { removePlayer } from '@store/slices/players'

function AssignPlayer(): ReactElement {
  const dispatch = useAppDispatch()
  const players = useAppSelector((state) => state.player.players)

  return (
    <>
      Assign Players
      <div className="p4">
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

export default AssignPlayer

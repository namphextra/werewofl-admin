import React, { ReactElement, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import cloneDeep from 'lodash/cloneDeep'
import { Tabs, Tab, Collapse, Icon, Button } from '@blueprintjs/core'
import { fetchPlayers } from '@store/slices/players'
import { addCharactor, removeCharactor } from '@store/slices/charactor'
import {
  list1,
  list2,
  list3,
  Charactor as CharactorDefault,
} from '@/constants/charactor'
import { useAppSelector, useAppDispatch } from '@store/hooks'

type ListRolesProps = {
  position: number
}

type Charactor = {
  id: string
  isExpanded: boolean
  content: string
  title: string
}

function ListRoles({ position }: ListRolesProps): ReactElement {
  const dispatch = useAppDispatch()
  const [charactors, setCharactors] = useState<Charactor[]>([])
  const selectedCharactors = useAppSelector(
    (state) => state.charactor.selectedCharactors,
  )

  useEffect(() => {
    let list: CharactorDefault[] = []
    if (position === 1) {
      list = list1
    }
    if (position === 2) {
      list = list2
    }
    if (position === 3) {
      list = list3
    }
    let cloneCharactors: Charactor[] = []
    list.forEach((v, i) => {
      cloneCharactors = [
        ...cloneCharactors,
        {
          id: v.title,
          isExpanded: false,
          content: v.detail,
          title: `${v.title} - ${v.vietnamesse} (${v.point})`,
        },
      ]
    })
    setCharactors(cloneCharactors)
  }, [])

  const onCollapseItem = (index: number) => {
    const cloneCharactors = cloneDeep(charactors)
    cloneCharactors[index].isExpanded = !cloneCharactors[index].isExpanded
    setCharactors(cloneCharactors)
  }

  const onAddCharactor = (title: string) => {
    dispatch(addCharactor({ title, quantity: 0 }))
  }

  const onRemoveCharactor = (title: string) => {
    dispatch(removeCharactor({ title, quantity: 0 }))
  }

  return (
    <>
      {charactors.map((c, i) => (
        <div className="charactor mb-4" key={i}>
          <div>
            <p onClick={() => onCollapseItem(i)}>
              <Icon icon={c.isExpanded ? 'caret-down' : 'caret-right'} />{' '}
              {c.title}
              <span className="text-emerald-500 ml-2">
                {selectedCharactors.find((cs) => cs.title === c.id)?.quantity}
              </span>
            </p>
            <Button
              onClick={() => onAddCharactor(c.id)}
              intent="primary"
              className="mx-3"
            >
              Add
            </Button>
            <Button onClick={() => onRemoveCharactor(c.id)} intent="warning">
              Remove
            </Button>
          </div>
          <Collapse
            keepChildrenMounted={true}
            isOpen={c.isExpanded}
            className="mt-3"
          >
            {c.content}
          </Collapse>
        </div>
      ))}
    </>
  )
}

function SelectRoles(): ReactElement {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const players = useAppSelector((state) => state.player.players)
  const selectedCharactors = useAppSelector(
    (state) => state.charactor.selectedCharactors,
  )
  const [tab, setTab] = useState('werewolf')
  const getTotalScore = (position: number) => {
    let list: CharactorDefault[] = []
    if (position === 1) {
      list = list1
    }
    if (position === 2) {
      list = list2
    }
    if (position === 3) {
      list = list3
    }
    let quantity = 0
    let totalPoint = 0
    selectedCharactors.forEach((val) => {
      const charactor = list.find((v) => v.title === val.title)
      if (charactor) {
        totalPoint += val.quantity * charactor.point
        quantity += val.quantity
      }
    })
    return `${quantity} / ${totalPoint}`
  }

  useEffect(() => {
    dispatch(fetchPlayers())
  }, [])

  return (
    <>
      <div className="p4">
        <h4>Select Roles</h4>
        <Button onClick={() => navigate('/setup')}>Go back</Button>
        <Button
          intent="primary"
          className="ml-4"
          onClick={() => navigate('/setup/assignPlayer')}
        >
          Go to assign role to players
        </Button>
        <p>Players: {players.length}</p>
        <Tabs selectedTabId={tab} onChange={(id) => setTab(String(id))}>
          <Tab
            id="werewolf"
            title={`Phe dân ${getTotalScore(1)}`}
            panel={<ListRoles position={1} />}
          />
          <Tab
            id="human"
            title={`Phe sói ${getTotalScore(2)}`}
            panel={<ListRoles position={2} />}
          />
          <Tab
            id="3d"
            title={`Phe 3d ${getTotalScore(3)}`}
            panel={<ListRoles position={3} />}
          />
        </Tabs>
      </div>
    </>
  )
}

export default SelectRoles

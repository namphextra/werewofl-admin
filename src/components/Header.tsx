import React, { ReactElement, useState, useRef, useEffect } from 'react'
import { Button, Dialog } from '@blueprintjs/core'
import { Select2 } from '@blueprintjs/select'
import { useAppSelector, useAppDispatch } from '@store/hooks'
import { CharactorState } from '@store/slices/charactor'
import { assignCharactor } from '@store/slices/players'

function Header(): ReactElement {
  const dispatch = useAppDispatch()
  const selectedCharactors = useAppSelector(
    (state) => state.charactor.selectedCharactors,
  )
  const players = useAppSelector((state) => state.player.players)
  const [open, setOpen] = useState(false)

  const onSelectCharactorForPlayer = (item: CharactorState, index: number) => {
    dispatch(assignCharactor({ charactor: item.title, index }))
  }
  const headerRef = useRef<HTMLDivElement>(null)
  const handleScroll = () => {
    if (window.pageYOffset >= 63) {
      headerRef.current?.classList.add('fixed')
    } else {
      headerRef.current?.classList.remove('fixed')
    }
  }

  useEffect(
    () => () => {
      window.removeEventListener('scroll', handleScroll)
    },
    [],
  )

  window.addEventListener('scroll', handleScroll)

  return (
    <div
      className="header p-4 shadow w-full bg-slate-50 transition"
      ref={headerRef}
    >
      <Button onClick={() => setOpen(true)}>Assign roles to players</Button>
      <Dialog isOpen={open} onClose={() => setOpen(false)}>
        {players.map((p, i) => (
          <>
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
          </>
        ))}
      </Dialog>
    </div>
  )
}

export default Header

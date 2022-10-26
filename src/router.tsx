import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from './routes/Home'
import Setup from './routes/setup/Index'
import AssignPlayers from './routes/setup/AssignPlayers'
import SelectRoles from './routes/setup/SelectRoles'
import Play from './routes/Play'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/setup',
    element: <Setup />,
  },
  {
    path: '/setup/assignPlayer',
    element: <AssignPlayers />,
  },
  {
    path: '/setup/selectRoles',
    element: <SelectRoles />,
  },
  {
    path: '/play',
    element: <Play />,
  },
])

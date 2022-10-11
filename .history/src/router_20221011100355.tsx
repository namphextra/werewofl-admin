import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from './routes/Home'
import Setup from './routes/setup/Index'
import AssignPlayers from './routes/setup/AssignPlayers'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/setup',
    element: <Setup />,
    children: [{ path: 'assignPlayer', element: <AssignPlayers /> }],
  },
])

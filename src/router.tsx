import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from './routes/Home'
import Setup from './routes/setup/Index'
import SelectRoles from './routes/setup/SelectRoles'
import OnGame from './routes/OnGame'

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
    path: '/setup/selectRoles',
    element: <SelectRoles />,
  },
  {
    path: '/onGame',
    element: <OnGame />,
  },
])

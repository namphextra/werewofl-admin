import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from './routes/Home'
import Setup from './routes/Setup'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/setup',
    element: <Setup />
  }
])

import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './Pages/Home'
import PublicLayout from './Layouts/PublicLayout'
import About from './Pages/About'
import Event from './Pages/Event'

export function App() {

const router = createBrowserRouter([
  {
    path: '/',
    Component: PublicLayout,
  children: [
    {
      index: true,
      Component: Home,
    },
    {
      path: '/about',
      Component: About,
    },
    {
      path: '/event',
      Component: Event,
    }
  ]
  }
])

return <RouterProvider router={router} />

}

export default App

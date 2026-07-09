import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './Pages/Home'
import PublicLayout from './Layouts/PublicLayout'
import About from './Pages/About'
import Event from './Pages/Event'
import Login from './Pages/Login'
import Register from './Pages/Register'

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
  },
  {
    path: '/login',
    Component: Login
  },

  {
    path: '/register',
    Component: Register
  }
])


return <RouterProvider router={router} />

}

export default App

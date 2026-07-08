import React from 'react'
import { Button } from '../ui/button'
import DashboardSideBar from './DashboardSideBar'

const PublicNavbar = () => {
  return (
    <>
    <header className="flex items-center justify-between bg-[#f8f9fa] px-6 py-4">
      <div className="flex  items-center">
        <img src="https://brossolutions.com.np/" alt="logo" className="h-10 w-auto" />
      </div>  
    <div className = "sm:flex hidden flex-1 items-center justify-center gap-4">
      <nav className="flex items-center justify-center gap-2">
        <Button variant="ghost">Home</Button>
        <Button variant="ghost">About</Button>
        <Button variant="ghost">Event</Button>
      </nav>
      <div className="flex  items-center justify-end gap-4">
        <Button variant="default">Login</Button>
        <Button variant="default">Register</Button>
      </div>
    
      </div>
      <DashboardSideBar/>
    </header>
    
    </>
  )
}

export default PublicNavbar

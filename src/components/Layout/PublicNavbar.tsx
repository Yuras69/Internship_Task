import React from 'react'
import { Button } from '../ui/button'
import DashboardSideBar from './DashboardSideBar'
import RegisterButton from '@/auth/RegisterButton'
import LoginButton from '@/auth/LoginButton'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const PublicNavbar = () => {
  return (
    <>
    <header className="flex items-center bg-[#f8f9fa] px-6 py-4">
      <div className="flex  items-center">
        <img src="logo.png" alt="logo" className="h-10 w-auto" />
      </div>  
    <div className = "sm:flex hidden flex-1 items-center justify-center gap-4">
       <nav className="flex items-center justify-center gap-2 hover-text-[#1b88a1]">
      <NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Product</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink>Link</NavigationMenuLink>
      </NavigationMenuContent>
      </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuTrigger>UseCase</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink>Link</NavigationMenuLink>
      </NavigationMenuContent>
      </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Intergration</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink>Link</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink>Link</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
        <Button variant="ghost">Pricing</Button>
      </nav>
      </div>
      <div className="hidden items-center gap-4 sm:flex">
        <LoginButton/>
        <RegisterButton/>
      </div>
      <DashboardSideBar/>
    </header>
    
    </>
  )
}

export default PublicNavbar

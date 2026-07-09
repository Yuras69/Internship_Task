import { buttonVariants } from '@/components/ui/button'
import React from 'react'
import { Link } from 'react-router-dom'

const LoginButton = () => {

  return (
        <div className="flex  items-center justify-around gap-4">
              <Link to="/login" className={buttonVariants({ variant: "ghost" })}>
                login
              </Link>    
            </div>
  )
}

export default LoginButton

import { buttonVariants } from '@/components/ui/button'
import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div>
      <div className="flex  items-center justify-end gap-4">
        <Link to="/register" className={buttonVariants({ variant: "default" })}>
          Register
        </Link>
      </div>
    </div>
  )
}

export default Register

import { Button } from '@/components/ui/button'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const LoginButton = () => {
const navigate = useNavigate()

  return (
        <div className="flex  items-center justify-around gap-4">
              <Button variant="ghost" onClick={() => navigate('/login')}>
                login
              </Button>    
            </div>
  )
}

export default LoginButton

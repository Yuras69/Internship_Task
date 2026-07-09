import { Button } from '@/components/ui/button'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
const navigate = useNavigate()
  return (
    <div>
      <div className="flex  items-center justify-end gap-4">
        <Button variant="default" onClick={() => navigate('/register')}>
          Register
        </Button>
      </div>
    </div>
  )
}

export default Register

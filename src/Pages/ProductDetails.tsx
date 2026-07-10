import React from 'react'
import { useParams } from 'react-router-dom'


const ProductDetails = () => {
    const paramsData = useParams()
console.log(paramsData.id)
  return (
    <div>
        <h1>User Details Page</h1>
        <p>ID: {paramsData.id}</p>
      
    </div>
  )
}

export default ProductDetails

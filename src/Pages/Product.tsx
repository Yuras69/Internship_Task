import AxiosInstance from '@/lib/AxiosInstance'
import React, { useState, useEffect } from 'react'



const Product = () => {
const [products, setProducts] = useState([])
const getProduct = async () => {
    const response = await AxiosInstance.get('/posts')
           console.log(response.data)
            if (response.status == 200) {
    setProducts(response.data)
}
else {
    console.log('Error')
}
}
useEffect(() => {
}, [])
console.log(getProduct())
  return (
    <div>
      <h1>Product Page</h1>
       {products.map((product) => (
        <div key={product.userId}>
          <h3>{product.title}</h3>
          <p>{product.id}</p>
        </div>
      ))}
    </div>
  )
}

export default Product

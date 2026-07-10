import AxiosInstance from '@/lib/AxiosInstance'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
  const [products, setProducts] = useState<any[]>([])

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await AxiosInstance.get('/posts')
        if (response.status === 200) {
          setProducts(response.data)
        }
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    }
    getProduct()
  }, [])

  return (
    <div>
      <h1>Product Page</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <p>{product.id}</p>
          <Link to={`/product/${product.id}`}>{product.id}</Link>
        </div>
      ))}
    </div>
  )
}

export default Product